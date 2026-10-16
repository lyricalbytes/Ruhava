"use client";

import { useState } from "react";

export default function AnnouncementBar() {
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  if (!showAnnouncement) return null;

  return (
    <div className="relative border-b border-charcoal bg-pastel py-4 font-lato text-[10.5px] uppercase tracking-widest text-charcoal">
      <div className="flex items-center justify-center px-12 text-center">
  <span className="text-[9px] leading-relaxed tracking-[0.16em] sm:text-[10.5px] sm:tracking-widest">
    {/* <span>Free Standard Shipping on all orders.</span>

      <b>
        <u>Shop Now</u>
      </b> */}
    {/* LA COLLECTION LITTÉRAIRE · DROP I · OPENS 11 OCTOBER */}
    LA COLLECTION LITTÉRAIRE · FIRST EDITION 
  </span>
</div>

      <button
        type="button"
        onClick={() => setShowAnnouncement(false)}
        aria-label="Close announcement"
        className="absolute right-4 top-1/2 flex h-6 w-6 -translate-y-1/2 cursor-pointer items-center justify-center text-charcoal/70 transition-colors hover:text-charcoal"
      >
        <span className="relative block h-4 w-4">
          <span className="absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-current" />
          <span className="absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-current" />
        </span>
      </button>
    </div>
  );
}