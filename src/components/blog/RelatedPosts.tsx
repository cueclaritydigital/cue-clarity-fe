import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import FadeInView from "@/components/animate/FadeInView";
import StaggerInView from "@/components/animate/StaggerInView";
import { fadeUp } from "@/lib/animations/variants";
import type { BlogPost } from "@/lib/data/blog";

export default function RelatedPosts({ posts }: { posts: BlogPost[] }) {
  if (!posts.length) return null;

  return (
    <section className="relative py-24 px-4 sm:px-6 overflow-hidden bg-gray-50">
      {/* Background glow */}
      <div className="absolute top-[-80px] right-0 w-[400px] h-[400px] bg-yellow-200/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto z-10">
        <FadeInView className="mb-12">
          <span className="text-yellow-500 text-sm font-semibold tracking-widest uppercase">
            Keep Reading
          </span>
          <h2
            className="mt-3 text-4xl sm:text-5xl font-black uppercase tracking-tight text-blue-950 leading-[1.0]"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            Related Articles
          </h2>
        </FadeInView>

        <StaggerInView className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((post) => (
            <FadeInView key={post.slug} variants={fadeUp}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col h-full overflow-hidden rounded-3xl border border-gray-100 bg-white/70 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1"
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
                  <span className="text-xs font-black uppercase tracking-widest text-yellow-500 mb-2">
                    {post.category}
                  </span>
                  <h3
                    className="text-sm font-black uppercase mb-3 text-blue-950 group-hover:text-yellow-500 transition-colors leading-snug flex-1"
                    style={{ fontFamily: "var(--font-oswald)" }}
                  >
                    {post.title}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 font-bold text-sm text-blue-950 group-hover:gap-2.5 transition-all">
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
