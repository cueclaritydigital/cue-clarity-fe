import FadeInView from "@/components/animate/FadeInView";
import StaggerInView from "@/components/animate/StaggerInView";
import { fadeUp } from "@/lib/animations/variants";
import { FiSun, FiHeart, FiTrendingUp, FiSmile, FiZap } from "react-icons/fi";

const VALUES = [
  {
    icon: <FiSun className="w-5 h-5" />,
    title: "Clarity over Confusion",
    desc: "We cut through noise to deliver focused, actionable insight.",
    accent: "var(--primary-yellow)",
  },
  {
    icon: <FiHeart className="w-5 h-5" />,
    title: "Purpose over Pressure",
    desc: "We guide with intention, not urgency or fear.",
    accent: "var(--primary-blue)",
  },
  {
    icon: <FiTrendingUp className="w-5 h-5" />,
    title: "Growth over Shortcuts",
    desc: "We invest in long-term transformation, not quick fixes.",
    accent: "#059669",
  },
  {
    icon: <FiSmile className="w-5 h-5" />,
    title: "Empathy over Judgement",
    desc: "We listen first, always — with compassion and understanding.",
    accent: "#D97706",
  },
  {
    icon: <FiZap className="w-5 h-5" />,
    title: "Impact over Information",
    desc: "We measure success by lives changed, not data delivered.",
    accent: "#6D28D9",
  },
];

export default function CoreValues() {
  return (
    <section className="section-padding px-4 sm:px-6 bg-[var(--primary-white)]">
      <div className="section-container">
        {/* Header */}
        <FadeInView className="text-center mb-12 lg:mb-16">
          <span
            className="type-label mb-4 block"
            style={{
              color: "var(--primary-yellow)",
              fontSize: "var(--text-base)",
            }}
          >
            What We Stand For
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
            Our Core{" "}
            <span style={{ color: "var(--primary-yellow)" }}>Values</span>
          </h2>
        </FadeInView>

        {/* 5 values — top 3, bottom 2 centred */}
        <StaggerInView className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {VALUES.map((v, i) => (
            <FadeInView
              key={v.title}
              variants={fadeUp}
              className={`group flex items-start gap-4 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 ${
                i === 3 ? "lg:col-start-1 lg:justify-self-center" : ""
              } ${i === 4 ? "lg:col-start-2 lg:justify-self-center" : ""} ${
                i >= 3 ? "sm:col-span-1" : ""
              }`}
              style={{
                backgroundColor: "var(--surface-card)",
                border: "1px solid var(--secondary-white)",
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundColor: `${v.accent}18`,
                  color: v.accent,
                }}
              >
                {v.icon}
              </div>
              <div>
                <h3
                  className="mb-1.5"
                  style={{
                    fontFamily: "var(--font-oswald)",
                    fontWeight: 700,
                    fontSize: "var(--text-base)",
                    color: "var(--primary-black)",
                    textTransform: "uppercase",
                    letterSpacing: "var(--tracking-tight)",
                  }}
                >
                  {v.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--muted-text)" }}
                >
                  {v.desc}
                </p>
              </div>
            </FadeInView>
          ))}
        </StaggerInView>
      </div>
    </section>
  );
}
