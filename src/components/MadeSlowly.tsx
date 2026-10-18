"use client";

import Image from "next/image";
// import { motion } from "framer-motion";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from 'next/link';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const AccordionItem = ({ title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-grey/20 mx-5">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-4 cursor-pointer text-charcoal"
      >
        <span className="font-larken tracking-widest text-[13px] uppercase text-charcoal scale-y-85 py-0.5 ">{title}</span>
        <ChevronDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} size={16}/>
      </button>
      {isOpen && <div className=" pb-6 font-lato text-sm text-grey">{children}</div>}
    </div>
  );
};

const AccordionItem2 = ({ title, children }: AccordionProps) => {
  const [isClosed, setIsOpen] = useState(true);
  return (
    <div className=" mx-5">
      <button 
        onClick={() => setIsOpen(!isClosed)}
        className="w-full flex justify-between items-center py-4 cursor-pointer text-charcoal"
      >
        <span className="font-larken tracking-widest text-[13px] uppercase text-charcoal scale-y-90 py-0.5 ">{title}</span>
        <ChevronDown className={`transition-transform ${isClosed ? 'rotate-180' : ''}`} size={16}/>
      </button>
      {isClosed && <div className=" pb-6 font-lato text-sm text-grey">{children}</div>}
    </div>
  );
};

export default function MadeSlowly() {
  return (
    <section
      id="made-slowly"
      className="relative overflow-hidden bg-pastel pb-0 sm:py-28 lg:py-0"
    >
      <div className="mx-auto grid max-w-[1450px] lg:pb-0 pb-20 grid-cols-1 items-center gap-12 px-0 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:px-0">
        
        {/* IMAGE — FIRST ON MOBILE, RIGHT ON DESKTOP */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative order-1 w-full lg:order-2"
        > */}
          <div className="order-1 lg:order-2 relative aspect-[4/5] w-full overflow-hidden bg-[#E8E2D9]">
            <Image
              src="/assets/Velvet Verse Vanilla Apothecary Still Life.webp"
              alt="Ruhava solid perfume in an intimate atelier setting"
              fill
              sizes="
                (min-width: 1024px) 55vw,
                100vw
              "
              className="object-cover"
            />

            {/* Subtle editorial edge */}
            <div className="pointer-events-none absolute inset-0 ring-1 ring-black/5" />
          </div>
        {/* </motion.div> */}

        {/* COPY — LEFT ON DESKTOP */}
        {/* <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="order-2 max-w-[500px] lg:order-1 lg:pl-50 px-5"
        > */}

        <div className="order-2 max-w-[560px] lg:order-1 lg:pl-30 px-5"> 
          {/* EYEBROW */}
          <p className="hidden font-lato text-[9px] uppercase tracking-[0.28em] text-[#777168]">
            The Ruhava Atelier
          </p>

          {/* HEADING */}
          <h2
            className="
              mt-4
              font-larken
              text-[1.87rem]
  leading-[0.95]
  tracking-[-0.035em]
  text-[#25231F]
  sm:text-[3.5rem]
  lg:text-[2.5rem]
  scale-y-90
  mb-7
  sm:mb-9 
            "
          >
            Made Slowly.
          </h2>

          {/* DIVIDER */}
          <div className="hidden my-7 h-px w-12 bg-[#25231F]/20 sm:mb-9 sm:mt-4" />

          {/* THREE STATEMENTS */}
          <div className="space-y-1">
            <p className="scale-y-90 font-larken text-[1.45rem] leading-[1.1] tracking-[-0.02em] text-[#25231F] sm:text-[1.62rem]">
              Hand-poured.
            </p>

            <p className="scale-y-90 font-larken text-[1.45rem] leading-[1.1] tracking-[-0.02em] text-[#25231F] sm:text-[1.62rem]">
              Small batch.
            </p>

            <p className="scale-y-90 font-larken text-[1.45rem] leading-[1.1] tracking-[-0.02em] text-[#25231F] sm:text-[1.62rem]">
              Limited by design.
            </p>
          </div>

          {/* BODY */}
          <p
            className="
              mt-8
              max-w-[440px]
              scale-y-90
  font-lato
  text-[0.81rem]
  leading-[1.55]
  sm:text-[1.2rem]
  lg:text-[1rem]
              text-[#777168]
              sm:mt-10
              mr-10
              lg:mr-0
            "
          >
            Fine fragrance, made in small quantities with carefully selected
            fragrance materials. Each batch is considered, personal, and
            limited by design.
          </p>

          {/* MADE IN INDIA */}
          <div className="mt-10 flex items-center gap-4 sm:mt-12">
            <span className="hidden h-px w-8 bg-[#25231F]/20" />

            <p className=" font-lato text-[8px] uppercase tracking-[0.3em] text-[#777168]">
              Made in India
            </p>
          </div>

          {/* PROCESS DETAIL */}
          <p className="hidden mt-5 font-lato text-[7px] uppercase tracking-[0.32em] text-[#A19A90]">
            Blend · Pour · Finish
          </p>
          </div>
        {/* </motion.div> */}
      </div>

      {/* -------------------------------------------------- */}
{/* SILKBASE™ FORMULA — EDITORIAL STRIP                */}
{/* -------------------------------------------------- */}

<section
  className="
    relative
    border-t border-[#25231F]/10
    border-b border-[#25231F]/10
    bg-[#F9F8F3]
    px-5
    pb-20
    pt-20
    sm:px-8
    sm:py-20
    lg:px-30
    lg:py-17.5
  "
>
  <div className="mx-auto max-w-[1400px]">

    {/* TOP LABEL */}
    <div className="flex items-center gap-4">
      <span className="hidden h-px w-8 bg-[#25231F]/20" />

      <p className="hidden font-lato text-[8px] uppercase tracking-[0.3em] text-[#777168]">
        The Ruhava Formula
      </p>
    </div>

    {/* MAIN EDITORIAL ROW */}
    <div
      className="
        mt-8
        grid
        grid-cols-1
        gap-10
        lg:grid-cols-[0.75fr_1.25fr]
        lg:items-end
        lg:gap-20
      "
    >

      {/* FRAGRANCE PERCENTAGE */}
      <div>
        <div className="flex items-end gap-4">
          <span
            className="
              font-larken
              text-[1.87rem]
              leading-[0.8]
              tracking-[-0.06em]
              text-[#25231F]
              sm:text-[6rem]
              scale-y-90
              lg:text-[2.5rem]
            "
          >
            05%
          </span>

          <span
            className="
              mb-1
              font-lato
              text-[8px]
              uppercase
              tracking-[0.28em]
              text-[#777168]
              sm:mb-2
            "
          >
            Fragrance
          </span>
        </div>

        <p
          className="
            mt-5
            max-w-[280px]
            font-lato
            text-[0.72rem]
            leading-[1.6]
            text-[#777168]
            sm:text-[0.78rem]
            hidden
          "
        >
          A considered concentration designed for intimate,
          close-to-skin wear.
        </p>
      </div>

      {/* SILKBASE */}
      <div>
        <p
          className="
            font-lato
            text-[8px]
            uppercase
            tracking-[0.28em]
            text-[#777168]
            hidden
          "
        >
          Introducing
        </p>

        <h2
          className="
            mt-3
            font-larken
            text-[1.5rem]
            leading-[0.95]
            tracking-[-0.04em]
            text-[#25231F]
            sm:text-[3.2rem]
            scale-y-90
            lg:text-[2rem]
            
          "
        >
          {/* The Silkbase™ Complex */}
          The Silkbase Complex
        </h2>

        <p
          className="
            mt-5
            max-w-[570px]
            font-lato
            text-[0.82rem]
            leading-[1.7]
            text-[#777168]
            sm:text-[0.9rem]
            pr-5
            lg:pr-0 
            hidden
          "
        >
          A considered base of refined, triple-filtered beeswax,
          fractionated coconut oil and d-alpha tocopherol —
          created for a silky, non-greasy finish and close-to-skin wear.
        </p>
      </div>
    </div>

    {/* INGREDIENTS */}
    <div
      className="
        mt-12
        grid
        grid-cols-1
        border-t
        border-[#25231F]/10
        sm:grid-cols-3
      "
    >

      {/* BEESWAX */}
      <div
        className="
          border-b border-[#25231F]/10
          py-6
          sm:border-b-0
          sm:border-r
          sm:pr-8
        "
      >
        <p
          className="
            font-lato
            text-[8px]
            uppercase
            tracking-[0.22em]
            text-[#25231F]
          "
        >
          Refined Beeswax
        </p>

        <p
          className="
            mt-2
            font-lato
            text-[0.7rem]
            leading-[1.5]
            text-[#777168]
          "
        >
          {/* Triple-filtered for a smooth, refined base. */}
          Triple-filtered 
        </p>
      </div>

      {/* COCONUT OIL */}
      <div
        className="
          border-b border-[#25231F]/10
          py-6
          sm:border-b-0
          sm:border-r
          sm:px-8
        "
      >
        <p
          className="
            font-lato
            text-[8px]
            uppercase
            tracking-[0.22em]
            text-[#25231F]
          "
        >
          Fractionated Coconut Oil
        </p>

        <p
          className="
            mt-2
            font-lato
            text-[0.7rem]
            leading-[1.5]
            text-[#777168]
          "
        >
          {/* Lightweight emollience with a silky finish. */}
          Lightweight
        </p>
      </div>

      {/* TOCOPHEROL */}
      <div className="py-6 sm:pl-8">
        <p
          className="
            font-lato
            text-[8px]
            uppercase
            tracking-[0.22em]
            text-[#25231F]
          "
        >
          D-Alpha Tocopherol
        </p>

        <p
          className="
            mt-2
            font-lato
            text-[0.7rem]
            leading-[1.5]
            text-[#777168]
          "
        >
          {/* Vitamin E to help condition the skin. */}
          Vitamin E
        </p>
      </div>

    </div>

    {/* BOTTOM SIGNATURE */}
    <div
      className="
        mt-8
        flex
        flex-wrap
        items-center
        gap-x-4
        gap-y-2
      "
    >
      <p className="font-lato text-[7px] uppercase tracking-[0.28em] text-[#A19A90]">
        Silky Finish
      </p>

      <span className="h-1 w-1 rounded-full bg-[#A19A90]/50" />

      <p className="font-lato text-[7px] uppercase tracking-[0.28em] text-[#A19A90]">
        Moisture Support
      </p>

      <span className="h-1 w-1 rounded-full bg-[#A19A90]/50" />

      <p className="font-lato text-[7px] uppercase tracking-[0.28em] text-[#A19A90]">
        Layering Base
      </p>
    </div>

  </div>
</section>

      {/* SCENT WORLD — FIRST SOUL */}
<section
  id="scent-world"
  className="relative bg-pastel px-0 pb-15 sm:px-8 sm:py-28 lg:px-0 lg:py-0"
>
  <div className="mx-auto grid max-w-[1450px] grid-cols-1 items-center gap-12 sm:gap-16 lg:grid-cols-[1.21fr_1fr] lg:gap-24 xl:gap-32 pb-10 lg:pb-0">

    {/* IMAGE */}
    <div className="order-1 mx-auto w-full max-w-[720px] lg:mx-0">
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <Image
          src="/assets/Golden-Hour Terrace Retreat.webp"
          alt="A warm golden-hour scene evoking the feeling of First Soul"
          fill
          sizes="
            (min-width: 1280px) 43vw,
            (min-width: 1024px) 47vw,
            92vw
          "
          className="object-cover"
        />
      </div>
    </div>

    {/* COPY */}
    <div className="order-2 max-w-[500px] lg:pl-2 px-5 lg:px-0 lg:ml-15">

      <p className="hidden font-lato text-[9px] uppercase tracking-[0.28em] text-[#777168]">
        First Soul
      </p>

      <h2
        className="
          mt-5
          max-w-[460px]
          
          
          scale-y-90 font-larken text-[1.45rem] leading-[1.1] tracking-[-0.02em] text-[#25231F] sm:text-[1.62rem]
        "
      >
        Bright at first.
        <br />
        Warm at heart.
        <br />
        Unforgettable in memory.
      </h2>

      <div className="hidden my-7 h-px w-10 bg-[#25231F]/20 sm:my-8" />

      <p
        className="
          max-w-[430px]
          
          mt-7
          scale-y-90
  font-lato
  text-[0.81rem]
  leading-[1.55]
  sm:text-[1.2rem]
  lg:text-[1rem]
              text-[#777168]
              lg:mr-38
              mr-20
        "
      >
        {/* A luminous fragrance that lingers close, revealing something deeper
        with time. */}
        Bold and confident, the unexpected coffee-vanilla fragrance trail of THE FIRST 
    SOUL blends the intoxicating notes of Jasmine with a Gourmand heart of black coffee. 
      </p>

      <div className="mt-8 sm:mt-10">
        <a
          href="https://rzp.io/rzp/G3Y3UOB"
          className="
            inline-flex
            items-center
            font-lato
            text-[0.58rem]
            font-bold
            uppercase
            tracking-[0.38em]
            text-[#25231F]
            underline
            decoration-[#25231F]/30
            underline-offset-[6px]
            transition-colors
            duration-300
            hover:decoration-[#25231F]
          "
        >
          Discover First Soul
          <span className="hidden ml-3 text-[0.8rem]">→</span>
        </a>
      </div>

    </div>
  </div>
</section>

{/* -------------------------------------------------- */}
{/* FIND YOUR LAYER */}
{/* -------------------------------------------------- */}

<section
  id="scent-finder"
  className="
    relative
    overflow-hidden
    bg-[#F9F8F3]
    px-5
    pt-20
    pb-20
    sm:px-8
    sm:py-28
    lg:px-30
    lg:pb-24
    lg:pt-24
  "
>
  <div className="mx-auto max-w-[1400px]">

    {/* HEADING + INTRO */}
    <div className="max-w-[650px]">
      <p
        className="
          font-lato
          text-[9px]
          uppercase
          tracking-[0.28em]
          text-[#777168]
          hidden
        "
      >
        The Scent Finder
      </p>

      <h2
        className="
          mt-2
          font-larken
          text-[1.87rem]
          leading-[0.92]
          tracking-[-0.04em]
          text-[#25231F]
          sm:text-[4rem]
          lg:text-[2.5rem]
          scale-y-90
        "
      >
        Find Your Layer.
      </h2>

      <div className="hidden mt-7 h-px w-10 bg-[#25231F]/20" />

      <p
        className="
          mt-[10px]
          lg:mt-[10px]
          max-w-[620px]
          font-lato
          text-[0.81rem]
          leading-[1.45]
          tracking-[-0.015em]
          text-[#25231F]
          sm:text-[1.3rem]
          lg:text-[1rem]
          pr-10
        "
      >
        Tell us what you already wear. We'll find what to wear beneath it.
      </p>

      {/* CTA */}
      <div className="mt-7 lg:mt-[30px] sm:mt-10">
        <button
                type="button"
                className="
                cursor-pointer
                  border border-[#25231F]
                  px-5 py-3
                  text-[10px]
                  font-lato
                  uppercase
                  tracking-[0.2em]
                  text-[#25231F]
                  transition-all
                  duration-600
                  hover:bg-[#25231F]
                  hover:text-[#F9F8F3]
                  disabled:cursor-default
                  disabled:border-[#BEB8AE]
                  disabled:text-[#777168]
                  disabled:hover:bg-transparent
                  disabled:hover:text-[#777168]
                "
              >
                Find Your Match
              </button>

        {/* <button
          type="button"
          className="
            inline-flex
            items-center
            font-lato
            text-[0.62rem]
            font-bold
            uppercase
            tracking-[0.38em]
            text-[#25231F]
            underline
            decoration-[#25231F]/30
            underline-offset-[6px]
            transition-colors
            duration-300
            hover:decoration-[#25231F]
          "
        >
          Find Your Match
          <span className="hidden ml-3 text-[0.8rem]">
            →
          </span>
        </button> */}

      </div>
    </div>

    {/* SCENT WORLD IMAGES */}
    <div
      className="
        mt-14
        lg:mt-0
        grid
        grid-cols-[0.9fr_1.2fr_0.9fr]
        items-end
        gap-0
        sm:mt-20
        sm:gap-4
        lg:mx-20
        
        lg:gap-6
      "
    >

      {/* FRESH */}
      <div className="relative aspect-[3/4] overflow-hidden mb-8 lg:mb-20">
        <Image
          src="/assets/Sunlit Linen Workspace by the Window.webp"
          alt="A fresh and airy scent world"
          fill
          sizes="
            (min-width: 1024px) 28vw,
            31vw
          "
          className="object-cover"
        />

        <div className="pointer-events-none absolute inset-0 bg-black/[0.03]" />

        <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5">
          <p
            className="
              font-lato
              text-[7px]
              uppercase
              tracking-[0.25em]
              text-white
              sm:text-[8px]
              hidden
            "
          >
            Fresh
          </p>
        </div>
      </div>

      {/* WOODY — HERO */}
      <div
        className="
          relative
          aspect-[3/4]
          overflow-hidden
          -translate-y-3
          sm:-translate-y-5
        "
      >
        <Image
          src="/assets/Golden Hour Library Study.webp"
          alt="A warm and grounded woody scent world"
          fill
          sizes="
            (min-width: 1024px) 34vw,
            37vw
          "
          className="object-cover"
        />

        <div className="pointer-events-none absolute inset-0 bg-black/[0.03]" />

        <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5">
          <p
            className="
              font-lato
              text-[7px]
              uppercase
              tracking-[0.25em]
              text-white
              sm:text-[8px]
              hidden
            "
          >
            Woody
          </p>
        </div>
      </div>

      {/* GOURMAND */}
      <div className="relative aspect-[3/4] overflow-hidden mb-8 lg:mb-20">
        <Image
          src="/assets/Candlelit Chocolate Dessert Evening.webp"
          alt="A warm and comforting gourmand scent world"
          fill
          sizes="
            (min-width: 1024px) 28vw,
            31vw
          "
          className="object-cover"
        />

        <div className="pointer-events-none absolute inset-0 bg-black/[0.03]" />

        <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5">
          <p
            className="
              font-lato
              text-[7px]
              uppercase
              tracking-[0.25em]
              text-white
              sm:text-[8px]
              hidden
            "
          >
            Gourmand
          </p>
        </div>
      </div>

    </div>

    {/* OLFACTORY SCALE */}
    <div className="mt-10 sm:mt-14 lg:mx-40">

      {/* LABELS */}
      <div className="flex justify-between">
        {["Fresh", "Floral", "Woody", "Amber", "Gourmand"].map((family) => (
          <span
            key={family}
            className="
              font-lato
              text-[6.5px]
              uppercase
              tracking-[0.16em]
              text-[#777168]
              sm:text-[7px]
              sm:tracking-[0.2em]
            "
          >
            {family}
          </span>
        ))}
      </div>

      {/* GRADIENT */}
      <div
        className="
          relative
          mt-3
          h-[3px]
          w-full
          overflow-hidden
          
          py-1
        "
      >
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#D9E2D5]
            via-[#D8C3B9]
            via-55%
            to-[#D9C1A0]
          "
        />
      </div>

      {/* TICKS */}
      <div className="mt-2 flex justify-between px-[1px]">
        {[0, 1, 2, 3, 4].map((tick) => (
          <span
            key={tick}
            className="h-1 w-px bg-[#25231F]/20"
          />
        ))}
      </div>

    </div>

  </div>
</section>

{/* -------------------------------------------------- */}
{/* WHY SOLID?                                         */}
{/* -------------------------------------------------- */}

<section
  id="why-solid"
  className="
    relative
    overflow-hidden
    bg-pastel
    px-0
    pt-15
    pb-20
    sm:px-0
    sm:py-28
    
    lg:py-36
    lg:px-30
  "
>
  <div className="mx-auto max-w-[1400px] lg:-mt-40">

    {/* INTRO */}
    <div className="max-w-[680px]  ">
      <p
        className="
          font-lato
          text-[9px]
          uppercase
          tracking-[0.28em]
          text-[#777168]
          hidden
        "
      >
        Why Solid?
      </p>

      <h2
        className="
          mt-5
          max-w-[620px]
          font-larken
          text-[1.5rem]
          leading-[0.94]
          tracking-[-0.045em]
          text-[#25231F]
          sm:text-[4rem]
          lg:text-[2rem]
          scale-y-90
          px-5
          lg:px-0
          lg:pt-20
        "
      >
        A quieter way
        
        to wear fragrance.
      </h2>

      <div className="hidden mt-8 h-px w-10 bg-[#25231F]/20" />
    </div>

    <div className='bg-pastel py-20 z-100 hidden md:block max-w-300'>

      <div className='flex lg:pb-18'>
      <nav className='ml-0 mx-4 max-w-80'>
          <h2 className='text-charcoal scale-y-85 font-larken tracking-widest text-[13.5px] py-0.5 uppercase mb-2'>
            Carry It
          </h2>
            <p className='space-x-4 text-grey font-lato text-[14px] leading-relaxed'>
              Pocket-sized. <br />
              Fragrance, wherever you go.
              
            </p>
          </nav>

          

          <nav className='ml-16 mx-4 max-w-80'>
          <h2 className='text-charcoal scale-y-85 font-larken tracking-widest text-[13.5px] py-0.5 uppercase mb-2'>
            Layer It
          </h2>
              <p className='space-x-4 text-grey font-lato text-[14px] leading-relaxed'>
                Beneath your fragrance. <br />
                Wear it underneath your favourite Eau de Parfum. 
                
              </p>

             
            
          </nav>
              

          <nav className='ml-16 mx-4 max-w-80'>
          <h2 className='text-charcoal scale-y-85 font-larken tracking-widest text-[13.5px] py-0.5 uppercase mb-2'>
            Reapply It
          </h2>
              <p className='space-x-4 text-grey font-lato text-[14px] leading-relaxed'>
                Whenever you wish. <br />
                A simple return to scent, throughout the day.

              </p>
              
          </nav>

          <nav className='ml-16 mx-4 max-w-80'>
          <h2 className='text-charcoal scale-y-85 font-larken tracking-widest text-[13.5px] py-0.5 uppercase mb-2'>
            Travel with It
          </h2>
              <p className='space-x-4 text-grey font-lato text-[14px] leading-relaxed'>
                Made to move with you. <br />
                No unnecessary bulk.
              </p>
              {/* <button className=' text-grey font-lato font-thin text-[14px] underline underline-offset-4 mt-3 cursor-pointer hover:decoration-0'>
                Learn to Layer
              </button> */}
          </nav>

          </div>

    </div>

   <div className='bg-pastel py-5 pb-20 lg:pb-0 z-40 block md:hidden lg:hidden'>

      {/*  <AccordionItem title="Contact an Advisor">
        <p>Monday - Sunday, 10 a.m. - 8 p.m.</p>
        <a href="mailto:ruhava.official@gmail.com" className="underline">Email Us</a>
      */}

      <nav className=''>
        <AccordionItem title="Carry It">
            <p className='space-x-4 text-grey font-lato text-[14px] leading-relaxed'>
              Pocket-sized.<br />
Fragrance, wherever you go. 
              
            </p>
        </AccordionItem>
          </nav>

    
      <div className=''>
        

          <nav className=''>
          <AccordionItem title="Layer It">
              <p className='space-x-4 text-grey font-lato text-[14px] leading-relaxed'>
                Beneath your fragrance. <br />
Wear it underneath your favourite Eau de Parfum.
                
              </p>
            

              
              </AccordionItem>
            
          </nav>

          <nav className=''>
          <AccordionItem title="Reapply It">
              <p className='space-x-4 text-grey font-lato text-[14px] leading-relaxed'>
                Whenever you wish.<br />
A simple return to scent, throughout the day.
                
              </p>
            

              
              </AccordionItem>
            
          </nav>

          

          <nav className=''>
            <AccordionItem2 title="Travel with It"> 
          
              <p className='space-x-4 text-grey font-lato text-[14px] leading-relaxed'>
                Made to move with you.<br />
No unnecessary bulk.
              </p>
              {/* <button className=' text-grey font-lato font-thin text-[14px] underline underline-offset-4 mt-3 cursor-pointer hover:decoration-0'>
                Request Correspondence
              </button> */}
            </AccordionItem2>
          </nav>
          </div>

    </div>

    {/* BENEFITS */}
    <div
      className="
        mt-16
        grid
        grid-cols-1
        border-t
        border-[#25231F]/10
        sm:mt-20
        sm:grid-cols-2
        lg:grid-cols-4
        hidden
      "
    >

      {/* 01 */}
      <div
        className="
          border-b
          border-[#25231F]/10
          py-8
          sm:pr-8
          lg:border-b-0
          lg:border-r
          lg:py-10
        "
      >
        <div className="flex items-center gap-4 hidden">
          <span
            className="
              font-lato
              text-[8px]
              tracking-[0.2em]
              text-[#A19A90]
              
            "
          >
            01
          </span>

          <span className="h-px w-6 bg-[#25231F]/15" />
        </div>

        <h3
          className="
            mt-7
            font-lato
            text-[9px]
            font-bold
            uppercase
            tracking-[0.24em]
            text-[#25231F]
            hidden
          "
        >
          Carry It
        </h3>

        <p
          className="
            mt-4
            max-w-[230px]
            font-larken
            text-[1.25rem]
            leading-[1.2]
            tracking-[-0.015em]
            text-[#25231F]
            scale-y-90
          "
        >
          Pocket-sized.
        </p>

        <p
          className="
            mt-4
            max-w-[250px]
            font-lato
            text-[0.78rem]
            leading-[1.7]
            text-[#777168]
          "
        >
          Fragrance that slips easily into your everyday carry.
        </p>
      </div>

      {/* 02 */}
      <div
        className="
          border-b
          border-[#25231F]/10
          py-8
          sm:pl-8
          sm:pr-8
          lg:border-b-0
          lg:border-r
          lg:py-10
        "
      >
        <div className="flex items-center gap-4 hidden">
          <span
            className="
              font-lato
              text-[8px]
              tracking-[0.2em]
              text-[#A19A90]
            "
          >
            02
          </span>

          <span className="h-px w-6 bg-[#25231F]/15" />
        </div>

        <h3
          className="
            mt-7
            font-lato
            text-[9px]
            font-bold
            uppercase
            tracking-[0.24em]
            text-[#25231F]
            hidden
          "
        >
          Layer It
        </h3>

        <p
          className="
            mt-4
            max-w-[230px]
            font-larken
            text-[1.25rem]
            leading-[1.2]
            tracking-[-0.015em]
            text-[#25231F]
            scale-y-90
          "
        >
          Wear it beneath your favourite Eau de Parfum.
        </p>

        <p
          className="
            mt-4
            max-w-[250px]
            font-lato
            text-[0.78rem]
            leading-[1.7]
            text-[#777168]
          "
        >
          A close-to-skin base for a more personal fragrance ritual.
        </p>
      </div>

      {/* 03 */}
      <div
        className="
          border-b
          border-[#25231F]/10
          py-8
          sm:pr-8
          sm:pl-8
          lg:border-b-0
          lg:border-r
          lg:py-10
        "
      >
        <div className="flex items-center gap-4 hidden">
          <span
            className="
              font-lato
              text-[8px]
              tracking-[0.2em]
              text-[#A19A90]
              
            "
          >
            03
          </span>

          <span className="h-px w-6 bg-[#25231F]/15" />
        </div>

        <h3
          className="
            mt-7
            font-lato
            text-[9px]
            font-bold
            uppercase
            tracking-[0.24em]
            text-[#25231F]
            hidden
          "
        >
          Reapply It
        </h3>

        <p
          className="
            mt-4
            max-w-[230px]
            font-larken
            text-[1.25rem]
            leading-[1.2]
            tracking-[-0.015em]
            text-[#25231F]
            scale-y-90
          "
        >
          Return to the fragrance throughout the day.
        </p>

        <p
          className="
            mt-4
            max-w-[250px]
            font-lato
            text-[0.78rem]
            leading-[1.7]
            text-[#777168]
          "
        >
          Reapply whenever the moment calls for it.
        </p>
      </div>

      {/* 04 */}
      <div
        className="
          py-8
          sm:pl-8
          lg:py-10
        "
      >
        <div className="flex items-center gap-4 hidden">
          <span
            className="
              font-lato
              text-[8px]
              tracking-[0.2em]
              text-[#A19A90]
            "
          >
            04
          </span>

          <span className="h-px w-6 bg-[#25231F]/15" />
        </div>

        <h3
          className="
            mt-7
            font-lato
            text-[9px]
            font-bold
            uppercase
            tracking-[0.24em]
            text-[#25231F]
            hidden
          "
        >
          Travel With It
        </h3>

        <p
          className="
            mt-4
            max-w-[230px]
            font-larken
            text-[1.25rem]
            leading-[1.2]
            tracking-[-0.015em]
            text-[#25231F]
            scale-y-90
          "
        >
          No fragile glass. No unnecessary bulk.
        </p>

        <p
          className="
            mt-4
            max-w-[250px]
            font-lato
            text-[0.78rem]
            leading-[1.7]
            text-[#777168]
          "
        >
          Made for pockets, handbags, weekend bags and everyday movement.
        </p>
      </div>

    </div>

    {/* CLOSING STATEMENT */}
    <div
      className="
        mt-16
        border-t
        border-[#25231F]/10
        pt-8
        sm:mt-20
        sm:pt-10
        hidden
      "
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <p
          className="
            max-w-[560px]
            font-larken
            text-[1.45rem]
            leading-[1.2]
            tracking-[-0.02em]
            text-[#25231F]
            sm:text-[1.62rem]
            scale-y-90
          "
        >
          Small enough to keep close.
          <br />
          Made to be worn your way.
        </p>

        <a
          href="#layer-it"
          className="
            inline-flex
            shrink-0
            items-center
            font-lato
            text-[0.58rem]
            font-bold
            uppercase
            tracking-[0.38em]
            text-[#25231F]
            underline
            decoration-[#25231F]/30
            underline-offset-[6px]
            transition-colors
            duration-300
            hover:decoration-[#25231F]
          "
        >
          Learn to Layer
          <span className="ml-3 text-[0.8rem] hidden">
            →
          </span>
        </a>
      </div>
    </div>

  </div>
</section>

{/* -------------------------------------------------- */}
{/* THE RITUAL — WEAR IT / LAYER IT                   */}
{/* -------------------------------------------------- */}

<section
  id="layer-it"
  className="
    relative
    overflow-hidden
    bg-[#F9F8F3]
    px-0
    pt-15
    pb-20
    sm:px-8
    sm:py-28
    lg:px-12
    lg:pt-20
    lg:pb-24
    lg:-mt-50
    -mt-25
  "
>
  <div className="mx-auto max-w-[1100px]">

    {/* HEADING */}
    <div className="text-center">

      <p
        className="
          font-lato
          text-[9px]
          uppercase
          tracking-[0.3em]
          text-[#777168]
          hidden
        "
      >
        The Ritual
      </p>

      <div className="hidden mx-auto mt-6 h-px w-10 bg-[#25231F]/20 px-5 lg:px-0" />

      <h2
        className="
          mt-7
          font-larken
          text-[1.87rem]
          leading-[0.94]
          tracking-[-0.045em]
          text-[#25231F]
          sm:text-[4rem]
          lg:text-[2.5rem]
          scale-y-90
        "
      >
        Layer it your way.
      </h2>

      <p
        className="
          mx-auto
          lg:mt-4
          mt-2
          max-w-[480px]
          font-lato
          text-[0.875rem]
          leading-[1.7]
          text-[#777168]
          sm:text-[0.88rem]
        "
      >
        Wear it alone, or beneath your favourite Eau de Parfum.
      </p>

    </div>


    {/* EDITORIAL STEPS */}
<div
  className="
    mx-auto
    mt-5
    max-w-[1200px]
    
    border-[#25231F]/10
    sm:mt-10
    px-5
    lg:px-0
  "
>
  <div
    className="
      grid
      grid-cols-1
      lg:grid-cols-3
    
    "
  >

    {/* 01 — BALM */}
    <div
      className="
        border-b
        border-[#25231F]/10
        py-7
        lg:border-b-0
        lg:border-r
        lg:px-8
        lg:py-9
        lg:first:pl-0
      "
    >
      <div className="flex items-center gap-4">
        <span
          className="
            font-lato
            text-[8px]
            tracking-[0.2em]
            text-[#A19A90]
          "
        >
          01
        </span>

        <span className="hidden h-px w-6 bg-[#25231F]/15" />
      </div>

      <p
        className="
          mt-6
          font-lato
          text-[8px]
          font-bold
          uppercase
          tracking-[0.25em]
          text-[#25231F]
        "
      >
        Balm
      </p>

      <p
        className="
          mt-3
          font-larken
          text-[1.05rem]
          leading-[1.3]
          tracking-[-0.01em]
          text-[#25231F]
          sm:text-[1.15rem]
          scale-y-90
        "
      >
        Apply to pulse points.
      </p>
    </div>


    {/* 02 — SPRAY */}
    <div
      className="
        border-b
        border-[#25231F]/10
        py-7
        lg:border-b-0
        lg:border-r
        lg:px-8
        lg:py-9
      "
    >
      <div className="flex items-center gap-4">
        <span
          className="
            font-lato
            text-[8px]
            tracking-[0.2em]
            text-[#A19A90]
          "
        >
          02
        </span>

        <span className="hidden h-px w-6 bg-[#25231F]/15" />
      </div>

      <p
        className="
          mt-6
          font-lato
          text-[8px]
          font-bold
          uppercase
          tracking-[0.25em]
          text-[#25231F]
        "
      >
        Spray
      </p>

      <p
        className="
          mt-3
          font-larken
          text-[1.05rem]
          leading-[1.3]
          tracking-[-0.01em]
          text-[#25231F]
          sm:text-[1.15rem]
          scale-y-90
        "
      >
        Mist your Eau de Parfum over it.
      </p>
    </div>


    {/* 03 — SETTLE */}
    <div
      className="
        py-7
        lg:px-8
        lg:py-9
        lg:pr-0
      "
    >
      <div className="flex items-center gap-4">
        <span
          className="
            font-lato
            text-[8px]
            tracking-[0.2em]
            text-[#A19A90]
          "
        >
          03
        </span>

        <span className="hidden h-px w-6 bg-[#25231F]/15" />
      </div>

      <p
        className="
          mt-6
          font-lato
          text-[8px]
          font-bold
          uppercase
          tracking-[0.25em]
          text-[#25231F]
        "
      >
        Settle
      </p>

      <p
        className="
          mt-3
          font-larken
          text-[1.05rem]
          leading-[1.3]
          tracking-[-0.01em]
          text-[#25231F]
          sm:text-[1.15rem]
          scale-y-90
        "
      >
        Let the two fragrances settle together.
      </p>
    </div>

  </div>
</div>


    {/* PORTRAIT IMAGE */}
    <div className="mx-auto mt-14 w-full max-w-[560px] sm:mt-20">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#E8E2D9]">
        <Image
          src="/assets/Golden Hour Ruhava Perfume Vanity.webp"
          alt="A quiet fragrance layering ritual"
          fill
          sizes="
            (min-width: 1024px) 620px,
            92vw
          "
          className="object-cover"
        />

        <div className="pointer-events-none absolute inset-0 ring-1 ring-black/5" />
      </div>
    </div>

    


    {/* CLOSING LINE */}
    <div className="mt-2 text-center sm:mt-4">
        <button className=' text-grey font-lato font-thin text-[14.5px] underline underline-offset-4 mt-3 cursor-pointer hover:decoration-0'>
                Learn to Layer
              </button> 
      <p
        className="
        hidden
          mx-auto
          max-w-[420px]
          font-larken
          text-[1.35rem]
          leading-[1.2]
          tracking-[-0.02em]
          text-[#25231F]
          sm:text-[1.55rem]
        "
      >
        A closer, more personal
        <br />
        fragrance ritual.
      </p>
    </div>

  </div>
</section>

    </section>

    
  );
}