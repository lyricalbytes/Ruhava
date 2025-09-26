import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-ivory">
      <h1 className="text-4xl font-Larken font-bold text-charcoal">
        Tailwind Works ✅
      </h1>
      
      <button id="btn1" className="bg-gold text-charcoal mx-[10px] px-2 py-1 font-Lato font-semibold hover:bg-charcoal hover:text-ivory transition delay-100 duration-200 ease-in">
  Join Waitlist
</button>

    </div>
  );
}