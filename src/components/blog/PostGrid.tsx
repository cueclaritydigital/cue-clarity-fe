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
              className="flex flex-col h-full overflow-hidden rounded-2xl bg-white/70 backdrop-blur-xl border border-gray-100 shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-gray-200"
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
                  <span className="text-yellow-500 text-xs font-bold tracking-widest uppercase">
                    {post.category}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-yellow-400" />
                  <span className="text-xs font-medium text-gray-400">
                    {post.readTime}
                  </span>
                </div>

                <h3 className="heading-font text-blue-950 text-base sm:text-lg leading-snug mb-3 ">
                  {post.title}
                </h3>

                <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 mb-5 flex-1">
                  {post.excerpt}
                </p>

                <span className="inline-flex items-center gap-1.5 font-bold text-sm text-blue-950 group-hover:gap-2.5 transition-all">
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
