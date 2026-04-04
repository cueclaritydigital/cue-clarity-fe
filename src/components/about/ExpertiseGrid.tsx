import FadeInView from "@/components/animate/FadeInView";
import StaggerInView from "@/components/animate/StaggerInView";
import { fadeUp } from "@/lib/animations/variants";
import {
  FiCompass,
  FiAward,
  FiBookOpen,
  FiGlobe,
  FiLayers,
} from "react-icons/fi";

const EXPERTISE = [
  {
    icon: <FiCompass className="w-6 h-6" />,
    title: "Career Counselling",
    desc: "Personalised mentorship for students and professionals at every stage.",
    accent: "var(--primary-yellow)",
    bg: "rgba(255,193,20,0.12)",
  },
  {
    icon: <FiAward className="w-6 h-6" />,
    title: "Competitive Exams",
    desc: "Guidance for Defence, Banking, SSC, and other high-stakes examinations.",
    accent: "var(--primary-blue)",
    bg: "rgba(41,50,110,0.1)",
  },
  {
    icon: <FiBookOpen className="w-6 h-6" />,
    title: "MBA & Master's",
    desc: "Expert admissions support for top MBA and postgraduate programmes.",
    accent: "#059669",
    bg: "rgba(5,150,105,0.1)",
  },
  {
    icon: <FiGlobe className="w-6 h-6" />,
    title: "International Education",
    desc: "Consulting for global universities across 21+ countries worldwide.",
    accent: "#D97706",
    bg: "rgba(217,119,6,0.1)",
  },
  {
    icon: <FiLayers className="w-6 h-6" />,
    title: "Profile Building",
    desc: "Comprehensive profile development across diverse academic and professional domains.",
    accent: "#6D28D9",
    bg: "rgba(109,40,217,0.1)",
  },
];

export default function ExpertiseGrid() {
  return (
    <section
      className="section-padding px-4 sm:px-6 relative overflow-hidden"
      style={{ backgroundColor: "var(--secondary-white)" }}
    >
      <div className="section-container">
        {/* Header */}
        <FadeInView className="mb-12 lg:mb-16">
          <span
            className="type-label mb-4 block"
            style={{
              color: "var(--primary-yellow)",
              fontSize: "var(--text-base)",
            }}
          >
            Our Expertise
          </span>
          <h2
            style={{
              fontFamily: "var(--font-oswald)",
              fontWeight: 800,
              fontSize: "clamp(2.25rem, 6vw, 3.75rem)",
              color: "var(--primary-blue)",
              textTransform: "uppercase",
              lineHeight: 1,
            }}
          >
            Years of{" "}
            <span style={{ color: "var(--primary-yellow)" }}>
              Deep Experience
            </span>
          </h2>
        </FadeInView>

        {/* Grid — 3 top, 2 bottom centred */}
        <StaggerInView className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {EXPERTISE.map((item, i) => (
            <FadeInView
              key={item.title}
              variants={fadeUp}
              className={`group relative p-6 sm:p-8 rounded-2xl lg:rounded-[2rem] bg-white transition-all duration-300 hover:-translate-y-1 ${
                i >= 3
                  ? "lg:col-span-1 lg:last:col-start-2 lg:[&:nth-child(4)]:col-start-1 lg:[&:nth-child(4)]:justify-self-end lg:[&:nth-child(5)]:justify-self-start"
                  : ""
              }`}
              style={{
                boxShadow: "var(--shadow-sm)",
                borderLeft: `3px solid ${item.accent}`,
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: item.bg, color: item.accent }}
              >
                {item.icon}
              </div>

              <h3
                className="mb-3"
                style={{
                  fontFamily: "var(--font-oswald)",
                  fontWeight: 700,
                  fontSize: "clamp(1.1rem, 2vw, 1.3rem)",
                  color: "var(--primary-black)",
                  textTransform: "uppercase",
                  letterSpacing: "var(--tracking-tight)",
                }}
              >
                {item.title}
              </h3>

              <p
                className="leading-relaxed"
                style={{
                  color: "var(--muted-text)",
                  fontSize: "var(--text-sm)",
                }}
              >
                {item.desc}
              </p>
            </FadeInView>
          ))}
        </StaggerInView>
      </div>
    </section>
  );
}
