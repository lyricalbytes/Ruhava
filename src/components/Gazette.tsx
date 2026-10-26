"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, CalendarDays } from "lucide-react";

type Announcement = {
  date: string;
  eyebrow: string;
  headline: string;
  summary: string;
  body?: string;
  image?: string;
  featured?: boolean;
  href?: string;
};

const announcements: Announcement[] = [
  {
    date: "24 OCTOBER 2026",
    eyebrow: "FROM THE MAISON · AN EXTENSION",
    headline: "The First Pounce gets another week.",
    summary:
      "A little more time for the first chapter to find its people.",
    body:
      "Unexpected maintenance downtime meant we didn't have the time we'd planned for our launch activities. Rather than rush what should be considered, we've decided to extend the pre-order window by another week.",
    image: "/assets/Celebrations.webp ",
    featured: true,
    
  },
  {
    date: "23 OCTOBER 2026",
    eyebrow: "DELIVERY · AN UPDATE",
    headline: "A little more time in transit.",
    summary:
      "An inward freight delay has moved the estimated delivery date to 14 November.",
    body:
      "One of our raw fragrance materials has been delayed in transit from our supplier. As a result, the estimated delivery date has moved from 7 November to 14 November. We're sorry for the inconvenience. We would rather take the extra time than compromise the experience we're making for you.",
      href: "/gazette/inward-freight-delay",
  },
  {
    date: "22 OCTOBER 2026",
    eyebrow: "THE POUNCE · PRICING",
    headline: "The Pounce moves. So does the price.",
    summary:
      "Prices will rise as pieces are claimed. Deliberately.",
    body:
      "This is our way of rewarding the early believers. We believe in treating our clients like royalty, and in finding thoughtful ways to return the trust they place in the Maison. This is one of them.",
  },
  {
    date: "22 OCTOBER 2026",
    eyebrow: "FIRST EDITION · OUR PROMISE",
    headline: "If the batch doesn't happen, neither does your bill.",
    summary:
      "Your full pre-order amount will be refunded if the first batch cannot be prepared.",
    body:
      "You can try Ruhava with very little risk. If, for any reason, the first edition cannot be prepared and fulfilled, your full pre-order amount will be returned to you. Terms apply.",
  },
  {
    date: "21 OCTOBER 2026",
    eyebrow: "THE FIRST BELIEVER · 01 / 12",
    headline: "The first piece found its home.",
    summary:
      "Our first Quiet Chapter was claimed at ₹179.",
    body:
      "On 21 October, the first piece of La Collection Littéraire found its home. One of our early believers chose Quiet Chapter for ₹179. Thank you for believing in the concept. Your trust means more than we can put into a receipt.",
  },
  {
    date: "20 OCTOBER 2026",
    eyebrow: "FROM THE MAISON · TRANSPARENCY",
    headline: "Ruhava exists because you do.",
    summary:
      "No community, no Maison. So we're keeping you close to what happens here.",
    body:
      "We believe that if there is no community, there is no Ruhava. In the interest of complete transparency, we'll share important announcements from the Maison here, on Instagram, and by email with members of the Inner Circle.",
  },
];

function Rule() {
  return <div className="h-px w-full bg-[#25231F]/15" />;
}

export default function RuhavaGazette() {
  return (
    <section
      id="announcements"
      className="relative overflow-hidden bg-[#F9F8F3] px-5 py-0 text-[#25231F] sm:px-8 sm:py-28 lg:px-30 lg:py-0"
    >
      <div className="mx-auto max-w-[1380px]">
        {/* Masthead */}
        <header className="border-y border-[#25231F]/25 py-5 sm:py-7">
          <div className="flex flex-col items-center text-center">
            <p className="font-lato text-[7px] font-bold uppercase tracking-[0.38em] text-[#777168] sm:text-[8px]">
              The House Journal
            </p>

            <h2 
            // className="mt-2 font-larken text-[2.8rem] leading-none tracking-[-0.045em] sm:text-[4.4rem] lg:text-[5.2rem] scale-y-90"
            className="mt-2 font-larken text-[1.75rem] leading-none tracking-[-0.045em] sm:text-[4.4rem] lg:text-[2.35rem] scale-y-90 uppercase tracking-widest"
            >
              The Ruhava Gazette
            </h2>

            <div className="mt-4 flex w-full items-center justify-center gap-3 sm:mt-5">
              <span className="h-px w-8 bg-[#25231F]/20" />
              <span className="font-lato text-[6px] uppercase tracking-[0.3em] text-[#777168]">
                Announcements from the Maison
              </span>
              <span className="h-px w-8 bg-[#25231F]/20" />
            </div>
          </div>
        </header>

        {/* Latest announcement */}
        <motion.article
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="py-10 sm:py-14 lg:py-16"
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3">
                <span className="h-px w-5 bg-[#25231F]" />
                <p className="font-lato text-[7px] font-bold uppercase tracking-[0.3em] text-[#777168]">
                  {announcements[0].eyebrow}
                </p>
              </div>

              <h3 
            //   className="mt-5 max-w-[850px] font-larken text-[2.7rem] leading-[0.94] tracking-[-0.045em] sm:text-[4rem] lg:text-[5rem] scale-y-90"
            className="mt-5 max-w-[850px] font-larken text-[1.87rem] leading-[0.94] tracking-[-0.045em] sm:text-[4rem] lg:text-[2.5rem] scale-y-90"
              >
                {announcements[0].headline}
              </h3>

              <p 
            //   className="mt-6 max-w-[650px] font-larken text-[1.15rem] leading-[1.45] sm:text-[1.35rem] scale-y-90"
            className="mt-6 max-w-[650px] font-larken text-[1rem] leading-[1.45] sm:text-[1.2rem] scale-y-90"
              >
                {announcements[0].summary}
              </p>

              <Rule />

              <div className="mt-5 flex items-center gap-2">
                <CalendarDays className="h-3 w-3 stroke-[1.4]" />
                <span className="font-lato text-[7px] uppercase tracking-[0.24em] text-[#777168]">
                  {announcements[0].date}
                </span>
              </div>

              {announcements[0].body && (
                <p className="mt-6 max-w-[680px] font-lato text-[11px] leading-[1.8] text-[#777168] sm:text-[12px]">
                  {announcements[0].body}
                </p>
              )}

              <a
                href="#expressions"
                className="mt-7 inline-flex items-center font-lato text-[8px] font-bold uppercase tracking-[0.3em] underline decoration-[#25231F]/30 underline-offset-[6px] transition-opacity hover:opacity-50"
              >
                Enter the First Edition
                <ArrowUpRight className="ml-2 h-3 w-3" />
              </a>
            </div>

            {announcements[0].image && (
              <div className="order-1 lg:order-2">
                <div className="relative aspect-[5.5/3] overflow-hidden bg-[#25231F]/5">
                  <Image
                    src={announcements[0].image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 38vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            )}
          </div>
        </motion.article>

        <Rule />

        {/* Archive */}
        <div className="divide-y divide-[#25231F]/15">
          {announcements.slice(1, 5).map((announcement, index) => (
            <motion.article
              key={`${announcement.date}-${announcement.headline}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: index * 0.05,
              }}
              className="group py-8 sm:py-10"
            >
              <div className="grid grid-cols-[auto_1fr] gap-5 sm:grid-cols-[150px_1fr] sm:gap-10 lg:grid-cols-[180px_1fr_120px] lg:gap-12">
                {/* Date */}
                <div className="hidden sm:block">
                  <p className="font-lato text-[7px] font-bold uppercase tracking-[0.22em] text-[#777168]">
                    {announcement.date}
                  </p>
                </div>

                {/* Story */}
<div>
  {announcement.href ? (
    <Link
      href={announcement.href}
      className="block transition-opacity duration-300 hover:opacity-65"
    >
      <p className="font-lato text-[7px] font-bold uppercase tracking-[0.25em] text-[#777168]">
        {announcement.eyebrow}
      </p>

      <h3
        className="mt-2 max-w-[760px] font-larken text-[1.5rem] leading-[1] tracking-[-0.025em] sm:text-[2rem] scale-y-90"
      >
        {announcement.headline}
      </h3>

      <p className="mt-3 max-w-[650px] font-lato text-[10px] leading-[1.65] text-[#777168] sm:text-[11px]">
        {announcement.summary}
      </p>

      {announcement.body && (
        <p className="mt-3 hidden max-w-[650px] font-lato text-[10px] leading-[1.7] text-[#777168]/80 lg:block">
          {announcement.body}
        </p>
      )}

      <p className="mt-4 font-lato text-[6px] uppercase tracking-[0.2em] text-[#777168] sm:hidden">
        {announcement.date}
      </p>
    </Link>
  ) : (
    <>
      <p className="font-lato text-[7px] font-bold uppercase tracking-[0.25em] text-[#777168]">
        {announcement.eyebrow}
      </p>

      <h3
        className="mt-2 max-w-[760px] font-larken text-[1.5rem] leading-[1] tracking-[-0.025em] sm:text-[2rem] scale-y-90"
      >
        {announcement.headline}
      </h3>

      <p className="mt-3 max-w-[650px] font-lato text-[10px] leading-[1.65] text-[#777168] sm:text-[11px]">
        {announcement.summary}
      </p>

      {announcement.body && (
        <p className="mt-3 hidden max-w-[650px] font-lato text-[10px] leading-[1.7] text-[#777168]/80 lg:block">
          {announcement.body}
        </p>
      )}

      <p className="mt-4 font-lato text-[6px] uppercase tracking-[0.2em] text-[#777168] sm:hidden">
        {announcement.date}
      </p>
    </>
  )}
</div>

                {/* Arrow */}
                <div className="hidden items-start justify-end pt-1 lg:flex">
                  <ArrowUpRight className="h-4 w-4 opacity-30 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Older announcement */}
        <div className="mt-2 border-t border-[#25231F]/15 pt-8">
          <div className="grid grid-cols-[90px_1fr] gap-5 sm:grid-cols-[150px_1fr] sm:gap-10">
            <p className="font-lato text-[7px] uppercase tracking-[0.22em] text-[#777168]">
              {announcements[5].date}
            </p>

            <div>
              <p className="font-lato text-[7px] font-bold uppercase tracking-[0.25em] text-[#777168]">
                {announcements[5].eyebrow}
              </p>

              <h3 
            //   className="mt-2 max-w-[700px] font-larken text-[1.5rem] leading-none tracking-[-0.02em] sm:text-[2rem] scale-y-90"
            className="mt-2 max-w-[700px] font-larken text-[1.5rem] leading-none tracking-[-0.02em] sm:text-[2rem] scale-y-90"

              >
                {announcements[5].headline}
              </h3>

              <p className="mt-3 max-w-[620px] font-lato text-[10px] leading-[1.65] text-[#777168]">
                {announcements[5].summary}
              </p>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-12 border-t border-[#25231F]/25 pt-5 text-center sm:mt-16">
          <p className="font-lato text-[6px] uppercase tracking-[0.3em] text-[#777168] sm:text-[7px]">
            Published by the Maison · The Ruhava Gazette
          </p>
        </div>
      </div>

      {/* FAQ */}
<section
  id="faq"
  className="
    relative
    bg-[#F9F8F3]
    px-0
    pb-20
    sm:px-8
    sm:pb-28
    lg:px-0
    lg:pb-24
    pt-24
  "
>
  <div
    className="
      mx-auto
      grid
      max-w-[1200px]
      grid-cols-1
      gap-12
      lg:grid-cols-[0.7fr_1.3fr]
      lg:gap-24
      
    "
  >
    {/* LEFT — INTRO */}
    <div className="max-w-[360px]">
      <p
        className="
          font-lato
          text-[9px]
          uppercase
          tracking-[0.28em]
          text-[#777168]
          hidden
        "
      >
        Frequently Asked
      </p>

      <h2
        className="
          mt-5
          font-larken
          text-[1.5rem]
          leading-[0.92]
          tracking-[-0.04em]
          text-[#25231F]
          sm:text-[3.8rem]
          lg:text-[2rem]
          scale-y-90
        "
      >
        Before
        
        you wear it.
      </h2>

      <div className="hidden mt-7 h-px w-10 bg-[#25231F]/20" />

      <p
        className="
          mt-7
          max-w-[300px]
          font-lato
          text-[0.78rem]
          leading-[1.75]
          text-[#777168]
          sm:text-[0.84rem]
        "
      >
        A few things worth knowing before your first
        Ruhava ritual.
      </p>
    </div>

    {/* RIGHT — QUESTIONS */}
    <div className=" border-[#25231F]/10">

      {/* FAQ ITEM 01 */}
      <details className="group border-b border-[#25231F]/10">
        <summary
          className="
            flex
            cursor-pointer
            list-none
            items-center
            justify-between
            gap-6
            py-6
            font-lato
            text-[0.82rem]
            font-bold
            text-[#25231F]
            sm:py-7
            sm:text-[0.88rem]
            [&::-webkit-details-marker]:hidden
          "
        >
          <span>What is a solid perfume?</span>

          <span
            className="
              relative
              flex
              h-5
              w-5
              shrink-0
              items-center
              justify-center
              text-[#777168]
            "
          >
            <span className="absolute h-px w-3 bg-current" />
            <span
              className="
                absolute
                h-3
                w-px
                bg-current
                transition-transform
                duration-300
                group-open:rotate-90
              "
            />
          </span>
        </summary>

        <div className="max-w-[650px] pb-7 pr-8">
          <p
            className="
              font-lato
              text-[0.76rem]
              leading-[1.8]
              text-[#777168]
              sm:text-[0.82rem]
            "
          >
            A solid perfume is fragrance in a balm format rather
            than a liquid spray. It is applied directly to the skin,
            making it compact, portable and easy to wear throughout
            the day.
          </p>
        </div>
      </details>

      {/* FAQ ITEM 02 */}
      <details className="group border-b border-[#25231F]/10">
        <summary
          className="
            flex
            cursor-pointer
            list-none
            items-center
            justify-between
            gap-6
            py-6
            font-lato
            text-[0.82rem]
            font-bold
            text-[#25231F]
            sm:py-7
            sm:text-[0.88rem]
            [&::-webkit-details-marker]:hidden
          "
        >
          <span>How do I apply Ruhava?</span>

          <span
            className="
              relative
              flex
              h-5
              w-5
              shrink-0
              items-center
              justify-center
              text-[#777168]
            "
          >
            <span className="absolute h-px w-3 bg-current" />
            <span
              className="
                absolute
                h-3
                w-px
                bg-current
                transition-transform
                duration-300
                group-open:rotate-90
              "
            />
          </span>
        </summary>

        <div className="max-w-[650px] pb-7 pr-8">
          <p
            className="
              font-lato
              text-[0.76rem]
              leading-[1.8]
              text-[#777168]
              sm:text-[0.82rem]
            "
          >
            Warm a small amount of balm with your fingertip and
            apply it to your pulse points — wrists, neck or wherever
            you like to wear fragrance.
          </p>
        </div>
      </details>

      {/* FAQ ITEM 03 */}
      <details className="group border-b border-[#25231F]/10">
        <summary
          className="
            flex
            cursor-pointer
            list-none
            items-center
            justify-between
            gap-6
            py-6
            font-lato
            text-[0.82rem]
            font-bold
            text-[#25231F]
            sm:py-7
            sm:text-[0.88rem]
            [&::-webkit-details-marker]:hidden
          "
        >
          <span>Can I layer Ruhava with my perfume?</span>

          <span
            className="
              relative
              flex
              h-5
              w-5
              shrink-0
              items-center
              justify-center
              text-[#777168]
            "
          >
            <span className="absolute h-px w-3 bg-current" />
            <span
              className="
                absolute
                h-3
                w-px
                bg-current
                transition-transform
                duration-300
                group-open:rotate-90
              "
            />
          </span>
        </summary>

        <div className="max-w-[650px] pb-7 pr-8">
          <p
            className="
              font-lato
              text-[0.76rem]
              leading-[1.8]
              text-[#777168]
              sm:text-[0.82rem]
            "
          >
            Absolutely. Ruhava is designed to be worn on its own
            or layered beneath an Eau de Parfum. Explore
            <a
              href="#scent-finder"
              className="mx-1 underline underline-offset-4"
            >
              Find Your Layer
            </a>
            to discover combinations that suit the fragrance
            you already wear.
          </p>
        </div>
      </details>

      {/* FAQ ITEM 04 */}
      <details className="group border-b border-[#25231F]/10">
        <summary
          className="
            flex
            cursor-pointer
            list-none
            items-center
            justify-between
            gap-6
            py-6
            font-lato
            text-[0.82rem]
            font-bold
            text-[#25231F]
            sm:py-7
            sm:text-[0.88rem]
            [&::-webkit-details-marker]:hidden
          "
        >
          <span>How long does the fragrance last?</span>

          <span
            className="
              relative
              flex
              h-5
              w-5
              shrink-0
              items-center
              justify-center
              text-[#777168]
            "
          >
            <span className="absolute h-px w-3 bg-current" />
            <span
              className="
                absolute
                h-3
                w-px
                bg-current
                transition-transform
                duration-300
                group-open:rotate-90
              "
            />
          </span>
        </summary>

        <div className="max-w-[650px] pb-7 pr-8">
          <p
            className="
              font-lato
              text-[0.76rem]
              leading-[1.8]
              text-[#777168]
              sm:text-[0.82rem]
            "
          >
            Wear time varies with skin, climate and how much you
            apply. Solid fragrance is intentionally intimate and
            close to the skin, and can be reapplied whenever you
            want to return to the scent.
          </p>
        </div>
      </details>

      {/* FAQ ITEM 05 */}
      <details className="group border-b border-[#25231F]/10 hidden">
        <summary
          className="
            flex
            cursor-pointer
            list-none
            items-center
            justify-between
            gap-6
            py-6
            font-lato
            text-[0.82rem]
            font-bold
            text-[#25231F]
            sm:py-7
            sm:text-[0.88rem]
            [&::-webkit-details-marker]:hidden
          "
        >
          <span>Is Ruhava alcohol-free?</span>

          <span
            className="
              relative
              flex
              h-5
              w-5
              shrink-0
              items-center
              justify-center
              text-[#777168]
            "
          >
            <span className="absolute h-px w-3 bg-current" />
            <span
              className="
                absolute
                h-3
                w-px
                bg-current
                transition-transform
                duration-300
                group-open:rotate-90
              "
            />
          </span>
        </summary>

        <div className="max-w-[650px] pb-7 pr-8">
          <p
            className="
              font-lato
              text-[0.76rem]
              leading-[1.8]
              text-[#777168]
              sm:text-[0.82rem]
            "
          >
            Yes. Ruhava is a balm-based solid fragrance and does
            not require the alcohol used in traditional spray
            perfumes.
          </p>
        </div>
      </details>

      {/* FAQ ITEM 06 */}
      <details className="group border-b border-[#25231F]/10">
        <summary
          className="
            flex
            cursor-pointer
            list-none
            items-center
            justify-between
            gap-6
            py-6
            font-lato
            text-[0.82rem]
            font-bold
            text-[#25231F]
            sm:py-7
            sm:text-[0.88rem]
            [&::-webkit-details-marker]:hidden
          "
        >
          <span>Where do you deliver?</span>

          <span
            className="
              relative
              flex
              h-5
              w-5
              shrink-0
              items-center
              justify-center
              text-[#777168]
            "
          >
            <span className="absolute h-px w-3 bg-current" />
            <span
              className="
                absolute
                h-3
                w-px
                bg-current
                transition-transform
                duration-300
                group-open:rotate-90
              "
            />
          </span>
        </summary>

        <div className="max-w-[650px] pb-7 pr-8">
          <p
            className="
              font-lato
              text-[0.76rem]
              leading-[1.8]
              text-[#777168]
              sm:text-[0.82rem]
            "
          >
            We currently offer complimentary delivery across
            Madhya Pradesh. Delivery availability and timelines
            will be shown at checkout.
          </p>
        </div>
      </details>

      {/* FAQ ITEM 07 */}
      <details className="group border-b border-[#25231F]/10">
        <summary
          className="
            flex
            cursor-pointer
            list-none
            items-center
            justify-between
            gap-6
            py-6
            font-lato
            text-[0.82rem]
            font-bold
            text-[#25231F]
            sm:py-7
            sm:text-[0.88rem]
            [&::-webkit-details-marker]:hidden
          "
        >
          <span>What is your return policy?</span>

          <span
            className="
              relative
              flex
              h-5
              w-5
              shrink-0
              items-center
              justify-center
              text-[#777168]
            "
          >
            <span className="absolute h-px w-3 bg-current" />
            <span
              className="
                absolute
                h-3
                w-px
                bg-current
                transition-transform
                duration-300
                group-open:rotate-90
              "
            />
          </span>
        </summary>

        <div className="max-w-[650px] pb-7 pr-8">
          <p
            className="
              font-lato
              text-[0.76rem]
              leading-[1.8]
              text-[#777168]
              sm:text-[0.82rem]
            "
          >
            We offer a 14-day return and exchange window on
            eligible orders. Please see our full return policy
            for the conditions and process.
          </p>
        </div>
      </details>

      {/* FAQ ITEM 08 */}
      <details className="group  border-[#25231F]/10">
        <summary
          className="
            flex
            cursor-pointer
            list-none
            items-center
            justify-between
            gap-6
            py-6
            font-lato
            text-[0.82rem]
            font-bold
            text-[#25231F]
            sm:py-7
            sm:text-[0.88rem]
            [&::-webkit-details-marker]:hidden
          "
        >
          <span>What makes each Ruhava drop limited?</span>

          <span
            className="
              relative
              flex
              h-5
              w-5
              shrink-0
              items-center
              justify-center
              text-[#777168]
            "
          >
            <span className="absolute h-px w-3 bg-current" />
            <span
              className="
                absolute
                h-3
                w-px
                bg-current
                transition-transform
                duration-300
                group-open:rotate-90
              "
            />
          </span>
        </summary>

        <div className="max-w-[650px] pb-7 pr-8">
          <p
            className="
              font-lato
              text-[0.76rem]
              leading-[1.8]
              text-[#777168]
              sm:text-[0.82rem]
            "
          >
            Our first editions are released in deliberately
            limited quantities. Once a piece from a drop is
            claimed, it may not return in the same form.
          </p>
        </div>
      </details>

    </div>
  </div>
</section>

    </section>
  );
}