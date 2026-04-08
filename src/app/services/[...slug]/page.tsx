import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import RelatedServices from "@/components/services/RelatedServices";
import SectionRenderer from "@/components/services/SectionRenderer";
import {
  getServicePage,
  getAllServiceSlugs,
  type ServicePageData,
  type HeroSection,
  type FAQSection,
  type StatsSection,
  type ProcessSection,
  type ServiceSection,
} from "@/lib/data/services";

export const dynamic = "force-static";
export const dynamicParams = false;

const BASE_URL = "https://cueclarity.com";

// ── Helpers to extract data from sections ────────────────────────────────────

function findSection<T extends ServiceSection>(
  sections: ServiceSection[],
  type: T["type"],
): T | undefined {
  return sections.find((s) => s.type === type) as T | undefined;
}

function findAllSections<T extends ServiceSection>(
  sections: ServiceSection[],
  type: T["type"],
): T[] {
  return sections.filter((s) => s.type === type) as T[];
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "");
}

// ── Static generation ─────────────────────────────────────────────────────────

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug: [slug] }));
}

// ── Metadata ──────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const slugStr = slug.join("/");
  const page = getServicePage(slugStr);

  if (!page) return {};

  const hero = findSection<HeroSection>(page.sections, "hero");
  const pageUrl = `${BASE_URL}/services/${page.slug}`;
  const ogImage = hero?.image;

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    ...(page.keywords && { keywords: page.keywords }),
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: pageUrl,
      type: "website",
      siteName: "CueClarity",
      locale: "en_IN",
      ...(ogImage && {
        images: [
          {
            url: ogImage,
            width: 1200,
            height: 630,
            alt: `${page.title} — CueClarity`,
          },
        ],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
      ...(ogImage && { images: [ogImage] }),
    },
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  };
}

// ── JSON-LD builders ─────────────────────────────────────────────────────────

function buildJsonLd(page: ServicePageData) {
  const hero = findSection<HeroSection>(page.sections, "hero");
  const faqSections = findAllSections<FAQSection>(page.sections, "faq");
  const statsSection = findSection<StatsSection>(page.sections, "stats");
  const processSection = findSection<ProcessSection>(page.sections, "process");

  const pageUrl = `${BASE_URL}/services/${page.slug}`;
  const schemas: Record<string, unknown>[] = [];

  // 1. Service schema
  const serviceSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.title,
    description: page.metaDescription,
    url: pageUrl,
    provider: {
      "@type": "Organization",
      name: "CueClarity",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo.png`,
      },
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
      },
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    serviceType: page.title,
  };

  if (hero?.image) {
    serviceSchema.image = hero.image;
  }

  if (hero?.description) {
    serviceSchema.slogan = stripHtml(hero.description);
  }

  // Add aggregate rating from stats if available
  if (statsSection) {
    const clientsStat = statsSection.stats.find(
      (s) =>
        s.label.toLowerCase().includes("guided") ||
        s.label.toLowerCase().includes("students") ||
        s.label.toLowerCase().includes("trained") ||
        s.label.toLowerCase().includes("impacted"),
    );
    const satisfactionStat = statsSection.stats.find(
      (s) =>
        s.label.toLowerCase().includes("confidence") ||
        s.label.toLowerCase().includes("satisfaction") ||
        s.label.toLowerCase().includes("recommend"),
    );

    if (clientsStat && satisfactionStat) {
      serviceSchema.aggregateRating = {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        bestRating: "5",
        ratingCount: clientsStat.value.replace(/,/g, ""),
      };
    }
  }

  // Add process as hasOfferCatalog
  if (processSection) {
    serviceSchema.hasOfferCatalog = {
      "@type": "OfferCatalog",
      name: stripHtml(processSection.headline),
      itemListElement: processSection.steps.map((step, i) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: step.title,
          description: step.description,
          position: i + 1,
        },
      })),
    };
  }

  schemas.push(serviceSchema);

  // 2. FAQPage schema (combine all FAQ sections)
  const allFaqs = faqSections.flatMap((s) => s.items);
  if (allFaqs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: allFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  // 3. BreadcrumbList
  schemas.push({
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
        name: "Services",
        item: `${BASE_URL}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: page.title,
        item: pageUrl,
      },
    ],
  });

  // 4. WebPage schema
  schemas.push({
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.metaTitle,
    description: page.metaDescription,
    url: pageUrl,
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      name: "CueClarity",
      url: BASE_URL,
    },
    about: {
      "@type": "Thing",
      name: page.title,
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", "[aria-labelledby]"],
    },
  });

  return schemas;
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const slugStr = slug.join("/");
  const page = getServicePage(slugStr);

  if (!page) return notFound();

  const jsonLd = buildJsonLd(page);

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <Navbar />
      <main>
        <SectionRenderer sections={page.sections} />
        {page.relatedServices && page.relatedServices.length > 0 && (
          <RelatedServices services={page.relatedServices} />
        )}
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Services", href: "/services/career-counselling" },
            { name: page.title, href: `/services/${page.slug}` },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
