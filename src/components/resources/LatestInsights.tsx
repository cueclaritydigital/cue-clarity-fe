import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiClock, FiArrowUpRight } from "react-icons/fi";
import FadeInView from "@/components/animate/FadeInView";
import { POSTS } from "@/lib/data/blog";

export default function LatestInsights() {
  const featured = POSTS.find((p) => p.featured) ?? POSTS[0];
  const rest = POSTS.filter((p) => p.slug !== featured.slug).slice(0, 4);

  return (
    <section
      className="section-padding px-4 sm:px-6"
      style={{ backgroundColor: "var(--secondary-white)" }}
      aria-labelledby="insights-heading"
    >
      <div className="section-container">
        {/* Header */}
        <FadeInView>
          <div className="flex items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-4 mb-3">
                <span className="w-12 h-[2px] bg-[var(--primary-yellow)]" />
                <span
                  className="type-eyebrow"
                  style={{
                    color: "var(--primary-yellow)",
                    fontSize: "var(--text-base)",
                  }}
                >
                  Articles & Insights
                </span>
              </div>
              <h2
                id="insights-heading"
                style={{
                  fontFamily: "var(--font-oswald)",
                  fontWeight: 800,
                  fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                  lineHeight: 0.95,
                  letterSpacing: "var(--tracking-tight)",
                  color: "var(--primary-blue)",
                  textTransform: "uppercase",
                }}
              >
                Latest from the Blog
              </h2>
            </div>
            <Link
              href="/blog"
              className="hidden sm:inline-flex items-center gap-2 font-bold shrink-0 hover:gap-3 transition-all duration-200"
              style={{
                fontSize: "var(--text-sm)",
                color: "var(--primary-blue)",
              }}
            >
              View All <FiArrowRight size={14} />
            </Link>
          </div>
        </FadeInView>

        {/* Bento layout: featured left + 4 cards right */}
        <FadeInView>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Featured post */}
            <Link
              href={`/blog/${featured.slug}`}
              className="group lg:col-span-7 relative rounded-[var(--radius-xl)] overflow-hidden flex flex-col"
              style={{
                boxShadow: "var(--shadow-lg)",
                minHeight: "440px",
              }}
              aria-label={`Read featured article: ${featured.title}`}
            >
              <div className="relative flex-1 min-h-[300px]">
                <Image
                  src={featured.image}
                  alt={featured.imageAlt}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-black)] via-[var(--primary-black)]/30 to-transparent" />

                {/* Featured badge */}
                <div className="absolute top-5 left-5">
                  <span
                    className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full"
                    style={{
                      backgroundColor: "var(--primary-yellow)",
                      color: "var(--primary-black)",
                    }}
                  >
                    Featured
                  </span>
                </div>

                {/* Arrow icon on hover */}
                <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span
                    className="w-9 h-9 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "var(--primary-yellow)" }}
                  >
                    <FiArrowUpRight
                      size={16}
                      style={{ color: "var(--primary-black)" }}
                    />
                  </span>
                </div>

                {/* Text overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <span
                    className="type-eyebrow mb-2 block"
                    style={{ color: "var(--primary-yellow)" }}
                  >
                    {featured.category}
                  </span>
                  <h3
                    className="font-bold text-[var(--primary-white)] leading-snug mb-3"
                    style={{
                      fontFamily: "var(--font-oswald)",
                      fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
                      letterSpacing: "var(--tracking-snug)",
                      textTransform: "uppercase",
                    }}
                  >
                    {featured.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <FiClock
                      size={12}
                      style={{ color: "rgba(253,251,237,0.5)" }}
                    />
                    <span
                      style={{
                        fontSize: "var(--text-xs)",
                        color: "rgba(253,251,237,0.5)",
                      }}
                    >
                      {featured.readTime}
                    </span>
                    <span
                      style={{
                        fontSize: "var(--text-xs)",
                        color: "rgba(253,251,237,0.3)",
                      }}
                    >
                      · {featured.date}
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Side card list */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {rest.map((post) => (
                <InsightCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </FadeInView>

        {/* Mobile view-all link */}
        <div className="sm:hidden mt-8 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-bold"
            style={{ fontSize: "var(--text-sm)", color: "var(--primary-blue)" }}
          >
            View All Articles <FiArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function InsightCard({ post }: { post: (typeof POSTS)[number] }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex items-center gap-4 bg-[var(--surface-card)] rounded-2xl p-4 border border-transparent hover:border-[rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-200"
      style={{ boxShadow: "var(--shadow-sm)" }}
      aria-label={`Read: ${post.title}`}
    >
      {/* Thumbnail */}
      <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          loading="lazy"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="80px"
        />
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <span
          className="type-eyebrow block mb-1"
          style={{ color: "var(--primary-yellow)" }}
        >
          {post.category}
        </span>
        <p
          className="font-bold leading-snug line-clamp-2 group-hover:text-[var(--primary-blue)] transition-colors"
          style={{
            fontSize: "var(--text-sm)",
            color: "var(--primary-black)",
          }}
        >
          {post.title}
        </p>
        <div className="flex items-center gap-2 mt-1.5">
          <FiClock size={10} style={{ color: "var(--muted-text)" }} />
          <span
            style={{ fontSize: "var(--text-xs)", color: "var(--muted-text)" }}
          >
            {post.readTime}
          </span>
        </div>
      </div>

      <FiArrowUpRight
        size={16}
        className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ color: "var(--primary-blue)" }}
      />
    </Link>
  );
}
