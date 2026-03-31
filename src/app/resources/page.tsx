import type { Metadata } from "next";
import Navbar from "@/components/common/Navbar";
import HeroResources from "@/components/resources/HeroResources";
import LatestInsights from "@/components/resources/LatestInsights";
import EbooksSection from "@/components/resources/EbooksSection";
import VideoInsights from "@/components/resources/VideoInsights";
import GallerySection from "@/components/resources/GallerySection";
import ContactSection from "@/components/common/ContactSection";
import Footer from "@/components/common/Footer";
import { EBOOKS, RESOURCE_VIDEOS } from "@/lib/data/resources";

/* ── SEO Metadata ─────────────────────────────────────────────────── */
const BASE_URL = "https://cueclarity.com";

export const metadata: Metadata = {
  title:
    "Free Career Resources — E-books, Videos, Articles & Guides | CueClarity",
  description:
    "Download free career e-books, watch expert counselling videos, read science-backed articles, and explore our gallery of real sessions. India's most trusted career counselling resource hub.",
  keywords: [
    "free career counselling resources",
    "career guide PDF free download",
    "career assessment e-book",
    "career planning videos India",
    "study abroad tips and guides",
    "career counselling videos YouTube",
    "psychometric assessment guide",
    "career after 12th resources",
    "career transition guide for professionals",
    "CueClarity free resources",
    "career clarity playbook",
    "best career counselling blog India",
  ],
  alternates: {
    canonical: `${BASE_URL}/resources`,
  },
  openGraph: {
    title:
      "Free Career Resources — E-books, Videos & Expert Articles | CueClarity",
    description:
      "Download free career guides, watch expert YouTube videos, and read science-backed articles — everything you need for a confident career decision, in one place.",
    type: "website",
    url: `${BASE_URL}/resources`,
    siteName: "CueClarity",
    locale: "en_IN",
    images: [
      {
        url: "https://res.cloudinary.com/dcudnuu04/image/upload/v1773931237/Gemini_Generated_Image_943jxg943jxg943j_sbdoen.webp",
        width: 1200,
        height: 630,
        alt: "CueClarity Career Resources Hub — Free E-books, Videos & Guides",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Career Resources | CueClarity",
    description:
      "Free career guides, e-books, YouTube videos, and expert articles — all in one place.",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

/* ── Structured Data (JSON-LD) ────────────────────────────────────── */

const collectionPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Free Career Resources — E-books, Videos, Articles & Guides",
  description:
    "Download free career e-books, watch expert counselling videos, read science-backed articles, and explore our gallery of real sessions.",
  url: `${BASE_URL}/resources`,
  inLanguage: "en",
  isPartOf: {
    "@type": "WebSite",
    name: "CueClarity",
    url: BASE_URL,
  },
  publisher: {
    "@type": "Organization",
    name: "CueClarity",
    url: BASE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/logo.png`,
    },
  },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Career Articles & Insights",
        url: `${BASE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Free Career E-books & Guides",
        url: `${BASE_URL}/resources#ebooks`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Career Counselling Videos",
        url: `${BASE_URL}/resources#videos`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Counselling Gallery",
        url: `${BASE_URL}/resources#gallery`,
      },
    ],
  },
};

const ebookSchemas = EBOOKS.map((book) => ({
  "@context": "https://schema.org",
  "@type": "Book",
  name: book.title,
  description: book.description,
  author: {
    "@type": "Organization",
    name: "CueClarity",
  },
  publisher: {
    "@type": "Organization",
    name: "CueClarity",
    url: BASE_URL,
  },
  inLanguage: "en",
  isAccessibleForFree: true,
  genre: "Career Counselling",
  bookEdition: book.edition,
}));

const videoSchemas = RESOURCE_VIDEOS.map((video) => ({
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: video.title,
  description: video.subtitle,
  thumbnailUrl: video.thumbnail,
  uploadDate: "2025-01-01T00:00:00+05:30",
  contentUrl: `https://www.youtube.com/watch?v=${video.youtubeId}`,
  embedUrl: `https://www.youtube.com/embed/${video.youtubeId}`,
  duration: `PT${video.duration.replace(":", "M")}S`,
  publisher: {
    "@type": "Organization",
    name: "CueClarity",
    url: BASE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/logo.png`,
    },
  },
}));

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: BASE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Resources",
      item: `${BASE_URL}/resources`,
    },
  ],
};

/* ── Page Component ───────────────────────────────────────────────── */
export default function ResourcesPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            collectionPageSchema,
            ...ebookSchemas,
            ...videoSchemas,
            breadcrumbSchema,
          ]),
        }}
      />

      <Navbar />
      <main>
        <HeroResources />
        <LatestInsights />
        <EbooksSection />
        <VideoInsights />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
