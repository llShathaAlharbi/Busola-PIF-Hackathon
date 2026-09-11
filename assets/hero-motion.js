(() => {
  const field = document.querySelector('.hero-ai .neural-field');
  if (!field) return;
  field.replaceChildren();
  const canvas = document.createElement('canvas');
  canvas.setAttribute('aria-hidden', 'true');
  field.append(canvas);
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let width = 0, height = 0, frame = 0, visible = false, time = 0, last = 0;
  const points = Array.from({length: 34}, (_, i) => ({
    x: ((i * 137.508) % 360) / 360,
    y: ((i * 83.17) % 240) / 240,
    phase: i * 1.73,
  }));
  function draw() {
    ctx.clearRect(0, 0, width, height);
    const dark = document.documentElement.dataset.theme === 'dark';
    const green = dark ? '136,201,175' : '33,105,81';
    const gold = dark ? '218,186,128' : '153,110,47';
    const nodes = points.map(p => ({
      x: p.x * width + Math.sin(time * .16 + p.phase) * 22,
      y: p.y * height + Math.cos(time * .19 + p.phase) * 17,
    }));
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j], distance = Math.hypot(a.x - b.x, a.y - b.y);
        if (distance > 155) continue;
        ctx.strokeStyle = `rgba(${green},${(1-distance/155)*.38})`;
        ctx.lineWidth = .8;
        ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke();
        if ((i+j)%7 === 0) {
          const travel = (time*.1+i*.17)%1;
          ctx.fillStyle = `rgba(${gold},.65)`;
          ctx.beginPath(); ctx.arc(a.x+(b.x-a.x)*travel,a.y+(b.y-a.y)*travel,1.8,0,Math.PI*2); ctx.fill();
        }
      }
      ctx.fillStyle = `rgba(${i%5===0?gold:green},.65)`;
      ctx.beginPath();ctx.arc(a.x,a.y,i%5===0?2.5:1.6,0,Math.PI*2);ctx.fill();
    }
  }
  function tick(now) {
    frame = 0;
    time += last ? Math.min((now-last)/1000,.05) : 0;
    last = now; draw();
    if (visible && !document.hidden && !reduced.matches) frame = requestAnimationFrame(tick);
  }
  function resume() {
    cancelAnimationFrame(frame); frame = 0; last = 0;
    draw();
    if (visible && !document.hidden && !reduced.matches) frame = requestAnimationFrame(tick);
  }
  new ResizeObserver(() => {
    width = field.clientWidth; height = field.clientHeight;
    const ratio = Math.min(devicePixelRatio || 1, 2);
    canvas.width = Math.round(width*ratio);canvas.height = Math.round(height*ratio);
    ctx.setTransform(ratio,0,0,ratio,0,0);resume();
  }).observe(field);
  new IntersectionObserver(entries => {visible=entries[0].isIntersecting;resume();}).observe(field);
  new MutationObserver(draw).observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});
  document.addEventListener('visibilitychange',resume);
  reduced.addEventListener('change',resume);
})();
