// tsparticles-config.js

tsParticles.load("tsparticles", {
  background: {
    color: "#000000"
  },
  fpsLimit: 60,
  particles: {
    number: {
      value: 100,
      density: { enable: true, value_area: 1200 }
    },
    color: {
      value: ["#178aff", "#235bb6", "#a0c8ff"]
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.8,
      random: true,
      anim: { enable: true, speed: 1.5, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 2.2,
      random: true,
      anim: { enable: true, speed: 1.5, size_min: 0.5, sync: false }
    },
    move: {
      enable: true,
      speed: 0.15,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false
    },
    line_linked: { enable: false }
  },
  interactivity: {
    detectsOn: "canvas",
    events: {
      onhover: { enable: false },
      onclick: { enable: false },
      resize: true
    }
  },
  retina_detect: true
});
