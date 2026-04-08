import Link from "next/link";
import { CATEGORIES, POPULAR_POSTS } from "@/lib/data/blog";
import NewsletterForm from "@/components/common/NewsLetterFrom";
import { getWhatsAppURL } from "@/lib/whatsapp";

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
                <h4 className="text-sm font-bold leading-snug text-blue-950 group-hover:text-yellow-500 transition-colors line-clamp-2">
                  {p.title}
                </h4>
                <p className="text-xs mt-1 text-gray-400">{p.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ── Service CTA ── */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-950 to-blue-900 border border-yellow-400/20">
        <p className="text-xs font-black uppercase tracking-widest text-yellow-400 mb-2">
          Free Consultation
        </p>
        <h3 className="font-extrabold text-lg text-white mb-2 leading-snug">
          Still Confused About Your Career?
        </h3>
        <p className="text-sm text-white/60 mb-5">
          Talk to a CueClarity expert — 15 minutes, zero pressure, and 100%
          free.
        </p>
        <a
          href={getWhatsAppURL("general")}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center py-3 rounded-xl font-extrabold text-sm bg-yellow-400 text-blue-950 hover:bg-yellow-300 transition-colors"
        >
          Book Free Clarity Call →
        </a>
        <Link
          href="/services/career-counselling"
          className="block text-center mt-3 text-xs text-white/50 hover:text-yellow-400 transition-colors"
        >
          Explore all career services
        </Link>
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
