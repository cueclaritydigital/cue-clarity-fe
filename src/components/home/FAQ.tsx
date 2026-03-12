'use client'; // Required in Next.js App Router for interactive components using useState

import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

export default function FAQ() {
  // Common, high-converting FAQ data tailored for a career consulting firm
  const faqs = [
    {
      question: "What exactly happens in the first consultation?",
      answer: "Our initial 15-minute discovery call is completely free. We use this time to understand your current situation, identify your core challenges, and determine if our structured counseling process is the right fit for your specific goals."
    },
    {
      question: "Are your psychometric assessments really accurate?",
      answer: "Yes. We don't use generic internet quizzes. We utilize internationally validated, scientifically backed psychometric tools that measure your innate aptitudes, personality traits, and core interests with high precision."
    },
    {
      question: "Do you only help school students, or professionals too?",
      answer: "We help individuals at every stage. We have specialized roadmaps for Class 8-12 students (stream/college selection), college graduates (first job/masters), and working professionals looking for career transitions or upskilling."
    },
    {
      question: "For students, do parents need to be involved in the sessions?",
      answer: "We highly encourage parent involvement, especially for Class 8-12 students. We usually conduct a joint session at the end of the assessment phase to ensure parents and students are perfectly aligned on the chosen career roadmap."
    },
    {
      question: "How long does the entire counseling process take?",
      answer: "Typically, our comprehensive process spans 3 to 4 weeks. This includes the initial assessment, detailed report generation, 1-on-1 expert counseling sessions, and the final roadmap delivery. However, we also offer ongoing mentorship."
    }
  ];

  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    // Clean white background to contrast with the dark CTA that will follow
    <section className="py-24 lg:py-32 px-4 sm:px-6 bg-[var(--primary-white)]">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* LEFT COLUMN: Header (Sticky on Desktop) */}
        <div className="w-full lg:w-1/3 lg:sticky lg:top-32 h-fit animate-fade-in-up">
          <span className="type-eyebrow text-[var(--accent-blue)] mb-3 block">
            Clear Your Doubts
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-[var(--primary-black)] leading-[1] font-oswald mb-6">
            Frequently <br className="hidden lg:block" />
            Asked Questions
          </h2>
          <p className="type-body text-[var(--muted-text)]">
            Can't find the answer you're looking for? Reach out to our team and we'll be happy to help clarify our process.
          </p>
        </div>

        {/* RIGHT COLUMN: Accordion List */}
        <div className="w-full lg:w-2/3 flex flex-col gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index} 
                className={`
                  border rounded-[var(--radius-lg)] transition-all duration-[var(--transition-base)] overflow-hidden
                  ${isOpen ? 'border-[var(--primary-blue)] bg-[var(--secondary-white)]/40 shadow-sm' : 'border-[var(--primary-black)]/10 bg-white hover:border-[var(--primary-black)]/30'}
                `}
              >
                {/* Accordion Button */}
                <button 
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 lg:p-8 text-left focus:outline-none"
                >
                  <h3 
                    className={`text-lg lg:text-xl uppercase font-bold transition-colors duration-[var(--transition-base)] ${isOpen ? 'text-[var(--primary-blue)]' : 'text-[var(--primary-black)]'}`}
                    style={{ fontFamily: 'var(--font-oswald), system-ui, sans-serif', letterSpacing: 'var(--tracking-tight)' }}
                  >
                    {faq.question}
                  </h3>
                  <div className={`shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-[var(--transition-base)] ${isOpen ? 'bg-[var(--primary-blue)] text-white' : 'bg-[var(--primary-black)]/5 text-[var(--primary-black)]'}`}>
                    {isOpen ? <FiMinus /> : <FiPlus />}
                  </div>
                </button>

                {/* Accordion Content */}
                <div 
                  className={`grid transition-all duration-[var(--transition-slow)] ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <p className="type-body text-[var(--muted-text)] px-6 lg:px-8 pb-6 lg:pb-8 pt-0">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}