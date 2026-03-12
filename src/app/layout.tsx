import type { Metadata } from 'next';
import { Oswald, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '../components/common/Navbar';

// ── DISPLAY FONT: Oswald ──────────────────────────────────────────────────────
// Bold, condensed — authoritative. Perfect for hero headings and section titles.
const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

// ── BODY FONT: Plus Jakarta Sans ──────────────────────────────────────────────
// Geometric, humanist sans-serif — modern yet warm. Excellent readability at all
// sizes. Trusted by top-tier SaaS, edutech, and professional services brands.
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Cue Clarity | Expert Career Counseling for Students & Professionals',
  description:
    'Discover the right career path with expert mentors. Cue Clarity helps students, parents, and professionals unlock global opportunities through personalized guidance.',
  keywords: ['career counseling', 'student mentoring', 'college guidance', 'international education'],
  openGraph: {
    title: 'Cue Clarity — Find Your Direction',
    description: 'Expert career counseling that transforms uncertainty into clarity.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${jakarta.variable}`}
    >
      {/*
        font-[family-name:var(--font-jakarta)] sets Plus Jakarta Sans as the
        default body typeface globally. Headings override via font-[family-name:var(--font-oswald)].
      */}
      <body
        className="font-[family-name:var(--font-jakarta)] antialiased"
        style={{
          color: 'var(--primary-black)',
          backgroundColor: 'var(--primary-white)',
          lineHeight: 'var(--leading-normal)',
        }}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
