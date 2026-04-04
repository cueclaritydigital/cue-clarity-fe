"use client";

import React from "react";
import FadeInView from "@/components/animate/FadeInView";
import {
  FiCompass,
  FiAward,
  FiBookOpen,
  FiGlobe,
  FiLayers,
  FiSun,
  FiHeart,
  FiTrendingUp,
  FiSmile,
  FiZap,
} from "react-icons/fi";

const EXPERTISE = [
  {
    icon: <FiCompass size={20} />,
    title: "Career Counselling",
    desc: "Personalised mentorship for students and professionals at every stage — from stream selection to career pivots.",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-900",
  },
  {
    icon: <FiAward size={20} />,
    title: "Competitive Exams",
    desc: "Guidance for Defence, Banking, SSC, and other high-stakes examinations with structured preparation strategies.",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    icon: <FiBookOpen size={20} />,
    title: "MBA & Master's",
    desc: "Expert admissions support for top MBA and postgraduate programmes across India and globally.",
    iconBg: "bg-green-100",
    iconColor: "text-green-700",
  },
  {
    icon: <FiGlobe size={20} />,
    title: "International Education",
    desc: "Consulting for global universities across 21+ countries — from shortlisting to visa preparation.",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-700",
  },
  {
    icon: <FiLayers size={20} />,
    title: "Profile Building",
    desc: "Comprehensive profile development across diverse academic and professional domains.",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-700",
  },
];

const VALUES = [
  {
    icon: <FiSun size={16} />,
    title: "Clarity over Confusion",
    color: "text-yellow-600",
    bg: "bg-yellow-100",
  },
  {
    icon: <FiHeart size={16} />,
    title: "Purpose over Pressure",
    color: "text-blue-900",
    bg: "bg-blue-100",
  },
  {
    icon: <FiTrendingUp size={16} />,
    title: "Growth over Shortcuts",
    color: "text-green-700",
    bg: "bg-green-100",
  },
  {
    icon: <FiSmile size={16} />,
    title: "Empathy over Judgement",
    color: "text-amber-700",
    bg: "bg-amber-100",
  },
  {
    icon: <FiZap size={16} />,
    title: "Impact over Information",
    color: "text-purple-700",
    bg: "bg-purple-100",
  },
];

export default function ExpertiseValues() {
  return (
    <section className="relative py-24 px-4 sm:px-6 overflow-hidden bg-white">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-100px] left-[-80px] w-[500px] h-[500px] bg-blue-200/15 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-120px] right-[-60px] w-[400px] h-[400px] bg-yellow-200/20 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Header */}
        <FadeInView className="mb-20">
          <span className="text-yellow-500 text-base font-bold tracking-widest uppercase">
            Our Expertise &amp; Values
          </span>
          <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl heading-font text-[var(--primary-blue)]">
            Years of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-yellow)] to-orange-400">
              Deep Experience
            </span>
          </h2>
          <p className="mt-6 text-gray-500 text-lg max-w-2xl leading-relaxed">
            Five core domains. Five guiding principles. Built over years of
            helping people find their path.
          </p>
        </FadeInView>

        {/* Left / Right layout */}
        <div className="lg:grid lg:grid-cols-[2fr_1fr] lg:gap-20">
          {/* LEFT — Expertise timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden lg:block absolute left-6 top-6 bottom-6 w-[1px] bg-gradient-to-b from-transparent via-gray-200 to-transparent" />

            <div className="space-y-0">
              {EXPERTISE.map((item, i) => (
                <FadeInView key={item.title}>
                  <div
                    className={`group relative flex gap-6 items-start py-8 ${i < EXPERTISE.length - 1 ? "" : ""}`}
                  >
                    {/* Node */}
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center z-10 bg-white shrink-0 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 ${item.iconColor} group-hover:scale-110 transition-transform duration-300`}
                    >
                      {item.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1 max-w-xl pt-1">
                      <h3 className="text-xl font-semibold text-blue-950 mb-2 tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 leading-relaxed text-[15px]">
                        {item.desc}
                      </p>
                      {/* Accent divider */}
                      <div className="mt-5 h-[2px] w-10 bg-yellow-400/60 group-hover:w-20 transition-all duration-500" />
                    </div>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>

          {/* RIGHT — Sticky Core Values panel */}
          <div className="hidden lg:block">
            <div className="sticky top-28">
              <div className="rounded-3xl border border-gray-100 bg-white/70 backdrop-blur-xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-yellow-100/20 to-transparent opacity-0 hover:opacity-100 transition duration-500 pointer-events-none" />

                <div className="relative">
                  <span className="text-xs tracking-widest uppercase text-gray-400 font-medium">
                    What We Stand For
                  </span>

                  <h3 className="mt-4 text-2xl font-bold text-blue-950 tracking-tight mb-2">
                    Our Core Values
                  </h3>

                  <p className="text-sm text-gray-500 leading-relaxed mb-8">
                    Everything we do is grounded in five principles that put the
                    person — not the process — first.
                  </p>

                  {/* Divider */}
                  <div className="w-12 h-[2px] bg-yellow-400 mb-8" />

                  {/* Values list */}
                  <div className="space-y-4">
                    {VALUES.map((v) => (
                      <div
                        key={v.title}
                        className="flex items-center gap-3 group/val"
                      >
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${v.bg} ${v.color} group-hover/val:scale-110 transition-transform duration-300`}
                        >
                          {v.icon}
                        </div>
                        <p className="text-sm font-semibold text-blue-950 tracking-tight">
                          {v.title}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
