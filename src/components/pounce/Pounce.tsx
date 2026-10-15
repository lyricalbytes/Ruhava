"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Kiri from "./Kiri";
import GoldenLeaf from "./GoldenLeaf";
import { pounceConfig } from "@/data/pounceConfig";

interface PounceProps {
  variant?: "hero" | "compact" | "product";
  showJoinButton?: boolean;
}

export default function Pounce({
  variant = "hero",
  showJoinButton = true,
}: PounceProps) {
  const config = pounceConfig;

  const [joined, setJoined] = useState(false);
 
  const [showBurst, setShowBurst] = useState(false);
  const [leapFinished, setLeapFinished] = useState(false);

  const preorderDate = useMemo(
  () => new Date("2026-10-18T00:00:00+05:30"),
  []
);

const [timeLeft, setTimeLeft] = useState(0);
const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);

  const updateCountdown = () => {
    const difference = preorderDate.getTime() - Date.now();

    setTimeLeft(Math.max(difference, 0));
  };

  updateCountdown();

  const interval = window.setInterval(updateCountdown, 1000);

  return () => window.clearInterval(interval);
}, [preorderDate]);

const countdown = useMemo(() => {
  const totalSeconds = Math.floor(timeLeft / 1000);

  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    days,
    hours,
    minutes,
    seconds,
    finished: timeLeft <= 0,
  };
}, [timeLeft]);

  const soldOut = config.status === "SOLD_OUT";
  const open = config.status === "OPEN";

  const progress = useMemo(() => {
    if (soldOut) return 1;

    return Math.min(
      Math.max(config.pounceProgress, 0.02),
      0.96
    );
  }, [config.pounceProgress, soldOut]);

  const handleJoin = () => {
    if (joined) return;

    setJoined(true);
    setShowBurst(true);

    /*
     * Frontend-only MVP:
     * We intentionally don't persist this event.
     *
     * Later this can become:
     * track("pounce_join")
     */

    window.setTimeout(() => {
      setShowBurst(false);
    }, 1200);
  };

  

  const handleLeapComplete = () => {
    setLeapFinished(true);
  };

  const containerClasses =
    variant === "compact"
      ? "py-8"
      : variant === "product"
        ? "py-10 sm:py-14"
        : "pt-20 sm:py-24 md:pt-[6.25rem] md:pb-8";

  return (
    <section
    
      aria-label="The Pounce"
      className={`relative w-full overflow-hidden ${containerClasses} bg-[#F9F8F3] text-[#25231F]`}
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-8 flex items-end justify-between gap-6 sm:mb-12">
          <div>
            <p className="mb-2 font-lato text-[10px] uppercase tracking-[0.28em] text-[#777168]">
              The Pounce
            </p>

            <h2 className="font-larken text-2xl tracking-tight text-[#25231F] sm:text-3xl md:text-4xl scale-y-90">
              Kiri is getting closer.
            </h2>
          </div>

          <div className="text-right">
            <p className="font-lato text-[10px] uppercase tracking-[0.22em] text-[#777168]">
              Claimed
            </p>

            <p className="mt-1 font-larken text-xl text-[#25231F] sm:text-2xl">
              {config.claimedUnits}
              <span className="text-[#9A948A]">
                {" "}
                / {config.totalUnits}
              </span>
            </p>
          </div>
        </div>

        {/* Countdown */}
<AnimatePresence mode="wait">
  {!mounted || !countdown.finished ? (
    <motion.div
      key="countdown"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      className="mb-10 border-y border-[#E1DDD5] py-6 sm:mb-14 sm:py-8"
    >
      <div className="text-center">
        <p className="font-lato text-[9px] uppercase tracking-[0.28em] text-[#777168]">
          Pre-orders open in
        </p>

        <div className="mt-4 flex items-center justify-center gap-3 sm:gap-6">
          {[
            { value: countdown.days, label: "Days" },
            { value: countdown.hours, label: "Hours" },
            { value: countdown.minutes, label: "Minutes" },
            { value: countdown.seconds, label: "Seconds" },
          ].map((item, index) => (
            <div key={item.label} className="flex items-center">
              <div className="min-w-[52px] text-center sm:min-w-[70px]">
                <p className="font-larken text-2xl tracking-tight text-[#25231F] sm:text-4xl">
                  {mounted
  ? String(item.value).padStart(2, "0")
  : "--"}
                </p>

                <p className="mt-1 font-lato text-[7px] uppercase tracking-[0.2em] text-[#9A948A] sm:text-[8px]">
                  {item.label}
                </p>
              </div>

              {index < 3 && (
                <span className="ml-3 font-larken text-lg text-[#C5BFB5] sm:ml-6 sm:text-2xl">
                  :
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  ) : (
    <motion.div
      key="open"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-10 border-y border-[#E1DDD5] py-6 text-center sm:mb-14 sm:py-8"
    >
      <p className="font-lato text-[9px] uppercase tracking-[0.28em] text-[#777168]">
        The First Edition
      </p>

      <p className="mt-2 font-larken text-xl text-[#25231F] sm:text-2xl">
        Pre-orders are now open.
      </p>
    </motion.div>
  )}
</AnimatePresence>

        {/* Illustration area */}
        <div className="relative">
          {/* Track */}
          <div className="relative h-28 border-b border-[#D9D4CA] sm:h-36 md:h-44">
            {/* Fine decorative line */}
            <div className="absolute bottom-3 left-0 right-0 border-b border-dashed border-[#DED9D0]" />

            {/* Small ticks */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-between">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
                (tick) => (
                  <span
                    key={tick}
                    className="h-1.5 w-px bg-[#D9D4CA]"
                  />
                )
              )}
            </div>

            {/* Kiri */}
            <Kiri
              progress={progress}
              state={
                soldOut
                  ? leapFinished
                    ? "idle"
                    : "leap"
                : "idle"
              }
              onLeapComplete={handleLeapComplete}
            />

            {/* Golden leaf */}
            <GoldenLeaf captured={leapFinished} />
          </div>
        </div>

        {/* Status */}
        <div className="mt-6 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <AnimatePresence mode="wait">
            {soldOut ? (
              <motion.div
                key="soldout"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-md"
              >
                <p className="font-larken text-lg text-[#25231F]">
                  The collection has been claimed.
                </p>

                <p className="mt-1 font-lato text-xs tracking-wide text-[#777168]">
                  12 / 12 pieces secured.
                </p>
              </motion.div>
            ) : open ? (
              <motion.div
                key="open"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <p className="font-lato text-xs tracking-wide text-[#777168]">
                  The first collection is moving.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="locked"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <p className="font-lato text-xs tracking-wide text-[#777168]">
                  Twelve Pieces. Five Expressions. One First Pounce.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* CTA */}
          {!soldOut && showJoinButton && (
            <div className="relative">
              <AnimatePresence>
                {showBurst && (
                  <motion.span
                    initial={{
                      opacity: 0,
                      y: 8,
                      scale: 0.95,
                    }}
                    animate={{
                      opacity: 1,
                      y: -28,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      y: -40,
                    }}
                    className="font-lato absolute right-0 top-0 whitespace-nowrap text-[10px] uppercase tracking-[0.16em] text-[#8C6D34]"
                  >
                    Kiri noticed you.
                  </motion.span>
                )}
              </AnimatePresence>

              <button
                type="button"
                onClick={handleJoin}
                disabled={joined}
                className="
                cursor-pointer
                  border border-[#25231F]
                  px-5 py-3
                  text-[10px]
                  font-lato
                  uppercase
                  tracking-[0.2em]
                  text-[#25231F]
                  transition-all
                  duration-600
                  hover:bg-[#25231F]
                  hover:text-[#F9F8F3]
                  disabled:cursor-default
                  disabled:border-[#BEB8AE]
                  disabled:text-[#777168]
                  disabled:hover:bg-transparent
                  disabled:hover:text-[#777168]
                "
              >
                {joined ? "You're in" : "Join the Pounce"}
              </button>

              
            </div>
          )}
        </div>
      </div>
    </section>
  );
}