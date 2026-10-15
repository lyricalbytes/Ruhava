"use client";

import Image from "next/image";

export default function FestiveEdit() {
  return (
    <section
      id="festive-edit"
      className="
        relative
        overflow-hidden
        bg-pastel
        px-0
        pt-0
        sm:px-8
        sm:py-28
        lg:px-0
        lg:py-0
      "
    >
      <div
        className="
          mx-auto
          grid
          max-w-[1450px]
          grid-cols-1
          items-center
          gap-12
          lg:grid-cols-[0.92fr_1.1fr]
          lg:gap-20
          xl:gap-28
          
        "
      >

        {/* ------------------------------------------------ */}
        {/* IMAGE — FIRST ON MOBILE, RIGHT ON DESKTOP       */}
        {/* ------------------------------------------------ */}

        <div
          className="
            order-1
            relative
            w-full
            lg:order-2
          "
        >
          <div
            className="
              relative
              aspect-[4/5]
              w-full
              overflow-hidden
              bg-[#E8E1D7]
            "
          >
            <Image
              src="/assets/Luxury Diwali Gift Box with Diyas and Sweets.webp"
              alt="Ruhava festive gifting edit arranged for Diwali"
              fill
              sizes="
                (min-width: 1280px) 57vw,
                (min-width: 1024px) 55vw,
                100vw
              "
              className="object-cover"
            />

            <div className="pointer-events-none absolute inset-0 ring-1 ring-black/5" />
          </div>
        </div>


        {/* ------------------------------------------------ */}
        {/* COPY — LEFT ON DESKTOP                           */}
        {/* ------------------------------------------------ */}

        <div
          className="
            order-2
            max-w-[560px]
            lg:order-1
            lg:pl-30
            px-5
            lg:px-0
          "
        >

          {/* EYEBROW */}

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
            The Festive Edit
          </p>


          {/* HEADING */}

          <h2
            className="
              mt-5
              max-w-[460px]
              font-larken
              text-[1.87rem]
              leading-[0.92]
              tracking-[-0.045em]
              text-[#25231F]
              sm:text-[3.8rem]
              lg:text-[2.5rem]
              scale-y-90
              mb-7
              
            "
          >
            The Art
            
            of Gifting.
          </h2>


          {/* HAIRLINE */}

          <div
            className="
              my-7
              h-px
              w-10
              bg-[#25231F]/20
              sm:my-9
              hidden
            "
          />


          {/* BODY */}

          <p
            className="
              max-w-[430px]
              font-larken
              text-[1.12rem]
              leading-[1.55]
              tracking-[-0.01em]
              text-[#25231F]
              sm:text-[1.25rem]
              hidden
            "
          >
            A considered gesture for the season of giving.
            Wrapped in ivory, finished with muted gold, and made
            to be remembered long after the lights go out.
          </p>


          {/* SMALL SUPPORTING LINE */}

          <p
            className="
              mt-7
              max-w-[390px]
              font-lato
              text-[0.81rem]
              leading-[1.55]
              text-[#777168]
              sm:mt-9
              sm:text-[1rem]
            "
          >
            A limited festive edit, prepared for those you keep
            close and those moments worth making a little more special.
          </p>


          {/* CTA */}

          <div className="mt-9 sm:mt-11">
            <a
              href="#expressions"
              className="
                inline-flex
                items-center
                font-lato
                text-[0.62rem]
                font-bold
                uppercase
                tracking-[0.38em]
                text-[#25231F]
                underline
                decoration-[#25231F]/30
                underline-offset-[6px]
                transition-colors
                duration-300
                hover:decoration-[#25231F]
                pb-20
                lg:pb-0
              "
            >
              Discover the Festive Edit
              <span className="ml-3 text-[0.8rem] hidden">
                →
              </span>
            </a>
          </div>


          {/* SIGNATURE */}

          <div className="mt-10 flex items-center gap-4 sm:mt-12 hidden">
            <span className="h-px w-8 bg-[#25231F]/20" />

            <p
              className="
                font-lato
                text-[7px]
                uppercase
                tracking-[0.3em]
                text-[#A19A90]
              "
            >
              Wrapped in the Ruhava spirit
            </p>
          </div>

        </div>

      </div>

      {/* -------------------------------------------------- */}
{/* RUHAVA SERVICE — CONSIDERED, FROM HERE TO YOU     */}
{/* -------------------------------------------------- */}

<section
  id="ruhava-service"
  className="
    relative
    border-[#25231F]/10
    bg-[#F9F8F3]
    px-5
    py-16
    sm:px-8
    sm:py-20
    lg:px-12
    lg:py-24
  "
>
  <div className="mx-auto max-w-[1400px]">

    {/* SECTION INTRO */}
    <div className="mb-12 sm:mb-16 lg:mb-20">
      <p
        className="
          font-lato
          text-[8px]
          uppercase
          tracking-[0.3em]
          text-[#777168]
          hidden
        "
      >
        The Ruhava Courtesy
      </p>

      <h2
        className="
          mt-4
          max-w-[1500px]
          font-larken
          text-[1.5rem]
          leading-[0.95]
          tracking-[-0.04em]
          text-[#25231F]
          sm:text-[3.4rem]
          lg:text-[2rem]
          text-center
          scale-y-90
        "
      >
        Considered,
        
        from here to you.
      </h2>
    </div>


    {/* SERVICE STRIP */}
    <div
      className="
        grid
        grid-cols-1
         border-[#25231F]/10
        lg:grid-cols-3
      "
    >

      {/* ------------------------------------------------ */}
      {/* DELIVERY */}
      {/* ------------------------------------------------ */}

      <div
        className="
          group
          relative
          flex
          items-center
          gap-5
          border-b
          border-[#25231F]/10
          py-7
          sm:py-9
          lg:block
          lg:border-b-0
          lg:border-r
          lg:px-8
          lg:py-10
          lg:first:pl-0
           
           
        "
      >

        {/* SKETCH */}
        <div
          className="
            flex
            h-[72px]
            w-[88px]
            shrink-0
            items-center
            justify-center
            lg:h-[120px]
            lg:w-full
            lg:justify-start
            lg:pb-6
           lg:flex-col lg:items-center lg:text-center
          "
        >
          <img
            src="/assets/Detailed Graphite Bicycle Sketch.png"
            alt=""
            aria-hidden="true"
            className="
              h-[62px]
              w-auto
              object-contain
              opacity-75
              lg:h-[105px]
            "
          />
        </div>

        {/* COPY */}
        <div className="flex min-w-0 flex-1 items-center justify-between lg:block lg:flex-col lg:items-center lg:text-center">

          <h3
            className="
              max-w-[270px]
              font-larken
              
              text-[1rem]
              leading-[1.1]
              tracking-[-0.02em]
              text-[#25231F]
              sm:text-[1.35rem]
              lg:max-w-[500px]
              lg:text-[1rem]
              scale-y-90
            "
          >
            {/* Complimentary delivery
            <br className="hidden lg:block" />
            across Madhya Pradesh */}
            Delivery, on us.
          </h3>

          {/* DESKTOP CTA */}
          <a
            href="#faq"
            className="
              mt-7
              hidden
              items-center
              font-lato
              text-[0.58rem]
              font-bold
              uppercase
              tracking-[0.32em]
              text-[#25231F]
              underline
              decoration-[#25231F]/25
              underline-offset-[6px]
              transition-colors
              duration-300
              hover:decoration-[#25231F]
              lg:inline-flex
            "
          >
            Discover the details
            <span className="hidden ml-3 text-[0.75rem]">
              →
            </span>
          </a>

          {/* MOBILE ARROW */}
          <span
            aria-hidden="true"
            className="
              pr-1
              font-lato
              text-[1.15rem]
              font-light
              text-[#25231F]/70
              lg:hidden
            "
          >
            {/* → */}
            ⟩
          </span>

        </div>
      </div>


      {/* ------------------------------------------------ */}
      {/* RETURNS */}
      {/* ------------------------------------------------ */}

      <div
        className="
          group
          relative
          flex
          items-center
          gap-5
          border-b
          border-[#25231F]/10
          py-7
          sm:py-9
          lg:block
          lg:border-b-0
          lg:border-r
          lg:px-8
          lg:py-10
          
        "
      >

        {/* SKETCH */}
        <div
          className="
            flex
            h-[72px]
            w-[88px]
            shrink-0
            items-center
            justify-center
            lg:h-[120px]
            lg:w-full
            lg:justify-start
            lg:pb-6
            lg:flex-col lg:items-center lg:text-center
          "
        >
          <img
            src="/assets/Graphite Sketch Gift Box with Twine Bow.png"
            alt=""
            aria-hidden="true"
            className="
              h-[58px]
              w-auto
              object-contain
              opacity-75
              lg:h-[100px]
            "
          />
        </div>

        {/* COPY */}
        <div className="flex min-w-0 flex-1 items-center justify-between lg:block lg:flex-col lg:items-center lg:text-center">

          <h3
            className="
              max-w-[270px]
              font-larken
              text-[1rem]
              leading-[1.1]
              tracking-[-0.02em]
              text-[#25231F]
              sm:text-[1.35rem]
              lg:max-w-[400px]
              lg:text-[1rem]
              scale-y-90
            "
          >
            {/* A 14-day assurance
            <br className="hidden lg:block" />
            on every order */}
            14 days, to be certain.
          </h3>

          {/* DESKTOP CTA */}
          <a
            href="#faq"
            className="
              mt-7
              hidden
              items-center
              font-lato
              text-[0.58rem]
              font-bold
              uppercase
              tracking-[0.32em]
              text-[#25231F]
              underline
              decoration-[#25231F]/25
              underline-offset-[6px]
              transition-colors
              duration-300
              hover:decoration-[#25231F]
              lg:inline-flex
            "
          >
            Discover the details
            <span className="hidden ml-3 text-[0.75rem]">
              →
            </span>
          </a>

          {/* MOBILE ARROW */}
          <span
            aria-hidden="true"
            className="
              pr-1
              font-lato
              text-[1.15rem]
              font-light
              text-[#25231F]/70
              lg:hidden
            "
          >
            {/* → */}
            ⟩
          </span>

        </div>
      </div>


      {/* ------------------------------------------------ */}
      {/* SECURE CHECKOUT */}
      {/* ------------------------------------------------ */}

      <div
        className="
          group
          relative
          flex
          items-center
          gap-5
          py-7
          sm:py-9
          lg:block
          lg:px-8
          lg:py-10
          lg:last:pr-0
        "
      >

        {/* SKETCH */}
        <div
          className="
            flex
            h-[72px]
            w-[88px]
            shrink-0
            items-center
            justify-center
            lg:h-[120px]
            lg:w-full
            lg:justify-start
            lg:pb-6
            lg:flex-col lg:items-center lg:text-center
          "
        >
          <img
            src="/assets/Antique Graphite Padlock Sketch.png"
            alt=""
            aria-hidden="true"
            className="
              h-[58px]
              w-auto
              object-contain
              opacity-75
              lg:h-[100px]
            "
          />
        </div>

        {/* COPY */}
        <div className="flex min-w-0 flex-1 items-center justify-between lg:block lg:flex-col lg:items-center lg:text-center">

          <h3
            className="
              max-w-[270px]
              font-larken
              text-[1rem]
              leading-[1.1]
              tracking-[-0.02em]
              text-[#25231F]
              sm:text-[1.35rem]
              lg:max-w-[400px]
              lg:text-[1rem]
              scale-y-90
            "
          >
            {/* Secure checkout,
            <br className="hidden lg:block" />
            always */}
            Checkout, securely handled.
          </h3>

          {/* DESKTOP CTA */}
          <a
            href="#faq"
            className="
              mt-7
              hidden
              items-center
              font-lato
              text-[0.58rem]
              font-bold
              uppercase
              tracking-[0.32em]
              text-[#25231F]
              underline
              decoration-[#25231F]/25
              underline-offset-[6px]
              transition-colors
              duration-300
              hover:decoration-[#25231F]
              lg:inline-flex
            "
          >
            Discover the details
            <span className="hidden ml-3 text-[0.75rem]">
              →
            </span>
          </a>

          {/* MOBILE ARROW */}
          <span
            aria-hidden="true"
            className="
              pr-1
              font-lato
              text-[1.15rem]
              font-light
              text-[#25231F]/70
              lg:hidden
            "
          >
            ⟩
          </span>

        </div>
      </div>

    </div>
  </div>
</section>

{/* -------------------------------------------------- */}
{/* THE RUHAVA CIRCLE                                 */}
{/* -------------------------------------------------- */}

<section
  id="ruhava-circle"
  className="
    relative
    overflow-hidden
    bg-[#F9F8F3]
    px-5
    py-0
    sm:px-8
    sm:py-28
    lg:px-12
    lg:py-0
  "
>
  <div className="mx-auto max-w-[1400px]">

    {/* SECTION HEADING */}
    <div>
      {/* <p
        className="
          font-lato
          text-[9px]
          uppercase
          tracking-[0.28em]
          text-[#777168]
        "
      >
        The Ruhava Circle
      </p> */}

      <p
        className="
          font-larken
          lg:text-[2.5rem]
          text-[1.87rem]
          lg:pl-20
          scale-y-90
          text-charcoal
        "
      >
        @RuhavaOfficial
      </p>

      <div className="hidden mt-4 h-px w-10 bg-[#25231F]/20" />
    </div>


    {/* MAIN CONTENT */}
    <div
      className="
        mt-12
        grid
        grid-cols-[1.4fr_1fr]
        items-center
        gap-7
        sm:mt-16
        sm:gap-10
        lg:mt-20
        lg:grid-cols-[0.8fr_1.2fr]
        lg:gap-20
        xl:grid-cols-[0.75fr_1.25fr]
        xl:gap-28
      "
    >

      {/* COPY */}
      <div className="max-w-[420px] lg:pl-20 lg:-mt-10">

        <h2
          className="
            max-w-[390px]
            font-larken
            text-[1.5rem]
            leading-[0.96]
            tracking-[-0.04em]
            text-[#25231F]
            sm:text-[3rem]
            lg:text-[2rem]
            xl:text-[2rem]
            scale-y-90
          "
        >
          For those who wear
          <br />
          their <span className="font-dancing text-[2rem] lg:text-[2.5rem]">stories</span> close.
        </h2>

        <p
          className="
            mt-7
            max-w-[350px]
            font-lato
            text-[0.78rem]
            leading-[1.7]
            text-[#777168]
            sm:mt-9
            sm:text-[0.85rem]
          "
        >
          Show us how @ruhavaofficial finds its place in your day.
          We may carry your #RuhavaRitual into our world.
        </p>

        <div className="mt-8 sm:mt-10">
          <a
            href="#"
            className="
              inline-flex
              items-center
              font-lato
              text-[0.62rem]
              font-bold
              uppercase
              tracking-[0.38em]
              text-[#25231F]
              underline
              decoration-[#25231F]/30
              underline-offset-[6px]
              transition-colors
              duration-300
              hover:decoration-[#25231F]
            "
          >
            Share Your Ritual
            <span className="hidden ml-3 text-[0.8rem]">
              →
            </span>
          </a>
        </div>

      </div>


      {/* IMAGE COLLAGE */}
      <div
        className="
          relative
          h-[430px]
          sm:h-[560px]
          lg:h-[620px]
          xl:h-[680px]
          
        "
      >

        {/* IMAGE 1 — MAIN */}
        <div
          className="
            absolute
            left-[30%]
            top-[8%]
            h-[40%]
            w-[102%]
            overflow-hidden
            sm:left-[4%]
            sm:top-[6%]
            sm:h-[47%]
            sm:w-[39%]
          "
        >
          <Image
            src="/assets/hero-bg.webp"
            alt="A Ruhava ritual in an everyday setting"
            fill
            sizes="
              (min-width: 1280px) 22vw,
              (min-width: 1024px) 25vw,
              42vw
            "
            className="object-cover"
          />
        </div>


        {/* IMAGE 2 */}
        <div
          className="
            absolute
            right-[2%]
            top-0
            h-[40%]
            w-[34%]
            overflow-hidden
            sm:right-[3%]
            sm:h-[42%]
            sm:w-[31%]
            hidden
            lg:block
          "
        >
          <Image
            // src="/assets/Brand story 2-8.png"
            src="/assets/Cozy Sunlit Ruhava Study Desk.webp"
            alt="Ruhava in a personal everyday ritual"
            fill
            sizes="
              (min-width: 1280px) 18vw,
              (min-width: 1024px) 20vw,
              34vw
            "
            className="object-cover"
          />
        </div>


        {/* IMAGE 3 */}
        <div
          className="
            absolute
            left-[31%]
            top-[45%]
            h-[42%]
            w-[36%]
            overflow-hidden
            sm:left-[48%]
            sm:top-[37%]
            sm:h-[48%]
            sm:w-[34%]
            hidden
            lg:block
          "
        >
          <Image
            // src="/assets/Packaging Peek.png"
            src="/assets/Pre order announcement.webp"
            alt="A quiet moment shared with Ruhava"
            fill
            sizes="
              (min-width: 1280px) 20vw,
              (min-width: 1024px) 22vw,
              36vw
            "
            className="object-cover"
          />
        </div>


        {/* IMAGE 4 */}
        <div
          className="
            absolute
            bottom-[3%]
            right-[2%]
            h-[35%]
            w-[28%]
            overflow-hidden
            sm:bottom-[15%]
            sm:left-[92%]
            sm:h-[37%]
            sm:w-[27%]
            hidden
            lg:block
          "
        >
          <Image
            src="/assets/IMG_2501.webp"
            alt="A personal fragrance ritual with Ruhava"
            fill
            sizes="
              (min-width: 1280px) 16vw,
              (min-width: 1024px) 18vw,
              28vw
            "
            className="object-cover"
          />
        </div>


        {/* IMAGE 5 — SMALL DETAIL */}
        <div
          className="
            absolute
            bottom-[18%]
            left-[56%]
            h-[25%]
            w-[65%]
            overflow-hidden
            sm:bottom-[15%]
            sm:left-[15%]
            sm:h-[27%]
            sm:w-[21%]
          "
        >
          <Image
            // src="/assets/Pre order announcement.png"
            src="/assets/Sunlit Tote with Velvet Verse Perfume Balm.webp"
            alt="A quiet detail from the Ruhava circle"
            fill
            sizes="
              (min-width: 1280px) 12vw,
              (min-width: 1024px) 14vw,
              21vw
            "
            className="object-cover"
          />
        </div>

      </div>

    </div>


    {/* -------------------------------------------------- */}
    {/* MOBILE COLLAGE OVERRIDE                            */}
    {/* -------------------------------------------------- */}

    <div
      className="
        mt-10
        grid
        grid-cols-[1.05fr_0.8fr]
        gap-3
        lg:hidden
        hidden
      "
    >

      {/* MOBILE IMAGE 1 */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src="/assets/community-01.jpg"
          alt="A Ruhava ritual in an everyday setting"
          fill
          sizes="55vw"
          className="object-cover"
        />
      </div>

      {/* MOBILE IMAGE 2 */}
      <div className="relative mt-12 aspect-[3/4] overflow-hidden">
        <Image
          src="/assets/community-03.jpg"
          alt="A quiet moment shared with Ruhava"
          fill
          sizes="42vw"
          className="object-cover"
        />
      </div>

    </div>

  </div>
</section>

{/* -------------------------------------------------- */}
{/* FOR THOSE WHO CREATE                              */}
{/* -------------------------------------------------- */}

<section
  id="creator-rewards"
  className="
    relative
    
    border-[#25231F]/10
    bg-pastel
    px-5
    py-16
    sm:px-8
    sm:py-20
    lg:px-12
    lg:py-24
  "
>
  <div className="mx-auto max-w-[1100px]">

    {/* INTRO */}
    <div className="text-center">

      <p
        className="
          font-lato
          text-[8px]
          uppercase
          tracking-[0.3em]
          text-[#777168]
          hidden
        "
      >
        For Those Who Create
      </p>

      <h2
        className="
          mt-4
          font-larken
          text-[1.5rem]
          leading-[0.95]
          tracking-[-0.04em]
          text-[#25231F]
          sm:text-[3.4rem]
          lg:text-[2rem]
          scale-y-90
        "
      >
        Make something of the moment.
      </h2>

      <p
        className="
          mx-auto
          mt-6
          max-w-[470px]
          font-lato
          text-[0.78rem]
          leading-[1.7]
          text-[#777168]
          sm:text-[0.85rem]
        "
      >
        If your #RuhavaRitual finds its way into a Reel,
        we'd love to see what you create.
      </p>

    </div>


    {/* REWARD TIERS */}
    <div
      className="
        mx-auto
        mt-12
        grid
        max-w-[900px]
        grid-cols-3
        
        border-[#25231F]/10
        sm:mt-16
      "
    >

      {/* 10% */}
      <div
        className="
          flex
          flex-col
          items-center
          px-3
          py-8
          text-center
          sm:px-6
          sm:py-10
          lg:px-10
        "
      >
        <span
          className="
            font-larken
            text-[1.87rem]
            leading-none
            tracking-[-0.05em]
            text-[#25231F]
            sm:text-[4rem]
            lg:text-[2.5rem]
          "
        >
          11%
        </span>

        <p
          className="
            mt-4
            font-lato
            text-[7px]
            font-bold
            uppercase
            tracking-[0.22em]
            text-[#777168]
            sm:text-[8px]
            sm:tracking-[0.28em]
          "
        >
          On your Reel
        </p>
      </div>


      {/* 25% */}
      <div
        className="
          flex
          flex-col
          items-center
          border-l
          border-[#25231F]/10
          px-3
          py-8
          text-center
          sm:px-6
          sm:py-10
          lg:px-10
        "
      >
        <span
          className="
            font-larken
            text-[1.87rem]
            leading-none
            tracking-[-0.05em]
            text-[#25231F]
            sm:text-[4rem]
            lg:text-[2.5rem]
          "
        >
          21%
        </span>

        <p
          className="
            mt-4
            font-lato
            text-[7px]
            font-bold
            uppercase
            tracking-[0.22em]
            text-[#777168]
            sm:text-[8px]
            sm:tracking-[0.28em]
          "
        >
          At 5,000 views
        </p>
      </div>


      {/* 100% */}
      <div
        className="
          flex
          flex-col
          items-center
          border-l
          border-[#25231F]/10
          px-3
          py-8
          text-center
          sm:px-6
          sm:py-10
          lg:px-10
        "
      >
        <span
          className="
            font-larken
            text-[1.87rem]
            leading-none
            tracking-[-0.05em]
            text-[#25231F]
            sm:text-[4rem]
            lg:text-[2.5rem]
          "
        >
          101%
        </span>

        <p
          className="
            mt-4
            font-lato
            text-[7px]
            font-bold
            uppercase
            tracking-[0.22em]
            text-[#777168]
            sm:text-[8px]
            sm:tracking-[0.28em]
          "
        >
          At 50,000 views
        </p>
      </div>

    </div>


    {/* DISCLOSURE */}
    <div className="mt-8 text-center">

      <p
        className="
          font-lato
          text-[7px]
          uppercase
          tracking-[0.25em]
          text-[#777168]
        "
      >
        Tag @ruhavaofficial · #ad
      </p>

    </div>


    {/* TERMS */}
    <div className="mx-auto mt-7 max-w-[650px] text-center">

      <p
        className="
          font-lato
          text-[0.68rem]
          leading-[1.7]
          text-[#A19A90]
          sm:text-[0.72rem]
        "
      >
        Your reward is returned to your original payment method
        once your Reel is live and qualifying views have been
        verified. The highest qualifying tier determines your
        total reward.
      </p>

    </div>


    {/* CTA */}
    <div className="mt-8 text-center sm:mt-10">

      <a
        href="#"
        className="
          inline-flex
          items-center
          font-lato
          text-[0.6rem]
          font-bold
          uppercase
          tracking-[0.36em]
          text-[#25231F]
          underline
          decoration-[#25231F]/30
          underline-offset-[6px]
          transition-colors
          duration-300
          hover:decoration-[#25231F]
        "
      >
        Read the Terms
        <span className="hidden ml-3 text-[0.8rem]">
          →
        </span>
      </a>

    </div>

  </div>
</section>

{/* RUHAVA IMPACT */}
<section
  id="ruhava-impact"
  className="
    relative
    overflow-hidden
    bg-[#F9F8F3]
    px-5
    py-20
    sm:px-8
    sm:py-28
    lg:px-12
    lg:py-28
  "
>
  <div
    className="
      mx-auto
      grid
      max-w-[1200px]
      grid-cols-1
      items-center
      gap-12
      lg:grid-cols-[1.05fr_0.95fr]
      lg:gap-20
      xl:gap-28
    "
  >
    {/* IMAGE — TOP ON MOBILE, LEFT ON DESKTOP */}
    <div
      className="
        order-1
        relative
        w-full
      "
    >
      <div
        className="
          relative
          aspect-[4/5]
          w-full
          overflow-hidden
          bg-[#E8E1D7]
        "
      >
        <Image
          src="/assets/Golden Hour Study by the Window.webp"
          alt="A quiet editorial image representing the spirit behind Ruhava Impact"
          fill
          sizes="
            (min-width: 1280px) 52vw,
            (min-width: 1024px) 50vw,
            100vw
          "
          className="object-cover"
        />

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            ring-1
            ring-black/5
          "
        />
      </div>
    </div>

    {/* COPY — BELOW ON MOBILE, RIGHT ON DESKTOP */}
    <div
      className="
        order-2
        max-w-[500px]
        lg:pl-4
      "
    >
      {/* EYEBROW */}
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
        Ruhava Impact
      </p>

      {/* HEADLINE */}
      <h2
        className="
        
          lg:mt-5
          max-w-[480px]
          font-larken
          text-[1.87rem]
          leading-[0.93]
          tracking-[-0.045em]
          text-[#25231F]
          sm:text-[3.7rem]
          lg:text-[2.5rem]
          scale-y-90
        "
      >
        For the days when the
        <br />
          way <span className="font-dancing text-[2.4rem] lg:text-[3rem]">forward</span> isn't clear.
        
        
      </h2>

      {/* DIVIDER */}
      <div className="hidden my-7 h-px w-10 bg-[#25231F]/20 sm:my-9" />

      {/* STORY */}
      <p
        className="
        mt-7
          max-w-[470px]
          font-larken
          text-[1.08rem]
          leading-[1.55]
          tracking-[-0.01em]
          text-[#25231F]
          sm:text-[1.2rem]
          scale-y-90
          mr-5
          lg:mr-0
        "
      >
        Helen Keller's life became a quiet source of courage for
        our founder — especially in the harder seasons. Her story
        was a reminder that limitation need not be the end of
        possibility.
      </p>

      {/* IMPACT STATEMENT */}
      <p
        className="
          mt-7
          max-w-[460px]
          font-lato
          text-[0.8rem]
          leading-[1.75]
          text-[#777168]
          sm:mt-8
          sm:text-[0.86rem]
          mr-5
          lg:mr-5
        "
      >
        Ruhava carries that reminder forward.{" "}
        <span className="text-[#25231F]">
          1% of our annual sales will be given to Helen Keller
          International
        </span>
        , supporting its work to create healthier, more independent
        lives.
      </p>

      {/* CTA */}
      <div className="mt-9 sm:mt-11">
        <button
                type="button"
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
                Our Impact
              </button>
        {/* <a
          href="#impact"
          className="
          
            inline-flex
            items-center
            font-lato
            text-[0.62rem]
            font-bold
            uppercase
            tracking-[0.38em]
            text-[#25231F]
            underline
            decoration-[#25231F]/30
            underline-offset-[6px]
            transition-colors
            duration-300
            hover:decoration-[#25231F]
            
          "
        >
          Our Impact
          <span className="hidden ml-3 text-[0.8rem]">
            →
          </span>

        </a> */}
      </div>
    </div>
  </div>
</section>

{/* FAQ */}
<section
  id="faq"
  className="
    relative
    bg-[#F9F8F3]
    px-5
    pb-20
    sm:px-8
    sm:pb-28
    lg:px-12
    lg:pb-24
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
    <div className="border-t border-[#25231F]/10">

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