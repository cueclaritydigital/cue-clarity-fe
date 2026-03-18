import Link from "next/link";
import { CATEGORIES, POPULAR_POSTS } from "@/lib/data/blog";

export default function BlogSidebar() {
  return (
    <aside className="space-y-8 lg:space-y-10">
      {/* ── Categories ── */}
      <div
        className="p-6 sm:p-8 rounded-xl lg:rounded-2xl"
        style={{ backgroundColor: "var(--secondary-white)" }}
      >
        <h3
          className="font-extrabold text-lg mb-5 flex items-center gap-2"
          style={{ color: "var(--primary-blue)" }}
        >
          Categories
        </h3>
        <ul className="space-y-3">
          {CATEGORIES.filter((c) => c !== "All").map((cat) => (
            <li
              key={cat}
              className="flex items-center justify-between group cursor-pointer"
            >
              <span
                className="font-medium text-sm group-hover:text-[var(--primary-blue)] transition-colors"
                style={{ color: "var(--muted-text)" }}
              >
                {cat}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* ── Popular Posts ── */}
      <div>
        <h3
          className="font-extrabold text-lg mb-5 flex items-center gap-2"
          style={{ color: "var(--primary-blue)" }}
        >
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
                <h4
                  className="text-sm font-bold leading-snug group-hover:text-[var(--primary-blue)] transition-colors line-clamp-2"
                  style={{ color: "var(--primary-black)" }}
                >
                  {p.title}
                </h4>
                <p
                  className="text-xs mt-1"
                  style={{ color: "var(--muted-text)" }}
                >
                  {p.date}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ── Newsletter CTA ── */}
      <div
        className="p-6 sm:p-8 rounded-xl lg:rounded-2xl"
        style={{
          backgroundColor: "var(--primary-blue)",
          boxShadow: "var(--shadow-glow-blue)",
        }}
      >
        <h3
          className="font-extrabold text-xl mb-2"
          style={{ color: "var(--primary-white)" }}
        >
          Clarity Inbox
        </h3>
        <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.6)" }}>
          Bi-weekly career insights, tips, and trends — straight to your inbox.
        </p>
        <form className="space-y-3">
          <label htmlFor="sidebar-email" className="sr-only">
            Email address
          </label>
          <input
            id="sidebar-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className="w-full px-4 py-3 rounded-lg text-sm outline-none"
            style={{
              backgroundColor: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "var(--primary-white)",
            }}
          />
          <button
            type="submit"
            className="w-full py-3 rounded-lg font-extrabold text-sm"
            style={{
              backgroundColor: "var(--primary-yellow)",
              color: "var(--primary-black)",
            }}
          >
            Subscribe
          </button>
        </form>
        <p
          className="text-center mt-3"
          style={{
            fontSize: "10px",
            color: "rgba(255,255,255,0.35)",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            fontWeight: 700,
          }}
        >
          No spam. Only clarity.
        </p>
      </div>

      {/* ── Tags ── */}
      <div
        className="p-6 sm:p-8 rounded-xl lg:rounded-2xl"
        style={{ border: "1px solid var(--secondary-white)" }}
      >
        <h3 className="type-label mb-4" style={{ color: "var(--muted-text)" }}>
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
              className="px-3 py-1 text-xs font-bold rounded-md cursor-pointer hover:bg-[var(--primary-yellow)] transition-colors"
              style={{
                backgroundColor: "var(--secondary-white)",
                color: "var(--primary-blue)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}
