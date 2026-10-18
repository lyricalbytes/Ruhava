"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface Product {
  id: string;
  name: string;
  subtitle: string;
  size: string;
  image: string;
  href: string;

  // Edit these independently for every product
  price: string;
  originalPrice?: string;

  badge?: string;

  buttonText: string;
soldOut?: boolean;
}

const products: Product[] = [
  {
    id: "quiet-chapter",
    name: "Fragrance Layering Balm - Quiet Chapter",
    // subtitle: "Coffee · Warm · Gourmand",
    // subtitle: "First Light · Gourmand",
     subtitle: "Energetic · Warm · Gourmand",
    size: "5 gm",
    image: "/assets/quiet-chapter-5gm.webp",
    href: "https://rzp.io/rzp/G3Y3UOB",
    price: "₹179",
    originalPrice: "₹299",
    buttonText: "Pre-order Now",
    badge: "ONLY 2 to be MADE",
  },

  {
    id: "first-soul-8ml",
    name: "The First Soul Extrait de Parfum Spray",
    // subtitle: "Coffee · Vanilla · Memory",
    // subtitle: "Midnight Café · Memory",
    subtitle: "Mysterious · Bold · Night wear",
    size: "8 ml",
    image: "/assets/thefirstsouledp19.webp",
    href: "#",
    price: "₹500",
    originalPrice: "₹700",
    // buttonText: "Sold Out",
    buttonText: "Notify me when available",
    badge: "FULLY CLAIMED",
  },

  {
    id: "literary-trio",
    // name: "Fragrance Layering Balm - The Literary Trio",
    name: "Fragrance Layering Balm - The 24-Hour Scent Cycle",
    // subtitle: "First Soul + Quiet Chapter + Velvet",
    // subtitle: "Morning + Evening + Night",
    subtitle: "Free 10gm Palette on next pounce*",
    size: "3 × 5 gm",
    image: "/assets/b-img-1-try-2.webp",
    href: "https://rzp.io/rzp/G3Y3UOB",
    price: "₹399",
    originalPrice: "₹599",
    buttonText: "Pre-order Now",
    badge: "ONLY 2 to be MADE",
  },

  {
    id: "first-soul-10gm",
    name: "Fragrance Layering Balm - First Soul",
    // subtitle: "Coffee · Vanilla · Memory",
    // subtitle: "Midnight Café · Memory",
    subtitle: "Indulgent · Rich · Winter Wear",
    size: "10 gm",
    image: "/assets/first-soul-10gm.webp",
    href: "#",
    price: "₹400",
    originalPrice: "₹600",
    buttonText: "Coming Soon",
    badge: "New Arrival",
  },

  {
    id: "velvet-verse",
    name: "Fragrance Layering Balm - Velvet Verse",
    // subtitle: "French Vanilla · Soft · Creamy",
    // subtitle: "Suede Vanilla · Creamy",
    subtitle: "Cozy · Soft · Creamy",
    size: "5 gm",
    image: "/assets/velvet-verse-5gm.webp",
    href: "https://rzp.io/rzp/G3Y3UOB",
    price: "₹179",
    originalPrice: "₹299",
    buttonText: "Pre-order Now",
    badge: "ONLY 2 to be MADE",
  },

  

  

  

  {
    id: "first-soul-5gm",
    name: "Fragrance Layering Balm - First Soul",
    // subtitle: "Coffee · Vanilla · Memory",
    subtitle: "Midnight Café · Memory · Parties",
    size: "5 gm",
    image: "/assets/Minimalist Balm Jar with RR Monogram Lid.webp",
    href: "#",
    price: "₹300",
    originalPrice: "₹500",
    buttonText: "Coming Soon",
    badge: "New Arrival",
  },

  {
    id: "quiet-velvet",
    name: "Fragrance Layering Balm - Day & Night Combo",
    // subtitle: "Quiet Chapter + Velvet Verse",
    subtitle: "Urban Mornings + Self-Care Evenings",
    size: "2 × 5 gm",
    image: "/assets/quiet-velvet-duo.webp",
    href: "https://rzp.io/rzp/G3Y3UOB",
    price: "₹299",
    originalPrice: "₹399",
    buttonText: "Pre-order Now",
    badge: "ONLY 2 to be MADE",
  },

  {
    id: "first-soul",
    name: "Fragrance Layering Balm - First Soul",
    // subtitle: "Midnight Café · Memory",
    subtitle: "Indulgent · Rich · Winter Wear",
    size: "5 gm",
    image: "/assets/first-soul-5gm-1.webp",
    href: "https://rzp.io/rzp/G3Y3UOB",
    price: "₹179",
    originalPrice: "₹299",
    badge: "ONLY 2 to be MADE",
    buttonText: "Pre-order Now",
  },

  {
    id: "first-soul-15gm",
    name: "Fragrance Layering Balm - First Soul",
    // subtitle: "Coffee · Vanilla · Memory",
    // subtitle: "Midnight Café · Memory",
    subtitle: "Indulgent · Rich · Winter Wear",
    size: "15 gm",
    image: "/assets/Concrete2.webp",
    href: "#",
    price: "₹600",
    originalPrice: "₹800",
    buttonText: "Coming Soon",
    badge: "New Arrival",
  },

  
];





export default function BestSellers() {

     
const [canScrollLeft, setCanScrollLeft] = useState(false);

  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scrollRight = () => {
    const slider = sliderRef.current;

    if (!slider) return;

    slider.scrollBy({
      left: slider.clientWidth * 0.8,
      behavior: "smooth",
    });
  };

  

  const handleScroll = () => {
  const slider = sliderRef.current;

  if (!slider) return;

  const atStart = slider.scrollLeft <= 10;

  const atEnd =
    slider.scrollLeft + slider.clientWidth >=
    slider.scrollWidth - 10;

  setCanScrollLeft(!atStart);
  setCanScrollRight(!atEnd);
};

const scrollLeft = () => {
  const slider = sliderRef.current;

  if (!slider) return;

  slider.scrollBy({
    left: -(slider.clientWidth * 0.8),
    behavior: "smooth",
  });
};

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-pastel
        text-[#25231F]
        pb-10
        
      "
    >

      {/* =====================================================
          TOP 7.6REM — IVORY
      ====================================================== */}

      <div
        className="
          absolute
          left-0
          right-0
          top-0
          h-[6.5rem]
          lg:h-[7.6rem]
          bg-[#F9F8F3]
          
        "
      />

      <div className="relative">

        {/* ===================================================
            EDITORIAL HEADING
        ==================================================== */}

        <div
          className="
            relative
            z-10
            mx-auto
            max-w-[1600px]
            px-5
pt-[5.5rem]
sm:px-8
sm:pt-[6.4rem]
lg:px-30
          "
        >
          <div className="flex items-end">

            <div className="relative">
              <p
                className="
  font-larken
  text-[1.87rem]
  font-[300]
  leading-[0.78]
  tracking-[-0.055em]
  text-[#25231F]
  lg:text-[2.5rem]
  scale-y-90
"
              >
                {/* Bestsellers */}
                Expressions
              </p>

              <p
                className="
                  font-lato
                  lg:mt-[3rem]
                  mt-[1.5rem]
                  sm:text-[12px]
                  uppercase
                  font-[400]
                  leading-[0.72]
                  tracking-widest
                  text-grey
                  underline
                  cursor-pointer
                  text-[0.62rem]
                "
              >
                
                Shop Now
              </p>

              {/* <p
                className="
                  absolute
                  left-[0.02em]
                  top-[0.72em]
                  whitespace-nowrap
                  font-larken
                  text-[clamp(3.2rem,7vw,7rem)]
                  font-normal
                  leading-[0.72]
                  tracking-[-0.055em]
                  text-[#25231F]
                "
              >
                Sellers
              </p> */}
            </div>

          </div>
        </div>

        {/* ===================================================
            PRODUCT CAROUSEL
        ==================================================== */}

        <div
    ref={sliderRef}
    onScroll={handleScroll}
    className="
      relative
    z-0
    flex
    gap-4 
    sm:gap-5
    overflow-x-auto
    scroll-smooth
    pb-10
    pt-[2rem]
    sm:pt-[3rem]
    pr-5
    [-ms-overflow-style:none]
    [scrollbar-width:none]
    [&::-webkit-scrollbar]:hidden
    sm:pr-8
    lg:pr-12
    "
  >

         <div
  className="w-[0.5rem] shrink-0 sm:w-[8rem] lg:w-[13rem]"
  aria-hidden="true"
/>

          {products.map((product, index) => {
            const isFourth = index === 3;

            return (
              <motion.article
                key={product.id}
                className={`
  group
  relative
  min-w-0
  shrink-0
  
  basis-[78vw]
  sm:basis-[44vw]
  lg:basis-[23vw]
  xl:basis-[22vw]
`}
                data-product-card
                // whileHover={{ y: -5 }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
                
              >
                

                {/* IMAGE */}

                <Link href={product.href} className="block">

                  <div
                    className="
                      relative
                      aspect-[0.92]
                      overflow-hidden
                      bg-[#EEE7DF]
                    "
                  >
                    {product.badge && (
                      <span
                        className="
                          absolute
                          left-4
                          top-4
                          z-10
                          font-lato
                          text-[8px]
                          uppercase
                          tracking-[0.2em]
                          text-charcoal
                          text-[#777168]
                        "
                      >
                        {product.badge}
                      </span>
                    )}

                    

                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="
                        (min-width: 1280px) 23vw,
                        (min-width: 1024px) 25vw,
                        (min-width: 640px) 45vw,
                        78vw
                      "
                      className="
                        object-cover
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-[1.025]
                      "
                    />
                  </div>
                </Link>

                {/* PRODUCT INFO */}

                <div className="pt-5">

                  <div className="flex items-start justify-between gap-4">

                    <div>
                      <Link href={product.href}>
                        <h3
                          className="
                            font-larken
                            text-[1.12rem]
                            font-normal
                            leading-tight
                            text-[#25231F]
                            sm:text-[1.07rem]
                            scale-y-90
                          "
                        >
                          {product.name}
                        </h3>
                      </Link>

                      <p
                        className="
                          mt-1.5
                          max-w-[70vw] 
                          sm:max-w-[220px]
                          font-lato
                          text-[9px]
                          uppercase
                          leading-relaxed
                          tracking-[0.11em]
                          text-[#777168]
                          
                        "
                      >
                        {product.subtitle}
                      </p>
                    </div>

                    <span
                      className="
                        shrink-0
                        pt-1
                        font-lato
                        text-[9px]
                        uppercase
                        tracking-[0.12em]
                        text-[#777168]
                      "
                    >
                      {product.size}
                    </span>

                  </div>

                  {/* PRICE */}

                   <div className="mt-4 flex items-center justify-between gap-4">
  <div className="flex items-center gap-2">
    <span className="font-lato text-[12px] font-medium tracking-[0.04em] text-[#25231F]">
      {product.price}
    </span>

    {product.originalPrice && (
      <span className="font-lato text-[10px] tracking-[0.03em] text-[#8F837C] line-through">
        {product.originalPrice}
      </span>
    )}
  </div>
</div> 

 <Link
  href={product.href}
  className="
    mt-4
    flex
    w-full
    items-center
    justify-center
    border
    border-[#25231F]
    px-4
py-3.5
sm:py-3
    font-lato
    text-[9px]
    uppercase
    tracking-[0.2em]
    text-[#25231F]
    transition-all
    duration-600
    hover:bg-[#25231F]
    hover:text-[#F9F8F3]
  "
>
  {product.buttonText}
</Link> 

                </div>

                {/* =============================================
                    FOURTH CARD — SEE MORE OVERLAY
                ============================================== */}

                

              </motion.article>
            );
          })}
        </div>

        <button
  type="button"
  onClick={scrollRight}
  disabled={!canScrollRight}
  aria-label="See more products"
  className="
  absolute
  right-3
  top-[48%]
  z-30
  flex
  h-10
  w-10
  -translate-y-1/2
  items-center
  justify-center
  rounded-full
  border-[#25231F]/30
  bg-ivory/90
  text-[#25231F]
  backdrop-blur-sm
  transition-all
  duration-300
  cursor-pointer
  disabled:pointer-events-none
  disabled:opacity-0
  sm:right-[2%]
  sm:top-[52%]
  sm:h-12
  sm:w-12
  hidden
  lg:block
"
>
  <svg
    width="16"
  height="16"
  className="sm:h-[18px] sm:w-[18px] lg:ml-3"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
  >
    {/* <path d="M5 12h14" /> */}
    <path d="m13 6 6 6-6 6" />
  </svg>
</button>

<button
  type="button"
  onClick={scrollLeft}
  disabled={!canScrollLeft}
  aria-label="View previous products"
  className="
  absolute
  left-3
  top-[48%]
  z-30
  flex
  h-10
  w-10
  -translate-y-1/2
  items-center
  justify-center
  rounded-full
  border-[#25231F]/30
  bg-ivory/90
  text-[#25231F]
  backdrop-blur-sm
  transition-all
  duration-300
  cursor-pointer
  disabled:pointer-events-none
  disabled:opacity-0
  sm:left-[2%]
  sm:top-[52%]
  sm:h-12
  sm:w-12
  hidden
  lg:block
"
>
  <svg
    width="16"
  height="16"
  className="sm:h-[18px] sm:w-[18px] lg:ml-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
  >
    {/* <path d="M19 12H5" /> */}
    <path d="m11 6-6 6 6 6" />
  </svg>
</button>

        {/* ===================================================
            VIEW ALL PRODUCTS
        ==================================================== */}

        {/* <div className="relative z-10 flex justify-center pb-20 pt-2 sm:pb-24">

          <Link
            href="/shop"
            className="
              group
              inline-flex
              items-center
              gap-4
              border
              border-[#25231F]
              px-7
              py-3.5
              font-lato
              text-[9px]
              uppercase
              tracking-[0.22em]
              text-[#25231F]
              transition-all
              duration-300
              hover:bg-[#25231F]
              hover:text-[#F9F8F3]
            "
          >
            <span>View All Products</span>

            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </Link>

        </div> */}

      </div>
    </section>
  );
}