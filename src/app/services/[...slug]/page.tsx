import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import SectionRenderer from "@/components/services/SectionRenderer";
import { getServicePage, getAllServiceSlugs } from "@/lib/data/services";

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

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
    },
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
  const page = getServicePage(slugStr);

  if (!page) return notFound();

  return (
    <>
      <Navbar />
      <main>
        <SectionRenderer sections={page.sections} />
      </main>
      <Footer />
    </>
  );
}
