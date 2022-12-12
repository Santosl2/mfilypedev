import { Variants } from "framer-motion";

export const aboutMeVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.1, 0.03, 0.515, 0.955],
      duration: 0.75,
    },
  },
};
