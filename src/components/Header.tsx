import { Search, User, Star, ShoppingBag } from "lucide-react";

export default function Header() {
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
    <header className="border-b border-gold">
      <div className="bg-gold pb-2.5"></div>

      {/* Logo row with icons - using grid for perfect centering */}
      <div className="grid grid-cols-3 items-center py-6 px-56">
        {/* Left side - empty space for balance */}
        <div></div>

        {/* Center - Logo */}
        <h1 className="text-center font-larken font-medium text-4xl tracking-wide">
          RUHAVA
        </h1>

        {/* Right side - Icons */}
        <div className="flex items-center justify-end gap-6 px-6">
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
          <button
            className="hover:text-gold transition-colors cursor-pointer"
            aria-label="Shopping bag"
          >
            <ShoppingBag size={20} />
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="text-center space-x-6 pb-6">
        {navItems.map((item) => (
          <a
            key={item}
            href="#"
            className={`hover:text-gold text-xs font-semibold tracking-wide ${
              item === "ABOUT RUHAVA" ? "pl-[40px] px-[10px]" : "px-[12px]"
            }`}
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
}
