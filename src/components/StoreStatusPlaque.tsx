"use client";

import { motion } from "framer-motion";

export default function StoreStatusPlaque() {
  return (
    <motion.div
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="
    pointer-events-none
  absolute
  left-1/2
  top-[0.48%]
  z-30
  w-[min(78vw,250px)]
  -translate-x-1/2
  sm:top-[66%]
  sm:w-[290px]
  lg:left-auto
  lg:right-[40%]
  lg:top-[0.92%]
  lg:w-[300px]
  lg:translate-x-0
  "
>

    <motion.div
    animate={{
      rotate: [-0.7, 0.7, -0.45, 0.55, -0.7],
      y: [0, 0.8, 0, 0.5, 0],
    }}
    transition={{
      duration: 5.5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror",
    }}
    style={{ transformOrigin: "50% 0%" }}
    className="
  pointer-events-none
  relative
  z-40
  w-full
"
  >

    
      {/* Nail */}
<div
  aria-hidden="true"
  className="
    absolute
    -top-20
    left-1/2
    z-30
    h-3
    w-3
    -translate-x-1/2
    rounded-full
    bg-[#29251F]
    shadow-[0_1px_3px_rgba(0,0,0,0.35)]
  "
/>

{/* Jute twine */}
<div
  aria-hidden="true"
  className="
    pointer-events-none
    absolute
    -top-[60px]
    left-1/2
    z-20
    h-[74px]
    w-[76%] 
    max-w-[190px]
    -translate-x-1/2
  "
>
  {/* left strand */}
  <span
    className="
      absolute
      left-[22%]
      top-0
      h-[78px]
      w-px
      origin-top
      rotate-[34deg]
      bg-[#967653]
    "
  />

  {/* right strand */}
  <span
    className="
      absolute
      right-[22%]
      top-0
      h-[78px]
      w-px
      origin-top
      -rotate-[34deg]
      bg-[#967653]
    "
  />
</div>

{/* Twine knots */}
<span
  aria-hidden="true"
  className="
    absolute
    left-[10%]
    lg:left-[16%]
    top-[3px]
    z-30
    h-2
    w-2
    rounded-full
    bg-[#80603F]
  "
/>

<span
  aria-hidden="true"
  className="
    absolute
    right-[10%]
    lg:right-[16%]
    top-[3px]
    z-30
    h-2
    w-2
    rounded-full
    bg-[#80603F]
  "
/>

      {/* Plaque */}
      <div
        className="
          relative
          mt-[48px]
sm:mt-[55px]
          flex
          min-h-[118px]
        sm:min-h-[130px]
          items-center
          justify-center
          overflow-hidden
          border
          border-[#624A35]
          bg-[#80654D]
          px-5
py-6
sm:px-9
sm:py-7
          text-center
          shadow-[0_14px_30px_rgba(0,0,0,0.18)]
          
          
        "

        // bg-[#866344]

        
      >

       

        {/* Subtle wood grain */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-20
            [background-image:repeating-linear-gradient(7deg,transparent_0px,transparent_13px,rgba(255,255,255,0.14)_14px,transparent_15px)]
          "
        />

        {/* Inner border */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-3
            border
            border-[#D7BE9D]/40
          "
        />

        <div className="relative z-10">
          <p
            className="
              font-dancing
              text-[18px]
              font-normal
              leading-[1.05]
              tracking-[-0.02em]
              text-[#F8F0E4]
              sm:text-[22px]
            "
          >
            Opening 18 October
          </p>

          <div
            aria-hidden="true"
            className="mx-auto my-3 h-px w-9 bg-[#D7BE9D]/60"
          />

          <p
            className="
              font-lato
              text-[8px]
sm:text-[9px]
              uppercase
              tracking-[0.2em]
              text-[#E4D4BD]
              
            "
          >
            The First Pounce Begins
          </p>
        </div>
      </div>
    </motion.div>
    </motion.div>
  );
}