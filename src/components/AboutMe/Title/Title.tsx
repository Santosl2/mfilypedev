"use client";

import { motion } from "framer-motion";
import { containerVariants, titleVariants } from "./Title.variants";

export function Title() {
  const title = "Hey, I'm Matheus Filype";

  const titleArray = title.split(" ");

  const words = titleArray.map(word => {
    return word.split("");
  });

  //  adding spacing
  words.map(word => {
    return word.push("\u00A0");
  });

  return (
    <motion.div
      className="overflow-hidden bg-theme-secondary text-3xl"
      variants={containerVariants}
      animate="visible"
      initial="hidden"
    >
      {words.map((letter, index) => (
        <motion.span
          className="inline-block"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          transition={{
            ease: [0.455, 0.03, 0.515, 0.955],
            duration: 0.75,
            delay: index * 0.1,
          }}
          key={index}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
}
