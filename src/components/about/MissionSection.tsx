import FadeInView from "@/components/animate/FadeInView";
import StaggerInView from "@/components/animate/StaggerInView";
import { fadeUp, slideInLeft } from "@/lib/animations/variants";
import { FiTarget, FiHeart, FiUsers, FiAward } from "react-icons/fi";

const VALUES = [
  {
    icon: <FiHeart className="w-5 h-5" />,
    title: "Empathy",
    desc: "We listen before we advise. Your story, goals, and fears matter more than any test score.",
  },
  {
    icon: <FiTarget className="w-5 h-5" />,
    title: "Clarity",
    desc: "Every decision starts with understanding. We replace confusion with evidence-based insight.",
  },
  {
    icon: <FiUsers className="w-5 h-5" />,
    title: "Inclusivity",
    desc: "Career decisions affect everyone. We bring parents, students, and professionals to the same table.",
  },
  {
    icon: <FiAward className="w-5 h-5" />,
    title: "Outcomes",
    desc: "Not just advice — we track results. Our success is measured by your career outcomes.",
  },
];

export default function MissionSection() {
  return (
    <section
      className="section-padding px-4 sm:px-6 relative overflow-hidden"
      style={{ backgroundColor: "var(--primary-blue)" }}
    >
      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[var(--blob-glow)] opacity-[0.15] blur-[120px] rounded-full" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,193,20,0.05),transparent_50%)]" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left — mission statement */}
          <FadeInView variants={slideInLeft}>
            <div
              className="w-16 h-16 lg:w-20 lg:h-20 rounded-3xl flex items-center justify-center mb-8 rotate-3 hover:rotate-12 transition-transform duration-300"
              style={{ backgroundColor: "var(--primary-yellow)" }}
            >
              <FiTarget
                className="w-8 h-8 lg:w-10 lg:h-10"
                style={{ color: "var(--primary-blue)" }}
              />
            </div>

            <h2
              style={{
                fontFamily: "var(--font-oswald)",
                fontWeight: 800,
                fontSize: "clamp(2.25rem, 6vw, 4rem)",
                color: "var(--primary-white)",
                textTransform: "uppercase",
                letterSpacing: "var(--tracking-tight)",
                lineHeight: 0.95,
              }}
            >
              Our <br />
              <span style={{ color: "var(--primary-yellow)" }}>Mission</span>
            </h2>

            <p
              className="text-xl lg:text-2xl leading-relaxed font-light italic mt-8"
              style={{ color: "rgba(255,255,255,0.8)" }}
            >
              &ldquo;To empower students, parents, and professionals with the
              strategic clarity needed to make confident, informed career
              decisions — and turn potential into tangible success.&rdquo;
            </p>
          </FadeInView>

          {/* Right — values grid */}
          <StaggerInView className="grid grid-cols-2 gap-4 sm:gap-5">
            {VALUES.map((v) => (
              <FadeInView
                key={v.title}
                variants={fadeUp}
                className="group p-4 sm:p-7 lg:p-8 sm:backdrop-blur-xl sm:rounded-[2rem] sm:hover:bg-white/10 transition-colors duration-300"
                style={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    backgroundColor: "rgba(255,193,20,0.2)",
                    color: "var(--primary-yellow)",
                  }}
                >
                  {v.icon}
                </div>
                <h3
                  className="font-extrabold text-lg mb-2"
                  style={{ color: "var(--primary-white)" }}
                >
                  {v.title}
                </h3>
                <p
                  className="text-sm"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  {v.desc}
                </p>
              </FadeInView>
            ))}
          </StaggerInView>
        </div>
      </div>
    </section>
  );
}
