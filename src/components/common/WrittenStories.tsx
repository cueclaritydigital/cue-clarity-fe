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
  heading = "Stories That",
  headingAccent = "Inspire",
  subtitle = "Authentic voices from students, parents & professionals who found clarity and built careers they love.",
}: WrittenStoriesProps) {
  return (
    <section className="relative py-24 px-4 sm:px-6 overflow-hidden bg-white">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-80px] left-[-60px] w-[500px] h-[500px] bg-yellow-200/15 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-40px] right-[-40px] w-[400px] h-[400px] bg-blue-200/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Section header */}
        <FadeInView className="text-center mb-16">
          <span className="text-yellow-500 text-base font-bold tracking-widest uppercase">
            {eyebrow}
          </span>

          <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl heading-font text-[var(--primary-blue)]">
            {heading}{" "}
            {headingAccent && (
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-yellow)] to-orange-400">
                {headingAccent}
              </span>
            )}
          </h2>

          <p className="max-w-xl mx-auto mt-5 text-gray-500 leading-relaxed">
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
    <article className="group relative rounded-3xl border border-gray-100 bg-white/70 backdrop-blur-xl p-7 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col gap-5 h-full">
      {/* Hover glow overlay */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-yellow-100/40 to-transparent pointer-events-none" />

      <div className="relative flex flex-col gap-5 flex-1">
        {/* Stars */}
        <StarRating count={story.rating} />

        {/* Headline quote */}
        <h3 className="font-bold text-lg leading-snug text-blue-950">
          &ldquo;{story.headline}&rdquo;
        </h3>

        {/* Body */}
        <p className="flex-1 text-sm text-gray-500 leading-relaxed">
          {story.quote}
        </p>

        {/* Author */}
        <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
          <div className="w-10 h-10 rounded-xl bg-blue-950 text-white flex items-center justify-center font-bold text-[15px] shrink-0">
            {story.initial}
          </div>
          <div>
            <p className="font-bold text-sm leading-none text-blue-950">
              {story.name}
            </p>
            <p className="mt-1 text-xs text-gray-500">
              {story.role} &bull; {story.location}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ── Spotlight card (dark, blue-950 bg) ── */
function SpotlightCard({ story }: { story: WrittenStory }) {
  return (
    <article className="group relative rounded-3xl p-7 flex flex-col gap-5 h-full overflow-hidden bg-blue-950 shadow-[0_10px_40px_rgba(0,0,0,0.15)]">
      {/* Soft blob inside card */}
      <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full blur-3xl bg-yellow-400/20 pointer-events-none" />

      {/* Hover glow overlay */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-yellow-400/10 to-transparent pointer-events-none" />

      <div className="relative flex flex-col gap-5 flex-1">
        {/* Spotlight label */}
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-yellow-400 text-blue-950 self-start">
            Spotlight
          </span>
          {/* Large quote mark */}
          <span
            className="text-7xl leading-none select-none text-yellow-400/20 -mt-4"
            style={{ fontFamily: "Georgia, serif" }}
            aria-hidden="true"
          >
            &ldquo;
          </span>
        </div>

        {/* Headline */}
        <h3 className="font-bold text-xl leading-snug italic text-white">
          &ldquo;{story.headline}&rdquo;
        </h3>

        {/* Body */}
        <p className="flex-1 text-sm text-gray-400 leading-relaxed">
          {story.quote}
        </p>

        {/* Author */}
        <div className="flex items-center gap-3 pt-4 border-t border-yellow-400/20">
          <div className="w-10 h-10 rounded-xl bg-yellow-400 text-blue-950 flex items-center justify-center font-bold text-[15px] shrink-0">
            {story.initial}
          </div>
          <div>
            <p className="font-bold text-sm leading-none text-white">
              {story.name}
            </p>
            <p className="mt-1 text-xs text-gray-400">
              {story.role} &bull; {story.location}
            </p>
          </div>
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
            className="text-yellow-500"
          />
        ) : (
          <FaRegStar
            key={i}
            size={14}
            aria-hidden="true"
            className="text-gray-300"
          />
        ),
      )}
    </div>
  );
}
