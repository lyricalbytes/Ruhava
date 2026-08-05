"use client";
import DesktopHeader from "@/components/DesktopHeader";
import MobileHeader from "@/components/MobileHeader";
import DesktopFooter from "@/components/DesktopFooter";
import MobileFooter from "@/components/MobileFooter";
import ContactWidget from "@/components/ContactWidgetDesktop";
import Image from "next/image";
import { Span } from "next/dist/trace";
import { Search, User, Star, ShoppingBag, Handbag} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import ContactWidgetMobile from "@/components/ContactWidgetMobile";
import Lenis from 'lenis';
import { useLayoutEffect } from "react"; // Add this import
import Link from "next/link";





export default function Creation() {

const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const item = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

const { scrollY } = useScroll();
const { scrollYProgress } = useScroll(); // Use progress for the footer fade
const y = useTransform(scrollY, [0, 800], [-14, 120]); // Moves image down as you scroll
const footerOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);
const footerScale = useTransform(scrollYProgress, [0.8, 1], [0.95, 1]);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  
  



// Inside your Reserve component in reserve.tsx

useLayoutEffect(() => {
  // 1. Force the browser to stop trying to restore scroll position
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  // 2. Instant reset before the page paints
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}, []);

// useEffect(() => {
//   const lenis = new Lenis({
//     duration: 1.2,
//     easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//     smoothWheel: true,
//   });

//   // 3. THE RESET: Force Lenis to the top on every mount
//   // We wrap this in a frame request to ensure the DOM is ready
//   requestAnimationFrame(() => {
//     lenis.scrollTo(0, { immediate: true });
//   });

//   const raf = (time: number) => {
//     lenis.raf(time);
//     requestAnimationFrame(raf);
//   };
//   requestAnimationFrame(raf);

//   return () => {
//     lenis.destroy();
//     // Optional: Re-enable auto restoration when leaving
//     if ('scrollRestoration' in history) {
//       history.scrollRestoration = 'auto';
//     }
//   };
// }, []);

  return (
    <main className="bg-ivory text-charcoal font-lato relative  flex flex-col">
      <DesktopHeader />
      <MobileHeader />
  
    <div className="bg-ivory z-20 relative">
    {/* <section className="px-6 lg:px-60 py-24 lg:py-32 min-h-screen text-center">
    <p className="text-[12px] tracking-wide leading-1 uppercase max-w-5xl pt-12 scale-y-85">
    The First Soul
    </p>
    <h1 className="font-lato text-3xl lg:text-[34px] tracking-wider leading-11 uppercase max-w-5xl px-70 pb-2 scale-y-85">
    The new ruhava fragrance
    </h1>
    <p className="text-base lg:text-[14px] leading-5 max-w-5xl scale-y-85 px-56">
    THE FIRST SOUL EXTRAIT DE PARFUM. Not something that lacks soul.
    Something… soulful. Some fragrances are worn.
    Some are remembered. Like a memory you hold close—
    but never speak of.
    </p>
    <button className="scale-y-85 tracking-wider uppercase text-[11px] mt-6 py-4 px-8 bg-amber text-ivory font-medium font-lato rounded-[50px] cursor-pointer">
       <Handbag size={18} strokeWidth={1.5} /> <span>Acquire</span>
    </button>
    
    </section>
    <section>

    </section> */}

    

    <section className="items-center text-center flex flex-col">
      
      <div className="relative w-full aspect-10/16 -mt-px lg:-top-18 md:aspect-video lg:w-full">
        <Image 
        src="/assets/concrete-cropped2.webp"
        alt="The First Soul"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover w-full max-w-8xl mx-auto" 
        />
      </div>

    
        
      
      
    </section>

    {/* <section className="lg:h-[70vh] h-[50vh] flex flex-col items-center mt-50  text-center px-6 lg:px-12">

  
  <p className="text-[12.5px] tracking-widest uppercase opacity-70 scale-y-85">
    The First Soul
  </p>

  
  <h1 className="font-larken text-3xl lg:text-[34.5px] leading-tight max-w-2xl scale-y-90">
    Some fragrances are worn. <br />
    Some are remembered.
  </h1>

  
  <p className="mt-2 text-sm lg:text-[14.5px] max-w-xl  opacity-80 scale-y-90">
    Not something that lacks soul. 
    Something… soulful. <br />
    Like a memory you hold close— 
    but never speak of.
  </p>

  
  <Link href="/reserve-solid">
  <button className="mt-10 flex items-center gap-2 bg-amber text-ivory px-4 py-3 rounded-full text-[11.5px] tracking-widest uppercase hover:text-ivory transition cursor-pointer">
    <Handbag size={16} strokeWidth={1.5} />
    <span className="scale-y-85">Acquire</span>
  </button>
  </Link>

</section> */}

<section className="lg:h-[72vh] h-[55vh] flex flex-col items-center lg:mt-50 mt-45  text-center px-6 lg:px-12 lg:mx-100 mx-5">

  
  <p className="text-[12.5px] tracking-widest uppercase opacity-70 scale-y-85">
    The First Soul
  </p>

  
  <h1 className="font-lato uppercase tracking-wider text-[32px] leading-tight max-w-2xl scale-y-90 lg:mx-20">
    The new ruhava
    fragrance
  </h1>

  
  <p className="mt-2 text-sm lg:text-[14.5px] max-w-xl  opacity-80 scale-y-90">
   THE FIRST SOUL. A luminous, electrifying and spellbinding new SOUL, from la collection LITTÉRAIRE. An olfactory whirlwind leaves a coffee-vanilla fragrance trail that is modern and energetic.
  </p>

  
  <Link href="/reserve-solid">
  <button className="mt-10 flex items-center gap-2 bg-amber text-ivory px-4 py-3 rounded-full text-[11.5px] tracking-widest uppercase hover:text-ivory cursor-pointer  hover:brightness-95 overflow-hidden transition-all duration-700 ">
    <Handbag size={16} strokeWidth={1.5} />
    <span className="scale-y-85">Acquire</span>
  </button>
  </Link>

</section>


<section className="items-center text-center flex flex-col">
      
      <div className="relative w-full aspect-2/3 -mt-px lg:-top-18 md:aspect-video lg:w-full">
        <Image 
        src="/assets/sea-and-castle.webp"
        alt="The First Soul"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover w-full max-w-8xl mx-auto" 
        />
      </div>

    
        
      
      
    </section>


<section className="lg:h-[45vh] h-[50vh] flex flex-col items-center mt-35 lg:mt-15  text-center px-6 lg:px-12 lg:mx-100">

  {/* Title */}
  {/* <p className="text-[12.5px] tracking-widest uppercase opacity-70 scale-y-85">
    The First Soul
  </p> */}

  {/* Main Hook */}
  <h1 className="font-lato uppercase tracking-wider text-[32px] leading-tight max-w-2xl scale-y-90 lg:mx-20">
    New notes of the
    first soul
  </h1>

  {/* Feeling */}
  <p className="mt-2 text-sm lg:text-[14.5px] max-w-xl  opacity-80 scale-y-90">
    Bold and confident, the unexpected coffee-vanilla fragrance trail of THE FIRST 
    SOUL blends the intoxicating notes of Jasmine with a Gourmand heart of black coffee. A 
    luminous composition accompanied by a touch of Patchouli and a mysterious cedar 
    woody accord.
  </p>

  {/* CTA */}
  <Link href="/reserve-solid">
  <button className="mt-10 flex items-center gap-2 bg-amber text-ivory px-4 py-3 rounded-full text-[11.5px] tracking-widest uppercase hover:text-ivory cursor-pointer hover:brightness-95 overflow-hidden transition-all duration-700">
    {/* <Handbag size={16} strokeWidth={1.5} /> */}
    <span className="scale-y-85">Learn more</span>
  </button>
  </Link>

</section>

{/* opening

Feeling

origin

composition

Meaning

object

access */}


{/* <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 overflow-hidden scale-y-85">

      
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-ivory via-ivory to-[#f5f3ef]" />

      
      
      <div className="absolute inset-0 -z-10 opacity-[0.04] bg-[url('/grain.png')] bg-repeat" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-2xl text-left"
      >

        
        <motion.p
          variants={item}
          className="text-[15px] lg:text-[17px] leading-[1.8] text-charcoal/80 font-light tracking-wide"
        >
          The firsts stay with us.
        </motion.p>

        <div className="h-10" />

        
        <motion.p
          variants={item}
          className="text-[15px] lg:text-[17px] leading-[1.8] text-charcoal/80 font-light tracking-wide"
        >
          The first time you felt chosen. <br />
          The first time you felt alone.
        </motion.p>

        <div className="h-10" />

        
        <motion.p
          variants={item}
          className="text-[15px] lg:text-[17px] leading-[1.8] text-charcoal/80 font-light tracking-wide"
        >
          Cold December nights… <br />
          when even silence felt heavy.
        </motion.p>

        <div className="h-10" />

        
        <motion.p
          variants={item}
          className="text-[15px] lg:text-[17px] leading-[1.8] text-charcoal/80 font-light tracking-wide"
        >
          And the moment you stopped waiting… <br />
          and became someone you weren’t ready to be.
        </motion.p>

        <div className="h-14" />

        
        <motion.p
          variants={item}
          className="text-[17px] lg:text-[19px] leading-[1.8] text-charcoal font-medium tracking-wide"
        >
          The First Soul is born from those moments.
        </motion.p>

        <motion.p
          variants={item}
          className="mt-3 text-[14px] lg:text-[16px] text-charcoal/70 leading-[1.8]"
        >
          Not perfect. Not loud. <br />
          Just real.
        </motion.p>

      </motion.div>
    </section> */}

    <div className="relative inset-0 bg-center bg-cover bg-no-repeat will-change-transform flex flex-col  max-w-5xl lg:max-w-full w-full aspect-2/3  md:aspect-video lg:w-full object-cover max-w-8xl mx-auto "
    style={{ 
              backgroundImage: `url(${"/assets/s1new.webp"})`,
              
            }}
    >


    {/* <Image 
        src="/assets/s1new.webp"
      width={1000}
      height={1000}
      alt="The First Soul"
      className="object-cover w-full max-w-8xl mx-auto"
      
        /> */}

   <h2 className="font-lato text-ivory uppercase lg:ml-30 lg:mt-130 mt-94 ml-10 text-[26px] tracking-wider lg:mr-260 mr-30 leading-tight">
    The Ruhava Art of Perfuming
   </h2>  
   <span className="font-lato text-ivory uppercase lg:ml-30 lg:mt-4 ml-10 mt-4 text-[10px] lg:text-[10px] tracking-wider lg:mr-240 mr-10 leading-tight">
    SCENTED WITH Dark AND Sweet NOTES, Ruhava LITTÉRAIRE FRAGRANCES AND BODY PRODUCTS OFFER NUMEROUS WAYS TO EXPRESS YOUR INDIVIDUALITY.
   </span>   

          {/* CTA */}
  <Link href="/reserve">
  <button className="group relative lg:ml-30 lg:mt-4 ml-10 mt-4  flex text-center items-center gap-2 bg-transparent border border-ivory text-ivory px-4 py-3  text-[11.5px] tracking-widest uppercase hover:text-charcoal hover:bg-ivory transition-all duration-700 overflow-hidden cursor-pointer">
    {/* <Handbag size={16} strokeWidth={1.5} /> */}
    {/* <span className="scale-y-85">Acquire</span> */}
     <span className="scale-y-85">Discover</span>
  </button>
  </Link>

  </div>

    </div>


      <ContactWidget />
      <ContactWidgetMobile />
  
  
     

     <div className="z-100 block md:hidden">
                 <MobileFooter />
               </div>

      <footer className="sticky bottom-0 left-0 w-full z-10">
  <DesktopFooter />
  
</footer>

    </main>
  );
}
