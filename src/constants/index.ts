import type { ISourceOptions } from "tsparticles-engine";

export enum PageRoute {
  DEFAULT = "/",
  SERVICES = "/services",
  COMPANY = "/company",
  BLOG = "/blog",
  DOCS = "/docs",
}

export const NAV_ITEMS: { route: PageRoute; name: string }[] = [
  {
    route: PageRoute.DEFAULT,
    name: "Home",
  },
  {
    route: PageRoute.SERVICES,
    name: "Services",
  },
  {
    route: PageRoute.COMPANY,
    name: "Company",
  },
  {
    route: PageRoute.BLOG,
    name: "Blog",
  },
  {
    route: PageRoute.DOCS,
    name: "Docs",
  },
];

export const SERVICES_PARTICLES_OPTIONS: ISourceOptions = {
  fullScreen: false,
  fpsLimit: 60,
  particles: {
    number: {
      value: 88,
      density: {
        enable: true,
        value_area: 700,
      },
    },
    color: {
      value: ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"],
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 15,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1.5,
        opacity_min: 0.15,
        sync: false,
      },
    },
    size: {
      value: 2.5,
      random: false,
      anim: {
        enable: true,
        speed: 2,
        size_min: 0.15,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 110,
      color: "#33b1f8",
      opacity: 0.25,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1.6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "repulse",
      },
      onclick: {
        enable: false,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
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

export const BG_PARTICLES_OPTIONS: ISourceOptions = {
  detectRetina: false,
  fullScreen: false,
  fpsLimit: 60,
  interactivity: {
    detectsOn: "canvas",
    events: {
      onHover: {
        enable: true,
        mode: "bubble",
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 40,
        duration: 2,
        opacity: 8,
        size: 6,
        speed: 3,
      },
    },
  },
  particles: {
    color: {
      value: "#ff0000",
      animation: {
        enable: true,
        speed: 20,
        sync: true,
      },
    },
    lineLinked: {
      blink: false,
      color: "random",
      consent: false,
      distance: 30,
      enable: true,
      opacity: 0.3,
      width: 1,
    },
    move: {
      attract: {
        enable: false,
        rotate: {
          x: 600,
          y: 1200,
        },
      },
      bounce: false,
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: true,
      speed: 0.5,
      straight: false,
    },
    number: {
      density: {
        enable: false,
        area: 2000,
      },
      limit: 0,
      value: 200,
    },
    opacity: {
      animation: {
        enable: true,
        minimumValue: 0.05,
        speed: 2,
        sync: false,
      },
      random: false,
      value: 1,
    },
    shape: {
      type: "circle",
    },
    size: {
      animation: {
        enable: false,
        minimumValue: 0.1,
        speed: 40,
        sync: false,
      },
      random: true,
      value: 1.5,
    },
  },
};

export const LOGO_PARTICLES_OPTIONS: ISourceOptions = {
  detectRetina: true,
  fullScreen: false,
  interactivity: {
    detectsOn: "canvas",
    events: {
      onClick: {
        enable: false,
        mode: "push",
      },
      onDiv: {
        elementId: "repulse-div",
        enable: false,
        mode: "repulse",
      },
      onHover: {
        enable: true,
        mode: "bubble",
        parallax: {
          enable: false,
          force: 2,
          smooth: 10,
        },
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 70,
        duration: 10,
        opacity: 3,
        size: 12,
      },
      connect: {
        distance: 80,
        links: {
          opacity: 0.5,
        },
        radius: 60,
      },
      grab: {
        distance: 400,
        links: {
          opacity: 1,
        },
      },
      push: {
        quantity: 4,
      },
      remove: {
        quantity: 2,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      slow: {
        active: false,
        radius: 0,
        factor: 1,
      },
    },
  },
  particles: {
    color: {
      value: "#EB2127",
    },
    links: {
      blink: false,
      color: "random",
      consent: false,
      distance: 50,
      enable: true,
      opacity: 0.4,
      width: 2,
    },
    move: {
      enable: true,
      outModes: "bounce",
      speed: 1,
    },
    number: {
      limit: 0,
      value: 400,
    },
    opacity: {
      animation: {
        enable: true,
        speed: 2,
        sync: false,
      },
      value: {
        min: 0.05,
        max: 0.4,
      },
    },
    shape: {
      type: "circle",
    },
    size: {
      value: 2,
    },
  },
  polygon: {
    draw: {
      enable: true,
      lineColor: "rgba(235,33,39,0.2)",
      lineWidth: 3,
    },
    enable: true,
    move: {
      radius: 15,
    },
    position: {
      x: 15,
      y: 0,
    },
    inline: {
      arrangement: "equidistant",
    },
    scale: 13,
    type: "inline",
    url: "https://upload.wikimedia.org/wikipedia/commons/2/21/Eo_circle_pink_letter-p.svg",
  },
};
