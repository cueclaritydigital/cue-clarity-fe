"use client";

import React from "react";
import FadeInView from "@/components/animate/FadeInView";
import { FiBookOpen, FiUsers, FiBriefcase } from "react-icons/fi";

const AUDIENCES = [
  {
    icon: <FiBookOpen size={22} />,
    title: "Students",
    subtitle: "8th–12th, UG, PG",
    desc: "From stream selection to postgraduate admissions, we guide students through every academic crossroads with clarity and confidence.",
  },
  {
    icon: <FiUsers size={22} />,
    title: "Parents",
    subtitle: "Families Seeking Direction",
    desc: "Parents seeking direction for their children — we partner with families to align love with the right guidance, reducing anxiety and building assurance.",
  },
  {
    icon: <FiBriefcase size={22} />,
    title: "Professionals",
    subtitle: "Career Transitions & Growth",
    desc: "Professionals navigating career shifts and individuals searching for purpose — we help you realign with who you are and where you truly belong.",
  },
];

const STATS = [
  {
    value: "21+",
    label: "Countries Impacted",
    desc: "Students and families guided across the globe.",
  },
  {
    value: "1000s",
    label: "Lives Transformed",
    desc: "From confusion to clarity, across India and beyond.",
  },
  {
    value: "5+",
    label: "Domains of Expertise",
    desc: "Career, competitive exams, MBA, international education, and profile building.",
  },
];

export default function WhoWeServe() {
  return (
    <section className="relative py-24 px-4 sm:px-6 overflow-hidden bg-blue-950">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-[-100px] left-[-60px] w-[500px] h-[500px] bg-blue-400/10 blur-[120px] rounded-full" />
        <div className="absolute top-[-80px] right-[-60px] w-[400px] h-[400px] bg-yellow-400/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Header */}
        <FadeInView className="text-center mb-20">
          <span className="text-yellow-500 text-base font-bold tracking-widest uppercase">
            Who We Serve
          </span>
          <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl heading-font text-white">
            Guidance for Every{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-300">
              Stage of Life
            </span>
          </h2>
        </FadeInView>

        {/* Audience cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {AUDIENCES.map((a) => (
            <FadeInView key={a.title}>
              <div className="group relative h-full rounded-3xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-xl p-8 sm:p-10 text-center hover:bg-white/[0.07] transition-all duration-500">
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-b from-yellow-400/[0.04] to-transparent pointer-events-none" />

                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-yellow-400/10 text-yellow-400 flex items-center justify-center mb-5 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {a.icon}
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-1 tracking-tight">
                    {a.title}
                  </h3>
                  <p className="text-xs uppercase tracking-wider mb-4 font-medium text-yellow-400/80">
                    {a.subtitle}
                  </p>
                  <p className="text-gray-400 leading-relaxed text-[15px]">
                    {a.desc}
                  </p>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12 pt-10 border-t border-white/[0.06]">
          {STATS.map((s) => (
            <FadeInView key={s.label}>
              <div className="text-center">
                <p className="text-5xl lg:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 mb-2">
                  {s.value}
                </p>
                <p className="text-sm font-semibold text-white uppercase tracking-wider mb-1">
                  {s.label}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
