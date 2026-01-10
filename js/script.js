document.querySelectorAll('a.scroll').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});


const tilt = document.querySelector('.tilt');
tilt.addEventListener('mousemove', e => {
    const rect = tilt.getBoundingClientRect();
    const x = e.clientX - rect.left;   // координата X внутри блока
    const y = e.clientY - rect.top;    // координата Y внутри блока
    const halfW = rect.width / 2;
    const halfH = rect.height / 2;
    const rotX = ((y - halfH) / halfH) * 10; // наклоны от -10 до +10°
    const rotY = ((x - halfW) / halfW) * -10;
    tilt.firstElementChild.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
});
tilt.addEventListener('mouseleave', () => {
    tilt.firstElementChild.style.transform = 'rotateX(0) rotateY(0)';
});


