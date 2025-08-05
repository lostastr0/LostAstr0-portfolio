particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 1200 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.6, random: true },
    size: { value: 3.6, random: true },
    line_linked: {
      enable: true,
      distance: 128,
      color: "#ffffff",
      opacity: 0.45,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out"
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: { onhover: { enable: true }, onclick: { enable: false }, resize: true }
  },
  retina_detect: true
});
