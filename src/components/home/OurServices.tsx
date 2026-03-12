import React from 'react';
import {
  FiMap,
  FiGlobe,
  FiUsers,
  FiPenTool,
  FiCpu,
  FiTrendingUp,
  FiArrowRight,
} from 'react-icons/fi';
import FadeInView from '@/components/animate/FadeInView';
import StaggerInView from '@/components/animate/StaggerInView';
import { fadeUp } from '@/lib/animations/variants';

const FEATURED_SERVICE = {
  icon: <FiMap className="w-7 h-7 lg:w-9 lg:h-9" />,
  title: 'Career Counselling',
  tag: 'Flagship Service',
  desc: 'Our most transformative offering. Personalised guidance powered by internationally validated psychometric assessments and one-on-one expert mentorship — from stream selection all the way to career pivots.',
};

const SERVICES = [
  {
    icon: <FiGlobe className="w-5 h-5" />,
    title: 'International Education',
    tag: 'Study Abroad',
    desc: 'Country selection, university shortlisting, SOP writing, and full application strategy for global universities.',
  },
  {
    icon: <FiUsers className="w-5 h-5" />,
    title: 'Programs for Schools',
    tag: 'Institutional',
    desc: 'Career awareness sessions, stream selection workshops, and psychometric testing for educational institutions.',
  },
  {
    icon: <FiPenTool className="w-5 h-5" />,
    title: 'Training & Workshops',
    tag: 'Live Training',
    desc: 'Mental health, communication, personality development, and creative writing workshops.',
  },
  {
    icon: <FiCpu className="w-5 h-5" />,
    title: 'Industrial Training',
    tag: 'Technical',
    desc: 'Industry readiness training, technical skill development, and internship preparation.',
  },
  {
    icon: <FiTrendingUp className="w-5 h-5" />,
    title: 'Corporate Training',
    tag: 'Corporate',
    desc: 'Employee skill development, process improvement, and recruitment support for companies.',
  },
];

export default function OurServices() {
  return (
    <section className="relative section-padding px-4 sm:px-6 bg-[var(--primary-blue)] overflow-hidden">

      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-[var(--accent-blue)] opacity-25 blur-[130px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-[var(--primary-yellow)] opacity-[0.08] blur-[100px] rounded-full" />
      </div>

      <div className="section-container relative z-10">

        {/* ─── HEADER ─────────────────────────────────────────── */}
        <FadeInView className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <span className="type-eyebrow mb-3 block" style={{ color: 'var(--primary-yellow)' }}>Our Expertise</span>
            <h2
              style={{
                fontFamily: 'var(--font-oswald)',
                fontWeight: 800,
                fontSize: 'clamp(2.75rem, 8vw, 5rem)',
                lineHeight: 0.92,
                letterSpacing: 'var(--tracking-tight)',
                color: 'var(--primary-white)',
                textTransform: 'uppercase',
              }}
            >
              Everything You<br />Need to Grow
            </h2>
          </div>
          <p
            className="type-lead lg:text-right lg:max-w-xs"
            style={{ color: 'rgba(255,255,255,0.6)' }}
          >
            Six specialist services — one destination: career clarity.
          </p>
        </FadeInView>

        {/* ─── BENTO GRID ──────────────────────────────────────
          Layout (3-col desktop):
            Row 1: [Featured — col-span-2] [Service 1]
            Row 2: [Service 2] [Service 3] [Service 4]
            Row 3: [Service 5 — col-span-3 slim row]
        */}
        <StaggerInView className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">

          {/* ── FEATURED CARD (col-span 2) ── */}
          <FadeInView
            variants={fadeUp}
            className="group relative bg-[var(--surface-card)] rounded-[var(--radius-xl)] p-8 lg:p-10 md:col-span-2 lg:col-span-2 overflow-hidden flex flex-col justify-between gap-8 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            style={{ boxShadow: 'var(--shadow-xl)' }}
          >
            {/* Hover glow wash */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse 70% 60% at 80% 50%, rgba(255,193,20,0.07) 0%, transparent 70%)' }}
            />

            <div className="flex items-start justify-between gap-8">
              <div className="flex flex-col gap-5 flex-1">
                <span
                  className="type-label px-3 py-1 rounded-full w-fit"
                  style={{ backgroundColor: 'rgba(255,193,20,0.12)', color: 'var(--primary-yellow)' }}
                >
                  {FEATURED_SERVICE.tag}
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-oswald)',
                    fontWeight: 800,
                    fontSize: 'clamp(2rem, 4.5vw, 3rem)',
                    color: 'var(--primary-black)',
                    letterSpacing: 'var(--tracking-tight)',
                    textTransform: 'uppercase',
                    lineHeight: 1,
                  }}
                >
                  {FEATURED_SERVICE.title}
                </h3>
                <p
                  className="type-body"
                  style={{ color: 'var(--muted-text)', maxWidth: '52ch', lineHeight: 'var(--leading-relaxed)' }}
                >
                  {FEATURED_SERVICE.desc}
                </p>
              </div>
              {/* Big icon */}
              <div
                className="hidden sm:flex shrink-0 w-16 h-16 lg:w-20 lg:h-20 rounded-[var(--radius-lg)] items-center justify-center group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: 'rgba(41,50,110,0.07)', color: 'var(--primary-blue)' }}
              >
                {FEATURED_SERVICE.icon}
              </div>
            </div>

            <a
              href="/services/career-counseling"
              className="w-fit inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-200 hover:-translate-y-px group/cta"
              style={{ backgroundColor: 'var(--primary-yellow)', color: 'var(--primary-black)', boxShadow: 'var(--shadow-glow-yellow)' }}
            >
              Get Started
              <FiArrowRight size={13} className="group-hover/cta:translate-x-1 transition-transform" />
            </a>
          </FadeInView>

          {/* ── STANDARD CARDS (4 × 1-col) ── */}
          {SERVICES.slice(0, 4).map((s) => (
            <FadeInView
              key={s.title}
              variants={fadeUp}
              className="group relative rounded-[var(--radius-xl)] p-6 lg:p-7 overflow-hidden flex flex-col gap-4 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              style={{
                backgroundColor: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              {/* Corner glow on hover */}
              <div
                className="absolute top-0 right-0 w-28 h-28 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-[50px]"
                style={{ backgroundColor: 'var(--primary-yellow)', transform: 'translate(35%, -35%)' }}
              />

              <div className="flex items-center justify-between">
                <div
                  className="w-11 h-11 rounded-[var(--radius-md)] flex items-center justify-center group-hover:scale-110 group-hover:bg-[var(--primary-yellow)] group-hover:text-[var(--primary-black)] transition-all duration-300"
                  style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: 'var(--primary-yellow)' }}
                >
                  {s.icon}
                </div>
                <span className="type-label" style={{ color: 'rgba(255,255,255,0.3)' }}>{s.tag}</span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-oswald)',
                  fontWeight: 700,
                  fontSize: 'clamp(1.15rem, 2vw, 1.4rem)',
                  color: 'var(--primary-white)',
                  letterSpacing: 'var(--tracking-tight)',
                  textTransform: 'uppercase',
                  lineHeight: 1.1,
                }}
              >
                {s.title}
              </h3>

              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-relaxed)' }}>
                {s.desc}
              </p>

              <div
                className="mt-auto flex items-center gap-1.5 font-bold text-sm group-hover:gap-2.5 transition-all duration-300"
                style={{ color: 'var(--primary-yellow)' }}
              >
                Learn More
                <FiArrowRight size={13} />
              </div>
            </FadeInView>
          ))}

          {/* ── FULL-WIDTH BOTTOM CARD ── */}
          <FadeInView
            variants={fadeUp}
            className="group relative rounded-[var(--radius-xl)] p-6 lg:p-7 md:col-span-2 lg:col-span-3 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8 hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden"
            style={{
              backgroundColor: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <div
              className="w-11 h-11 rounded-[var(--radius-md)] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[var(--primary-yellow)] group-hover:text-[var(--primary-black)] transition-all duration-300"
              style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: 'var(--primary-yellow)' }}
            >
              {SERVICES[4].icon}
            </div>

            <div className="flex flex-col gap-0.5 flex-1">
              <span className="type-label" style={{ color: 'rgba(255,255,255,0.3)' }}>{SERVICES[4].tag}</span>
              <h3
                style={{
                  fontFamily: 'var(--font-oswald)',
                  fontWeight: 700,
                  fontSize: 'clamp(1.15rem, 2vw, 1.4rem)',
                  color: 'var(--primary-white)',
                  letterSpacing: 'var(--tracking-tight)',
                  textTransform: 'uppercase',
                }}
              >
                {SERVICES[4].title}
              </h3>
            </div>

            <p
              className="sm:max-w-[35ch]"
              style={{ color: 'rgba(255,255,255,0.55)', fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-relaxed)' }}
            >
              {SERVICES[4].desc}
            </p>

            <div
              className="shrink-0 flex items-center gap-1.5 font-bold text-sm group-hover:gap-2.5 transition-all duration-300"
              style={{ color: 'var(--primary-yellow)' }}
            >
              Learn More <FiArrowRight size={13} />
            </div>
          </FadeInView>

        </StaggerInView>
      </div>
    </section>
  );
}