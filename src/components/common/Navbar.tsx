"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { getWhatsAppURL } from "@/lib/whatsapp";
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
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";

// ── DATA ──────────────────────────────────────────────────────────────────────

type ServiceGroup = "Student Guidance" | "Personal Growth" | "Professional";

type ServiceItem = {
  group: ServiceGroup;
  href: string;
  icon: React.ReactNode;
  label: string;
  desc: string;
};

const SERVICE_ITEMS: ServiceItem[] = [
  {
    group: "Student Guidance",
    href: "/services/career-counseling",
    icon: <FiBriefcase size={16} />,
    label: "Career Counselling & Coaching",
    desc: "Personalized roadmaps for confident decisions",
  },
  {
    group: "Student Guidance",
    href: "/services/international-education",
    icon: <FiGlobe size={16} />,
    label: "International Education",
    desc: "Profile building for global universities",
  },
  {
    group: "Student Guidance",
    href: "/services/life-skills",
    icon: <FiStar size={16} />,
    label: "Beyond School & Life Skills",
    desc: "Real-world readiness beyond academics",
  },
  {
    group: "Personal Growth",
    href: "/services/khud-ki-kahani",
    icon: <FiBookOpen size={16} />,
    label: "Khud Ki Kahani, Khud Likho",
    desc: "Own your narrative and shape your story",
  },
  {
    group: "Personal Growth",
    href: "/services/emotional-wellness",
    icon: <FiHeart size={16} />,
    label: "Emotional Wellness",
    desc: "Holistic counseling for mind & balance",
  },
  {
    group: "Professional",
    href: "/services/industrial-training",
    icon: <FiSettings size={16} />,
    label: "Industrial Training",
    desc: "Hands-on programs with industry experts",
  },
  {
    group: "Professional",
    href: "/services/workforce-development",
    icon: <FiUsers size={16} />,
    label: "Workforce Development",
    desc: "Corporate upskilling & team growth",
  },
];

const TOP_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
] as const;

const BOTTOM_LINKS = [
  { href: "/programs", label: "Programs" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/resources", label: "Resources" },
] as const;

// ── MAIN ──────────────────────────────────────────────────────────────────────

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
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
            aria-label="Cue Clarity — Home"
            className="flex items-center gap-2 shrink-0 focus-visible:outline-none transform"
          >
            <Logo />
          </Link>

          {/* ── DESKTOP NAV ── */}
          <DesktopNav />

          {/* ── CTA BUTTONS & MOBILE TOGGLE ── */}
          <div className="flex items-center gap-3">
            {/* Phone CTA */}
            <a
              href="tel:+918652222525"
              className="hidden xl:flex items-center gap-1.5 text-[var(--primary-black)]/60 hover:text-[var(--primary-blue)] transition-colors duration-200 font-extrabold"
              style={{
                fontSize: "var(--text-sm)",
                letterSpacing: "var(--tracking-wide)",
              }}
              aria-label="Call us"
            >
              <IoIosCall size={20} />
              8652222525
            </a>

            {/* WhatsApp CTA */}
            <a
              href={getWhatsAppURL("general", "navbar")}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-2 bg-[var(--primary-yellow)] text-[var(--primary-black)] px-6 py-2.5 rounded-full font-bold tracking-[var(--tracking-wide)] shadow-[var(--shadow-glow-yellow)] hover:bg-[var(--accent-yellow)] hover:-translate-y-px hover:shadow-[0_8px_28px_rgba(255,193,20,0.4)] transition-all duration-200"
              style={{ fontSize: "var(--text-sm)" }}
            >
              <FaWhatsapp size={20} />
              Chat on WhatsApp
            </a>

            {/* Mobile Hamburger */}
            <button
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-[var(--secondary-white)] text-[var(--primary-black)]/70 hover:text-[var(--primary-blue)] hover:bg-[var(--secondary-white)]/60 transition-all duration-200"
            >
              {mobileOpen ? <FiX size={25} /> : <FiMenu size={25} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── MOBILE DRAWER ── */}
      <MobileDrawer
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        servicesOpen={servicesOpen}
        onToggleServices={() => setServicesOpen((v) => !v)}
        onCloseAll={() => {
          setMobileOpen(false);
          setServicesOpen(false);
        }}
      />
    </>
  );
}

// ── DESKTOP NAV ───────────────────────────────────────────────────────────────

function DesktopNav() {
  const studentItems = SERVICE_ITEMS.filter(
    (s) => s.group === "Student Guidance",
  );
  const personalItems = SERVICE_ITEMS.filter(
    (s) => s.group === "Personal Growth",
  );
  const professionalItems = SERVICE_ITEMS.filter(
    (s) => s.group === "Professional",
  );

  return (
    <nav aria-label="Main Navigation" className="hidden lg:flex items-center">
      <ul className="flex items-center gap-1 text-[var(--primary-black)] text-[14px]">
        {TOP_LINKS.map(({ href, label }) => (
          <NavItem key={href} href={href}>
            {label}
          </NavItem>
        ))}

        {/* ── SERVICES MEGA MENU ── */}
        <li className="relative group h-[72px] flex items-center">
          <button
            aria-haspopup="true"
            aria-expanded="false"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg font-semibold tracking-[var(--tracking-wide)] text-[var(--primary-black)]/80 hover:text-[var(--primary-blue)] hover:bg-[var(--secondary-white)]/60 transition-all duration-200 cursor-pointer select-none"
          >
            Services
            <FiChevronDown
              size={14}
              className="mt-px transition-transform duration-300 group-hover:-rotate-180 text-[var(--primary-blue)]/50"
            />
          </button>

          {/* Mega Panel */}
          <div className="absolute top-[72px] left-1/2 -translate-x-1/2 w-[820px] bg-[var(--surface-card)] shadow-[var(--shadow-xl)] border border-[var(--secondary-white)] rounded-2xl opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-[var(--z-mega)] overflow-hidden">
            <div className="h-[3px] w-full bg-gradient-to-r from-[var(--primary-blue)] via-[var(--gradient-mid)] to-[var(--primary-yellow)]" />
            <div className="grid grid-cols-3 p-7 gap-6">
              <MegaSection title="Student Guidance">
                {studentItems.map((s) => (
                  <ServiceLink
                    key={s.href}
                    href={s.href}
                    icon={s.icon}
                    title={s.label}
                    desc={s.desc}
                  />
                ))}
              </MegaSection>

              <MegaSection title="Personal Growth" bordered>
                {personalItems.map((s) => (
                  <ServiceLink
                    key={s.href}
                    href={s.href}
                    icon={s.icon}
                    title={s.label}
                    desc={s.desc}
                  />
                ))}
              </MegaSection>

              {/* Professional — distinct background */}
              <section className="bg-[var(--primary-white)]/70 -my-7 py-7 -mr-7 pr-7 pl-6 rounded-r-2xl border-l border-[var(--secondary-white)]">
                <p className="type-label text-[var(--primary-blue)]/70 border-b border-[var(--secondary-white)] pb-2.5 mb-4">
                  Professional
                </p>
                <ul className="flex flex-col gap-1">
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
              </section>
            </div>
          </div>
        </li>

        {BOTTOM_LINKS.map(({ href, label }) => (
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
  onCloseAll,
}: {
  open: boolean;
  onClose: () => void;
  servicesOpen: boolean;
  onToggleServices: () => void;
  onCloseAll: () => void;
}) {
  return (
    <div
      className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
        open ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <nav
        className={`absolute top-0 right-0 h-full w-full max-w-sm bg-[var(--primary-white)] shadow-[var(--shadow-xl)] flex flex-col transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile Navigation"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 h-[72px] border-b border-[var(--secondary-white)]">
          <Link href="/" onClick={onClose}>
            <Logo />
          </Link>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-[var(--secondary-white)] transition-colors"
          >
            <FiX size={20} className="text-[var(--primary-black)]/70" />
          </button>
        </div>

        {/* Nav Links */}
        <div className="overflow-y-auto flex-1 px-4 py-6 flex flex-col gap-1">
          {TOP_LINKS.map(({ href, label }) => (
            <MobileLink key={href} href={href} onClick={onClose}>
              {label}
            </MobileLink>
          ))}

          {/* Services Accordion */}
          <div className="rounded-xl overflow-hidden">
            <button
              onClick={onToggleServices}
              className="w-full flex items-center justify-between px-4 py-3.5 font-semibold text-[var(--primary-black)]/80 hover:text-[var(--primary-blue)] hover:bg-[var(--secondary-white)]/70 transition-all duration-150 rounded-xl"
              style={{
                fontSize: "var(--text-base)",
                letterSpacing: "var(--tracking-snug)",
              }}
            >
              Services
              <FiChevronDown
                size={16}
                className={`text-[var(--primary-blue)]/50 transition-transform duration-300 ${
                  servicesOpen ? "-rotate-180" : ""
                }`}
              />
            </button>

            <div
              className="overflow-hidden transition-all duration-300 ease-out"
              style={{
                maxHeight: servicesOpen ? "500px" : "0px",
                opacity: servicesOpen ? 1 : 0,
              }}
            >
              <ul className="px-2 pb-2 flex flex-col gap-0.5">
                {SERVICE_ITEMS.map(({ href, icon, label, desc }) => (
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
                          className="text-[var(--muted-text)] font-normal"
                          style={{ fontSize: "var(--text-xs)" }}
                        >
                          {desc}
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {BOTTOM_LINKS.map(({ href, label }) => (
            <MobileLink key={href} href={href} onClick={onClose}>
              {label}
            </MobileLink>
          ))}
        </div>

        {/* CTA Footer */}
        <div className="px-6 pb-10 flex flex-col gap-3">
          <a
            href={getWhatsAppURL("general", "navbar-mobile")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="btn-whatsapp w-full text-center justify-center text-base"
          >
            <FaWhatsapp size={20} />
            Chat on WhatsApp
          </a>
          <a
            href="tel:+918652222525"
            className="flex items-center justify-center gap-2 py-3 rounded-full border border-[var(--secondary-white)] font-extrabold text-[var(--primary-black)]/70 hover:border-[var(--primary-blue)] hover:text-[var(--primary-blue)] transition-colors duration-200"
            style={{ fontSize: "var(--text-base)" }}
          >
            <IoIosCall size={20} />
            8652222525
          </a>
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
    <section
      className={
        bordered ? "border-l border-[var(--secondary-white)] pl-6" : ""
      }
    >
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
