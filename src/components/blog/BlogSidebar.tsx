import Link from "next/link";
import { CATEGORIES, POPULAR_POSTS } from "@/lib/data/blog";
import NewsletterForm from "@/components/common/NewsLetterFrom";

export default function BlogSidebar() {
  return (
    <aside className="space-y-8 lg:space-y-10">
      {/* ── Categories ── */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gray-50/80">
        <h3 className="font-extrabold text-lg mb-5 flex items-center gap-2 text-blue-950">
          Categories
        </h3>
        <ul className="space-y-3">
          {CATEGORIES.filter((c) => c !== "All").map((cat) => (
            <li
              key={cat}
              className="flex items-center justify-between group cursor-pointer"
            >
              <span className="font-medium text-sm text-gray-500 group-hover:text-blue-950 transition-colors">
                {cat}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* ── Popular Posts ── */}
      <div>
        <h3 className="font-extrabold text-lg mb-5 flex items-center gap-2 text-blue-950">
          Popular Stories
        </h3>
        <div className="space-y-5">
          {POPULAR_POSTS.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="flex gap-4 group"
            >
              <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                <img
                  src={p.image}
                  alt={p.imageAlt}
                  width={80}
                  height={80}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-bold leading-snug text-blue-950 group-hover:text-[var(--primary-blue)] transition-colors line-clamp-2">
                  {p.title}
                </h4>
                <p className="text-xs mt-1 text-gray-400">{p.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ── Newsletter CTA ── */}
      <div className="p-6 sm:p-8 rounded-2xl bg-blue-950 shadow-[0_10px_40px_rgba(41,50,110,0.25)]">
        <h3 className="font-extrabold text-xl mb-2 text-white">
          Clarity Inbox
        </h3>
        <p className="text-sm mb-5 text-white/60">
          Bi-weekly career insights, tips, and trends — straight to your inbox.
        </p>
        <NewsletterForm compact />
      </div>

      {/* ── Tags ── */}
      <div className="p-6 sm:p-8 rounded-2xl border border-gray-100">
        <h3 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-4">
          Explore Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {[
            "Career Planning",
            "Study Abroad",
            "Psychometrics",
            "Parents",
            "Life Skills",
            "Corporate",
            "Trending",
            "Wellness",
          ].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-bold rounded-md cursor-pointer bg-gray-50 text-blue-950 hover:bg-yellow-400 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}
