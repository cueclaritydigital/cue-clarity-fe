'use client'; // Required since we are using state and effects

import React, { useState, useEffect } from 'react';
import { FiZap, FiArrowRight, FiX } from 'react-icons/fi';

export default function AssessmentBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  // Trigger the banner to slide up after the user has been on the page for 3 seconds
  // or you could tie this to a scroll event. Time-delay is usually smoother.
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  // If the user dismissed it, completely remove it from the DOM
  if (isDismissed) return null;

  return (
    <div 
      className={`
        fixed z-[100] transition-all duration-700 ease-out
        w-full sm:w-[90%] max-w-4xl
        left-0 sm:left-1/2 sm:-translate-x-1/2
        ${isVisible ? 'bottom-0 sm:bottom-6 opacity-100 translate-y-0' : '-bottom-32 opacity-0 translate-y-full'}
      `}
    >
      {/* The Banner Body: 
        Uses a highly premium white-glass look to pop against both dark and light sections of your site. 
      */}
      <div className="relative bg-[var(--primary-white)]/95 backdrop-blur-xl border border-[var(--primary-blue)]/10 sm:rounded-[var(--radius-full)] shadow-[var(--shadow-xl)] p-4 sm:px-6 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Dismiss Button (Absolute on mobile, relative on desktop) */}
        <button 
          onClick={() => setIsDismissed(true)}
          className="absolute top-2 right-2 sm:static sm:order-last p-2 text-[var(--muted-text)] hover:text-[var(--primary-black)] hover:bg-[var(--primary-black)]/5 rounded-full transition-colors"
          aria-label="Dismiss banner"
        >
          <FiX size={18} />
        </button>

        {/* Left Side: Icon & Copy */}
        <div className="flex items-center gap-4 w-full sm:w-auto pr-6 sm:pr-0">
          <div className="hidden sm:flex shrink-0 w-12 h-12 rounded-full bg-[var(--primary-blue)]/10 text-[var(--primary-blue)] items-center justify-center">
            <FiZap size={20} className="fill-[var(--primary-blue)]" />
          </div>
          <div className="flex flex-col">
            <h4 
              className="text-[var(--primary-black)] uppercase tracking-tight text-sm sm:text-base"
              style={{ fontFamily: 'var(--font-oswald), system-ui, sans-serif', fontWeight: '700' }}
            >
              Not sure where to start?
            </h4>
            <p className="type-body text-[var(--muted-text)] text-xs sm:text-sm mt-0.5">
              Take our free 3-minute Career Clarity Assessment.
            </p>
          </div>
        </div>

        {/* Right Side: CTA Button */}
        <button className="w-full sm:w-auto shrink-0 bg-[var(--primary-yellow)] text-[var(--primary-black)] px-6 py-3 rounded-full font-bold text-sm tracking-wide shadow-[var(--shadow-glow-yellow)] hover:bg-[var(--accent-yellow)] hover:-translate-y-0.5 transition-all duration-[var(--transition-base)] flex items-center justify-center gap-2 group">
          Take the Free Quiz
          <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>

      </div>
    </div>
  );
}