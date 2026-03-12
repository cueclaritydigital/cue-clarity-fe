import type { Metadata } from 'next';
import Link from 'next/link';
import { FiArrowRight, FiTarget, FiHeart, FiUsers, FiAward } from 'react-icons/fi';
import Footer from '@/components/common/Footer';
import RFQ from '@/components/common/RFQ';

export const metadata: Metadata = {
  title: 'About CueClarity | Our Mission & Expert Team',
  description:
    'Learn how CueClarity empowers students, parents, and professionals with data-backed career counselling. Meet the team behind 2,000+ career transformations.',
  openGraph: {
    title: 'About CueClarity — Our Mission',
    description: 'Data-backed career counselling transforming 2,000+ lives and counting.',
  },
};

const VALUES = [
  {
    icon: <FiTarget size={24} />,
    title: 'Clarity First',
    desc: 'Every decision starts with understanding. We replace confusion with evidence-based insight.',
  },
  {
    icon: <FiHeart size={24} />,
    title: 'Empathy Driven',
    desc: 'We listen before we advise. Your story, goals, and fears matter more than any test score.',
  },
  {
    icon: <FiUsers size={24} />,
    title: 'Family Inclusive',
    desc: 'Career decisions affect everyone. We bring parents, students, and professionals to the same table.',
  },
  {
    icon: <FiAward size={24} />,
    title: 'Outcome Obsessed',
    desc: 'Not just advice — we track results. Our success is measured by your career outcomes.',
  },
];

const STATS = [
  { value: '2,000+', label: 'Careers Transformed' },
  { value: '200+', label: 'Institution Partners' },
  { value: '15+', label: 'Years Combined Experience' },
  { value: '4.9/5', label: 'Avg. Satisfaction Rating' },
];

export default function About() {
  return (
    <>
      {/* HERO */}
      <section className="section-padding px-4 sm:px-6 bg-[var(--primary-black)] text-[var(--primary-white)] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[var(--primary-blue)] opacity-[0.06] blur-[120px] rounded-full pointer-events-none -translate-x-1/3 -translate-y-1/3" />
        <div className="section-container relative z-10">
          <span className="type-eyebrow text-[var(--primary-yellow)] mb-4 block">About Us</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight leading-[1.05] font-oswald max-w-3xl">
            We Don&apos;t Just Counsel.<br />We Transform Futures.
          </h1>
          <p className="type-body text-[var(--primary-white)]/70 mt-6 max-w-2xl text-lg">
            CueClarity was born from a simple frustration: too many talented people making career decisions based on
            guesswork. We combine psychometric science, industry expertise, and genuine empathy to give every
            individual a clear, actionable career roadmap.
          </p>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="py-12 px-4 sm:px-6 bg-[var(--primary-blue)]">
        <div className="section-container grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {STATS.map((s) => (
            <div key={s.label}>
              <p className="text-3xl sm:text-4xl font-extrabold text-[var(--primary-white)] font-oswald">{s.value}</p>
              <p className="text-sm text-[var(--primary-white)]/70 mt-1 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OUR STORY */}
      <section className="section-padding px-4 sm:px-6 bg-[var(--primary-white)]">
        <div className="section-container max-w-3xl">
          <span className="type-eyebrow text-[var(--accent-blue)] mb-3 block">Our Story</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[var(--primary-black)] font-oswald mb-6">
            From Frustration to a Movement
          </h2>
          <div className="space-y-5 type-body text-[var(--primary-black)]/80 text-base leading-relaxed">
            <p>
              Our founder spent years watching bright students choose wrong careers — not because they lacked talent,
              but because they lacked guidance. Parents pushed engineering; friends followed trends; nobody asked
              &ldquo;What are <em>you</em> wired for?&rdquo;
            </p>
            <p>
              CueClarity was created to fix that. We built a framework combining globally recognized psychometric
              assessments with one-on-one expert mentorship. The result? Over 2,000 individuals — from confused
              Class 10 students to mid-career professionals — have found their direction.
            </p>
            <p>
              Today, we partner with 200+ schools, colleges, and corporates across India. Our mission hasn&apos;t
              changed: replace career confusion with career clarity, one person at a time.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section-padding px-4 sm:px-6 bg-[var(--secondary-white)]">
        <div className="section-container">
          <span className="type-eyebrow text-[var(--accent-blue)] mb-3 block">Our Values</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[var(--primary-black)] font-oswald mb-12">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="bg-[var(--primary-white)] rounded-[var(--radius-lg)] p-7 border border-[var(--primary-black)]/5 hover:border-[var(--primary-blue)] hover:-translate-y-1 transition-all duration-[var(--transition-base)]"
              >
                <div className="w-12 h-12 rounded-[var(--radius-md)] bg-[var(--primary-blue)]/10 text-[var(--primary-blue)] flex items-center justify-center mb-5">
                  {v.icon}
                </div>
                <h3 className="font-bold text-lg text-[var(--primary-black)] mb-2">{v.title}</h3>
                <p className="type-body text-[var(--muted-text)] text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding px-4 sm:px-6 bg-[var(--primary-white)]">
        <div className="section-container text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[var(--primary-black)] font-oswald mb-4">
            Ready to Find Your Direction?
          </h2>
          <p className="type-body text-[var(--muted-text)] mb-8 max-w-lg mx-auto">
            Start with a free discovery call. No pressure, no commitment — just clarity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-outline-dark group">
              Back to Home
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <RFQ />
      <Footer />
    </>
  );
}