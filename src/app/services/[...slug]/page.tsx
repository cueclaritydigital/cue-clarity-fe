import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import RFQ from "@/components/common/RFQ";
import ContactSection from "@/components/common/ContactSection";
import BlockRenderer from "@/components/services/BlockRenderer";
import { client } from "@/sanity/lib/client";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import {
  servicePageQuery,
  allServiceSlugsQuery,
} from "@/sanity/queries";

// Force dynamic rendering — disables SSG so every request fetches fresh Sanity data.
// Re-enable generateStaticParams below once page building is complete.
export const dynamic = "force-dynamic";

// ── Data map ─────────────────────────────────────────────────────────────────

interface AudienceCard {
  title: string;
  desc: string;
  href: string;
}

interface ServiceData {
  metaTitle: string;
  metaDesc: string;
  eyebrow: string;
  h1Lines: string[];
  body: string;
  contactSection?: boolean;
  audienceCards?: AudienceCard[];
}

const SERVICE_DATA: Record<string, ServiceData> = {
  "career-counselling": {
    metaTitle: "Career Counselling & Guidance | CueClarity",
    metaDesc:
      "Personalised career counselling for students, graduates and professionals. Psychometric assessments, one-on-one mentoring, and roadmaps for every life stage.",
    eyebrow: "Services",
    h1Lines: ["Career Counselling", "& Guidance"],
    body: "Whether you're in 8th grade or mid-career, our expert counsellors build a personalised roadmap so every next step is made with clarity and confidence.",
    contactSection: true,
    audienceCards: [
      {
        title: "Students — 8th, 9th & 10th",
        desc: "Stream & subject clarity before boards",
        href: "/services/career-counselling/students/school",
      },
      {
        title: "After 10th & 12th",
        desc: "College, courses & entrance exam guidance",
        href: "/services/career-counselling/students/post-board",
      },
      {
        title: "Graduates",
        desc: "PG options, job readiness & career pivots",
        href: "/services/career-counselling/graduates",
      },
      {
        title: "Professionals",
        desc: "Mid-career transitions & executive coaching",
        href: "/services/career-counselling/professionals",
      },
    ],
  },

  "career-counselling/students/school": {
    metaTitle: "Career Counselling for 8th, 9th & 10th Students | CueClarity",
    metaDesc:
      "Stream selection and subject clarity for school students in 8th, 9th and 10th grade. Expert guidance before boards so every choice is the right one.",
    eyebrow: "Career Counselling",
    h1Lines: ["Students —", "8th, 9th & 10th"],
    body: "Stream & subject clarity before boards — helping young students make informed choices with confidence backed by expert guidance and psychometric assessments.",
  },

  "career-counselling/students/post-board": {
    metaTitle: "Career Guidance After 10th & 12th | CueClarity",
    metaDesc:
      "College, course and entrance exam guidance for students after 10th and 12th. Find the right path with expert counsellors at CueClarity.",
    eyebrow: "Career Counselling",
    h1Lines: ["After 10th", "& 12th"],
    body: "College, courses & entrance exam guidance — navigate the most important crossroads of your academic journey with a clear, personalised plan.",
  },

  "career-counselling/graduates": {
    metaTitle: "Career Counselling for Graduates | CueClarity",
    metaDesc:
      "PG options, job readiness and career pivot guidance for graduates. Expert one-on-one counselling to help you land the right role or course.",
    eyebrow: "Career Counselling",
    h1Lines: ["Graduates"],
    body: "PG options, job readiness & career pivots — whether you're stepping into the workforce or exploring higher studies, we map the best route forward.",
  },

  "career-counselling/professionals": {
    metaTitle: "Career Counselling for Professionals | CueClarity",
    metaDesc:
      "Mid-career transitions and executive coaching for working professionals. Clarify your next move with expert guidance from CueClarity.",
    eyebrow: "Career Counselling",
    h1Lines: ["Professionals"],
    body: "Mid-career transitions & executive coaching — gain clarity on your next career chapter with data-driven assessments and seasoned expert mentors.",
  },

  "international-education": {
    metaTitle: "International Education Guidance | CueClarity",
    metaDesc:
      "Profile building, university shortlisting, SOP writing and application support for students targeting global universities. Expert international education counselling.",
    eyebrow: "Services",
    h1Lines: ["International", "Education"],
    body: "Profile building for global universities — shortlisting, SOP writing, application guidance and visa support to help you earn your place at the world's best institutions.",
  },

  "beyond-school-life-skills": {
    metaTitle: "Beyond School & Life Skills | CueClarity",
    metaDesc:
      "Real-world readiness programs for students and young adults — communication, leadership, financial literacy and more. Prepare for life beyond academics.",
    eyebrow: "Services",
    h1Lines: ["Beyond School", "& Life Skills"],
    body: "Real-world readiness beyond academics — communication, leadership, financial literacy and interpersonal skills to thrive in every area of life.",
  },

  "mental-health-wellness": {
    metaTitle: "Mental Health & Wellness | CueClarity",
    metaDesc:
      "Holistic counselling for mind & balance — stress management, anxiety, burnout and emotional resilience support from qualified counsellors at CueClarity.",
    eyebrow: "Services",
    h1Lines: ["Mental Health", "& Wellness"],
    body: "Holistic counselling for mind & balance — professional, empathetic support for stress, anxiety, burnout and emotional resilience at every stage of life.",
  },

  "khud-ki-kahani": {
    metaTitle: "Khud Ki Kahani | CueClarity",
    metaDesc:
      "Own your narrative and shape your story. A transformative self-discovery program from CueClarity to recognise strengths, build confidence and write your own chapter.",
    eyebrow: "Services",
    h1Lines: ["Khud Ki Kahani"],
    body: "Own your narrative and shape your story — a transformative self-discovery journey to recognise your strengths, build deep confidence and write your own chapter.",
  },

  "industrial-training": {
    metaTitle: "Industrial Training | CueClarity",
    metaDesc:
      "Hands-on industrial training programs with industry experts. Job-ready skills through real-world immersion designed for students and fresh graduates.",
    eyebrow: "Services",
    h1Lines: ["Industrial", "Training"],
    body: "Hands-on programs with industry experts — real-world immersion that bridges the gap between classroom learning and what employers actually need.",
  },

  "workforce-development": {
    metaTitle: "Workforce Development | CueClarity",
    metaDesc:
      "Corporate upskilling, team assessments and leadership development programs for organisations. Partner with CueClarity to grow your workforce.",
    eyebrow: "Services",
    h1Lines: ["Workforce", "Development"],
    body: "Corporate upskilling & team progress — custom assessments, leadership programs and structured upskilling designed for organisations that invest in their people.",
  },
};

const HARDCODED_SLUGS = Object.keys(SERVICE_DATA);

// ── Static params (disabled while building pages in Sanity) ──────────────────
// Uncomment generateStaticParams once content is finalised to re-enable SSG.
//
// export async function generateStaticParams() {
//   const sanityPaths: string[] = [];
//   try {
//     const pages = await client.fetch<{ slug: string }[]>(allServiceSlugsQuery);
//     pages.forEach((p) => {
//       if (p.slug) sanityPaths.push(p.slug);
//     });
//   } catch {
//     // Sanity unreachable at build time — fall through to hardcoded
//   }
//   const all = Array.from(new Set([...HARDCODED_SLUGS, ...sanityPaths]));
//   return all.map((key) => ({ slug: key.split("/") }));
// }

// ── Metadata ──────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const slugStr = slug.join("/");

  // Try Sanity first
  try {
    const page = await client.fetch(servicePageQuery, { slug: slugStr });
    console.log('page: ', page);
    if (page?.seo) {
      const { metaTitle, metaDescription, openGraphImage } = page.seo;
      return {
        title: metaTitle ?? page.title,
        description: metaDescription,
        openGraph: {
          title: metaTitle ?? page.title,
          description: metaDescription,
          ...(openGraphImage?.asset?.url
            ? {
                images: [
                  { url: openGraphImage.asset.url, alt: openGraphImage.alt ?? "" },
                ],
              }
            : {}),
        },
      };
    }
  } catch {
    /* fall through */
  }

  // Fallback to static
  const data = SERVICE_DATA[slugStr];
  if (!data) return {};
  return {
    title: data.metaTitle,
    description: data.metaDesc,
    openGraph: { title: data.metaTitle, description: data.metaDesc },
  };
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const slugStr = slug.join("/");

  // Try Sanity-driven page first
  /* eslint-disable @typescript-eslint/no-explicit-any */
  let sanityPage: any = null;
  try {
    const { data } = await sanityFetch({
      query: servicePageQuery,
      params: { slug: slugStr },
    });
    sanityPage = data ?? null;
  } catch {
    /* fall through to static */
  }

  // If Sanity page has pageBuilder blocks → render dynamically
  if (
    sanityPage?.pageBuilder &&
    Array.isArray(sanityPage.pageBuilder) &&
    sanityPage.pageBuilder.length > 0
  ) {
    return (
      <>
        <Navbar />
        <main>
          <BlockRenderer blocks={sanityPage.pageBuilder} />
        </main>
        <RFQ />
        <ContactSection />
        <Footer />
        <SanityLive />
      </>
    );
  }

  // Fallback: static hardcoded page
  const data = SERVICE_DATA[slugStr];
  console.log('data: ', data);
  if (!data) notFound();

  return (
    <>
      <Navbar />
      {/* ── HERO ── */}
      <section className="section-padding px-4 sm:px-6 bg-[var(--primary-black)] text-[var(--primary-white)] relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[var(--primary-yellow)] opacity-[0.04] blur-[100px] rounded-full pointer-events-none translate-x-1/4 translate-y-1/4"
        />
        <div className="section-container relative z-10 max-w-3xl">
          <span className="type-eyebrow text-[var(--primary-yellow)] mb-4 block">
            {data.eyebrow}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight leading-[1.05] font-oswald">
            {data.h1Lines.map((line, i) => (
              <span key={i}>
                {line}
                {i < data.h1Lines.length - 1 && <br />}
              </span>
            ))}
          </h1>
          <p className="mt-6 text-lg text-[var(--primary-white)]/70 leading-relaxed">
            {data.body}
          </p>
        </div>
      </section>

      {/* ── AUDIENCE CARDS — career-counselling only ── */}
      {data.audienceCards && (
        <section className="section-padding px-4 sm:px-6 bg-[var(--primary-white)]">
          <div className="section-container">
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[var(--primary-black)] font-oswald mb-10">
              Who We Help
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.audienceCards.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex flex-col gap-3 p-6 rounded-2xl border border-[var(--secondary-white)] bg-[var(--secondary-white)]/40 hover:border-[var(--primary-blue)] hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
                >
                  <h3 className="font-bold text-base text-[var(--primary-black)] group-hover:text-[var(--primary-blue)] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--muted-text)]">
                    {item.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <RFQ />
      {data.contactSection && <ContactSection />}
      <Footer />
      <SanityLive />
    </>
  );
}
