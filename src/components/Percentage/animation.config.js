const duration = 0.5;

const ANIMATION = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration,
    },
  },
};

export default ANIMATION;
