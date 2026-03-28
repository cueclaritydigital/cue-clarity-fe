import {
  FiBookOpen,
  FiCompass,
  FiTarget,
  FiBriefcase,
  FiArrowRight,
  FiCheck,
} from "react-icons/fi";
import FadeInView from "@/components/animate/FadeInView";
import StaggerInView from "@/components/animate/StaggerInView";
import { fadeUp } from "@/lib/animations/variants";
const SEGMENTS = [
  {
    icon: <FiBookOpen strokeWidth={1.5} className="w-5 h-5" />,
    badge: "Class 8 – 10",
    title: "School Students",
    desc: "Early direction before exam pressure locks in the wrong decisions.",
    points: [
      "Discover strengths and natural aptitudes",
      "Explore subjects and future career options",
      "Build early clarity and confidence",
      "Align career choices with parental guidance",
    ],
    accent: "var(--primary-blue)",
    accentBg: "rgba(41,50,110,0.08)",
    borderColor: "var(--primary-blue)",
    image:
      "https://res.cloudinary.com/dcudnuu04/image/upload/v1774682158/Gemini_Generated_Image_253mlq253mlq253m_q70txm.webp",
    imageAlt: "School students studying together in a classroom",
  },
  {
    icon: <FiCompass strokeWidth={1.5} className="w-5 h-5" />,
    badge: "Class 11 – 12",
    title: "Pre-College",
    desc: "Stream chosen — now what? Entrance strategy and the right college match.",
    points: [
      "Identify careers that match your abilities",
      "Explore emerging career opportunities",
      "Plan the right education pathway",
      "Make informed college choices",
    ],
    accent: "#D97706",
    accentBg: "rgba(217,119,6,0.08)",
    borderColor: "#D97706",
    image:
      "https://res.cloudinary.com/dcudnuu04/image/upload/v1774682158/Gemini_Generated_Image_dc906idc906idc90_p0bmqv.webp",
    imageAlt: "Students celebrating at a graduation ceremony",
  },
  {
    icon: <FiTarget strokeWidth={1.5} className="w-5 h-5" />,
    badge: "Undergrad & Postgrad",
    title: "College Students",
    desc: "From confused fresher to confident professional with a clear path forward.",
    points: [
      "Career discovery and pathway planning",
      "Skill and profile development roadmap",
      "Internship and opportunity strategy",
      "Higher studies and career planning",
    ],
    accent: "#059669",
    accentBg: "rgba(5,150,105,0.08)",
    borderColor: "#059669",
    image:
      "https://res.cloudinary.com/dcudnuu04/image/upload/v1774682158/Gemini_Generated_Image_yhj9vtyhj9vtyhj9_q9rpwv.webp",
    imageAlt: "College students collaborating on a group project",
  },
  {
    icon: <FiBriefcase strokeWidth={1.5} className="w-5 h-5" />,
    badge: "Working Professionals",
    title: "Professionals",
    desc: "Pivot, upskill, or accelerate your career — with a data-backed plan.",
    points: [
      "Evaluate current career growth and gaps",
      "Plan strategic career transitions",
      "Build in-demand skills and expertise",
      "Accelerate growth into leadership roles",
    ],
    accent: "#6D28D9",
    accentBg: "rgba(109,40,217,0.08)",
    borderColor: "#6D28D9",
    image:
      "https://res.cloudinary.com/dcudnuu04/image/upload/v1774682158/Gemini_Generated_Image_qqdgy8qqdgy8qqdg_stbvd2.webp",
    imageAlt: "Professionals in a strategic career planning meeting",
  },
];

export default function WhoWeHelp() {
  return (
    <section
      className="section-padding px-4 sm:px-6 section-container"
      style={{ backgroundColor: "var(--primary-white)" }}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,360px)_1fr] gap-12 lg:gap-20 items-start">
          {/* ─── LEFT: PINNED HEADER ─────────────────────────────────── */}
          <FadeInView className="lg:sticky lg:top-28 flex flex-col gap-6">
            <span
              className="type-eyebrow"
              style={{
                color: "var(--accent-blue)",
                fontSize: "var(--text-base)",
              }}
            >
              Who We Help
            </span>

            <h2
              style={{
                fontFamily: "var(--font-oswald)",
                fontWeight: 800,
                fontSize: "clamp(2.75rem, 6vw, 4.25rem)",
                lineHeight: 0.95,
                letterSpacing: "var(--tracking-tight)",
                color: "var(--primary-black)",
                textTransform: "uppercase",
              }}
            >
              Every Stage.
              <br />
              <span style={{ color: "var(--primary-blue)" }}>
                Every Person.
              </span>
            </h2>

            <p
              className="type-lead"
              style={{ color: "var(--muted-text)", maxWidth: "28ch" }}
            >
              Personalised guidance for students, families, and professionals at
              every turning point.
            </p>

            {/* Stat divider */}
            <div
              className="py-6 border-t border-b"
              style={{ borderColor: "rgba(12,21,24,0.08)" }}
            >
              <p
                style={{
                  fontFamily: "var(--font-oswald)",
                  fontSize: "clamp(2.25rem, 5vw, 3.25rem)",
                  fontWeight: 800,
                  color: "var(--primary-black)",
                  letterSpacing: "var(--tracking-tight)",
                  lineHeight: 1,
                }}
              >
                5,000+
              </p>
              <p
                className="type-label mt-1.5"
                style={{ color: "var(--muted-text)" }}
              >
                Careers Transformed
              </p>
            </div>

            <a
              href="/services"
              className="inline-flex items-center gap-2 font-bold group/link w-fit"
              style={{
                fontSize: "var(--text-sm)",
                color: "var(--primary-blue)",
                letterSpacing: "var(--tracking-wide)",
              }}
            >
              Explore All Services
              <FiArrowRight
                size={13}
                className="group-hover/link:translate-x-1 transition-transform"
              />
            </a>
          </FadeInView>

          {/* ─── RIGHT: 2×2 CARD GRID ─────────────────────────────────── */}
          <StaggerInView className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
            {SEGMENTS.map((s, i) => (
              <FadeInView
                key={s.title}
                variants={fadeUp}
                className="group bg-[var(--surface-card)] rounded-[var(--radius-xl)] overflow-hidden flex flex-col hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                style={{
                  boxShadow: "var(--shadow-sm)",
                  borderLeft: `3px solid ${s.borderColor}`,
                }}
              >
                {/* Card image */}
                <div className="relative w-full h-40 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.imageAlt}
                    className="w-full h-full object-cover  transition-transform duration-500"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, var(--surface-card) 0%, transparent 30%)",
                    }}
                  />
                </div>

                <div className="p-7 pt-3 flex flex-col gap-5 flex-1">
                  {/* Icon + Badge row */}
                  <div className="flex items-start justify-between gap-3">
                    <div
                      className="w-11 h-11 rounded-[var(--radius-md)] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: s.accentBg, color: s.accent }}
                    >
                      {s.icon}
                    </div>
                    <span
                      className="type-label px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: s.accentBg, color: s.accent }}
                    >
                      {s.badge}
                    </span>
                  </div>

                  {/* Title + Desc */}
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-oswald)",
                        fontWeight: 700,
                        fontSize: "clamp(1.3rem, 2.5vw, 1.6rem)",
                        color: "var(--primary-black)",
                        letterSpacing: "var(--tracking-tight)",
                        textTransform: "uppercase",
                        lineHeight: 1.1,
                      }}
                    >
                      {s.title}
                    </h3>
                    <p
                      className="type-body mt-2"
                      style={{
                        color: "var(--muted-text)",
                        fontSize: "var(--text-sm)",
                      }}
                    >
                      {s.desc}
                    </p>
                  </div>

                  {/* 3-point bullets */}
                  <ul
                    className="flex flex-col gap-2 mt-auto pt-4"
                    style={{ borderTop: "1px solid rgba(12,21,24,0.06)" }}
                  >
                    {s.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex items-center gap-2"
                        style={{
                          fontSize: "var(--text-sm)",
                          color: "var(--muted-text)",
                          fontWeight: 500,
                        }}
                      >
                        <FiCheck
                          size={11}
                          style={{ color: s.accent, flexShrink: 0 }}
                        />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInView>
            ))}
          </StaggerInView>
        </div>
      </div>
    </section>
  );
}
