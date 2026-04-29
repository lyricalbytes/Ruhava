"use client";
import { useEffect, useState } from "react";
import { Menu, Search, User, ShoppingBag, X, Handbag } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCoffee } from '@fortawesome/free-solid-svg-icons'; // Import specific icons
import { createPortal } from "react-dom";

// const navItems = [
//   { name: "THE HOUSE", href: "/the-house" },
//   { name: "THE FIRST SOUL", href: "/the-creation" },
//   // { name: "THE RESERVE", href: "/reserve" },
//   // { name: "THE JOURNAL", href: "/journal" },
//   { name: "THE FOUNDER", href: "/founder" },
// ];

const mainNavItems = [
  { name: "THE HOUSE", href: "/the-house" },
  { name: "THE FIRST SOUL", href: "/the-creation" },
];

const secondaryNavItems = [
  { name: "THE FOUNDER", href: "/founder" },
];

export default function MobileHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuOpen]);

  return (
    <header className=" block md:hidden sticky top-0 z-30">
      <div className="bg-charcoal pb-2"></div>
      <div className="flex items-center justify-between py-2.5 px-4 bg-ivory">
        <div className="flex items-center gap-4">
          {/* CRITICAL: Ensure this button has no lower z-index parents blocking it */}
          <button
            className="p-2 -ml-2 cursor-pointer"
            onClick={() => {
              console.log("Menu clicked"); // Test if click is registering
              setMenuOpen(true);
            }}
          >
            <Menu size={19} strokeWidth={1.5}/>
          </button>
         <button
            className="cursor-pointer"
            aria-label="Search"
          >
           <Search size={19} strokeWidth={1.5}/>
          </button> 
        </div> 

        <Link href="/" className="font-larken font-normal text-[20.5px] tracking-widest scale-y-85"><h1>
          RUHAVA
        </h1></Link>

         <div className="flex items-center gap-4">
         <button
            className="cursor-pointer"
            aria-label="Account"
          >
            <User size={19} strokeWidth={1.5}/>
          </button>
          <button
            className="cursor-pointer"
            aria-label="Shopping bag"
          >
            <Handbag size={19} strokeWidth={1.5}/>
          </button>  
        </div>
      </div>
      

     {/* PORTAL LOGIC */}
      {mounted && typeof window !== "undefined" && createPortal(
        <AnimatePresence>
          {menuOpen && (
            <div className="fixed inset-0 flex" style={{ zIndex: 9999 }}>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMenuOpen(false)}
                className="absolute inset-0 bg-black/60 "
              />
              
              {/* Slide-out Menu */}
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="relative bg-ivory w-4/5 max-w-xs h-full flex flex-col p-5 shadow-2xl"
              >
                <div className="flex items-center justify-between mb-4">
                 {/* <span className="font-larken tracking-widest text-sm">MAISON RUHAVA</span> */}
                  <span className="font-larken tracking-widest text-sm"></span> 
                  <button
                    className="p-2 -mr-2 cursor-pointer"
                    onClick={() => setMenuOpen(false)}
                  >
                    <X size={22} strokeWidth={1.5}/>
                  </button>
                </div>

                {/* <nav className="flex flex-col gap-5"> */}
                <nav className="flex flex-col">
                  {/* MAIN LINKS */}
  <div className="flex flex-col gap-5">
    {mainNavItems.map((item) => (
      <Link
        key={item.href}
        href={item.href}
        className="text-charcoal text-[12px] font-medium flex justify-between items-center tracking-widest scale-y-85"
        onClick={() => setMenuOpen(false)}
      >
        {item.name}
        <FontAwesomeIcon icon={faAngleRight} className="text-[11px]" />
      </Link>
    ))}
  </div>

  {/* SPACING / DIVIDER */}
  <div className="mt-8  border-charcoal/10 pt-6" />

  {/* FOUNDER (SECONDARY) */}
  <div className="flex flex-col">
    {secondaryNavItems.map((item) => (
      <Link
        key={item.href}
        href={item.href}
        className="text-charcoal text-[12px] font-medium flex justify-between items-center tracking-widest scale-y-85"
        onClick={() => setMenuOpen(false)}
      >
        {item.name}
        <FontAwesomeIcon icon={faAngleRight} className="text-[10px]" />
      </Link>
    ))}
  </div>
                  {/* {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-charcoal text-[13px] font-medium scale-y-90 flex justify-between items-center tracking-widest"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.name}
                      <FontAwesomeIcon icon={faAngleRight} className="text-[11px] text-charcoal" />
                    </Link>
                  ))} */}
                </nav>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
      
    </header>
  );
}
