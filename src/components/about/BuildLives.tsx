"use client";

import React from "react";
import FadeInView from "@/components/animate/FadeInView";

export default function BuildLives() {
  return (
    <section className="relative py-28 px-4 sm:px-6 overflow-hidden bg-white">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-yellow-200/15 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-80px] right-[-60px] w-[300px] h-[300px] bg-blue-200/10 blur-[100px] rounded-full" />
      </div>

      <div className="relative max-w-3xl mx-auto text-center z-10">
        <FadeInView>
          <span className="text-yellow-500 text-base font-bold tracking-widest uppercase">
            More Than Careers
          </span>

          <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl heading-font text-[var(--primary-blue)] mb-8">
            We Build{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-yellow)] to-orange-400">
              Lives
            </span>
          </h2>

          <p className="text-lg sm:text-xl leading-relaxed text-gray-500 mb-5">
            At CueClarity, we help you understand your strengths, align with the
            right opportunities, build confidence in your decisions, and most
            importantly —{" "}
            <strong className="text-blue-950">trust your own journey.</strong>
          </p>

          <p className="text-lg sm:text-xl leading-relaxed text-gray-500 mb-12">
            Because success is not about following the crowd. It&rsquo;s about
            knowing where you truly belong. And when that happens — you
            don&rsquo;t just build a career.{" "}
            <strong className="text-blue-950">
              You build a life with meaning.
            </strong>
          </p>

          {/* Quote */}
          <blockquote className="text-xl sm:text-2xl font-medium leading-snug italic text-blue-950 mx-auto max-w-xl border-l-4 border-yellow-400 pl-6 text-left">
            &ldquo;Every great life begins with one moment of clarity.&rdquo;
          </blockquote>

          {/* Tagline */}
          <p className="mt-12 text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-400">
            From Confusion to Clarity. From Pressure to Purpose.
          </p>
        </FadeInView>
      </div>
    </section>
  );
}
