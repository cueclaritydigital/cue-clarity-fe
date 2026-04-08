"use client";

import { useState, useEffect, useCallback } from "react";
import { FiX, FiPhone } from "react-icons/fi";
import { getWhatsAppURL } from "@/lib/whatsapp";

const STORAGE_KEY = "cue_exit_popup_dismissed";
const COOLDOWN_MS = 3 * 24 * 60 * 60 * 1000; // 3 days

export default function ExitIntentPopup() {
  const [open, setOpen] = useState(false);

  const dismiss = useCallback(() => {
    setOpen(false);
    try {
      localStorage.setItem(STORAGE_KEY, Date.now().toString());
    } catch {
      /* SSR / private browsing */
    }
  }, []);

  useEffect(() => {
    // Don't show on mobile (no mouse-leave intent) or if recently dismissed
    if (typeof window === "undefined") return;
    if (window.innerWidth < 768) return;

    try {
      const last = localStorage.getItem(STORAGE_KEY);
      if (last && Date.now() - Number(last) < COOLDOWN_MS) return;
    } catch {
      /* SSR / private browsing */
    }

    let fired = false;
    const handleMouseLeave = (e: MouseEvent) => {
      if (fired) return;
      // Only trigger when mouse exits through the top edge (towards browser chrome / close button)
      if (e.clientY <= 0) {
        fired = true;
        setOpen(true);
      }
    };

    // Delay attaching so the popup doesn't fire on page load
    const timer = setTimeout(() => {
      document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave,
      );
    };
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={dismiss}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl animate-scale-in">
        {/* Close button */}
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          aria-label="Close popup"
        >
          <FiX size={18} />
        </button>

        {/* Header */}
        <div className="bg-gradient-to-br from-blue-950 to-blue-900 px-8 pt-10 pb-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-yellow-400 mb-5">
            <FiPhone size={24} className="text-blue-950" />
          </div>
          <h2
            className="text-2xl font-extrabold text-white mb-2 leading-tight"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            WAIT — GET A FREE CALL FIRST
          </h2>
          <p className="text-sm text-white/70 leading-relaxed">
            Talk to a CueClarity expert and get personalised career guidance —
            completely free, no obligation.
          </p>
        </div>

        {/* Body */}
        <div className="bg-white px-8 py-7">
          <ul className="space-y-3 mb-6">
            {[
              "Understand which career path fits you best",
              "Get answers to your biggest career doubts",
              "Learn how 5,000+ students found their direction",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-gray-700"
              >
                <span className="mt-0.5 w-5 h-5 flex-shrink-0 flex items-center justify-center rounded-full bg-yellow-400 text-blue-950 text-xs font-black">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          <a
            href={getWhatsAppURL("general", "exit-popup")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={dismiss}
            className="block w-full text-center py-3.5 rounded-xl font-extrabold text-sm bg-blue-950 text-white hover:bg-blue-900 transition-colors"
          >
            Book a Free Discovery Call →
          </a>

          <p className="text-center text-xs text-gray-400 mt-3">
            15 minutes · No pressure · 100% free
          </p>
        </div>
      </div>
    </div>
  );
}
