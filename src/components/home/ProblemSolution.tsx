import React from "react";
import {
  FiTarget,
  FiActivity,
  FiUserCheck,
  FiRefreshCcw,
} from "react-icons/fi";

export default function ProblemSolution() {
  return (
    // Dark section using your primary-black token
    <section className="relative py-24 lg:py-32 bg-[var(--primary-black)] px-4 sm:px-6 overflow-hidden">
      {/* Subtle ambient glow to break up the solid black */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[var(--primary-blue)] opacity-20 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        {/* =======================
            LEFT SIDE: THE PROBLEM 
            ======================= */}
        <div className="animate-fade-in-up">
          {/* Using accent-yellow to signal a "warning/problem" */}
          <span
            className="type-eyebrow text-[var(--primary-yellow)] mb-4 block text-base"
            style={{ fontSize: "var(--text-base)" }}
          >
            The Problem
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-[var(--primary-white)] leading-[1.05] font-oswald mb-4">
            Most People Are Flying Blind About Their Career
          </h2>
          <p className="type-lead text-[var(--primary-white)]/60 mb-10">
            A lack of proper guidance leads to wrong choices, wasted years, and
            deep regret.
          </p>

          {/* Fact Grid */}
          <div className="grid grid-cols-2 gap-4">
            <FactBox
              pct="90%"
              text="Students pick the wrong career due to lack of proper guidance."
            />
            <FactBox
              pct="93%"
              text="Are aware of fewer than 7 career options out of hundreds."
            />
            <FactBox
              pct="68%"
              text="Students regret their academic stream choice after selecting it."
            />
            <FactBox
              pct="77%"
              text="Of professionals feel unprepared for the job market they entered."
            />
          </div>
        </div>

        {/* =======================
            RIGHT SIDE: THE SOLUTION 
            ======================= */}
        <div
          className="animate-fade-in-up"
          style={{ animationDelay: "0.2s", animationFillMode: "both" }}
        >
          {/* Using blob-glow (soft violet) for a calming "solution" vibe */}
          <span
            className="type-eyebrow text-[var(--blob-glow)] mb-8 block"
            style={{ fontSize: "var(--text-base)" }}
          >
            The CueClarity Solution
          </span>

          <div className="flex flex-col gap-4">
            <SolutionItem
              icon={<FiTarget size={22} />}
              title="Personalized Career Roadmap"
              desc="A tailored plan built around your unique strengths, not a one-size-fits-all template."
            />
            <SolutionItem
              icon={<FiActivity size={22} />}
              title="Science-Backed Assessments"
              desc="Internationally validated tools — not random internet quizzes — for real insight."
            />
            <SolutionItem
              icon={<FiUserCheck size={22} />}
              title="1:1 Expert Counselors"
              desc="Experienced professionals who deeply understand the Indian career landscape."
            />
            <SolutionItem
              icon={<FiRefreshCcw size={22} />}
              title="Ongoing Support & Follow-Up"
              desc="We stay with you through the whole journey, not just one session."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------- SUBS ----------------

function FactBox({ pct, text }: { pct: string; text: string }) {
  return (
    <div className="bg-[var(--primary-white)]/5 border border-[var(--primary-white)]/10 rounded-[var(--radius-lg)] p-6 flex flex-col justify-center">
      {/* Massive, tight typography for the percentage */}
      <div className="text-4xl sm:text-5xl font-extrabold text-[var(--primary-yellow)] font-oswald leading-none tracking-tighter mb-3">
        {pct}
      </div>
      <div className="text-[13px] text-[var(--primary-white)]/60 leading-relaxed font-medium">
        {text}
      </div>
    </div>
  );
}

function SolutionItem({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="group flex gap-5 items-start bg-[var(--primary-white)]/5 border border-[var(--primary-white)]/10 rounded-[var(--radius-lg)] p-5 lg:p-6 transition-all duration-[var(--transition-base)] hover:bg-[var(--primary-white)]/10 hover:border-[var(--blob-glow)]/50 cursor-default">
      {/* Icon Container */}
      <div className="w-12 h-12 rounded-[var(--radius-md)] bg-[var(--primary-blue)] text-[var(--primary-white)] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[var(--blob-glow)] group-hover:text-[var(--primary-black)] transition-all duration-[var(--transition-base)] shadow-sm">
        {icon}
      </div>

      {/* Text Container */}
      <div className="flex flex-col gap-1.5 mt-0.5">
        <h4
          className="text-[var(--primary-white)] uppercase tracking-tight"
          style={{
            fontFamily: "var(--font-oswald), system-ui, sans-serif",
            fontSize: "var(--text-lg)",
            fontWeight: "700",
            lineHeight: "var(--leading-tight)",
          }}
        >
          {title}
        </h4>
        <p className="text-[14px] text-[var(--primary-white)]/60 leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}
