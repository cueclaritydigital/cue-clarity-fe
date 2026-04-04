"use client";

import React from "react";
import FadeInView from "@/components/animate/FadeInView";
import { FiGrid, FiHeart, FiMap } from "react-icons/fi";

const PILLARS = [
  {
    icon: <FiGrid size={24} />,
    title: "The CueClarity Framework",
    desc: "A structured, personalised system blending self-discovery, career mapping, skill alignment, and future industry insights — tailored to every individual.",
  },
  {
    icon: <FiHeart size={24} />,
    title: "Emotional + Strategic Guidance",
    desc: 'We don\'t just look at "what you can do." We focus on who you are and who you can become — combining emotional intelligence with strategic planning.',
  },
  {
    icon: <FiMap size={24} />,
    title: "Real-World Career Alignment",
    desc: "From traditional fields to emerging industries, we help you understand opportunities, evaluate risks, and build a practical, actionable roadmap for your future.",
  },
];

export default function DecisionEcosystem() {
  return (
    <section className="relative py-24 px-4 sm:px-6 overflow-hidden bg-blue-950">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-100px] right-[-60px] w-[500px] h-[500px] bg-yellow-400/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-120px] left-[-80px] w-[400px] h-[400px] bg-blue-400/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Header */}
        <FadeInView className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-yellow-500 text-base font-bold tracking-widest uppercase">
            What Makes Us Different
          </span>

          <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl heading-font text-white">
            A Decision-Making{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-300">
              Ecosystem
            </span>
          </h2>

          <p className="mt-6 text-gray-400 text-lg leading-relaxed">
            We are not a typical counselling service. We are a decision-making
            ecosystem — structured, personalised, and built around who you truly
            are.
          </p>
        </FadeInView>

        {/* 3-column pillars */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {PILLARS.map((p, i) => (
            <FadeInView key={p.title}>
              <div className="group relative h-full rounded-3xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-xl p-8 sm:p-10 hover:bg-white/[0.07] transition-all duration-500">
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-b from-yellow-400/[0.04] to-transparent pointer-events-none" />

                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-yellow-400/10 text-yellow-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {p.icon}
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-4 tracking-tight leading-snug">
                    {p.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed text-[15px]">
                    {p.desc}
                  </p>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
