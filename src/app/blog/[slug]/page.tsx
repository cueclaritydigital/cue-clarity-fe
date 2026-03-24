import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/common/Navbar";
import { POSTS, getPostBySlug, getRelatedPosts } from "@/lib/data/blog";
import ArticleContent from "@/components/blog/ArticleContent";
import AuthorCard from "@/components/blog/AuthorCard";
import RelatedPosts from "@/components/blog/RelatedPosts";
import FloatingShare from "@/components/blog/FloatingShare";
import Footer from "@/components/common/Footer";

/* ── Static params for build-time generation ── */
export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

/* ── Dynamic metadata ── */
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} | CueClarity Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: [
        { url: post.image, width: 1200, height: 630, alt: post.imageAlt },
      ],
    },
    twitter: { card: "summary_large_image" },
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

/* ── Page ── */
export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);

  return (
    <>
      <Navbar />
      {/* Article section */}
      <section
        className="px-4 pt-10 sm:px-6"
        style={{ backgroundColor: "var(--primary-white)" }}
      >
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-[56px_1fr_340px] gap-8 lg:gap-10">
            {/* Floating share bar (desktop) */}
            <FloatingShare />

            {/* Main article */}
            <div>
              <ArticleContent post={post} />
              <AuthorCard />
            </div>

            {/* Sidebar (reuse listing sidebar on single post too) */}
            <aside className="hidden lg:block">
              <div className="sticky top-32 space-y-8">
                {/* Table of Contents placeholder */}
                <div
                  className="p-6 rounded-xl"
                  style={{ backgroundColor: "var(--secondary-white)" }}
                >
                  <h3
                    className="font-extrabold text-sm uppercase tracking-widest mb-4"
                    style={{ color: "var(--primary-blue)" }}
                  >
                    In This Article
                  </h3>
                  <ul
                    className="space-y-2 text-sm"
                    style={{ color: "var(--muted-text)" }}
                  >
                    <li className="hover:text-[var(--primary-blue)] cursor-pointer transition-colors">
                      Why This Matters
                    </li>
                    <li className="hover:text-[var(--primary-blue)] cursor-pointer transition-colors">
                      The Framework
                    </li>
                    <li className="hover:text-[var(--primary-blue)] cursor-pointer transition-colors">
                      Key Takeaways
                    </li>
                  </ul>
                </div>

                {/* Quick CTA */}
                <div
                  className="p-6 rounded-xl"
                  style={{
                    backgroundColor: "var(--primary-blue)",
                    boxShadow: "var(--shadow-glow-blue)",
                  }}
                >
                  <h3
                    className="font-extrabold text-base mb-2"
                    style={{ color: "var(--primary-white)" }}
                  >
                    Need Guidance?
                  </h3>
                  <p
                    className="text-xs mb-4"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    Book a free 15-minute clarity call with our expert
                    counsellors.
                  </p>
                  <a
                    href="#rfq"
                    className="block text-center py-2.5 rounded-lg font-extrabold text-sm"
                    style={{
                      backgroundColor: "var(--primary-yellow)",
                      color: "var(--primary-black)",
                    }}
                  >
                    Book Free Call
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <RelatedPosts posts={related} />

      <Footer />
    </>
  );
}
