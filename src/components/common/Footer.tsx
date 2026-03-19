"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getWhatsAppURL } from "@/lib/whatsapp";
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
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
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
