import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import ContactSection from "@/components/common/ContactSection";
import BlockRenderer from "@/components/services/BlockRenderer";
import { client } from "@/sanity/lib/client";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { servicePageQuery } from "@/sanity/queries";

export const dynamic = "force-dynamic";

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
    console.log("page: ", page);
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
                  {
                    url: openGraphImage.asset.url,
                    alt: openGraphImage.alt ?? "",
                  },
                ],
              }
            : {}),
        },
      };
    }
  } catch {
    /* fall through */
  }

  return {};
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
        <ContactSection />
        <Footer />
        <SanityLive />
      </>
    );
  }
  return notFound();
}
