import type { Metadata } from "next";
import Link from "next/link";
import DesktopHeader from "@/components/DesktopHeader";
import MobileHeader from "@/components/MobileHeader";
import AnnouncementBar from "@/components/AnnouncementBar";



export const metadata: Metadata = {
  title: "A Little Longer | The Ruhava Gazette",
  description:
    "A note from the founder on the inward freight delay affecting the first edition of La Collection Littéraire.",
};

export default function InwardFreightDelayPage() {
  return (
    <main className="min-h-screen bg-[#F9F8F3] text-[#25231F]">
      {/* ─────────────────────────────────────────────
          ARTICLE HEADER
      ───────────────────────────────────────────── */}
       {/* 4. HEADER: Lower Z than Widgets */}
           
      <header className="border-b border-[#25231F]/10">
      
              <DesktopHeader />
              <MobileHeader />
        <div className="mx-auto max-w-[1400px] px-5 pb-14 pt-8 sm:px-8 sm:pb-20 sm:pt-10 lg:px-12 lg:pb-24">
          {/* Breadcrumb / issue marker */}
          <div className="flex items-center justify-between gap-6">
            <Link
              href="/#announcements"
              className="
                font-lato text-[8px] font-bold uppercase tracking-[0.28em]
                text-[#25231F]/60 transition-colors duration-300
                hover:text-[#25231F]
                sm:text-[9px]
              "
            >
              ← The Ruhava Gazette
            </Link>

            <p className="font-lato text-[8px] uppercase tracking-[0.25em] text-[#25231F]/40 sm:text-[9px]">
              Maison Note · 26 October 2026
            </p>
          </div>

          <div className="mx-auto mt-20 max-w-[980px] text-center sm:mt-28 lg:mt-32">
            <div
  className="
    inline-flex items-center rounded-none
    border border-[#25231F]/20 bg-transparent
    px-3 py-1
    font-lato text-[8px] font-normal uppercase
    tracking-[0.28em] text-[#25231F]/60
  "
>
  A note from the Maison
</div>

            <h1
              className="
                mx-auto mt-7 max-w-[950px]
                font-larken text-[3.4rem] leading-[0.91]
                tracking-[-0.055em]
                sm:text-[5.5rem]
                lg:text-[7.2rem]
                scale-y-90
              "
            >
              A little
              <br />
              longer.
            </h1>

            <div className="mx-auto mt-9 h-px w-10 bg-[#25231F]/25 sm:mt-11" />

            <p
              className="
                mx-auto mt-8 max-w-[600px]
                font-larken text-[1.12rem] leading-[1.5]
                text-[#25231F]/80
                sm:text-[1.3rem]
              "
            >
              An inward freight delay has moved the estimated delivery
              date for the First Edition to{" "}
              <span className="text-[#25231F]">14 November</span>.
            </p>
          </div>
        </div>
      </header>

      {/* ─────────────────────────────────────────────
          ARTICLE BODY
      ───────────────────────────────────────────── */}
      <article>
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 lg:grid-cols-[220px_minmax(0,700px)] lg:gap-20 xl:grid-cols-[260px_minmax(0,720px)]">
          {/* Editorial side note */}
          <aside className="hidden lg:block">
            <div className="sticky top-10 pt-24">
              <p className="font-lato text-[8px] uppercase tracking-[0.3em] text-[#25231F]/40">
                The First Edition
              </p>

              <p className="mt-5 max-w-[170px] font-larken text-[1.15rem] leading-[1.3] text-[#25231F]/75">
                Twelve pieces.
                <br />
                Five expressions.
                <br />
                One beginning.
              </p>

              <div className="my-7 h-px w-8 bg-[#25231F]/20" />

              <p className="font-lato text-[8px] uppercase leading-[1.7] tracking-[0.18em] text-[#25231F]/45">
                Estimated delivery
              </p>

              <p className="mt-2 font-larken text-[1.1rem] text-[#25231F]">
                14 November
              </p>
            </div>
          </aside>

          {/* Main article */}
          <div className="px-5 py-16 sm:px-8 sm:py-20 lg:px-0 lg:py-24">
            {/* Opening */}
            <section>
              <p className="font-lato text-[9px] font-bold uppercase tracking-[0.28em] text-[#25231F]/45">
                A small update
              </p>

              <p className="mt-7 font-larken text-[1.55rem] leading-[1.35] tracking-[-0.02em] sm:text-[1.85rem] scale-y-90">
                Good things take time.
              </p>

              <div className="mt-7 space-y-6 font-larken text-[1.05rem] leading-[1.75] text-[#25231F]/80 sm:text-[1.12rem]">
                <p>
                  We had hoped to be writing to you with a different kind of
                  update — the kind that says your piece is on its way.
                </p>

                <p>
                  Instead, we are writing to say that it will take a little
                  longer.
                </p>

                <p>
                  An inward freight delay has affected some of the materials
                  required for the First Edition. As a result, the estimated
                  delivery date has moved to{" "}
                  <strong className="font-normal text-[#25231F]">
                    14 November
                  </strong>
                  .
                </p>
              </div>
            </section>

            {/* Why we're telling you */}
            <section className="mt-20 border-y border-[#25231F]/10 py-12 sm:mt-24 sm:py-14">
              <p className="font-lato text-[9px] font-bold uppercase tracking-[0.28em] text-[#25231F]/45">
                Why we are telling you now
              </p>

              <h2 className="mt-5 font-larken text-[2.2rem] leading-[1] tracking-[-0.04em] sm:text-[3rem] scale-y-90">
                Because you believed early.
              </h2>

              <div className="mt-7 space-y-6 font-larken text-[1.05rem] leading-[1.75] text-[#25231F]/80 sm:text-[1.12rem]">
                <p>
                  The first people to believe in something deserve to know
                  what is happening behind it.
                </p>

                <p>
                  Ruhava is still young. The First Edition is not coming from
                  a warehouse full of finished stock. It is being made,
                  considered, checked and prepared in small quantities.
                </p>

                <p>
                  That means there are things we can control — and things,
                  occasionally, that we cannot.
                </p>

                <p>
                  This delay is one of the latter.
                </p>
              </div>
            </section>

            {/* Founder note */}
            <section className="mt-20 sm:mt-24">
              <div className="flex items-center gap-4">
                <span className="h-px w-8 bg-[#25231F]/25" />

                <p className="font-lato text-[8px] font-bold uppercase tracking-[0.3em] text-[#25231F]/45">
                  From the founder
                </p>
              </div>

              <div className="mt-8 space-y-6 font-larken text-[1.05rem] leading-[1.75] text-[#25231F]/80 sm:text-[1.12rem]">
                <p>
                  I wish I could tell you that building Ruhava has been a
                  perfectly plotted journey.
                </p>

                <p>
                  It hasn't.
                </p>

                <p>
                  I'm figuring it out too.
                </p>

                <p>
                  This is my first time building something like this, and
                  there is a particular kind of uncertainty that comes with
                  making something you care about deeply. You make the plans.
                  You work late. You make another plan. Then something arrives
                  from somewhere you weren't expecting and politely reminds
                  you that plans are only plans.
                </p>

                <p>
                  So we adjust.
                </p>

                <p>
                  We learn.
                </p>

                <p>
                  We keep going.
                </p>

                <p>
                  I've been working on Ruhava for more than a year now. There
                  have been more sleepless nights than I have kept count of,
                  and probably more versions of the same idea than anyone
                  should have to see.
                </p>

                <p>
                  But some things are important enough that you keep working
                  for them even when the odds are not particularly interested
                  in helping.
                </p>

                <p>
                  Ruhava is one of those things for me.
                </p>
              </div>

              <div className="mt-10 border-l border-[#25231F]/20 pl-6 sm:mt-12 sm:pl-8">
                <p className="font-larken text-[1.25rem] leading-[1.5] text-[#25231F]/75 sm:text-[1.45rem]">
                  And if we are going to make this journey, I would rather
                  make it honestly.
                </p>
              </div>
            </section>

            {/* What happens next */}
            <section className="mt-20 sm:mt-24">
              <p className="font-lato text-[9px] font-bold uppercase tracking-[0.28em] text-[#25231F]/45">
                What happens next
              </p>

              <h2 className="mt-5 font-larken text-[2.2rem] leading-[1] tracking-[-0.04em] sm:text-[3rem] scale-y-90">
                We keep moving.
              </h2>

              <div className="mt-7 space-y-6 font-larken text-[1.05rem] leading-[1.75] text-[#25231F]/80 sm:text-[1.12rem]">
                <p>
                  The materials are on their way. Once they arrive, we will
                  continue preparing the First Edition carefully and without
                  rushing the parts that should not be rushed.
                </p>

                <p>
                  The revised estimated delivery date is{" "}
                  <strong className="font-normal text-[#25231F]">
                    14 November
                  </strong>
                  .
                </p>

                <p>
                  If anything changes before then, you'll hear it from us.
                </p>

                <p>
                  We know that waiting is not quite as exciting as opening a
                  package. But we hope you'll agree that some things are worth
                  waiting for when they are being made with intention.
                </p>
              </div>
            </section>

            {/* Together */}
            <section className="mt-20 bg-[#25231F] px-6 py-12 text-[#F9F8F3] sm:mt-24 sm:px-12 sm:py-16">
              <p className="font-lato text-[8px] font-bold uppercase tracking-[0.3em] text-[#F9F8F3]/45">
                The long way around
              </p>

              <h2 className="mt-5 max-w-[560px] font-larken text-[2.2rem] leading-[0.98] tracking-[-0.04em] sm:text-[3rem] scale-y-90">
                We are only at the beginning.
              </h2>

              <div className="mt-7 max-w-[570px] space-y-5 font-larken text-[1rem] leading-[1.75] text-[#F9F8F3]/72 sm:text-[1.08rem]">
                <p>
                  There will be more things we get right, and more things we
                  have to learn the hard way.
                </p>

                <p>
                  Whether Ruhava succeeds or not will ultimately be decided
                  by what we do from here — not by how beautifully we imagined
                  it at the beginning.
                </p>

                <p>
                  But we're here. We're working. And we're very glad you're
                  here too.
                </p>
              </div>
            </section>

            {/* Small teaser for future story */}
            <section className="mt-20 border-t border-[#25231F]/10 pt-12 sm:mt-24 sm:pt-14">
              <p className="font-lato text-[8px] font-bold uppercase tracking-[0.3em] text-[#25231F]/40">
                A story for another day
              </p>

              <p className="mt-6 max-w-[610px] font-larken text-[1.15rem] leading-[1.65] text-[#25231F]/75 sm:text-[1.3rem]">
                There is a longer story behind the year that led us here —
                why I disappeared, what I was building, and why this little
                Maison became important enough to give so much of myself to.
              </p>

              <p className="mt-5 max-w-[560px] font-larken text-[1.05rem] leading-[1.7] text-[#25231F]/60">
                The chronicler is documenting it all. The long way around will
                soon be yours to read.
              </p>
            </section>

            {/* Founder signature */}
            <section className="mt-16 border-t border-[#25231F]/10 pt-8 sm:mt-20">
              <p className="font-larken text-[1.05rem] text-[#25231F]/70">
                With gratitude,
              </p>

              <p className="mt-3 font-larken text-[1.35rem] tracking-[-0.02em]">
                Harsh
              </p>

              <p className="mt-1 font-lato text-[8px] uppercase tracking-[0.25em] text-[#25231F]/40">
                Founder · Ruhava
              </p>
            </section>

            {/* Bottom navigation */}
            <div className="mt-16 flex flex-col gap-4 border-t border-[#25231F]/10 pt-8 sm:mt-20 sm:flex-row sm:items-center sm:justify-between">
              <Link
  href="/#announcements"
  className="
    inline-flex h-11 w-full items-center justify-center
    border border-[#25231F]/25
    bg-transparent px-6
    font-lato text-[8px] font-bold uppercase
    tracking-[0.25em] text-[#25231F]
    transition-colors duration-300
    hover:bg-[#25231F] hover:text-[#F9F8F3]
    sm:w-auto
  "
>
  Back to the Gazette
</Link>

              <Link
                href="/#layer-it"
                className="
                  text-center font-lato text-[8px] font-bold uppercase
                  tracking-[0.25em] text-[#25231F]/60
                  underline decoration-[#25231F]/20 underline-offset-4
                  transition-colors duration-300
                  hover:text-[#25231F] hover:decoration-[#25231F]/60
                  sm:text-right
                "
              >
                Discover the Ritual →
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}