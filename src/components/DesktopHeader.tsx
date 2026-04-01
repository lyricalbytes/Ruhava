"use client";
import { Search, User, Star, ShoppingBag, Handbag } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";


export default function DesktopHeader() {
  const navItems = [
  { name: "THE HOUSE", href: "/the-house" },
  { name: "THE CREATION", href: "/the-creation" },
  { name: "FOUNDER", href: "/founder" },
  { name: "JOURNAL", href: "/journal" },
  { name: "RESERVE", href: "/reserve" },
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

  return (
    <header className={`hidden md:block bg-ivory sticky top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
    isScrolled ? "backdrop-blur-md shadow-sm" : ""
  }`}>
      <div className="bg-charcoal pb-2"></div>
      <div className={`flex items-center justify-between transition-all duration-500 ${
      isScrolled ? "py-3" : "py-5"
    } px-4 lg:px-12 xl:px-24`}>
        <div className="flex-1" /> 
        <Link href="/" className="text-center font-larken font-normal text-[34px] tracking-widest flex-1 scale-y-90 mx-85"><h1>
          RUHAVA
        </h1></Link>
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
            className="cursor-pointer"
            aria-label="Wishlist"
          >
            <Star size={18} strokeWidth={1.5} />
          </button>
          <Link href="/cart">
            <button
              className="cursor-pointer mt-1.5"
              aria-label="Shopping bag"
            >
              <Handbag size={18} strokeWidth={1.5} />
            </button>
          </Link>
        </div> 
      </div>
      <nav className={`flex justify-center transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] overflow-hidden ${
      isScrolled ? "max-h-0 opacity-0 transform -translate-y-2" : "max-h-20 opacity-100 transform translate-y-0 pb-6"
    }`}>
        <div className="flex">
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
        </div>
      </nav>
      
    </header>
  );
}
