import React from "react";
import { FiArrowRight } from "react-icons/fi";

export default function Testimonials() {
  return (
    <section className="section-padding px-4 sm:px-6 bg-[var(--primary-white)] overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-14 animate-fade-in-up">
          <div>
            <span
              className="type-eyebrow text-[var(--accent-blue)] mb-3 block"
              style={{ fontSize: "var(--text-base)" }}
            >
              Success Stories
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-[var(--primary-black)] leading-[1] font-oswald">
              Real Results From <br className="hidden sm:block" /> Real People
            </h2>
          </div>
          <button className="btn-outline-dark group">
            View All Stories
            <FiArrowRight className="transition-transform duration-[var(--transition-base)] group-hover:translate-x-1" />
          </button>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 auto-rows-auto">
          {/* 1. FEATURED — Career Transition */}
          <div className="relative p-8 lg:p-10 rounded-[var(--radius-xl)] bg-[var(--primary-black)] border border-[var(--primary-black)] transition-all duration-[var(--transition-base)] hover:-translate-y-1 hover:shadow-2xl overflow-hidden lg:row-span-2 flex flex-col justify-between animate-fade-in-up group">
            <div className="absolute top-[-20px] right-4 text-[140px] font-black text-[var(--primary-white)]/5 leading-none font-oswald pointer-events-none select-none">
              &ldquo;
            </div>
            <div>
              <div className="inline-block bg-[var(--primary-white)]/10 text-[var(--primary-white)]/80 px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase mb-6">
                Career Transition
              </div>
              <div className="text-[var(--primary-yellow)] text-sm tracking-widest mb-4">
                ★★★★★
              </div>
              <p className="type-body text-[var(--primary-white)]/90 text-lg leading-relaxed relative z-10 mb-8">
                &ldquo;After just 3 sessions with CueClarity, I had a
                crystal-clear roadmap to transition from software engineering
                into product management. The process was incredibly personalized
                — they actually listened to what mattered to me, not just my
                resume. I landed my dream PM role within 4 months.&rdquo;
              </p>
            </div>
            <div className="flex items-center gap-3 relative z-10 border-t border-[var(--primary-white)]/10 pt-6 mt-auto">
              <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--primary-blue)] text-[var(--primary-white)] flex items-center justify-center font-bold text-lg">
                A
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-[var(--primary-white)]">
                  Ananya Mehta
                </span>
                <span className="text-[11px] text-[var(--primary-white)]/50 mt-0.5">
                  Software Engineer → PM · Bangalore
                </span>
              </div>
            </div>
          </div>

          {/* 2. College Grad */}
          <TestimonialCard
            quote="I was completely lost after graduating. CueClarity helped me discover UX design as my true path and gave me a concrete step-by-step plan to get there."
            initial="K"
            avatarBg="bg-[var(--blob-glow)]"
            name="Kartik Verma"
            role="B.Com Graduate → UX Designer"
            delay="0.1s"
          />

          {/* 3. Working Professional */}
          <TestimonialCard
            quote="The assessment revealed exactly why I was unhappy at work. Finally understood which role would make me thrive. Life-changing conversation."
            initial="P"
            avatarBg="bg-orange-500"
            name="Priya Nair"
            role="Marketing Manager · Career Clarity"
            delay="0.2s"
          />

          {/* 4. Student — Parent Involved */}
          <TestimonialCard
            quote="My parents kept pushing engineering. One session with CueClarity helped me — and them — see that architecture was my true calling."
            initial="S"
            avatarBg="bg-purple-500"
            name="Sanya Kapoor"
            role="Class 12 Student · Mumbai"
            delay="0.3s"
            bgColor="bg-[var(--secondary-white)]/30"
          />

          {/* 5. PARENT testimonial */}

          {/* 6. Brand Card — Professional */}
          <div
            className="relative p-7 rounded-[var(--radius-lg)] bg-[var(--primary-blue)] border border-[var(--primary-blue)] transition-all duration-[var(--transition-base)] hover:-translate-y-1 hover:shadow-xl overflow-hidden flex flex-col justify-between animate-fade-in-up"
            style={{ animationDelay: "0.4s", animationFillMode: "both" }}
          >
            <div className="absolute top-[-15px] right-3 text-[100px] font-black text-[var(--primary-white)]/10 leading-none font-oswald pointer-events-none select-none">
              &ldquo;
            </div>
            <div>
              <div className="text-[var(--primary-white)]/70 text-[13px] tracking-widest mb-3">
                ★★★★★
              </div>
              <p className="type-body text-[var(--primary-white)]/90 text-[14px] relative z-10 mb-6">
                &ldquo;Switched careers after 8 years. CueClarity made it feel
                possible, not terrifying. Best decision I ever made.&rdquo;
              </p>
            </div>
            <div className="flex items-center gap-3 relative z-10">
              <div className="w-10 h-10 rounded-[var(--radius-sm)] bg-[var(--primary-white)]/20 text-[var(--primary-white)] flex items-center justify-center font-bold text-[15px]">
                R
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-[var(--primary-white)]">
                  Rahul Desai
                </span>
                <span className="text-[11px] text-[var(--primary-white)]/60 mt-0.5">
                  Finance → Data Science
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  quote,
  initial,
  avatarBg,
  name,
  role,
  delay,
  bgColor = "bg-white",
}: {
  quote: string;
  initial: string;
  avatarBg: string;
  name: string;
  role: string;
  delay: string;
  bgColor?: string;
}) {
  return (
    <div
      className={`relative p-7 rounded-[var(--radius-lg)] ${bgColor} border border-[var(--primary-black)]/10 transition-all duration-[var(--transition-base)] hover:-translate-y-1 hover:border-[var(--primary-black)] hover:shadow-xl overflow-hidden flex flex-col justify-between animate-fade-in-up`}
      style={{ animationDelay: delay, animationFillMode: "both" }}
    >
      <div className="absolute top-[-15px] right-3 text-[100px] font-black text-[var(--primary-black)]/5 leading-none font-oswald pointer-events-none select-none">
        &ldquo;
      </div>
      <div>
        <div className="text-[var(--primary-yellow)] text-[13px] tracking-widest mb-3">
          ★★★★★
        </div>
        <p className="type-body text-[var(--primary-black)] text-[14px] relative z-10 mb-6">
          &ldquo;{quote}&rdquo;
        </p>
      </div>
      <div className="flex items-center gap-3 relative z-10">
        <div
          className={`w-10 h-10 rounded-[var(--radius-sm)] ${avatarBg} text-white flex items-center justify-center font-bold text-[15px]`}
        >
          {initial}
        </div>
        <div className="flex flex-col">
          <span className="text-[13px] font-bold text-[var(--primary-black)] leading-tight">
            {name}
          </span>
          <span className="text-[11px] text-[var(--muted-text)] mt-0.5">
            {role}
          </span>
        </div>
      </div>
    </div>
  );
}
