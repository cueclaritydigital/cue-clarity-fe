import type { Metadata } from "next";
import { Suspense, lazy } from "react";
import Navbar from "@/components/common/Navbar";
import { PROGRAMS, WEBINARS, PROGRAM_FAQS } from "@/lib/data/programs";
import { WRITTEN_STORIES } from "@/lib/data/success-stories";

import HeroPrograms from "@/components/programs/HeroPrograms";

const FeaturedPrograms = lazy(
  () => import("@/components/programs/FeaturedPrograms"),
);
const WhyChooseUs = lazy(() => import("@/components/programs/WhyChooseUs"));
const WebinarShowcase = lazy(
  () => import("@/components/programs/WebinarShowcase"),
);
const WrittenStories = lazy(() => import("@/components/common/WrittenStories"));
const PartnersCarousel = lazy(
  () => import("@/components/home/PartnersCarousel"),
);
const FAQ = lazy(() => import("@/components/home/FAQ"));
const RFQ = lazy(() => import("@/components/common/RFQ"));
const Footer = lazy(() => import("@/components/common/Footer"));

export const dynamic = "force-static";

/* ── SEO Metadata ─────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Career Assessment Programs & Webinars",
  description:
    "Explore CueClarity's science-backed career assessment programs, expert-led counselling courses, and transformative webinars for students, parents, and working professionals. Psychometric testing, personalised career roadmaps, and 1-on-1 mentorship.",
  keywords: [
    "career assessment program",
    "psychometric test for students",
    "career counselling course",
    "career guidance webinar",
    "career aptitude test",
    "student career planning",
    "career transition program",
    "parent career guidance workshop",
    "career discovery assessment",
    "online career counselling India",
    "college career readiness",
    "professional career coaching",
    "career roadmap program India",
    "career assessment Mumbai",
    "career assessment Bangalore",
    "career assessment Pune",
    "psychometric test India",
  ],
  openGraph: {
    title: "Career Assessment Programs & Webinars | CueClarity",
    description:
      "Science-backed career assessments, expert counselling programs, and transformative webinars. Find your clarity path with CueClarity.",
    type: "website",
    url: "https://cueclarity.com/programs",
    siteName: "CueClarity",
    locale: "en_IN",
    images: [
      {
        url: "https://res.cloudinary.com/dcudnuu04/image/upload/v1774113768/Gemini_Generated_Image_x5p1efx5p1efx5p1_ecqkqq.webp",
        width: 1200,
        height: 630,
        alt: "CueClarity career assessment program session with students exploring career paths",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Career Assessment Programs & Webinars | CueClarity",
    description:
      "Science-backed career assessments and expert counselling for students, parents, and professionals.",
    images: [
      "https://res.cloudinary.com/dcudnuu04/image/upload/v1774113768/Gemini_Generated_Image_x5p1efx5p1efx5p1_ecqkqq.webp",
    ],
  },
  alternates: {
    canonical: "https://cueclarity.com/programs",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
};

/* ── JSON-LD Structured Data ──────────────────────────────────────── */
const programsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "CueClarity Career Programs",
  description:
    "Science-backed career assessment programs for students, parents, and working professionals.",
  numberOfItems: PROGRAMS.length,
  itemListElement: PROGRAMS.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Course",
      name: p.title,
      description: p.description,
      provider: {
        "@type": "Organization",
        name: "CueClarity",
        url: "https://cueclarity.com",
      },
      audience: {
        "@type": "Audience",
        audienceType: p.audience,
      },
      timeRequired: p.duration,
      courseMode: p.format,
      offers: {
        "@type": "Offer",
        price: p.price,
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
      },
    },
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: PROGRAM_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const webinarSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "CueClarity Career Webinars",
  itemListElement: WEBINARS.map((w, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Event",
      name: w.title,
      description: w.description,
      eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
      organizer: {
        "@type": "Organization",
        name: "CueClarity",
        url: "https://cueclarity.com",
      },
    },
  })),
};

/* ── Page Component ───────────────────────────────────────────────── */
export default function ProgramsPage() {
  return (
    <>
      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([programsSchema, faqSchema, webinarSchema]),
        }}
      />

      <Navbar />
      <HeroPrograms />

      <Suspense fallback={null}>
        <FeaturedPrograms programs={PROGRAMS} />
        <WhyChooseUs />
        <WebinarShowcase webinars={WEBINARS} />
        <WrittenStories
          stories={WRITTEN_STORIES}
          eyebrow="Success Stories"
          heading="Don't Take Our Word."
          headingAccent="Take Theirs."
          subtitle="Real results from students, parents, and professionals who invested in clarity — and transformed their careers."
        />
        <PartnersCarousel />
        <FAQ />
        <RFQ />
        <Footer />
      </Suspense>
    </>
  );
}
