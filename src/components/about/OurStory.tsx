"use client";

import React from "react";
import { FiAlertCircle, FiCompass, FiArrowRight } from "react-icons/fi";
import FadeInView from "@/components/animate/FadeInView";

export default function OurStory() {
  return (
    <section className="relative py-24 px-4 sm:px-6 overflow-hidden bg-white">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-200/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-120px] right-[-100px] w-[400px] h-[400px] bg-blue-200/20 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <FadeInView className="text-center mb-20">
          <span className="text-yellow-500 text-base font-bold tracking-widest uppercase">
            Our Story
          </span>

          <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl heading-font text-[var(--primary-blue)]">
            From Noise to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-yellow)] to-orange-400">
              Clarity
            </span>
          </h2>

          <p className="mt-6 text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            In a world full of opinions, trends, and pressure — we help people
            hear the one voice that actually matters: their own.
          </p>
        </FadeInView>

        {/* SIDE BY SIDE STEPS */}
        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 items-center">
          {/* STEP 1 */}
          <FadeInView className="h-full">
            <div className="h-full group relative rounded-3xl border border-gray-100 bg-white/70 backdrop-blur-xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 ">
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-yellow-100/40 to-transparent h-full" />

              <div className="relative">
                {/* Step Label */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs tracking-widest uppercase text-gray-400 font-medium">
                    Step 01
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-yellow-100 text-yellow-600">
                    <FiAlertCircle size={20} />
                  </div>
                  <span className="text-sm font-medium text-gray-500">
                    The Problem
                  </span>
                </div>

                <h3 className="text-2xl font-semibold text-blue-950 mb-4">
                  Direction was missing. Noise was everywhere.
                </h3>

                <p className="text-gray-600 leading-relaxed mb-4">
                  Students and professionals were making life decisions based on
                  marks, trends, and external pressure.
                </p>

                <blockquote className="text-blue-950 font-medium border-l-4 border-yellow-400 pl-4 mt-6">
                  Lack of clarity leads to wrong decisions.
                </blockquote>
              </div>
            </div>
          </FadeInView>

          {/* CENTER CONNECTOR */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center">
              <FiArrowRight className="text-gray-500" />
            </div>
          </div>

          {/* STEP 2 */}
          <FadeInView className="h-full">
            <div className="group relative rounded-3xl border border-gray-100 bg-white/70 backdrop-blur-xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 h-full">
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-l from-blue-100/40 to-transparent" />

              <div className="relative">
                {/* Step Label */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs tracking-widest uppercase text-gray-400 font-medium">
                    Step 02
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-blue-100 text-blue-900">
                    <FiCompass size={20} />
                  </div>
                  <span className="text-sm font-medium text-gray-500">
                    The Shift
                  </span>
                </div>

                <h3 className="text-2xl font-semibold text-blue-950 mb-4">
                  Clarity starts when you listen inward.
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  When you understand yourself, the right path becomes obvious.
                </p>
              </div>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
