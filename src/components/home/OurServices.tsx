import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { SERVICES, FEATURED_SERVICE } from "../../lib/data/ourservices";
import { CTA } from "@/analytics/CTA";

/* ── Service data — matches Navbar order ───────────────────────────── */

export default function OurServices() {
  return (
    <section className="relative py-24 px-4 sm:px-6 bg-blue-950 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-400/25 blur-[130px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-yellow-400/[0.06] blur-[100px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <span className="text-yellow-400 text-base font-bold tracking-widest uppercase mb-3 block">
              Our Expertise
            </span>
            <h2 className="heading-font text-white text-4xl sm:text-5xl lg:text-6xl">
              Everything You
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-300">
                Need to Grow
              </span>
            </h2>
          </div>
          <p className="text-white/60 text-lg leading-relaxed lg:text-right lg:max-w-xs">
            Seven specialist services — one destination: career clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {/* FEATURED CARD (col-span 2) */}

          <CTA
            href={FEATURED_SERVICE.href}
            event="cta_click"
            eventData={{
              source: "our_services",
              cta_name: "Get Started",
            }}
            className="group relative bg-white rounded-2xl lg:rounded-3xl p-8 lg:p-10 md:col-span-2 lg:col-span-2 overflow-hidden flex flex-col justify-between gap-8 hover:-translate-y-1 transition-all duration-300 cursor-pointer shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
          >
            {/* Hover yellow glow wash */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl lg:rounded-3xl"
              style={{
                background:
                  "radial-gradient(ellipse 70% 60% at 80% 50%, rgba(255,193,20,0.13) 0%, transparent 70%)",
              }}
            />

            {/* Decorative SVG */}
            <div className="absolute bottom-4 right-4 w-28 h-28 opacity-[0.12] text-blue-950 pointer-events-none">
              {FEATURED_SERVICE.svg}
            </div>

            <div className="flex items-start justify-between gap-8 relative z-10">
              <div className="flex flex-col gap-5 flex-1">
                <span className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full w-fit bg-blue-950/[0.08] text-blue-950">
                  {FEATURED_SERVICE.tag}
                </span>
                <h3
                  className="font-oswald font-extrabold uppercase tracking-tight text-blue-950 leading-none"
                  style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)" }}
                >
                  {FEATURED_SERVICE.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-[52ch]">
                  {FEATURED_SERVICE.desc}
                </p>
              </div>
              {/* Icon bubble */}
              <div className="hidden sm:flex shrink-0 w-16 h-16 lg:w-20 lg:h-20 rounded-2xl items-center justify-center group-hover:scale-110 group-hover:bg-blue-950 bg-blue-950/[0.07] text-blue-950 transition-all duration-300">
                <div className="group-hover:text-white transition-colors duration-300 w-8 h-8 lg:w-10 lg:h-10">
                  {FEATURED_SERVICE.svg}
                </div>
              </div>
            </div>

            <div className="relative z-10 w-fit inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm bg-blue-950 text-white transition-all duration-200 group-hover:-translate-y-px">
              Get Started
              <FiArrowRight
                size={13}
                className="group-hover:translate-x-1 transition-transform"
              />
            </div>
          </CTA>

          {/* 6 STANDARD CARDS */}
          {SERVICES.map((s, i) => {
            const isLast = i === SERVICES.length - 1;
            return (
              <CTA
                key={s.title}
                href={s.href}
                event="cta_click"
                eventData={{
                  source: "our_services",
                  cta_name: s.title,
                }}
                className={`group relative bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-7 overflow-hidden flex flex-col gap-4 hover:-translate-y-1  transition-all duration-300 shadow-[0_10px_40px_rgba(0,0,0,0.12)]${
                  isLast ? " lg:col-span-2" : ""
                }`}
              >
                {/* Hover yellow corner blob */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-[45px] bg-yellow-400"
                  style={{ transform: "translate(35%, -35%)" }}
                />
                {/* Decorative SVG bottom-right */}
                <div className="absolute bottom-3 right-3 w-20 h-20 opacity-[0.10] group-hover:opacity-[0.14] text-blue-950 pointer-events-none transition-all duration-300">
                  {s.svg}
                </div>
                <div className="relative z-10 flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 bg-blue-950/[0.07] group-hover:bg-blue-950/[0.14] text-blue-950">
                    <div className="w-5 h-5">{s.svg}</div>
                  </div>
                  <span className="text-xs font-bold tracking-widest uppercase text-gray-400 opacity-60 transition-all duration-300">
                    {s.tag}
                  </span>
                </div>
                <h3
                  className="relative z-10 font-oswald font-bold uppercase tracking-tight text-blue-950 transition-colors duration-300"
                  style={{
                    fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
                    lineHeight: 1.1,
                  }}
                >
                  {s.title}
                </h3>
                <p className="relative z-10 text-gray-500 text-sm leading-relaxed transition-colors duration-300">
                  {s.desc}
                </p>
                <div className="relative z-10 mt-auto flex items-center gap-1.5 font-bold text-sm group-hover:gap-2.5 transition-all duration-300 text-blue-950">
                  Learn More
                  <FiArrowRight size={13} />
                </div>
              </CTA>
            );
          })}
        </div>
      </div>
    </section>
  );
}
