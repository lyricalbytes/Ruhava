"use client";

import { useState, useEffect, useRef, useLayoutEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, User, Star, ShoppingBag, ChevronDown } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

import DesktopHeader from "@/components/DesktopHeader";
import MobileHeader from "@/components/MobileHeader";
import DesktopFooter from "@/components/DesktopFooter";
import MobileFooter from "@/components/MobileFooter";
import ContactWidget from "@/components/ContactWidgetDesktop";
import ContactWidgetMobile from "@/components/ContactWidgetMobile";


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
        className="w-full flex justify-between items-center py-4 cursor-pointer"
      >
        <span className="font-larken tracking-widest text-[13px] uppercase text-charcoal scale-y-85 py-0.5">
          {title}
        </span>
        <ChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} size={16}/>
      </button>
      {isOpen && <div className="pb-6 font-lato text-sm text-grey">{children}</div>}
    </div>
  );
};

const AccordionItem2 = ({ title, children }: AccordionProps) => {
  const [isClosed, setIsOpen] = useState(true);
  return (
    <div className="border-b border-grey/20 mx-5">
      <button 
        onClick={() => setIsOpen(!isClosed)}
        className="w-full flex justify-between items-center py-4 cursor-pointer"
      >
        <span className="font-larken tracking-widest text-[13px] uppercase text-charcoal scale-y-85 py-0.5">
          {title}
        </span>
        <ChevronDown className={`transition-transform duration-300 ${isClosed ? 'rotate-180' : ''}`} size={16}/>
      </button>
      {isClosed && <div className="pb-6 font-lato text-sm text-grey">{children}</div>}
    </div>
  );
};

interface ProductGalleryProps {
  images: { src: string; alt: string }[];
}

function MobileProductGallery({ images }: ProductGalleryProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollLeft, clientWidth } = container;
      if (clientWidth > 0) {
        const index = Math.round(scrollLeft / clientWidth);
        setActiveIndex(index);
      }
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-full max-w-md mx-auto bg-transparent block lg:hidden">
      {/* Horizontal Snap Scroll Track */}
      <div
        ref={scrollContainerRef}
        className="flex w-full overflow-x-auto snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full shrink-0 snap-start snap-always relative aspect-square"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 450px"
              priority={index === 0}
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 bg-transparent px-3 py-1.5 rounded-full backdrop-blur-sm pointer-events-none">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeIndex === index ? 'bg-black w-2' : 'bg-white/50 border border-black w-2'
            }`}
          />
        ))}
      </div>

      {/* Counter Badge */}
      <div className="absolute top-4 right-4 bg-black/60 text-white text-xs px-2.5 py-1 rounded-md font-medium pointer-events-none hidden">
        {activeIndex + 1} / {images.length}
      </div>
    </div>
  );
}

export default function Reserve() {
  const { scrollY, scrollYProgress } = useScroll();
  const y = useTransform(scrollY, [0, 800], [-14, 120]);
  const footerOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);
  const footerScale = useTransform(scrollYProgress, [0.8, 1], [0.95, 1]);

  const [isOpen, setIsOpen] = useState(false);

  const productImages = [
    {
      src: "/assets/ChatGPT Image Jul 19, 2026 at 05_27_00 PM.webp",
      alt: "The First Soul - Front View"
    },
    {
      src: "/assets/ChatGPT Image Jul 19, 2026 at 05_36_27 PM.webp",
      alt: "The First Soul - Angle View"
    }
  ];

  useLayoutEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

 

  return (
    <main className="bg-ivory text-charcoal font-lato relative flex flex-col min-h-screen">
      <DesktopHeader />
      <MobileHeader />

      <div className="z-20 bg-ivory relative shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
        <div id="top" className=" md:px-20 lg:px-32 flex flex-col md:flex-row items-start gap-10 mb-16 lg:my-0">
          
          {/* Desktop Stacked Images */}
          <div className="hidden lg:flex lg:flex-col gap-6 lg:py-32 w-full max-w-md mx-auto">
            {productImages.map((img, i) => (
              <Image
                key={i}
                src={img.src}
                width={500}
                height={500}
                alt={img.alt}
                priority={i === 0}
                className="w-full max-w-md mx-auto object-cover"
              />
            ))}
          </div>

          {/* Mobile Swipe Carousel */}
          <MobileProductGallery images={productImages} />

          {/* Sticky Product Details Sidebar */}
          <div className="w-full max-w-md mx-auto lg:px-7 lg:py-32 lg:sticky lg:top-24 h-fit px-6">
            <div className="lg:text-left text-center">
              <h1 className="font-larken tracking-wider text-[25px] text-charcoal scale-y-90">
                the first soul
              </h1>
              <hr className="mt-0.5 border-none h-1 bg-charcoal" />
              
              <p className="mt-3 font-thin font-lato text-[14.5px] opacity-90">
                CONCRETE DE PARFUM
              </p>
              <a href="#info">
              <button className="text-sm mt-0.5 font-thin font-lato underline underline-offset-5 cursor-pointer" id="scrl-btn">
                More details
              </button>
              </a>
              <p className="text-[14.5px] text-grey mt-3">
                Palette 01 of 14
              </p>
            </div>

            <div className="flex justify-between items-center mt-5">
              <p className="scale-y-90 font-semibold font-lato tracking-widest">
                ₹ 600<span className="text-grey">*</span>
              </p>
              <button className="cursor-pointer hidden" aria-label="Favorite">
                <Star size={15} strokeWidth={2.5} />
              </button>
            </div>

            <hr className="mt-5 border-none py-[0.2px] bg-grey px-10" />
            
            <p className="mt-3 tracking-wider font-lato text-[12px] font-semibold scale-y-90">
              1 SIZE AVAILABLE
            </p>
            <p className="text-[14px] font-lato mt-1.5 font-thin tracking-wide">
              15 gm
            </p>

            <button
              onClick={() => setIsOpen(true)}
              className="bg-charcoal text-ivory w-full py-5 font-medium text-[11.5px] cursor-pointer tracking-widest scale-y-85 font-lato mt-5 hover:bg-grey transition ease-in uppercase"
            >
              ACQUIRE Your Palette
            </button>

            <div className="scale-y-95 text-grey font-light text-[14px] mt-3.5">
              *MRP (inclusive of all taxes).{" "}
              <span className="underline underline-offset-5 decoration-charcoal cursor-pointer scale-y-95 text-grey font-light text-[14px]">
                More information
              </span>
            </div>
            
            <div className="mt-4.5 underline underline-offset-5 decoration-charcoal cursor-pointer scale-y-95 font-light text-[14.5px] text-charcoal">
              Client reviews
            </div>
          </div>
        </div>

        {/* Product Information Section */}
        <div className="uppercase text-center lg:text-3xl text-2xl scale-y-85 font-normal tracking-widest text-charcoal font-larken" id="info">
          <h1>Product Information</h1>
        </div>

        <div className="bg-ivory py-15 z-40 block lg:px-50">
          <hr className="bg-grey/20 border-none mx-5 py-[0.5px]" />

          <nav>
            <AccordionItem2 title="Description">
              <h2 className="font-larken tracking-widest text-[13px] uppercase text-charcoal scale-y-85 pb-4">
                Product
              </h2>
              <p className="space-x-4 text-charcoal font-lato text-[14px] leading-relaxed pb-3 font-light">
                A luminous SOUL that dazzles with splendour. THE FIRST SOUL, a magnetic fragrance that releases A pocket-sized aromatic treasure, diffusing a coffee-vanilla fragrance trail that is modern and energetic.
              </p>

              <h2 className="font-larken tracking-widest text-[13px] uppercase text-charcoal scale-y-85">
                Composition
              </h2>
              <p className="space-x-4 text-charcoal font-lato text-[14px] leading-relaxed pb-3 font-light">
                For THE FIRST SOUL, Harsh, Founder of the Maison, and RUHAVA In-House Perfumer-Creator, created a bold and confident composition.
              </p>
              <p className="space-x-4 text-charcoal font-lato text-[14px] leading-relaxed pb-3 font-light">
                The bright, luminous Jasmine accord, with facets of crisp pear, vanilla and orange blossom, soars before revealing a rich and dark floral heart of black coffee. This coffee, with a naturally bold scent and a subtle jolty note, is grown in the fields in Coorg. It is accompanied by a sophisticated touch of patchouli and a mysterious cedar-wood accord.
              </p>
              <p className="space-x-4 text-charcoal font-lato text-[14px] leading-relaxed pb-3 font-light">
                A pocket-sized aromatic treasure leaves a coffee-vanilla fragrance trail that is modern and energetic.
              </p>

              <h2 className="font-larken tracking-widest text-[13px] uppercase text-charcoal scale-y-85">
                Art of Perfuming
              </h2>
              <p className="space-x-4 text-charcoal font-lato text-[14px] leading-relaxed pb-3 font-light">
                To express the full intensity of the interpretation, apply a generous sweeping dab of THE FIRST SOUL Concrete de Parfum at the base of the neck, on the right then on the left. The secret touch: apply a touch of fragrance to the nape of the neck, under the hair.
              </p>
              <p className="space-x-4 text-charcoal font-lato text-[14px] leading-relaxed pb-3 font-light">
                Also apply to the inside of clothing to increase the fragrance trail and make your presence felt.
              </p>
              <p className="space-x-4 text-charcoal font-lato text-[14px] leading-relaxed pb-3 font-light">
                &ldquo;When I leave my hoodie behind, everyone knows that it&apos;s mine&rdquo; - Patron, RUHAVA
              </p>
            </AccordionItem2>
          </nav>

          <nav>
            <AccordionItem title="Additional Information">
              <h2 className="font-larken tracking-widest text-[13px] uppercase text-charcoal scale-y-85 pb-4">
                Size
              </h2>
              <p className="space-x-4 text-charcoal font-lato text-[14px] leading-relaxed pb-4 font-light">
                15 gm
              </p>

              <h2 className="font-larken tracking-widest text-[13px] uppercase text-charcoal scale-y-85">
                List of Ingredients
              </h2>
              <p className="uppercase space-x-4 text-charcoal font-lato text-[14px] leading-relaxed pb-5 font-light">
                Parfum (fragrance) | Tetramethyl Acetyloctahydronaphthalenes | Cera Alba | Prunus Amygdalus Dulcis Oil | Isopropyl Myristate | Tocopherol | Pogostemon Cablin Leaf Oil | Jasminum Sambac Flower Extract | Benzyl Salicylate | Linalool | Hydroxycitronellal | Limonene | Geraniol | Coumarin
              </p>
              <p className="space-x-4 text-grey font-lato text-[14px] leading-relaxed pb-1 font-light">
                The list of ingredients is included on all of our product packaging. In case of an allergy, always check the list of ingredients before you use the product.
              </p>
              <p className="space-x-4 text-grey font-lato text-[14px] leading-relaxed pb-4 font-light">
                Country of Origin: India
              </p>
            </AccordionItem>
          </nav>
        </div>
      </div>

      <ContactWidget />
      <ContactWidgetMobile />

      {/* Reservation Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-100 p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div 
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="bg-ivory p-10 md:p-16 w-full max-w-xl relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-8 right-8 text-charcoal cursor-pointer"
                aria-label="Close modal"
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
                <input type="hidden" name="access_key" value="0ecca714-22c9-4b87-b620-754286bcf0f6" />
                
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

      <footer className="sticky bottom-0 left-0 w-full z-10 hidden md:block">
        <DesktopFooter />
      </footer>
    </main>
  );
}