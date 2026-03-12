import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getWhatsAppURL } from '@/lib/whatsapp';
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
      
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--primary-blue)] opacity-[0.05] blur-[100px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 animate-fade-in-up">
          
          {/* 1. Brand & Mission */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Link href="/" className="inline-block">
              <Image 
                src="https://cueclarity.com/wp-content/uploads/2025/05/cropped-Artboard-1-copy-5@3x-scaled-1.png" 
                alt="Cue Clarity Logo" 
                width={160}
                height={40}
                className="h-10 w-auto brightness-0 invert opacity-90"
              />
            </Link>
            <p className="type-body text-[var(--primary-white)]/60 max-w-sm">
              Empowering students and professionals to stop guessing and start growing. 
              Data-backed career counseling for a rapidly changing world.
            </p>
            
            {/* WhatsApp CTA in Footer */}
            <a
              href={getWhatsAppURL('general', 'footer')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-fit text-sm"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Chat on WhatsApp
            </a>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-2">
              <SocialLink href="#" icon={<FiLinkedin size={20} />} label="LinkedIn" />
              <SocialLink href="#" icon={<FiInstagram size={20} />} label="Instagram" />
              <SocialLink href="#" icon={<FiTwitter size={20} />} label="Twitter" />
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
                <a href="tel:+918652222525" className="hover:text-[var(--primary-white)] transition-colors">
                  +91 8652 222 525
                </a>
              </div>
              <div className="flex items-start gap-3 text-[var(--primary-white)]/60 group">
                <FiMapPin className="mt-1 text-[var(--primary-yellow)] shrink-0 group-hover:scale-110 transition-transform" />
                <span className="leading-relaxed">
                  Mumbai, Maharashtra<br />
                  India
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-[var(--primary-white)]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-[var(--primary-white)]/40">
          <p>&copy; {new Date().getFullYear()} CueClarity. All rights reserved.</p>
          
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

function FooterLink({ href, text }: { href: string; text: string }) {
  return (
    <Link 
      href={href} 
      className="text-[var(--primary-white)]/60 hover:text-[var(--primary-yellow)] hover:translate-x-1 transition-all duration-[var(--transition-fast)] text-sm font-medium w-fit"
    >
      {text}
    </Link>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 rounded-full bg-[var(--primary-white)]/5 border border-[var(--primary-white)]/10 flex items-center justify-center text-[var(--primary-white)]/80 hover:bg-[var(--primary-yellow)] hover:text-[var(--primary-black)] hover:border-[var(--primary-yellow)] hover:-translate-y-1 transition-all duration-[var(--transition-base)]"
    >
      {icon}
    </a>
  );
}