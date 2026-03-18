"use client";
import DesktopHeader from "@/components/DesktopHeader";
import MobileHeader from "@/components/MobileHeader";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";
import products from "@/data/products";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-ivory text-charcoal font-lato">
      <DesktopHeader />
      <MobileHeader />

      <Link href="https://tally.so/r/3N1aK0" passHref>
      <section
        className="relative flex items-start justify-center h-628px bg-center bg-cover bg-no-repeat cursor-pointer"
        style={{ backgroundImage: "url('/assets/hero-bg copy.webp')" }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex flex-col items-center w-full pt-[50vh] pb-[8vh]">
          <span className="text-xs tracking-widest text-ivory mb-1 font-semibold uppercase">
            EXTRAIT DE PARFUM
          </span>
          <h1 className="text-2xl lg:text-4xl md:text-3xl sm:text-2xl font-lato font-bold tracking-wide text-ivory mb-4 text-center leading-tight drop-shadow-lg">
            THE FIRST SOUL
            <br />
           {/* <span className="block text-sm md:text-sm font-normal mt-2">
              The first creation of Ruhava. <br/>
              Fifty Bottles prepared by hand.
            </span> */}
          </h1>
           <Link href="https://tally.so/r/3N1aK0" passHref><button className="bg-ivory text-charcoal px-6 py-4 font-semibold hover:bg-ivory hover:text-charcoal transition delay-100 duration-200 ease-in text-xs cursor-pointer tracking-wide">
            DISCOVER
          </button></Link>
        </div>
      </section>
      </Link>

       <div className="max-w-6xl mx-auto py-10">

      <h1 className="text-3xl font-light tracking-tight mb-8">
        Our Collections
      </h1>

      {/* Display Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
    </div>

     <section
        className="relative flex items-center justify-center min-h-[80vh] bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/assets/bg-img-1.webp')" }}
      ></section>

      <Footer />
    </main>
  );
}
