import type { Metadata } from 'next';
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi';
import Footer from '@/components/common/Footer';
import RFQ from '@/components/common/RFQ';

export const metadata: Metadata = {
  title: 'Programs for Institutions | CueClarity',
  description:
    'Partner with CueClarity to deliver career counselling, psychometric assessments, and life-skills workshops to your students at scale.',
  openGraph: {
    title: 'CueClarity Institutional Programs',
    description: 'Scalable career guidance programs for schools, colleges and corporates.',
  },
};

const PROGRAMS = [
  {
    title: 'School Career Guidance Program',
    audience: 'Classes 8–12',
    features: [
      'Stream-selection workshops with psychometric backing',
      'Parent–student joint counselling sessions',
      'Individual career roadmaps for every student',
      'Annual career fairs and industry exposure visits',
    ],
  },
  {
    title: 'College Career Readiness',
    audience: 'UG & PG Students',
    features: [
      'Semester-wise career development curriculum',
      'Resume building & interview preparation',
      'Internship and placement support',
      'Alumni mentorship network access',
    ],
  },
  {
    title: 'Corporate Upskilling',
    audience: 'Organizations & Teams',
    features: [
      'Leadership and management development',
      'Team psychometric profiling & role alignment',
      'Custom training modules for industry needs',
      'Ongoing coaching and performance tracking',
    ],
  },
];

export default function Programs() {
  return (
    <>
      {/* HERO */}
      <section className="section-padding px-4 sm:px-6 bg-[var(--primary-black)] text-[var(--primary-white)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--primary-blue)] opacity-[0.05] blur-[100px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />
        <div className="section-container relative z-10">
          <span className="type-eyebrow text-[var(--primary-yellow)] mb-4 block">For Institutions</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight leading-[1.05] font-oswald max-w-3xl">
            Scale Career Clarity<br />Across Your Campus
          </h1>
          <p className="type-body text-[var(--primary-white)]/70 mt-6 max-w-2xl text-lg">
            Trusted by 200+ schools, colleges, and corporates. Our institutional programs deliver measurable
            career outcomes — not just workshops.
          </p>
        </div>
      </section>

      {/* PROGRAM CARDS */}
      <section className="section-padding px-4 sm:px-6 bg-[var(--primary-white)]">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PROGRAMS.map((p) => (
              <div
                key={p.title}
                className="rounded-[var(--radius-xl)] border border-[var(--primary-black)]/10 p-8 hover:border-[var(--primary-blue)] hover:-translate-y-1 hover:shadow-xl transition-all duration-[var(--transition-base)] flex flex-col"
              >
                <span className="type-eyebrow text-[var(--primary-blue)] mb-2">{p.audience}</span>
                <h3 className="text-xl font-bold text-[var(--primary-black)] font-oswald uppercase tracking-tight mb-5">
                  {p.title}
                </h3>
                <ul className="space-y-3 flex-1 mb-6">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-[var(--primary-black)]/80">
                      <FiCheckCircle className="text-[var(--primary-blue)] mt-0.5 shrink-0" size={16} />
                      {f}
                    </li>
                  ))}
                </ul>
                <span className="text-sm font-bold text-[var(--primary-blue)] flex items-center gap-1.5">
                  Request a Proposal
                  <FiArrowRight size={14} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="py-12 px-4 sm:px-6 bg-[var(--secondary-white)] text-center">
        <p className="type-eyebrow text-[var(--muted-text)] mb-3">Trusted by Institutions Like</p>
        <p className="text-lg text-[var(--primary-black)]/60 font-medium">
          Delhi Public School &bull; St. Xavier&apos;s &bull; NMIMS &bull; Symbiosis &bull; IIM Indore &bull; K.J. Somaiya &bull; Jai Hind College &bull; Podar International
        </p>
      </section>

      <RFQ />
      <Footer />
    </>
  );
}