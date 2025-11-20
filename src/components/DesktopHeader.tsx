"use client";
import { Search, User, Star, ShoppingBag } from "lucide-react";
import Link from "next/link";


export default function DesktopHeader() {
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
    "ABOUT RUHAVA",
  ];

  return (
    <header className="border-b border-gold hidden md:block">
      <div className="bg-gold pb-2.5"></div>
      <div className="flex items-center justify-between py-6 px-4 lg:px-12 xl:px-24">
        <div className="flex-1" />
        <h1 className="text-center font-larken font-medium text-4xl tracking-wide flex-1">
          RUHAVA
        </h1>
        <div className="flex items-center justify-center gap-3 lg:gap-6 flex-1">
          <button
            className="hover:text-gold transition-colors cursor-pointer"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
          <button
            className="hover:text-gold transition-colors cursor-pointer"
            aria-label="Account"
          >
            <User size={20} />
          </button>
          <button
            className="hover:text-gold transition-colors cursor-pointer"
            aria-label="Wishlist"
          >
            <Star size={20} />
          </button>
          <Link href="/cart">
            <button
              className="hover:text-gold transition-colors cursor-pointer"
              aria-label="Shopping bag"
            >
              <ShoppingBag size={20} />
            </button>
          </Link>
        </div>
      </div>
      <nav className="flex justify-center pb-6 overflow-x-auto scrollbar-hide">
        <div className="flex">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className={`hover:text-gold whitespace-nowrap text-xs md:text-sm px-1 lg:px-3 lg:text-md font-semibold tracking-wide ${
                item === "ABOUT RUHAVA" ? "pl-3 lg:pl-8" : ""
              }`}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
