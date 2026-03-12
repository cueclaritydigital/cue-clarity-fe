import type { Metadata } from 'next';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import Footer from '@/components/common/Footer';

export const metadata: Metadata = {
  title: 'Blog & Insights | CueClarity',
  description:
    'Career tips, education trends, and expert insights from CueClarity counsellors. Explore articles on career planning, study abroad, and personal growth.',
  openGraph: {
    title: 'CueClarity Blog — Career Insights',
    description: 'Expert articles on career planning, education trends and personal growth.',
  },
};

const POSTS = [
  {
    slug: 'how-to-choose-career-after-12th',
    title: 'How to Choose the Right Career After 12th — A Complete Guide',
    excerpt:
      'Stream selection doesn\'t have to be stressful. Here\'s our evidence-based framework for making a confident choice.',
    category: 'Career Planning',
    date: 'Jan 15, 2025',
  },
  {
    slug: 'study-abroad-myths',
    title: '7 Study Abroad Myths That Are Holding You Back',
    excerpt:
      'Think studying abroad is only for the rich? Think again. We debunk the biggest misconceptions around international education.',
    category: 'International Education',
    date: 'Feb 3, 2025',
  },
  {
    slug: 'career-transition-after-30',
    title: 'Switching Careers After 30: Why It\'s Never Too Late',
    excerpt:
      'More professionals are pivoting mid-career than ever before. Here\'s how to do it without burning out.',
    category: 'Career Transition',
    date: 'Mar 12, 2025',
  },
  {
    slug: 'psychometric-assessments-explained',
    title: 'What Are Psychometric Assessments? And Do They Actually Work?',
    excerpt:
      'An honest look at the science behind career aptitude tests and when they\'re genuinely useful.',
    category: 'Assessment',
    date: 'Apr 8, 2025',
  },
  {
    slug: 'parents-role-in-career-guidance',
    title: 'Dear Parents: How to Support Your Child\'s Career Decisions (Without Taking Over)',
    excerpt:
      'The line between guidance and pressure is thin. A counsellor\'s perspective on healthy career conversations at home.',
    category: 'For Parents',
    date: 'May 1, 2025',
  },
  {
    slug: 'top-emerging-careers-2025',
    title: 'Top 10 Emerging Careers in India for 2025',
    excerpt:
      'AI, sustainability, digital health — which fields are exploding? A data-driven look at India\'s fastest-growing career paths.',
    category: 'Trends',
    date: 'May 20, 2025',
  },
];

export default function Blog() {
  return (
    <>
      {/* HERO */}
      <section className="section-padding px-4 sm:px-6 bg-[var(--primary-black)] text-[var(--primary-white)] relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--primary-yellow)] opacity-[0.04] blur-[100px] rounded-full pointer-events-none -translate-x-1/3 translate-y-1/3" />
        <div className="section-container relative z-10">
          <span className="type-eyebrow text-[var(--primary-yellow)] mb-4 block">Insights & Blog</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight leading-[1.05] font-oswald max-w-3xl">
            Career Wisdom,<br />No Fluff
          </h1>
          <p className="type-body text-[var(--primary-white)]/70 mt-6 max-w-2xl text-lg">
            Actionable articles, expert perspectives, and data-driven insights to help you make smarter career decisions.
          </p>
        </div>
      </section>

      {/* POST GRID */}
      <section className="section-padding px-4 sm:px-6 bg-[var(--primary-white)]">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {POSTS.map((post) => (
              <article
                key={post.slug}
                className="group rounded-[var(--radius-lg)] border border-[var(--primary-black)]/5 hover:border-[var(--primary-blue)] hover:-translate-y-1 hover:shadow-xl transition-all duration-[var(--transition-base)] overflow-hidden flex flex-col"
              >
                {/* Placeholder cover */}
                <div className="h-48 bg-[var(--secondary-white)] flex items-center justify-center">
                  <span className="type-eyebrow text-[var(--muted-text)]">{post.category}</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-xs text-[var(--muted-text)] font-medium mb-2">{post.date}</p>
                  <h3 className="font-bold text-lg text-[var(--primary-black)] mb-3 group-hover:text-[var(--primary-blue)] transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="type-body text-[var(--muted-text)] text-sm mb-6 flex-1">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-sm font-bold text-[var(--primary-blue)] flex items-center gap-1.5"
                  >
                    Read Article
                    <FiArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}