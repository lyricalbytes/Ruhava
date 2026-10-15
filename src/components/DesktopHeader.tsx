"use client";
import { Search, User, Star, ShoppingBag, Handbag } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";


export default function DesktopHeader() {
//   const navItems = [
//   { name: "THE HOUSE", href: "/the-house" },
//   { name: "THE FIRST SOUL", href: "/the-creation" },
//   // { name: "THE RESERVE", href: "/reserve" },
//   // { name: "THE JOURNAL", href: "/journal" },
//   { name: "THE FOUNDER", href: "/founder" },
// ];

const mainNavItems = [
  
  
  // { name: "SHOP", href: "/#" },
  // { name: "LITTÉRAIRE COLLECTION", href: "/the-creation" },
   { name: "LA COLLECTION LITTÉRAIRE", href: "/the-creation" },
  // { name: "JEWELLERY", href: "#" },
  // { name: "FRAGRANCE", href: "/the-creation" },
  // Shop all, New Arrivals, Bestsellers, Gift Sets, 
      { name: "RUHAVA IMPACT", href: "/ruhava-impact" },
  // { name: "LA COLLECTION LITTÉRAIRE", href: "/" },
  // { name: "LA COLLECTION SOUVENIR", href: "/" },
  // { name: "LA COLLECTION HÉRITAGE", href: "/" },
  // { name: "LES ATELIERS NOCTURNE", href: "/" },
  // { name: "THE FIRST SOUL", href: "/the-creation" },
  // { name: "LITTÉRAIRE", href: "#" },
  // { name: "SOUVENIR", href: "#" },
  // { name: "HÉRITAGE", href: "#" },
  // { name: "NOCTURNE", href: "#" },
  // { name: "ALLIANCES", href: "#" },
      { name: "FIND US", href: "/find-us" },
  { name: "THE MAISON", href: "/the-house" },
  // { name: "THE HOUSE", href: "/the-house" },
  
];

const secondaryNavItems = [
  { name: "THE FOUNDER", href: "/#" },
];

// Inside your DesktopHeader component:
const [isScrolled, setIsScrolled] = useState(false);
const [lastScrollY, setLastScrollY] = useState(0);

useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Check if user is at the very bottom (within 50px)
    const isAtBottom = currentScrollY + windowHeight >= documentHeight - 50;

    if (currentScrollY > 10 && currentScrollY > lastScrollY) {
      // Scrolling Down
      setIsScrolled(true);
    } else if (currentScrollY <= 10) {
      // At the very top
      setIsScrolled(false);
    } else if (!isAtBottom && currentScrollY < lastScrollY) {
      // Scrolling Up AND not at the bottom
      setIsScrolled(false);
    }
    
    // If isAtBottom is true, we don't change setIsScrolled, 
    // so it stays in whatever state it was (collapsed).

    setLastScrollY(currentScrollY);
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}, [lastScrollY]);

  // const [showShippingBanner, setShowShippingBanner] = useState(true);

  return (
    <header className={`hidden md:block text-charcoal bg-ivory sticky top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
    isScrolled ? "backdrop-blur-md shadow-sm" : ""
  }`}>

      {/* {showShippingBanner && (
  <div className="relative border-b border-charcoal bg-pastel text-charcoal py-4 font-lato text-[10.5px] uppercase tracking-widest">
    <div className="flex items-center justify-center gap-1">
      
      <span>LA COLLECTION LITTÉRAIRE · DROP I OPENS 11 OCTOBER</span>
    </div>

    <button
      type="button"
      onClick={() => setShowShippingBanner(false)}
      aria-label="Close"
      className="absolute right-4 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center text-charcoal/70 transition-colors hover:text-charcoal cursor-pointer"
    >
      <span className="relative block h-4 w-4">
        <span className="absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-current" />
        <span className="absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-current" />
      </span>
    </button>
  </div>
)} */}

      <div className={`flex items-center justify-between transition-all duration-500 ${
      isScrolled ? "py-3" : "py-5"
    } px-4 lg:px-12 xl:px-24`}>
        <div className="flex-1" /> 
        <Link href="/" className="text-center font-larken font-normal text-[34px] tracking-widest flex-1 scale-y-90 mx-85">
        {/* <h1>
          RUHAVA
        </h1> */}
        <Image
        src="/assets/Header-wordmark-removebg-preview.png"
      width={400}
      height={400}
      alt="Ruhava"
      className="w-36 max-w-md mx-auto my-2.5"
       /></Link>
         <div className="flex items-center justify-center gap-3 lg:gap-5 flex-1">
          <button
            className="cursor-pointer"
            aria-label="Search"
          >
            <Search size={18} strokeWidth={1.5} />
          </button>
          <button
            className="cursor-pointer"
            aria-label="Account"
          >
            <User size={18} strokeWidth={1.5} />
          </button>
          <button
            className="cursor-pointer hidden"
            aria-label="Wishlist"
          >
            <Star size={18} strokeWidth={1.5} />
          </button>
          {/* <Link href="/cart">  */}
            <button
              // className="cursor-pointer mt-1.5"
              className="cursor-pointer"
              aria-label="Shopping bag"
            >
              <Handbag size={18} strokeWidth={1.5} />
            </button>
          {/* </Link> */}
        </div> 
      </div>
      <nav
  className={`relative flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] overflow-hidden ${
    isScrolled
      ? "max-h-0 opacity-0 transform -translate-y-2"
      : "max-h-20 opacity-100 transform translate-y-0 pb-6"
  } px-4 lg:px-12 xl:px-24`}
>
      {/* LEFT / CENTER NAV */}
  <div className="flex gap-6 lg:gap-10 mx-auto">
    {mainNavItems.map((item) => (
      <Link
        key={item.href}
        href={item.href}
        className="whitespace-nowrap text-[12.5px] font-medium tracking-widest scale-y-85"
      >
        {item.name}
      </Link>
    ))}
  </div>

  {/* RIGHT (FOUNDER) */}
  <div className="absolute right-4 lg:right-12 xl:right-24 pl-6 mb-1">
    {secondaryNavItems.map((item) => (
      <Link
        key={item.href}
        href={item.href}
        className="inline-block whitespace-nowrap text-[12.5px] font-medium tracking-widest scale-y-85"
      >
        {item.name}
      </Link>
    ))}
  </div>
        {/* <div className="flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`whitespace-nowrap text-xs px-1 lg:px-10 lg:text-[12.5px] font-medium tracking-widest scale-y-90 
              ${
                item.href === "ABOUT RUHAVA" ? "pl-3 lg:pl-8" : ""
              } 
              `}
            >
              {item.name}
            </Link>
          ))}
        </div> */}
      </nav>
      
    </header>
  );
}
