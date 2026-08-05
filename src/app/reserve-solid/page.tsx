"use client";
import DesktopHeader from "@/components/DesktopHeader";
import MobileHeader from "@/components/MobileHeader";
import DesktopFooter from "@/components/DesktopFooter";
import MobileFooter from "@/components/MobileFooter";
import ContactWidget from "@/components/ContactWidgetDesktop";
import Image from "next/image";
import { Span } from "next/dist/trace";
import { Search, User, Star, ShoppingBag } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import ContactWidgetMobile from "@/components/ContactWidgetMobile";
import Lenis from 'lenis';


  import { useLayoutEffect } from "react"; // Add this import

  
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
        className="w-full flex justify-between items-center py-4"
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
    <div className="border-b border-grey/20 mx-5">
      <button 
        onClick={() => setIsOpen(!isClosed)}
        className="w-full flex justify-between items-center py-6 cursor-pointer"
      >
        <span className="font-larken tracking-widest text-[13px] uppercase text-charcoal scale-y-90 py-0.5 ">{title}</span>
        <ChevronDown className={`transition-transform ${isClosed ? 'rotate-180' : ''}`} size={16}/>
      </button>
      {isClosed && <div className=" pb-6 font-lato text-sm text-grey">{children}</div>}
    </div>
  );
};


export default function Reserve() {

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

useEffect(() => {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  // 3. THE RESET: Force Lenis to the top on every mount
  // We wrap this in a frame request to ensure the DOM is ready
  requestAnimationFrame(() => {
    lenis.scrollTo(0, { immediate: true });
  });

  const raf = (time: number) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);

  return () => {
    lenis.destroy();
    // Optional: Re-enable auto restoration when leaving
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'auto';
    }
  };
}, []);

  return (
    <main className="bg-ivory text-charcoal font-lato relative   flex flex-col">
      <DesktopHeader />
      <MobileHeader />
  <div className="z-20 bg-ivory relative shadow-[0_20px_50px_rgba(0,0,0,0.1)] " >
      <div id="top" className="px-6 md:px-20 lg:px-32 py-16 flex flex-col md:flex-row gap-10 lg:mt-17">
      <div className="flex lg:flex-col gap-6 lg:px-10">
      <Image
      src="/assets/ChatGPT Image Jul 19, 2026 at 05_27_00 PM.png"
      width={500}
      height={500}
      alt="The First Soul"
      className="w-full max-w-md mx-auto"
      />
      <Image
      src="/assets/ChatGPT Image Jul 19, 2026 at 05_36_27 PM.png"
      width={500}
      height={500}
      alt="The First Soul"
      className="w-full max-w-md mx-auto lg:block hidden"
      />
      </div>
      <div className="w-full max-w-md mx-auto lg:px-7">
        
        <div className="lg:text-left text-center">
        <h1 className="font-larken tracking-wider text-[25px] text-charcoal scale-y-90">
          the first soul
        </h1>
        <hr className="mt-0.5 border-none h-1 bg-charcoal" />
        
        <p className="mt-3 font-thin font-lato text-[14.5px] opacity-90">
          CONCRETE DE PARFUM
        </p>
        <button className="text-sm mt-0.5 font-thin font-lato underline underline-offset-5 cursor-pointer ">
          More details
        </button>
        <p className="text-[14.5px] text-grey mt-3 ">
          Palette 01 of 14
        </p>
        </div>
        <div className="flex justify-between items-center mt-5">
          <p className="scale-y-90 font-semibold font-lato tracking-widest">
          ₹ 490<span className="text-grey">*</span>
          </p>
          <button
            className="cursor-pointer hidden"
            aria-label=""
          >
            <Star size={15} strokeWidth={2.5} />
          </button>
        </div>
        <hr className="mt-5 border-none py-[0.2px] bg-grey px-10 " />
        <p className="mt-3 tracking-wider font-lato text-[12px] font-semibold scale-y-90">
          1 SIZE AVAILABLE
        </p>
        <p className="text-[14px] font-lato mt-1.5 font-thin tracking-wide">
          15 gm
        </p>
        <button
        onClick={() => setIsOpen(true)}
        className="bg-charcoal text-ivory w-full py-5 font-medium text-[11.5px] cursor-pointer tracking-widest scale-y-85 font-lato mt-5  hover:bg-grey transition ease-in uppercase"
        >
        ACQUIRE Your Palette
        </button>
        <div className="scale-y-95 text-grey font-light text-[14px] mt-3.5">
          *MRP (inclusive of all taxes). <span className="underline underline-offset-5 decoration-charcoal cursor-pointer scale-y-95  text-grey font-light text-[14px]">More information</span>
        </div>
        <div className="mt-4.5 underline underline-offset-5  decoration-charcoal cursor-pointer scale-y-95 font-light text-[14.5px] text-charcoal">
          Client reviews
        </div>
      </div>
      </div>

      <div className="uppercase text-center lg:text-3xl text-2xl scale-y-85 font-normal tracking-widest text-charcoal font-larken">
        <h1>Product Information</h1>
      </div>

      <div className='bg-ivory py-15 z-40 block lg:px-50 px-20'>

      {/*  <AccordionItem title="Contact an Advisor">
        <p>Monday - Sunday, 10 a.m. - 8 p.m.</p>
        <a href="mailto:ruhava.official@gmail.com" className="underline">Email Us</a>
      */}

      <hr className='bg-grey/20 border-none mx-5  py-[0.5px]'/>

      <nav className=''>
        <AccordionItem title="Description">
            
            <h2 className="font-larken tracking-widest text-[13px] uppercase text-charcoal scale-y-85 pb-4">
              Product
            </h2>
            <p className='space-x-4 text-charcoal font-lato text-[14px] leading-relaxed pb-3 font-light'> 
            A luminous SOUL that dazzles with splendour. THE FIRST SOUL, a magnetic fragrance that releases an olfactory whirlwind, diffusing a coffee-vanilla fragrance trail that is modern and energetic.

            </p>
            <h2 className="font-larken tracking-widest text-[13px] uppercase text-charcoal scale-y-85 ">
              Composition
            </h2>
            <p className=' space-x-4 text-charcaol font-lato text-[14px] leading-relaxed pb-3 font-light'> 
            For THE FIRST SOUL, Harsh, Author of The Hurt Ones, Founder of Maison Ruhava, and RUHAVA In-House Perfumer-Creator, created a bold and confident composition.
            </p>

            <p className=' space-x-4 text-charcaol font-lato text-[14px] leading-relaxed pb-3 font-light'> 
            The bright, luminous Jasmine accord, with facets of crisp pear, vanilla and orange blossom, soars before revealing a rich and dark floral heart of black coffee. This coffee, with a naturally bold scent and a subtle jolty note, is grown in the fields in Coorg. It is accompanied by a sophisticated touch of patchouli and a mysterious cedar woody accord.
            </p> 

            <p className=' space-x-4 text-charcaol font-lato text-[14px] leading-relaxed pb-3 font-light'> 
            An olfactory whirlwind leaves a coffee-vanilla fragrance trail that is modern and energetic. 
            </p>

            {/* <h2 className="font-larken tracking-widest text-[13px] uppercase text-charcoal scale-y-85 pb-4">
              Inspiration
            </h2>
            <p className='space-x-4 text-charcoal font-lato text-[14px] leading-relaxed pb-3 font-light'> 
            "Luck is my soul." All her life, Gabrielle Chanel cultivated luck. In believing that anything was possible, she turned her dreams into reality.

For CHANEL, luck embodies an attitude, a way of being. A statement of faith that drives you to take control of your destiny.

Sparkling, surprising, mystifying: Chance is never a matter of coincidence. It arises from a timely encounter, a purposeful meeting.

It arrives with a bang. It has an intoxicating effect on you, pulling you into a whirlwind. Chance is a brazen success, youthful, like a nod to fate. Chance is meant to be seized, like a joy-scented talisman.

It represents perpetual movement and renewal, which is echoed by the round bottle that, like infinity, has no end. A way to bet everything on yourself, to choose yourself and to always give yourself another chance to play the game.

            </p> */}

            <h2 className="font-larken tracking-widest text-[13px] uppercase text-charcoal scale-y-85 ">
              Art of Perfuming
            </h2>
            <p className=' space-x-4 text-charcaol font-lato text-[14px] leading-relaxed pb-3 font-light'> 
            To express the full intensity of the interpretation, apply a generous sweeping dab of THE FIRST SOUL Concrete de Parfum at the base of the neck, on the right then on the left. The secret touch: apply a touch of fragrance to the nape of the neck, under the hair.
            </p>

            <p className=' space-x-4 text-charcaol font-lato text-[14px] leading-relaxed pb-3 font-light'> 
            Also apply to the inside of clothing to increase the fragrance trail and make your presence felt.
            </p> 

            <p className=' space-x-4 text-charcaol font-lato text-[14px] leading-relaxed pb-3 font-light'> 
            "When I leave my hoodie behind, everyone knows that it's mine" - Patron Ruhava
            </p>

        </AccordionItem>
          </nav>

    
      <div className=''>
        {/*
      <nav className='ml-5 mb-10'>
          <h2 className='text-charcoal scale-y-90 font-larken tracking-widest text-[13.5px] py-0.5 uppercase'>
            Contact an Advisor
          </h2>
            <p className='space-x-4 text-grey font-lato text-[14px]'>
              Please contact RUHAVA Client Care Department on <br />
              Monday - Sunday, 10 a.m. - 8 p.m. (except National <br />
              Holidays) via email at <a className='underline cursor-pointer hover:decoration-0'>ruhava.official@gmail.com</a>
            </p>
          </nav>
          

          <hr className='bg-grey border-none mx-5 my-5 py-[0.2px]'/>
          */}

        {/*
          <nav className=''>
          <AccordionItem title="Find a Store">
              <p className='space-x-4 text-grey font-lato text-[14px]'>
                Enter a location to find the closest RUHAVA stores
              </p>
            

              <div className='mt-7 flex'>
                <input type="hidden" name="access_key" value="YOUR_KEY_HERE" />
          
          
          {[
            { label: "City or zip code", name: "city", type: "text" },
          ].map((field) => (
            <div key={field.name} className="relative group w-78">
                <input
                required
                type={field.type}
                name={field.name}
                placeholder=" " 
                className="peer w-full bg-transparent border-b border-grey/30 py-1.5 outline-none text-sm text-charcoal transition-colors duration-500 focus:border-charcoal group-hover:border-grey scale-y-95 font-lato"
              />
              <label className="absolute left-0 top-2 text-grey text-sm pointer-events-none transition-all duration-300 scale-y-95 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-charcoal peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px] font-lato">
                {field.label}
               
                
              </label>
              
               
              <div className='absolute inset-0 flex ml-70'><a href="/" className='text-charcoal text-[14px] px-3 mt-2'><Search size={18} strokeWidth={1.5} /></a></div>

              </div>
              ))}

              
              
              <div className='border-l h-5 border-gray-300 mx-4 mt-2'>
              </div>
              
              <div className='inset-0 flex'><a href="/" className='text-charcoal text-[14px] mt-2'><LocateFixed size={18} strokeWidth={1.5} /></a></div>
              
              </div>
              </AccordionItem>
            
          </nav>
          */}

          <nav className=''>
          <AccordionItem title="Additional Information">
            <h2 className="font-larken tracking-widest text-[13px] uppercase text-charcoal scale-y-85 pb-4">
              Size
            </h2>
            <p className='space-x-4 text-charcoal font-lato text-[14px] leading-relaxed pb-4 font-light'> 
            15 gm
            </p>
            <h2 className="font-larken tracking-widest text-[13px] uppercase text-charcoal scale-y-85 ">
              List of Ingredients
            </h2>
            <p className='uppercase space-x-4 text-charcaol font-lato text-[14px] leading-relaxed pb-5 font-light'> 
            Parfum (fragrance) | Tetramethyl Acetyloctahydronaphthalenes | Cera Alba | Prunus Amygdalus Dulcis Oil | Isopropyl Myristate | Tocopherol | Pogostemon Cablin Leaf Oil | Jasminum Sambac Flower Extract | Benzyl Salicylate | Linalool | Hydroxycitronellal | Limonene | Geraniol | Coumarin
            </p>
            <p className=' space-x-4 text-grey font-lato text-[14px] leading-relaxed pb-1 font-light'> 
            The list of ingredients is included on all of our product packaging. In case of an allergy, always check the list of ingredients before you use the product.
            </p>
            <p className=' space-x-4 text-grey font-lato text-[14px] leading-relaxed pb-4 font-light'> 
            Country of Origin: India
            </p>

              {/* <p className='space-x-4 text-grey font-lato text-[14px] leading-relaxed'>
                RUHAVA creations are currently available exclusively online. 
                The First Soul: Edition of 50. 
                <br /><br />
                <Link href="/reserve" className="underline underline-offset-4 hover:decoration-0">Check Availability</Link>
              </p> */}
            

              
              </AccordionItem>
            
          </nav>

          {/*
          <hr className='bg-grey border-none mx-5 my-5 py-[0.2px]'/>
          */}

          {/* <nav className=''>
            <AccordionItem title="Reviews"> 
          
              <p className='space-x-4 text-grey font-lato text-[14px] leading-relaxed'>
                Avenue of Information from RUHAVA
              </p>
              <button className=' text-grey font-lato font-thin text-[14px] underline underline-offset-4 mt-3 cursor-pointer hover:decoration-0'>
                Request Correspondence
              </button>
            </AccordionItem>
          </nav>

          <nav className=''>
            <AccordionItem title="The Art of Wrapping"> 
          
              <p className='space-x-4 text-grey font-lato text-[14px] leading-relaxed'>
                Avenue of Information from RUHAVA
              </p>
              <button className=' text-grey font-lato font-thin text-[14px] underline underline-offset-4 mt-3 cursor-pointer hover:decoration-0'>
                Request Correspondence
              </button>
            </AccordionItem>
          </nav>

          <nav className=''>
            <AccordionItem title="Online Order"> 
          
              <p className='space-x-4 text-grey font-lato text-[14px] leading-relaxed'>
                Avenue of Information from RUHAVA
              </p>
              <button className=' text-grey font-lato font-thin text-[14px] underline underline-offset-4 mt-3 cursor-pointer hover:decoration-0'>
                Request Correspondence
              </button>
            </AccordionItem>
          </nav> */}

          </div>

          {/* <div className="h-450px ">
            <Image
      src="/assets/concrete2.png"
      width={500}
      height={500}
      alt="The First Soul"
      className="w-full max-w-md mx-auto"
      />

            

          </div> */}

    </div>
      
      </div>

      

      <ContactWidget />
      <ContactWidgetMobile />
  
  
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

        <h2 className="font-larken text-[18px] lg:text-[20px] mb-2 tracking-widest text-charcoal scale-y-85 uppercase">
          Reserve a Creation
        </h2>
        <p className="text-[14px] lg:text-[14px] text-grey font-lato mb-12">
          Current Drop: The First Soul
        </p>

        <form 
          action="https://api.web3forms.com/submit" 
          method="POST" 
          className="flex flex-col gap-10"
        >
          {/* Web3Forms Access Key */}
          <input type="hidden" name="access_key" value="0ecca714-22c9-4b87-b620-754286bcf0f6" />
          
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
            className="bg-charcoal text-ivory py-6 mt-4 text-[11px] tracking-[0.15em] uppercase hover:bg-black transition-all duration-500 shadow-lg group flex items-center justify-center gap-3 cursor-pointer font-lato scale-y-85"
          >
            <span>Request Allocation</span>
          </button>
        </form>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

     <div className="z-100 block md:hidden">
                 <MobileFooter />
               </div>

      <footer className="sticky bottom-0 left-0 w-full z-10">
  <DesktopFooter />
  
</footer>

    </main>
  );
}