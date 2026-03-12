import React from 'react';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';

export default function RFQ() {
  return (
    <section className="relative py-24 lg:py-32 px-4 sm:px-6 bg-[var(--primary-blue)] overflow-hidden">
      
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--blob-glow)] opacity-20 blur-[150px] rounded-full mix-blend-screen"></div>
        {/* Subtle grid pattern overlay for texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(var(--primary-white) 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      </div>

      <div className="max-w-[800px] mx-auto relative z-10 text-center flex flex-col items-center animate-fade-in-up">
        
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-[var(--primary-white)] leading-[0.95] font-oswald mb-6">
          Ready to Stop Guessing <br />
          <span className="text-[var(--primary-yellow)]">And Start Growing?</span>
        </h2>
        
        <p className="type-lead text-[var(--primary-white)]/80 max-w-2xl mb-10">
          Stop scrolling and start planning. Book a free 15-minute discovery call with our expert counselors today and get a glimpse of your true potential.
        </p>

        {/* Action Area */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button className="btn-primary w-full sm:w-auto group !text-[var(--primary-black)] !px-8 !py-4 !text-base">
            Claim Your Free Session
            <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Micro-copy / Trust Signals */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 text-[13px] font-medium text-[var(--primary-white)]/60">
          <div className="flex items-center gap-2">
            <FiCheckCircle className="text-[var(--primary-yellow)]" />
            No credit card required
          </div>
          <div className="flex items-center gap-2">
            <FiCheckCircle className="text-[var(--primary-yellow)]" />
            100% Confidential
          </div>
          <div className="flex items-center gap-2">
            <FiCheckCircle className="text-[var(--primary-yellow)]" />
            Zero obligations
          </div>
        </div>

      </div>
    </section>
  );
}