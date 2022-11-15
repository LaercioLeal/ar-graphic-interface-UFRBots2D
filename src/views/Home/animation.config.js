const animate = {
  heading: {
    container: {
      visible: {
        transition: {
          delayChildren: 1,
          staggerChildren: 0,
        },
      },
    },
    titles: { visible: { opacity: 1, x: 0 }, hidden: { x: 200, opacity: 0 } },
  },
  shortcuts: {
    container: {
      visible: {
        transition: {
          delayChildren: 0.5,
          staggerChildren: 0.2,
        },
      },
    },
    items: {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
      },
    },
  },
};

export default animate;
