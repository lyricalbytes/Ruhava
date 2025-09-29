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
    <header className="justify-between items-center  border-b border-gold">
      <div id="br1"></div>

      <h1 className="text-center font-Larken font-medium text-4xl tracking-wide py-[24px]">
        RUHAVA
      </h1>

      <nav className="text-center space-x-6 pb-[24px]">
        {navItems.map((item, idx) => (
          <a
            key={item}
            href="#"
            id="navbtn"
            className={`hover:text-gold font-Lato text-xs font-semibold tracking-wide ${
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
