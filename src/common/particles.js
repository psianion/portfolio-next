export const particlesData = {
  particles: {
    number: {
      value: 75,
      density: {
        enable: true,
        value_area: 540,
      },
    },
    color: {
      value: "#808080",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0,
        sync: false,
      },
    },
    size: {
      value: 2.5,
      random: true,
      anim: {
        enable: true,
        speed: 2.3976023976023977,
        size_min: 0.3,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 410.35677364878177,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.5,
      direction: "up",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 600,
      },
    },
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: true,
        mode: "bubble",
      },
      onclick: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 395.6043956043956,
        line_linked: {
          opacity: 0.024285402044830862,
        },
      },
      bubble: {
        distance: 145,
        size: 10,
        duration: 1.25,
        opacity: 1,
        speed: 3,
      },
      repulse: {
        distance: 500,
        duration: 0.6,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};
