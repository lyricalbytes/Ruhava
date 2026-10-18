import Link from "next/link";
import AnnouncementBar from "@/components/AnnouncementBar";
import DesktopHeader from "@/components/DesktopHeader";
import MobileHeader from "@/components/MobileHeader";


const sections = [
  {
    number: "01",
    title: "About These Terms",
    content: (
      <>
        <p>
          These Terms & Conditions govern your access to and use of the Ruhava
          website, and your purchase of products from Ruhava.
        </p>

        <p>
          By accessing this website, placing an order, participating in an
          offer, or otherwise using our services, you agree to these Terms &
          Conditions together with our Privacy Policy, Shipping Policy and
          Returns & Refund Policy.
        </p>

        <p>
          If you do not agree with these terms, please do not use the website
          or place an order.
        </p>
      </>
    ),
  },

  {
    number: "02",
    title: "About Ruhava",
    content: (
      <>
        <p>
          Ruhava is a fragrance brand offering solid perfume and fragrance
          layering balms and related products.
        </p>

        <p>
          The website is operated by{" "}
          <strong>Harsh Bhardwaj, Proprietor of Ruhava</strong>, having its
          registered/business address at{" "}
          <strong>Gwalior, Madhya Pradesh, India</strong>.
        </p>

        <p>
          For customer support, you may contact us at{" "}
          <strong>rescuebird18@gmail.com</strong>.
        </p>
      </>
    ),
  },

  {
    number: "03",
    title: "Eligibility",
    content: (
      <>
        <p>
          You must be legally capable of entering into a binding contract to
          place an order through the website.
        </p>

        <p>
          If you are purchasing on behalf of another person, you confirm that
          you have the authority to do so.
        </p>

        <p>
          We reserve the right to refuse or cancel orders where we reasonably
          believe an order has been placed using false information, fraudulent
          payment details, automated systems, or in violation of these terms.
        </p>
      </>
    ),
  },

  {
    number: "04",
    title: "Products & Fragrance",
    content: (
      <>
        <p>
          Ruhava products are intended for external, cosmetic use only.
        </p>

        <p>
          Apply the product only as directed on the product packaging or
          website. Avoid contact with eyes, lips, mucous membranes and broken
          or irritated skin. Do not ingest the product.
        </p>

        <p>
          Keep products away from children and pets. Store in a cool, dry
          place away from direct sunlight and excessive heat.
        </p>

        <p>
          Fragrance preferences and skin responses vary from person to person.
          A fragrance that works well for one person may not suit another.
        </p>

        <p>
          If you have known sensitivities or allergies to fragrance or cosmetic
          ingredients, review the ingredient information before use and consult
          an appropriate healthcare professional if necessary.
        </p>

        <p>
          Discontinue use if irritation or an adverse reaction occurs.
        </p>

        <p>
          Fragrance perception may change depending on skin chemistry,
          temperature, environment, application quantity and the fragrance
          products with which a balm is layered.
        </p>

        <p>
          Product photographs are intended for representation. Minor
          differences in colour, finish, texture, packaging or print may occur
          between photographs and the physical product.
        </p>
      </>
    ),
  },

  {
    number: "05",
    title: "Ingredients & Product Information",
    content: (
      <>
        <p>
          Product pages and packaging may contain information about fragrance
          materials, base materials, net quantity, usage and other product
          characteristics.
        </p>

        <p>
          Always refer to the product packaging supplied with your order for
          the most current ingredient and usage information.
        </p>

        <p>
          Ruhava does not represent that its products are suitable for every
          individual. Ingredient information should be reviewed before use,
          particularly if you have known allergies or sensitivities.
        </p>

        <p>
          No statement on this website is intended to diagnose, treat, cure or
          prevent any disease or medical condition.
        </p>
      </>
    ),
  },

  {
    number: "06",
    title: "Orders",
    content: (
      <>
        <p>
          Placing an order constitutes an offer to purchase the selected
          products. An order is not considered finally accepted until payment
          has been successfully received and the order has been confirmed by
          Ruhava.
        </p>

        <p>
          We may decline or cancel an order in circumstances including product
          unavailability, pricing or listing errors, suspected fraud, payment
          failure, misuse of an offer, or other circumstances permitted by
          applicable law.
        </p>

        <p>
          If we cancel an order after payment has been received, the eligible
          amount will be refunded to the original payment method, subject to
          applicable law and the relevant payment provider's procedures.
        </p>
      </>
    ),
  },

  {
    number: "07",
    title: "Pre-Orders & Limited Editions",
    content: (
      <>
        <p>
          Certain Ruhava collections or products may be offered on a
          pre-order basis.
        </p>

        <p>
          A pre-order is an order placed before the relevant product is ready
          for dispatch. Estimated dispatch or delivery dates are estimates
          unless expressly stated otherwise.
        </p>

        <p>
          Where a product is explicitly identified as a limited edition or
          limited first edition, availability is limited to the quantity
          stated on the relevant product page or campaign.
        </p>

        <p>
          We will communicate material changes to an estimated dispatch date
          where reasonably practicable.
        </p>
      </>
    ),
  },

  {
    number: "08",
    title: "Pricing, Taxes & Payments",
    content: (
      <>
        <p>
          Product prices displayed on the website are stated in Indian Rupees
          unless otherwise specified.
        </p>

        <p>
          Applicable taxes and charges will be displayed at checkout where
          required.
        </p>

        <p>
          We use third-party payment providers to process payments. Payment
          details are handled according to the applicable payment provider's
          terms and security practices.
        </p>

        <p>
          Ruhava does not intentionally store complete card, UPI or other
          sensitive payment credentials on its own systems unless expressly
          stated.
        </p>

        <p>
          We reserve the right to correct obvious pricing or listing errors.
          If an order has been placed at an obviously erroneous price, we may
          contact you regarding cancellation and refund where permitted by
          applicable law.
        </p>
      </>
    ),
  },

  {
    number: "09",
    title: "Offer — Free Standard Delivery",
    content: (
      <>
        <p>
          <strong>FREE STANDARD DELIVERY WITH EVERY ORDER</strong>
        </p>

        <p>
          Standard delivery is offered at no additional delivery charge on
          eligible orders placed through the Ruhava website.
        </p>

        <p>
          Standard delivery does not include optional expedited delivery,
          special handling, or other premium delivery services unless expressly
          stated.
        </p>

        <p>
          Delivery timelines are estimates and may vary because of location,
          courier capacity, weather, public holidays, operational disruption or
          other circumstances outside Ruhava's reasonable control.
        </p>

        <p>
          Orders may be subject to serviceability restrictions in certain
          locations.
        </p>
      </>
    ),
  },

  {
    number: "10",
    title: "Offer — Early Believers / Pure Cost Pricing",
    content: (
      <>
        <p>
          <strong>EARLY BELIEVERS · PURE COST PRICING</strong>
        </p>

        <p>
          The Early Believers offer is a limited promotional pricing programme
          for qualifying customers during the promotional period announced by
          Ruhava.
        </p>

        <p>
          Under this offer, eligible products may be made available at or near
          their qualifying cost basis rather than their standard promotional
          or retail price.
        </p>

        <p>
          Unless expressly stated on the relevant campaign or checkout page,
          "pure cost" does not mean that Ruhava is providing products free of
          applicable taxes, payment charges or other mandatory charges.
        </p>

        <p>
          Eligibility, product availability, quantity limits, promotional
          dates and qualifying products will be stated on the relevant offer
          page or campaign communication.
        </p>

        <p>
          The offer may not be combined with other discounts, promotional
          codes, creator rewards or complimentary-product offers unless
          expressly stated.
        </p>

        <p>
          Ruhava may restrict multiple purchases where reasonably necessary to
          prevent abuse, resale or automated purchasing.
        </p>
      </>
    ),
  },

  {
    number: "11",
    title: "Offer — Double Shop, Get Your First Order Free",
    content: (
      <>
        <p>
          <strong>DOUBLE SHOP · GET YOUR FIRST ORDER FREE</strong>
        </p>

        <p>
          This promotional offer is available only during the promotional
          period communicated by Ruhava and is subject to the eligibility
          requirements displayed with the offer.
        </p>

        <p>
          To qualify, the customer must complete{" "}
          Place two separate qualifying orders during the promotional period. Once the second order has been successfully delivered and neither order has been cancelled, returned, or refunded, the value of the first qualifying order will be returned to the original payment method.
        </p>

        <p>
          Once the qualifying conditions have been verified, Ruhava will issue
          the applicable benefit against the eligible first order, subject to
          the maximum value of <strong>₹500</strong>.
        </p>

        <p>
          Only one "first order" may qualify per customer, household, payment
          method, shipping address, email address and/or account, as applicable
          to the campaign.
        </p>

        <p>
          The offer cannot be transferred, exchanged for cash, sold or combined
          with another promotional offer unless expressly stated.
        </p>

        <p>
          Cancelled, refunded, fraudulent, duplicate or otherwise ineligible
          orders do not qualify.
        </p>

        <p>
          Ruhava reserves the right to verify eligibility and reject
          transactions reasonably suspected of promotional abuse.
        </p>
      </>
    ),
  },

  {
    number: "12",
    title: "Creator Rewards — #RuhavaRitual",
    content: (
      <>
        <p>
          <strong>
            FOR THOSE WHO CREATE
          </strong>
        </p>

        <p>
          If your <strong>#RuhavaRitual</strong> finds its way into a Reel,
          we'd love to see what you create.
        </p>

        <div className="my-8 border-y border-[#25231F]/10">
          <div className="grid grid-cols-3">
            <div className="border-r border-[#25231F]/10 px-3 py-6 text-center">
              <p className="font-larken text-3xl">11%</p>
              <p className="mt-2 font-lato text-[8px] uppercase tracking-[0.2em] text-[#777168]">
                On Your Reel
              </p>
            </div>

            <div className="border-r border-[#25231F]/10 px-3 py-6 text-center">
              <p className="font-larken text-3xl">21%</p>
              <p className="mt-2 font-lato text-[8px] uppercase tracking-[0.2em] text-[#777168]">
                At 5K Views
              </p>
            </div>

            <div className="px-3 py-6 text-center">
              <p className="font-larken text-3xl">101%</p>
              <p className="mt-2 font-lato text-[8px] uppercase tracking-[0.2em] text-[#777168]">
                At 50K Views
              </p>
            </div>
          </div>
        </div>

        <p>
          The reward is calculated against the qualifying purchase amount
          defined by the campaign and is returned to the original payment
          method once the Reel is live and qualifying views have been verified.
        </p>

        <p>
          The highest qualifying tier determines the total reward. Rewards are
          not cumulative unless expressly stated otherwise by Ruhava.
        </p>

        <p>
          For example, reaching the 50,000-view tier does not result in
          11% + 21% + 101%. The applicable reward is the highest qualifying
          tier only.
        </p>

        <p>
          The Reel must be publicly accessible, materially feature or relate
          to Ruhava, and remain live for{" "}
          <strong>30 days</strong>.
        </p>

        <p>
          Views must be genuine and generated through ordinary audience
          activity. Paid views, bots, automated traffic, artificial engagement,
          purchased followers or other manipulated activity do not qualify.
        </p>

        <p>
          Ruhava may request reasonable evidence or platform analytics to
          verify qualifying views.
        </p>

        <p>
          A qualifying creator must clearly disclose the commercial
          relationship where required, including the appropriate advertising
          disclosure such as <strong>#ad</strong> or other disclosure required
          by applicable law or platform rules.
        </p>

        <p>
          The creator must own or have permission to use all music, images,
          footage, trademarks and other material contained in the Reel.
        </p>

        <p>
          Creator Rewards are subject to applicable tax laws and reporting
          requirements. The creator is responsible for their own tax
          obligations unless applicable law requires otherwise.
        </p>

        <p>
          Ruhava may disqualify content that is unlawful, misleading,
          discriminatory, defamatory, sexually explicit, unsafe, fraudulent,
          infringes third-party rights, or otherwise conflicts with the Ruhava
          brand or these terms.
        </p>
      </>
    ),
  },

  {
    number: "13",
    title: "Creator Content & Permission",
    content: (
      <>
        <p>
          You retain ownership of content you create.
        </p>

        <p>
          By submitting content to Ruhava or voluntarily tagging Ruhava in
          connection with a campaign, you grant Ruhava a non-exclusive,
          worldwide, royalty-free licence to repost or feature that content
          for Ruhava's marketing and social-media communications, subject to
          applicable law and the terms communicated for the relevant campaign.
        </p>

        <p>
          We will not claim ownership of your original work merely because you
          participate in the Ruhava Circle or Creator Rewards programme.
        </p>

        <p>
          Do not submit content containing another person's image, copyrighted
          material, music, artwork, trademark or other protected material
          unless you have the necessary permission.
        </p>
      </>
    ),
  },

  {
    number: "14",
    title: "Shipping & Delivery",
    content: (
      <>
        <p>
          Orders are dispatched to the shipping address provided during
          checkout.
        </p>

        <p>
          Please ensure that your delivery information, including name,
          address, postal code and contact number, is accurate.
        </p>

        <p>
          Ruhava is not responsible for delays or failed delivery caused by
          incorrect or incomplete information supplied by the customer.
        </p>

        <p>
          If a package is returned because the recipient was unavailable,
          refused delivery, supplied an incorrect address, or otherwise failed
          to accept delivery, additional delivery charges may apply to
          re-dispatch where permitted under the applicable shipping policy.
        </p>

        <p>
          Please refer to our{" "}
          <Link
            href="/shipping"
            className="underline underline-offset-4"
          >
            Shipping Policy
          </Link>{" "}
          for further information.
        </p>
      </>
    ),
  },

  {
    number: "15",
    title: "Returns, Refunds & Exchanges",
    content: (
      <>
        <p>
          Returns, refunds and exchanges are governed by our{" "}
          <Link
            href="/returns"
            className="underline underline-offset-4"
          >
            Returns & Refund Policy
          </Link>
          .
        </p>

        <p>
          Because fragrance and cosmetic products are personal-use products,
          opened or used products may be subject to hygiene-related return
          restrictions, except where a refund, replacement or other remedy is
          required by applicable law.
        </p>

        <p>
          If you receive a damaged, defective, incorrect or materially
          different product, contact us as soon as reasonably possible with
          photographs and your order details.
        </p>

        <p>
          Nothing in these terms is intended to remove or restrict any
          consumer right or remedy that cannot lawfully be excluded.
        </p>
      </>
    ),
  },

  {
    number: "16",
    title: "Damaged or Incorrect Orders",
    content: (
      <>
        <p>
          If your order arrives damaged, incorrect or incomplete, please
          contact us at <strong>rescuebird18@gmail.com</strong> with your order
          number and relevant photographs.
        </p>

        <p>
          We may request photographs, packaging information or other reasonable
          evidence to investigate the issue with our fulfilment or courier
          partners.
        </p>
      </>
    ),
  },

  {
    number: "17",
    title: "Website Use",
    content: (
      <>
        <p>
          You may use this website only for lawful purposes.
        </p>

        <p>
          You must not attempt to interfere with the operation or security of
          the website, introduce malicious code, scrape protected information,
          impersonate another person, use automated systems to purchase
          limited products, or otherwise misuse the website.
        </p>

        <p>
          We may suspend access where reasonably necessary to protect the
          website, our customers or our business.
        </p>
      </>
    ),
  },

  {
    number: "18",
    title: "Intellectual Property",
    content: (
      <>
        <p>
          Ruhava, its name, logo, visual identity, product names, packaging
          designs, photographs, illustrations, written content, graphics,
          website design and other original materials are owned by or licensed
          to Ruhava unless otherwise stated.
        </p>

        <p>
          You may not reproduce, modify, distribute, sell, publish or create
          derivative works from Ruhava's protected materials without prior
          written permission.
        </p>
      </>
    ),
  },

  {
    number: "19",
    title: "Website Information & Availability",
    content: (
      <>
        <p>
          We make reasonable efforts to keep information on the website
          accurate and current.
        </p>

        <p>
          However, typographical errors, technical errors, availability
          changes and other inadvertent inaccuracies may occur.
        </p>

        <p>
          We may update, suspend or discontinue parts of the website, products
          or services from time to time.
        </p>
      </>
    ),
  },

  {
    number: "20",
    title: "Limitation of Liability",
    content: (
      <>
        <p>
          To the extent permitted by applicable law, Ruhava will not be
          responsible for indirect, incidental, special or consequential loss
          arising from use of the website or products.
        </p>

        <p>
          In no event shall our total liability to you for all damages, losses, 
          and causes of action exceed the total rupee amount paid by you to us 
          for the specific product(s) giving rise to the claim, or ₹1,000 (Rupees 
          One Thousand Only), whichever is lesser. 
        </p>

        <p>
          You acknowledge that our 
          products are cosmetic items applied to the skin; it is your 
          responsibility to perform a patch test prior to full usage.
        </p>

        <p>
          Nothing in these terms excludes or limits liability that cannot
          legally be excluded or limited under applicable law, including
          applicable consumer rights.
        </p>

        <p>
          Product-related liability is subject to applicable law and the
          specific circumstances of the relevant claim.
        </p>
      </>
    ),
  },

  {
    number: "21",
    title: "Events Beyond Our Control",
    content: (
      <>
        <p>
          Ruhava will not be responsible for delay or failure caused by events
          reasonably beyond its control, including natural disasters,
          extraordinary weather, government restrictions, strikes, courier
          disruption, internet or payment-system failures, civil disturbance,
          or other comparable events.
        </p>

        <p>
          We will take reasonable steps to resume affected services when
          practicable.
        </p>
      </>
    ),
  },

  {
    number: "22",
    title: "Privacy",
    content: (
      <>
        <p>
          Personal information collected through the website is handled in
          accordance with our{" "}
          <Link
            href="/privacy"
            className="underline underline-offset-4"
          >
            Privacy Policy
          </Link>
          .
        </p>

        <p>
          By using the website, you acknowledge that information may be
          collected and processed for purposes including order fulfilment,
          customer support, payment processing, fraud prevention and other
          purposes described in the Privacy Policy.
        </p>
      </>
    ),
  },

  {
    number: "23",
    title: "Promotional Offers",
    content: (
      <>
        <p>
          Promotional offers are available only during the period stated by
          Ruhava and only to eligible customers.
        </p>

        <p>
          Unless expressly stated otherwise, promotions cannot be combined.
        </p>

        <p>
          Ruhava may withdraw or modify a promotional offer prospectively where
          reasonably necessary, including where an offer is being abused,
          technically misconfigured, or affected by fraud or circumstances
          outside reasonable control.
        </p>

        <p>
          Any modification will not affect rights already accrued under
          applicable law.
        </p>
      </>
    ),
  },

  {
    number: "24",
    title: "Changes to These Terms",
    content: (
      <>
        <p>
          We may update these Terms & Conditions from time to time.
        </p>

        <p>
          The updated version will be published on this page with a revised
          effective date.
        </p>

        <p>
          Your continued use of the website after an update constitutes
          acceptance of the updated terms to the extent permitted by law.
        </p>
      </>
    ),
  },

  {
    number: "25",
    title: "Governing Law & Disputes",
    content: (
      <>
        <p>
          These terms are governed by the laws of India, subject to applicable
          consumer-protection laws and jurisdictional requirements.
        </p>

        <p>
          We encourage customers to contact us first so that we can attempt to
          resolve any concern promptly and fairly.
        </p>

        <p>
          Nothing in this section is intended to restrict any statutory
          consumer remedy or forum available under applicable law.
        </p>
      </>
    ),
  },

  {
    number: "26",
    title: "Contact & Grievance Redressal",
    content: (
      <>
        <p>
          For questions, complaints, order issues or requests relating to
          these terms, please contact:
        </p>

        <div className="mt-6 border-y border-[#25231F]/10 py-6">
          <p>
            {/* <strong>RUHAVA</strong> */}
            Harsh Bhardwaj, operating as a sole 
            proprietorship under the trade name <strong>RUHAVA</strong> 
          </p>

          <p className="mt-2">
            Gwalior, Madhya Pradesh, India
          </p>

          <p className="mt-2">
            Email:{" "}
            <strong>rescuebird18@gmail.com</strong>
          </p>

          <p className="mt-2">
            Grievance Officer:{" "}
            <strong>Harsh Bhardwaj</strong>
          </p>

          {/* <p className="mt-2">
            Grievance Email:{" "}
            <strong>[GRIEVANCE EMAIL]</strong>
          </p> */}

          {/* <p className="mt-2">
            Phone: <strong>[PHONE NUMBER]</strong>
          </p> */}
        </div>

        <p>
          We will handle complaints and grievances in accordance with
          applicable law and our internal grievance-redressal process.
        </p>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#F9F8F3] text-[#25231F]">
      {/* HERO */}

      <header className="fixed top-0 left-0 w-full z-100">
              <AnnouncementBar />
              <DesktopHeader />
              <MobileHeader />
            </header>

      <section className="border-b border-[#25231F]/10 px-5 pb-16 pt-24 sm:px-8 sm:pb-20 sm:pt-32 lg:px-12 lg:pb-28 lg:pt-40">
        <div className="mx-auto max-w-[1200px]">
          <p className="font-lato text-[9px] uppercase tracking-[0.3em] text-[#777168]">
            The Fine Print
          </p>

          <h1 className="mt-5 max-w-[850px] font-larken text-[3.2rem] leading-[0.92] tracking-[-0.045em] sm:text-[5rem] lg:text-[6.2rem] scale-y-90">
            Terms &
            <br />
            Conditions.
          </h1>

          <div className="mt-8 h-px w-10 bg-[#25231F]/20" />

          <p className="mt-8 max-w-[580px] font-lato text-[0.85rem] leading-[1.8] text-[#777168] sm:text-[0.9rem]">
            The details behind shopping, offers, rewards and using the Ruhava
            website.
          </p>

          <p className="mt-6 font-lato text-[7px] uppercase tracking-[0.25em] text-[#A19A90]">
            Effective from · 18 October 2026
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 lg:grid-cols-[0.3fr_0.7fr] lg:gap-24">
          <div>
            <p className="font-lato text-[8px] uppercase tracking-[0.28em] text-[#777168]">
              Please read
            </p>
          </div>

          <div className="max-w-[720px] font-lato text-[0.85rem] leading-[1.85] text-[#777168] sm:text-[0.9rem]">
            <p>
              We believe the fine print should be clear, not hidden. These
              terms explain what happens when you shop with Ruhava, participate
              in one of our offers, or create with us.
            </p>

            <p className="mt-6">
              Nothing in these terms is intended to remove or restrict any
              consumer right or remedy that cannot legally be excluded.
            </p>
          </div>
        </div>
      </section>

      {/* TERMS */}
      <section className="px-5 pb-24 sm:px-8 sm:pb-32 lg:px-12 lg:pb-40">
        <div className="mx-auto max-w-[1200px]">
          {sections.map((section) => (
            <article
              key={section.number}
              className="grid grid-cols-1 gap-8 border-t border-[#25231F]/10 py-10 sm:py-12 lg:grid-cols-[0.3fr_0.7fr] lg:gap-24"
            >
              <div>
                <p className="font-lato text-[8px] uppercase tracking-[0.28em] text-[#A19A90]">
                  {section.number}
                </p>

                <h2 className="mt-3 font-larken text-[1.7rem] leading-[1] tracking-[-0.03em] sm:text-[2rem] scale-y-90">
                  {section.title}
                </h2>
              </div>

              <div className="max-w-[720px] font-lato text-[0.82rem] leading-[1.85] text-[#777168] sm:text-[0.88rem]">
                <div className="space-y-5">
                  {section.content}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FOOTER NOTE */}
      <section className="border-t border-[#25231F]/10 px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <p className="font-lato text-[7px] uppercase tracking-[0.28em] text-[#A19A90]">
            Ruhava · La Collection Littéraire
          </p>

          <p className="mt-4 max-w-[650px] font-lato text-[0.72rem] leading-[1.7] text-[#777168]">
            Last updated: 18 October 2026. Please check this page periodically
            for the current version of these terms.
          </p>
        </div>
      </section>

       
    </main>
  );
}