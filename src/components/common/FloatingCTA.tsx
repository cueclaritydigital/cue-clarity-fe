"use client";

import { useState, useEffect } from "react";
import { FiMessageCircle, FiX } from "react-icons/fi";
import { getWhatsAppURL } from "@/lib/whatsapp";
import { CTA } from "@/analytics/CTA";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (dismissed) return;
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dismissed]);

  if (!visible || dismissed) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip label */}
      <div className="hidden sm:flex items-center gap-2 bg-white rounded-xl shadow-lg px-4 py-2.5 border border-gray-100 animate-fade-in">
        <span className="text-sm font-bold text-blue-950">
          Need career clarity?
        </span>
        <button
          onClick={() => setDismissed(true)}
          className="text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Dismiss"
        >
          <FiX size={14} />
        </button>
      </div>

      <CTA
        href={getWhatsAppURL("general", "floating-cta")}
        target="_blank"
        rel="noopener noreferrer"
        external
        event="whatsapp_click"
        eventData={{
          source: "floating_button",
        }}
        className="group flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:bg-green-600 hover:shadow-[0_6px_28px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        <FiMessageCircle
          size={26}
          className="group-hover:scale-110 transition-transform"
        />
      </CTA>
    </div>
  );
}
