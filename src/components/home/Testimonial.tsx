"use client";

import { useState, useRef, useCallback } from "react";
import { FiArrowRight } from "react-icons/fi";

/* ─── Testimonial Data (10 per row = 20 total) ─── */
type Testimonial = {
  id: number;
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

const ROW_1: Testimonial[] = [
  {
    id: 1,
    quote:
      "After 3 sessions I had a crystal-clear roadmap to pivot from engineering to product management. Landed my dream role in 4 months.",
    name: "Ananya Mehta",
    role: "Software Engineer → PM",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80",
  },
  {
    id: 2,
    quote:
      "Completely lost after graduation. CueClarity helped me discover UX design as my true path with a concrete step-by-step plan.",
    name: "Kartik Verma",
    role: "B.Com Grad → UX Designer",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80",
  },
  {
    id: 3,
    quote:
      "The mentorship clarity alone is worth a lifetime of investment. Got the exact roadmap to go from middle management to VP.",
    name: "Julian Banks",
    role: "Manager → VP of Strategy",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80",
  },
  {
    id: 4,
    quote:
      "As a parent, I was anxious about my son's future. The structured assessment gave both of us real confidence — not vague options.",
    name: "Meera Sharma",
    role: "Parent of Class 10 Student",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&h=100&q=80",
  },
  {
    id: 5,
    quote:
      "Switched careers after 8 years in finance. CueClarity made it feel possible, not terrifying. Best decision I ever made.",
    name: "Rahul Desai",
    role: "Finance → Data Scientist",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80",
  },
  {
    id: 6,
    quote:
      "Their psychometric assessment was uncannily accurate. Revealed exactly why my current role drained me and what would make me thrive.",
    name: "Priya Nair",
    role: "Marketing → Founder",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100&q=80",
  },
  {
    id: 7,
    quote:
      "I never thought I could transition to tech at 35. CueClarity showed me which transferable skills I already had. Now I'm a data analyst!",
    name: "Deepak Joshi",
    role: "Teacher → Data Analyst",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&h=100&q=80",
  },
  {
    id: 8,
    quote:
      "The career clarity session was the best 90 minutes I've ever invested. Within weeks, I had a plan that actually excited me.",
    name: "Isha Patel",
    role: "HR Manager · Career Pivot",
    avatar:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=100&h=100&q=80",
  },
  {
    id: 9,
    quote:
      "My daughter was confused between medicine and biotech. One session helped her see the perfect intersection. She's thriving now.",
    name: "Vikram Rao",
    role: "Parent · Hyderabad",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100&q=80",
  },
  {
    id: 10,
    quote:
      "From burnout to building my own startup — the mentorship framework turned my frustration into a focused business plan.",
    name: "Arjun Sinha",
    role: "Engineer → Founder",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&h=100&q=80",
  },
];

const ROW_2: Testimonial[] = [
  {
    id: 11,
    quote:
      "My parents pushed engineering. One session with CueClarity helped me — and them — see that architecture was my true calling.",
    name: "Sanya Kapoor",
    role: "Class 12 → Architecture",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80",
  },
  {
    id: 12,
    quote:
      "The assessment revealed strengths I didn't know I had. Changed the way I saw my own potential and gave me real direction.",
    name: "Neeraj Gupta",
    role: "Class 12 Student · Pune",
    avatar:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=100&h=100&q=80",
  },
  {
    id: 13,
    quote:
      "Went from feeling stuck in a dead-end job to getting promoted twice in one year. The clarity was everything.",
    name: "Aditi Kulkarni",
    role: "Operations → Senior Manager",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&h=100&q=80",
  },
  {
    id: 14,
    quote:
      "CueClarity doesn't just tell you what to do — they help you understand who you are. That's the difference.",
    name: "Rohan Malhotra",
    role: "MBA Graduate · Consulting",
    avatar:
      "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=100&h=100&q=80",
  },
  {
    id: 15,
    quote:
      "My son was anxious about choosing a stream. After the session he was calm, confident, and excited about his future.",
    name: "Sunita Reddy",
    role: "Parent · Chennai",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&h=100&q=80",
  },
  {
    id: 16,
    quote:
      "Pivoted from journalism to content strategy with their guidance. The roadmap was so clear I felt like I'd already arrived.",
    name: "Kavya Iyer",
    role: "Journalist → Content Strategist",
    avatar:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=100&h=100&q=80",
  },
  {
    id: 17,
    quote:
      "I was torn between abroad studies and staying in India. CueClarity gave me a framework to decide — not just an opinion.",
    name: "Aditya Menon",
    role: "Class 12 → UK University",
    avatar:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=100&h=100&q=80",
  },
  {
    id: 18,
    quote:
      "After 12 years in banking, I thought switching was impossible. CueClarity proved me wrong in one powerful session.",
    name: "Tarun Bhatia",
    role: "Banking → EdTech Lead",
    avatar:
      "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=100&h=100&q=80",
  },
  {
    id: 19,
    quote:
      "The team understood my cultural context perfectly. As a first-gen professional, that sensitivity meant the world to me.",
    name: "Fatima Sheikh",
    role: "First-Gen Professional",
    avatar:
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&w=100&h=100&q=80",
  },
  {
    id: 20,
    quote:
      "Recommended CueClarity to three friends already. Every single one said it was the most useful conversation they've ever had.",
    name: "Nikhil Varma",
    role: "Product Designer · Bangalore",
    avatar:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=100&h=100&q=80",
  },
];

/* ─── Marquee Row ─── */
function MarqueeRow({
  cards,
  direction,
}: {
  cards: Testimonial[];
  direction: "left" | "right";
}) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  const handleInteraction = useCallback(() => setPaused(true), []);
  const handleRelease = useCallback(() => setPaused(false), []);

  const animClass =
    direction === "right" ? "animate-marquee-right" : "animate-marquee-left";

  /* duplicate set for seamless loop */
  const renderCards = [...cards, ...cards];

  return (
    <div
      ref={rowRef}
      className="relative flex overflow-hidden py-3 group"
      onMouseEnter={handleInteraction}
      onMouseLeave={handleRelease}
      onTouchStart={handleInteraction}
      onTouchEnd={handleRelease}
    >
      {/* fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 sm:w-24 bg-gradient-to-r from-[var(--primary-white)] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 sm:w-24 bg-gradient-to-l from-[var(--primary-white)] to-transparent" />

      <div
        className={`flex gap-5 shrink-0 ${animClass}`}
        style={{ animationPlayState: paused ? "paused" : "running" }}
      >
        {renderCards.map((t, i) => (
          <TestimonialCard key={`${t.id}-${i}`} testimonial={t} />
        ))}
      </div>
    </div>
  );
}

/* ─── Single Card ─── */
function TestimonialCard({ testimonial: t }: { testimonial: Testimonial }) {
  return (
    <div className="testimonial-marquee-card group/card relative w-[320px] sm:w-[350px] shrink-0 rounded-2xl border border-black/8 bg-white p-6 flex flex-col justify-between cursor-default select-none">
      {/* decorative quote */}
      <div className="absolute top-1 right-3 text-[72px] font-black text-[var(--primary-black)]/[0.04] leading-none font-oswald pointer-events-none select-none">
        &ldquo;
      </div>

      <div>
        <div className="text-[var(--primary-yellow)] text-xs tracking-widest mb-3">
          ★★★★★
        </div>
        <p className="text-[13.5px] leading-relaxed text-[var(--primary-black)]/75 mb-5 line-clamp-4">
          &ldquo;{t.quote}&rdquo;
        </p>
      </div>

      <div className="flex items-center gap-3 border-t border-black/8 pt-4 mt-auto">
        <img
          src={t.avatar}
          alt={t.name}
          className="w-9 h-9 rounded-full object-cover ring-2 ring-black/10 transition-all duration-300 group-hover/card:ring-[var(--primary-yellow)]"
        />
        <div className="flex flex-col">
          <span className="text-[13px] font-bold text-[var(--primary-black)] leading-tight">
            {t.name}
          </span>
          <span className="text-[11px] text-[var(--primary-black)]/45 mt-0.5">
            {t.role}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Section ─── */
export default function Testimonials() {
  return (
    <section className="relative py-20 sm:py-28 bg-[var(--primary-white)] overflow-hidden">
      {/* subtle radial glow behind */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-[var(--primary-yellow)]/[0.06] blur-[120px]" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 mb-14">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 animate-fade-in-up">
          <div>
            <span className="text-[var(--primary-yellow)] text-sm font-bold tracking-widest uppercase mb-3 block">
              Success Stories
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-[var(--primary-black)] leading-[1] font-oswald">
              Real Results From <br className="hidden sm:block" /> Real People
            </h2>
          </div>
          <a
            href="/testimonials"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--primary-black)]/30 text-[var(--primary-black)] text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-[var(--primary-black)] hover:text-white group"
          >
            View All Stories
            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* SCROLLING ROWS — full bleed */}
      <div className="flex flex-col gap-5">
        <MarqueeRow cards={ROW_1} direction="right" />
        <MarqueeRow cards={ROW_2} direction="left" />
      </div>
    </section>
  );
}
