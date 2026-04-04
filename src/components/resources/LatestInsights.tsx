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
      className="py-24 px-4 sm:px-6 bg-gray-50/80"
      aria-labelledby="insights-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <FadeInView>
          <div className="flex items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-4 mb-3">
                <span className="w-12 h-[2px] bg-yellow-400" />
                <span className="text-yellow-500 text-base font-bold tracking-widest uppercase">
                  Articles & Insights
                </span>
              </div>
              <h2
                id="insights-heading"
                className="heading-font text-[var(--primary-blue)] text-4xl sm:text-5xl lg:text-6xl"
              >
                Latest from the Blog
              </h2>
            </div>
            <Link
              href="/blog"
              className="hidden sm:inline-flex items-center gap-2 font-bold text-sm text-blue-950 shrink-0 hover:gap-3 transition-all duration-200"
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
              className="group lg:col-span-7 relative rounded-3xl overflow-hidden flex flex-col shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
              style={{ minHeight: "440px" }}
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
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/30 to-transparent" />

                {/* Featured badge */}
                <div className="absolute top-5 left-5">
                  <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full bg-yellow-400 text-blue-950">
                    Featured
                  </span>
                </div>

                {/* Arrow icon on hover */}
                <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="w-9 h-9 rounded-full flex items-center justify-center bg-yellow-400">
                    <FiArrowUpRight size={16} className="text-blue-950" />
                  </span>
                </div>

                {/* Text overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <span className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-2 block">
                    {featured.category}
                  </span>
                  <h3 className="heading-font text-white text-xl sm:text-2xl leading-snug mb-3">
                    {featured.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <FiClock size={12} className="text-white/50" />
                    <span className="text-xs text-white/50">
                      {featured.readTime}
                    </span>
                    <span className="text-xs text-white/30">
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
            className="inline-flex items-center gap-2 font-bold text-sm text-blue-950"
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
      className="group flex items-center gap-4 bg-white/70 backdrop-blur-xl border border-gray-100 rounded-2xl p-4 shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:border-gray-200 hover:-translate-y-0.5 transition-all duration-200"
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
        <span className="text-yellow-500 text-xs font-bold tracking-widest uppercase block mb-1">
          {post.category}
        </span>
        <p className="font-bold text-sm text-blue-950 leading-snug line-clamp-2 group-hover:text-[var(--primary-blue)] transition-colors">
          {post.title}
        </p>
        <div className="flex items-center gap-2 mt-1.5">
          <FiClock size={10} className="text-gray-400" />
          <span className="text-xs text-gray-400">{post.readTime}</span>
        </div>
      </div>

      <FiArrowUpRight
        size={16}
        className="shrink-0 text-blue-950 opacity-0 group-hover:opacity-100 transition-opacity"
      />
    </Link>
  );
}
