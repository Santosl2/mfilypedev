import { Variants } from "framer-motion";

export const openHeaderVariants: Variants = {
  exit: {
    width: 0,
    transition: {
      duration: 1.2,
    },
  },
  hidden: {
    width: 0,
  },
  visible: {
    width: "auto",
    transition: {
      duration: 1.2,
      ease: "easeInOut",
    },
  },
};

export const listItemVariants: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
  },
};

export const svgVariants: Variants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
  },
};
