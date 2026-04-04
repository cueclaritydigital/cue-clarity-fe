import FadeInView from "@/components/animate/FadeInView";
import { slideInLeft, slideInRight } from "@/lib/animations/variants";
import { FaLinkedin } from "react-icons/fa";

export default function FounderSection() {
  return (
    <section className="relative py-24 px-4 sm:px-6 overflow-hidden bg-gray-50/80">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-100px] right-[-80px] w-[500px] h-[500px] bg-blue-200/15 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Portrait */}
          <FadeInView
            variants={slideInLeft}
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            <div className="relative group">
              <div className="absolute inset-0 rounded-3xl translate-x-4 translate-y-4 -z-10 bg-blue-950 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500" />
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
                <img
                  src="https://res.cloudinary.com/dy7okgtgd/image/upload/v1775225982/f4dc0f1d-dfb4-4086-a28d-abe1842aae68.JPG_1_la51u1_mv1a2f.jpg"
                  alt="Founder of CueClarity — career counselling pioneer"
                  width={480}
                  height={600}
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </FadeInView>

          {/* Content */}
          <FadeInView
            variants={slideInRight}
            className="lg:col-span-7 pt-4 lg:pt-10"
          >
            <span className="text-yellow-500 text-base font-bold tracking-widest uppercase">
              A Message from our Founder
            </span>

            <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl heading-font text-[var(--primary-blue)]">
              Sunil Kumar Panda
            </h2>

            <div className="flex items-center gap-4 mt-3 mb-10">
              <p className="text-xs tracking-widest uppercase text-gray-400 font-medium">
                Founder &amp; Chief Career Strategist, CueClarity
              </p>
              <a
                href="https://www.linkedin.com/in/sunil-kumar-panda-consultant/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sunil Kumar Panda on LinkedIn"
                className="text-[#0A66C2] hover:opacity-75 transition-opacity duration-200"
              >
                <FaLinkedin size={22} />
              </a>
            </div>

            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium leading-snug text-blue-950 pl-8 lg:pl-10 mb-8 border-l-4 border-yellow-400">
              &ldquo;Career clarity isn&rsquo;t about having all the answers —
              it&rsquo;s about asking the right questions. At CueClarity, we
              built a culture where curiosity drives every conversation.&rdquo;
            </blockquote>

            <p className="text-lg leading-relaxed text-gray-500 mb-10">
              &ldquo;We believe that radical focus isn&rsquo;t just a strategy;
              it&rsquo;s the only way to find the signal in the growing noise of
              career choices. Our framework was designed to distil complex
              environments into actionable career cues — so every student,
              parent, and professional can move forward with confidence.&rdquo;
            </p>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
