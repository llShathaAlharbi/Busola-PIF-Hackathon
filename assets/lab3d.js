import * as THREE from './three.module.js';
import {GLTFLoader} from './GLTFLoader.js';

const host=document.getElementById('model-stage');
const status=document.getElementById('model-status');
let renderer;
try{renderer=new THREE.WebGLRenderer({antialias:true,alpha:true});}
catch(error){status.textContent='العرض ثلاثي الأبعاد غير متاح على هذا الجهاز؛ اختر المكونات من القائمة أدناه.';throw error;}
renderer.setPixelRatio(Math.min(devicePixelRatio,2));
renderer.outputColorSpace=THREE.SRGBColorSpace;
renderer.toneMapping=THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure=1.4;
host.prepend(renderer.domElement);
const labelLines=document.createElementNS('http://www.w3.org/2000/svg','svg');labelLines.classList.add('label-lines');host.append(labelLines);
renderer.domElement.setAttribute('aria-label','مجسم المنتج ثلاثي الأبعاد؛ تتوفر قائمة الأجزاء كبديل قابل للاستخدام بلوحة المفاتيح');
const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(38,1,.1,100);
camera.position.set(9,8,12);camera.lookAt(0,2,0);
scene.add(new THREE.HemisphereLight(0xe8f5ff,0x345344,3));
const light=new THREE.DirectionalLight(0xffdfac,5);light.position.set(4,8,6);scene.add(light);
const rim=new THREE.DirectionalLight(0x8bdacd,4);rim.position.set(-5,4,-5);scene.add(rim);
const pedestal=new THREE.Mesh(new THREE.CylinderGeometry(4.8,5, .12,80),new THREE.MeshStandardMaterial({color:0x16362d,metalness:.5,roughness:.45}));pedestal.position.y=-.3;scene.add(pedestal);
const grid=new THREE.GridHelper(13,26,0x39574b,0x284137);grid.position.y=-.21;scene.add(grid);
let root=new THREE.Group();scene.add(root);
let parts=[],labels=[],fraction=0,target=0,requestToken=0,zoom=1,drag=false,moved=false,previous={x:0,y:0},tilt=0;
let product=window.busolaGetState().product;
const loader=new GLTFLoader();
const reduceMotion=matchMedia('(prefers-reduced-motion: reduce)').matches;
function disposeModel(){root.traverse(o=>{o.geometry?.dispose();if(o.material){(Array.isArray(o.material)?o.material:[o.material]).forEach(m=>m.dispose());}});scene.remove(root);root=new THREE.Group();scene.add(root);labels.forEach(l=>l.remove());labels=[];parts=[];}
function material(color){return new THREE.MeshStandardMaterial({color,metalness:.55,roughness:.32});}
function box(group,w,h,d,x,y,z,color){const mesh=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),material(color));mesh.position.set(x,y,z);group.add(mesh);return mesh;}
function otherProduct(p){
  p.parts.forEach((part,index)=>{
    const g=new THREE.Group();g.userData.part_id=part.id;root.add(g);
    if(p.id==='battery-modules'){
      if(part.id==='cells'){for(let i=0;i<5;i++)for(let j=0;j<4;j++){const cell=new THREE.Mesh(new THREE.CylinderGeometry(.27,.27,1.15,20),material(0x84a7ac));cell.position.set((i-2)*.65,.7,(j-1.5)*.65);g.add(cell);}}
      if(part.id==='busbars'){for(let i=0;i<4;i++)box(g,3,.06,.22,0,1.33,(i-1.5)*.65,0xbe964d);}
      if(part.id==='cooling')box(g,3.8,.12,3.2,0,.06,0,0x71a7b1);
      if(part.id==='case'){box(g,4,.1,3.4,0,-.09,0,0x45645b);for(let s of [-1,1])box(g,.12,1.4,3.4,s*1.96,.6,0,0x45645b);}
    }else if(p.id==='solar-panel'){
      if(part.id==='solar'){for(let i=0;i<6;i++)for(let j=0;j<4;j++)box(g,.68,.06,.65,(i-2.5)*.72,.13,(j-1.5)*.69,0x193f79);}
      if(part.id==='glass'){const m=box(g,4.5,.035,2.95,0,.21,0,0x8fbac8);m.material.transparent=true;m.material.opacity=.4;}
      if(part.id==='back')box(g,4.5,.08,2.95,0,.03,0,0xd0dbcc);
      if(part.id==='frame'){for(let s of [-1,1]){box(g,4.8,.22,.12,0,.08,s*1.54,0x97aaa2);box(g,.12,.22,3.2,s*2.34,.08,0,0x97aaa2);}}
    }else{
      if(part.id==='fins')for(let i=0;i<20;i++)box(g,.055,1.6,2.6,(i-9.5)*.19,.9,0,0x829a9d);
      if(part.id==='tubes')for(let i=0;i<4;i++){const t=new THREE.Mesh(new THREE.CylinderGeometry(.12,.12,4.4,16),material(0xc49855));t.rotation.z=Math.PI/2;t.position.set(0,.35+i*.4,0);g.add(t);}
      if(part.id==='headers')for(let s of [-1,1])box(g,.3,1.9,2.9,s*2.2,.9,0,0x4b7568);
    }
  });
}
function setupParts(){
  parts=[];labelLines.replaceChildren();root.traverse(o=>{if(o.userData.part_id)parts.push(o);});
  const heights=product.id==='semiconductor'?{leadframe:0,attach:.95,die:1.9,wires:3,mold:4.2}:Object.fromEntries(product.parts.map((p,i)=>[p.id,i*1.25]));
  for(const o of parts){o.userData.base=o.position.clone();o.userData.offset=heights[o.userData.part_id]||0;const label=document.createElement('button');label.className='model-label';label.dataset.part=o.userData.part_id;label.onclick=()=>window.busolaSelectPart(o.userData.part_id);host.append(label);labels.push(label);o.userData.label=label;const line=document.createElementNS('http://www.w3.org/2000/svg','line');labelLines.append(line);o.userData.line=line;}
  updateLabels();status.textContent='';
}
function updateLabels(){const state=window.busolaGetState();for(const o of parts){const p=product.parts.find(x=>x.id===o.userData.part_id);if(!p)continue;const label=o.userData.label;label.innerHTML=`<strong>${p.name}</strong>${state.mode==='demo'?`توطين ${p.local}٪ · حصة الطلب ${p.share}٪`:'النسب الوطنية: غير متاحة'}`;label.classList.toggle('selected',p.id===state.part.id);}}
async function loadProduct(p,animate){
  const token=++requestToken;product=p;disposeModel();fraction=0;target=0;root.rotation.y=-.35;
  status.textContent='جارٍ تحميل المجسم…';
  try{
    if(p.id==='semiconductor'){
      const gltf=await loader.loadAsync('./assets/semiconductor.glb');
      if(token!==requestToken){gltf.scene.traverse(o=>{o.geometry?.dispose();});return;}
      root.add(gltf.scene);
    }else otherProduct(p);
    setupParts();target=animate?1:0;document.getElementById('explode-range').value=target*100;
  }catch(error){status.textContent='تعذر تحميل المجسم. افتح الموقع عبر الخادم المحلي؛ جميع تفاصيل الأجزاء متاحة في القائمة.';console.error(error);}
}
document.getElementById('explode-button').onclick=()=>{target=1;document.getElementById('explode-range').value=100;};
document.getElementById('assemble-button').onclick=()=>{target=0;document.getElementById('explode-range').value=0;};
document.getElementById('explode-range').oninput=e=>target=Number(e.target.value)/100;
document.getElementById('model-reset').onclick=()=>{root.rotation.set(0,-.35,0);zoom=1;tilt=0;};
window.addEventListener('busola:product',e=>loadProduct(e.detail.product,e.detail.animate));
window.addEventListener('busola:part',updateLabels);
const raycaster=new THREE.Raycaster();
renderer.domElement.addEventListener('pointerdown',e=>{drag=true;moved=false;previous={x:e.clientX,y:e.clientY};renderer.domElement.setPointerCapture(e.pointerId);});
renderer.domElement.addEventListener('pointermove',e=>{if(!drag)return;const dx=e.clientX-previous.x,dy=e.clientY-previous.y;if(Math.abs(dx)+Math.abs(dy)>2)moved=true;root.rotation.y+=dx*.008;tilt=THREE.MathUtils.clamp(tilt+dy*.007,-.45,.55);previous={x:e.clientX,y:e.clientY};});
renderer.domElement.addEventListener('pointerup',e=>{drag=false;if(moved)return;const rect=renderer.domElement.getBoundingClientRect();raycaster.setFromCamera(new THREE.Vector2((e.clientX-rect.left)/rect.width*2-1,-(e.clientY-rect.top)/rect.height*2+1),camera);const hit=raycaster.intersectObject(root,true)[0];let obj=hit?.object;while(obj&&!obj.userData.part_id)obj=obj.parent;if(obj)window.busolaSelectPart(obj.userData.part_id);});
renderer.domElement.addEventListener('pointercancel',()=>drag=false);
renderer.domElement.addEventListener('wheel',e=>{e.preventDefault();zoom=THREE.MathUtils.clamp(zoom+e.deltaY*.001,.6,1.7);},{passive:false});
let lastW=0,lastH=0;
renderer.setAnimationLoop(()=>{
  if(!document.getElementById('composer').classList.contains('active'))return;
  const w=host.clientWidth,h=host.clientHeight;if(!w||!h)return;
  if(lastW!==w||lastH!==h){renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix();lastW=w;lastH=h;}
  fraction=reduceMotion?target:THREE.MathUtils.lerp(fraction,target,.075);
  for(const o of parts)o.position.y=o.userData.base.y+fraction*o.userData.offset;
  root.rotation.x=tilt;
  const narrow=w<500?1.3:1;camera.position.set(9*zoom*narrow,8*zoom*narrow,12*zoom*narrow);camera.lookAt(0,1.25+fraction*1.2,0);
  root.updateMatrixWorld(true);
  const previousY=[h+60,h+60];
  for(const [i,o] of parts.entries()){
    const center=new THREE.Box3().setFromObject(o).getCenter(new THREE.Vector3());center.project(camera);
    const x=(center.x*.5+.5)*w,y=(-center.y*.5+.5)*h;
    const side=i%2,lx=side?w-85:85,ly=THREE.MathUtils.clamp(Math.min(y,previousY[side]-60),35,h-35);previousY[side]=ly;
    const label=o.userData.label;label.style.left=lx+'px';label.style.top=ly+'px';label.style.display=fraction>.25?'block':'none';
    const line=o.userData.line;line.setAttribute('x1',x);line.setAttribute('y1',y);line.setAttribute('x2',lx);line.setAttribute('y2',ly);line.style.display=fraction>.25?'block':'none';
  }
  renderer.render(scene,camera);
});
loadProduct(product,true);
