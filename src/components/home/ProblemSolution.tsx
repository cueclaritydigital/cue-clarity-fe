import React from "react";
import {
  FiTarget,
  FiActivity,
  FiUserCheck,
  FiRefreshCcw,
} from "react-icons/fi";
import FadeInView from "@/components/animate/FadeInView";

export default function ProblemSolution() {
  return (
    <section className="relative py-24 lg:py-32 bg-blue-950 px-4 sm:px-6 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-yellow-400/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
        {/* LEFT: THE PROBLEM */}
        <FadeInView>
          <span className="text-yellow-400 text-base font-bold tracking-widest uppercase mb-4 block">
            The Problem
          </span>
          <h2 className="heading-font text-white text-4xl sm:text-5xl mb-4">
            Most People Are Flying Blind{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-300">
              About Their Career
            </span>
          </h2>
          <p className="text-lg text-white/60 mb-10 leading-relaxed">
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
        </FadeInView>

        {/* RIGHT: THE SOLUTION */}
        <FadeInView>
          <span className="text-blue-300 text-base font-bold tracking-widest uppercase mb-8 block">
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
              title="Advanced Psychometric Assessments"
              desc="Internationally validated tools — not random internet quizzes — for real insight."
            />
            <SolutionItem
              icon={<FiUserCheck size={22} />}
              title="1:1 Expert Counselors"
              desc="Experienced professionals who deeply understand the Indian career landscape."
            />
            <SolutionItem
              icon={<FiRefreshCcw size={22} />}
              title="Continuous Support & Follow-Up"
              desc="We stay with you through the whole journey, not just one session."
            />
          </div>
        </FadeInView>
      </div>
    </section>
  );
}

function FactBox({ pct, text }: { pct: string; text: string }) {
  return (
    <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 flex flex-col justify-center backdrop-blur-xl">
      <div className="font-oswald font-extrabold text-4xl sm:text-5xl text-yellow-400 leading-none tracking-tight mb-3">
        {pct}
      </div>
      <div className="text-[13px] text-white/60 leading-relaxed font-medium">
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
    <div className="group flex gap-5 items-start bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 lg:p-6 hover:bg-white/[0.07] hover:border-blue-300/20 transition-all duration-300 cursor-default backdrop-blur-xl">
      <div className="w-12 h-12 rounded-xl bg-blue-900 text-white flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-yellow-400/20 group-hover:text-yellow-400 transition-all duration-300">
        {icon}
      </div>

      <div className="flex flex-col gap-1.5 mt-0.5">
        <h4 className="font-oswald font-bold text-lg uppercase tracking-tight text-white leading-tight">
          {title}
        </h4>
        <p className="text-[14px] text-white/60 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
