"use client";

import { WHY_CHOOSE } from "@/lib/data/programs";
import FadeInView from "@/components/animate/FadeInView";
import StaggerInView from "@/components/animate/StaggerInView";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations/variants";
import {
  FiActivity,
  FiUsers,
  FiMap,
  FiShield,
  FiAward,
  FiHeart,
} from "react-icons/fi";

const ICON_MAP: Record<string, React.ReactNode> = {
  science: <FiActivity size={24} />,
  expert: <FiUsers size={24} />,
  roadmap: <FiMap size={24} />,
  support: <FiShield size={24} />,
  track: <FiAward size={24} />,
  family: <FiHeart size={24} />,
};

export default function WhyChooseUs() {
  return (
    <section className="relative section-padding px-4 sm:px-6 bg-[var(--primary-blue)] overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-[var(--accent-blue)] opacity-25 blur-[130px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-[var(--primary-yellow)] opacity-[0.06] blur-[100px] rounded-full" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(var(--primary-white) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <FadeInView>
            <span
              className="type-eyebrow text-[var(--primary-yellow)] mb-3 block"
              style={{ fontSize: "var(--text-base)" }}
            >
              Why CueClarity
            </span>
            <h2
              className="font-oswald font-extrabold uppercase text-[var(--primary-white)] leading-[0.95] tracking-tight mb-6"
              style={{ fontSize: "clamp(2.25rem, 6vw, 3.5rem)" }}
            >
              Not Just Advice.
              <br />
              <span className="text-[var(--primary-yellow)]">
                A Proven System.
              </span>
            </h2>
            <p className="type-lead text-[var(--primary-white)]/60 max-w-xl mx-auto">
              Here&apos;s what separates our programs from generic career
              guidance — and why thousands trust us with their futures.
            </p>
          </FadeInView>
        </div>

        {/* Grid */}
        <StaggerInView className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {WHY_CHOOSE.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="group relative rounded-2xl lg:rounded-3xl p-8 lg:p-10 bg-[var(--primary-white)]/[0.04] border border-[var(--primary-white)]/[0.08] backdrop-blur-sm hover:bg-[var(--primary-white)]/[0.08] hover:border-[var(--primary-white)]/[0.15] transition-all duration-[var(--transition-base)]"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[var(--primary-yellow)]/15 text-[var(--primary-yellow)] flex items-center justify-center mb-6">
                {ICON_MAP[item.icon]}
              </div>

              <h3
                className="font-oswald font-bold uppercase tracking-tight text-[var(--primary-white)] leading-tight mb-3"
                style={{ fontSize: "clamp(1.15rem, 2.5vw, 1.35rem)" }}
              >
                {item.title}
              </h3>
              <p className="text-sm text-[var(--primary-white)]/55 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </StaggerInView>
      </div>
    </section>
  );
}
