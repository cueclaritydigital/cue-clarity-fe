import React from 'react';

const PARTNERS = [
  'IIT Bombay',
  'BITS Pilani',
  'Christ University',
  'Symbiosis International',
  'Manipal Academy',
  'Amity University',
  'SP Jain',
  'NMIMS Mumbai',
  'Ashoka University',
  'FLAME University',
];

export default function PartnersCarousel() {
  return (
    <section className="py-16 lg:py-20 px-4 sm:px-6 bg-[var(--primary-white)] border-y border-[var(--primary-black)]/5">
      <div className="section-container text-center">
        <span className="type-eyebrow text-[var(--muted-text)] mb-8 block">
          Trusted by 200+ Institutions
        </span>

        {/* Logo strip — grayscale text placeholders until real logos are provided */}
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6">
          {PARTNERS.map((name) => (
            <span
              key={name}
              className="text-[var(--primary-black)]/25 hover:text-[var(--primary-black)]/70 transition-colors duration-300 font-bold uppercase tracking-wide whitespace-nowrap"
              style={{
                fontFamily: 'var(--font-oswald), system-ui, sans-serif',
                fontSize: 'var(--text-lg)',
              }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
