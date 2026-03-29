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
    <section
      className="section-padding px-4 sm:px-6"
      style={{ backgroundColor: "var(--secondary-white)" }}
    >
      <div className="section-container">
        {/* ─── HEADER ──────────────────────────────────────────────── */}
        <FadeInView className="mb-14 lg:mb-20">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <span
                className="type-eyebrow mb-3 block"
                style={{
                  color: "var(--accent-blue)",
                  fontSize: "var(--text-base)",
                }}
              >
                How It Works
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-oswald)",
                  fontWeight: 800,
                  fontSize: "clamp(2.75rem, 8vw, 5rem)",
                  lineHeight: 0.92,
                  letterSpacing: "var(--tracking-tight)",
                  color: "var(--primary-black)",
                  textTransform: "uppercase",
                }}
              >
                From Confusion
                <br />
                <span style={{ color: "var(--primary-blue)" }}>To Clarity</span>
              </h2>
            </div>
            <p
              className="type-lead lg:text-right lg:max-w-xs"
              style={{ color: "var(--muted-text)" }}
            >
              Our structured 4-step process takes the guesswork out of career
              planning.
            </p>
          </div>
        </FadeInView>

        {/* ─── STEP CARDS ──────────────────────────────────────────── */}
        <StaggerInView className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {STEPS.map((step) => (
            <FadeInView
              key={step.number}
              variants={fadeUp}
              className="group relative bg-[var(--surface-card)] rounded-[var(--radius-xl)] p-7 overflow-hidden flex flex-col gap-4 hover:-translate-y-1.5 hover:shadow-[var(--shadow-xl)] transition-all duration-300 cursor-pointer"
              style={{ boxShadow: "var(--shadow-md)" }}
            >
              {/* Giant watermark number */}
              <span
                aria-hidden="true"
                style={{
                  fontFamily: "var(--font-oswald)",
                  fontWeight: 800,
                  fontSize: "7rem",
                  lineHeight: 1,
                  position: "absolute",
                  top: "-1rem",
                  right: "0.75rem",
                  opacity: 0.06,
                  color: step.color,
                  pointerEvents: "none",
                  userSelect: "none",
                  letterSpacing: "var(--tracking-tight)",
                }}
              >
                {step.number}
              </span>

              {/* Top bar accent */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px] rounded-t-[var(--radius-xl)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: step.color }}
              />

              {/* Icon badge */}
              <div
                className="w-12 h-12 rounded-[var(--radius-md)] flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: step.colorLight, color: step.color }}
              >
                {step.icon}
              </div>

              {/* Step indicator */}
              <span
                className="type-label relative z-10"
                style={{ color: step.color, opacity: 0.7 }}
              >
                Step {step.number} / 04
              </span>

              {/* Title */}
              <h3
                className="relative z-10"
                style={{
                  fontFamily: "var(--font-oswald)",
                  fontWeight: 700,
                  fontSize: "clamp(1.15rem, 2vw, 1.4rem)",
                  color: "var(--primary-black)",
                  letterSpacing: "var(--tracking-tight)",
                  textTransform: "uppercase",
                  lineHeight: 1.1,
                }}
              >
                {step.title}
              </h3>

              {/* Desc */}
              <p
                className="type-body relative z-10"
                style={{
                  color: "var(--muted-text)",
                  fontSize: "var(--text-sm)",
                  lineHeight: "var(--leading-relaxed)",
                }}
              >
                {step.desc}
              </p>
            </FadeInView>
          ))}
        </StaggerInView>
      </div>
    </section>
  );
}
