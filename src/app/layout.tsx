import type { Metadata } from "next";

import { Lato, Roboto, Inter } from "next/font/google";

const lato = Lato({ subsets: ["latin"], weight: "400" });

import './globals.css';

export const metadata: Metadata = {
  title: "Ruhava",
  description: "Luxury Fragrance Brand",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-ivory text-charcoal font-lato">
        {/* Header */}
        <header className="justify-between items-center px-8 py-4 border-b border-gold">
          <div id="br1"> </div>
          <h1 className="justify-center text-center font-Larken font-medium text-4xl tracking-wide py-[18px]">RUHAVA</h1>
          <nav className="text-center space-x-6 pb-[18px]">
            <a href="#" id="navbtn" className="hover:text-gold px-[22px] font-Lato text-xs font-semibold tracking-wide">FRAGRANCE</a>
            <a href="#" id="navbtn" className="hover:text-gold px-[22px] font-Lato text-xs font-semibold tracking-wide">FASHION</a>
            <a href="#" id="navbtn" className="hover:text-gold px-[22px] font-Lato text-xs font-semibold tracking-wide">JEWELLERY</a>
            <a href="#" id="navbtn" className="hover:text-gold px-[22px] font-Lato text-xs font-semibold tracking-wide">CANDLES</a>
            <a href="#" id="navbtn" className="hover:text-gold px-[22px] font-Lato text-xs font-semibold tracking-wide">DIFFUSERS</a>
            <a href="#" id="navbtn" className="hover:text-gold px-[22px] font-Lato text-xs font-semibold tracking-wide">WATCHES</a>
            <a href="#" id="navbtn" className="hover:text-gold px-[22px] font-Lato text-xs font-semibold tracking-wide">EYEWEAR</a>
            <a href="#" id="navbtn" className="hover:text-gold px-[22px] font-Lato text-xs font-semibold tracking-wide">SKINCARE</a>
            <a href="#" id="navbtn" className="hover:text-gold px-[22px] font-Lato text-xs font-semibold tracking-wide">MAKEUP</a>
            <a href="#" id="navbtn" className="hover:text-gold pl-[50px] px-[10px] font-Lato text-xs font-semibold tracking-wide">ABOUT RUHAVA</a>
          </nav>
        </header>

        {/* Page Content */}
        <main className="min-h-screen">{children}</main>

        {/* Footer */}
        <footer className="bg-charcoal text-ivory py-6 text-center">
          <p className="text-sm">© {new Date().getFullYear()} Ruhava. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:text-gold">Instagram</a>
            <a href="#" className="hover:text-gold">Twitter</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
