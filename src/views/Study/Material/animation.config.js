const duration = 0.5;

const ANIMATION = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration,
      delay: 1.5,
    },
  },
};

export default ANIMATION;
