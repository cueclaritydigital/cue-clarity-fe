import React from 'react';
import Link from 'next/link';
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiLinkedin, 
  FiInstagram, 
  FiTwitter 
} from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-[var(--primary-black)] pt-24 pb-8 px-4 sm:px-6 relative overflow-hidden">
      
      {/* Subtle ambient glow to tie into the rest of the site's aesthetic */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--primary-blue)] opacity-[0.05] blur-[100px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* MAIN FOOTER GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 animate-fade-in-up">
          
          {/* 1. Brand & Mission (Takes up more space) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Logo Placeholder */}
            <Link href="/" className="inline-block">
              <img 
                src="https://cueclarity.com/wp-content/uploads/2025/05/cropped-Artboard-1-copy-5@3x-scaled-1.png" 
                alt="Cue Clarity Logo" 
                className="h-10 w-auto brightness-0 invert opacity-90" // Makes the logo white for dark mode
              />
            </Link>
            <p className="type-body text-[var(--primary-white)]/60 max-w-sm">
              Empowering students and professionals to stop guessing and start growing. 
              Data-backed career counseling for a rapidly changing world.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-2">
              <SocialLink href="#" icon={<FiLinkedin size={20} />} />
              <SocialLink href="#" icon={<FiInstagram size={20} />} />
              <SocialLink href="#" icon={<FiTwitter size={20} />} />
            </div>
          </div>

          {/* 2. Quick Links */}
          <div className="lg:col-span-2 lg:col-start-6 flex flex-col gap-5">
            <h4 className="text-[var(--primary-white)] uppercase tracking-widest text-sm font-bold font-oswald mb-2">
              Company
            </h4>
            <div className="flex flex-col gap-3">
              <FooterLink href="/about" text="About Us" />
              <FooterLink href="/success-stories" text="Success Stories" />
              <FooterLink href="/programs" text="For Institutions" />
              <FooterLink href="/blog" text="Insights & Blog" />
            </div>
          </div>

          {/* 3. Services */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            <h4 className="text-[var(--primary-white)] uppercase tracking-widest text-sm font-bold font-oswald mb-2">
              Our Services
            </h4>
            <div className="flex flex-col gap-3">
              <FooterLink href="/services/career-counseling" text="Career Counselling" />
              <FooterLink href="/services/international-education" text="International Education" />
              <FooterLink href="/services/industrial-training" text="Industrial Training" />
              <FooterLink href="/services/corporate-training" text="Corporate Training" />
            </div>
          </div>

          {/* 4. Contact Info */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            <h4 className="text-[var(--primary-white)] uppercase tracking-widest text-sm font-bold font-oswald mb-2">
              Get in Touch
            </h4>
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex items-start gap-3 text-[var(--primary-white)]/60 group">
                <FiMail className="mt-1 text-[var(--primary-yellow)] group-hover:scale-110 transition-transform" />
                <a href="mailto:hello@cueclarity.com" className="hover:text-[var(--primary-white)] transition-colors">
                  hello@cueclarity.com
                </a>
              </div>
              <div className="flex items-start gap-3 text-[var(--primary-white)]/60 group">
                <FiPhone className="mt-1 text-[var(--primary-yellow)] group-hover:scale-110 transition-transform" />
                <a href="tel:+919876543210" className="hover:text-[var(--primary-white)] transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-start gap-3 text-[var(--primary-white)]/60 group">
                <FiMapPin className="mt-1 text-[var(--primary-yellow)] shrink-0 group-hover:scale-110 transition-transform" />
                <span className="leading-relaxed">
                  123 Clarity Avenue, Business Park<br />
                  Bengaluru, Karnataka 560001
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR: Copyright & Legal */}
        <div className="border-t border-[var(--primary-white)]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-[var(--primary-white)]/40">
          <p>© {new Date().getFullYear()} CueClarity. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[var(--primary-white)] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[var(--primary-white)] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

// ---------------- SUBS ----------------

// Helper for navigation links
function FooterLink({ href, text }) {
  return (
    <Link 
      href={href} 
      className="text-[var(--primary-white)]/60 hover:text-[var(--primary-yellow)] hover:translate-x-1 transition-all duration-[var(--transition-fast)] text-sm font-medium w-fit"
    >
      {text}
    </Link>
  );
}

// Helper for social media icons
function SocialLink({ href, icon }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-[var(--primary-white)]/5 border border-[var(--primary-white)]/10 flex items-center justify-center text-[var(--primary-white)]/80 hover:bg-[var(--primary-yellow)] hover:text-[var(--primary-black)] hover:border-[var(--primary-yellow)] hover:-translate-y-1 transition-all duration-[var(--transition-base)]"
    >
      {icon}
    </a>
  );
}