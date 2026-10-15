"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FirstSoulLayeringBalm() {
  return (
    <section
      id="first-soul"
      className="relative z-20 overflow-visible bg-[#F9F8F3] pb-20 pt-0 sm:px-8 sm:pb-28 lg:px-12 lg:pb-[70px]"
    >

        

      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* PRODUCT IMAGE */}
        <div className="relative order-2 flex justify-center lg:order-1 lg:justify-start ">
          {/* Circle */}
          <motion.div
            // initial={{ opacity: 0, y: 35, scale: 0.97 }}
            // whileInView={{ opacity: 1, y: 0, scale: 1 }}
            // viewport={{ once: true, amount: 0.25 }}
            // transition={{
            //   duration: 1,
            //   ease: [0.22, 1, 0.36, 1],
            // }}
            className="
              relative
  z-30
  -mt-4
  aspect-square
  w-[138vw]
  max-w-[390px]
  overflow-hidden
  rounded-full
  bg-[#E9E3D9]
  -ml-13

  sm:-mt-8
  sm:w-[58vw]
  sm:max-w-[420px]

  lg:-mt-10
  lg:ml-8
  lg:w-[40vw]
  lg:max-w-[560px]
              
            "
          >
            <Image
              src="/assets/Ruhava Perfume in Golden Light.webp"
              alt="First Soul Layering Balm by Ruhava"
              fill
              priority
              sizes="
                (min-width: 1024px) 43vw,
                (min-width: 640px) 78vw,
                88vw
              "
              className="object-cover"
            />

            {/* subtle editorial overlay */}
            <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-black/5" />
          </motion.div>
        </div>

        {/* COPY */}
        <motion.div
        //   initial={{ opacity: 0, y: 25 }}
        //   whileInView={{ opacity: 1, y: 0 }}
        //   viewport={{ once: true, amount: 0.3 }}
        //   transition={{
        //     duration: 0.8,
        //     delay: 0.15,
        //     ease: [0.22, 1, 0.36, 1],
        //   }}
          className="order-1
  w-full
  max-w-[550px]
  px-5
  sm:px-8
  lg:order-2
  lg:pl-4
  lg:px-0
  -mt-10"
        >
          {/* Eyebrow */}
          <p className="hidden font-lato text-[9px] uppercase tracking-[0.28em] text-[#777168]">
            La Collection Littéraire
          </p>

          {/* Product name */}
          <h2 className="mt-6
  scale-y-90
  font-larken
  text-[1.87rem]
  leading-[0.95]
  tracking-[-0.035em]
  text-[#25231F]
  sm:text-[3.5rem]
  lg:text-[2.5rem]
  mb-2
  sm:mb-4">
            First Soul Layering Balm
          </h2>

          {/* <p className="mt-3 font-lato text-[10px] uppercase tracking-[0.24em] text-[#777168]">
            Layering Balm
          </p> */}

          {/* Divider */}
          <div className="hidden my-2 h-px w-10 bg-[#25231F]/20 sm:my-4" />

          {/* Description */}
          <p className="max-w-[470px]
  scale-y-90
  font-lato
  text-[0.81rem]
  leading-[1.55]
  text-[#25231F]
  sm:text-[1.2rem]
  lg:text-[1rem]
  lg:mr-50
  mr-25
  ">
            Meet First Soul, a pocket-sized layering balm: a warm, luminous
            accord that lingers softly, travels effortlessly, and turns
            everyday moments into something quietly unforgettable wherever
            you go.
          </p>

          {/* CTA */}
          <div className="mt-4 sm:mt-4">
            <a
              href="#expressions"
              className="
                inline-flex
                items-center
                justify-center
                font-bold
                font-lato
                text-[0.58rem]
                uppercase
                tracking-[0.21rem]
                text-[#25231F]
                cursor-pointer
                underline
                underline-offset-5
              "
            >
              Pre-order First Soul
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}