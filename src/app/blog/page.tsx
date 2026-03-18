import type { Metadata } from "next";
import FeaturedHero from "@/components/blog/FeaturedHero";
import PostGrid from "@/components/blog/PostGrid";
import BlogSidebar from "@/components/blog/BlogSidebar";
import RFQ from "@/components/common/RFQ";
import Footer from "@/components/common/Footer";
import { POSTS } from "@/lib/data/blog";

export const metadata: Metadata = {
  title: "Blog & Insights | CueClarity — Career Guidance Articles",
  description:
    "Career tips, education trends, and expert insights from CueClarity counsellors. Explore articles on career planning, study abroad, and personal growth.",
  openGraph: {
    title: "CueClarity Blog — Career Insights",
    description:
      "Expert articles on career planning, education trends and personal growth.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/blog" },
};

export default function Blog() {
  const nonFeatured = POSTS.filter((p) => !p.featured);

  return (
    <>
      <FeaturedHero />
      {/* ── Main content + sidebar ── */}
      <section
        className="section-padding px-4 sm:px-6"
        style={{ backgroundColor: "var(--primary-white)" }}
      >
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 lg:gap-14">
            <PostGrid posts={nonFeatured} />
            <BlogSidebar />
          </div>
        </div>
      </section>

      <RFQ />
      <Footer />
    </>
  );
}
