"use client";
import DesktopHeader from "@/components/DesktopHeader";
import MobileHeader from "@/components/MobileHeader";
import DesktopFooter from "@/components/DesktopFooter";
import MobileFooter from "@/components/MobileFooter";
import { CartProvider } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";
import products from "@/data/products";
import Link from 'next/link';
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


export default function Home() {
// Change your existing hook to this:
const { scrollY } = useScroll();
const { scrollYProgress } = useScroll(); // Use progress for the footer fade
const y = useTransform(scrollY, [0, 800], [-14, 120]); // Moves image down as you scroll
const footerOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);
const footerScale = useTransform(scrollYProgress, [0.8, 1], [0.95, 1]);

  return (
    <main className="bg-ivory text-charcoal font-lato min-h-screen flex flex-col">
      <DesktopHeader />
      <MobileHeader />

      <div className="grow bg-ivory relative z-20 shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
      <Link href="reserve" passHref>
      <section
        className=" flex items-start justify-center bg-center bg-cover bg-no-repeat cursor-pointer h-[610px] relative overflow-hidden">

          <motion.div 
    style={{ 
      backgroundImage: "url('/assets/hero-bg copy.webp')",
      y: y // Using the y transform you already defined
    }}
    className="absolute inset-0 bg-center bg-cover bg-no-repeat scale-105" // scale-110 prevents white edges
  />
      
        

        <div className="relative z-10 flex flex-col items-center w-full lg:pt-[49vh] lg:pb-[9vh] pt-[52vh] pb-[6vh] ">
          <span className="text-xs tracking-widest text-ivory mb-0.5 font-normal uppercase scale-y-95 font-lato">
            A Ruhava Creation
          </span>
          <h1 className="text-3xl lg:text-4xl md:text-3xl sm:text-2xl font-larken font-normal tracking-wider text-ivory mb-3 text-center leading-tight drop-shadow-lg scale-y-95">
            The First Soul
            <br />
           {/* <span className="block text-sm md:text-sm font-normal mt-2">
              The first creation of Ruhava. <br/>
              Fifty Bottles prepared by hand.
            </span> */}
          </h1>
           <button className="bg-ivory text-charcoal px-6 py-4 font-medium hover:bg-ivory hover:text-charcoal transition delay-100 duration-200 ease-in text-xs cursor-pointer tracking-wider scale-y-95 font-lato">
            SEE MORE
          </button>
        </div>
      </section>
      </Link>
      </div>

    

      {/* <div className="max-w-6xl mx-auto py-10">

       <h1 className="text-3xl font-light tracking-tight mb-8">
        Our Collections
      </h1> */}

      {/* Display Product Cards */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div> */}
      
      {/*
    </div> */}

      {/*
      <section
        className="relative flex items-center justify-center min-h-[80vh] bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/assets/bg-img-1.webp')" }}
      ></section> 
      */}

      <div className=""></div>

      
      <footer className="sticky bottom-0 left-0 w-full z-10">
      <DesktopFooter />
      </footer>
      <MobileFooter />
      

    </main>
  );
}
