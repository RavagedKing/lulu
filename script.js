// Fond pastel changeant au scroll
const colors = ["#deb0a9", "#f5d1d1", "#f0e0dc", "#dec1ba"];
let lastIndex = -1;

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const index = Math.floor(scrollY / 500) % colors.length;

  if (index !== lastIndex) {
    document.body.style.backgroundColor = colors[index];
    lastIndex = index;
  }

  const scrollBtn = document.getElementById('scrollTopBtn');
  if (scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

// Fade-in au scroll
const fadeEls = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

fadeEls.forEach(el => observer.observe(el));

// Lightbox zoom
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const zoomables = document.querySelectorAll('.zoomable');

zoomables.forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightbox.classList.add('visible');
  });
});

lightbox.addEventListener('click', () => {
  lightbox.classList.remove('visible');
});

document.addEventListener('keydown', (e) => {
  if (e.key === "Escape" && lightbox.classList.contains('visible')) {
    lightbox.classList.remove('visible');
  }
});

// Scroll to top
const scrollBtn = document.getElementById('scrollTopBtn');
scrollBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Transition douce entre pages
const links = document.querySelectorAll('a');

links.forEach(link => {
  link.addEventListener('click', function(e) {
    const href = link.getAttribute('href');
    if (href && !href.startsWith('#')) {
      e.preventDefault();
      document.querySelector('.transition').style.opacity = 1;
      setTimeout(() => {
        window.location.href = href;
      }, 500);
    }
  });
});

window.addEventListener('load', () => {
  document.querySelector('.transition').style.opacity = 0;
});

// Bloquer clic droit sur les images
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('contextmenu', (e) => {
    e.preventDefault();
  });
});
