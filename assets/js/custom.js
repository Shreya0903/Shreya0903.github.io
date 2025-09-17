// Reveal on scroll
const obs=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('visible')),
  {threshold:.08});
document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
});

// Arrow keys swipe (desktop)
document.addEventListener('keydown',e=>{
  if(!['ArrowRight','ArrowLeft'].includes(e.key)) return;
  const wrap=document.querySelector('.swipe-wrap'); if(!wrap) return;
  const dx = e.key==='ArrowRight' ? 1 : -1;
  wrap.scrollBy({left:dx*wrap.clientWidth, behavior:'smooth'});
});
