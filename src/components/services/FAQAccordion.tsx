"use client";

import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import type { FAQSection } from "@/lib/data/services";

export default function FAQAccordion({ section }: { section: FAQSection }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* LEFT COLUMN */}
        <div className="w-full lg:w-1/3 lg:sticky lg:top-32 h-fit">
          {section.eyebrow && (
            <span className="text-blue-700 text-base font-bold tracking-widest uppercase mb-3 block">
              {section.eyebrow}
            </span>
          )}
          <h2
            className="heading-font text-4xl sm:text-5xl text-[var(--primary-blue)] mb-6"
            dangerouslySetInnerHTML={{
              __html: section.headline.replace(
                /<em>(.*?)<\/em>/g,
                '<span style="color:#ffc114">$1</span>',
              ),
            }}
          />
          <p className="text-base text-gray-500 leading-relaxed mb-8">
            Can&apos;t find the answer you&apos;re looking for? Reach out to our
            team and we&apos;ll be happy to help.
          </p>
        </div>

        {/* RIGHT COLUMN */}
        <div className="w-full lg:w-2/3 flex flex-col gap-4">
          {section.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-blue-950 bg-gray-50/40 shadow-sm"
                    : "border-gray-200 bg-white hover:border-gray-400"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between p-6 lg:p-8 text-left focus:outline-none"
                >
                  <h3
                    className={`font-oswald font-bold text-lg lg:text-xl uppercase tracking-tight transition-colors duration-300 ${
                      isOpen ? "text-blue-950" : "text-blue-950"
                    }`}
                  >
                    {item.question}
                  </h3>
                  <div
                    className={`shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                      isOpen
                        ? "bg-blue-950 text-white"
                        : "bg-gray-100 text-blue-950"
                    }`}
                  >
                    {isOpen ? <FiMinus /> : <FiPlus />}
                  </div>
                </button>
                <div
                  className={`grid transition-all duration-500 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-base text-gray-500 leading-relaxed px-6 lg:px-8 pb-6 lg:pb-8 pt-0">
                      {item.answer}
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
