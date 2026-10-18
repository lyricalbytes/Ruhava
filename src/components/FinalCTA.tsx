"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="
        relative
        overflow-hidden
        bg-pastel
        px-5
        pb-30
        pt-20
        text-charcoal 
        sm:px-8
        sm:py-32
        lg:px-12
        lg:pb-30
        lg:pt-20
      "
    >
      <div className="mx-auto max-w-[1000px] text-center">
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        > */}
          {/* Eyebrow */}
          <p
            className="
              font-lato
              text-[8px]
              uppercase
              tracking-[0.32em]
              text-charcoal/55
              sm:text-[9px]
              
            "
          >
            La Collection Littéraire
          </p>

          {/* Heading */}
          <h2
            className="
              mx-auto
              mt-6
              max-w-[850px]
              font-larken
              text-[1.625rem]
              leading-[0.94]
              tracking-[-0.045em]
              
              sm:mt-8
              sm:text-[4.5rem]
              lg:text-[2.25rem]
              scale-y-90
            "
          >
            The first chapter 
            
            begins here.
          </h2>

          {/* Divider */}
          <div className="hidden mx-auto my-8 h-px w-10 bg-[#F9F8F3]/25 sm:my-10" />

          {/* Supporting copy */}
          <p
            className="
              mx-auto
              max-w-[500px]
              font-larken
              text-[1rem]
              leading-[1.55]
              text-charcoal/80
              sm:text-[1rem]
              mt-6
              scale-y-90
              lg:px-20
            "
          >
            A new way to carry fragrance.
            
            Made for the moments that stay with you.
          </p>

          {/* CTA */}
          <div className="mt-18 sm:mt-18">
            <a
              href="https://rzp.io/rzp/G3Y3UOB"
              className="
                inline-flex
                items-center
                border
                border-charcoal/60
                px-7
                py-4
                font-lato
                text-[9px]
                font-medium
                uppercase
                tracking-[0.32em]
                text-ivory
                bg-charcoal
                transition-all
                duration-500
                hover:bg-charcoal/95
                hover:text-ivory
                sm:px-9
                sm:py-4
                sm:text-[10px]
                -mt-7
              "
            >
              {/* Discover La Collection Littéraire */}
              Discover
              
              <span className="ml-4 text-[13px] hidden">
                →
              </span>
            </a>
          </div>

          {/* Launch detail */}
          <p
            className="
              mt-8
              font-lato
              text-[7px]
              uppercase
              tracking-[0.28em]
              text-charcoal/40
              sm:mt-10
              sm:text-[8px]
              
            "
          >
            The Pounce begins · 18 October
          </p>

          <div className="px-10 text-left">

          <p
            className="
              mt-20
              font-lato
              text-[7px]
              tracking-[0.2em]
              font-bold
              text-charcoal/45
              sm:mt-20
              sm:text-[8px]
              
            "
          >
            {/* FREE STANDARD DELIVERY WITH EVERY ORDER */}

          </p>

          <p
            className="
              mt-1
              font-lato
              text-[12px]
              
              
              text-charcoal/50
              sm:mt-2
              sm:text-[12px]
              
            "
          >
            <b>Free standard delivery with every order:</b> Free standard delivery is available on eligible orders within our serviceable delivery areas. Express, expedited, or other premium delivery charges, where applicable, are not included.
            <br />

          </p>

          <p
            className="
              mt-4
              font-lato
              text-[7px]
              tracking-[0.2em]
              font-bold
              text-charcoal/45
              sm:mt-6
              sm:text-[8px]
              
            "
          >
            {/* EARLY BELIEVERS GET PURE COST PRICING */}
          </p>

          <p
            className="
              mt-1
              font-lato
              text-[12px]
              
              
              text-charcoal/50
              sm:-mt-4
              sm:text-[12px]
              
            "
          >
            <b>Early believers get cost pricing:</b> Available for a limited time on selected products and quantities only. Promotional pricing is subject to availability and cannot be combined with other offers unless stated otherwise.
            <br />

          </p>

          <p
            className="
              mt-4
              font-lato
              text-[7px]
              tracking-[0.2em]
              font-bold
              text-charcoal/45
              sm:mt-6
              sm:text-[8px]
              
            "
          >
            {/* DOUBLE SHOP, GET YOUR FIRST ORDER FREE! */}
          </p>

          <p
            className="
              mt-1
              font-lato
              text-[12px]
              
              
              text-charcoal/50
              sm:-mt-4
              sm:text-[12px]
              
            "
          >
            <b>Double shop, get first order free:</b> Place two qualifying orders during the offer period to receive the value of your first qualifying order back to your original payment method, subject to the offer conditions. One offer per customer; cancelled, refunded, duplicate, or fraudulent orders do not qualify.
            <br />

          </p>

          <p
            className="
              mt-4
              font-lato
              text-[7px]
              tracking-[0.2em]
              font-bold
              text-charcoal/45
              sm:mt-6
              sm:text-[8px]
              
            "
          >
            {/* DOUBLE SHOP, GET YOUR FIRST ORDER FREE! */}
          </p>

          <p
            className="
              mt-1
              font-lato
              text-[12px]
              
              
              text-charcoal/50
              sm:-mt-4
              sm:text-[12px]
              
            "
          >
            <b>14-day free returns & exchanges:</b> Eligible products can be returned or exchanged within 14 calendar days of delivery. Returns must generally be unused and in their original condition. Standard eligible return collection is free. Damaged, defective or incorrect orders are handled separately. Refunds are issued to the original payment method after the return is approved.
            <br />

          </p>

          <p
            className="
              mt-4
              font-lato
              text-[7px]
              tracking-[0.2em]
              font-bold
              text-charcoal/45
              sm:mt-6
              sm:text-[8px]
              
            "
          >
            {/* CREATOR REWARDS · #RuhavaRitual */}
          </p>

          <p
            className="
              mt-1
              font-lato
              text-[12px]
              
              
              text-charcoal/50
              sm:-mt-4
              sm:text-[12px]
              
            "
          >
            <b>Creator rewards · #RuhavaRitual:</b> Create a qualifying public Reel featuring your Ruhava ritual and tag @RuhavaOfficial with <b>#RuhavaRitual</b>. Rewards are <b>11% on your Reel, 21% at 5,000 verified views, and 101% at 50,000 verified views</b>. Only the highest qualifying tier applies. Rewards are returned to the original payment method after verification. Content must remain live and comply with applicable platform rules and disclosure requirements. Additional eligibility, verification and reward limits apply.
            <br />

          </p>

          

            </div>

        {/* </motion.div> */}
      </div>
    </section>
  );
}