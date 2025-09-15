const io=new IntersectionObserver(
  es=>es.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('visible') }),
  {threshold:.15}
);
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
