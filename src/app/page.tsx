import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="bg-ivory text-charcoal font-lato">
      <Header />

      <main className="min-h-screen flex items-center justify-center bg-ivory">
        <h1 className="text-4xl font-larken font-bold text-charcoal">
          Tailwind Works ✅
        </h1>

        <button className="bg-gold text-charcoal mx-[10px] px-8 py-4 font-semibold hover:bg-charcoal hover:text-ivory transition delay-100 duration-200 ease-in">
          Join Waitlist
        </button>
      </main>

      <Footer />
    </main>
  );
}
