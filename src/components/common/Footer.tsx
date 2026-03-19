"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getWhatsAppURL } from "@/lib/whatsapp";
import { FaWhatsapp } from "react-icons/fa";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiLinkedin,
  FiInstagram,
  FiTwitter,
  FiArrowUpRight,
} from "react-icons/fi";
import NewsletterForm from "./NewsLetterFrom";

export default function Footer() {
  return (
    <footer className="relative bg-[var(--primary-black)] overflow-hidden">
      {/* ── decorative background ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-[var(--primary-blue)] opacity-20 blur-[140px]" />
        <div className="absolute bottom-0 -left-32 w-[400px] h-[400px] rounded-full bg-[var(--primary-yellow)] opacity-[0.06] blur-[100px]" />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--primary-yellow)]/30 to-transparent" />
      </div>

      {/* ── UNIFIED ACTION BAND ── */}
      <div className="relative z-10 border-b border-white/[0.07]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 py-14">
          {/* shared eyebrow */}
          <div className="flex items-center gap-2 mb-10">
            <span className="w-5 h-[2px] bg-[var(--primary-yellow)]" />
            <p className="text-[var(--primary-yellow)] text-xs font-bold uppercase tracking-[0.22em]">
              Let's connect
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 lg:divide-x lg:divide-white/[0.08]">
            {/* LEFT — Talk to us */}
            <div className="flex flex-col gap-5 lg:pr-14">
              <h2
                className="text-[var(--primary-white)] font-bold leading-tight"
                style={{
                  fontFamily: "var(--font-oswald, Oswald, sans-serif)",
                  fontSize: "clamp(1.6rem, 3vw, 2.5rem)",
                }}
              >
                Ready to get unstuck?
                <br />
                <span className="text-[var(--primary-yellow)]">
                  Start a conversation.
                </span>
              </h2>
              <p className="text-[var(--primary-white)]/45 text-sm leading-relaxed max-w-sm">
                Our counselors reply within hours. Tell us where you are and
                where you want to go — no commitment needed.
              </p>
              <a
                href={getWhatsAppURL("general", "footer-cta")}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-fit flex items-center gap-3 bg-[var(--primary-yellow)] hover:bg-[var(--accent-yellow)] text-[var(--primary-black)] font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,193,20,0.35)]"
              >
                <FaWhatsapp size={17} aria-hidden="true" />
                Chat on WhatsApp
                <FiArrowUpRight
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  size={15}
                />
              </a>
            </div>

            {/* RIGHT — Newsletter */}
            <div className="flex flex-col gap-5 lg:pl-14">
              <h2
                className="text-[var(--primary-white)] font-bold leading-tight"
                style={{
                  fontFamily: "var(--font-oswald, Oswald, sans-serif)",
                  fontSize: "clamp(1.6rem, 3vw, 2.5rem)",
                }}
              >
                Stay ahead of
                <br />
                <span className="text-[var(--primary-yellow)]">the curve.</span>
              </h2>
              <p className="text-[var(--primary-white)]/45 text-sm leading-relaxed max-w-sm">
                Weekly career insights, industry trends, and opportunities —
                straight to your inbox. No spam, ever.
              </p>
              <NewsletterForm />
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN FOOTER GRID ── */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-6 mb-14">
          {/* Brand column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Link href="/" className="inline-block w-fit">
              <Image
                src="https://cueclarity.com/wp-content/uploads/2025/05/cropped-Artboard-1-copy-5@3x-scaled-1.png"
                alt="Cue Clarity Logo"
                width={150}
                height={38}
                className="h-9 w-auto brightness-0 invert opacity-90"
              />
            </Link>
            <p className="text-[var(--primary-white)]/50 text-sm leading-relaxed max-w-[300px]">
              Empowering students and professionals to stop guessing and start
              growing. Data-backed career counseling for a rapidly changing
              world.
            </p>

            {/* stat pills */}
            <div className="flex flex-wrap gap-3 mt-1">
              {[
                ["500+", "students placed"],
                ["15+", "countries"],
                ["98%", "satisfaction"],
              ].map(([num, label]) => (
                <div
                  key={num}
                  className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] rounded-full px-4 py-1.5"
                >
                  <span className="text-[var(--primary-yellow)] font-bold text-sm">
                    {num}
                  </span>
                  <span className="text-[var(--primary-white)]/40 text-xs">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* socials */}
            <div className="flex items-center gap-3 mt-2">
              <SocialLink
                href="#"
                icon={<FiLinkedin size={16} />}
                label="LinkedIn"
              />
              <SocialLink
                href="#"
                icon={<FiInstagram size={16} />}
                label="Instagram"
              />
              <SocialLink
                href="#"
                icon={<FiTwitter size={16} />}
                label="Twitter"
              />
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Company links */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <FooterHeading>Company</FooterHeading>
            <FooterLink href="/about" text="About Us" />
            <FooterLink href="/success-stories" text="Success Stories" />
            <FooterLink href="/programs" text="For Institutions" />
            <FooterLink href="/blog" text="Insights & Blog" />
          </div>

          {/* Services links */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <FooterHeading>Services</FooterHeading>
            <FooterLink
              href="/services/career-counseling"
              text="Career Counselling"
            />
            <FooterLink
              href="/services/international-education"
              text="International Education"
            />
            <FooterLink
              href="/services/industrial-training"
              text="Industrial Training"
            />
            <FooterLink
              href="/services/corporate-training"
              text="Corporate Training"
            />
          </div>

          {/* Contact */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <FooterHeading>Get in touch</FooterHeading>
            <ContactItem
              icon={<FiMail size={14} />}
              href="mailto:hello@cueclarity.com"
            >
              hello@cueclarity.com
            </ContactItem>
            <ContactItem icon={<FiPhone size={14} />} href="tel:+918652222525">
              +91 8652 222 525
            </ContactItem>
            <ContactItem icon={<FiMapPin size={14} />}>
              Mumbai, Maharashtra, India
            </ContactItem>
          </div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="border-t border-white/[0.07] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[var(--primary-white)]/30 text-xs">
            © {new Date().getFullYear()} CueClarity. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            {[
              ["Privacy Policy", "/privacy"],
              ["Terms of Service", "/terms"],
            ].map(([label, href], i) => (
              <React.Fragment key={href}>
                {i > 0 && (
                  <span className="text-[var(--primary-white)]/20 text-xs mx-2">
                    ·
                  </span>
                )}
                <Link
                  href={href}
                  className="text-[var(--primary-white)]/30 hover:text-[var(--primary-yellow)] transition-colors text-xs"
                >
                  {label}
                </Link>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ── NewsletterForm ── */

/* ── sub-components ── */

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4
      className="text-[var(--primary-white)]/90 text-xs font-bold uppercase tracking-[0.18em] mb-1"
      style={{ fontFamily: "var(--font-oswald, Oswald, sans-serif)" }}
    >
      {children}
    </h4>
  );
}

function FooterLink({ href, text }: { href: string; text: string }) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-1.5 text-[var(--primary-white)]/45 hover:text-[var(--primary-yellow)] transition-colors text-sm w-fit"
    >
      <span className="w-0 group-hover:w-2.5 overflow-hidden transition-all duration-200 text-[var(--primary-yellow)]">
        ›
      </span>
      {text}
    </Link>
  );
}

function ContactItem({
  icon,
  href,
  children,
}: {
  icon: React.ReactNode;
  href?: string;
  children: React.ReactNode;
}) {
  const content = (
    <div className="flex items-start gap-3 text-[var(--primary-white)]/45 group/item">
      <span className="mt-0.5 text-[var(--primary-yellow)] flex-shrink-0">
        {icon}
      </span>
      <span className="text-sm leading-relaxed group-hover/item:text-[var(--primary-white)]/80 transition-colors">
        {children}
      </span>
    </div>
  );

  return href ? (
    <a
      href={href}
      className="hover:text-[var(--primary-white)]/80 transition-colors"
    >
      {content}
    </a>
  ) : (
    <div>{content}</div>
  );
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-9 h-9 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-[var(--primary-white)]/60 hover:bg-[var(--primary-yellow)] hover:text-[var(--primary-black)] hover:border-[var(--primary-yellow)] hover:-translate-y-0.5 transition-all duration-200"
    >
      {icon}
    </a>
  );
}
