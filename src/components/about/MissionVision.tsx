"use client";

import React from "react";
import FadeInView from "@/components/animate/FadeInView";
import { slideInLeft, slideInRight } from "@/lib/animations/variants";
import { FiTarget, FiEye } from "react-icons/fi";

export default function MissionVision() {
  return (
    <section className="relative py-24 px-4 sm:px-6 overflow-hidden bg-gray-50/80">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-200/15 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Header */}
        <FadeInView className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-yellow-500 text-base font-bold tracking-widest uppercase">
            Mission &amp; Vision
          </span>
          <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl heading-font text-[var(--primary-blue)]">
            Purpose at{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-yellow)] to-orange-400">
              Our Core
            </span>
          </h2>
        </FadeInView>

        {/* Two cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Mission */}
          <FadeInView variants={slideInLeft}>
            <div className="group relative h-full rounded-3xl border border-gray-100 bg-white/70 backdrop-blur-xl p-8 sm:p-10 lg:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500">
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-yellow-100/40 to-transparent pointer-events-none" />

              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-yellow-100 text-yellow-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FiTarget size={22} />
                </div>

                <h3 className="text-2xl font-semibold text-blue-950 mb-4 tracking-tight">
                  Our Mission
                </h3>

                <p className="text-gray-500 leading-relaxed text-[15px]">
                  To empower individuals and families with clear, compassionate,
                  and future-ready career guidance — enabling confident
                  decisions aligned with purpose.
                </p>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-8 right-8 h-[3px] rounded-full bg-gradient-to-r from-yellow-400 to-yellow-400/0" />
            </div>
          </FadeInView>

          {/* Vision */}
          <FadeInView variants={slideInRight}>
            <div className="group relative h-full rounded-3xl border border-gray-100 bg-white/70 backdrop-blur-xl p-8 sm:p-10 lg:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500">
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-l from-blue-100/40 to-transparent pointer-events-none" />

              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FiEye size={22} />
                </div>

                <h3 className="text-2xl font-semibold text-blue-950 mb-4 tracking-tight">
                  Our Vision
                </h3>

                <p className="text-gray-500 leading-relaxed text-[15px]">
                  To create a generation of self-aware, purpose-driven
                  changemakers who balance success with fulfilment — and build a
                  meaningful future.
                </p>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-8 right-8 h-[3px] rounded-full bg-gradient-to-r from-blue-900 to-blue-900/0" />
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
