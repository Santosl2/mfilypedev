import { motion } from "framer-motion";
import { MY_STACKS } from "./constants";
import { stackVariants } from "./MyStack.variants";

export function MyStack() {
  return (
    <div className="mt-24">
      <h3 className="text-theme-tertiary">Some of my knowledge</h3>

      <motion.div className="flex gap-2 overflow-hidden">
        {MY_STACKS.map((stack, index) => (
          <motion.img
            key={stack.name}
            src={`./images/icons/stack/${stack.name}.svg`}
            alt={stack.title}
            className="w-10 h-10 cursor-pointer"
            onClick={() => window.open(stack.url, "_blank")}
            variants={stackVariants}
            animate={"visible"}
            initial={"hidden"}
            title={stack.title}
            transition={{
              ease: [0.455, 0.03, 0.515, 0.955],
              duration: 0.7,

              delay: index * 0.1,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
