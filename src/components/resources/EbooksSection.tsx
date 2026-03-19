import { FiDownload } from "react-icons/fi";
import FadeInView from "@/components/animate/FadeInView";
import StaggerInView from "@/components/animate/StaggerInView";
import { fadeUp } from "@/lib/animations/variants";
import { EBOOKS, type Ebook } from "@/lib/data/resources";

export default function EbooksSection() {
  return (
    <section
      id="ebooks"
      className="section-padding px-4 sm:px-6 relative overflow-hidden"
      style={{ backgroundColor: "var(--primary-white)" }}
      aria-labelledby="ebooks-heading"
    >
      {/* Ambient */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--primary-yellow)] opacity-[0.04] blur-[120px] rounded-full pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <FadeInView>
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-3">
              <span className="w-12 h-[2px] bg-[var(--primary-yellow)]" />
              <span
                className="type-eyebrow"
                style={{
                  color: "var(--primary-yellow)",
                  fontSize: "var(--text-base)",
                }}
              >
                Free Downloads
              </span>
              <span className="w-12 h-[2px] bg-[var(--primary-yellow)]" />
            </div>
            <h2
              id="ebooks-heading"
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
              Career Guides & E-books
            </h2>
            <p
              className="max-w-md mx-auto mt-4"
              style={{
                fontSize: "var(--text-sm)",
                color: "var(--muted-text)",
                lineHeight: "var(--leading-relaxed)",
              }}
            >
              Practical, science-backed guides — completely free. Download, read
              offline, and share with anyone who needs clarity.
            </p>
          </div>
        </FadeInView>

        {/* Ebooks grid */}
        <StaggerInView className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EBOOKS.map((book) => (
            <FadeInView key={book.id} variants={fadeUp}>
              <EbookCard book={book} />
            </FadeInView>
          ))}
        </StaggerInView>
      </div>
    </section>
  );
}

function EbookCard({ book }: { book: Ebook }) {
  return (
    <article
      className="group flex flex-col h-full rounded-[var(--radius-xl)] overflow-hidden"
      style={{ boxShadow: "var(--shadow-md)" }}
    >
      {/* Book cover */}
      <div
        className="relative flex items-center justify-center p-8 aspect-[3/4]"
        style={{
          background: `linear-gradient(135deg, ${book.accentFrom} 0%, ${book.accentTo} 100%)`,
        }}
      >
        {/* Decorative inner glow */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.4),transparent_60%)]" />

        {/* Page lines decoration */}
        <div className="absolute right-6 top-6 bottom-6 w-px bg-white/20" />
        <div className="absolute right-8 top-6 bottom-6 w-px bg-white/10" />

        {/* Cover text */}
        <div className="relative z-10 text-center">
          <p
            className="font-bold leading-tight text-white"
            style={{
              fontFamily: "var(--font-oswald)",
              fontSize: "var(--text-xl)",
              letterSpacing: "var(--tracking-snug)",
            }}
          >
            {book.title}
          </p>
          <p
            className="mt-2 font-medium"
            style={{
              fontSize: "var(--text-xs)",
              color: "rgba(255,255,255,0.7)",
              letterSpacing: "var(--tracking-wider)",
              textTransform: "uppercase",
            }}
          >
            {book.edition}
          </p>
        </div>
      </div>

      {/* Card body */}
      <div
        className="flex flex-col gap-4 p-6 flex-1 border border-t-0 border-[var(--secondary-white)]"
        style={{ backgroundColor: "var(--surface-card)" }}
      >
        <div>
          <p
            className="font-black leading-snug"
            style={{
              fontSize: "var(--text-sm)",
              color: "var(--primary-black)",
            }}
          >
            {book.title}
          </p>
          <p
            className="font-semibold mt-0.5"
            style={{
              fontSize: "var(--text-xs)",
              color: "var(--muted-text)",
            }}
          >
            {book.subtitle}
          </p>
        </div>

        <p
          className="flex-1 leading-relaxed"
          style={{
            fontSize: "var(--text-xs)",
            color: "var(--muted-text)",
            lineHeight: "var(--leading-relaxed)",
          }}
        >
          {book.description}
        </p>

        <a
          href={book.downloadUrl}
          download
          className="mt-auto flex items-center justify-center gap-2 py-3 rounded-full font-bold transition-all duration-200 hover:-translate-y-px"
          style={{
            backgroundColor: book.accentFrom,
            color: "#fff",
            fontSize: "var(--text-xs)",
            letterSpacing: "var(--tracking-wide)",
          }}
          aria-label={`Download ${book.title} as PDF`}
        >
          <FiDownload size={14} />
          Download PDF
        </a>
      </div>
    </article>
  );
}
