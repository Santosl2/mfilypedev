import { Variants } from "framer-motion";

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0,
      staggerChildren: 1,
    },
  },
};

export const titleVariants: Variants = {
  hidden: {
    y: "200%",
  },
  visible: {
    y: 0,
  },
};
