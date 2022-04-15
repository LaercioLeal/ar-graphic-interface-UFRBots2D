const duration = 1;
const delay = 1;

const ANIMATION = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay,
      ease: "easeInOut",
      duration,
    },
  },
};

export default ANIMATION;
