"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";
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
  FiMonitor,
  FiTrendingUp,
  FiArrowRight,
} from "react-icons/fi";

// ── TYPES ─────────────────────────────────────────────────────────────────────

type ServiceSubItem = {
  href: string;
  label: string;
  desc: string;
};

type ServiceGroup = "Career Counselling" | "Wellness & Growth" | "Professional";

type ServiceItem = {
  id: string;
  group: ServiceGroup;
  href: string;
  icon: React.ReactNode;
  label: string;
  desc: string;
  subItems?: ServiceSubItem[];
};

// ── DATA ──────────────────────────────────────────────────────────────────────

/** Audience segments under Career Counselling & Guidance */
const CAREER_SUB_ITEMS: ServiceSubItem[] = [
  {
    href: "/services/students-8-9-10",
    label: "Students — 8th, 9th & 10th",
    desc: "Stream & subject clarity before boards",
  },
  {
    href: "/services/after-10th-12th",
    label: "After 10th & 12th",
    desc: "College, courses & entrance exam guidance",
  },
  {
    href: "/services/for-graduates",
    label: "Graduates",
    desc: "PG options, job readiness & career pivots",
  },
  {
    href: "/services/for-professionals",
    label: "Professionals",
    desc: "Mid-career transitions & executive coaching",
  },
];

const SERVICE_ITEMS: ServiceItem[] = [
  {
    id: "career-counselling",
    group: "Career Counselling",
    href: "/services/career-counselling",
    icon: <FiBriefcase size={16} />,
    label: "Career Counselling & Guidance",
    desc: "Personalised roadmaps for every life stage",
    subItems: CAREER_SUB_ITEMS,
  },
  {
    id: "international-education",
    group: "Wellness & Growth",
    href: "/services/international-education",
    icon: <FiGlobe size={16} />,
    label: "International Education",
    desc: "Profile building for global universities",
  },
  {
    id: "beyond-school",
    group: "Wellness & Growth",
    href: "/services/beyond-school-life-and-skills",
    icon: <FiStar size={16} />,
    label: "Beyond School & Life Skills",
    desc: "Real-world readiness beyond academics",
  },
  {
    id: "mental-health",
    group: "Wellness & Growth",
    href: "/services/mental-health",
    icon: <FiHeart size={16} />,
    label: "Mental Health & Wellness",
    desc: "Holistic counselling for mind & balance",
  },
  {
    id: "khud-ki-kahani",
    group: "Wellness & Growth",
    href: "/services/khud-ki-kahani",
    icon: <FiBookOpen size={16} />,
    label: "Khud Ki Kahani",
    desc: "Own your narrative and shape your story",
  },
  {
    id: "industrial-training",
    group: "Professional",
    href: "/services/industrial-training",
    icon: <FiSettings size={16} />,
    label: "Industrial Training",
    desc: "Hands-on programs with industry experts",
  },
  {
    id: "workforce-development",
    group: "Professional",
    href: "work-force-development",
    icon: <FiUsers size={16} />,
    label: "Workforce Development",
    desc: "Corporate upskilling & team progress",
  },
];

/** Programs nav — two sections shown side-by-side on desktop */
const PROGRAM_SECTIONS = [
  {
    id: "webinar-workshop",
    label: "Webinar & Workshop",
    icon: <FiMonitor size={16} />,
    href: "/programs?section=webinar",
    desc: "Live webinars, cohorts & hands-on intensives",
  },
  {
    id: "careers",
    label: "Careers",
    icon: <FiTrendingUp size={16} />,
    href: "/programs?section=careers",
    desc: "Tracks, certifications & career pathways",
  },
] as const;

const NAV_LINKS_LEFT = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
] as const;

const NAV_LINKS_RIGHT = [
  { href: "/testimonials", label: "Testimonials" },
  { href: "/resources", label: "Resources" },
] as const;

// ── MAIN ──────────────────────────────────────────────────────────────────────

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  // Mobile accordion states
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileCounsellingOpen, setMobileCounsellingOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  function closeAll() {
    setMobileOpen(false);
    setMobileServicesOpen(false);
    setMobileCounsellingOpen(false);
    setMobileProgramsOpen(false);
  }

  return (
    <>
      <header
        role="banner"
        className={`sticky top-0 z-[var(--z-header)] w-full transition-all duration-300 ${
          scrolled
            ? "bg-[var(--primary-white)]/97 backdrop-blur-xl shadow-[var(--shadow-md)] border-b border-[var(--secondary-white)]"
            : "bg-[var(--primary-white)]/95 backdrop-blur-md border-b border-[var(--secondary-white)]"
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-5 sm:px-6 h-[72px] flex items-center justify-between gap-8">
          {/* ── LOGO ─────────────────────────────────────────────────── */}
          <Link
            href="/"
            aria-label="Cue Clarity — Go to homepage"
            className="flex items-center gap-2 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-blue)] rounded-md"
          >
            <Logo />
          </Link>

          {/* ── DESKTOP NAV ── */}
          <DesktopNav />

          {/* ── CTA BUTTONS + MOBILE TOGGLE ── */}
          <div className="flex items-center gap-3">
            {/* Quick-link pills — desktop only */}
            <div className="hidden lg:flex items-center gap-2">
              <a
                href="https://cueclarity.edumilestones.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "var(--text-sm)" }}
                className="inline-flex items-center gap-1.5  font-bold  text-[var(--primary-blue)]  px-3.5 py-1.5 rounded-full transition-all duration-200 bg-[var(--primary-blue)]/5 bg-[var(--primary-white)]/80 "
              >
                <FiBriefcase size={11} aria-hidden="true" />
                Career Assessment
                <FiArrowRight
                  size={9}
                  className="opacity-40"
                  aria-hidden="true"
                />
              </a>
              <a
                href="https://cueclarity.edumilestones.com/abroad-studies/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "var(--text-sm)" }}
                className="inline-flex items-center gap-1.5  font-bold  text-[var(--primary-blue)] px-3.5 py-1.5 rounded-full transition-all duration-200 hover:bg-[var(--primary-blue)]/5 bg-[var(--primary-white)]/80"
              >
                <FiGlobe size={11} aria-hidden="true" />
                Study Abroad
                <FiArrowRight
                  size={9}
                  className="opacity-40"
                  aria-hidden="true"
                />
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              aria-label={
                mobileOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav-drawer"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-[var(--secondary-white)] text-[var(--primary-black)]/70 hover:text-[var(--primary-blue)] hover:bg-[var(--secondary-white)]/60 transition-all duration-200"
            >
              {mobileOpen ? (
                <FiX size={25} aria-hidden="true" />
              ) : (
                <FiMenu size={25} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ── MOBILE DRAWER ── */}
      <MobileDrawer
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        servicesOpen={mobileServicesOpen}
        onToggleServices={() => setMobileServicesOpen((v) => !v)}
        counsellingOpen={mobileCounsellingOpen}
        onToggleCounselling={() => setMobileCounsellingOpen((v) => !v)}
        programsOpen={mobileProgramsOpen}
        onTogglePrograms={() => setMobileProgramsOpen((v) => !v)}
        onCloseAll={closeAll}
      />
    </>
  );
}

// ── DESKTOP NAV ───────────────────────────────────────────────────────────────

function DesktopNav() {
  const wellnessItems = SERVICE_ITEMS.filter(
    (s) => s.group === "Wellness & Growth",
  );
  const professionalItems = SERVICE_ITEMS.filter(
    (s) => s.group === "Professional",
  );

  return (
    <nav aria-label="Main navigation" className="hidden lg:flex items-center">
      <ul
        role="list"
        className="flex items-center gap-0.5 text-[var(--primary-black)] text-[14px]"
      >
        {NAV_LINKS_LEFT.map(({ href, label }) => (
          <NavItem key={href} href={href}>
            {label}
          </NavItem>
        ))}

        {/* ────────────────── SERVICES MEGA MENU ────────────────── */}
        <li className="relative group h-[72px] flex items-center">
          <Link
            href="/services/career-counselling"
            aria-haspopup="menu"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg font-semibold tracking-[var(--tracking-wide)] text-[var(--primary-black)]/80 hover:text-[var(--primary-blue)] hover:bg-[var(--secondary-white)]/60 transition-all duration-200 cursor-pointer select-none"
          >
            Services
            <FiChevronDown
              size={14}
              aria-hidden="true"
              className="mt-px transition-transform duration-300 group-hover:-rotate-180 text-[var(--primary-blue)]/50"
            />
          </Link>

          {/* ── Mega panel (3-column) ── */}
          <div
            role="menu"
            aria-label="Services"
            className="absolute top-[72px] left-1/2 -translate-x-1/2 w-[960px] bg-[var(--surface-card)] shadow-[var(--shadow-xl)] border border-[var(--secondary-white)] rounded-2xl opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-[var(--z-mega)] overflow-hidden"
          >
            {/* Gradient top accent */}
            <div
              aria-hidden="true"
              className="h-[3px] w-full bg-gradient-to-r from-[var(--primary-blue)] via-[var(--gradient-mid)] to-[var(--primary-yellow)]"
            />

            <div className="grid grid-cols-[280px_1fr_1fr]">
              {/* ── Col 1: Career Counselling + audience sub-links ── */}
              <div className="p-6 pr-5 border-r border-[var(--secondary-white)]">
                <Link
                  href="/services/career-counselling"
                  role="menuitem"
                  className="type-label text-[var(--primary-blue)]/70 pb-2.5 mb-3 flex items-center gap-1.5 hover:text-[var(--primary-blue)] transition-colors group/col1"
                >
                  <FiBriefcase size={11} aria-hidden="true" />
                  Career Counselling & Guidance
                  <span className="ml-auto opacity-0 group-hover/col1:opacity-100 transition-opacity text-xs">
                    →
                  </span>
                </Link>

                {/* Audience segments */}
                <p
                  className="px-3 mb-1.5 font-bold text-[var(--primary-black)]/35 uppercase tracking-widest"
                  style={{ fontSize: "10px" }}
                >
                  Who we help
                </p>
                <ul className="flex flex-col gap-0.5">
                  {CAREER_SUB_ITEMS.map(({ href, label, desc }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        role="menuitem"
                        className="group/sub flex flex-col px-3 py-2 rounded-xl hover:bg-[var(--secondary-white)]/70 transition-all duration-150"
                      >
                        <span
                          className="font-semibold leading-snug text-[var(--primary-black)]/80 group-hover/sub:text-[var(--primary-blue)] transition-colors"
                          style={{ fontSize: "var(--text-sm)" }}
                        >
                          {label}
                        </span>
                        <span
                          className="text-[var(--primary-black)]/40 font-normal leading-snug"
                          style={{ fontSize: "var(--text-xs)" }}
                        >
                          {desc}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ── Col 2: Wellness & Growth ── */}
              <div className="p-6 px-5 border-r border-[var(--secondary-white)]">
                <p className="type-label text-[var(--primary-blue)]/70 pb-2.5 mb-3">
                  Wellness & Growth
                </p>
                <ul className="flex flex-col gap-0.5">
                  {wellnessItems.map((s) => (
                    <ServiceLink
                      key={s.href}
                      href={s.href}
                      icon={s.icon}
                      title={s.label}
                      desc={s.desc}
                    />
                  ))}
                </ul>
              </div>

              {/* ── Col 3: Professional ── */}
              <div className="p-6 pl-5 bg-[var(--primary-white)]/60 rounded-r-2xl">
                <p className="type-label text-[var(--primary-blue)]/70 pb-2.5 mb-3">
                  Professional
                </p>
                <ul className="flex flex-col gap-0.5">
                  {professionalItems.map((s) => (
                    <ServiceLink
                      key={s.href}
                      href={s.href}
                      icon={s.icon}
                      title={s.label}
                      desc={s.desc}
                    />
                  ))}
                </ul>
              </div>
            </div>

            {/* ── View All Services footer strip ── */}
            <div className="border-t border-[var(--secondary-white)] px-7 py-3 flex items-center justify-end bg-[var(--primary-white)]/40">
              <Link
                href="/services/career-counselling"
                role="menuitem"
                className="flex items-center gap-1.5 text-[var(--primary-blue)] font-semibold hover:text-[var(--accent-blue)] transition-colors"
                style={{ fontSize: "var(--text-sm)" }}
              >
                View all services
                <FiChevronDown
                  size={13}
                  aria-hidden="true"
                  className="-rotate-90"
                />
              </Link>
            </div>
          </div>
        </li>

        {/* ────────────────── PROGRAMS DROPDOWN (hidden) ────────────────── */}
        {false && (
          <li className="relative group/programs h-[72px] flex items-center">
            <Link
              href="/programs"
              aria-haspopup="menu"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg font-semibold tracking-[var(--tracking-wide)] text-[var(--primary-black)]/80 hover:text-[var(--primary-blue)] hover:bg-[var(--secondary-white)]/60 transition-all duration-200 select-none"
            >
              Programs
              <FiChevronDown
                size={14}
                aria-hidden="true"
                className="mt-px transition-transform duration-300 group-hover/programs:-rotate-180 text-[var(--primary-blue)]/50"
              />
            </Link>

            {/* ── Programs panel (2-column side-by-side) ── */}
            <div
              role="menu"
              aria-label="Programs"
              className="absolute top-[72px] left-1/2 -translate-x-1/2 w-[320px] bg-[var(--surface-card)] shadow-[var(--shadow-xl)] border border-[var(--secondary-white)] rounded-2xl opacity-0 invisible translate-y-3 group-hover/programs:opacity-100 group-hover/programs:visible group-hover/programs:translate-y-0 transition-all duration-300 ease-out z-[var(--z-mega)] overflow-hidden"
            >
              <div
                aria-hidden="true"
                className="h-[3px] w-full bg-gradient-to-r from-[var(--primary-blue)] via-[var(--gradient-mid)] to-[var(--primary-yellow)]"
              />

              <ul className="flex flex-col divide-y divide-[var(--secondary-white)]">
                {PROGRAM_SECTIONS.map((section) => (
                  <li key={section.id}>
                    <Link
                      href={section.href}
                      role="menuitem"
                      className="group/prog flex items-start gap-4 px-6 py-4 hover:bg-[var(--secondary-white)]/50 transition-all duration-200"
                    >
                      <div className="mt-0.5 shrink-0 w-9 h-9 rounded-xl bg-[var(--primary-blue)]/6 flex items-center justify-center text-[var(--primary-blue)]/50 group-hover/prog:bg-[var(--primary-blue)]/12 group-hover/prog:text-[var(--primary-blue)] transition-all duration-200">
                        {section.icon}
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span
                          className="font-semibold leading-snug text-[var(--primary-black)]/85 group-hover/prog:text-[var(--primary-blue)] transition-colors"
                          style={{ fontSize: "var(--text-sm)" }}
                        >
                          {section.label}
                        </span>
                        <span
                          className="text-[var(--primary-black)]/40 font-normal leading-snug"
                          style={{ fontSize: "var(--text-xs)" }}
                        >
                          {section.desc}
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        )}

        {NAV_LINKS_RIGHT.map(({ href, label }) => (
          <NavItem key={href} href={href}>
            {label}
          </NavItem>
        ))}
      </ul>
    </nav>
  );
}

// ── MOBILE DRAWER ─────────────────────────────────────────────────────────────

function MobileDrawer({
  open,
  onClose,
  servicesOpen,
  onToggleServices,
  counsellingOpen,
  onToggleCounselling,
  programsOpen,
  onTogglePrograms,
  onCloseAll,
}: {
  open: boolean;
  onClose: () => void;
  servicesOpen: boolean;
  onToggleServices: () => void;
  counsellingOpen: boolean;
  onToggleCounselling: () => void;
  programsOpen: boolean;
  onTogglePrograms: () => void;
  onCloseAll: () => void;
}) {
  // Height estimates for smooth max-height transitions
  const servicesMaxHeight = servicesOpen
    ? `${CAREER_SUB_ITEMS.length * 58 + SERVICE_ITEMS.length * 62 + 80}px`
    : "0px";
  const programsMaxHeight = programsOpen
    ? `${PROGRAM_SECTIONS.length * 72}px`
    : "0px";

  return (
    <div
      id="mobile-nav-drawer"
      className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
        open ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Drawer panel */}
      <nav
        aria-label="Mobile navigation"
        className={`absolute top-0 right-0 h-full w-full max-w-sm bg-[var(--primary-white)] shadow-[var(--shadow-xl)] flex flex-col transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* ── Header ── */}
        <div className="flex items-center justify-between px-5 h-[72px] border-b border-[var(--secondary-white)] shrink-0">
          <Link href="/" onClick={onClose} aria-label="Cue Clarity — Home">
            <Logo />
          </Link>
          <button
            onClick={onClose}
            aria-label="Close navigation menu"
            className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-[var(--secondary-white)] transition-colors"
          >
            <FiX
              size={20}
              aria-hidden="true"
              className="text-[var(--primary-black)]/70"
            />
          </button>
        </div>

        {/* ── Scrollable nav links ── */}
        <div className="overflow-y-auto flex-1 px-3 py-4 flex flex-col gap-0.5">
          {NAV_LINKS_LEFT.map(({ href, label }) => (
            <MobileLink key={href} href={href} onClick={onClose}>
              {label}
            </MobileLink>
          ))}

          {/* ── SERVICES accordion ── */}
          <div>
            <button
              onClick={onToggleServices}
              aria-expanded={servicesOpen}
              className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl font-semibold text-[var(--primary-black)]/80 hover:text-[var(--primary-blue)] hover:bg-[var(--secondary-white)]/70 transition-all duration-150"
              style={{
                fontSize: "var(--text-base)",
                letterSpacing: "var(--tracking-snug)",
              }}
            >
              Services
              <FiChevronDown
                size={16}
                aria-hidden="true"
                className={`text-[var(--primary-blue)]/50 transition-transform duration-300 ${
                  servicesOpen ? "-rotate-180" : ""
                }`}
              />
            </button>

            {/* Services accordion body */}
            <div
              className="overflow-hidden transition-all duration-300 ease-out"
              style={{
                maxHeight: servicesMaxHeight,
                opacity: servicesOpen ? 1 : 0,
              }}
            >
              <ul className="px-2 pb-1 flex flex-col gap-0.5">
                {/* Career Counselling — nested accordion */}
                <li>
                  <div className="flex items-stretch rounded-xl overflow-hidden hover:bg-[var(--secondary-white)] transition-all duration-150 group">
                    {/* Link navigates to the page */}
                    <Link
                      href="/services/career-counselling"
                      onClick={onCloseAll}
                      className="flex items-start gap-3 flex-1 px-4 py-3"
                    >
                      <div className="mt-0.5 shrink-0 w-7 h-7 rounded-lg bg-[var(--primary-blue)]/6 flex items-center justify-center text-[var(--primary-blue)]/50 group-hover:bg-[var(--primary-blue)]/12 group-hover:text-[var(--primary-blue)] transition-all duration-200">
                        <FiBriefcase size={14} aria-hidden="true" />
                      </div>
                      <div className="flex-1 text-left">
                        <span
                          className="block font-semibold text-[var(--primary-black)]/85 group-hover:text-[var(--primary-blue)] transition-colors"
                          style={{ fontSize: "var(--text-sm)" }}
                        >
                          Career Counselling & Guidance
                        </span>
                        <span
                          className="text-[var(--muted-text)]"
                          style={{ fontSize: "var(--text-xs)" }}
                        >
                          Personalised roadmaps for every stage
                        </span>
                      </div>
                    </Link>
                    {/* Separate chevron button toggles sub-items */}
                    <button
                      onClick={onToggleCounselling}
                      aria-expanded={counsellingOpen}
                      aria-label="Show audience segments"
                      className="px-3 flex items-center text-[var(--primary-blue)]/40 hover:text-[var(--primary-blue)] transition-colors"
                    >
                      <FiChevronDown
                        size={14}
                        aria-hidden="true"
                        className={`transition-transform duration-300 ${
                          counsellingOpen ? "-rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {/* Audience sub-items */}
                  <div
                    className="overflow-hidden transition-all duration-300 ease-out"
                    style={{
                      maxHeight: counsellingOpen
                        ? `${CAREER_SUB_ITEMS.length * 58 + 16}px`
                        : "0px",
                      opacity: counsellingOpen ? 1 : 0,
                    }}
                  >
                    <p
                      className="px-7 pt-1 pb-1 font-bold text-[var(--primary-black)]/35 uppercase tracking-widest"
                      style={{ fontSize: "10px" }}
                    >
                      Who we help
                    </p>
                    <ul className="px-4 pb-2 flex flex-col gap-0.5">
                      {CAREER_SUB_ITEMS.map(({ href, label, desc }) => (
                        <li key={href}>
                          <Link
                            href={href}
                            onClick={onCloseAll}
                            className="flex flex-col px-4 py-2.5 rounded-xl hover:bg-[var(--secondary-white)] transition-all duration-150 group"
                          >
                            <span
                              className="font-semibold text-[var(--primary-black)]/80 group-hover:text-[var(--primary-blue)] transition-colors"
                              style={{ fontSize: "var(--text-sm)" }}
                            >
                              {label}
                            </span>
                            <span
                              className="text-[var(--muted-text)]"
                              style={{ fontSize: "var(--text-xs)" }}
                            >
                              {desc}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>

                {/* Remaining service items (excluding career counselling) */}
                {SERVICE_ITEMS.filter((s) => s.id !== "career-counselling").map(
                  ({ href, icon, label, desc }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        onClick={onCloseAll}
                        className="flex items-start gap-3 px-4 py-3 rounded-xl hover:bg-[var(--secondary-white)] transition-all duration-150 group"
                      >
                        <div className="mt-0.5 shrink-0 w-7 h-7 rounded-lg bg-[var(--primary-blue)]/6 flex items-center justify-center text-[var(--primary-blue)]/50 group-hover:bg-[var(--primary-blue)]/12 group-hover:text-[var(--primary-blue)] transition-all duration-200">
                          {icon}
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <span
                            className="font-semibold text-[var(--primary-black)]/85 group-hover:text-[var(--primary-blue)] transition-colors"
                            style={{ fontSize: "var(--text-sm)" }}
                          >
                            {label}
                          </span>
                          <span
                            className="text-[var(--muted-text)]"
                            style={{ fontSize: "var(--text-xs)" }}
                          >
                            {desc}
                          </span>
                        </div>
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>

          {/* ── PROGRAMS accordion ── */}
          {/* <div>
            <button
              onClick={onTogglePrograms}
              aria-expanded={programsOpen}
              className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl font-semibold text-[var(--primary-black)]/80 hover:text-[var(--primary-blue)] hover:bg-[var(--secondary-white)]/70 transition-all duration-150"
              style={{
                fontSize: "var(--text-base)",
                letterSpacing: "var(--tracking-snug)",
              }}
            >
              Programs
              <FiChevronDown
                size={16}
                aria-hidden="true"
                className={`text-[var(--primary-blue)]/50 transition-transform duration-300 ${
                  programsOpen ? "-rotate-180" : ""
                }`}
              />
            </button>

            <div
              className="overflow-hidden transition-all duration-300 ease-out"
              style={{
                maxHeight: programsMaxHeight,
                opacity: programsOpen ? 1 : 0,
              }}
            >
              <ul className="px-2 pb-2 flex flex-col gap-0.5">
                {PROGRAM_SECTIONS.map((section) => (
                  <li key={section.id}>
                    <Link
                      href={section.href}
                      onClick={onCloseAll}
                      className="flex items-start gap-3 px-4 py-3 rounded-xl hover:bg-[var(--secondary-white)] transition-all duration-150 group"
                    >
                      <div className="mt-0.5 shrink-0 w-7 h-7 rounded-lg bg-[var(--primary-blue)]/6 flex items-center justify-center text-[var(--primary-blue)]/50 group-hover:bg-[var(--primary-blue)]/12 group-hover:text-[var(--primary-blue)] transition-all duration-200">
                        {section.icon}
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span
                          className="font-semibold text-[var(--primary-black)]/85 group-hover:text-[var(--primary-blue)] transition-colors"
                          style={{ fontSize: "var(--text-sm)" }}
                        >
                          {section.label}
                        </span>
                        <span
                          className="text-[var(--muted-text)]"
                          style={{ fontSize: "var(--text-xs)" }}
                        >
                          {section.desc}
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div> */}

          {NAV_LINKS_RIGHT.map(({ href, label }) => (
            <MobileLink key={href} href={href} onClick={onClose}>
              {label}
            </MobileLink>
          ))}

          {/* ── Quick links ── */}
          <div className="mt-2 pt-3 border-t border-[var(--secondary-white)]">
            <p
              className="px-4 mb-2 font-bold text-[var(--primary-black)]/35 uppercase tracking-widest"
              style={{ fontSize: "10px" }}
            >
              Quick links
            </p>
            <div className="flex flex-col gap-1.5 px-1">
              <a
                href="https://cueclarity.edumilestones.com/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-[var(--primary-black)] hover:text-[var(--primary-blue)] hover:bg-[var(--secondary-white)]/70 transition-all duration-150 font-semibold"
                style={{ fontSize: "var(--text-sm)" }}
              >
                <FiBriefcase
                  size={14}
                  aria-hidden="true"
                  className="shrink-0 text-[var(--primary-blue)]"
                  style={{ fontSize: "var(--text-sm)" }}
                />
                Career Assessment
                <FiArrowRight
                  size={11}
                  className="ml-auto opacity-80"
                  aria-hidden="true"
                  style={{ fontSize: "var(--text-sm)" }}
                />
              </a>
              <a
                href="https://cueclarity.edumilestones.com/abroad-studies/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-[var(--primary-black)] hover:text-[var(--primary-blue)] hover:bg-[var(--secondary-white)]/70 transition-all duration-150 font-semibold"
                style={{ fontSize: "var(--text-sm)" }}
              >
                <FiGlobe
                  size={14}
                  aria-hidden="true"
                  className="shrink-0 text-[var(--primary-blue)]"
                  style={{ fontSize: "var(--text-sm)" }}
                />
                Study Abroad
                <FiArrowRight
                  size={11}
                  className="ml-auto opacity-80"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

// ── HELPERS ──────────────────────────────────────────────────────────────────

function NavItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="block px-3.5 py-2 rounded-lg font-semibold tracking-[var(--tracking-wide)] text-[var(--primary-black)]/80 hover:text-[var(--primary-blue)] hover:bg-[var(--secondary-white)]/60 transition-all duration-200"
      >
        {children}
      </Link>
    </li>
  );
}

function MobileLink({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-4 py-3.5 rounded-xl font-semibold text-[var(--primary-black)]/80 hover:text-[var(--primary-blue)] hover:bg-[var(--secondary-white)]/70 transition-all duration-150"
      style={{
        fontSize: "var(--text-base)",
        letterSpacing: "var(--tracking-snug)",
      }}
    >
      {children}
    </Link>
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
        role="menuitem"
        className="group/link flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-[var(--secondary-white)]/70 transition-all duration-200"
      >
        {/* Icon bubble */}
        <div className="mt-0.5 shrink-0 w-8 h-8 rounded-lg bg-[var(--primary-blue)]/6 flex items-center justify-center text-[var(--primary-blue)]/50 group-hover/link:bg-[var(--primary-blue)]/12 group-hover/link:text-[var(--primary-blue)] transition-all duration-200">
          {icon}
        </div>
        <div className="flex flex-col gap-0.5">
          <span
            className="font-semibold leading-snug text-[var(--primary-black)]/85 group-hover/link:text-[var(--primary-blue)] transition-colors duration-150"
            style={{ fontSize: "var(--text-sm)" }}
          >
            {title}
          </span>
          <span
            className="text-[var(--primary-black)]/45 leading-snug font-normal"
            style={{ fontSize: "var(--text-xs)" }}
          >
            {desc}
          </span>
        </div>
      </Link>
    </li>
  );
}
