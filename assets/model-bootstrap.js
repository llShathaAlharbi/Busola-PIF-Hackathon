/* Report actual module-load failures; do not replace WebGL errors with a timeout. */
(() => {
  const status = document.getElementById('model-status');
  if (location.protocol === 'file:') {
    status.textContent = 'العرض ثلاثي الأبعاد يحتاج الخادم المحلي. شغّل Start-Busola.cmd ثم افتح http://127.0.0.1:8080/';
    return;
  }
  const entry = new URL('./lab3d.js', document.currentScript.src);
  import(entry.href).catch(error => {
    console.error('Busola 3D initialization:', error);
    if (document.querySelector('#model-stage canvas')) return;
    if (status.textContent.includes('غير متاح على هذا الجهاز')) return;
    status.textContent = 'تعذر تحميل ملفات العرض ثلاثي الأبعاد. تأكد من تشغيل الخادم ثم أعد المحاولة. ';
    const retry = document.createElement('button');
    retry.className = 'button';
    retry.textContent = 'إعادة المحاولة';
    retry.onclick = () => location.reload();
    status.append(retry);
  });
})();
