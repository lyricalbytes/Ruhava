"use client";
import { useState } from "react";
import { Menu, Search, User, ShoppingBag, X } from "lucide-react";

const navItems = [
  "FRAGRANCE",
  "FASHION",
  "JEWELLERY",
  "CANDLES",
  "DIFFUSERS",
  "WATCHES",
  "EYEWEAR",
  "SKINCARE",
  "MAKEUP",
];

export default function MobileHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-gold block md:hidden">
      <div className="bg-gold pb-2.5"></div>
      <div className="flex items-center justify-between py-4 px-4">
        <div className="flex items-center gap-4">
          <button
            className="hover:text-gold cursor-pointer"
            aria-label="Menu"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={22} />
          </button>
          <button
            className="hover:text-gold cursor-pointer"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
        </div>

        <h1 className="font-larken font-medium text-xl tracking-wide">
          RUHAVA
        </h1>

        <div className="flex items-center gap-4">
          <button
            className="hover:text-gold cursor-pointer"
            aria-label="Account"
          >
            <User size={20} />
          </button>
          <button
            className="hover:text-gold cursor-pointer"
            aria-label="Shopping bag"
          >
            <ShoppingBag size={20} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex">
          <div className="bg-ivory w-4/5 max-w-xs h-full flex flex-col p-6">
            <div className="flex items-center justify-between mb-8">
              <span className="font-larken text-xl">Menu</span>
              <button
                className="hover:text-gold cursor-pointer"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
              >
                <X size={26} />
              </button>
            </div>
            <nav className="flex flex-col gap-6 flex-1">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-charcoal text-base font-semibold hover:text-gold transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="flex-1" />
              <a
                href="#"
                className="text-charcoal text-base font-semibold hover:text-gold transition-colors mt-auto pt-8 border-t border-gold"
                onClick={() => setMenuOpen(false)}
              >
                ABOUT RUHAVA
              </a>
            </nav>
          </div>

          <div className="flex-1" onClick={() => setMenuOpen(false)} />
        </div>
      )}
    </header>
  );
}
