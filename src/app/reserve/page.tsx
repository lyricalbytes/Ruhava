"use client";
import DesktopHeader from "@/components/DesktopHeader";
import MobileHeader from "@/components/MobileHeader";
import DesktopFooter from "@/components/DesktopFooter";
import MobileFooter from "@/components/MobileFooter";
import ContactWidget from "@/components/ContactWidgetDesktop";
import Image from "next/image";
import { Span } from "next/dist/trace";
import { Search, User, Star, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";


export default function Reserve() {

  const { scrollY } = useScroll();
const { scrollYProgress } = useScroll(); // Use progress for the footer fade
const y = useTransform(scrollY, [0, 800], [-14, 120]); // Moves image down as you scroll
const footerOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);
const footerScale = useTransform(scrollYProgress, [0.8, 1], [0.95, 1]);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className="bg-ivory text-charcoal font-lato min-h-screen flex flex-col">
      <DesktopHeader />
      <MobileHeader />
  <div className="z-20 bg-ivory">
      <div className="px-6 md:px-20 lg:px-32 py-16 flex flex-col md:flex-row gap-10 lg:my-17">
      <Image
      src="/assets/thefirstsoul15.png"
      width={500}
      height={500}
      alt="The First Soul"
      className="w-full max-w-md mx-auto"
      />
      <div className="w-full max-w-md mx-auto lg:px-7">
        <div className="lg:text-left text-center">
        <h1 className="font-larken tracking-wider text-[25px] text-charcoal scale-y-90">
          The First Soul
        </h1>
        <hr className="mt-0.5 border-none h-1 bg-charcoal" />
        
        <p className="mt-3 font-thin font-lato  text-[14.5px]">
          EAU DE PARFUM SPRAY
        </p>
        <button className="text-sm mt-0.5 font-thin font-lato underline underline-offset-5 cursor-pointer ">
          More details
        </button>
        <p className="text-[14.5px] text-grey mt-3 ">
          Bottle 04 / 50
        </p>
        </div>
        <div className="flex justify-between items-center mt-5">
          <p className="scale-y-90 font-semibold font-lato tracking-widest">
          ₹ 700<span className="text-grey">*</span>
          </p>
          <button
            className="cursor-pointer"
            aria-label=""
          >
            <Star size={15} strokeWidth={2.5} />
          </button>
        </div>
        <hr className="mt-5 border-none py-[0.2px] bg-grey px-10 " />
        <p className="mt-3 tracking-wider font-lato text-[12px] font-semibold scale-y-90">
          1 SIZE AVAILABLE
        </p>
        <p className="text-[14px] font-lato mt-3.5 font-thin tracking-wide">
          30 ml
        </p>
        <button
        onClick={() => setIsOpen(true)}
        className="bg-charcoal text-ivory w-full py-4 font-medium text-[11.5px] cursor-pointer tracking-widest scale-y-90 font-lato mt-5  hover:bg-grey transition ease-in"
        >
        RESERVE YOUR BOTTLE
        </button>
        <div className="scale-y-95 text-grey font-light text-[14px] mt-3.5">
          *MRP (inclusive of all taxes). <span className="underline underline-offset-5 decoration-charcoal cursor-pointer scale-y-95  text-grey font-light text-[14px]">More information</span>
        </div>
        <div className="mt-4.5 underline underline-offset-5  decoration-charcoal cursor-pointer scale-y-95 font-light text-[14.5px] text-charcoal">
          Client reviews
        </div>
      </div>
      </div>
      </div>
  
  
     <AnimatePresence>
  {isOpen && (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-100 p-4"
      onClick={() => setIsOpen(false)} // Close on backdrop click
    >
      <motion.div 
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="bg-ivory p-10 md:p-16 w-full max-w-xl relative shadow-2xl"
        onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-8 right-8 text-charcoal cursor-pointer"
        >
          <span className="text-xl font-light">✕</span>
        </button>

        <h2 className="font-larken text-[20px] lg:text-[22px] mb-2 tracking-widest text-charcoal scale-y-95 uppercase">
          Reserve a Creation
        </h2>
        <p className="text-[14px] lg:text-[14px] text-grey font-lato mb-12 scale-y-95">
          Current Drop: The First Soul
        </p>

        <form 
          action="https://api.web3forms.com/submit" 
          method="POST" 
          className="flex flex-col gap-10"
        >
          {/* Web3Forms Access Key */}
          <input type="hidden" name="access_key" value="YOUR_KEY_HERE" />
          
          {/* Floating Label Input Field */}
          {[
            { label: "Full Name", name: "name", type: "text" },
            { label: "Email Address", name: "email", type: "email" },
            { label: "City", name: "city", type: "text" },
          ].map((field) => (
            <div key={field.name} className="relative group">
              <input
                required
                type={field.type}
                name={field.name}
                placeholder=" " 
                className="peer w-full bg-transparent border-b border-grey/30 py-2 outline-none text-[14px] text-charcoal transition-colors duration-500 focus:border-charcoal group-hover:border-grey scale-y-95 font-lato"
              />
              <label className="absolute left-0 top-2 text-grey text-[14px] pointer-events-none transition-all duration-300 scale-y-95 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-charcoal peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px] font-lato">
                {field.label}
              </label>
            </div>
          ))}

          <div className="relative group">
            <textarea
              name="message"
              placeholder=" "
              className="peer w-full bg-transparent border-b border-grey/30 py-2 outline-none text-[14px] text-charcoal transition-colors duration-500 focus:border-charcoal group-hover:border-grey resize-none h-20 scale-y-95 font-lato"
            />
            <label className="absolute left-0 top-2 text-grey text-[14px] pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-charcoal peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px] scale-y-95 font-lato">
              Gift Message (Optional)
            </label>
          </div>

          <button
            type="submit"
            className="bg-charcoal text-ivory py-5 mt-4 text-[11px] tracking-[0.15em] uppercase hover:bg-black transition-all duration-500 shadow-lg group flex items-center justify-center gap-3 cursor-pointer font-lato"
          >
            <span>Request Reservation</span>
          </button>
        </form>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

     <ContactWidget />

      <footer className="sticky bottom-0 left-0 w-full z-10">
      <DesktopFooter />
      </footer>
      <MobileFooter />

    </main>
  );
}