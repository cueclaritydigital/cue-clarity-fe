/* ── Blog post data & types ──────────────────────────────────────── */

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
};

/* Placeholder images — replace with real images in /public/blog/ */
const IMG = "/blog";

export const CATEGORIES = [
  "All",
  "Career Planning",
  "Study Abroad",
  "For Parents",
  "Trends",
  "Assessment",
] as const;

export const POSTS: BlogPost[] = [
  {
    slug: "how-to-choose-career-after-12th",
    title: "How to Choose the Right Career After 12th — A Complete Guide",
    excerpt:
      "Stream selection doesn't have to be stressful. Here's our evidence-based framework for making a confident choice after Class 12.",
    category: "Career Planning",
    date: "Jan 15, 2025",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Student contemplating career options after 12th grade",
    featured: true,
  },
  {
    slug: "study-abroad-myths",
    title: "7 Study Abroad Myths That Are Holding You Back",
    excerpt:
      "Think studying abroad is only for the rich? Think again. We debunk the biggest misconceptions around international education.",
    category: "Study Abroad",
    date: "Feb 3, 2025",
    readTime: "6 min read",
    image: `https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    imageAlt: "Globe and passport on a desk representing study abroad",
  },
  {
    slug: "career-transition-after-30",
    title: "Switching Careers After 30: Why It's Never Too Late",
    excerpt:
      "More professionals are pivoting mid-career than ever. Here's how to do it without burning out.",
    category: "Career Planning",
    date: "Mar 12, 2025",
    readTime: "10 min read",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Professional at a crossroads deciding on a career change",
  },
  {
    slug: "psychometric-assessments-explained",
    title: "What Are Psychometric Assessments? And Do They Actually Work?",
    excerpt:
      "An honest look at the science behind career aptitude tests and when they're genuinely useful.",
    category: "Assessment",
    date: "Apr 8, 2025",
    readTime: "5 min read",
    image: `https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    imageAlt: "Hand filling out a psychometric assessment form",
  },
  {
    slug: "parents-role-in-career-guidance",
    title: "Dear Parents: How to Support Your Child's Career Decisions",
    excerpt:
      "The line between guidance and pressure is thin. A counsellor's perspective on healthy career conversations at home.",
    category: "For Parents",
    date: "May 1, 2025",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Parent and teenager having a conversation about career",
  },
  {
    slug: "top-emerging-careers-2025",
    title: "Top 10 Emerging Careers in India for 2025",
    excerpt:
      "AI, sustainability, digital health — which fields are exploding? A data-driven look at India's fastest-growing career paths.",
    category: "Trends",
    date: "May 20, 2025",
    readTime: "9 min read",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Futuristic illustration of emerging career fields in India",
  },
];

export const POPULAR_POSTS = POSTS.slice(0, 3);

export function getPostBySlug(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function getFeaturedPost(): BlogPost {
  return POSTS.find((p) => p.featured) ?? POSTS[0];
}

export function getRelatedPosts(currentSlug: string, count = 3): BlogPost[] {
  return POSTS.filter((p) => p.slug !== currentSlug).slice(0, count);
}
