"use client";
import DesktopHeader from "@/components/DesktopHeader";
import MobileHeader from "@/components/MobileHeader";
import DesktopFooter from "@/components/DesktopFooter";
import MobileFooter from "@/components/MobileFooter";
import Image from "next/image";
import { Span } from "next/dist/trace";
import { Search, User, Star, ShoppingBag } from "lucide-react";
import { useState } from "react";

export default function Reserve() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className="bg-ivory text-charcoal font-lato min-h-screen flex flex-col">
      <DesktopHeader />
      <MobileHeader />

      <div className="px-6 md:px-20 lg:px-32 py-16 flex flex-col md:flex-row gap-10">
      <Image
      src="/assets/thefirstsoul14.png"
      width={500}
      height={500}
      alt="The First Soul"
      className="w-full max-w-md mx-auto"
      />
      <div className="w-full max-w-md mx-auto">
        <h1 className="font-larken tracking-wider text-[25px] text-charcoal scale-y-95">
          The First Soul
        </h1>
        <hr className="mt-0.5 border-none h-1 bg-charcoal" />
        
        <p className="mt-3 font-thin font-lato scale-y-95 text-[14.5px]">
          EAU DE PARFUM SPRAY
        </p>
        <button className="text-sm mt-0.5 font-thin font-lato underline underline-offset-5 cursor-pointer scale-y-95">
          More details
        </button>
        <p className="text-[14.5px] text-grey mt-3 scale-y-95">
          Bottle 04 / 50
        </p>
        
        <div className="flex justify-between items-center mt-5">
          <p className="scale-y-95 font-semibold">
          ₹ 500
          </p>
          <button
            className="cursor-pointer"
            aria-label=""
          >
            <Star size={15} strokeWidth={2.5} />
          </button>
        </div>
        <hr className="mt-5 border-none py-[0.2px] bg-grey px-10 " />
        <p className="mt-3 tracking-wider font-lato text-[12px] font-semibold scale-y-95">
          1 SIZE AVAILABLE
        </p>
        <p className="text-[14px] font-lato mt-3.5 scale-y-95 font-thin tracking-wide">
          10 ml
        </p>
        <button
        onClick={() => setIsOpen(true)}
        className="bg-charcoal text-ivory w-full py-4 font-medium text-[11.5px] cursor-pointer tracking-wider scale-y-95 font-lato mt-5  hover:bg-grey transition delay-50 duration-100 ease-in "
        >
        RESERVE YOUR BOTTLE
        </button>
        <div className="scale-y-95 text-grey font-light text-[14px] mt-3.5">
          MRP (inclusive of all taxes). <span className="underline underline-offset-5 decoration-charcoal cursor-pointer scale-y-95  text-grey font-light text-[14px]">More information</span>
        </div>
        <div className="mt-4.5 underline underline-offset-5  decoration-charcoal cursor-pointer scale-y-95 font-light text-[14.5px] text-charcoal">
          Client reviews
        </div>
      </div>
      </div>
  
      {isOpen && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
    <div className="bg-ivory p-8 w-[90%] max-w-md relative">

      {/* Close button */}
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-4 right-4 text-charcoal cursor-pointer"
      >
        ✕
      </button>

      <h2 className="font-larken text-[22px] mb-6">
        Reserve The First Soul
      </h2>

      <form className="flex flex-col gap-4">

        <input
          type="text"
          placeholder="Full Name"
          className="border border-grey p-3 text-sm outline-none"
        />

        <input
          type="email"
          placeholder="Email"
          className="border border-grey p-3 text-sm outline-none"
        />

        <input
          type="text"
          placeholder="City"
          className="border border-grey p-3 text-sm outline-none"
        />

        <button
          type="submit"
          className="bg-charcoal text-ivory py-4 mt-4 text-sm tracking-wide cursor-pointer text-[11.5px] uppercase scale-y-95 font-medium"
        >
          Proceed to Payment
        </button>

      </form>
    </div>
  </div>
)}

      <DesktopFooter />
      <MobileFooter />

    </main>
  );
}