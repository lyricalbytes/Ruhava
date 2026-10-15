"use client";

import { motion } from "framer-motion";

interface GoldenLeafProps {
  captured?: boolean;
}

export default function GoldenLeaf({
  captured = false,
}: GoldenLeafProps) {
  return (
    <motion.div
      className="absolute bottom-3 right-2 z-10 flex items-center justify-center"
      animate={
        captured
          ? {
              opacity: 0,
              scale: 0.4,
              y: 8,
            }
          : {
              opacity: 1,
              scale: [1, 1.04, 1],
              y: [0, -4, 0],
            }
      }
      transition={
        captured
          ? {
              duration: 0.5,
              ease: "easeOut",
            }
          : {
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }
      }
    >
      {/* Glow */}
      <div className="absolute h-10 w-10 rounded-full bg-[#c6a15b]/10 blur-xl sm:h-14 sm:w-14" />

      {/* Leaf */}
      <svg
        viewBox="0 0 100 120"
        className="relative h-10 w-8 sm:h-14 sm:w-10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M83 9C51 12 23 30 17 59C12 84 30 105 49 111C69 101 85 79 88 53C90 35 87 19 83 9Z"
          fill="#B8944A"
          fillOpacity="0.88"
        />

        <path
          d="M20 91C36 70 54 49 82 13"
          stroke="#F4E8C8"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.8"
        />

        <path
          d="M37 69L25 67M49 53L38 49M61 38L51 32"
          stroke="#F4E8C8"
          strokeWidth="1.3"
          strokeLinecap="round"
          opacity="0.65"
        />
      </svg>
    </motion.div>
  );
}