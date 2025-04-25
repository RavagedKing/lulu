// Fond pastel changeant au scroll
const colors = ["#FADBD8", "#D6EAF8", "#D5F5E3", "#FCF3CF", "#F5EEF8"];
let lastIndex = -1;

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const index = Math.floor(scrollY / 500) % colors.length;
  
  if (index !== lastIndex) {
    document.body.style.backgroundColor = colors[index];
    lastIndex = index;
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
