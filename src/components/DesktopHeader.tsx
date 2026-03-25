"use client";
import { Search, User, Star, ShoppingBag } from "lucide-react";
import Link from "next/link";


export default function DesktopHeader() {
  const navItems = [
  { name: "THE HOUSE", href: "/the-house" },
  { name: "THE CREATION", href: "/the-creation" },
  { name: "FOUNDER", href: "/founder" },
  { name: "JOURNAL", href: "/journal" },
  { name: "RESERVE", href: "/reserve" },
];

  return (
    <header className=" hidden md:block bg-ivory sticky top-0 z-20">
      <div className="bg-charcoal pb-2"></div>
      <div className="flex items-center justify-between py-5 px-4 lg:px-12 xl:px-24">
        {/* <div className="flex-1" /> */}
        <Link href="/" className="text-center font-larken font-normal text-[34px] tracking-wider flex-5 scale-y-95"><h1>
          RUHAVA
        </h1></Link>
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
            <Link
              key={item.href}
              href={item.href}
              className={`whitespace-nowrap text-xs md:text-sm px-1 lg:px-15 lg:text-[13px] font-medium tracking-wide scale-y-95 
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
