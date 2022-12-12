"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { LIST_ITEMS } from "./constants";
import { OpenHeaderProps } from "./OpenHeader.types";
import {
  listItemVariants,
  openHeaderVariants,
  svgVariants,
} from "./OpenHeader.variants";

export function ListItem() {
  return (
    <>
      {LIST_ITEMS.map((item, index) => (
        <Link href={item.url} target={item.target ?? "_parent"}>
          <motion.li
            className="text-2xl underline cursor-pointer underline-offset-2 mb-5"
            variants={listItemVariants}
            animate="visible"
            initial="hidden"
            transition={{
              duration: 0.7,
              delay: index * 0.2,
            }}
            key={index}
          >
            {item.title}
          </motion.li>
        </Link>
      ))}
    </>
  );
}

export function OpenHeader({ onRequestClose }: OpenHeaderProps) {
  const [showItems, setShowItems] = useState(false);

  return (
    <motion.div
      className="fixed inset-0 w-screen h-screen flex items-center justify-center flex-col bg-theme-tertiary text-purple-400 z-10 text-center overflow-hidden"
      variants={openHeaderVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onAnimationComplete={() => setShowItems(true)}
    >
      {showItems && (
        <>
          <motion.svg
            className="absolute right-5 top-5 cursor-pointer hover:fill-white transition-all"
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            height="32"
            width="32"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => {
              setShowItems(false);
              onRequestClose();
            }}
          >
            <motion.path
              variants={svgVariants}
              animate="visible"
              initial="hidden"
              exit="hidden"
              d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"
            ></motion.path>
          </motion.svg>

          <motion.ul variants={openHeaderVariants} animate="visible">
            <ListItem />
          </motion.ul>
        </>
      )}
    </motion.div>
  );
}
