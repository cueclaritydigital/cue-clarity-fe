import FadeInView from "@/components/animate/FadeInView";
import { FaStar, FaRegStar } from "react-icons/fa";
import type { WrittenStory } from "@/lib/data/success-stories";

interface WrittenStoriesProps {
  stories: WrittenStory[];
  eyebrow?: string;
  heading?: string;
  headingAccent?: string;
  subtitle?: string;
}

export default function WrittenStories({
  stories,
  eyebrow = "Written Stories",
  heading = "Stories That Inspire",
  headingAccent,
  subtitle = "Authentic voices from students, parents & professionals who found clarity and built careers they love.",
}: WrittenStoriesProps) {
  return (
    <section
      className="section-padding px-4 sm:px-6"
      style={{ backgroundColor: "var(--primary-white)" }}
    >
      <div className="section-container">
        {/* Section header */}
        <FadeInView>
          <div className="flex items-center justify-center gap-4 mb-3">
            <span className="w-16 h-[2px] bg-[var(--primary-yellow)]" />
            <span
              className="type-eyebrow"
              style={{
                color: "var(--primary-yellow)",
                fontSize: "var(--text-base)",
              }}
            >
              {eyebrow}
            </span>
            <span className="w-16 h-[2px] bg-[var(--primary-yellow)]" />
          </div>

          <h2
            className="text-center"
            style={{
              fontFamily: "var(--font-oswald)",
              fontWeight: 800,
              fontSize: "clamp(2rem, 5vw, 3.75rem)",
              lineHeight: 0.95,
              letterSpacing: "var(--tracking-tight)",
              color: "var(--primary-blue)",
              textTransform: "uppercase",
            }}
          >
            {heading}
            {headingAccent && (
              <>
                <br />
                <span style={{ color: "var(--primary-yellow)" }}>
                  {headingAccent}
                </span>
              </>
            )}
          </h2>

          <p
            className="text-center max-w-xl mx-auto mt-4 mb-16"
            style={{
              color: "var(--muted-text)",
              fontSize: "var(--text-sm)",
              lineHeight: "var(--leading-relaxed)",
            }}
          >
            {subtitle}
          </p>
        </FadeInView>

        {/* Equal-height grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story) =>
            story.spotlight ? (
              <SpotlightCard key={story.id} story={story} />
            ) : (
              <StoryCard key={story.id} story={story} />
            ),
          )}
        </div>
      </div>
    </section>
  );
}

/* ── Standard testimonial card ── */
function StoryCard({ story }: { story: WrittenStory }) {
  return (
    <article
      className="p-7 rounded-[var(--radius-xl)] flex flex-col gap-5 h-full"
      style={{
        backgroundColor: "var(--surface-card)",
        border: "1px solid var(--secondary-white)",
        boxShadow: "var(--shadow-md)",
      }}
    >
      {/* Stars */}
      <StarRating count={story.rating} />

      {/* Headline quote */}
      <h3
        className="font-bold leading-snug"
        style={{
          fontSize: "var(--text-lg)",
          color: "var(--primary-blue)",
          lineHeight: "var(--leading-snug)",
        }}
      >
        &ldquo;{story.headline}&rdquo;
      </h3>

      {/* Body */}
      <p
        className="flex-1 leading-relaxed"
        style={{
          fontSize: "var(--text-sm)",
          color: "var(--muted-text)",
          lineHeight: "var(--leading-relaxed)",
        }}
      >
        {story.quote}
      </p>

      {/* Author */}
      <div
        className="flex items-center gap-3 pt-4"
        style={{ borderTop: "1px solid var(--secondary-white)" }}
      >
        <div
          className="w-10 h-10 rounded-[var(--radius-sm)] flex items-center justify-center font-bold text-[15px] shrink-0"
          style={{
            backgroundColor: "var(--primary-blue)",
            color: "var(--primary-white)",
          }}
        >
          {story.initial}
        </div>
        <div>
          <p
            className="font-bold leading-none"
            style={{
              fontSize: "var(--text-sm)",
              color: "var(--primary-black)",
            }}
          >
            {story.name}
          </p>
          <p
            className="mt-1"
            style={{
              fontSize: "var(--text-xs)",
              color: "var(--muted-text)",
            }}
          >
            {story.role} &bull; {story.location}
          </p>
        </div>
      </div>
    </article>
  );
}

/* ── Spotlight card (dark, brand blue bg) ── */
function SpotlightCard({ story }: { story: WrittenStory }) {
  return (
    <article
      className="p-7 rounded-[var(--radius-xl)] flex flex-col gap-5 h-full relative overflow-hidden"
      style={{
        backgroundColor: "var(--primary-blue)",
        boxShadow: "var(--shadow-xl)",
      }}
    >
      {/* Soft blob inside card */}
      <div
        className="absolute -top-12 -right-12 w-36 h-36 rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{ backgroundColor: "var(--primary-yellow)" }}
      />

      {/* Spotlight label */}
      <div className="flex items-center justify-between">
        <span
          className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full self-start"
          style={{
            backgroundColor: "var(--primary-yellow)",
            color: "var(--primary-black)",
          }}
        >
          Spotlight
        </span>
        {/* Large quote mark */}
        <span
          className="text-7xl leading-none select-none opacity-20 -mt-4"
          style={{
            fontFamily: "Georgia, serif",
            color: "var(--primary-yellow)",
          }}
          aria-hidden="true"
        >
          &ldquo;
        </span>
      </div>

      {/* Headline */}
      <h3
        className="font-bold leading-snug italic"
        style={{
          fontSize: "var(--text-xl)",
          color: "var(--primary-white)",
          lineHeight: "var(--leading-snug)",
        }}
      >
        &ldquo;{story.headline}&rdquo;
      </h3>

      {/* Body */}
      <p
        className="flex-1 leading-relaxed"
        style={{
          fontSize: "var(--text-sm)",
          color: "rgba(253,251,237,0.65)",
          lineHeight: "var(--leading-relaxed)",
        }}
      >
        {story.quote}
      </p>

      {/* Author */}
      <div
        className="flex items-center gap-3 pt-4"
        style={{ borderTop: "1px solid rgba(255,193,20,0.2)" }}
      >
        <div
          className="w-10 h-10 rounded-[var(--radius-sm)] flex items-center justify-center font-bold text-[15px] shrink-0"
          style={{
            backgroundColor: "var(--primary-yellow)",
            color: "var(--primary-black)",
          }}
        >
          {story.initial}
        </div>
        <div>
          <p
            className="font-bold leading-none"
            style={{
              fontSize: "var(--text-sm)",
              color: "var(--primary-white)",
            }}
          >
            {story.name}
          </p>
          <p
            className="mt-1"
            style={{
              fontSize: "var(--text-xs)",
              color: "rgba(253,251,237,0.5)",
            }}
          >
            {story.role} &bull; {story.location}
          </p>
        </div>
      </div>
    </article>
  );
}

/* ── Star rating ── */
function StarRating({ count }: { count: number }) {
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`${count} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) =>
        i < count ? (
          <FaStar
            key={i}
            size={14}
            aria-hidden="true"
            style={{ color: "var(--primary-yellow)" }}
          />
        ) : (
          <FaRegStar
            key={i}
            size={14}
            aria-hidden="true"
            style={{ color: "var(--muted-text)" }}
          />
        ),
      )}
    </div>
  );
}
