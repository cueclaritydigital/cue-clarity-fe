import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import FadeInView from "@/components/animate/FadeInView";
import StaggerInView from "@/components/animate/StaggerInView";
import { fadeUp } from "@/lib/animations/variants";
import type { BlogPost } from "@/lib/data/blog";

export default function PostGrid({ posts }: { posts: BlogPost[] }) {
  return (
    <StaggerInView className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
      {posts.map((post) => (
        <FadeInView key={post.slug} variants={fadeUp}>
          <article className="group h-full">
            <Link
              href={`/blog/${post.slug}`}
              className="flex flex-col h-full overflow-hidden rounded-xl lg:rounded-2xl transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "var(--surface-card)",
                border: "1px solid var(--secondary-white)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              {/* Thumbnail */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.imageAlt}
                  width={600}
                  height={340}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Body */}
              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="type-label"
                    style={{ color: "var(--primary-yellow)" }}
                  >
                    {post.category}
                  </span>
                  <span
                    className="w-1 h-1 rounded-full"
                    style={{ backgroundColor: "var(--primary-yellow)" }}
                  />
                  <span
                    className="text-xs font-medium"
                    style={{ color: "var(--muted-text)" }}
                  >
                    {post.readTime}
                  </span>
                </div>

                <h3
                  className="mb-3 group-hover:text-[var(--primary-blue)] transition-colors leading-snug"
                  style={{
                    fontFamily: "var(--font-oswald)",
                    fontWeight: 700,
                    fontSize: "clamp(1.05rem, 2vw, 1.25rem)",
                    color: "var(--primary-black)",
                    textTransform: "uppercase",
                  }}
                >
                  {post.title}
                </h3>

                <p
                  className="text-sm line-clamp-3 mb-5 flex-1"
                  style={{
                    color: "var(--muted-text)",
                    lineHeight: "var(--leading-relaxed)",
                  }}
                >
                  {post.excerpt}
                </p>

                <span
                  className="inline-flex items-center gap-1.5 font-bold text-sm group-hover:gap-2.5 transition-all"
                  style={{ color: "var(--primary-blue)" }}
                >
                  Read More
                  <FiArrowRight size={13} />
                </span>
              </div>
            </Link>
          </article>
        </FadeInView>
      ))}
    </StaggerInView>
  );
}
