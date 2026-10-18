"use client";

import Link from "next/link";
import AnnouncementBar from "@/components/AnnouncementBar";
import DesktopHeader from "@/components/DesktopHeader";
import MobileHeader from "@/components/MobileHeader";

import { useState } from "react";

const sections = [
  {
    number: "01",
    title: "Our 14-Day Promise",
    content: (
      <>
        <p>
          We want your first Ruhava experience to feel considered from
          beginning to end. Eligible products may be returned or exchanged
          within <strong>14 calendar days of delivery</strong>, at no
          additional return-shipping cost to you.
        </p>
        <p>
          This policy applies to eligible purchases made directly through the
          Ruhava website and is subject to the conditions below.
        </p>
      </>
    ),
  },
  {
    number: "02",
    title: "What Qualifies for a Return",
    content: (
      <>
        <p>
          To be eligible for a return or exchange, the product must be:
        </p>

        <ul>
          <li>Within 14 calendar days of delivery.</li>
          <li>
            Unused and in its original condition, wherever the return is based
            on a change of mind or preference.
          </li>
          <li>
            Returned with its original packaging, labels, seals and
            accessories, where applicable.
          </li>
          <li>
            Packed securely so that it can be safely received and inspected.
          </li>
        </ul>

        <p>
          We may be unable to accept a change-of-mind return where the product
          has been opened, used, applied to the skin, materially altered, or
          cannot reasonably be resold as a new personal-care product.
        </p>

        <p>
          Nothing in this policy limits any rights or remedies available to
          you under applicable law.
        </p>
      </>
    ),
  },
  {
    number: "03",
    title: "Free Returns & Exchanges",
    content: (
      <>
        <p>
          For eligible returns and exchanges requested within the 14-day
          window, Ruhava will arrange the standard return process at no
          additional return-shipping cost to you.
        </p>

        <p>
          Exchanges are subject to product availability. If the requested
          replacement is unavailable, we may offer a refund or another
          available resolution.
        </p>

        <p>
          Only one return or exchange request may be processed per eligible
          product unless the issue concerns a defect, damage, incorrect
          product, or another issue requiring further resolution.
        </p>
      </>
    ),
  },
  {
    number: "04",
    title: "How to Request a Return or Exchange",
    content: (
      <>
        <p>
          Email us at{" "}
          <a href="mailto:hello.ruhava@gmail.com">
            rescuebird18@gmail.com
          </a>{" "}
          with:
        </p>

        <ul>
          <li>Your order number.</li>
          <li>The product you wish to return or exchange.</li>
          <li>Whether you are requesting a return or an exchange.</li>
          <li>
            A brief reason for the request, where applicable.
          </li>
          <li>
            Photographs or video where the request concerns damage, leakage,
            incorrect products, or another visible issue.
          </li>
        </ul>

        <p>
          Please contact us within 14 calendar days of delivery. We will
          review the request and provide the next steps, including return
          instructions where applicable.
        </p>
      </>
    ),
  },
  {
    number: "05",
    title: "Damaged, Defective or Incorrect Orders",
    content: (
      <>
        <p>
          If your order arrives damaged, defective, leaked, tampered with, or
          contains an incorrect product, please contact us as soon as
          reasonably possible after delivery.
        </p>

        <p>
          Please keep the product, packaging and shipping materials until we
          have reviewed the issue. Photographs or video may be requested to
          help us investigate the claim.
        </p>

        <p>
          Where the issue is verified, we will provide an appropriate
          resolution, which may include a replacement, exchange, refund or
          another remedy available under applicable law.
        </p>
      </>
    ),
  },
  {
    number: "06",
    title: "Refunds",
    content: (
      <>
        <p>
          Once an approved return is received and inspected, we will confirm
          whether the refund is approved.
        </p>

        <p>
          Approved refunds will generally be issued to the original payment
          method used for the order, unless another method is required or
          agreed upon.
        </p>

        <p>
          The time taken for the refunded amount to appear in your account may
          depend on your bank, card issuer, payment provider or other financial
          institution.
        </p>

        <p>
          If a refund is required because the product is defective, damaged,
          incorrect, or otherwise does not conform to the order, we will not
          make the customer bear costs that applicable law requires us to
          bear.
        </p>
      </>
    ),
  },
  {
    number: "07",
    title: "Order Cancellations",
    content: (
      <>
        <p>
          If you need to cancel an order, contact us as soon as possible with
          your order number.
        </p>

        <p>
          We will make reasonable efforts to process cancellation requests
          received before dispatch. Once an order has entered fulfilment or
          has been handed to the delivery partner, cancellation may no longer
          be possible and the order may instead be handled under our return
          policy.
        </p>

        <p>
          For pre-orders, the cancellation terms stated on the relevant
          product or pre-order page will also apply.
        </p>
      </>
    ),
  },
  {
    number: "08",
    title: "Pre-Orders & Limited Editions",
    content: (
      <>
        <p>
          Some Ruhava products may be offered as pre-orders or as part of a
          limited first edition.
        </p>

        <p>
          The estimated dispatch or delivery information shown at the time of
          purchase is an estimate and may change due to production,
          fulfilment, courier or other circumstances.
        </p>

        <p>
          If a pre-order cannot be fulfilled, we will communicate the issue
          and provide the applicable refund or other remedy.
        </p>

        <p>
          Return and exchange eligibility for a delivered pre-order is
          generally governed by the same 14-day policy unless the relevant
          product page states otherwise or applicable law provides otherwise.
        </p>
      </>
    ),
  },
  {
    number: "09",
    title: "Products That Cannot Be Returned After Use",
    content: (
      <>
        <p>
          Because Ruhava products are personal fragrance products applied
          directly to the skin, products that have been opened or used may not
          be eligible for a change-of-mind return.
        </p>

        <p>
          This restriction does not prevent you from contacting us about a
          product that is defective, damaged, incorrect, unsafe, or otherwise
          does not conform to what you purchased.
        </p>
      </>
    ),
  },
  {
    number: "10",
    title: "Return Inspection",
    content: (
      <>
        <p>
          Returned products may be inspected to determine their condition and
          eligibility.
        </p>

        <p>
          A return may be declined where a product is materially used,
          damaged after delivery through customer handling, missing essential
          packaging, or otherwise does not meet the applicable return
          conditions, except where the issue concerns a defect, damage,
          incorrect fulfilment, or another legally protected circumstance.
        </p>
      </>
    ),
  },
  {
    number: "11",
    title: "Promotional Orders",
    content: (
      <>
        <p>
          Orders placed using promotional pricing, discounts, credits, free
          products or special campaigns may be subject to additional
          conditions stated in the relevant offer terms.
        </p>

        <p>
          Where an order is refunded, the refund will generally reflect the
          amount actually paid for the returned product, subject to the
          applicable offer and refund terms.
        </p>

        <p>
          Promotional benefits that were conditional on a minimum purchase or
          multiple qualifying orders may be recalculated or withdrawn if the
          qualifying condition is no longer satisfied after a return.
        </p>
      </>
    ),
  },
  {
    number: "12",
    title: "Shipping & Return Collection",
    content: (
      <>
        <p>
          Where Ruhava arranges a standard return collection for an eligible
          return or exchange, no separate return-shipping fee will normally
          be charged to you.
        </p>

        <p>
          Return collection availability depends on the serviceable
          destination and logistics partner. If a collection cannot be
          arranged for a particular location, we will provide reasonable
          instructions for completing the return.
        </p>

        <p>
          We are not responsible for products returned independently by a
          customer without following our return instructions.
        </p>
      </>
    ),
  },
  {
    number: "13",
    title: "International Orders",
    content: (
      <>
        <p>
          Unless expressly stated otherwise on the website, this policy is
          intended for orders delivered within India.
        </p>

        <p>
          Any future international shipping or returns programme will be
          governed by the terms displayed for the relevant destination at the
          time of purchase.
        </p>
      </>
    ),
  },
  {
    number: "14",
    title: "Consumer Rights",
    content: (
      <>
        <p>
          This policy is intended to explain Ruhava's voluntary return and
          exchange programme clearly. It does not exclude or restrict any
          consumer right, remedy or protection that cannot legally be
          excluded.
        </p>

        <p>
          Where applicable law provides a more favourable or different
          remedy, that legal requirement will prevail over any inconsistent
          part of this policy.
        </p>
      </>
    ),
  },
  {
    number: "15",
    title: "Questions & Grievances",
    content: (
      <>
        <p>
          For return, exchange or refund questions, contact:
        </p>

        <p>
          <strong>Ruhava Customer Support</strong>
          <br />
          rescuebird18@gmail.com
        </p>

        <p>
          For a formal grievance, please use the grievance contact details
          published on our{" "}
          <a href="/terms">Terms & Conditions</a> page.
        </p>
      </>
    ),
  },
];

export default function ReturnsPage() {
  const [openSection, setOpenSection] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#F9F8F3] text-[#25231F]">

        <header className="fixed top-0 left-0 w-full z-100">
                      <AnnouncementBar />
                      <DesktopHeader />
                      <MobileHeader />
                    </header>

      {/* HERO */}
      <section className="border-b border-[#25231F]/10 px-5 pb-20 pt-20 sm:px-8 sm:pb-28 sm:pt-28 lg:px-12 lg:pb-36 lg:pt-36">
        <div className="mx-auto max-w-[1200px]">
          <p className="font-lato text-[8px] uppercase tracking-[0.32em] text-[#777168] sm:text-[9px]">
            CUSTOMER CARE
          </p>

          <h1 className="mt-5 max-w-[850px] font-larken text-[3.2rem] leading-[0.9] tracking-[-0.045em] sm:text-[5rem] lg:text-[6.5rem] scale-y-95">
            Returns &amp;
            <br />
            Refunds.
          </h1>

          <div className="mt-8 h-px w-10 bg-[#25231F]/25 sm:mt-10" />

          <p className="mt-7 max-w-[570px] font-larken text-[1.08rem] leading-[1.55] text-[#25231F]/85 sm:text-[1.25rem] scale-y-90">
            A simple 14-day return and exchange promise, with the details
            clearly laid out.
          </p>

          <p className="mt-8 font-lato text-[7px] uppercase tracking-[0.25em] text-[#777168] sm:text-[8px]">
            Effective from · 18 October 2026
          </p>
        </div>
      </section>

      {/* PROMISE */}
      <section className="border-b border-[#25231F]/10 px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="font-lato text-[8px] uppercase tracking-[0.3em] text-[#777168] sm:text-[9px]">
              THE RUHAVA ASSURANCE
            </p>

            <h2 className="mt-5 font-larken text-[2.5rem] leading-[0.95] tracking-[-0.04em] sm:text-[3.5rem] scale-y-90">
              14 days.
              <br />
              No unnecessary
              <br />
              friction.
            </h2>
          </div>

          <div className="max-w-[600px] font-lato text-[13px] leading-[1.8] text-[#25231F]/80 sm:text-[14px]">
            <p>
              Eligible products can be returned or exchanged within 14
              calendar days of delivery. Standard return collection is free
              for eligible requests.
            </p>

            <p className="mt-6">
              Because fragrance is a personal product, change-of-mind returns
              must generally be unused and in their original condition.
              Products that arrive damaged, defective or incorrect are handled
              separately and should be reported as soon as reasonably
              possible.
            </p>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY */}
      <section className="border-b border-[#25231F]/10 bg-[#FFDFD3] px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <p className="font-lato text-[8px] uppercase tracking-[0.3em] text-[#777168]">
            AT A GLANCE
          </p>

          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {[
              ["14 DAYS", "Return or exchange window"],
              ["FREE", "Standard eligible return collection"],
              ["ORIGINAL", "Refunds go to the original payment method"],
              ["SUPPORT", "Email us before sending anything back"],
            ].map(([title, description], index) => (
              <div
                key={title}
                className={`
                  ${
                    index !== 0
                      ? "border-[#25231F]/15 sm:border-l"
                      : ""
                  }
                  px-0 sm:px-7 lg:px-8
                  ${index === 0 ? "lg:pl-0" : ""}
                `}
              >
                <p className="font-lato text-[11px] font-bold tracking-[0.2em]">
                  {title}
                </p>

                <p className="mt-2 max-w-[180px] font-lato text-[11px] leading-[1.6] text-[#25231F]/65">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1000px]">
          <div className="mb-12 sm:mb-16">
            <p className="font-lato text-[8px] uppercase tracking-[0.3em] text-[#777168] sm:text-[9px]">
              THE DETAILS
            </p>

            <h2 className="mt-4 font-larken text-[2.5rem] leading-none tracking-[-0.04em] sm:text-[3.5rem] scale-y-90">
              Before you send
              <br />
              anything back.
            </h2>
          </div>

          <div className="border-t border-[#25231F]/15">
            {sections.map((section, index) => {
              const isOpen = openSection === index;

              return (
                <div
                  key={section.number}
                  className="border-b border-[#25231F]/15"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenSection(isOpen ? null : index)
                    }
                    className="flex w-full cursor-pointer items-center gap-5 py-6 text-left sm:py-7"
                    aria-expanded={isOpen}
                  >
                    <span className="w-8 shrink-0 font-lato text-[8px] tracking-[0.2em] text-[#777168]">
                      {section.number}
                    </span>

                    <span className="flex-1 font-larken text-[1.25rem] tracking-[-0.02em] sm:text-[1.45rem] scale-y-90">
                      {section.title}
                    </span>

                    <span
                      className={`
                        relative flex h-7 w-7 shrink-0 items-center
                        justify-center transition-transform duration-300
                        ${isOpen ? "rotate-45" : ""}
                      `}
                      aria-hidden="true"
                    >
                      <span className="absolute h-px w-3 bg-[#25231F]" />
                      <span className="absolute h-3 w-px bg-[#25231F]" />
                    </span>
                  </button>

                  <div
                    className={`
                      grid transition-[grid-template-rows,opacity]
                      duration-400 ease-out
                      ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }
                    `}
                  >
                    <div className="overflow-hidden">
                      <div className="pb-8 pl-0 pr-8 sm:pb-10 sm:pl-[3.25rem] sm:pr-16">
                        <div className="max-w-[650px] space-y-5 font-lato text-[12px] leading-[1.8] text-[#25231F]/75 sm:text-[13px]">
                          {section.content}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="border-t border-[#25231F]/10 bg-[#25231F] px-5 py-20 text-[#F9F8F3] sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1000px] text-center">
          <p className="font-lato text-[8px] uppercase tracking-[0.3em] text-[#F9F8F3]/45 sm:text-[9px]">
            STILL HAVE A QUESTION?
          </p>

          <h2 className="mt-5 font-larken text-[2.7rem] leading-[0.92] tracking-[-0.04em] sm:text-[4rem] scale-y-90">
            We're here.
          </h2>

          <p className="mx-auto mt-6 max-w-[480px] font-larken text-[1.05rem] leading-[1.55] text-[#F9F8F3]/75 sm:text-[1.2rem] scale-y-90">
            If something isn't covered here, write to us and we'll help you
            work it out.
          </p>

          <a
            href="mailto:rescuebird18@gmail.com"
            className="mt-8 inline-flex items-center border border-[#F9F8F3]/45 px-7 py-4 font-lato text-[9px] font-bold uppercase tracking-[0.3em] transition-all duration-300 hover:bg-[#F9F8F3] hover:text-[#25231F] sm:mt-10"
          >
            Contact Ruhava
            <span className="ml-4 text-[13px] hidden">→</span>
          </a>
        </div>
      </section>
    </main>
  );
}