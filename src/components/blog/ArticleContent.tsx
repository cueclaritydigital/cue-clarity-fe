import FadeInView from "@/components/animate/FadeInView";
import type { BlogPost } from "@/lib/data/blog";

export default function ArticleContent({ post }: { post: BlogPost }) {
  return (
    <FadeInView>
      <article className="prose-article">
        {/* Category + meta */}
        <div className="flex items-center gap-3 mb-6">
          <span
            className="inline-block px-3 py-1 rounded-md text-xs font-black uppercase tracking-widest"
            style={{
              backgroundColor: "var(--primary-yellow)",
              color: "var(--primary-black)",
            }}
          >
            {post.category}
          </span>
          <span
            className="text-xs font-medium"
            style={{ color: "var(--muted-text)" }}
          >
            {post.date}
          </span>
          <span
            className="w-1 h-1 rounded-full"
            style={{ backgroundColor: "var(--muted-text)" }}
          />
          <span
            className="text-xs font-medium"
            style={{ color: "var(--muted-text)" }}
          >
            {post.readTime}
          </span>
        </div>

        {/* Title */}
        <h1
          className="mb-6"
          style={{
            fontFamily: "var(--font-oswald)",
            fontWeight: 800,
            fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
            lineHeight: 1.1,
            textTransform: "uppercase",
            color: "var(--primary-black)",
          }}
        >
          {post.title}
        </h1>

        {/* Lead */}
        <p
          className="text-lg mb-8 leading-relaxed"
          style={{ color: "var(--muted-text)" }}
        >
          {post.excerpt}
        </p>

        {/* Hero image */}
        <div className="rounded-xl lg:rounded-2xl overflow-hidden mb-10">
          <img
            src={post.image}
            alt={post.imageAlt}
            width={900}
            height={480}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Placeholder article body — replace with MDX / CMS content */}
        <div className="space-y-6" style={{ color: "var(--primary-black)" }}>
          <h2
            className="text-2xl font-bold mt-10"
            style={{
              fontFamily: "var(--font-oswald)",
              textTransform: "uppercase",
            }}
          >
            Why This Matters
          </h2>
          <p className="leading-relaxed" style={{ color: "var(--muted-text)" }}>
            Career decisions shape everything — from daily happiness to
            long-term fulfillment. Yet most people make these choices based on
            peer pressure, parental expectations, or incomplete information.
            This article breaks down a structured, evidence-based approach so
            you can decide with clarity instead of confusion.
          </p>

          <h2
            className="text-2xl font-bold mt-10"
            style={{
              fontFamily: "var(--font-oswald)",
              textTransform: "uppercase",
            }}
          >
            The Framework
          </h2>
          <p className="leading-relaxed" style={{ color: "var(--muted-text)" }}>
            Our 4-step model — Discover, Explore, Decide, Act — has helped over
            2,000 students and professionals navigate career transitions
            successfully. Each step is backed by psychometric data and
            real-world outcomes from our counselling sessions.
          </p>

          <blockquote
            className="border-l-4 pl-6 py-2 my-8 italic"
            style={{
              borderColor: "var(--primary-yellow)",
              color: "var(--primary-blue)",
              fontWeight: 600,
            }}
          >
            &ldquo;The best career choice isn&rsquo;t the one that looks good on
            paper — it&rsquo;s the one that aligns with who you actually
            are.&rdquo;
          </blockquote>

          <h2
            className="text-2xl font-bold mt-10"
            style={{
              fontFamily: "var(--font-oswald)",
              textTransform: "uppercase",
            }}
          >
            Key Takeaways
          </h2>
          <ul
            className="list-disc pl-6 space-y-2"
            style={{ color: "var(--muted-text)" }}
          >
            <li>
              Self-awareness is the foundation of every good career decision.
            </li>
            <li>Data-driven assessments reduce bias and guesswork.</li>
            <li>
              Explore before you commit — internships, informational interviews,
              and shadowing are invaluable.
            </li>
            <li>
              It&rsquo;s never too late to pivot — career changes are more
              common (and successful) than you think.
            </li>
          </ul>
        </div>
      </article>
    </FadeInView>
  );
}
