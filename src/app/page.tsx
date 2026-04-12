"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from 'next/link';
import Lenis from 'lenis';

import DesktopHeader from "@/components/DesktopHeader";
import MobileHeader from "@/components/MobileHeader";
import DesktopFooter from "@/components/DesktopFooter";
import MobileFooter from "@/components/MobileFooter";
import ContactWidget from "@/components/ContactWidgetDesktop";
import ContactWidgetMobile from "@/components/ContactWidgetMobile";

/** 
 * 1. LUXURY PRE-LOADER
 * Building the "Ritual" of entry.
 */
const LuxuryLoader = () => (
  <motion.div 
    initial={{ opacity: 1 }}
    animate={{ opacity: 0 }}
    transition={{ duration: 1.5, delay: 2.5, ease: [0.19, 1, 0.22, 1] }}
    className="fixed inset-0 z-200 bg-charcoal flex flex-col items-center justify-center pointer-events-none"
  >
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="text-ivory font-larken text-3xl tracking-[0.6em] mb-4"
    >
      RUHAVA
    </motion.div>
    <div className="w-12 h-px bg-ivory/20 overflow-hidden">
      <motion.div 
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="w-full h-full bg-ivory"
      />
    </div>
  </motion.div>
);

/**
 * 2. EDITORIAL PARALLAX SECTION
 * High-definition imagery with architectural text reveals.
 */
interface ParallaxSectionProps {
  image: string;
  subtitle: string;
  title: React.ReactNode;
  cta: string;
  href: string;
  scroll?: boolean; // Add this optional prop
}

const ParallaxSection = ({ image, subtitle, title, cta, href,scroll = true }: ParallaxSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.1]);

const { scrollY } = useScroll();
const footerOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);
const footerScale = useTransform(scrollYProgress, [0.8, 1], [0.95, 1]);

  return (
    <div ref={sectionRef} className="relative z-20 -mt-px bg-charcoal h-[78vh] w-full overflow-hidden border-b border-ivory/5">
      <Link href={href} scroll={scroll} passHref>
        <section className="relative h-full w-full flex items-center justify-center cursor-pointer overflow-hidden">
          
          <motion.div
            style={{ 
              backgroundImage: `url(${image})`,
              y: y,
              scale: scale,
            }}
            className="absolute inset-0 bg-center bg-cover bg-no-repeat will-change-transform"
          />
          
          <div className="absolute inset-0 bg-black/20 z-0" />

          <div className="relative z-10 flex flex-col items-center w-full px-8 mt-90 lg:mt-90 text-center max-w-5xl">
            <motion.span 
              //  initial={{ opacity: 0, y: 10 }}
              //  whileInView={{ opacity: 0.8, y: 0 }}
              //  transition={{ duration: 1.2 }}
              //  viewport={{ once: true }}
               className="text-[10px] md:text-[10px] text-ivory mb-2 font-normal uppercase tracking-[0.5em] font-lato"
            >
              {subtitle}
            </motion.span>
            
            <motion.h2 
              //  initial={{ opacity: 0, y: 30 }}
              //  whileInView={{ opacity: 1, y: 0 }}
              //  transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
              //  viewport={{ once: true }}
               className="text-[30px] lg:text-[34px] scale-y-90 font-larken font-normal  text-ivory mb-5 leading-[1.1]"
            >
              {title}
            </motion.h2>

            <motion.div
              // initial={{ opacity: 0 }}
              // whileInView={{ opacity: 1 }}
              // transition={{ duration: 1, delay: 0.5 }}
              // viewport={{ once: true }}
            >
              <button className="group relative border border-ivory/30 px-6 pt-2 pb-3 text-charcoal bg-ivory cursor-pointer hover:brightness-90 overflow-hidden transition-all duration-700">
                <span className="relative z-10 text-[10px] tracking-[0.2em] font-lato uppercase group-hover:text-charcoal transition-colors duration-500 font-medium">
                  {cta}
                </span>
                
              </button>
            </motion.div>
          </div>
        </section>
      </Link>
    </div>
  );
};

export default function Home() {
  const [loading, setLoading] = useState(true);
  const mainContentRef = useRef<HTMLDivElement>(null);

  // 3. FOOTER REVEAL LOGIC
  const { scrollYProgress: footerScrollProgress } = useScroll({
    target: mainContentRef,
    offset: ["end end", "end start"]
  });

  const footerOpacity = useTransform(footerScrollProgress, [0.2, 1], [0, 1]);
  const footerBlur = useTransform(footerScrollProgress, [0.2, 1], ["10px", "0px"]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    
    const timer = setTimeout(() => setLoading(false), 3500);
    return () => {
      lenis.destroy();
      clearTimeout(timer);
    };
  }, []);

  return (
    <main className="bg-charcoal font-lato min-h-screen flex flex-col selection:bg-ivory selection:text-charcoal overflow-x-hidden relative">
      

      {/* Cinematic Noise Layer */}
      <div className="fixed inset-0 z-95 pointer-events-none opacity-[0.03] mix-blend-soft-light" 
        style={{ 
       backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
     }}
      />
      
      {/* 4. HEADER: Lower Z than Widgets */}
      <header className="fixed top-0 left-0 w-full z-100">
        <DesktopHeader />
        <MobileHeader />
      </header>

      

      {/* 6. SCROLLING CONTENT: Slides up over the Footer */}
      <div ref={mainContentRef} className="text-ivory flex flex-col relative z-30 bg-charcoal shadow-[0_50px_100px_rgba(0,0,0,0.5)] pt-16 lg:pt-24">
        

        

        <ParallaxSection 
          image="/assets/h5.jpeg"
          subtitle="The Alchemist’s House"
          title={<>A House of Scent <br className="hidden lg:hidden" /> and Memory</>}
          cta="Explore"
          href="/the-house"
        />

        <ParallaxSection 
          image="/assets/c3.jpeg"
          subtitle="Genesis"
          title="The First Soul"
          cta="Discover"
          href="/the-creation"
        />


        <ParallaxSection 
          image="/assets/p2.jpeg"
          subtitle="The Philosophy"
          title={<>Where memory becomes scent. <br className="hidden lg:block" /> </>}
          cta="See More"
          href="/journal"
        />

        <ParallaxSection 
          image="/assets/s2.jpeg"
          subtitle="The Limited Drop"
          title="A Legacy in Fifty Flacons."
          cta="Acquire"
          href="/reserve"
          scroll={false} // This now works without errors
        />
        
      </div>

      {/* 5. HIGHEST LAYER: Contact Widgets */}
      
        <div className="z-110 relative lg:mb-[80vh]">
        <ContactWidget />
        <ContactWidgetMobile />
        </div>

      

         <div className=""></div>

         <div className="z-100 block md:hidden">
            <MobileFooter />
          </div>
      

      {/* 7. THE SECRET: Footer pins to the bottom with a lower z-index */}
      <footer className="fixed bottom-0 left-0 w-full z-10 h-[60vh] lg:h-[80vh] flex flex-col justify-end bg-charcoal">
        {/* We use the motion div to apply the blur/fade effect as it's revealed */}
        <motion.div 
        style={{ 
          opacity: footerOpacity, 
          filter: `blur(${footerBlur})` 
        }}
      >
        <DesktopFooter />

        
        
      </motion.div>
      </footer>
    </main>
  );
}