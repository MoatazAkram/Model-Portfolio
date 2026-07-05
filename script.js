
  const cursor = document.getElementById('cursor');
  const video = document.getElementById("heroVideo");
  const navbar = document.getElementById("navbar");

  let mx = 0, my = 0

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top = my + 'px';
  });

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.stat-box, .gallery-item').forEach(el => observer.observe(el));

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });


function playVideo() {
  video.play().catch(() => {});
}

window.addEventListener("load", playVideo);

document.addEventListener("visibilitychange", () => {
  if (!document.hidden) {
    playVideo();
  }
});
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navLinks.classList.toggle('active');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navLinks.classList.remove('active');
  });
});
  
