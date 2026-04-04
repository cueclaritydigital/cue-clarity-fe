"use client";

import React from "react";
import FadeInView from "@/components/animate/FadeInView";
import { slideInLeft, slideInRight } from "@/lib/animations/variants";
import { FiCheck } from "react-icons/fi";

const BELIEFS = [
  "Every child has a unique path",
  "Every decision deserves clarity",
  "Every family deserves the right guidance",
  "Every life deserves purpose",
];

export default function PromiseSection() {
  return (
    <section className="relative py-24 px-4 sm:px-6 overflow-hidden bg-white">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-yellow-200/15 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Header */}
        <FadeInView className="mb-20">
          <span className="text-yellow-500 text-base font-bold tracking-widest uppercase">
            The CueClarity Promise
          </span>
          <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl  text-[var(--primary-blue)] heading-font ">
            Where Change{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-yellow)] to-orange-400">
              Begins
            </span>
          </h2>
        </FadeInView>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Imagine This */}
          <FadeInView variants={slideInLeft} className="h-full">
            <div className="group relative rounded-3xl border border-gray-100 bg-white/70 backdrop-blur-xl p-8 sm:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500">
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-yellow-100/40 to-transparent pointer-events-none" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-yellow-100 text-yellow-600">
                    <span className="text-lg">✦</span>
                  </div>
                  <span className="text-xs tracking-widest uppercase text-gray-400 font-medium">
                    Imagine This
                  </span>
                </div>

                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  A student who once felt lost — now speaks with confidence
                  about their future. A parent who once felt anxious — now feels
                  assured about their child&rsquo;s direction.
                </p>

                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  A decision that once felt heavy — now feels right.
                </p>

                <blockquote className="text-blue-950 font-medium text-lg leading-snug border-l-4 border-yellow-400 pl-4">
                  That transformation — that shift from confusion to clarity —
                  is what we create every single day.
                </blockquote>
              </div>
            </div>
          </FadeInView>

          {/* We Believe */}
          <FadeInView variants={slideInRight} className="h-full">
            <div className="group relative rounded-3xl border border-gray-100 bg-white/70 backdrop-blur-xl p-8 sm:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 h-full">
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-l from-blue-100/40 to-transparent pointer-events-none" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-blue-100 text-blue-900">
                    <span className="text-lg">◆</span>
                  </div>
                  <span className="text-xs tracking-widest uppercase text-gray-400 font-medium">
                    We Believe
                  </span>
                </div>

                <div className="flex flex-col gap-5">
                  {BELIEFS.map((belief) => (
                    <div
                      key={belief}
                      className="flex items-start gap-4 group/item"
                    >
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-yellow-100 text-yellow-600 mt-0.5 group-hover/item:scale-110 transition-transform duration-300">
                        <FiCheck size={16} strokeWidth={3} />
                      </div>
                      <p className="text-lg font-medium text-blue-950">
                        {belief}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
