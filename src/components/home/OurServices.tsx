import React from 'react';
import { 
  FiMap, 
  FiGlobe, 
  FiUsers, 
  FiPenTool, 
  FiCpu, 
  FiTrendingUp, 
  FiArrowRight 
} from 'react-icons/fi';

export default function Services() {
  const services = [
    {
      icon: <FiMap className="w-6 h-6 lg:w-8 lg:h-8" />,
      title: "Career Counselling",
      desc: "Personalized career guidance for students, graduates, and working professionals to make informed career decisions.",
      delay: "0s"
    },
    {
      icon: <FiGlobe className="w-6 h-6 lg:w-8 lg:h-8" />,
      title: "International Education",
      desc: "Complete support for studying abroad - country selection, university guidance, and application strategy.",
      delay: "0.1s"
    },
    {
      icon: <FiUsers className="w-6 h-6 lg:w-8 lg:h-8" />,
      title: "Programs for Schools",
      desc: "Career awareness sessions, stream selection workshops, and psychometric testing for educational institutions.",
      delay: "0.2s"
    },
    {
      icon: <FiPenTool className="w-6 h-6 lg:w-8 lg:h-8" />,
      title: "Training & Workshops",
      desc: "Mental health awareness, communication skills, personality development, and creative writing workshops.",
      delay: "0.3s"
    },
    {
      icon: <FiCpu className="w-6 h-6 lg:w-8 lg:h-8" />,
      title: "Industrial Training",
      desc: "Industry readiness training, technical skill development, and internship preparation for students.",
      delay: "0.4s"
    },
    {
      icon: <FiTrendingUp className="w-6 h-6 lg:w-8 lg:h-8" />,
      title: "Corporate Training",
      desc: "Employee skill development, process improvement, and recruitment support for companies.",
      delay: "0.5s"
    }
  ];

  return (
    // Deep blue background for premium contrast
    <section className="relative py-24 lg:py-32 px-4 sm:px-6 bg-[var(--primary-blue)] overflow-hidden">
      
      {/* Decorative ambient glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[var(--accent-blue)] opacity-30 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-[var(--primary-yellow)] opacity-10 blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* HEADER AREA */}
        <div className="mb-16 lg:mb-20 flex flex-col items-start lg:items-center text-left lg:text-center animate-fade-in-up">
          <span className="type-eyebrow text-[var(--primary-yellow)] mb-4 block">
            Our Expertise
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[var(--primary-white)] leading-[1] font-oswald mb-6">
            Our Services
          </h2>
          <p className="type-lead text-[var(--secondary-white)]/80 max-w-2xl">
            Comprehensive career solutions for every need. We equip you with the exact tools, strategies, and insights required to excel.
          </p>
        </div>

        {/* SERVICES GRID */}
        {/* 1 Col Mobile -> 2 Col Tablet -> 3 Col Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

      </div>
    </section>
  );
}

// ---------------- SUBS ----------------

function ServiceCard({ icon, title, desc, delay }) {
  return (
    <div 
      className={`
        group relative flex flex-col justify-between p-8 lg:p-10 rounded-[var(--radius-xl)]
        bg-[var(--primary-white)]/5 border border-[var(--primary-white)]/10 backdrop-blur-md
        transition-all duration-[var(--transition-base)]
        hover:bg-[var(--primary-white)]/10 hover:border-[var(--primary-yellow)]/40 hover:-translate-y-2
        animate-fade-in-up cursor-pointer overflow-hidden
      `}
      style={{ animationDelay: delay, animationFillMode: 'both' }}
    >
      {/* Hover Glow Effect behind the icon */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--primary-yellow)] opacity-0 group-hover:opacity-10 blur-[50px] transition-opacity duration-[var(--transition-slow)] rounded-full translate-x-1/2 -translate-y-1/2"></div>

      <div className="flex flex-col gap-6 relative z-10">
        {/* Icon Container */}
        <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-[var(--radius-lg)] bg-[var(--primary-white)]/10 border border-[var(--primary-white)]/10 flex items-center justify-center text-[var(--primary-yellow)] group-hover:scale-110 group-hover:bg-[var(--primary-yellow)] group-hover:text-[var(--primary-black)] transition-all duration-[var(--transition-base)]">
          {icon}
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-3">
          <h3 
            className="text-2xl text-[var(--primary-white)] uppercase"
            style={{ 
              fontFamily: 'var(--font-oswald), system-ui, sans-serif',
              fontWeight: '700',
              letterSpacing: 'var(--tracking-tight)'
            }}
          >
            {title}
          </h3>
          <p className="type-body text-[var(--primary-white)]/70 line-clamp-3">
            {desc}
          </p>
        </div>
      </div>

      {/* CTA / Learn More */}
      <div className="mt-8 flex items-center gap-2 text-[var(--primary-yellow)] font-semibold text-sm tracking-wide relative z-10">
        <span className="group-hover:mr-2 transition-all duration-[var(--transition-base)]">
          Learn More
        </span>
        <FiArrowRight className="w-4 h-4 transition-transform duration-[var(--transition-base)] group-hover:translate-x-1" />
      </div>
    </div>
  );
}