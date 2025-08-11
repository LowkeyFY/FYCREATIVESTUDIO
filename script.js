document.getElementById("menu-toggle").addEventListener("click", function () {
  const nav = document.getElementById("nav-links");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
});

// Scroll Animation
const faders = document.querySelectorAll('.fade-in');

const appearOptions = { threshold: 0.2 };

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
