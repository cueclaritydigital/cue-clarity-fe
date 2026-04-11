import type { Metadata } from "next";
import Navbar from "@/components/common/Navbar";
import FeaturedHero from "@/components/blog/FeaturedHero";
import PostGrid from "@/components/blog/PostGrid";
import BlogSidebar from "@/components/blog/BlogSidebar";
import Footer from "@/components/common/Footer";
import { POSTS } from "@/lib/data/blog";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Blog & Insights | CueClarity — Career Guidance Articles",
  description:
    "Career tips, education trends, and expert insights from CueClarity counsellors. Explore articles on career planning, study abroad, and personal growth.",
  keywords: [
    "career guidance blog India",
    "career planning articles",
    "career counselling insights",
    "stream selection guide",
    "career roadmap blog",
    "study abroad tips India",
    "education trends India",
    "career advice for students India",
    "psychometric test guide",
  ],
  openGraph: {
    title: "CueClarity Blog — Career Insights & Guidance",
    description:
      "Expert articles on career planning, stream selection, study abroad, and personal growth — written by India's top career counsellors.",
    type: "website",
    url: "https://cueclarity.com/blog",
    siteName: "CueClarity",
    locale: "en_IN",
    images: [
      {
        url: "https://res.cloudinary.com/dcudnuu04/image/upload/v1773931237/Gemini_Generated_Image_943jxg943jxg943j_sbdoen.webp",
        width: 1200,
        height: 630,
        alt: "CueClarity Blog — Career Guidance Articles & Insights for Students",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CueClarity Blog — Career Insights & Guidance",
    description:
      "Expert articles on career planning, stream selection, study abroad, and personal growth.",
    images: [
      "https://res.cloudinary.com/dcudnuu04/image/upload/v1773931237/Gemini_Generated_Image_943jxg943jxg943j_sbdoen.webp",
    ],
  },
  alternates: { canonical: "https://cueclarity.com/blog" },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
};

export default function Blog() {
  const nonFeatured = POSTS.filter((p) => !p.featured);

  return (
    <>
      <Navbar />
      <FeaturedHero />
      {/* ── Main content + sidebar ── */}
      <section className="py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 lg:gap-14">
            <PostGrid posts={nonFeatured} />
            <BlogSidebar />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
