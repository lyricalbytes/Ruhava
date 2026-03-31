"use client";
import { useState } from "react";
import { Menu, Search, User, ShoppingBag, X, Handbag } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCoffee } from '@fortawesome/free-solid-svg-icons'; // Import specific icons

const navItems = [
  { name: "THE HOUSE", href: "/the-house" },
  { name: "THE CREATION", href: "/the-creation" },
  { name: "FOUNDER", href: "/founder" },
  { name: "JOURNAL", href: "/journal" },
  { name: "RESERVE", href: "/reserve" },
];

export default function MobileHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className=" block md:hidden sticky top-0 z-50">
      <div className="bg-charcoal pb-2"></div>
      <div className="flex items-center justify-between py-3 px-4 bg-ivory">
        <div className="flex items-center gap-4">
          <button
            className=" cursor-pointer scale-y-80"
            aria-label="Menu"
            onClick={() => setMenuOpen(true)}
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

        <Link href="/" className="font-larken font-normal text-[20.5px] tracking-widest scale-y-95"><h1>
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

      <AnimatePresence>
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex ">
          <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setMenuOpen(false)}
        className="absolute inset-0  bg-black/60"
      />
          
          <motion.div
        initial={{ x: "-100%" }} // Starts off-screen to the left
        animate={{ x: 0 }}       // Slides in to view
        exit={{ x: "-100%" }}    // Slides back out
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="relative bg-ivory w-4/5 max-w-xs h-full flex flex-col p-6 shadow-xl"
      >
            <div className="flex items-center justify-between mb-8">
             <span className="font-larken text-xl">{/*Menu*/}</span> 
              <button
                className=" cursor-pointer "
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
              >
                <X size={22} strokeWidth={1.5}/>
              </button>
            </div>
            <nav className="flex flex-col gap-5 flex-1">
              {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
                  className="text-charcoal text-[13px] font-semibold transition-colors scale-y-95 flex"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                  <div className="mx-auto mr-0.5"><FontAwesomeIcon icon={faAngleRight} /></div>
                
            </Link>
          ))}
              
              <div className="flex-1" />
              {/* <a
                href="#"
                className="text-charcoal text-base font-semibold hover:text-gold transition-colors mt-auto pt-8 border-t border-gold"
                onClick={() => setMenuOpen(false)}
              >
                ABOUT RUHAVA
              </a> */}
            </nav>
            </motion.div>
          

          <div className="flex-1" onClick={() => setMenuOpen(false)} />
        </div>
      )} 
      </AnimatePresence>
      
    </header>
  );
}
