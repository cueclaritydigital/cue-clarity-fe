'use client';

import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { getWhatsAppURL } from '@/lib/whatsapp';

export default function FAQ() {
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
    },
    {
      question: "What if I'm not sure what career path is right for me?",
      answer: "That's exactly what we're here for. Most of our clients start with uncertainty — our structured assessment and expert guidance are designed to uncover paths you may not have considered, matched to your unique strengths and interests."
    },
    {
      question: "How much does career counselling cost?",
      answer: "We offer packages starting from individual sessions to comprehensive multi-week programs. The first discovery call is always free. After understanding your needs, we'll recommend the most suitable package — no hidden costs, no pressure."
    },
    {
      question: "Can you help with international university applications?",
      answer: "Absolutely. Our International Education service covers profile building, university shortlisting, SOP/essay reviews, scholarship identification, and application strategy for universities in the US, UK, Canada, Australia, Germany, and more."
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="section-padding px-4 sm:px-6 bg-[var(--primary-white)]">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">

        {/* LEFT COLUMN */}
        <div className="w-full lg:w-1/3 lg:sticky lg:top-32 h-fit animate-fade-in-up">
          <span className="type-eyebrow text-[var(--accent-blue)] mb-3 block">
            Clear Your Doubts
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-[var(--primary-black)] leading-[1] font-oswald mb-6">
            Frequently <br className="hidden lg:block" />
            Asked Questions
          </h2>
          <p className="type-body text-[var(--muted-text)] mb-8">
            Can&apos;t find the answer you&apos;re looking for? Reach out to our team and we&apos;ll be happy to help clarify our process.
          </p>
          {/* WhatsApp CTA in sidebar */}
          <a
            href={getWhatsAppURL('general', 'faq')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-sm"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Ask Us on WhatsApp
          </a>
        </div>

        {/* RIGHT COLUMN */}
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
                <div className={`grid transition-all duration-[var(--transition-slow)] ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
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