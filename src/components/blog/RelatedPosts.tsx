import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import FadeInView from "@/components/animate/FadeInView";
import StaggerInView from "@/components/animate/StaggerInView";
import { fadeUp } from "@/lib/animations/variants";
import type { BlogPost } from "@/lib/data/blog";

export default function RelatedPosts({ posts }: { posts: BlogPost[] }) {
  if (!posts.length) return null;

  return (
    <section
      className="section-padding px-4 sm:px-6"
      style={{ backgroundColor: "var(--secondary-white)" }}
    >
      <div className="section-container">
        <FadeInView>
          <span
            className="type-eyebrow mb-3 block"
            style={{ color: "var(--primary-yellow)" }}
          >
            Keep Reading
          </span>
          <h2
            className="mb-10"
            style={{
              fontFamily: "var(--font-oswald)",
              fontWeight: 800,
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              textTransform: "uppercase",
              color: "var(--primary-black)",
            }}
          >
            Related Articles
          </h2>
        </FadeInView>

        <StaggerInView className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((post) => (
            <FadeInView key={post.slug} variants={fadeUp}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col h-full overflow-hidden rounded-xl lg:rounded-2xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: "var(--surface-card)",
                  border: "1px solid var(--secondary-white)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    width={400}
                    height={220}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <span
                    className="type-label mb-2"
                    style={{ color: "var(--primary-yellow)" }}
                  >
                    {post.category}
                  </span>
                  <h3
                    className="text-sm font-bold uppercase mb-3 group-hover:text-[var(--primary-blue)] transition-colors leading-snug flex-1"
                    style={{
                      fontFamily: "var(--font-oswald)",
                      color: "var(--primary-black)",
                    }}
                  >
                    {post.title}
                  </h3>
                  <span
                    className="inline-flex items-center gap-1.5 font-bold text-sm group-hover:gap-2.5 transition-all"
                    style={{ color: "var(--primary-blue)" }}
                  >
                    Read More <FiArrowRight size={13} />
                  </span>
                </div>
              </Link>
            </FadeInView>
          ))}
        </StaggerInView>
      </div>
    </section>
  );
}
