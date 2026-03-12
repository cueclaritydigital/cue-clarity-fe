import React from 'react';
import { FiBookOpen, FiCompass, FiTarget, FiBriefcase, FiArrowRight } from 'react-icons/fi';

export default function WhoWeHelp() {
  return (
    // Solid pure white background, no gradients or blobs here to keep it stark and clean
    <section className="py-24 lg:py-32 px-4 sm:px-6 bg-[var(--surface-card)]">
      <div className="max-w-[1400px] mx-auto">
        
        {/* HEADER AREA - Stripped back, bold, pure black */}
        <div className="mb-16 lg:mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-6 animate-fade-in-up">
          <div className="max-w-2xl">
            {/* Removed the eyebrow text. Just a massive, confident black heading */}
            <h2 className="text-5xl lg:text-7xl font-extrabold uppercase tracking-tight text-[var(--primary-black)] leading-[0.95] font-oswald mb-6">
              Who We Help
            </h2>
            <p className="type-lead text-[var(--muted-text)] max-w-lg">
              Personalized career guidance for every stage of your educational and professional journey.
            </p>
          </div>
        </div>

        {/* EDITORIAL GRID
          Mobile: Stacked with bottom borders. 
          Desktop: 4 columns with right borders (vertical dividers). 
          Top and bottom of the whole grid have strict border lines.
        */}
        <div className="grid grid-cols-1 lg:grid-cols-4 border-t border-b border-[var(--primary-black)]/10">
          
          <Segment 
            icon={<FiBookOpen strokeWidth={1.5} className="w-8 h-8 lg:w-10 lg:h-10" />}
            title="School Students"
            badge="Class 8–10"
            desc="Early career exploration and subject selection guidance to build strong foundations."
          />

          <Segment 
            icon={<FiCompass strokeWidth={1.5} className="w-8 h-8 lg:w-10 lg:h-10" />}
            title="11–12 Students"
            badge="High School"
            desc="Stream selection, entrance exam guidance, and career path clarity for higher education."
          />

          <Segment 
            icon={<FiTarget strokeWidth={1.5} className="w-8 h-8 lg:w-10 lg:h-10" />}
            title="College Students"
            badge="Undergrad & Postgrad"
            desc="Career planning, skill development, and internship guidance for successful transitions."
          />

          <Segment 
            icon={<FiBriefcase strokeWidth={1.5} className="w-8 h-8 lg:w-10 lg:h-10" />}
            title="Working Pro's"
            badge="Corporate"
            desc="Career transitions, upskilling pathways, and strategic career advancement planning."
            isLast={true}
          />

        </div>
      </div>
    </section>
  );
}

// ---------------- SUBS ----------------

function Segment({ icon, title, badge, desc, isLast = false }) {
  return (
    <div 
      className={`
        group relative p-8 lg:p-12 flex flex-col gap-8
        transition-colors duration-[var(--transition-slow)]
        hover:bg-[var(--secondary-white)]/40 cursor-pointer
        border-b lg:border-b-0
        ${isLast ? 'border-r-0 border-b-0' : 'lg:border-r'} 
        border-[var(--primary-black)]/10
      `}
    >
      {/* Top layer: The Icon. 
        It subtly scales and shifts color on hover for that "advanced" interactive feel. 
      */}
      <div className="text-[var(--primary-black)]/40 group-hover:text-[var(--accent-blue)] group-hover:scale-110 transition-all duration-[var(--transition-slow)] origin-left">
        {icon}
      </div>

      <div className="flex flex-col gap-4 mt-auto">
        <div className="flex flex-col gap-2">
          {/* Subtle minimalist badge */}
          <span className="type-label text-[var(--muted-text)] group-hover:text-[var(--primary-blue)] transition-colors">
            {badge}
          </span>
          
          {/* Title */}
          <h3 
            className="text-2xl lg:text-3xl text-[var(--primary-black)] uppercase"
            style={{ 
              fontFamily: 'var(--font-oswald), system-ui, sans-serif',
              fontWeight: '700',
              lineHeight: 'var(--leading-snug)',
              letterSpacing: 'var(--tracking-tight)'
            }}
          >
            {title}
          </h3>
        </div>
        
        {/* Description */}
        <p className="type-body text-[var(--muted-text)] mt-2">
          {desc}
        </p>
      </div>

      {/* The "Advanced" Flair: A hidden arrow that slides in from the left 
        when the user hovers over the segment, hinting that it's clickable.
      */}
      <div className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12 overflow-hidden w-6 h-6 flex items-center justify-center">
        <FiArrowRight 
          className="w-6 h-6 text-[var(--accent-blue)] -translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-[var(--transition-base)]" 
        />
      </div>
    </div>
  );
}