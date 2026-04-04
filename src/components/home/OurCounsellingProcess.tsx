import React from "react";
import { FiPhone, FiClipboard, FiMap, FiTrendingUp } from "react-icons/fi";
import FadeInView from "@/components/animate/FadeInView";
import StaggerInView from "@/components/animate/StaggerInView";
import { fadeUp } from "@/lib/animations/variants";

const STEPS = [
  {
    number: "01",
    icon: <FiPhone className="w-5 h-5" />,
    title: "Free Discovery Call",
    desc: "A 15-minute no-obligation call to understand your goals, challenges, and where you are today.",
    color: "#29326E",
    colorLight: "rgba(41,50,110,0.08)",
  },
  {
    number: "02",
    icon: <FiClipboard className="w-5 h-5" />,
    title: "Psychometric Assessment",
    desc: "Internationally validated tools measure your aptitudes, personality, and core interests with scientific precision.",
    color: "#D97706",
    colorLight: "rgba(217,119,6,0.08)",
  },
  {
    number: "03",
    icon: <FiMap className="w-5 h-5" />,
    title: "Expert Career Roadmap",
    desc: "A tailored action plan built around your strengths — stream selection, college shortlists, or career-switch strategy.",
    color: "#059669",
    colorLight: "rgba(5,150,105,0.08)",
  },
  {
    number: "04",
    icon: <FiTrendingUp className="w-5 h-5" />,
    title: "Continuous Mentorship",
    desc: "Monthly check-ins, milestone tracking, and real-time support until you reach your destination.",
    color: "#6D28D9",
    colorLight: "rgba(109,40,217,0.08)",
  },
];

export default function OurCounsellingProcess() {
  return (
    <section className="relative py-24 px-4 sm:px-6 bg-gray-50/80 overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-80px] right-[-60px] w-[500px] h-[500px] bg-blue-200/15 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-60px] left-[-60px] w-[400px] h-[400px] bg-yellow-200/15 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* HEADER */}
        <FadeInView className="mb-14 lg:mb-20">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <span className="text-yellow-500 text-base font-bold tracking-widest uppercase mb-3 block">
                How It Works
              </span>
              <h2 className="heading-font text-[var(--primary-blue)] text-4xl sm:text-5xl lg:text-6xl">
                From Confusion <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-yellow)] to-orange-400">
                  To Clarity
                </span>
              </h2>
            </div>
            <p className="text-lg text-gray-500 leading-relaxed lg:text-right lg:max-w-xs">
              Our structured 4-step process takes the guesswork out of career
              planning.
            </p>
          </div>
        </FadeInView>

        {/* STEP CARDS */}
        <StaggerInView className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {STEPS.map((step) => (
            <FadeInView
              key={step.number}
              variants={fadeUp}
              className="group relative bg-white/70 backdrop-blur-xl rounded-3xl border border-gray-100 p-7 overflow-hidden flex flex-col gap-4 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all duration-300 cursor-pointer"
            >
              {/* Giant watermark number */}
              <span
                aria-hidden="true"
                className="absolute top-[-1rem] right-3 font-oswald font-extrabold leading-none pointer-events-none select-none opacity-[0.06] text-[7rem]"
                style={{ color: step.color }}
              >
                {step.number}
              </span>

              {/* Top bar accent */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px] rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: step.color }}
              />

              {/* Hover glow overlay */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-b from-yellow-100/30 to-transparent pointer-events-none" />

              {/* Icon badge */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: step.colorLight, color: step.color }}
              >
                {step.icon}
              </div>

              {/* Step indicator */}
              <span
                className="text-xs font-bold tracking-widest uppercase relative z-10 opacity-70"
                style={{ color: step.color }}
              >
                Step {step.number} / 04
              </span>

              {/* Title */}
              <h3 className="font-oswald font-bold uppercase tracking-tight text-blue-950 text-xl leading-tight relative z-10">
                {step.title}
              </h3>

              {/* Desc */}
              <p className="text-gray-500 text-sm leading-relaxed relative z-10">
                {step.desc}
              </p>
            </FadeInView>
          ))}
        </StaggerInView>
      </div>
    </section>
  );
}
