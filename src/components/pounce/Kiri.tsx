"use client";

import { motion } from "framer-motion";

interface KiriProps {
  progress: number;
  state?: "idle" | "stalk" | "run" | "leap";
  onLeapComplete?: () => void;
}

export default function Kiri({
  progress,
  state = "idle",
  onLeapComplete,
}: KiriProps) {
  const clampedProgress = Math.min(Math.max(progress, 0), 1);

  return (
    <motion.div
      className="absolute bottom-0 z-20"
      animate={{
        left: `calc(${clampedProgress * 100}% - 64px)`,
      }}
      transition={{
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      onAnimationComplete={() => {
        if (state === "leap") {
          onLeapComplete?.();
        }
      }}
    >
      <div className="kiri-viewport">
        <img
          src="/kiri/idle-sprite.png"
          alt=""
          className="kiri-sprite-img"
        />
      </div>
    </motion.div>
  );
}