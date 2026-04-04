"use client";

import { useState, useEffect } from "react";
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
      <div className="relative bg-[var(--primary-white)]/95 backdrop-blur-xl border border-blue-950/10 sm:rounded-full shadow-[0_20px_60px_rgba(0,0,0,0.12)] p-4 sm:px-6 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute top-2 right-2 sm:static sm:order-last p-2 text-gray-400 hover:text-blue-950 hover:bg-blue-950/5 rounded-full transition-colors"
          aria-label="Dismiss banner"
        >
          <FiX size={18} />
        </button>

        <div className="flex items-center gap-4 w-full sm:w-auto pr-6 sm:pr-0">
          <div className="hidden sm:flex shrink-0 w-12 h-12 rounded-full bg-yellow-400/15 text-blue-950 items-center justify-center">
            <FiZap size={20} className="fill-blue-950" />
          </div>
          <div className="flex flex-col">
            <h4 className="font-oswald font-bold uppercase tracking-tight text-sm sm:text-base text-blue-950">
              Not sure where to start?
            </h4>
            <p className="text-gray-500 text-xs sm:text-sm mt-0.5">
              Message us — get a free career clarity session in minutes.
            </p>
          </div>
        </div>

        <a
          href={getWhatsAppURL("general", "assessment-banner")}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 bg-yellow-400 text-blue-950 px-6 py-3 rounded-full font-bold text-sm shadow-[0_6px_24px_rgba(255,193,20,0.4)] hover:bg-yellow-300 transition-all duration-200"
        >
          <FaWhatsapp size={16} aria-hidden="true" />
          Chat Now — It&apos;s Free
        </a>
      </div>
    </div>
  );
}
