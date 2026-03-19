"use client";

import React, { useState, useEffect } from "react";
import { FiZap, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { getWhatsAppURL } from "@/lib/whatsapp";

export default function AssessmentBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (isDismissed) return null;

  return (
    <div
      className={`
        fixed z-[100] transition-all duration-700 ease-out
        w-full sm:w-[90%] max-w-4xl
        left-0 sm:left-1/2 sm:-translate-x-1/2
        ${isVisible ? "bottom-0 sm:bottom-6 opacity-100 translate-y-0" : "-bottom-32 opacity-0 translate-y-full"}
      `}
    >
      <div className="relative bg-[var(--primary-white)]/95 backdrop-blur-xl border border-[var(--primary-blue)]/10 sm:rounded-[var(--radius-full)] shadow-[var(--shadow-xl)] p-4 sm:px-6 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute top-2 right-2 sm:static sm:order-last p-2 text-[var(--muted-text)] hover:text-[var(--primary-black)] hover:bg-[var(--primary-black)]/5 rounded-full transition-colors"
          aria-label="Dismiss banner"
        >
          <FiX size={18} />
        </button>

        <div className="flex items-center gap-4 w-full sm:w-auto pr-6 sm:pr-0">
          <div className="hidden sm:flex shrink-0 w-12 h-12 rounded-full bg-[var(--primary-yellow)]/15 text-[var(--primary-black)] items-center justify-center">
            <FiZap size={20} className="fill-[var(--primary-black)]" />
          </div>
          <div className="flex flex-col">
            <h4
              className="text-[var(--primary-black)] uppercase tracking-tight text-sm sm:text-base"
              style={{
                fontFamily: "var(--font-oswald), system-ui, sans-serif",
                fontWeight: "700",
              }}
            >
              Not sure where to start?
            </h4>
            <p className="type-body text-[var(--muted-text)] text-xs sm:text-sm mt-0.5">
              Message us — get a free career clarity session in minutes.
            </p>
          </div>
        </div>

        <a
          href={getWhatsAppURL("general", "assessment-banner")}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto shrink-0 btn-whatsapp justify-center"
        >
          <FaWhatsapp size={16} aria-hidden="true" />
          Chat Now — It&apos;s Free
        </a>
      </div>
    </div>
  );
}
