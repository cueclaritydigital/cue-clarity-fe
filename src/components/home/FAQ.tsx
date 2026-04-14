"use client";
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { getWhatsAppURL } from "@/lib/whatsapp";
import { CTA } from "@/analytics/CTA";

export default function FAQ() {
  const faqs = [
    {
      question: "What exactly happens in the first consultation?",
      answer:
        "Our initial 15-minute discovery call is completely free. We use this time to understand your current situation, identify your core challenges, and determine if our structured counseling process is the right fit for your specific goals.",
    },
    {
      question: "Are your psychometric assessments really accurate?",
      answer:
        "Yes. We don't use generic internet quizzes. We utilize internationally validated, scientifically backed psychometric tools that measure your innate aptitudes, personality traits, and core interests with high precision.",
    },
    {
      question: "Do you only help school students, or professionals too?",
      answer:
        "We help individuals at every stage. We have specialized roadmaps for Class 8-12 students (stream/college selection), college graduates (first job/masters), and working professionals looking for career transitions or upskilling.",
    },
    {
      question: "For students, do parents need to be involved in the sessions?",
      answer:
        "We highly encourage parent involvement, especially for Class 8-12 students. We usually conduct a joint session at the end of the assessment phase to ensure parents and students are perfectly aligned on the chosen career roadmap.",
    },
    {
      question: "How long does the entire counseling process take?",
      answer:
        "Typically, our comprehensive process spans 3 to 4 weeks. This includes the initial assessment, detailed report generation, 1-on-1 expert counseling sessions, and the final roadmap delivery. However, we also offer ongoing mentorship.",
    },
    {
      question: "What if I'm not sure what career path is right for me?",
      answer:
        "That's exactly what we're here for. Most of our clients start with uncertainty — our structured assessment and expert guidance are designed to uncover paths you may not have considered, matched to your unique strengths and interests.",
    },
    {
      question: "How much does career counselling cost?",
      answer:
        "We offer packages starting from individual sessions to comprehensive multi-week programs. The first discovery call is always free. After understanding your needs, we'll recommend the most suitable package — no hidden costs, no pressure.",
    },
    {
      question: "Can you help with international university applications?",
      answer:
        "Absolutely. Our International Education service covers profile building, university shortlisting, SOP/essay reviews, scholarship identification, and application strategy for universities in the US, UK, Canada, Australia, Germany, and more.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 bg-[var(--primary-white)]">
      {/* Background glow */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-blue-200/10 blur-[120px] rounded-full" />
      </div> */}

      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* LEFT COLUMN */}
        <div className="w-full lg:w-1/3 lg:sticky lg:top-32 h-fit">
          <span className="text-yellow-500 text-base font-bold tracking-widest uppercase mb-3 block">
            Clear Your Doubts
          </span>
          <h2 className="heading-font text-[var(--primary-blue)] text-4xl sm:text-5xl mb-6">
            Frequently <br className="hidden lg:block" />
            Asked Questions
          </h2>
          <p className="text-gray-500 leading-relaxed mb-8">
            Can&apos;t find the answer you&apos;re looking for? Reach out to our
            team and we&apos;ll be happy to help clarify our process.
          </p>
          <CTA
            external
            event="whatsapp_click"
            eventData={{
              source: "FAQ",
            }}
            href={getWhatsAppURL("general", "faq")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-blue-950 px-7 py-3.5 rounded-full font-bold text-sm tracking-wide hover:bg-yellow-300 transition-all duration-200 hover:-translate-y-px shadow-[0_6px_24px_rgba(255,193,20,0.4)]"
          >
            <FaWhatsapp className="w-4 h-4" />
            Ask Us on WhatsApp
          </CTA>
        </div>

        {/* RIGHT COLUMN */}
        <div className="w-full lg:w-2/3 flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-blue-950 bg-gray-50/40 shadow-sm"
                    : "border-gray-200 bg-white hover:border-gray-400"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 lg:p-8 text-left focus:outline-none"
                >
                  <h3
                    className={`font-oswald font-bold text-lg lg:text-xl uppercase tracking-tight transition-colors duration-300 ${
                      isOpen ? "text-blue-950" : "text-blue-950/80"
                    }`}
                  >
                    {faq.question}
                  </h3>
                  <div
                    className={`shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                      isOpen
                        ? "bg-blue-950 text-white"
                        : "bg-blue-950/5 text-blue-950"
                    }`}
                  >
                    {isOpen ? <FiMinus /> : <FiPlus />}
                  </div>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-gray-500 leading-relaxed px-6 lg:px-8 pb-6 lg:pb-8 pt-0">
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
