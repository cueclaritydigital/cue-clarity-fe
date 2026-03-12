import type { Metadata } from 'next';
import Link from 'next/link';
import {
  FiBriefcase,
  FiGlobe,
  FiStar,
  FiBookOpen,
  FiHeart,
  FiSettings,
  FiUsers,
  FiArrowRight,
} from 'react-icons/fi';
import Footer from '@/components/common/Footer';
import RFQ from '@/components/common/RFQ';

export const metadata: Metadata = {
  title: 'Our Services | CueClarity Career Counselling',
  description:
    'Explore CueClarity\u2019s career counselling services \u2014 from student guidance and international education to corporate training and emotional wellness.',
  openGraph: {
    title: 'CueClarity Services',
    description: 'Career counselling, international education, life skills & corporate training.',
  },
};

const SERVICE_GROUPS = [
  {
    heading: 'Student Guidance',
    services: [
      {
        icon: <FiBriefcase size={24} />,
        title: 'Career Counselling & Coaching',
        desc: 'Personalized roadmaps powered by psychometric assessments and one-on-one expert mentorship. From stream selection to career pivots.',
        href: '/services/career-counseling',
      },
      {
        icon: <FiGlobe size={24} />,
        title: 'International Education',
        desc: 'Profile building, university shortlisting, SOP writing, and application guidance for global universities.',
        href: '/services/international-education',
      },
      {
        icon: <FiStar size={24} />,
        title: 'Beyond School & Life Skills',
        desc: 'Real-world readiness programs — communication, leadership, financial literacy, and more.',
        href: '/services/life-skills',
      },
    ],
  },
  {
    heading: 'Personal Growth',
    services: [
      {
        icon: <FiBookOpen size={24} />,
        title: 'Khud Ki Kahani, Khud Likho',
        desc: 'A transformative self-discovery program to help you own your narrative, recognize strengths, and build confidence.',
        href: '/services/khud-ki-kahani',
      },
      {
        icon: <FiHeart size={24} />,
        title: 'Emotional Wellness',
        desc: 'Holistic counseling for stress management, anxiety, work-life balance, and emotional resilience.',
        href: '/services/emotional-wellness',
      },
    ],
  },
  {
    heading: 'Professional & Corporate',
    services: [
      {
        icon: <FiSettings size={24} />,
        title: 'Industrial Training',
        desc: 'Hands-on industry immersion programs designed with corporate partners for practical, job-ready skills.',
        href: '/services/industrial-training',
      },
      {
        icon: <FiUsers size={24} />,
        title: 'Workforce Development',
        desc: 'Custom upskilling, team assessments, and leadership development for organizations.',
        href: '/services/workforce-development',
      },
    ],
  },
];

export default function Services() {
  return (
    <>
      {/* HERO */}
      <section className="section-padding px-4 sm:px-6 bg-[var(--primary-black)] text-[var(--primary-white)] relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[var(--primary-yellow)] opacity-[0.04] blur-[100px] rounded-full pointer-events-none translate-x-1/4 translate-y-1/4" />
        <div className="section-container relative z-10">
          <span className="type-eyebrow text-[var(--primary-yellow)] mb-4 block">What We Offer</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight leading-[1.05] font-oswald max-w-3xl">
            Services Designed<br />Around Your Journey
          </h1>
          <p className="type-body text-[var(--primary-white)]/70 mt-6 max-w-2xl text-lg">
            Whether you&apos;re a student choosing your first career, a professional pivoting mid-career, or an
            institution seeking expert programs — we have a solution built for you.
          </p>
        </div>
      </section>

      {/* SERVICE GROUPS */}
      {SERVICE_GROUPS.map((group) => (
        <section
          key={group.heading}
          className="section-padding px-4 sm:px-6 bg-[var(--primary-white)] border-b border-[var(--secondary-white)]"
        >
          <div className="section-container">
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[var(--primary-black)] font-oswald mb-10">
              {group.heading}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {group.services.map((s) => (
                <Link
                  key={s.title}
                  href={s.href}
                  className="group bg-[var(--secondary-white)]/40 rounded-[var(--radius-lg)] p-7 border border-[var(--primary-black)]/5 hover:border-[var(--primary-blue)] hover:-translate-y-1 hover:shadow-xl transition-all duration-[var(--transition-base)] flex flex-col"
                >
                  <div className="w-12 h-12 rounded-[var(--radius-md)] bg-[var(--primary-blue)]/10 text-[var(--primary-blue)] flex items-center justify-center mb-5 group-hover:bg-[var(--primary-blue)] group-hover:text-white transition-colors">
                    {s.icon}
                  </div>
                  <h3 className="font-bold text-lg text-[var(--primary-black)] mb-2 group-hover:text-[var(--primary-blue)] transition-colors">
                    {s.title}
                  </h3>
                  <p className="type-body text-[var(--muted-text)] text-sm mb-6 flex-1">{s.desc}</p>
                  <span className="text-sm font-bold text-[var(--primary-blue)] flex items-center gap-1.5">
                    Learn More
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" size={14} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      <RFQ />
      <Footer />
    </>
  );
}