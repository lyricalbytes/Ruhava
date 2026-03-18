"use client";
import { useState } from "react";
import { Menu, Search, User, ShoppingBag, X } from "lucide-react";

const navItems = [
  "THE HOUSE",
  "THE CREATION",
  "FOUNDER",
  "JOURNAL",
  "RESERVE",
];

export default function MobileHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className=" block md:hidden">
      <div className="bg-charcoal pb-2"></div>
      <div className="flex items-center justify-between py-3 px-4">
        <div className="flex items-center gap-4">
          <button
            className=" cursor-pointer"
            aria-label="Menu"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={20} strokeWidth={1.5}/>
          </button>
          <button
            className="hover:text-gold cursor-pointer"
            aria-label="Search"
          >
            <Search size={20} strokeWidth={1.5}/>
          </button>
        </div>

        <h1 className="font-larken font-medium text-xl tracking-wider">
          RUHAVA
        </h1>

        <div className="flex items-center gap-4">
          <button
            className="hover:text-gold cursor-pointer"
            aria-label="Account"
          >
            <User size={20} strokeWidth={1.5}/>
          </button>
          <button
            className="hover:text-gold cursor-pointer"
            aria-label="Shopping bag"
          >
            <ShoppingBag size={20} strokeWidth={1.5}/>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex">
          <div className="bg-ivory w-4/5 max-w-xs h-full flex flex-col p-6">
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
                <a
                  key={item}
                  href="#"
                  className="text-charcoal text-[13px] font-semibold transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
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
          </div>

          <div className="flex-1" onClick={() => setMenuOpen(false)} />
        </div>
      )}
    </header>
  );
}
