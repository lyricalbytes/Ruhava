import DesktopHeader from "@/components/DesktopHeader";
import MobileHeader from "@/components/MobileHeader";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-ivory text-charcoal font-lato">
      <DesktopHeader />
      <MobileHeader />

      <section
        className="relative flex items-start justify-center min-h-screen bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/assets/hero-bg.png')" }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex flex-col items-center w-full pt-[50vh]">
          <span className="text-sm tracking-widest text-ivory mb-2 font-semibold uppercase">
            FRAGRANCE
          </span>
          <h1 className="text-4xl md:text-6xl font-larken font-bold text-ivory mb-4 text-center leading-tight drop-shadow-lg">
            THE FIRST SOUL
            <br />
            <span className="block text-2xl md:text-4xl font-normal mt-2">
              EAU DE PARFUM
            </span>
          </h1>
          <button className="bg-gold text-charcoal px-8 py-4 font-semibold hover:bg-charcoal hover:text-ivory transition delay-100 duration-200 ease-in">
            JOIN WAITLIST
          </button>
        </div>
      </section>

      <section
        className="relative flex items-center justify-center min-h-[80vh] bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/assets/bg-img-1.png')" }}
      ></section>

      <Footer />
    </main>
  );
}
