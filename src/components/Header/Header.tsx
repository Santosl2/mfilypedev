"use client";

import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { OpenHeader } from "./OpenHeader/OpenHeader";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute">
      <AnimatePresence initial={false}>
        {isOpen && (
          <OpenHeader key="header" onRequestClose={() => setIsOpen(false)} />
        )}

        {!isOpen && (
          <svg
            className="cursor-pointer ml-5 mt-5 relative"
            onClick={() => setIsOpen(true)}
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 1024 1024"
            height="32"
            width="32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
          </svg>
        )}
      </AnimatePresence>
    </header>
  );
}
