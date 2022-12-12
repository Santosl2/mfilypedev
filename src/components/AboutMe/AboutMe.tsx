"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { aboutMeVariants } from "./AboutMe.variants";
import { MyStack } from "./MyStack";
import { Title } from "./Title";

export function AboutMe() {
  return (
    <motion.section
      className="flex items-center justify-center flex-col text-center p-5"
      variants={aboutMeVariants}
      initial="hidden"
      animate="visible"
    >
      <div>
        <Image
          src="/images/me.png"
          alt="mfilype.dev"
          width={200}
          height={200}
          className="m-auto"
        />
        <Title />

        <span className="leading-[3rem] text-purple-700">
          Middle Front End Developer
        </span>

        <p>
          My personal goal is to put my knowledge into practice and help people
          solve their problems. I have dedicated myself to studying and
          improving my knowledge in technology.
        </p>
      </div>
      <MyStack />
    </motion.section>
  );
}
