import { motion } from "framer-motion";
import { WrapperProps } from "./Wraper.types";
import { wrapperVariants } from "./Wrapper.variants";

export function Wrapper({ children }: WrapperProps) {
  return (
    <motion.section
      variants={wrapperVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="p-5"
    >
      {children}
    </motion.section>
  );
}
