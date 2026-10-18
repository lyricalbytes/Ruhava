"use client";

import { useEffect, useState } from "react";

const announcements = [
  {
    id: "delivery",
    text: "FREE STANDARD DELIVERY W/ EVERY ORDER.",
    cta: "SHOP NOW",
    href: "#expressions",
  },
  {
    id: "early-believers",
    text: "EARLY BELIEVERS GET PURE COST PRICING.",
    cta: "SHOP NOW",
    href: "#expressions",
  },
  {
    id: "double-shop",
    text: "DOUBLE SHOP, GET YOUR FIRST ORDER FREE!",
    cta: "SHOP NOW",
    href: "#expressions",
  },
];

export default function AnnouncementBar() {
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % announcements.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, []);

  if (!showAnnouncement) return null;

  const announcement = announcements[activeIndex];

  return (
    <div
      className="
        relative
        border-b
        border-charcoal
        bg-pastel
        font-lato
        text-charcoal
      "
    >
      <div className="flex min-h-[46px] items-center justify-center px-14 text-center sm:min-h-[48px]">
        <a
          href={announcement.href}
          className="
            inline-flex
            items-center
            justify-center
            gap-3
            text-[8px]
            leading-relaxed
            tracking-[0.16em]
            transition-opacity
            duration-300
            hover:opacity-60
            sm:text-[10px]
            sm:tracking-widest
          "
        >
          <span>{announcement.text}</span>

          <span
            className="
              font-bold
              underline
              underline-offset-[3px]
            "
          >
            {announcement.cta}
          </span>
        </a>
      </div>

      {/* Carousel indicators */}
      <div
        className="
          absolute
          bottom-[5px]
          left-1/2
          flex
          -translate-x-1/2
          items-center
          gap-1.5
        "
        aria-hidden="true"
      >
        {announcements.map((announcementItem, index) => (
          <span
            key={announcementItem.id}
            className={`
                hidden
              h-px
              transition-all
              duration-500
              ${
                index === activeIndex
                  ? "w-4 bg-charcoal"
                  : "w-2 bg-charcoal/25"
              }
            `}
          />
        ))}
      </div>

      {/* Close */}
      <button
        type="button"
        onClick={() => setShowAnnouncement(false)}
        aria-label="Close announcement"
        className="
          absolute
          right-4
          top-1/2
          flex
          h-6
          w-6
          -translate-y-1/2
          cursor-pointer
          items-center
          justify-center
          text-charcoal/70
          transition-colors
          hover:text-charcoal
        "
      >
        <span className="relative block h-4 w-4">
          <span
            className="
              absolute
              left-1/2
              top-1/2
              h-px
              w-4
              -translate-x-1/2
              -translate-y-1/2
              rotate-45
              bg-current
            "
          />
          <span
            className="
              absolute
              left-1/2
              top-1/2
              h-px
              w-4
              -translate-x-1/2
              -translate-y-1/2
              -rotate-45
              bg-current
              
            "
          />
        </span>
      </button>
    </div>
  );
}