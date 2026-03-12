'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import {
  FiChevronDown,
  FiBriefcase,
  FiGlobe,
  FiStar,
  FiBookOpen,
  FiHeart,
  FiSettings,
  FiUsers,
  FiMenu,
  FiX,
} from 'react-icons/fi';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // Subtle shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-[var(--z-header)] w-full transition-all duration-300 ${scrolled
          ? 'bg-[var(--primary-white)]/97 backdrop-blur-xl shadow-[var(--shadow-md)] border-b border-[var(--secondary-white)]'
          : 'bg-[var(--primary-white)]/95 backdrop-blur-md border-b border-[var(--secondary-white)]'
          }`}
      >
        <div className="max-w-[1240px] mx-auto px-5 sm:px-6 h-[72px] flex items-center justify-between gap-8">

          {/* ── LOGO ─────────────────────────────────────────────────── */}
          <Link
            href="/"
            aria-label="Cue Clarity — Home"
            className="flex items-center gap-2 shrink-0 focus-visible:outline-none transform scale-110 lg:scale-120"
          >
            <Logo />
          </Link>

          {/* ── DESKTOP NAV ──────────────────────────────────────────── */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center">
            <ul
              className="flex items-center gap-1 text-[var(--primary-black)]"
              style={{ fontFamily: 'var(--font-jakarta)', fontSize: 'var(--text-sm)' }}
            >
              <NavItem href="/">Home</NavItem>
              <NavItem href="/about">About</NavItem>

              {/* ── SERVICES MEGA MENU ────────────────────────────── */}
              <li className="relative group h-[72px] flex items-center">
                <button
                  aria-haspopup="true"
                  aria-expanded="false"
                  className="
                    flex items-center gap-1.5
                    px-3.5 py-2 rounded-lg
                    font-semibold tracking-[var(--tracking-wide)]
                    text-[var(--primary-black)]/80
                    hover:text-[var(--primary-blue)]
                    hover:bg-[var(--secondary-white)]/60
                    transition-all duration-200
                    cursor-pointer
                    select-none
                  "
                >
                  Services
                  <FiChevronDown
                    size={14}
                    className="mt-px transition-transform duration-300 group-hover:-rotate-180 text-[var(--primary-blue)]/50"
                  />
                </button>

                {/* Mega Panel */}
                <div
                  className="
                    absolute top-[72px] left-1/2 -translate-x-1/2
                    w-[820px]
                    bg-[var(--surface-card)]
                    shadow-[var(--shadow-xl)]
                    border border-[var(--secondary-white)]
                    rounded-2xl
                    opacity-0 invisible translate-y-3
                    group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                    transition-all duration-300 ease-out
                    z-[var(--z-mega)]
                    overflow-hidden
                  "
                >
                  {/* Thin top accent bar */}
                  <div className="h-[3px] w-full bg-gradient-to-r from-[var(--primary-blue)] via-[var(--gradient-mid)] to-[var(--primary-yellow)]" />

                  <div className="grid grid-cols-3 p-7 gap-6">

                    {/* STUDENT GUIDANCE */}
                    <MegaSection title="Student Guidance">
                      <ServiceLink
                        href="/services/career-counseling"
                        icon={<FiBriefcase size={16} />}
                        title="Career Counselling & Coaching"
                        desc="Personalized roadmaps for confident decisions"
                      />
                      <ServiceLink
                        href="/services/international-education"
                        icon={<FiGlobe size={16} />}
                        title="International Education"
                        desc="Profile building for global universities"
                      />
                      <ServiceLink
                        href="/services/life-skills"
                        icon={<FiStar size={16} />}
                        title="Beyond School & Life Skills"
                        desc="Real-world readiness beyond academics"
                      />
                    </MegaSection>

                    {/* PERSONAL GROWTH */}
                    <MegaSection title="Personal Growth" bordered>
                      <ServiceLink
                        href="/services/khud-ki-kahani"
                        icon={<FiBookOpen size={16} />}
                        title="Khud Ki Kahani, Khud Likho"
                        desc="Own your narrative and shape your story"
                      />
                      <ServiceLink
                        href="/services/emotional-wellness"
                        icon={<FiHeart size={16} />}
                        title="Emotional Wellness"
                        desc="Holistic counseling for mind & balance"
                      />
                    </MegaSection>

                    {/* PROFESSIONAL */}
                    <section className="bg-[var(--primary-white)]/70 -my-7 py-7 -mr-7 pr-7 pl-6 rounded-r-2xl border-l border-[var(--secondary-white)]">
                      <p
                        className="type-label text-[var(--primary-blue)]/70 border-b border-[var(--secondary-white)] pb-2.5 mb-4"
                      >
                        Professional
                      </p>
                      <ul className="flex flex-col gap-1">
                        <ServiceLink
                          href="/services/industrial-training"
                          icon={<FiSettings size={16} />}
                          title="Industrial Training"
                          desc="Hands-on programs with industry experts"
                        />
                        <ServiceLink
                          href="/services/workforce-development"
                          icon={<FiUsers size={16} />}
                          title="Workforce Development"
                          desc="Corporate upskilling & team growth"
                        />
                      </ul>
                    </section>

                  </div>
                </div>
              </li>

              <NavItem href="/programs">Programs</NavItem>
              <NavItem href="/success-stories">Success Stories</NavItem>
              <NavItem href="/blog">Blog</NavItem>
            </ul>
          </nav>

          {/* ── CTA & MOBILE TOGGLE ──────────────────────────────────── */}
          <div className="flex items-center gap-3">
            {/* Phone CTA — elegant text link on desktop */}
            <a
              href="tel:+918652222525"
              className="
                hidden xl:flex items-center gap-1.5
                text-[var(--primary-black)]/60 hover:text-[var(--primary-blue)]
                transition-colors duration-200
                font-extrabold
              "
              style={{ fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-wide)' }}
              aria-label="Call us"
            >
              <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z" />
              </svg>
              +91 8652222525
            </a>

            {/* Primary CTA */}
            <Link
              href="/contact"
              className="
                hidden lg:inline-flex items-center gap-2
                bg-[var(--primary-yellow)] text-[var(--primary-black)]
                px-6 py-2.5 rounded-full
                font-bold tracking-[var(--tracking-wide)]
                shadow-[var(--shadow-glow-yellow)]
                hover:bg-[var(--accent-yellow)] hover:-translate-y-px hover:shadow-[0_8px_28px_rgba(255,193,20,0.45)]
                transition-all duration-200
              "
              style={{ fontSize: 'var(--text-sm)' }}
            >
              Let&apos;s Talk
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>

            {/* Mobile Hamburger */}
            <button
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="
                lg:hidden
                w-10 h-10 flex items-center justify-center
                rounded-lg border border-[var(--secondary-white)]
                text-[var(--primary-black)]/70 hover:text-[var(--primary-blue)]
                hover:bg-[var(--secondary-white)]/60
                transition-all duration-200
              "
            >
              {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>

        </div>
      </header>

      {/* ── MOBILE DRAWER ────────────────────────────────────────────── */}
      <div
        className={`
          fixed inset-0 z-40 lg:hidden
          transition-all duration-300
          ${mobileOpen ? 'pointer-events-auto' : 'pointer-events-none'}
        `}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${mobileOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer Panel */}
        <nav
          className={`
            absolute top-0 right-0 h-full w-full max-w-sm
            bg-[var(--primary-white)]
            shadow-[var(--shadow-xl)]
            flex flex-col
            transition-transform duration-300 ease-out
            ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}
          `}
          aria-label="Mobile Navigation"
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between px-6 h-[72px] border-b border-[var(--secondary-white)]">
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <Logo />
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-[var(--secondary-white)] transition-colors"
            >
              <FiX size={20} className="text-[var(--primary-black)]/70" />
            </button>
          </div>

          {/* Mobile Links */}
          <div className="overflow-y-auto flex-1 px-4 py-6 flex flex-col gap-1">

            {/* Simple links */}
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3.5 rounded-xl font-semibold text-[var(--primary-black)]/80 hover:text-[var(--primary-blue)] hover:bg-[var(--secondary-white)]/70 transition-all duration-150"
                style={{ fontSize: 'var(--text-base)', letterSpacing: 'var(--tracking-snug)' }}
              >
                {label}
              </Link>
            ))}

            {/* Services Accordion */}
            <div className="rounded-xl overflow-hidden">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full flex items-center justify-between px-4 py-3.5 font-semibold text-[var(--primary-black)]/80 hover:text-[var(--primary-blue)] hover:bg-[var(--secondary-white)]/70 transition-all duration-150 rounded-xl"
                style={{ fontSize: 'var(--text-base)', letterSpacing: 'var(--tracking-snug)' }}
              >
                Services
                <FiChevronDown
                  size={16}
                  className={`text-[var(--primary-blue)]/50 transition-transform duration-300 ${servicesOpen ? '-rotate-180' : ''}`}
                />
              </button>

              {/* Accordion content */}
              <div
                className="overflow-hidden transition-all duration-300 ease-out"
                style={{ maxHeight: servicesOpen ? '400px' : '0px', opacity: servicesOpen ? 1 : 0 }}
              >
                <ul className="px-2 pb-2 flex flex-col gap-0.5">
                  {[
                    { href: '/services/career-counseling', label: 'Career Counselling & Coaching', desc: 'Personalized roadmaps for confident decisions' },
                    { href: '/services/international-education', label: 'International Education', desc: 'Profile building for global universities' },
                    { href: '/services/life-skills', label: 'Beyond School & Life Skills', desc: 'Real-world readiness beyond academics' },
                    { href: '/services/khud-ki-kahani', label: 'Khud Ki Kahani, Khud Likho', desc: 'Own your narrative and shape your story' },
                    { href: '/services/emotional-wellness', label: 'Emotional Wellness', desc: 'Holistic counseling for mind & balance' },
                    { href: '/services/industrial-training', label: 'Industrial Training', desc: 'Hands-on programs with industry experts' },
                    { href: '/services/workforce-development', label: 'Workforce Development', desc: 'Corporate upskilling & team growth' },
                  ].map(({ href, label, desc }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        onClick={() => { setMobileOpen(false); setServicesOpen(false); }}
                        className="flex flex-col px-4 py-3 rounded-xl hover:bg-[var(--secondary-white)] transition-all duration-150 group"
                      >
                        <span className="font-semibold text-[var(--primary-black)]/85 group-hover:text-[var(--primary-blue)] transition-colors" style={{ fontSize: 'var(--text-sm)' }}>
                          {label}
                        </span>
                        <span className="text-[var(--muted-text)] font-normal" style={{ fontSize: 'var(--text-xs)' }}>
                          {desc}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Remaining links */}
            {[
              { href: '/programs', label: 'Programs for Institutions' },
              { href: '/success-stories', label: 'Success Stories' },
              { href: '/blog', label: 'Blog' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3.5 rounded-xl font-semibold text-[var(--primary-black)]/80 hover:text-[var(--primary-blue)] hover:bg-[var(--secondary-white)]/70 transition-all duration-150"
                style={{ fontSize: 'var(--text-base)', letterSpacing: 'var(--tracking-snug)' }}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Drawer CTA */}
          <div className="px-6 pb-10 flex flex-col gap-3">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="btn-primary w-full text-center justify-center"
            >
              Book a Free Consultation
            </Link>
            <a
              href="tel:+918652222525"
              className="
                flex items-center justify-center gap-2
                py-3 rounded-full border border-[var(--secondary-white)]
                font-extrabold text-[var(--primary-black)]/70
                hover:border-[var(--primary-blue)] hover:text-[var(--primary-blue)]
                transition-colors duration-200 
              "
              style={{ fontSize: 'var(--text-sm)' }}
            >
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z" />
              </svg>
              +91 8652222525
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}


// ── HELPERS ──────────────────────────────────────────────────────────────────

function NavItem({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="
          block px-3.5 py-2 rounded-lg
          font-semibold tracking-[var(--tracking-wide)]
          text-[var(--primary-black)]/80
          hover:text-[var(--primary-blue)]
          hover:bg-[var(--secondary-white)]/60
          transition-all duration-200
        "
      >
        {children}
      </Link>
    </li>
  );
}

function MegaSection({
  title,
  children,
  bordered,
}: {
  title: string;
  children: React.ReactNode;
  bordered?: boolean;
}) {
  return (
    <section className={bordered ? 'border-l border-[var(--secondary-white)] pl-6' : ''}>
      <p className="type-label text-[var(--primary-blue)]/70 border-b border-[var(--secondary-white)] pb-2.5 mb-4">
        {title}
      </p>
      <ul className="flex flex-col gap-1">{children}</ul>
    </section>
  );
}

function ServiceLink({
  href,
  icon,
  title,
  desc,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <li>
      <Link
        href={href}
        className="
          group/link
          flex items-start gap-3
          px-3 py-2.5 rounded-xl
          hover:bg-[var(--secondary-white)]/70
          transition-all duration-200
        "
      >
        {/* Icon bubble */}
        <div
          className="
            mt-0.5 shrink-0
            w-8 h-8 rounded-lg
            bg-[var(--primary-blue)]/6
            flex items-center justify-center
            text-[var(--primary-blue)]/50
            group-hover/link:bg-[var(--primary-blue)]/12
            group-hover/link:text-[var(--primary-blue)]
            transition-all duration-200
          "
        >
          {icon}
        </div>

        <div className="flex flex-col gap-0.5">
          <span
            className="
              font-semibold leading-snug
              text-[var(--primary-black)]/85
              group-hover/link:text-[var(--primary-blue)]
              transition-colors duration-150
            "
            style={{ fontSize: 'var(--text-sm)' }}
          >
            {title}
          </span>
          <span
            className="text-[var(--primary-black)]/45 leading-snug font-normal"
            style={{ fontSize: 'var(--text-xs)' }}
          >
            {desc}
          </span>
        </div>
      </Link>
    </li>
  );
}