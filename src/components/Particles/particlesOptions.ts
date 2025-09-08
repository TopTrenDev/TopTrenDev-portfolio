export const heroOptions = {
  autoPlay: true,

  fullScreen: {
    enable: false,
    zIndex: 0,
  },

  detectRetina: true,
  fpsLimit: 120,

  interactivity: {
    detectsOn: "#hero",
    events: {
      onDiv: [
        {
          selectors: "#repulse-div",
          enable: true,
          mode: "bounce",
          type: "circle",
        },
        {
          selectors: "#repulse-div",
          enable: true,
          mode: "repulse",
          type: "circle",
        },
        {
          selectors: "#repulse-span",
          enable: true,
          mode: "repulse",
          type: "circle",
        },
        {
          selectors: "#repulse-span",
          enable: true,
          mode: "bounce",
          type: "circle",
        },
        {
          selectors: "#togglebutton",
          enable: true,
          mode: "repulse",
          type: "circle",
        },
        {
          selectors: "#togglebutton",
          enable: true,
          mode: "bounce",
          type: "circle",
        },
        {
          selectors: "#scroller",
          enable: true,
          mode: "repulse",
          type: "circle",
        },
        {
          selectors: "#scroller",
          enable: true,
          mode: "bounce",
          type: "circle",
        },
      ],

      onHover: {
        enable: true,
        mode: ["bubble", "attract"],
        parallax: {
          enable: true,
          force: 350,
          smooth: 20,
        },
      },
      onClick: {
        enable: true,
        mode: "push",
      },
      resize: {
        delay: 0.5,
        enable: true,
      },
    },

    modes: {
      bounce: {
        distance: 150,
      },
      bubble: {
        distance: 200,
        duration: 0.6,
        size: 60,
        color: {
          value: ["#22c55e", "#4ade80", "#16a34a"],
        },
        opacity: 12,
        mix: true,
      },
      attract: {
        distance: 300,
        duration: 0.4,
        speed: 1,
        factor: 1,
      },
      repulse: {
        distance: 300,
        factor: 300,
        speed: 2,
        maxSpeed: 80,
      },
      push: {
        quantity: 4,
      },
    },
  },

  particles: {
    collisions: {
      enable: true,
      mode: "bounce",
    },
    color: {
      value: ["#22c55e", "#4ade80", "#16a34a", "#15803d", "#166534"],
    },
    move: {
      angle: {
        offset: 0,
        value: 90,
      },
      center: {
        x: 50,
        y: 50,
        mode: "percent",
        radius: 0,
      },
      direction: ["top-left", "bottom-left", "bottom-right", "top-right"],
      drift: 0,
      enable: true,
      random: true,
      size: false,
      speed: 1.5,
      outMode: "bounce",
      trail: {
        enable: true,
        length: 10,
        fill: {
          color: {
            value: "#22c55e",
          },
        },
      },
    },
    number: {
      limit: 0,
      value: 50,
    },

    opacity: {
      random: {
        enable: true,
        minimumValue: 0.3,
        maxValue: 0.8,
      },
      value: 0.7,
      animation: {
        count: 0,
        enable: true,
        speed: 0.5,
        decay: 0,
        sync: true,
        destroy: "none",
        startValue: "random",
      },
    },

    shape: {
      type: ["character", "circle", "triangle"],
      character: [
        {
          fill: true,
          font: "Font Awesome 6 Brands",
          style: "",
          value: ["\uf3c6", "\uf17c", "\uf791", "\uf1b2", "\uf2db"],
          weight: "400",
        },
      ],
      polygon: {
        sides: 6,
      },
    },

    size: {
      random: {
        enable: true,
        minimumValue: 15,
        maxValue: 45,
      },
      animation: {
        count: 0,
        enable: true,
        speed: 0.5,
        decay: 0,
        sync: true,
        destroy: "none",
        startValue: "random",
      },
    },

    links: {
      blink: false,
      color: {
        value: "#22c55e",
      },
      consent: true,
      distance: 150,
      enable: true,
      frequency: 15,
      opacity: 0.6,
      width: 2,
      triangles: {
        enable: true,
        opacity: 0.1,
      },
    },
    
    twinkle: {
      particles: {
        enable: true,
        frequency: 0.05,
        opacity: 1,
      },
      stars: {
        enable: true,
        frequency: 0.05,
        opacity: 1,
      },
    },
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  smooth: true,
};
