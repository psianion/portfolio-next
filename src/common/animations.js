export const fadeInLeft = {
  initial: {
    x: 60,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    trasition: {
      duration: 0.3,
      ease: "ease-in-out",
    },
  },
};

export const fadeInRight = {
  initial: {
    x: -60,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    trasition: {
      duration: 0.3,
      ease: "ease-in-out",
    },
  },
};

export const stagger3 = {
  animate: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const stagger1 = {
  animate: {
    transition: {
      staggerChildren: 0.075,
    },
  },
};
