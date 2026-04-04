import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import FadeInView from "@/components/animate/FadeInView";
import { getFeaturedPost } from "@/lib/data/blog";

export default function FeaturedHero() {
  const post = getFeaturedPost();

  return (
    <section className="px-0 pt-0 lg:px-4 lg:pt-10 bg-[var(--primary-white)] lg:max-w-[1200px] mx-auto">
      <FadeInView>
        <Link
          href={`/blog/${post.slug}`}
          className="group relative block overflow-hidden lg:rounded-3xl h-[420px] sm:h-[480px] lg:h-[520px]"
        >
          {/* Background image */}
          <img
            src={post.image}
            alt={post.imageAlt}
            width={1200}
            height={520}
            loading="eager"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/50 to-transparent" />

          {/* Content */}
          <div className="relative z-10 h-full flex items-end p-6 sm:p-10 lg:p-14">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 rounded-md text-xs font-black uppercase tracking-widest mb-4 bg-yellow-400 text-blue-950">
                Featured Article
              </span>

              <h2 className="heading-font text-white text-3xl sm:text-4xl lg:text-5xl mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                {post.title}
              </h2>

              <p className="line-clamp-2 mb-6 max-w-lg text-base text-white/75">
                {post.excerpt}
              </p>

              <span className="inline-flex items-center gap-2 font-bold text-sm text-white group-hover:gap-3 transition-all">
                Read the Article
                <FiArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
            </div>
          </div>
        </Link>
      </FadeInView>
    </section>
  );
}
