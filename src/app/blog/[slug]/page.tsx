import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/common/Navbar";
import { POSTS, getPostBySlug, getRelatedPosts } from "@/lib/data/blog";
import ArticleContent from "@/components/blog/ArticleContent";
import AuthorCard from "@/components/blog/AuthorCard";
import InlineCTA from "@/components/blog/InlineCTA";
import RelatedPosts from "@/components/blog/RelatedPosts";
import FloatingShare from "@/components/blog/FloatingShare";
import Footer from "@/components/common/Footer";

/* ── Static params for build-time generation ── */
export const dynamicParams = true;

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

/* ── Dynamic metadata ── */
type Props = { params: Promise<{ slug: string }> };

const CATEGORY_KEYWORDS: Record<string, string[]> = {
  "Career Planning": [
    "career planning India",
    "career roadmap",
    "career guidance India",
    "career counselling tips",
  ],
  "Study Abroad": [
    "study abroad India",
    "international education",
    "university abroad guidance",
    "study abroad counselling",
  ],
  Assessment: [
    "psychometric test India",
    "career aptitude test",
    "career assessment India",
    "stream selection test",
  ],
  "For Parents": [
    "career counselling for parents India",
    "stream selection for child",
    "parent career guidance",
  ],
  Trends: ["career trends India", "future careers India", "emerging careers"],
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const categoryKeywords = CATEGORY_KEYWORDS[post.category] ?? [
    "career counselling India",
    "career guidance",
  ];

  return {
    title: `${post.title} | CueClarity Blog`,
    description: post.excerpt,
    keywords: [...categoryKeywords, post.category.toLowerCase(), "CueClarity"],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `https://cueclarity.com/blog/${post.slug}`,
      siteName: "CueClarity",
      locale: "en_IN",
      images: [
        { url: post.image, width: 1200, height: 630, alt: post.imageAlt },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
    alternates: { canonical: `https://cueclarity.com/blog/${post.slug}` },
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  };
}

/* ── Page ── */
const BASE_URL = "https://cueclarity.com";

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: "Sunil Kumar Panda",
      url: `${BASE_URL}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: "CueClarity",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Navbar />
      {/* Article section */}
      <section className="relative py-16 px-4 sm:px-6 overflow-hidden  bg-[var(--primary-white)] ">
        {/* Background glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-80px] right-[-60px] w-[550px] h-[550px] bg-yellow-200/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-40px] left-[-40px] w-[400px] h-[400px] bg-blue-200/15 blur-[120px] rounded-full" />
        </div>
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-200/10 blur-[140px] rounded-full pointer-events-none" />
        <div className="relative max-w-6xl mx-auto z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 lg:gap-10">
            {/* Main article */}
            <div>
              <ArticleContent post={post} />
              {post.relatedService && (
                <InlineCTA service={post.relatedService} />
              )}
              <AuthorCard />
            </div>

            {/* Sidebar (reuse listing sidebar on single post too) */}
            <aside className="hidden lg:block">
              <div className="sticky space-y-8">
                {/* Table of Contents placeholder */}
                <div className="p-6 rounded-2xl bg-gray-50/80 border border-gray-100">
                  <h3 className="font-extrabold text-xs uppercase tracking-widest mb-4 text-blue-950">
                    In This Article
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="hover:text-blue-950 cursor-pointer transition-colors">
                      Why This Matters
                    </li>
                    <li className="hover:text-blue-950 cursor-pointer transition-colors">
                      The Framework
                    </li>
                    <li className="hover:text-blue-950 cursor-pointer transition-colors">
                      Key Takeaways
                    </li>
                  </ul>
                </div>

                {/* Quick CTA */}
                <div className="relative p-6 rounded-2xl bg-blue-950 overflow-hidden">
                  <div className="absolute top-[-40px] right-[-40px] w-32 h-32 bg-yellow-400/10 blur-[60px] rounded-full pointer-events-none" />
                  <h3 className="relative font-extrabold text-base mb-2 text-white">
                    Need Guidance?
                  </h3>
                  <p className="relative text-xs mb-4 text-white/60">
                    Book a free 15-minute clarity call with our expert
                    counsellors.
                  </p>
                  <a
                    href="#rfq"
                    className="relative block text-center py-2.5 rounded-xl font-extrabold text-sm bg-yellow-400 text-blue-950 hover:bg-yellow-300 transition-colors"
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
