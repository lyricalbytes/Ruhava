"use client";
import { Search, User, Star, ShoppingBag } from "lucide-react";
import Link from "next/link";


export default function DesktopHeader() {
  const navItems = [
    "THE HOUSE",
    "THE CREATION",
    "FOUNDER",
    "JOURNAL",
    "RESERVE",
  ];

  return (
    <header className=" hidden md:block">
      <div className="bg-charcoal pb-2"></div>
      <div className="flex items-center justify-between py-5 px-4 lg:px-12 xl:px-24">
        {/* <div className="flex-1" /> */}
        <h1 className="text-center font-larken font-medium text-[34px] tracking-wider flex-5 scale-y-95">
          RUHAVA
        </h1>
        {/* <div className="flex items-center justify-center gap-3 lg:gap-6 flex-1">
          <button
            className="hover:text-gold transition-colors cursor-pointer"
            aria-label="Search"
          >
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button
            className="hover:text-gold transition-colors cursor-pointer"
            aria-label="Account"
          >
            <User size={20} strokeWidth={1.5} />
          </button>
          <button
            className="hover:text-gold transition-colors cursor-pointer"
            aria-label="Wishlist"
          >
            <Star size={20} strokeWidth={1.5} />
          </button>
          <Link href="/cart">
            <button
              className="hover:text-gold transition-colors cursor-pointer"
              aria-label="Shopping bag"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
            </button>
          </Link>
        </div> */}
      </div>
      <nav className="flex justify-center pb-6 overflow-x-auto scrollbar-hide">
        <div className="flex">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className={`whitespace-nowrap text-xs md:text-sm px-1 lg:px-15 lg:text-[13px] font-semibold tracking-wide scale-y-95 ${
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
