import FadeInView from "@/components/animate/FadeInView";
import type { BlogPost, ArticleSection } from "@/lib/data/blog";

function BodySection({ section }: { section: ArticleSection }) {
  switch (section.type) {
    case "heading":
      return (
        <h2
          className="mt-10 text-2xl sm:text-3xl font-black uppercase tracking-tight text-blue-950"
          style={{ fontFamily: "var(--font-oswald)" }}
        >
          {section.text}
        </h2>
      );
    case "subheading":
      return (
        <h3
          className="mt-8 text-xl font-extrabold text-blue-950"
          style={{ fontFamily: "var(--font-oswald)" }}
        >
          {section.text}
        </h3>
      );
    case "paragraph":
      return <p className="leading-relaxed text-gray-500">{section.text}</p>;
    case "blockquote":
      return (
        <blockquote className="border-l-4 border-yellow-400 pl-6 py-3 my-8 rounded-r-xl bg-yellow-50/60 italic font-semibold text-blue-950">
          &ldquo;{section.text}&rdquo;
        </blockquote>
      );
    case "list":
      return (
        <ul className="list-disc pl-6 space-y-2 text-gray-500">
          {section.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
  }
}

export default function ArticleContent({ post }: { post: BlogPost }) {
  return (
    <FadeInView>
      <article>
        {/* Category + meta */}
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-block px-3 py-1 rounded-md text-xs font-black uppercase tracking-widest bg-yellow-400 text-blue-950">
            {post.category}
          </span>
          <span className="text-xs font-medium text-gray-400">{post.date}</span>
          <span className="w-1 h-1 rounded-full bg-gray-300" />
          <span className="text-xs font-medium text-gray-400">
            {post.readTime}
          </span>
        </div>

        {/* Title */}
        <h1
          className="mb-6 text-blue-950"
          style={{
            fontFamily: "var(--font-oswald)",
            fontWeight: 800,
            fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
            lineHeight: 1.05,
            textTransform: "uppercase",
          }}
        >
          {post.title}
        </h1>

        {/* Lead */}
        <p className="text-lg mb-8 leading-relaxed text-gray-500">
          {post.excerpt}
        </p>

        {/* Hero image */}
        <div className="rounded-2xl overflow-hidden mb-10 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
          <img
            src={post.image}
            alt={post.imageAlt}
            width={900}
            height={480}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Article body */}
        <div className="space-y-6">
          {post.body?.map((section, i) => (
            <BodySection key={i} section={section} />
          ))}
        </div>
      </article>
    </FadeInView>
  );
}
