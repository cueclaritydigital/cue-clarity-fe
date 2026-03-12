'use client';

import React from 'react';
import { FiAward, FiSmile, FiVideo, FiBriefcase } from 'react-icons/fi';
import { motion } from 'framer-motion';

// --- Animation Variants (subtle & elegant) ---
const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.05,
        },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] as const } },
};

// Eyebrow pill — gentle scale-in
const scaleIn = {
    hidden: { opacity: 0, scale: 0.92 },
    show: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] as const },
    },
};

// Headline — subtle rise
const headlineUp = {
    hidden: { opacity: 0, y: 18 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] as const },
    },
};

const zoomInScale = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] as const } },
};

const slideInLeft = {
    hidden: { opacity: 0, x: -24 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] as const } },
};

export default function HeroSection() {
    return (
        <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: 'var(--primary-white)' }}>

            {/* ── HERO SECTION ───────────────────────────────────────────── */}
            <section className="relative hero-gradient pt-24 pb-52 lg:pt-32 lg:pb-[15rem] px-12 sm:px-6 flex flex-col items-center justify-center min-h-[90vh] lg:min-h-0 z-0 overflow-hidden">

                {/* Subtle radial glow — depth effect */}
                <div
                    className="pointer-events-none absolute inset-0 z-0"
                    style={{
                        background:
                            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139,147,255,0.18) 0%, transparent 70%)',
                    }}
                />

                {/* Trust Badges — desktop only, scattered randomly with floating animation */}
                <div className="absolute inset-0 z-0 pointer-events-none hidden xl:block">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <TrustBadge
                            icon={<FiAward className="w-5 h-5" />}
                            number="15,000+"
                            text="Students Mentored"
                            position="top-[18%] left-[5%] 2xl:left-[7%]"
                            floatDelay="0s"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                    >
                        <TrustBadge
                            icon={<FiSmile className="w-5 h-5" />}
                            number="95%"
                            text="Satisfaction Rate"
                            position="top-[52%] left-[3%] 2xl:left-[5%]"
                            floatDelay="1.2s"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                    >
                        <TrustBadge
                            icon={<FiVideo className="w-5 h-5" />}
                            number="500+"
                            text="Seminars Conducted"
                            position="top-[25%] right-[4%] 2xl:right-[6%]"
                            floatDelay="0.6s"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.1 }}
                    >
                        <TrustBadge
                            icon={<FiBriefcase className="w-5 h-5" />}
                            number="200+"
                            text="Institutions Partnered"
                            position="top-[62%] right-[7%] 2xl:right-[9%]"
                            floatDelay="1.8s"
                        />
                    </motion.div>
                </div>

                {/* HERO TEXT */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                    className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center gap-6 lg:gap-7 text-center"
                >

                    {/* Eyebrow label */}
                    <motion.div
                        variants={scaleIn}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm"
                        style={{ fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-widest)' }}
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary-yellow)] animate-pulse" />
                        <span
                            className="font-bold text-white/80 uppercase tracking-[0.14em]"
                        >
                            Expert Career Counseling
                        </span>
                    </motion.div>

                    {/* H1 — flagship headline, Oswald display */}
                    <motion.h1
                        variants={headlineUp}
                        className="text-white drop-shadow-sm text-center font-extrabold uppercase leading-[1.12] "
                        style={{
                            fontFamily: 'var(--font-oswald)',
                            fontSize: 'clamp(3.5rem, 10vw, 4.5rem)',
                            letterSpacing: 'var(--tracking-tight)',
                        }}
                    >
                        Your Career Deserves{' '}
                        <br className="hidden sm:block" />
                        <span
                            className="inline-block"
                            style={{
                                background:
                                    'linear-gradient(90deg, #FFD25A 0%, #FFC114 50%, #FFA040 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}
                        >
                            More Than Guesswork.
                        </span>
                    </motion.h1>

                    {/* Lead paragraph */}
                    <motion.p
                        variants={fadeUp}
                        className="type-lead text-white/88 max-w-2xl mx-auto px-2"
                        style={{ color: 'rgba(255,255,255,0.88)' }}
                    >
                        Work with expert mentors who help you choose the right path,
                        build real-world skills, and unlock global opportunities.
                    </motion.p>

                    {/* CTA Row */}
                    <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto justify-center mt-2 px-2 sm:px-0">
                        <button className="btn-primary text-base lg:text-sm px-8 py-4 lg:py-3 w-full sm:w-auto">
                            Get a Free Consultation
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                        <button className="btn-outline text-base lg:text-sm px-8 py-4 lg:py-3 w-full sm:w-auto">
                            Explore Services →
                        </button>
                    </motion.div>

                    {/* Social proof strip — mobile only */}
                    <motion.div
                        variants={fadeUp}
                        className="lg:hidden flex items-center gap-4 mt-2 text-white/60 font-medium"
                        style={{ fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-wide)' }}
                    >
                        <span>✦ 15,000+ Students</span>
                        <span className="w-px h-3 bg-white/20" />
                        <span>✦ 200+ Institutions</span>
                        <span className="w-px h-3 bg-white/20" />
                        <span>✦ 95% Satisfaction</span>
                    </motion.div>

                </motion.div>
            </section>

            {/* ── WHY CUE CLARITY — BENTO SECTION ────────────────────────── */}
            <section
                className="relative z-20 w-full px-4 sm:px-6 pb-20 lg:pb-28"
                style={{ marginTop: '-5rem' }}
                aria-labelledby="why-heading"
            >
                <div className="max-w-[1240px] mx-auto">

                    {/* Section label + heading – visible on desktop above the grid */}
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={fadeUp}
                        className="hidden lg:flex flex-col items-center text-center gap-3 mb-10 pt-4"
                    >
                        <span
                            className="type-eyebrow text-[var(--primary-blue)]/60"
                        >
                            Why choose us
                        </span>
                        <h2
                            id="why-heading"
                            className="type-section-heading text-[var(--primary-black)]"
                        >
                            The Cue Clarity Difference
                        </h2>
                    </motion.div>

                    {/* ── BENTO GRID ──────────────────────────────────────── */}
                    {/*
            Mobile:  stacked — image card full-width, then 2×2 stat grid
            Desktop: side-by-side — image panel (3/5) + stat grid (2/5)
          */}
                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-5">

                        {/* ── LEFT: BIG IMAGE CARD ─────────────────────────── */}
                        <motion.div
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-100px' }}
                            variants={slideInLeft}
                            className="
                relative overflow-hidden
                rounded-2xl lg:rounded-3xl
                w-full lg:w-[58%]
                aspect-[4/3] lg:aspect-auto lg:min-h-[520px]
                shrink-0
              "
                            style={{ boxShadow: 'var(--shadow-xl)' }}
                        >
                            {/* Background photo */}
                            <img
                                src="https://res.cloudinary.com/dcudnuu04/image/upload/v1773250202/Gemini_Generated_Image_mug0mfmug0mfmug0_ns8ety.png"
                                alt="A mentor guiding a student through career planning"
                                className="absolute inset-0 w-full h-full object-cover object-center"
                            />

                            {/* Dark overlay for better overall text visibility */}
                            <div className="absolute inset-0 bg-[#0C1518]/40" />

                            {/* Gradient overlay — bottom to top */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    background:
                                        'linear-gradient(to top, rgba(12,21,24,0.85) 0%, rgba(12,21,24,0.30) 45%, transparent 70%)',
                                }}
                            />

                            {/* Floating eyebrow pill */}
                            <div className="absolute top-5 left-5">
                                <span
                                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 font-bold text-white uppercase"
                                    style={{ fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-widest)' }}
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary-yellow)]" />
                                    Expert Mentors
                                </span>
                            </div>

                            {/* Bottom content */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                                <h3
                                    className="font-extrabold uppercase text-white leading-tight mb-2"
                                    style={{
                                        fontFamily: 'var(--font-oswald)',
                                        fontSize: 'clamp(1.6rem, 3.5vw, 2.25rem)',
                                        letterSpacing: 'var(--tracking-tight)',
                                    }}
                                >
                                    Real Guidance.<br />Real Outcomes.
                                </h3>
                                <p
                                    className="text-white/75 font-medium max-w-sm"
                                    style={{ fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-relaxed)' }}
                                >
                                    Every session is personalised — no templates, no guesswork —
                                    just a clear path built around your unique strengths and goals.
                                </p>

                                {/* CTA chip */}
                                <a
                                    href="/about"
                                    className="
                    mt-5 inline-flex items-center gap-2
                    bg-[var(--primary-yellow)] text-[var(--primary-black)]
                    px-5 py-2.5 rounded-full
                    font-bold transition-all duration-200
                    hover:bg-[var(--accent-yellow)] hover:-translate-y-px
                  "
                                    style={{
                                        fontSize: 'var(--text-xs)',
                                        letterSpacing: 'var(--tracking-wide)',
                                        boxShadow: 'var(--shadow-glow-yellow)',
                                    }}
                                >
                                    Our Story
                                    <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                            </div>
                        </motion.div>

                        {/* ── RIGHT: 2×2 STAT GRID ─────────────────────────── */}
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-100px' }}
                            className="grid grid-cols-2 gap-4 lg:gap-5 w-full lg:w-[42%]"
                        >

                            <motion.div variants={zoomInScale}>
                                <StatCard
                                    value="15,000+"
                                    label="Students Mentored"
                                    sublabel="Across India & Abroad"
                                    accent="var(--primary-blue)"
                                    bgAccent="rgba(41,50,110,0.07)"
                                    icon={
                                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422A12.083 12.083 0 0121 13v5a9 9 0 01-18 0v-5c0-.539.08-1.06.225-1.557L12 14z" />
                                        </svg>
                                    }
                                />
                            </motion.div>

                            <motion.div variants={zoomInScale}>
                                <StatCard
                                    value="95%"
                                    label="Satisfaction Rate"
                                    sublabel="Rated by students & parents"
                                    accent="#059669"
                                    bgAccent="rgba(5,150,105,0.07)"
                                    icon={
                                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    }
                                />
                            </motion.div>

                            <motion.div variants={zoomInScale}>
                                <StatCard
                                    value="500+"
                                    label="Seminars Held"
                                    sublabel="Schools, colleges & corporates"
                                    accent="#D97706"
                                    bgAccent="rgba(217,119,6,0.07)"
                                    icon={
                                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.277A1 1 0 0121 8.677V15.5a1 1 0 01-1.5.866L15 14M3 8h12a2 2 0 012 2v6a2 2 0 01-2 2H3a2 2 0 01-2-2v-6a2 2 0 012-2z" />
                                        </svg>
                                    }
                                />
                            </motion.div>

                            <motion.div variants={zoomInScale}>
                                <StatCard
                                    value="200+"
                                    label="Partner Institutions"
                                    sublabel="Trusted by top schools & firms"
                                    accent="#6D28D9"
                                    bgAccent="rgba(109,40,217,0.07)"
                                    icon={
                                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                    }
                                />
                            </motion.div>

                        </motion.div>
                    </div>

                    {/* ── MOBILE: section heading below the grid ──────── */}
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={fadeUp}
                        className="lg:hidden flex flex-col items-center text-center gap-2 mt-8"
                    >
                        <span className="type-eyebrow text-[var(--primary-blue)]/50">
                            Why choose us
                        </span>
                        <p
                            className="font-medium max-w-sm"
                            style={{ fontSize: 'var(--text-base)', color: 'var(--muted-text)', lineHeight: 'var(--leading-relaxed)' }}
                        >
                            Expert‑led, family‑friendly career guidance that unlocks real futures.
                        </p>
                    </motion.div>

                </div>
            </section>

        </div>
    );
}


// ── SUB-COMPONENTS ──────────────────────────────────────────────────────────

function TrustBadge({ icon, number, text, position, floatDelay = '0s' }: {
    icon: React.ReactNode;
    number: string;
    text: string;
    position: string;
    floatDelay?: string;
}) {
    return (
        <div
            className={`absolute ${position} glass-card px-5 py-3.5 flex items-center gap-4 w-[215px] animate-float`}
            style={{
                background: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: 'var(--radius-xl)',
                animationDelay: floatDelay,
            }}
        >
            <div
                className="flex-shrink-0 p-2.5 rounded-full"
                style={{
                    backgroundColor: 'var(--primary-white)',
                    color: 'var(--primary-blue)',
                }}
            >
                {icon}
            </div>
            <div className="flex flex-col text-left">
                <span
                    className="font-extrabold text-white leading-none"
                    style={{
                        fontFamily: 'var(--font-oswald)',
                        fontSize: 'var(--text-xl)',
                        letterSpacing: 'var(--tracking-tight)',
                    }}
                >
                    {number}
                </span>
                <span
                    className="mt-1 font-medium leading-tight"
                    style={{
                        fontSize: 'var(--text-xs)',
                        color: 'var(--secondary-white)',
                        letterSpacing: 'var(--tracking-wide)',
                    }}
                >
                    {text}
                </span>
            </div>
        </div>
    );
}

// ── NEW STAT CARD ────────────────────────────────────────────────────────────
function StatCard({
    value,
    label,
    sublabel,
    accent,
    bgAccent,
    icon,
}: {
    value: string;
    label: string;
    sublabel: string;
    accent: string;
    bgAccent: string;
    icon: React.ReactNode;
}) {
    return (
        <div
            className="
        group
        bg-white flex flex-col gap-3 p-5 lg:p-6
        rounded-2xl lg:rounded-3xl
        border border-transparent
        hover:border-[rgba(0,0,0,0.06)]
        h-full
      "
            style={{ boxShadow: 'var(--shadow-md)' }}
        >
            {/* Icon bubble */}
            <div
                className="w-10 h-10 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: bgAccent, color: accent }}
            >
                {icon}
            </div>

            {/* Value */}
            <div>
                <p
                    className="font-extrabold leading-none"
                    style={{
                        fontFamily: 'var(--font-oswald)',
                        fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
                        color: accent,
                        letterSpacing: 'var(--tracking-tight)',
                    }}
                >
                    {value}
                </p>
                <p
                    className="font-bold mt-1 text-[var(--primary-black)] leading-snug"
                    style={{ fontSize: 'var(--text-sm)' }}
                >
                    {label}
                </p>
                <p
                    className="font-medium mt-0.5 leading-snug"
                    style={{ fontSize: 'var(--text-xs)', color: 'var(--muted-text)' }}
                >
                    {sublabel}
                </p>
            </div>
        </div>
    );
}