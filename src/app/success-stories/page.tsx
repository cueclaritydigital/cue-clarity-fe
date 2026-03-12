import type { Metadata } from 'next';
import Footer from '@/components/common/Footer';
import RFQ from '@/components/common/RFQ';

export const metadata: Metadata = {
  title: 'Success Stories | CueClarity',
  description:
    'Read real stories of students, parents, and professionals who transformed their careers with CueClarity\'s guidance.',
  openGraph: {
    title: 'CueClarity Success Stories',
    description: 'Real career transformations from real people.',
  },
};

const STORIES = [
  {
    name: 'Ananya Mehta',
    role: 'Software Engineer → Product Manager',
    location: 'Bangalore',
    quote:
      'After just 3 sessions, I had a crystal-clear roadmap to transition into product management. Landed my dream PM role within 4 months.',
    initial: 'A',
    color: 'bg-[var(--primary-blue)]',
  },
  {
    name: 'Kartik Verma',
    role: 'B.Com Graduate → UX Designer',
    location: 'Pune',
    quote:
      'I was completely lost after graduating. CueClarity helped me discover UX design and gave me a concrete plan. Now I\'m working at a top design studio.',
    initial: 'K',
    color: 'bg-[var(--blob-glow)]',
  },
  {
    name: 'Meera Sharma',
    role: 'Parent of Class 10 Student',
    location: 'Delhi',
    quote:
      'As a parent, I was anxious about my son\'s future. CueClarity gave us both clarity — structured assessments, honest guidance, and a plan we could trust.',
    initial: 'M',
    color: 'bg-teal-600',
  },
  {
    name: 'Priya Nair',
    role: 'Marketing Manager → Career Clarity',
    location: 'Mumbai',
    quote:
      'The assessment revealed exactly why I was unhappy at work. Finally understood which role would make me thrive. Life-changing conversation.',
    initial: 'P',
    color: 'bg-orange-500',
  },
  {
    name: 'Sanya Kapoor',
    role: 'Class 12 Student → Architecture',
    location: 'Mumbai',
    quote:
      'My parents kept pushing engineering. One session helped me — and them — see that architecture was my true calling.',
    initial: 'S',
    color: 'bg-purple-500',
  },
  {
    name: 'Rahul Desai',
    role: 'Finance → Data Science',
    location: 'Hyderabad',
    quote:
      'Switched careers after 8 years. CueClarity made it feel possible, not terrifying. Best decision I ever made.',
    initial: 'R',
    color: 'bg-[var(--primary-blue)]',
  },
];

export default function SuccessStories() {
  return (
    <>
      {/* HERO */}
      <section className="section-padding px-4 sm:px-6 bg-[var(--primary-black)] text-[var(--primary-white)] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-[var(--primary-yellow)] opacity-[0.04] blur-[120px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/3" />
        <div className="section-container relative z-10 text-center max-w-3xl mx-auto">
          <span className="type-eyebrow text-[var(--primary-yellow)] mb-4 block">Success Stories</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight leading-[1.05] font-oswald">
            Real Results From<br />Real People
          </h1>
          <p className="type-body text-[var(--primary-white)]/70 mt-6 text-lg">
            Every story here started with confusion and ended with clarity. These are the career transformations
            we&apos;re most proud of.
          </p>
        </div>
      </section>

      {/* STORIES GRID */}
      <section className="section-padding px-4 sm:px-6 bg-[var(--primary-white)]">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {STORIES.map((s) => (
              <div
                key={s.name}
                className="rounded-[var(--radius-lg)] border border-[var(--primary-black)]/5 p-7 hover:border-[var(--primary-black)] hover:-translate-y-1 hover:shadow-xl transition-all duration-[var(--transition-base)] flex flex-col"
              >
                <div className="text-[var(--primary-yellow)] text-sm tracking-widest mb-4">★★★★★</div>
                <p className="type-body text-[var(--primary-black)]/80 text-sm leading-relaxed mb-6 flex-1">
                  &ldquo;{s.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 border-t border-[var(--secondary-white)] pt-5">
                  <div
                    className={`w-10 h-10 rounded-[var(--radius-sm)] ${s.color} text-white flex items-center justify-center font-bold text-[15px]`}
                  >
                    {s.initial}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[13px] font-bold text-[var(--primary-black)]">{s.name}</span>
                    <span className="text-[11px] text-[var(--muted-text)]">
                      {s.role} &bull; {s.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RFQ />
      <Footer />
    </>
  );
}