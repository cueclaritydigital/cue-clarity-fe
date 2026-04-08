/* ──────────────────────────────────────────────────────────
   SERVICE PAGE DATA  — static JSON-driven service pages
   ────────────────────────────────────────────────────────── */

// ── Section type definitions ──────────────────────────────

export interface QuickLink {
  label: string;
  href: string;
  icon: string;
  external?: boolean;
}

export interface HeroSection {
  type: "hero";
  eyebrow: string;
  headline: string; // supports <em> for italic
  description: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  quickLinks?: QuickLink[];
  image?: string;
}

export interface StatsSection {
  type: "stats";
  eyebrow?: string;
  headline?: string;
  description?: string;
  stats: { value: string; suffix?: string; label: string }[];
}

export interface CardsSection {
  type: "cards";
  eyebrow: string;
  headline: string;
  description?: string;
  columns?: 2 | 3 | 4;
  variant?: "default" | "bordered" | "icon" | "hover-dark";
  cards: {
    icon?: string;
    number?: string;
    title: string;
    description: string;
    tags?: string[];
    checklist?: string[];
    href?: string;
  }[];
  disclaimer?: string;
}

export interface ProcessSection {
  type: "process";
  eyebrow: string;
  headline: string;
  description?: string;
  variant?: "horizontal" | "vertical" | "dark" | "large-numbers";
  steps: { number: string; title: string; description: string }[];
  testimonial?: { quote: string; author?: string; role: string; name?: string };
}

export interface ComparisonSection {
  type: "comparison";
  eyebrow?: string;
  headline?: string;
  description?: string;
  left: { title: string; emoji?: string; items: string[] };
  right: { title: string; emoji?: string; items: string[] };
  footnote?: string;
}

export interface FeatureListSection {
  type: "featureList";
  eyebrow: string;
  headline: string;
  description?: string;
  features: { icon?: string; title: string; description: string }[];
  image?: string;
  columns?: 1 | 2;
}

export interface FAQSection {
  type: "faq";
  eyebrow: string;
  headline: string;
  items: { question: string; answer: string }[];
}

export interface CTASection {
  type: "cta";
  eyebrow?: string;
  headline: string;
  description?: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  quickLinks?: QuickLink[];
  quote?: string;
}

export interface QuestionsSection {
  type: "questions";
  eyebrow?: string;
  headline?: string;
  description?: string;
  questions: { icon?: string; text: string }[];
}

export interface FrameworkSection {
  type: "framework";
  eyebrow: string;
  headline: string;
  description?: string;
  variant?: "timeline" | "pillars";
  pillars: {
    icon?: string;
    number?: string;
    title: string;
    description?: string;
    points?: string[];
  }[];
  image?: string;
}

export interface DeliverableSection {
  type: "deliverables";
  eyebrow: string;
  headline: string;
  description?: string;
  items: { number?: string; title: string; description: string }[];
}

export interface FlagsSection {
  type: "flags";
  eyebrow: string;
  headline: string;
  description?: string;
  countries: {
    image: string;
    name: string;
    tag: string;
  }[];
}

export type ServiceSection =
  | HeroSection
  | StatsSection
  | CardsSection
  | ProcessSection
  | ComparisonSection
  | FeatureListSection
  | FAQSection
  | CTASection
  | QuestionsSection
  | FrameworkSection
  | DeliverableSection
  | FlagsSection;

export interface RelatedServiceLink {
  href: string;
  title: string;
  description: string;
}

export interface ServicePageData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords?: string[];
  sections: ServiceSection[];
  relatedServices?: RelatedServiceLink[];
}

// ── Shared CTA links ─────────────────────────────────────

const CTA_BOOK = { label: "Book Career Counselling", href: "/contact" };
const CTA_BOOK_STRATEGY = {
  label: "Book Career Strategy Session",
  href: "/contact",
};

const QUICK_LINK_CAREER: QuickLink = {
  label: "Career Assessment",
  href: "https://cueclarity.edumilestones.com/",
  icon: "FiBriefcase",
  external: true,
};
const QUICK_LINK_ABROAD: QuickLink = {
  label: "Study Abroad",
  href: "https://cueclarity.edumilestones.com/abroad-studies/",
  icon: "FiGlobe",
  external: true,
};

const QUICK_LINKS_ALL = [QUICK_LINK_CAREER, QUICK_LINK_ABROAD];
const QUICK_LINKS_NO_ABROAD = [QUICK_LINK_CAREER];

// ═══════════════════════════════════════════════════════════
// PAGE 1 — Career Counselling Home
// ═══════════════════════════════════════════════════════════

const careerCounselling: ServicePageData = {
  slug: "career-counselling",
  title: "Career Counselling",
  metaTitle:
    "Career Counselling India | Expert Guidance for Students & Professionals",
  metaDescription:
    "Transform career confusion into clarity with psychometric assessments & 1-on-1 expert counselling. 5,000+ students guided. Book your free discovery call today.",
  keywords: [
    "career counselling India",
    "best career counsellor India",
    "psychometric test India",
    "career roadmap India",
    "online career counselling India",
    "career counselling Mumbai",
    "career counselling Bangalore",
    "career counselling Pune",
    "career counselling Delhi",
    "free career guidance India",
  ],
  sections: [
    /* ── 1. Hero ─────────────────────────────────────────── */
    {
      type: "hero",
      image:
        "https://res.cloudinary.com/dy7okgtgd/image/upload/v1775227193/Gemini_Generated_Image_mr74b2mr74b2mr74_k2wn1k.webp",
      eyebrow: "Career Counselling",
      headline: "From Confusion to <em>Clarity</em>",
      description:
        "Choosing a career shapes your entire life. CueClarity brings a scientific, strategic, and deeply personalized approach so you make that decision with confidence — not guesswork.",
      primaryCTA: CTA_BOOK,
      quickLinks: QUICK_LINKS_ALL,
    },

    /* ── 2. Questions — pain-point empathy ────────────────── */
    {
      type: "questions",
      eyebrow: "Sounds Familiar?",
      headline: "The Hidden Career <em>Confusion No One Talks About</em>",
      description:
        "If any of these keep you up at night, you're not alone — and you don't have to figure it out by yourself.",
      questions: [
        {
          icon: "FiHelpCircle",
          text: "I have no idea which career actually suits me.",
        },
        {
          icon: "FiAlertCircle",
          text: "I chose my stream based on what everyone else was doing.",
        },
        {
          icon: "FiRepeat",
          text: "I keep switching plans and still feel stuck.",
        },
        {
          icon: "FiUsers",
          text: "My parents want one thing, I want another — there's constant pressure.",
        },
        {
          icon: "FiTrendingDown",
          text: "I'm working but feel zero growth or purpose in my job.",
        },
        {
          icon: "FiGlobe",
          text: "I want to study abroad but don't know where to start.",
        },
      ],
    },

    /* ── 3. Cards — audience pathways ────────────────────── */
    {
      type: "cards",
      eyebrow: "Who We Serve",
      headline: "Guidance for <em>Every Stage</em> of Your Journey",
      description:
        "Whether you're a middle schooler discovering strengths or a professional seeking a meaningful pivot — there's a proven path built for you.",
      variant: "hover-dark",
      columns: 4,
      cards: [
        {
          icon: "FiBookOpen",
          title: "Students (Grade 8–10)",
          description:
            "Discover your strengths, interests, and learning style early — before costly stream choices are made.",
          href: "/services/students-8-9-10",
        },
        {
          icon: "FiLayers",
          title: "Students (Grade 11–12)",
          description:
            "Pick the right stream, entrance exams, and degree options aligned with your passions and market demand.",
          href: "/services/after-10th-12th",
        },
        {
          icon: "FiAward",
          title: "Graduates (UG / PG)",
          description:
            "Choose specializations, plan higher education, or map job pathways in emerging high-growth fields.",
          href: "/services/for-graduates",
        },
        {
          icon: "FiTrendingUp",
          title: "Working Professionals",
          description:
            "Break through stagnation, plan a strategic industry switch, and design a long-term professional trajectory.",
          href: "/services/for-professionals",
        },
      ],
    },

    /* ── 4. Process — how it works ───────────────────────── */
    {
      type: "process",
      eyebrow: "Our Process",
      headline: "Four Steps from Confusion to <em>Career Clarity</em>",
      description:
        "Every client moves through our proven four-stage system — designed to replace assumptions with aligned, future-ready career decisions.",
      variant: "large-numbers",
      steps: [
        {
          number: "01",
          title: "Self Discovery",
          description:
            "Psychometric assessments uncover your strengths, personality, interests, and natural aptitudes — building a scientific self-portrait.",
        },
        {
          number: "02",
          title: "Career Exploration",
          description:
            "We map industries, career options, future trends, and growth potential — so you see the full landscape of what's possible.",
        },
        {
          number: "03",
          title: "Strategic Roadmap",
          description:
            "A personalized plan covering best-fit careers, education paths, skill priorities, and milestones — not a generic PDF.",
        },
        {
          number: "04",
          title: "Action & Support",
          description:
            "Ongoing decision-making support, skill-building direction, and career readiness coaching to turn your plan into results.",
        },
      ],
      testimonial: {
        quote:
          "CueClarity didn't just help me choose a career — they helped me understand myself. For the first time, my decisions felt mine.",
        author: "Priya S.",
        role: "Engineering Graduate, Now in UX Design",
      },
    },

    /* ── 5. Cards — core services ────────────────────────── */
    {
      type: "cards",
      eyebrow: "What We Offer",
      headline: "End-to-End Career Strategy — <em>Not Just Advice</em>",
      description:
        "We go beyond a single session led recomendation. CueClarity delivers a complete career ecosystem — from scientific assessment to actionable roadmaps.",
      variant: "icon",
      columns: 3,
      cards: [
        {
          icon: "FiUser",
          title: "1-on-1 Career Counselling",
          description:
            "Expert sessions focused on deep understanding, honest reflection, and actionable clarity tailored to your unique profile.",
        },
        {
          icon: "FiActivity",
          title: "Psychometric Assessments",
          description:
            "Scientifically validated tests that decode your aptitude, personality, and cognitive strengths — replacing guesswork with data.",
        },
        {
          icon: "FiMap",
          title: "Career Roadmap & Strategy",
          description:
            "A step-by-step plan covering career options, education pathways, skill priorities, and long-term growth direction.",
        },
        {
          icon: "FiGlobe",
          title: "International Education Guidance",
          description:
            "University selection, course alignment, and application strategy for global career opportunities.",
        },
        {
          icon: "FiUsers",
          title: "Workshops & Development",
          description:
            "High-impact programs on career awareness, communication skills, and mental clarity for students and teams.",
        },
        {
          icon: "FiBriefcase",
          title: "Corporate & Industry Solutions",
          description:
            "Talent alignment, workforce training, and career ecosystem building that bridges potential with performance.",
        },
      ],
    },

    /* ── 6. Comparison — before / after ──────────────────── */
    {
      type: "comparison",
      eyebrow: "The Difference",
      headline: "What Changes with the <em>Right Guidance</em>",
      left: {
        title: "Without Career Counselling",
        emoji: "😰",
        items: [
          "Choosing streams based on peer pressure or trends",
          "Constant second-guessing and career anxiety",
          "Wasted years in courses that don't fit your strengths",
          "No clarity on which skills actually matter",
          "Feeling stuck with no plan for growth",
          "Decisions driven by fear, not strategy",
        ],
      },
      right: {
        title: "With CueClarity",
        emoji: "🎯",
        items: [
          "Decisions backed by psychometric data and expert insight",
          "Confidence in your career direction and next steps",
          "Education aligned with your strengths and market demand",
          "Clear skill roadmap tied to your career goals",
          "A long-term strategy with milestones and support",
          "Decisions driven by self-awareness and clarity",
        ],
      },
    },

    /* ── 7. Feature list — why us ────────────────────────── */
    {
      type: "featureList",
      eyebrow: "Why CueClarity",
      headline: "What Makes Us <em>Genuinely Different</em>",
      features: [
        {
          icon: "FiTarget",
          title: "Deep Personalization",
          description:
            "Every session is built around your unique profile, goals, and life circumstances — never generic advice.",
        },
        {
          icon: "FiCpu",
          title: "Scientific & Data-Driven",
          description:
            "Psychometric tools and proven frameworks replace gut-feel with evidence-backed career decisions.",
        },
        {
          icon: "FiCompass",
          title: "Long-Term Career Design",
          description:
            "We help you design a fulfilling, future-proof professional life — not just pick a course.",
        },
        {
          icon: "FiTrendingUp",
          title: "Future-Ready Insights",
          description:
            "We map emerging industries and high-growth opportunities most advisors haven't caught up with yet.",
        },
        {
          icon: "FiShield",
          title: "Trusted by 5,000+ Families",
          description:
            "200+ seminars and thousands of individual journeys speak louder than any promise.",
        },
        {
          icon: "FiHeart",
          title: "Empathetic, Not Transactional",
          description:
            "We listen first, understand your story, and guide with genuine care — because your career is personal.",
        },
      ],
      columns: 2,
    },

    /* ── 8. Deliverables — what you get ──────────────────── */
    {
      type: "deliverables",
      eyebrow: "What you get",
      headline: "What You Walk Away <em>With</em>",
      description:
        "Every CueClarity engagement produces tangible outcomes you can act on immediately.",
      items: [
        {
          number: "01",
          title: "Psychometric Assessment Report",
          description:
            "A detailed profile of your aptitude, personality, interests, and cognitive strengths — your career DNA.",
        },
        {
          number: "02",
          title: "Personalized Career Roadmap",
          description:
            "A step-by-step plan with best-fit career paths, education options, skill milestones, and timelines.",
        },
        {
          number: "03",
          title: "Expert Counselling Sessions",
          description:
            "One-on-one sessions with a career strategist who interprets your data and co-creates your plan.",
        },
        {
          number: "04",
          title: "Industry & Career Research Brief",
          description:
            "Curated insights on shortlisted careers — growth potential, salary outlook, required skills, and entry paths.",
        },
        {
          number: "05",
          title: "Ongoing Decision Support",
          description:
            "Follow-up guidance when you face crossroads — stream selection, college choice, or job-switch dilemmas.",
        },
      ],
    },

    /* ── 9. Stats — social proof ─────────────────────────── */
    {
      type: "stats",
      eyebrow: "Our Track Record",
      headline: "Impact That <em>Speaks for Itself</em>",
      stats: [
        {
          value: "5000",
          suffix: "+",
          label: "Students & Professionals Guided to Clarity",
        },
        {
          value: "200",
          suffix: "+",
          label: "Career Seminars Across Schools & Corporates",
        },
        {
          value: "95",
          suffix: "%",
          label: "Clients Report Greater Career Confidence",
        },
        {
          value: "50",
          suffix: "+",
          label: "Industries & Career Paths Mapped",
        },
      ],
    },

    /* ── 10. FAQ — SEO-critical ──────────────────────────── */
    {
      type: "faq",
      eyebrow: "FAQs",
      headline: "Your Questions, <em>Answered</em>",
      items: [
        {
          question: "What is career counselling and how does it help?",
          answer:
            "Career counselling is a structured process where a trained expert helps you understand your strengths, interests, and personality — then maps them to career paths that actually fit. It replaces guesswork with clarity so you make confident, informed decisions.",
        },
        {
          question: "At what age should my child start career counselling?",
          answer:
            "The ideal time is Grade 8–9, before stream selection locks in options. Early guidance ensures your child's strengths and interests shape their decisions — not peer pressure or last-minute panic.",
        },
        {
          question:
            "How is CueClarity different from free online career tests?",
          answer:
            "Online tests give generic labels. CueClarity combines scientifically validated psychometric assessments with 1-on-1 expert interpretation, industry research, and a personalized roadmap — it's the difference between a quiz result and a career strategy.",
        },
        {
          question:
            "Is career counselling useful for working professionals too?",
          answer:
            "Absolutely. Whether you're feeling stuck, considering an industry switch, or planning long-term growth, career counselling gives you a strategic framework to evaluate options and make moves with confidence.",
        },
        {
          question: "What happens in a typical CueClarity counselling session?",
          answer:
            "You begin with a psychometric assessment, followed by in-depth 1-on-1 sessions where we analyze your results, explore career options, and co-create a personalized roadmap with clear next steps and milestones.",
        },
        {
          question: "How long does the career counselling process take?",
          answer:
            "Most engagements span 2–4 sessions over 2–3 weeks. The assessment takes about 45 minutes, and each counselling session runs 60–90 minutes. We don't rush — clarity takes the time it needs.",
        },
        {
          question: "Do you offer career counselling online or only in-person?",
          answer:
            "We offer both. Online sessions via video call are just as effective and available across India. In-person sessions are available at our centres for those who prefer face-to-face guidance.",
        },
      ],
    },

    /* ── 11. CTA — conversion ────────────────────────────── */
    {
      type: "cta",
      headline: "Don't Leave Your Career to <em>Chance</em>",
      description:
        "With the right guidance, you don't just choose a career — you design a life of purpose, growth, and lasting success. 5,000+ students and professionals have already taken this step.",
      primaryCTA: CTA_BOOK,
      quickLinks: QUICK_LINKS_ALL,
      quote:
        "The best time to get career clarity was 5 years ago. The second-best time is today.",
    },
  ],
  relatedServices: [
    {
      href: "/services/students-8-9-10",
      title: "Students Class 8–10",
      description:
        "Help your child choose the right stream with science-backed psychometric guidance designed for Class 8, 9, and 10.",
    },
    {
      href: "/services/after-10th-12th",
      title: "After 10th & 12th",
      description:
        "Career strategy for Class 11–12 students — entrance exam alignment, degree selection, and profile building.",
    },
    {
      href: "/services/for-graduates",
      title: "For Graduates",
      description:
        "Job, MBA, or competitive exams? Get a data-backed decision framework designed for fresh graduates.",
    },
    {
      href: "/services/for-professionals",
      title: "For Professionals",
      description:
        "Career switch, upskilling, or leadership growth — expert guidance for working professionals in India.",
    },
  ],
};

// ═══════════════════════════════════════════════════════════
// PAGE 2 — Students 8-9-10
// ═══════════════════════════════════════════════════════════

const students8910: ServicePageData = {
  slug: "students-8-9-10",
  title: "Stream Selector — Classes 8th–10th",
  metaTitle:
    "Career Counselling for Class 8, 9, 10 Students | Stream Selection Guidance",
  metaDescription:
    "Help your child choose the right stream — Science, Commerce, or Arts — with psychometric assessments. Expert career counselling for school students. Book now.",
  keywords: [
    "stream selection after 8th class India",
    "stream selection class 9 10",
    "science commerce arts stream guidance",
    "psychometric test for school students India",
    "career counselling class 8 9 10",
    "career guidance for school students Mumbai",
    "career guidance for school students Bangalore",
    "stream selection test India",
  ],
  sections: [
    /* ── 1. Hero ─────────────────────────────────────────── */
    {
      type: "hero",
      image:
        "https://res.cloudinary.com/dy7okgtgd/image/upload/v1775150691/Gemini_Generated_Image_1yahmp1yahmp1yah_wbgyuz.webp",
      eyebrow: "Stream Selector Program",
      headline: "Choose Your Stream with <em>Science, Not Guesswork</em>",
      description:
        "One decision at Class 10 shapes your college, your career, and your confidence. CueClarity uses psychometric science to replace peer pressure and panic with clarity your child can trust.",
      primaryCTA: CTA_BOOK,
      quickLinks: QUICK_LINKS_NO_ABROAD,
    },

    /* ── 2. Cards — who it's for ─────────────────────────── */
    {
      type: "cards",
      eyebrow: "Who It's For",
      headline: "Built for <em>Every Stage</em> of Class 8–10",
      description:
        "Whether your child is exploring early or making the final call, the Stream Selector Program meets them exactly where they are.",
      variant: "bordered",
      columns: 3,
      cards: [
        {
          icon: "FiCompass",
          title: "Class 8 — Early Discovery",
          description:
            "Uncover strengths and interests before pressure sets in. Build a foundation and get first exposure to future career paths.",
        },
        {
          icon: "FiTarget",
          title: "Class 9 — Build Clarity",
          description:
            "Identify the streams and subjects that truly suit your child — and silence the noise of peer pressure before it shapes decisions.",
        },
        {
          icon: "FiCheckCircle",
          title: "Class 10 — Final Decision",
          description:
            "Make the stream selection with full confidence, aligned to personality, goals, and the entrance exams that matter most.",
        },
      ],
    },

    /* ── 3. Questions — pain-point empathy ───────────────── */
    {
      type: "questions",
      eyebrow: "Sounds Familiar?",
      headline: "The Confusion <em>Every Family</em> Faces",
      description:
        "Between Class 8 and 10, the same questions haunt every student and parent. These aren't small worries — they shape critical life decisions.",
      questions: [
        {
          icon: "FiHelpCircle",
          text: "My child likes both Science and Commerce — what should they pick?",
        },
        {
          icon: "FiUsers",
          text: "All their friends are taking Science — should mine just follow?",
        },
        {
          icon: "FiAlertCircle",
          text: "I have no idea what my child is actually good at.",
        },
        {
          icon: "FiEye",
          text: "Is Arts really a bad option for the future?",
        },
        {
          icon: "FiHeart",
          text: "We want one stream, my child wants another — constant conflict.",
        },
        {
          icon: "FiClock",
          text: "What if we make the wrong call and they regret it later?",
        },
      ],
    },

    /* ── 4. Process — how it works ───────────────────────── */
    {
      type: "process",
      eyebrow: "Our Process",
      headline: "Three Steps to <em>Stream Clarity</em>",
      description:
        "A structured, expert-led journey from confusion to complete confidence — designed so students and parents move forward with certainty.",
      variant: "large-numbers",
      steps: [
        {
          number: "01",
          title: "Psychometric Assessment",
          description:
            "A globally validated test maps your child's aptitude, personality, interests, and cognitive style — with India-specific benchmarks.",
        },
        {
          number: "02",
          title: "1-on-1 Expert Counselling",
          description:
            "A senior career strategist decodes the results in a dedicated session, answering every question from student and parent.",
        },
        {
          number: "03",
          title: "Stream & Roadmap Recommendation",
          description:
            "Receive a clear, bias-free stream recommendation with aligned career options and an academic roadmap to follow.",
        },
      ],
      testimonial: {
        quote:
          "My daughter was torn between Science and Commerce for months. After CueClarity's assessment, she had a clear answer in one session — and hasn't looked back.",
        author: "Meera R.",
        role: "Parent, Class 10 Student, Mumbai",
      },
    },

    /* ── 5. Feature list — what the assessment reveals ───── */
    {
      type: "featureList",
      eyebrow: "What We Assess",
      headline: "Not a Quiz. A <em>Scientific Self-Portrait</em>",
      description:
        "CueClarity's psychometric assessment is adapted for Indian students — giving data-driven insight into who your child is and where they belong.",
      columns: 2,
      features: [
        {
          icon: "FiList",
          title: "Best-Fit Subjects & Streams",
          description:
            "Discover which academic streams align with how your child's mind naturally works — not what's popular.",
        },
        {
          icon: "FiUser",
          title: "Personality & Behaviour Patterns",
          description:
            "Understand their thinking style, learning approach, and decision-making habits with precision.",
        },
        {
          icon: "FiStar",
          title: "Natural Strengths & Aptitudes",
          description:
            "Identify existing talents and the growth areas most worth nurturing in the years ahead.",
        },
        {
          icon: "FiTrendingUp",
          title: "Career Awareness & Future Fit",
          description:
            "Broad exposure to future careers tied to each stream — including emerging fields most students don't know exist.",
        },
      ],
    },

    /* ── 6. Comparison — before / after ──────────────────── */
    {
      type: "comparison",
      eyebrow: "The Difference",
      headline: "Stream Choice Without Guidance <em>vs.</em> With CueClarity",
      left: {
        title: "Without Stream Guidance",
        emoji: "😰",
        items: [
          "Stream chosen based on peer pressure or family opinion",
          "No idea if the stream fits your child's natural strengths",
          "Wrong choice costs 2–3 years of academic struggle",
          "Career options feel limited or unclear",
          "Regret, confusion, and mid-stream switches",
          "Decisions driven by fear, not self-awareness",
        ],
      },
      right: {
        title: "With CueClarity",
        emoji: "🎯",
        items: [
          "Stream chosen based on psychometric data and expert insight",
          "Clear match between strengths, interests, and stream",
          "Right choice builds momentum from day one of Class 11",
          "Multiple career paths mapped to the chosen stream",
          "Confidence to commit — and the rationale to explain why",
          "Decisions driven by science and clarity",
        ],
      },
    },

    /* ── 7. Deliverables — what you get ──────────────────── */
    {
      type: "deliverables",
      eyebrow: "What You Get",
      headline: "Everything Included in <em>Your Program</em>",
      description:
        "Every CueClarity Stream Selector engagement delivers tangible outputs your child can act on immediately.",
      items: [
        {
          number: "01",
          title: "Psychometric Assessment Report",
          description:
            "A detailed, validated report covering aptitude, personality, interests, and cognitive strengths — your child's career DNA.",
        },
        {
          number: "02",
          title: "Personalised Counselling Session",
          description:
            "One-to-one time with a career expert who interprets results, answers all questions, and guides the decision.",
        },
        {
          number: "03",
          title: "Stream Recommendation",
          description:
            "A clear, bias-free recommendation of Science, Commerce, or Arts — with full rationale your child and parents can trust.",
        },
        {
          number: "04",
          title: "Career Awareness Brief",
          description:
            "Broad exposure to future career options tied to the recommended stream, including emerging high-growth fields.",
        },
        {
          number: "05",
          title: "Academic Roadmap",
          description:
            "A step-by-step plan for Class 11–12 and beyond — subjects, entrance exams, and long-term direction.",
        },
      ],
    },

    /* ── 8. Stats — social proof ─────────────────────────── */
    {
      type: "stats",
      eyebrow: "Our Track Record",
      headline: "Impact That <em>Speaks for Itself</em>",
      stats: [
        {
          value: "5000",
          suffix: "+",
          label: "Students Guided from Class 8 Through 10 Across India",
        },
        {
          value: "200",
          suffix: "+",
          label: "School Seminars & Career Awareness Programs Conducted",
        },
        {
          value: "95",
          suffix: "%",
          label:
            "Parents Report Confidence in Stream Decision After CueClarity",
        },
        {
          value: "3",
          suffix: " streams",
          label: "Science, Commerce & Arts — All Assessed Equally, Zero Bias",
        },
      ],
    },

    /* ── 9. FAQ — SEO-critical ───────────────────────────── */
    {
      type: "faq",
      eyebrow: "FAQs",
      headline: "Stream Selection Questions, <em>Answered</em>",
      items: [
        {
          question:
            "How do I know which stream is best for my child after Class 10?",
          answer:
            "The best stream is determined by your child's aptitude, personality, and interests — not by trends or peer choices. CueClarity's psychometric assessment scientifically identifies which stream aligns with how your child thinks, learns, and thrives.",
        },
        {
          question:
            "When should a student start stream counselling — Class 8, 9, or 10?",
          answer:
            "Ideally Class 8 or 9, before the pressure of board exams takes over. Early guidance gives time to explore options, build relevant skills, and make the decision calmly. Class 10 guidance is still highly effective for final decisions.",
        },
        {
          question:
            "Is Arts a good stream for the future? Are career options limited?",
          answer:
            "Arts opens doors to law, design, journalism, psychology, education, public policy, and many more high-growth fields. The misconception that Arts limits careers comes from outdated thinking — with the right guidance, Arts students access equally rewarding career paths.",
        },
        {
          question:
            "What is a psychometric assessment and how does it help in stream selection?",
          answer:
            "A psychometric assessment is a validated test that measures aptitude, personality, interests, and cognitive style. For stream selection, it replaces guesswork with data — showing which streams, subjects, and career environments are the best natural fit for your child.",
        },
        {
          question:
            "Can my child change streams after choosing — what if they pick wrong?",
          answer:
            "Changing streams mid-way is possible but costly in time and confidence. CueClarity's goal is to get it right the first time using science, so your child starts Class 11 with momentum — not doubt.",
        },
        {
          question:
            "How is CueClarity different from career counselling at school?",
          answer:
            "School counsellors handle many students with limited time and tools. CueClarity provides dedicated 1-on-1 expert guidance, scientifically validated assessments, and a personalised roadmap — not a group session or a generic aptitude test.",
        },
        {
          question:
            "Is stream counselling available online for students across India?",
          answer:
            "Yes. CueClarity offers both online and in-person sessions. Our video-based counselling sessions are just as effective as in-person and are available to students across all cities in India.",
        },
      ],
    },

    /* ── 10. CTA — conversion ────────────────────────────── */
    {
      type: "cta",
      headline: "Don't Let Confusion <em>Decide</em> Their Future",
      description:
        "Every year, thousands of students pick the wrong stream — not because they weren't capable, but because no one gave them the right guidance. CueClarity changes that.",
      primaryCTA: CTA_BOOK,
      quickLinks: QUICK_LINKS_NO_ABROAD,
      quote:
        "Your child's stream decision shapes their college, career, and confidence for years. The greatest gift right now isn't pressure — it's clarity.",
    },
  ],
  relatedServices: [
    {
      href: "/services/career-counselling",
      title: "Career Counselling Overview",
      description:
        "Explore CueClarity's full career counselling approach — from school students to working professionals.",
    },
    {
      href: "/services/after-10th-12th",
      title: "Next Step: After 10th & 12th",
      description:
        "Once the stream is selected, the next critical decision is degree and college. Start planning early.",
    },
  ],
};

// ═══════════════════════════════════════════════════════════
// PAGE 3 — After 10th-12th
// ═══════════════════════════════════════════════════════════

const after10th12th: ServicePageData = {
  slug: "after-10th-12th",
  title: "Career Counselling After 10th & 12th",
  metaTitle:
    "Career Guidance After 10th & 12th | Best Career Options | CueClarity",
  metaDescription:
    "Confused after boards? Get expert career guidance for Class 11-12 students. JEE, NEET, or alternate paths — find the right career with data-backed counselling.",
  keywords: [
    "career after 10th India",
    "career after 12th India",
    "best career options after 12th",
    "career roadmap after boards India",
    "JEE NEET alternative careers",
    "career guidance class 11 12 India",
    "career counselling after 10th Mumbai",
    "career counselling after 12th Bangalore",
    "non-engineering career options India",
  ],
  sections: [
    /* ── 1. Hero ─────────────────────────────────────────── */
    {
      type: "hero",
      image:
        "https://res.cloudinary.com/dy7okgtgd/image/upload/v1775150691/Gemini_Generated_Image_b06mb6b06mb6b06m_aftyeb.webp",
      eyebrow: "After 10th & 12th",
      headline: "Strategy, Not <em>Guesswork</em>",
      description:
        "Good marks are necessary — but strategy is what shapes a future. CueClarity gives Class 11–12 students the career direction, degree clarity, and profile-building plan they need before the window closes.",
      primaryCTA: { label: "Book Career Strategy Session", href: "/contact" },
      quickLinks: QUICK_LINKS_ALL,
    },

    /* ── 2. Questions — pain-point empathy ───────────────── */
    {
      type: "questions",
      eyebrow: "Sounds Familiar?",
      headline: "What <em>Every Parent</em> Should Be Asking Right Now",
      description:
        "If you haven't found clear answers to these yet, your child may be heading in the wrong direction — and the window to correct course is closing fast.",
      questions: [
        {
          icon: "FiHelpCircle",
          text: "Is my child preparing for the right career — or just studying blindly?",
        },
        {
          icon: "FiBook",
          text: "Which degree will give long-term growth — not just a first job?",
        },
        {
          icon: "FiEdit3",
          text: "What skills, certifications, and profile should my child build RIGHT NOW?",
        },
        {
          icon: "FiTarget",
          text: "Which entrance exams are truly aligned with their strengths?",
        },
        {
          icon: "FiTrendingUp",
          text: "Is my child's current path future-proof in a rapidly changing world?",
        },
        {
          icon: "FiAlertCircle",
          text: "How do I make sure my child doesn't waste 3 years on the wrong degree?",
        },
      ],
    },

    /* ── 4. Process — how it works ───────────────────────── */
    {
      type: "process",
      eyebrow: "Our Process",
      headline: "Three Steps to <em>Complete Clarity</em>",
      description:
        "A structured system that takes your child from confusion to confidence — with scientific precision and expert strategy at every stage.",
      variant: "large-numbers",
      steps: [
        {
          number: "01",
          title: "Scientific Assessment",
          description:
            "Validated psychometric tools uncover your child's true aptitude, personality, interests, and cognitive strengths — going far beyond marks and grades.",
        },
        {
          number: "02",
          title: "Expert Strategy Session",
          description:
            "A dedicated 1-on-1 session covering career direction, the right degree and college, profile gaps, and entrance exam alignment — with no generic advice.",
        },
        {
          number: "03",
          title: "Career Roadmap Delivery",
          description:
            "A clear, written 3–5 year plan with every step mapped: degree, exams, skills, certifications, and milestones.",
        },
      ],
      testimonial: {
        quote:
          "We spent Class 11 assuming our son knew what he wanted. He didn't. CueClarity gave us the data, the conversation, and the plan we should have started two years earlier.",
        author: "Rajesh M.",
        role: "Parent, Class 12 Student, Bangalore",
      },
    },

    /* ── 3. Cards — what CueClarity solves ──────────────── */
    {
      type: "cards",
      eyebrow: "What We Solve",
      headline: "Beyond Basic Counselling — <em>Complete Career Strategy</em>",
      description:
        "We don't just answer questions — we design your child's entire career journey using science-backed tools, expert insight, and a personalised roadmap.",
      variant: "icon",
      columns: 3,
      cards: [
        {
          icon: "FiActivity",
          title: "Psychometric Assessment",
          description:
            "Scientific evaluation of aptitude, personality, interests, and cognitive style — replacing guesswork with data.",
        },
        {
          icon: "FiBookOpen",
          title: "Deep Career & Degree Awareness",
          description:
            "Degrees, specialisations, emerging fields, and income potential — all explained with clarity and context.",
        },
        {
          icon: "FiLayers",
          title: "Profile Building Strategy",
          description:
            "Skills, certifications, and portfolios that top colleges and recruiters actually look for — built from Class 11 itself.",
        },
        {
          icon: "FiMap",
          title: "Career Roadmap",
          description:
            "A complete 3–5 year action plan: degree path, entrance exams, skill timeline, and backup options.",
        },
        {
          icon: "FiUsers",
          title: "Parent-Student Alignment",
          description:
            "Both parent and child leave with clarity, shared direction, and a plan they can both believe in.",
        },
        {
          icon: "FiCompass",
          title: "Entrance Exam Alignment",
          description:
            "Identify which competitive exams truly match your child's strengths — JEE, NEET, CLAT, design, or none of the above.",
        },
      ],
    },

    /* ── 5. Comparison — before / after ──────────────────── */
    {
      type: "comparison",
      eyebrow: "The Stakes",
      headline: "Acting Now <em>vs.</em> Waiting Until After 12th",
      description:
        "This stage passes quickly. The decisions made in Class 11 & 12 echo for decades.",
      left: {
        title: "Without Strategy",
        emoji: "😰",
        items: [
          "Preparing for entrance exams that don't suit your child",
          "Missing the profile-building window entirely",
          "Degree chosen by trend or parent preference, not fit",
          "3–5 years lost to course corrections and regret",
          "No clarity on which skills or certifications matter",
          "Competing for college seats without a standout profile",
        ],
      },
      right: {
        title: "With CueClarity",
        emoji: "🎯",
        items: [
          "Entrance exam strategy aligned to strengths and career goals",
          "Profile-building starts in Class 11 — before it's urgent",
          "Degree and college shortlist based on fit, not pressure",
          "Clear 3–5 year roadmap from Class 11 to first job",
          "Specific skill and certification plan ready to execute",
          "Standout application backed by data and expert guidance",
        ],
      },
      footnote:
        "3–5 years correcting a wrong direction is 3–5 years your child can never get back. The right guidance now is the most valuable investment you can make.",
    },

    /* ── 6. Feature list — why CueClarity ────────────────── */
    {
      type: "featureList",
      eyebrow: "Why CueClarity",
      headline: "What Makes Our Guidance <em>Different</em>",
      features: [
        {
          icon: "FiTarget",
          title: "Personalised, Not Templated",
          description:
            "Every session is built around your child's actual data — never a generic booklet or group advice session.",
        },
        {
          icon: "FiCpu",
          title: "Science-Backed Decisions",
          description:
            "Globally validated psychometric tools replace gut-feel and peer opinion with evidence the whole family can trust.",
        },
        {
          icon: "FiShield",
          title: "Zero Commission, Zero Bias",
          description:
            "We don't recommend colleges or courses because we earn from them. We recommend what fits your child — period.",
        },
        {
          icon: "FiTrendingUp",
          title: "Future-Focused Career Awareness",
          description:
            "We map emerging careers, high-growth industries, and degree options most parents and school counsellors haven't heard of yet.",
        },
      ],
      columns: 2,
    },

    /* ── 7. Deliverables — what you get ──────────────────── */
    {
      type: "deliverables",
      eyebrow: "What You Get",
      headline: "Everything Included in <em>Your Program</em>",
      description:
        "Every CueClarity engagement delivers a personalised package giving your child a clear, confident, and competitive edge.",
      items: [
        {
          number: "01",
          title: "Psychometric Assessment Report",
          description:
            "A detailed written analysis of your child's aptitude, personality, and career fit — backed by validated science.",
        },
        {
          number: "02",
          title: "1-on-1 Expert Strategy Session",
          description:
            "A dedicated session with a career strategist — personalised insights, not generic advice.",
        },
        {
          number: "03",
          title: "Degree, College & Career Guidance",
          description:
            "Aligned recommendations across streams, specialisations, entrance exams, and college pathways.",
        },
        {
          number: "04",
          title: "Profile Building Plan",
          description:
            "A specific, actionable list of skills, certifications, and activities to build a standout profile starting now.",
        },
        {
          number: "05",
          title: "Personalised Career Roadmap",
          description:
            "A written, step-by-step 3–5 year plan — your child's career blueprint from Class 11 to first job.",
        },
      ],
    },

    /* ── 8. Stats — social proof ─────────────────────────── */
    {
      type: "stats",
      eyebrow: "Why Families Trust Us",
      headline: "Why <em>5,000+ Families</em> Chose CueClarity",
      stats: [
        {
          value: "5000",
          suffix: "+",
          label: "Students Guided to Career Clarity Across India",
        },
        {
          value: "200",
          suffix: "+",
          label: "Seminars & Workshops in Schools and Parent Communities",
        },
        {
          value: "95",
          suffix: "%",
          label:
            "Families Report Confidence in Career Direction After CueClarity",
        },
        {
          value: "100",
          suffix: "%",
          label:
            "Unbiased Guidance — Zero College Commission, Zero Conflict of Interest",
        },
      ],
    },

    /* ── 9. FAQ — SEO-critical ───────────────────────────── */
    {
      type: "faq",
      eyebrow: "FAQs",
      headline: "Career Guidance After 10th & 12th — <em>Answered</em>",
      items: [
        {
          question:
            "What career guidance should a student take after Class 10?",
          answer:
            "After Class 10, the priority is making a well-informed stream selection (Science, Commerce, or Arts) and understanding what career paths each stream opens. With CueClarity's psychometric assessment, students get data-backed guidance on which stream matches their aptitude, personality, and long-term career goals — not just peer pressure or parental preference.",
        },
        {
          question:
            "How do I choose the right career path after Class 12 in India?",
          answer:
            "Choosing the right career after Class 12 involves understanding your strengths, the degree options available, entrance exam requirements, and long-term job market trends. CueClarity's process combines psychometric assessment with expert 1-on-1 strategy sessions to give you a personalised roadmap — covering the right degree, college type, and skill priorities specific to your profile.",
        },
        {
          question:
            "Is career counselling useful for Class 11 students or should we wait until Class 12?",
          answer:
            "Class 11 is actually the ideal time — not Class 12. Profile building (skills, certifications, project work) takes time and starts mattering from Class 11 itself for top college applications. Early guidance means your child enters the decision year with a standout profile and a clear plan, rather than panicking in Class 12 with no strategy.",
        },
        {
          question:
            "How is psychometric career assessment better than a regular aptitude test?",
          answer:
            "Standard aptitude tests measure a narrow band of logical and verbal ability. Psychometric career assessments measure aptitude across many dimensions alongside personality, interests, and cognitive style — giving a fuller picture of where a student will thrive. CueClarity uses globally validated tools interpreted by expert counsellors, not just auto-generated reports.",
        },
        {
          question:
            "Which careers are best after Science stream for Indian students?",
          answer:
            "Science opens doors to medicine, engineering, research, data science, architecture, biotechnology, environmental science, aviation, and many more fields — including emerging areas like AI, sustainability, and space technology. CueClarity's career awareness sessions cover both traditional and emerging Science-stream careers with detailed scope, income, and entry-path information tailored to your child's profile.",
        },
        {
          question: "What career options are available after Commerce stream?",
          answer:
            "Commerce graduates can pursue CA, MBA, finance, banking, economics, e-commerce, supply chain, law (CLAT), digital marketing, and entrepreneurship among many others. The field has expanded significantly — Commerce is no longer just 'CA or nothing.' CueClarity maps all viable Commerce career paths with growth potential and entry requirements so you make a decision based on full awareness.",
        },
        {
          question:
            "How do I prepare a strong college application profile in Class 11?",
          answer:
            "Top colleges and entrance exams increasingly look beyond grades — they want relevant skills, certifications, research exposure, leadership experience, and a coherent career narrative. CueClarity's profile-building plan gives students a specific, prioritised list of what to build in Class 11 based on their target career path and college type.",
        },
        {
          question:
            "Can CueClarity help if my child has already chosen the wrong stream?",
          answer:
            "Yes. Many students realise mid-stream that their choice doesn't fit. CueClarity can map the fastest correction path — whether that means a stream switch, finding a degree that bridges streams (like BBA, BMS, or design), or identifying careers that are accessible regardless of stream. It's never too late to course-correct with the right strategy.",
        },
      ],
    },

    /* ── 10. CTA — conversion ────────────────────────────── */
    {
      type: "cta",
      headline: "Don't Let This <em>Critical Window</em> Close",
      description:
        "The decisions made during Class 11 & 12 echo for decades. Give your child the clarity and strategy to move forward with confidence — before it's urgent.",
      primaryCTA: { label: "Book Career Strategy Session", href: "/contact" },
      quickLinks: QUICK_LINKS_ALL,
      quote:
        "The best investment you make in your child's education is not the tuition fee — it's the clarity on which direction to invest it in.",
    },
  ],
  relatedServices: [
    {
      href: "/services/students-8-9-10",
      title: "Just Starting: Class 8–10",
      description:
        "For students who want to get ahead — choose the right stream before the pressure kicks in.",
    },
    {
      href: "/services/for-graduates",
      title: "After College: For Graduates",
      description:
        "Already graduated? Get expert career direction — job, MBA, or competitive exams mapped to your strengths.",
    },
    {
      href: "/services/career-counselling",
      title: "Full Career Counselling",
      description:
        "Explore CueClarity's complete career counselling approach for students, graduates, and professionals.",
    },
  ],
};

// ═══════════════════════════════════════════════════════════
// PAGE 4 — For Graduates
// ═══════════════════════════════════════════════════════════

const forGraduates: ServicePageData = {
  slug: "for-graduates",
  title: "Career Counselling for Graduates",
  metaTitle:
    "Career Counselling for Graduates | Job, MBA or Govt Exams | CueClarity",
  metaDescription:
    "Stop guessing after graduation. Get personalized career direction — job vs MBA vs competitive exams. 5,000+ careers transformed. Free discovery call.",
  keywords: [
    "career counselling for graduates India",
    "job vs MBA guidance India",
    "career roadmap after graduation",
    "govt exams career guidance India",
    "career counselling graduates Mumbai",
    "career counselling graduates Bangalore",
    "career direction after college India",
    "psychometric test for graduates",
  ],
  sections: [
    /* ── 1. Hero ─────────────────────────────────────────── */
    {
      type: "hero",
      image:
        "https://res.cloudinary.com/dy7okgtgd/image/upload/v1775150691/Gemini_Generated_Image_22hpro22hpro22hp_d4qai1.webp",
      eyebrow: "For Graduates",
      headline: "Stop Guessing — <em>Start Designing</em> Your Future",
      description:
        "You've earned your degree. Now comes the decision that actually shapes your career — and the right strategy makes all the difference between years wasted and years accelerated.",
      primaryCTA: { label: "Book Career Strategy Session", href: "/contact" },
      quickLinks: QUICK_LINKS_ALL,
    },

    /* ── 2. Questions — pain-point empathy ───────────────── */
    {
      type: "questions",
      eyebrow: "Degree Done — Direction Missing?",
      headline: "Does Any of This <em>Sounds Familiar?</em>",
      description:
        "For most graduates, finishing a degree opens more questions than it answers. If these feel uncomfortably real, you're in the right place.",
      questions: [
        {
          icon: "FiHelpCircle",
          text: "Should I pursue higher studies or start working — and how do I even decide?",
        },
        {
          icon: "FiBriefcase",
          text: "Should I spend years preparing for government exams, or is there a better path for me?",
        },
        {
          icon: "FiClock",
          text: "Am I already falling behind peers who seem to know exactly where they're going?",
        },
        {
          icon: "FiTarget",
          text: "With so many career options, how do I choose without wasting 2–3 critical years?",
        },
        {
          icon: "FiAlertTriangle",
          text: "My degree doesn't excite me anymore — but I have no idea how to pivot without starting over.",
        },
        {
          icon: "FiActivity",
          text: "I'm working hard but feel stuck — like I'm on a treadmill with no forward momentum.",
        },
      ],
    },

    /* ── 3. Cards — the problem ──────────────────────────── */
    {
      type: "cards",
      eyebrow: "The Reality",
      headline: "What <em>Most Graduates</em> Face Without Guidance",
      description:
        "The biggest career mistake isn't a bad decision — it's making key decisions without the right information. Here's what that typically looks like.",
      variant: "icon",
      columns: 2,
      cards: [
        {
          icon: "FiCompass",
          title: "No Clear Direction After Graduation",
          description:
            "Degrees are completed, but there's no obvious path forward — just conflicting advice from family, friends, and the internet.",
        },
        {
          icon: "FiTrendingUp",
          title: "Chasing Trends, Not Strengths",
          description:
            "Graduates pursue MBA, government exams, or coding bootcamps because everyone else is — not because those paths are actually aligned to their profile.",
        },
        {
          icon: "FiClock",
          title: "Years Lost to Trial & Error",
          description:
            "Without a roadmap, 2–3 critical years disappear in wrong preparation, unfulfilling jobs, or degree programmes that don't lead anywhere.",
        },
        {
          icon: "FiSlash",
          title: "Stuck, Underpaid, and Unfulfilled",
          description:
            "Many graduates work hard but remain in low-growth roles — not for lack of effort, but because they started in the wrong direction entirely.",
        },
      ],
    },

    /* ── 4. Process — how CueClarity works ──────────────── */
    {
      type: "process",
      eyebrow: "Our Process",
      headline: "Three Steps to <em>Career Clarity</em>",
      description:
        "Simple, structured, and personalised to you. From self-discovery to a concrete action plan — all through a single focused strategy engagement.",
      variant: "large-numbers",
      steps: [
        {
          number: "01",
          title: "Scientific Career Assessment",
          description:
            "Validated psychometric tools go beyond your degree to reveal your true aptitude, personality, interests, and cognitive strengths — giving you objective data to make confident decisions rather than relying on gut feel.",
        },
        {
          number: "02",
          title: "Expert 1-on-1 Strategy Session",
          description:
            "A dedicated session with a career strategist who examines your assessment results, your degree background, your goals, and your constraints — then helps you decide between job, higher studies, competitive exams, or a pivot, with full clarity on each path.",
        },
        {
          number: "03",
          title: "Personalised Career Roadmap",
          description:
            "A written, step-by-step 3–5 year plan covering career direction, skill priorities, certifications, income growth milestones, and every decision point — so you leave with a blueprint, not just a conversation.",
        },
      ],
      testimonial: {
        quote:
          "I'd spent eight months after graduation jumping between options — MBA coaching, govt exam prep, then a random job. One session with CueClarity gave me more clarity than all of that combined. I finally have a direction I actually believe in.",
        author: "Priya S.",
        role: "BBA Graduate, Delhi",
      },
    },

    /* ── 5. Feature list — what CueClarity solves ────────── */
    {
      type: "featureList",
      eyebrow: "What We Solve",
      headline: "Career Strategy, <em>Not Just Advice</em>",
      description:
        "CueClarity is built for graduates who need direction, not more options. Here's what you get that generic career resources can't offer.",
      columns: 2,
      features: [
        {
          icon: "FiTarget",
          title: "Clear Career Direction",
          description:
            "Built around your psychometric profile and personal goals — not what's trending, not what your family thinks, not what your friends are doing.",
        },
        {
          icon: "FiLayers",
          title: "Right Decision Framework",
          description:
            "Job, higher studies, or competitive exams — mapped against your strengths, timeline, and career goals so you decide with certainty, not anxiety.",
        },
        {
          icon: "FiGlobe",
          title: "Emerging Career Awareness",
          description:
            "Discover high-growth, future-ready careers that most graduates — and most college counsellors — haven't heard of yet, mapped to your degree and interests.",
        },
        {
          icon: "FiEdit3",
          title: "Profile Building Plan",
          description:
            "A specific, prioritised list of skills, certifications, and portfolio building activities that recruiters and top programmes actually look for.",
        },
        {
          icon: "FiMap",
          title: "Long-Term Growth Strategy",
          description:
            "A 3–5 year roadmap with clear milestones — not a vague list of suggestions but a sequenced plan you can open and act on tomorrow.",
        },
      ],
    },

    /* ── 6. Comparison — cost of waiting ─────────────────── */
    {
      type: "comparison",
      eyebrow: "The Stakes",
      headline: "The <em>Cost of Waiting</em> vs. The Value of Acting Now",
      description:
        "Every month without a clear direction is a month of effort going into the wrong channel. The gap compounds fast.",
      left: {
        title: "Without Career Strategy",
        emoji: "😰",
        items: [
          "Following trends instead of your actual strengths",
          "Wasting 2–3 years in wrong exam prep or irrelevant jobs",
          "Low-growth roles paying well below your real potential",
          "Frustration and burnout despite working hard",
          "Starting over later — with less time and higher stakes",
          "Watching peers who planned earlier pull far ahead",
        ],
      },
      right: {
        title: "With CueClarity Strategy",
        emoji: "🎯",
        items: [
          "Clear direction and fully focused effort from day one",
          "Faster career growth because every decision is intentional",
          "Better opportunities with stronger income trajectory",
          "Confidence in every career decision you make",
          "A roadmap that adapts — built for growth, not just today",
          "Profile and skills that stand out from the first application",
        ],
      },
      footnote:
        "The average graduate who self-navigates without strategy spends 2.5 years reaching a direction that 1 well-guided session could have unlocked on day one.",
    },

    /* ── 7. Deliverables — what you get ──────────────────── */
    {
      type: "deliverables",
      eyebrow: "What You Get",
      headline: "Everything Included in <em>Your Engagement</em>",
      description:
        "Not a pamphlet, not a generic PDF — a personalised career clarity package built entirely around who you are and where you want to go.",
      items: [
        {
          number: "01",
          title: "Psychometric Assessment Report",
          description:
            "A detailed, science-backed written analysis of your aptitude, personality, interests, and career fit — with actionable interpretation, not just charts.",
        },
        {
          number: "02",
          title: "1-on-1 Expert Strategy Session",
          description:
            "A focused, private session with a career strategist who knows your profile — building your direction around your data, not generic advice.",
        },
        {
          number: "03",
          title: "Personalised Career Roadmap",
          description:
            "Your 3–5 year blueprint: career direction, skills plan, certifications, milestones, and decision checkpoints — all written and yours to keep.",
        },
        {
          number: "04",
          title: "Profile Building Plan",
          description:
            "A specific, sequenced list of certifications, skills, and portfolio activities that make your application genuinely competitive — not generic self-improvement advice.",
        },
      ],
    },

    /* ── 8. Stats — trust signals ────────────────────────── */
    {
      type: "stats",
      eyebrow: "Why Graduates Trust Us",
      headline: "Why <em>5,000+ Graduates</em> Chose CueClarity",
      stats: [
        {
          value: "5000",
          suffix: "+",
          label:
            "Students Guided Across India with Personalised Career Strategy",
        },
        {
          value: "200",
          suffix: "+",
          label: "Seminars & Workshops Conducted in Colleges and Institutions",
        },
        {
          value: "95",
          suffix: "%",
          label:
            "Graduates Report Clear Career Direction After Their CueClarity Session",
        },
        {
          value: "100",
          suffix: "%",
          label: "Unbiased, Commission-Free Guidance — No Hidden Agenda, Ever",
        },
      ],
    },

    /* ── 9. FAQ — SEO-critical ────────────────────────────── */
    {
      type: "faq",
      eyebrow: "FAQs",
      headline: "Career Questions <em>Every Graduate Asks</em>",
      items: [
        {
          question:
            "What should a graduate do after completing their degree in India?",
          answer:
            "The first priority after graduation is gaining clarity on your career direction — before committing to any path. Should you work, study further, or prepare for competitive exams? The answer depends on your aptitude, financial situation, and long-term goals, not on what peers are doing. CueClarity's assessment and strategy session gives you a data-backed answer tailored to your profile before you invest time or money.",
        },
        {
          question:
            "Higher studies vs job after graduation — which is the better choice?",
          answer:
            "Neither is universally better — the right answer depends on the specific career path you're targeting, your current profile strength, and your financial readiness. Some careers (medicine, research, top corporate roles) strongly benefit from a postgraduate degree; others are better entered directly with the right skills and certifications. CueClarity maps this choice specifically to your career goal and profile, so you decide with evidence, not opinion.",
        },
        {
          question:
            "Is government exam preparation a good career path for graduates in India?",
          answer:
            "For the right person, yes — government roles offer stability, prestige, and long-term security. But preparation takes 2–5 years and demands sustained interest and patience. Too many graduates default to government exam prep without checking if they're genuinely aligned to those roles or if they'd thrive in them. CueClarity assesses whether this path fits your profile and, if it does, identifies which specific exams to prioritise.",
        },
        {
          question:
            "Is it too late to change career direction after graduation?",
          answer:
            "Not at all — but the sooner you act, the less it costs. Career pivots are absolutely achievable after graduation, and in many cases a well-planned transition takes less time than staying on an unfulfilling path. CueClarity maps the fastest, most realistic route from where you are to where you want to be — identifying bridge skills, transitional roles, and degree options that connect your current background to your target direction.",
        },
        {
          question:
            "What are the best career options for graduates in India today?",
          answer:
            "High-growth areas right now include data science and analytics, product management, digital marketing, UX design, sustainability consulting, supply chain strategy, financial technology, and many more fields emerging at the intersection of technology and traditional industries. But 'best' is meaningless without knowing your strengths and interests. CueClarity maps the full landscape of viable options to your specific profile — including emerging careers most graduates and counsellors haven't even heard of yet.",
        },
        {
          question:
            "Which certifications and skills should graduates build in India?",
          answer:
            "The most valuable certifications are those that are directly relevant to your target career path — not generic 'all-rounder' courses. In-demand areas span data analytics (Google, Coursera), project management (PMP, Agile), digital marketing (HubSpot, Google), finance and accounting, cloud computing (AWS, Azure), and domain-specific certifications tied to your industry. CueClarity's profile building plan gives you a specific, prioritised list based on your career direction — so you invest in the right skills, not the loudest ones.",
        },
        {
          question:
            "How does career counselling for graduates actually work at CueClarity?",
          answer:
            "CueClarity's engagement starts with a validated psychometric assessment that reveals your aptitude, personality, interests, and decision-making style. This data feeds into a 1-on-1 strategy session where an expert counsellor works through your career direction, degree background, options, and constraints with you personally. You leave with a written career roadmap and profile-building plan — a concrete blueprint, not a motivational conversation.",
        },
      ],
    },

    /* ── 10. CTA — conversion ────────────────────────────── */
    {
      type: "cta",
      headline: "The Decision That <em>Defines the Next 5 Years</em>",
      description:
        "Five years from now, you'll look back on this moment. The graduates who acted with strategy move ahead fast — the rest spend years course-correcting. Your clarity starts with one session.",
      primaryCTA: { label: "Book Career Strategy Session", href: "/contact" },
      quickLinks: QUICK_LINKS_ALL,
      quote:
        "The most expensive career mistake is spending years moving fast in the wrong direction. One hour of clarity can save you five years of correction.",
    },
  ],
  relatedServices: [
    {
      href: "/services/after-10th-12th",
      title: "Career Guidance After 12th",
      description:
        "Explore how CueClarity helps Class 11–12 students make smarter degree and college decisions.",
    },
    {
      href: "/services/for-professionals",
      title: "For Working Professionals",
      description:
        "Already in a job? Get expert guidance for career transitions, upskilling, and leadership growth.",
    },
    {
      href: "/services/career-counselling",
      title: "Full Career Counselling",
      description:
        "Explore CueClarity's complete career counselling approach for students, graduates, and professionals.",
    },
  ],
};

// ═══════════════════════════════════════════════════════════
// PAGE 5 — For Professionals
// ═══════════════════════════════════════════════════════════

const forProfessionals: ServicePageData = {
  slug: "for-professionals",
  title: "Career Counselling for Professionals",
  metaTitle:
    "Career Switch Counselling for Working Professionals | CueClarity India",
  metaDescription:
    "Stuck in your career? Get expert guidance for mid-career transitions, upskilling & leadership growth. Trusted by 5,000+ professionals across India.",
  keywords: [
    "career switch counselling India",
    "mid-career transition India",
    "career counselling working professionals",
    "career counselling professionals Mumbai",
    "career counselling professionals Bangalore",
    "upskilling career guidance India",
    "career roadmap professionals India",
    "leadership career counselling India",
    "career break re-entry India",
  ],
  sections: [
    /* ── 1. Hero ─────────────────────────────────────────── */
    {
      type: "hero",
      image:
        "https://res.cloudinary.com/dcudnuu04/image/upload/v1774707639/Gemini_Generated_Image_fbqp6rfbqp6rfbqp_m0ifoz.webp",
      eyebrow: "For Working Professionals",
      headline: "Your Experience Deserves a <em>Better Direction</em>",
      description:
        "You've put in the years. But growth has stalled, the work feels hollow, or the industry is shifting under your feet. CueClarity helps professionals make the next career move with strategy — not just hope.",
      primaryCTA: CTA_BOOK_STRATEGY,
      quickLinks: QUICK_LINKS_ALL,
    },

    /* ── 2. Questions — pain-point empathy ───────────────── */
    {
      type: "questions",
      eyebrow: "Sounds Familiar?",
      headline: "Questions That <em>Keep Professionals Up</em> at Night",
      description:
        "If you can't answer these with confidence, you're likely at a career inflection point — and the sooner you face them, the more options you'll have.",
      questions: [
        {
          icon: "FiRepeat",
          text: "Am I actually growing here — or just repeating the same year of experience?",
        },
        {
          icon: "FiTrendingDown",
          text: "Is my industry or role going to be relevant in 5 years — or is disruption already happening?",
        },
        {
          icon: "FiTarget",
          text: "I want to switch careers or domains — but where exactly should I go, and how do I do it without a salary hit?",
        },
        {
          icon: "FiAlertTriangle",
          text: "My skills may be outdated — but I don't know which ones to build or where the real demand is heading.",
        },
        {
          icon: "FiShield",
          text: "Financial commitments make change feel terrifying — but staying put feels like slow stagnation.",
        },
        {
          icon: "FiRefreshCw",
          text: "After a career break, how do I re-enter with confidence and not start completely over?",
        },
      ],
    },

    /* ── 3. Cards — who this is for ──────────────────────── */
    {
      type: "cards",
      eyebrow: "Who This Is For",
      headline: "Built for Professionals at <em>Every Inflection Point</em>",
      description:
        "Whether you're stuck, planning a switch, targeting growth, or returning after a break — CueClarity's career strategy is designed for where you actually are.",
      variant: "hover-dark",
      columns: 4,
      cards: [
        {
          icon: "FiPause",
          title: "Stuck With No Clear Path",
          description:
            "Years of experience, but no forward momentum. You're capable of more — you just need a clear direction and a plan to get there.",
        },
        {
          icon: "FiArrowRight",
          title: "Planning a Career Switch",
          description:
            "Industry pivot, role change, or domain shift — we map the safest, fastest route so you move with clarity, not anxiety.",
        },
        {
          icon: "FiTrendingUp",
          title: "Targeting Higher Growth",
          description:
            "Leadership roles, bigger salary, better opportunities — we build the positioning strategy and roadmap to get you there.",
        },
        {
          icon: "FiRotateCw",
          title: "Career Break Comeback",
          description:
            "Returning after a gap due to health, family, or personal reasons — we help you re-enter strong with updated skills and a narrative that works.",
        },
      ],
    },

    /* ── 4. Framework — methodology ──────────────────────── */
    {
      type: "framework",
      eyebrow: "Our Framework",
      headline: "The <em>Four-Part Framework</em> That Drives Every Engagement",
      description:
        "Not generic advice — a structured system built around your experience, your market, and your goals.",
      variant: "pillars",
      pillars: [
        {
          number: "01",
          icon: "FiActivity",
          title: "Deep Career Assessment",
          description:
            "Validated psychometric tools reveal your core strengths, transferable skills, work style, and interests — aligned to where real market demand exists, not just where you've been.",
        },
        {
          number: "02",
          icon: "FiCompass",
          title: "Career Domain Clarity",
          description:
            "We identify the right domain and role type based on your actual profile — eliminating random switching and pointing you at targets where you'll genuinely create value and find growth.",
        },
        {
          number: "03",
          icon: "FiLayers",
          title: "Skill Gap & Profile Strategy",
          description:
            "We map what you have vs. what you need for your target role — then prescribe the specific certifications, tools, resume positioning, and LinkedIn brand adjustments that close the gap fast.",
        },
        {
          number: "04",
          icon: "FiMap",
          title: "Career Transition Roadmap",
          description:
            "A clear, sequenced plan with target roles, upskilling timeline, application strategy, and risk management — designed around your financial constraints and life reality, not just an ideal scenario.",
        },
      ],
    },

    /* ── 5. Process — how it works ───────────────────────── */
    {
      type: "process",
      eyebrow: "Our Process",
      headline: "From Uncertainty to <em>Confident Action</em> in Three Steps",
      description:
        "A structured engagement designed to take you from wherever you are right now to a clear career direction and a written plan you can act on immediately.",
      variant: "large-numbers",
      steps: [
        {
          number: "01",
          title: "Scientific Career Assessment",
          description:
            "Validated psychometric tools assess your aptitude, personality, work values, and cognitive strengths — going deep beyond your job title and CV to uncover what you're actually best positioned to do next.",
        },
        {
          number: "02",
          title: "Expert 1-on-1 Strategy Session",
          description:
            "A focused session with a career strategist who brings your assessment data, industry knowledge, and career options together — giving you a clear target direction, domain fit, and honest skill-gap analysis tailored to your specific background.",
        },
        {
          number: "03",
          title: "Career Transition Roadmap",
          description:
            "A written, step-by-step plan covering target roles, upskilling priorities, timeline, resume and LinkedIn strategy, and transition milestones — specific enough to open your laptop tomorrow and know exactly what to do first.",
        },
      ],
      testimonial: {
        quote:
          "I'd spent two years convincing myself to stay. One session with CueClarity showed me exactly where my skills were strongest, which domain fit them, and what three certifications would make the switch viable. I moved within eight months — at a higher salary.",
        author: "Arvind K.",
        role: "Senior Engineer → Product Manager, Pune",
      },
    },

    /* ── 6. Comparison — cost of staying ─────────────────── */
    {
      type: "comparison",
      eyebrow: "The Stakes",
      headline: "Staying Without a Plan <em>vs.</em> Moving With Strategy",
      description:
        "Every month of inaction in the wrong direction compounds. Here's the honest difference between two paths.",
      left: {
        title: "Without Career Strategy",
        emoji: "😰",
        items: [
          "Same role, same frustration — another year gone",
          "Skills quietly becoming obsolete while industry moves",
          "Missed windows for leadership, salary growth, and pivots",
          "Fear of change growing as financial stakes increase",
          "No clear direction — just vague plans that never start",
          "Regret compounding with every year of staying put",
        ],
      },
      right: {
        title: "With CueClarity Strategy",
        emoji: "🎯",
        items: [
          "Clear target direction aligned to your actual strengths",
          "Specific skills and certifications identified and sequenced",
          "Strategic transition with managed financial risk",
          "Confidence replacing anxiety because every step is mapped",
          "A written roadmap you can act on from day one",
          "Growth, fulfillment, and momentum — not just a paycheck",
        ],
      },
      footnote:
        "Staying in the wrong direction is not stability — it's delayed cost. Change made with clarity is actually the lower-risk path.",
    },

    /* ── 7. Deliverables — what you get ──────────────────── */
    {
      type: "deliverables",
      eyebrow: "What You Get",
      headline: "Everything Included in <em>Your Engagement</em>",
      description:
        "Not a motivational session — a personalised career strategy package designed around your experience, your market, and your life.",
      items: [
        {
          number: "01",
          title: "Psychometric Assessment Report",
          description:
            "A science-backed written analysis of your aptitude, personality, work values, and career fit — with expert interpretation tied to real career paths, not just charts.",
        },
        {
          number: "02",
          title: "1-on-1 Expert Strategy Session",
          description:
            "A dedicated session with a career strategist who works through your assessment data, experience, and goals — giving you a clear domain direction and honest gap analysis.",
        },
        {
          number: "03",
          title: "Skill Gap & Profile Upgrade Plan",
          description:
            "A specific list of certifications, tools, and profile changes (resume, LinkedIn, portfolio) ranked by impact — so you know exactly what to prioritise first.",
        },
        {
          number: "04",
          title: "Career Transition Roadmap",
          description:
            "A written, step-by-step plan with target roles, upskilling timeline, application strategy, and milestones — concrete enough to execute starting tomorrow.",
        },
      ],
    },

    /* ── 8. Stats — trust signals ────────────────────────── */
    {
      type: "stats",
      eyebrow: "Why Professionals Trust Us",
      headline: "Why <em>5,000+ Professionals</em> Chose CueClarity",
      stats: [
        {
          value: "5000",
          suffix: "+",
          label:
            "Professionals Guided with Personalised Career Strategy Across India",
        },
        {
          value: "200",
          suffix: "+",
          label:
            "Seminars & Workshops Delivered in Corporates and Institutions",
        },
        {
          value: "95",
          suffix: "%",
          label:
            "Professionals Report a Clear Career Direction After Their CueClarity Engagement",
        },
        {
          value: "100",
          suffix: "%",
          label:
            "Commission-Free Guidance — No Referral Incentives, No Hidden Agenda",
        },
      ],
    },

    /* ── 9. FAQ — SEO-critical ───────────────────────────── */
    {
      type: "faq",
      eyebrow: "FAQs",
      headline: "Career Questions <em>Every Professional Should Ask</em>",
      items: [
        {
          question:
            "Is it too late to change careers after 5 or 10 years of work experience?",
          answer:
            "Not at all — mid-career transitions are very common and, with the right strategy, often lead to stronger outcomes than staying on an unfulfilling path. Your years of experience are assets, not anchors. The key is identifying which of your transferable skills map to your target domain and then closing specific gaps rather than starting from scratch. CueClarity's career assessment and transition roadmap are built precisely for this scenario.",
        },
        {
          question:
            "How do I switch careers or industries without taking a big salary cut?",
          answer:
            "The professionals who take the biggest salary hits during transitions are usually those who switch without a strategy — taking the first relevant offer just to move. A structured approach identifies adjacent roles and adjacent industries where your existing experience has real value, then builds a positioning story that commands fair market rates. CueClarity maps your transferable strengths to specific high-demand target roles so you can negotiate from a position of clarity, not desperation.",
        },
        {
          question:
            "How do I know if my skills are becoming obsolete — and what should I do about it?",
          answer:
            "If you're still using the same tools, frameworks, and approaches you were using 3–5 years ago without deliberate upskilling, the risk is real. The first step is understanding which specific skills are losing demand in your domain versus which new ones are being actively hired for. CueClarity's skill gap analysis compares your current profile against your target role requirements and gives you a prioritised list of certifications and capabilities to build — so you invest in what actually matters, not the loudest trends.",
        },
        {
          question:
            "I want to move into management or leadership — how do I make that transition?",
          answer:
            "Moving from individual contributor to leadership requires more than tenure — it requires deliberate positioning, the right projects, specific skills (people management, strategic thinking, cross-functional communication), and often a sponsor or mentor. Many professionals wait for this transition to happen organically and find it doesn't. CueClarity maps exactly what your target leadership role requires, what your current profile is missing, and how to close that gap with a concrete 12–18 month plan.",
        },
        {
          question:
            "How do I re-enter the workforce after a career gap or sabbatical?",
          answer:
            "Career gaps are far less penalised than they were a decade ago, but how you re-enter matters enormously. The key is a clear narrative around what you did during the gap (even if it was caregiving or health reasons), a targeted upskilling plan to refresh relevant skills, and a positioning strategy that leads with your experience rather than apologising for the gap. CueClarity's comeback strategy gives you a specific re-entry roadmap covering which roles to target, which skills to refresh, and how to frame your story compellingly.",
        },
        {
          question:
            "Do I need an MBA or higher degree to grow my career in India?",
          answer:
            "An MBA from a top institution can open doors — but it's not the only path and is often not the right one. For many professionals, targeted certifications, domain-specific expertise, and deliberate positioning yield faster and cheaper results than a 2-year degree. The right answer depends on your specific career target: some roles genuinely benefit from an MBA pedigree, while others reward demonstrated skills and track record far more. CueClarity maps whether higher education is the right move for your specific direction, or whether there's a faster, more cost-effective path.",
        },
        {
          question:
            "What makes CueClarity's career counselling different from online career tools or advice?",
          answer:
            "Generic online tools and advice give generic outputs — they don't know your specific background, constraints, or target market. CueClarity combines validated psychometric assessment with 1-on-1 expert strategy from counsellors who understand the Indian job market, industry-specific demand, and real transition paths. You leave with a personalised written roadmap, not a PDF of general career tips. And unlike platforms that earn commission from recommending courses or institutions, CueClarity is completely unbiased — we recommend what's right for you, not what pays us.",
        },
      ],
    },

    /* ── 10. CTA — conversion ────────────────────────────── */
    {
      type: "cta",
      headline: "Your Experience Deserves <em>Better Opportunities</em>",
      description:
        "You've already invested years building your career. One strategy session can determine whether the next 5 years look different — or exactly the same.",
      primaryCTA: CTA_BOOK_STRATEGY,
      quickLinks: QUICK_LINKS_ALL,
      quote:
        "The professionals who move fastest aren't the ones who wait for the perfect moment — they're the ones who stopped waiting and started with a plan.",
    },
  ],
  relatedServices: [
    {
      href: "/services/for-graduates",
      title: "For Graduates",
      description:
        "Just graduated? Get expert career direction before you start a path that doesn't fit your strengths.",
    },
    {
      href: "/services/career-counselling",
      title: "Full Career Counselling",
      description:
        "Explore CueClarity's complete career counselling framework for students, graduates, and professionals.",
    },
    {
      href: "/services/work-force-development",
      title: "Workforce Development",
      description:
        "Corporate upskilling and employee skill development programs for teams and organizations.",
    },
  ],
};

// ═══════════════════════════════════════════════════════════
// PAGE 6 — International Education
// ═══════════════════════════════════════════════════════════

const internationalEducation: ServicePageData = {
  slug: "international-education",
  title: "International Education",
  metaTitle:
    "Study Abroad Counselling India | University Guidance & Applications",
  metaDescription:
    "Plan your international education with zero-commission guidance. 15+ countries, personalised university shortlisting & application strategy. Book your free audit.",
  keywords: [
    "study abroad counselling India",
    "international education consultant India",
    "university admission guidance India",
    "study abroad Mumbai",
    "study abroad Bangalore",
    "study abroad Pune",
    "zero commission study abroad India",
    "overseas education counsellor India",
  ],
  sections: [
    /* ── 1. Hero ─────────────────────────────────────────── */
    {
      type: "hero",
      image:
        "https://res.cloudinary.com/dy7okgtgd/image/upload/v1775150691/eydulm5wch8kvy7h0szx_jy2bm9.webp",
      eyebrow: "International Education",
      headline: "Build a Global Career with the <em>Right Direction</em>",
      description:
        "Studying abroad is one of the biggest decisions of your life. CueClarity ensures it's also one of the best — aligning your profile, degree choice, and destination to the global career you actually want.",
      primaryCTA: { label: "Book a Global Career Audit", href: "/contact" },
      quickLinks: QUICK_LINKS_ALL,
    },

    /* ── 2. Questions — pain-point empathy ───────────────── */
    {
      type: "questions",
      eyebrow: "Sounds Familiar?",
      headline: "Questions Every <em>Aspiring Global Student</em> Asks",
      description:
        "If these feel unresolved, you're not alone — and getting the right answers before you apply can save you years and lakhs.",
      questions: [
        {
          icon: "FiGlobe",
          text: "Which country is actually the best fit for my career goals — UK, Canada, Australia, or the US?",
        },
        {
          icon: "FiBookOpen",
          text: "Which programme and university will genuinely improve my career — and which ones are a waste of money?",
        },
        {
          icon: "FiEdit3",
          text: "My profile isn't 'perfect' — will I still get into a good university abroad?",
        },
        {
          icon: "FiDollarSign",
          text: "Is there financial aid, scholarships, or a loan structure that makes studying abroad viable for my family?",
        },
        {
          icon: "FiBriefcase",
          text: "Will I actually get a job after graduating abroad — or will I end up with a foreign degree and no job?",
        },
        {
          icon: "FiFileText",
          text: "The visa and application process feels overwhelming — where do I even start without making a costly mistake?",
        },
      ],
    },

    /* ── 3. Flags — study destinations ──────────────────── */
    {
      type: "flags",
      eyebrow: "Top Destinations",
      headline: "Where <em>Your Global Career</em> Can Begin",
      description:
        "We guide students to destinations chosen for academic excellence, post-study career outcomes, and realistic pathways to work and residency.",
      countries: [
        {
          image:
            "https://res.cloudinary.com/dy7okgtgd/image/upload/v1775235075/gb_r7ivvj.webp",
          name: "United Kingdom",
          tag: "2yr Post-Study Visa",
        },
        {
          image:
            "https://res.cloudinary.com/dy7okgtgd/image/upload/v1775235075/ca_ehljov.webp",
          name: "Canada",
          tag: "PGWP Pathway",
        },
        {
          image:
            "https://res.cloudinary.com/dy7okgtgd/image/upload/v1775235076/au_awyxat.webp",
          name: "Australia",
          tag: "2–4yr Work Rights",
        },
        {
          image:
            "https://res.cloudinary.com/dy7okgtgd/image/upload/v1775235184/us_kxvvse.webp",
          name: "United States",
          tag: "OPT Authorisation",
        },
        {
          image:
            "https://res.cloudinary.com/dy7okgtgd/image/upload/v1775235076/de_wahwcy.webp",
          name: "Germany",
          tag: "Tuition-Free Options",
        },
        {
          image:
            "https://res.cloudinary.com/dy7okgtgd/image/upload/v1775235075/ie_k6fzio.webp",
          name: "Ireland",
          tag: "EU Access",
        },
        {
          image:
            "https://res.cloudinary.com/dy7okgtgd/image/upload/v1775235075/sg_vifuoa.webp",
          name: "Singapore",
          tag: "Asia-Pacific Hub",
        },
        {
          image:
            "https://res.cloudinary.com/dy7okgtgd/image/upload/v1775235075/nz_xk3y46.webp",
          name: "New Zealand",
          tag: "Work & PR Pathways",
        },
        {
          image:
            "https://res.cloudinary.com/dy7okgtgd/image/upload/v1775235075/ae_rxxczk.webp",
          name: "UAE",
          tag: "Global Business Hub",
        },
      ],
    },

    /* ── 4. Process — how CueClarity guides you ──────────── */
    {
      type: "process",
      eyebrow: "Our Process",
      headline: "From Aspiration to <em>Acceptance Letter</em>",
      description:
        "A structured, four-stage process that covers everything from career alignment to landing in your destination with a plan — not just a visa.",
      variant: "large-numbers",
      steps: [
        {
          number: "01",
          title: "Career Alignment & Profile Audit",
          description:
            "We start by understanding where you want to go in your career — not just where you want to study. A detailed audit of your academic profile, work experience, and career goals shapes every recommendation that follows.",
        },
        {
          number: "02",
          title: "University & Programme Shortlisting",
          description:
            "Using your career target and profile strength, we shortlist 4–6 universities across 2–3 countries — balancing admission probability, post-graduation employment rates, cost, and your long-term career outcomes.",
        },
        {
          number: "03",
          title: "Application Strategy & Profile Building",
          description:
            "SOP writing, LOR strategy, essay positioning, and interview preparation — all crafted to tell a coherent career narrative that resonates with admissions committees at each specific university.",
        },
        {
          number: "04",
          title: "Visa, Finance & Pre-Departure Planning",
          description:
            "End-to-end support on student visa applications, scholarship identification, education loan guidance, and a practical pre-arrival checklist — so you land with clarity, not chaos.",
        },
      ],
      testimonial: {
        quote:
          "We were overwhelmed — too many universities, too many opinions, and no clear sense of what was actually right for my daughter. CueClarity mapped her career goal first, then worked back to the programme. She got into her first-choice university in Canada with a partial scholarship.",
        author: "Meena R.",
        role: "Parent of MSc Finance Graduate, Toronto",
      },
    },

    /* ── 5. Feature list — high-demand fields ────────────── */
    {
      type: "featureList",
      eyebrow: "High-Demand Fields",
      headline: "Programmes That <em>Open Global Doors</em>",
      description:
        "We map your profile to the programmes and industries with the highest international job demand — not just the most popular options on YouTube.",
      columns: 2,
      features: [
        {
          icon: "FiBarChart2",
          title: "MBA & Global Business",
          description:
            "Top-ranked business programmes with direct pathways into multinational finance, consulting, and leadership roles.",
        },
        {
          icon: "FiCpu",
          title: "Data Science & Artificial Intelligence",
          description:
            "The fastest-growing technical field globally — from machine learning engineering to AI product management.",
        },
        {
          icon: "FiActivity",
          title: "Healthcare & Biomedical Sciences",
          description:
            "Developed nations face growing healthcare workforce gaps — opening significant permanent residency pathways for qualified graduates.",
        },
        {
          icon: "FiZap",
          title: "Renewable Energy & Sustainability",
          description:
            "Climate-tech and clean energy roles are growing exponentially as governments fund the global energy transition.",
        },
        {
          icon: "FiShield",
          title: "Cybersecurity & Cloud Computing",
          description:
            "Critical global shortage of qualified cybersecurity professionals — consistently one of the highest-starting-salary fields internationally.",
        },
        {
          icon: "FiTrendingUp",
          title: "Public Policy & International Relations",
          description:
            "Shape governance, institutional strategy, and cross-border policy in the most complex geopolitical era in decades.",
        },
      ],
    },

    /* ── 6. Comparison — with vs without strategy ─────────── */
    {
      type: "comparison",
      eyebrow: "The Difference Strategy Makes",
      headline: "Applying Abroad <em>Without</em> vs. With CueClarity",
      description:
        "Most Indian students apply to international universities without a coherent strategy — and then wonder why outcomes don't match expectations.",
      left: {
        title: "Without Strategic Guidance",
        emoji: "😰",
        items: [
          "Universities chosen by ranking list, not career fit",
          "Generic SOP that sounds like every other applicant",
          "Applying to wrong-fit programmes with low ROI",
          "No scholarship research — full fees paid unnecessarily",
          "Visa rejections due to avoidable documentation errors",
          "Graduating abroad with no job strategy or network plan",
        ],
      },
      right: {
        title: "With CueClarity Strategy",
        emoji: "🎯",
        items: [
          "University shortlist built around your career target",
          "Compelling narrative crafted around your actual story",
          "High-probability, high-ROI programme selections",
          "Scholarships identified and applied for proactively",
          "Visa application built to documentation best practice",
          "Pre-arrival job strategy so you land running",
        ],
      },
      footnote:
        "Studying abroad is a 30–80 lakh investment. A strategic approach to that investment is not optional — it's the difference between a career-changing outcome and expensive regret.",
    },

    /* ── 7. Deliverables — what you receive ──────────────── */
    {
      type: "deliverables",
      eyebrow: "What You Get",
      headline: "Everything Included in <em>Your Engagement</em>",
      description:
        "Not a standard checklist consultation — a personalised, end-to-end international education strategy built around your career goals and your profile.",
      items: [
        {
          number: "01",
          title: "Career & Profile Alignment Audit",
          description:
            "A detailed written assessment of your academic background, career goals, and profile gaps — the foundation every recommendation is built on.",
        },
        {
          number: "02",
          title: "Personalised University & Programme Shortlist",
          description:
            "4–6 universities shortlisted across 2–3 countries, with rationale for each — balancing admission probability, career outcomes, cost, and fit.",
        },
        {
          number: "03",
          title: "SOP & Application Strategy",
          description:
            "Statement of Purpose writing support, LOR guidance, and a positioning strategy for each university — not a template, a tailored narrative.",
        },
        {
          number: "04",
          title: "Scholarship & Financial Planning",
          description:
            "Research and application support for merit and need-based scholarships, education loan guidance, and a realistic cost-benefit model.",
        },
        {
          number: "05",
          title: "Visa & Pre-Departure Preparation",
          description:
            "Student visa documentation checklist, mock interview preparation, and a practical pre-departure plan covering accommodation, banking, and arrival strategy.",
        },
      ],
    },

    /* ── 8. Stats — trust signals ────────────────────────── */
    {
      type: "stats",
      eyebrow: "Our Track Record",
      headline: "Trusted by <em>Students Across India</em>",
      stats: [
        {
          value: "5000",
          suffix: "+",
          label:
            "Students Guided — including hundreds placed in international universities",
        },
        {
          value: "15",
          suffix: "+",
          label:
            "Partner Countries with Strategic Alliances and High Graduate Employment Rates",
        },
        {
          value: "95",
          suffix: "%",
          label:
            "Alumni Secure Roles in Their Target Country Within 6 Months of Graduation",
        },
        {
          value: "100",
          suffix: "%",
          label:
            "Unbiased Guidance — Zero Commission from Universities or Visa Agents",
        },
      ],
    },

    /* ── 9. FAQ — SEO-critical ───────────────────────────── */
    {
      type: "faq",
      eyebrow: "FAQs",
      headline: "Study Abroad from India — <em>Answered Honestly</em>",
      items: [
        {
          question:
            "Which country is best for Indian students to study abroad in 2025?",
          answer:
            "The best country depends entirely on your career goal and target industry — not a single global ranking. Canada and Australia offer the strongest permanent residency pathways; the UK offers world-class research and a 2-year post-study visa; Germany offers near-zero tuition at public universities; the US offers the widest range of top-ranked programmes and the highest earning potential in tech and finance. CueClarity maps your specific career target to the destination with the best ROI and employment outcome for you personally.",
        },
        {
          question:
            "How do I get into a top university abroad with an average academic profile?",
          answer:
            "University admissions internationally are holistic — your CGPA is one input, not the deciding factor. Strong recommendations, a compelling Statement of Purpose, meaningful work or research experience, and choosing the right universities for your actual profile strength all matter significantly. CueClarity specialises in profile-strengthening strategies and positioning narratives that help students with average academic backgrounds gain admission to competitive programmes abroad — by telling the right story to the right institutions.",
        },
        {
          question:
            "What is the difference between a study abroad consultant and CueClarity?",
          answer:
            "Most study abroad consultants are paid by the universities and countries they recommend — earning commission from every student they send. This creates a direct conflict of interest: they recommend what pays them, not what's best for you. CueClarity earns zero commission from any university, country, or visa agency. Every recommendation is based entirely on your career goals, profile, and financial reality — which is the only way honest international education guidance works.",
        },
        {
          question:
            "Is studying abroad worth it financially for Indian students?",
          answer:
            "At the right institution, in the right programme, aligned to a clear career path — yes, significantly. A well-chosen international degree can accelerate earning potential by 3–5x compared to the equivalent Indian degree, particularly in fields like data science, finance, engineering, and healthcare in markets like Canada, Australia, UK, and the US. The key is ensuring the programme you choose has strong post-graduation employment outcomes in your field — which is exactly what CueClarity's programme shortlisting process validates.",
        },
        {
          question: "How do I get scholarships to study abroad from India?",
          answer:
            "Scholarships fall into three categories: university merit scholarships (awarded in your admission offer), country-level scholarships (Commonwealth, Chevening, Australia Awards, DAAD), and external scholarships from foundations and corporates. The mistake most students make is applying for scholarships after getting admitted — the best opportunities require early, proactive applications. CueClarity identifies scholarship opportunities aligned to your profile and timeline as part of the engagement, not as an afterthought.",
        },
        {
          question:
            "What IELTS or TOEFL score do I need for universities in the UK, Canada, and Australia?",
          answer:
            "Most top universities in the UK, Canada, and Australia require a minimum IELTS score of 6.5–7.0 overall (with no sub-score below 6.0 for the UK), or equivalent TOEFL scores. Some programmes have higher requirements — particularly research-intensive or healthcare programmes. CueClarity reviews your target universities' specific requirements during the programme shortlisting process and advises on whether a re-test strategy is needed before applying.",
        },
        {
          question:
            "Can I work while studying abroad and stay back after graduation?",
          answer:
            "Yes — most major study destinations allow international students to work part-time during their studies (typically 20 hours per week during term and full-time during breaks), and all offer some form of post-study work authorisation. Canada's PGWP allows up to 3 years; Australia's Temporary Graduate visa allows 2–4 years depending on level of study; the UK's Graduate Route allows 2 years; the US F-1 visa allows 1–3 years of OPT. CueClarity models the specific work and residency pathway for your target country as part of the destination selection process.",
        },
      ],
    },

    /* ── 10. CTA — conversion ────────────────────────────── */
    {
      type: "cta",
      headline: "Your Global Career <em>Starts With One Conversation</em>",
      description:
        "The students who build great international careers aren't always the ones with the highest grades — they're the ones who chose the right programme, in the right country, with a coherent plan. That's what CueClarity gives you.",
      primaryCTA: { label: "Book a Global Career Audit", href: "/contact" },
      quickLinks: QUICK_LINKS_ALL,
      quote:
        "Studying abroad is a 30–80 lakh decision. The cost of getting it right is a consultation. The cost of getting it wrong is years.",
    },
  ],
  relatedServices: [
    {
      href: "/services/career-counselling",
      title: "Career Counselling",
      description:
        "Align your international degree with a clear global career plan.",
    },
    {
      href: "/services/for-graduates",
      title: "For Graduates",
      description:
        "Returning from abroad? Get expert guidance on launching your career in India or globally.",
    },
    {
      href: "/services/for-professionals",
      title: "For Professionals",
      description:
        "Upskill abroad or transition your international experience into a leadership role.",
    },
  ],
};

// ═══════════════════════════════════════════════════════════
// PAGE 7 — Beyond School: Life & Skills
// ═══════════════════════════════════════════════════════════

const beyondSchoolLife: ServicePageData = {
  slug: "beyond-school-life-and-skills",
  title: "Beyond School: Life & Skills",
  metaTitle: "Life Skills for Students & Young Adults | CueClarity",
  metaDescription:
    "Build emotional resilience, communication, financial literacy, and leadership skills beyond academics. CueClarity's life skills programme gives young Indians the tools to thrive.",
  keywords: [
    "life skills program for students India",
    "life skills training young adults India",
    "emotional resilience program India",
    "financial literacy for students India",
    "life skills Mumbai",
    "life skills Bangalore",
    "beyond academics career readiness India",
  ],
  sections: [
    /* ── 1. Hero ─────────────────────────────────────────── */
    {
      type: "hero",
      image:
        "https://res.cloudinary.com/dy7okgtgd/image/upload/v1775150691/oyt4y8rr8ddblxm00qyh_jdlkvu.webp",
      eyebrow: "Beyond School Life & Skills",
      headline: "School Taught You <em>What</em>. We'll Teach You How to Live",
      description:
        "Degrees measure what you know. Life tests who you are. CueClarity's life skills programme builds the emotional intelligence, financial clarity, and human capability that no exam can prepare you for.",
      primaryCTA: { label: "Book a Consultation", href: "/contact" },
      quickLinks: QUICK_LINKS_ALL,
    },

    /* ── 2. Questions — pain points ─────────────────────── */
    {
      type: "questions",
      eyebrow: "Sounds Familiar?",
      headline: "The Skills Gap <em>Nobody Talks About</em>",
      description:
        "Academic performance tells one story. Real-world readiness tells another. If any of these feel true, the gap is bigger than a textbook can close.",
      questions: [
        {
          icon: "FiAlertTriangle",
          text: "My child is academically brilliant but freezes under real-world pressure or conflict.",
        },
        {
          icon: "FiDollarSign",
          text: "Nobody ever taught me how to manage money, file taxes, or think about financial independence.",
        },
        {
          icon: "FiMessageSquare",
          text: "I can write perfect essays but I can't communicate confidently in a room full of strangers.",
        },
        {
          icon: "FiShield",
          text: "I don't know how to handle rejection, failure, or uncertainty without it derailing me.",
        },
        {
          icon: "FiClock",
          text: "I'm entering college or work life with no framework for habits, time management, or focus.",
        },
        {
          icon: "FiUsers",
          text: "My teenager has the grades but lacks the leadership presence to stand out in a team.",
        },
      ],
    },

    /* ── 3. Cards — six life skill domains ──────────────── */
    {
      type: "cards",
      eyebrow: "Core Skill Areas",
      headline: "Six Dimensions of <em>Real-World Readiness</em>",
      description:
        "Our programme develops six practical skill domains that determine long-term success in work, relationships, and personal life — skills no degree programme systematically teaches.",
      variant: "hover-dark",
      columns: 3,
      cards: [
        {
          icon: "FiActivity",
          title: "Emotional Resilience",
          description:
            "Manage stress, process failure, and recover from setbacks without losing momentum. Build the psychological flexibility that defines high-performers.",
        },
        {
          icon: "FiMessageSquare",
          title: "Effective Communication",
          description:
            "From persuasion and active listening to conflict resolution and public speaking — master the human skills that determine career trajectory.",
        },
        {
          icon: "FiDollarSign",
          title: "Financial Literacy",
          description:
            "Budgeting, investing, tax awareness, and the wealth mindset. Build financial intelligence from the first salary, not the first mistake.",
        },
        {
          icon: "FiTarget",
          title: "Critical Thinking",
          description:
            "Structured decision-making, logical reasoning, and the ability to evaluate information without bias in a world full of noise and distraction.",
        },
        {
          icon: "FiUsers",
          title: "Leadership & Influence",
          description:
            "From building high-trust teams to owning a room — develop the leadership presence that makes you indispensable at every career stage.",
        },
        {
          icon: "FiGlobe",
          title: "Digital & Global Fluency",
          description:
            "Navigate digital identity, online professional presence, and cross-cultural dynamics in an increasingly borderless economy.",
        },
      ],
    },

    /* ── 4. Process — 4-stage arc ────────────────────────── */
    {
      type: "process",
      eyebrow: "How It Works",
      headline: "A Structured Path to <em>Complete Capability</em>",
      description:
        "We don't deliver generic workshops and call it development. Our programme follows a deliberate four-stage arc designed to produce measurable, lasting change.",
      variant: "large-numbers",
      steps: [
        {
          number: "01",
          title: "Life Skills Baseline Assessment",
          description:
            "Every participant begins with a structured diagnostic across five skill dimensions — emotional intelligence, communication, financial awareness, critical thinking, and leadership. This maps specific gaps and strengths to inform a truly personal curriculum, not a generic syllabus.",
        },
        {
          number: "02",
          title: "Personalised Learning Plan",
          description:
            "Based on your assessment, we build a custom learning arc — sequencing workshops, coaching sessions, and practical exercises in the order that creates the fastest, most lasting development. You work on what you actually need.",
        },
        {
          number: "03",
          title: "Experiential Workshop Series",
          description:
            "Skill development isn't about watching videos. Our sessions use structured role-plays, group simulations, real-world scenario exercises, and live feedback to build reflexive capability — so skills become instinctive, not just theoretical.",
        },
        {
          number: "04",
          title: "Coaching, Review & Ongoing Growth",
          description:
            "Regular one-on-one coaching sessions track your progress across skill dimensions, address real situations arising in your daily life, and ensure the development curve keeps climbing — not plateauing after an initial workshop buzz.",
        },
      ],
      testimonial: {
        quote:
          "Meera went from someone who avoided group discussions to leading our college debate team. The change in 12 weeks was genuinely remarkable.",
        author: "Priya N.",
        role: "Parent of Programme Participant",
      },
    },

    /* ── 5. Framework — 5-pillar model ──────────────────── */
    {
      type: "framework",
      eyebrow: "Our Model",
      headline: "The <em>Five-Pillar</em> Life Mastery Framework",
      description:
        "Five interdependent domains form CueClarity's proprietary model for complete human capability. Develop all five and you've built someone the world genuinely cannot replace.",
      variant: "pillars",
      pillars: [
        {
          number: "01",
          icon: "FiZap",
          title: "Cognitive Agility",
          description:
            "Critical thinking, structured problem-solving, and the mental flexibility to navigate complex, ambiguous situations without defaulting to panic or passivity. The skill at the heart of every high-stakes career move.",
        },
        {
          number: "02",
          icon: "FiShield",
          title: "Ethics & Values Clarity",
          description:
            "A well-defined value system is a competitive advantage. Leaders who know their non-negotiables make faster decisions, attract deeper loyalty, and build reputations that withstand pressure.",
        },
        {
          number: "03",
          icon: "FiActivity",
          title: "Wellness & Sustainable Performance",
          description:
            "Burnout is not a badge of honour. We build sustainable productivity through energy management, mental hygiene, recovery rhythms, and the work-life architecture that sustains peak performance across decades.",
        },
        {
          number: "04",
          icon: "FiGlobe",
          title: "Global & Cultural Intelligence",
          description:
            "The Indian workforce increasingly operates in global contexts — remote teams, international clients, and cross-cultural organisations. Cultural intelligence and diplomatic communication are no longer optional.",
        },
        {
          number: "05",
          icon: "FiDollarSign",
          title: "Financial Sovereignty",
          description:
            "True independence begins when money works for you, not against you. Foundational wealth literacy, investment philosophy, and financial planning skills that most Indian schools never teach — but every adult urgently needs.",
        },
      ],
    },

    /* ── 6. Comparison ───────────────────────────────────── */
    {
      type: "comparison",
      eyebrow: "The Reality",
      headline: "Graduating <em>Without Life Skills</em> vs. With Them",
      description:
        "The gap between academic achievers who thrive and those who struggle in adult life often has nothing to do with grades — and everything to do with these skills.",
      left: {
        title: "Without Life Skills Development",
        emoji: "😰",
        items: [
          "High grades, but paralysed by real-world decisions",
          "Financially dependent well into adulthood",
          "Avoids conflict — frustration builds until it explodes",
          "Strong on paper, weak in leadership presence",
          "Burnt out within 18 months of the first job",
          "No framework for handling adversity, rejection, or change",
        ],
      },
      right: {
        title: "With CueClarity Life Skills",
        emoji: "🎯",
        items: [
          "Confident, decisive, and composed under pressure",
          "Financially literate from the very first paycheck",
          "Communicates with clarity, empathy, and influence",
          "Leads from day one — in classrooms, teams, and boardrooms",
          "Designed for sustainable high performance, not burnout",
          "Resilient — uses setbacks as structured feedback, not defeat",
        ],
      },
      footnote:
        "Academic excellence opens doors. Life skills determine what you do once you're inside.",
    },

    /* ── 7. Deliverables ─────────────────────────────────── */
    {
      type: "deliverables",
      eyebrow: "What You Get",
      headline: "A Complete <em>Life Readiness Package</em>",
      description:
        "This isn't a single workshop you forget by Thursday. Every participant leaves with a lasting toolkit built for real application.",
      items: [
        {
          number: "01",
          title: "Personal Life Skills Assessment Report",
          description:
            "A detailed diagnostic mapping your strengths and development gaps across five skill dimensions — the foundation for everything that follows.",
        },
        {
          number: "02",
          title: "Custom Growth Roadmap",
          description:
            "A personalised learning plan with sequenced workshops, coaching milestones, and practical exercises designed around your specific profile and goals.",
        },
        {
          number: "03",
          title: "Experiential Workshop Access",
          description:
            "Scenario-based group workshops covering emotional resilience, communication, financial literacy, and leadership — built for real-world application.",
        },
        {
          number: "04",
          title: "Communication & Leadership Toolkit",
          description:
            "A practical resource library with frameworks for difficult conversations, public speaking, negotiation, and building high-trust relationships.",
        },
        {
          number: "05",
          title: "Ongoing Coaching Sessions",
          description:
            "Regular one-on-one sessions to apply skills to your actual life — tracking growth, addressing live challenges, and ensuring momentum continues beyond the programme.",
        },
      ],
    },

    /* ── 8. Stats ────────────────────────────────────────── */
    {
      type: "stats",
      eyebrow: "Our Track Record",
      headline: "Trusted by <em>Students & Families</em> Across India",
      stats: [
        {
          value: "5000",
          suffix: "+",
          label:
            "Students and young adults guided through life skills development programmes",
        },
        {
          value: "94",
          suffix: "%",
          label:
            "Participants report measurably improved confidence and real-world readiness",
        },
        {
          value: "200",
          suffix: "+",
          label:
            "Life skills workshops and seminars delivered across schools and colleges",
        },
        {
          value: "4.9",
          suffix: "/5",
          label:
            "Average participant satisfaction rating across all programme formats",
        },
      ],
    },

    /* ── 9. FAQ ──────────────────────────────────────────── */
    {
      type: "faq",
      eyebrow: "FAQs",
      headline: "Life Skills — <em>Your Questions Answered</em>",
      items: [
        {
          question:
            "What are life skills and why are they important for students in India?",
          answer:
            "Life skills are a set of practical human capabilities — including emotional intelligence, communication, financial literacy, critical thinking, and leadership — that determine how effectively a person handles real-world challenges. For Indian students, academic excellence is increasingly insufficient: employers actively look for candidates who can communicate, lead, manage conflict, and perform under pressure. Life skills are the bridge between a degree and genuine professional readiness.",
        },
        {
          question: "At what age should children start developing life skills?",
          answer:
            "The ideal age to begin structured life skills development is between 14 and 18 — when students are making significant identity and educational decisions, and when habits and behavioural patterns are still highly formative. However, life skills programmes benefit participants at any stage. College students, recent graduates, and working professionals all experience measurable improvement when given the right structured development framework.",
        },
        {
          question:
            "What is the difference between life skills and soft skills?",
          answer:
            "Soft skills typically refer to workplace-specific interpersonal capabilities like teamwork, time management, and adaptability. Life skills are broader — they encompass everything needed to live and function well as an adult: financial literacy, emotional regulation, values clarity, sustainable productivity, and cross-cultural competence. Soft skills are a subset of life skills, and both are underdeveloped in India's traditional academic system.",
        },
        {
          question:
            "Can life skills coaching help with teenage anxiety and social confidence?",
          answer:
            "Yes — significantly. A large component of teenage anxiety stems from a lack of structured tools for managing uncertainty, failure, and social pressure. CueClarity's programme addresses emotional resilience specifically: participants learn concrete frameworks for processing difficult emotions, communicating under stress, and building confidence through progressive real-world exposure. Many parents report noticeable shifts within the first 4–6 weeks.",
        },
        {
          question:
            "Does CueClarity's life skills programme cover financial literacy for young adults?",
          answer:
            "Financial literacy is one of the five core pillars of CueClarity's programme. We cover budgeting and expense management, understanding India's tax system, building an emergency fund, basic investment concepts, and the mindset shifts that separate financially independent adults from those who remain dependent well into their 30s. This is content most Indian schools and colleges never touch.",
        },
        {
          question: "How long does a CueClarity life skills programme take?",
          answer:
            "The standard life skills programme runs across 8–12 weeks, depending on the participant's starting baseline and the depth of coverage required. This includes an initial assessment session, a structured workshop series, and regular one-on-one coaching check-ins. Individual skill-specific modules are available for targeted development — such as communication-only or financial literacy-only — and intensive institutional workshops can be delivered in concentrated formats.",
        },
        {
          question:
            "Can life skills development improve campus placement outcomes?",
          answer:
            "Directly. Campus placements increasingly test candidates beyond technical knowledge — group discussions, personal interviews, and assessment centres are fundamentally tests of life skills: communication clarity, composure under pressure, and leadership presence. CueClarity participants consistently report greater confidence in group discussions, stronger performance in personal interviews, and faster offer conversion rates compared to peers who focused exclusively on academic or technical preparation.",
        },
      ],
    },

    /* ── 10. CTA ─────────────────────────────────────────── */
    {
      type: "cta",
      headline: "Don't Wait Until Life <em>Teaches the Hard Way</em>",
      description:
        "Real-world readiness isn't built in a day — but it is built deliberately. Start your life skills journey with a personalised consultation and a roadmap built around you.",
      primaryCTA: { label: "Book a Consultation", href: "/contact" },
      quickLinks: QUICK_LINKS_ALL,
      quote:
        "Grades got her through school. Life skills will carry her through everything that comes after.",
    },
  ],
  relatedServices: [
    {
      href: "/services/students-8-9-10",
      title: "Students (Class 8–10)",
      description:
        "Combine life skills training with early stream selection guidance.",
    },
    {
      href: "/services/after-10th-12th",
      title: "After 10th & 12th",
      description:
        "Build the soft skills needed to thrive in college and beyond.",
    },
    {
      href: "/services/mental-health",
      title: "Emotional Wellness",
      description:
        "Strengthen emotional resilience alongside practical life skills.",
    },
  ],
};

// ═══════════════════════════════════════════════════════════
// PAGE 8 — Emotional Wellness (Mental Health)
// ═══════════════════════════════════════════════════════════

const emotionalWellness: ServicePageData = {
  slug: "mental-health",
  title: "Emotional Wellness",
  metaTitle: "Mental Health & Emotional Wellness Support | CueClarity",
  metaDescription:
    "Expert emotional wellness support for students, professionals, and families in India. Build resilience, manage anxiety, and thrive with CueClarity's structured guidance.",
  keywords: [
    "mental health support students India",
    "emotional wellness counselling India",
    "career anxiety counselling India",
    "student mental health Mumbai",
    "student mental health Bangalore",
    "burnout career counselling India",
    "emotional resilience guidance India",
  ],
  sections: [
    /* ── 1. Hero ─────────────────────────────────────────── */
    {
      type: "hero",
      image:
        "https://res.cloudinary.com/dy7okgtgd/image/upload/v1775225412/bt4exptruu2p9rojkvvs_elzbqx.webp",
      eyebrow: "Emotional Wellness",
      headline: "Your Mind Deserves the <em>Same Strategy</em> as Your Career",
      description:
        "Exam pressure, career anxiety, burnout, and life transitions take a real toll — and pushing through alone rarely works. CueClarity's emotional wellness support gives students, professionals, and families structured, evidence-informed tools to rebuild clarity, confidence, and calm.",
      primaryCTA: { label: "Book a Consultation", href: "/contact" },
      quickLinks: QUICK_LINKS_ALL,
    },

    /* ── 2. Questions — pain points ─────────────────────── */
    {
      type: "questions",
      eyebrow: "You're Not Alone",
      headline: "Does Any of <em>This Feel Familiar?</em>",
      description:
        "Most people experiencing these feelings assume they're the only one — they're not. These are the most common signs that emotional support would make a real difference.",
      questions: [
        {
          icon: "FiAlertTriangle",
          text: "My child is bright and capable, but exam pressure and fear of failure are holding them back.",
        },
        {
          icon: "FiBriefcase",
          text: "I'm performing well at work on paper, but I feel constantly burnt out, anxious, and hollow inside.",
        },
        {
          icon: "FiClock",
          text: "I've been putting off a big career or life decision for months because I can't see clearly.",
        },
        {
          icon: "FiMessageSquare",
          text: "I snap at people I care about, then feel guilty — the pressure is spilling into my relationships.",
        },
        {
          icon: "FiActivity",
          text: "A major transition — new city, new job, breakup, loss — has left me struggling to find my footing.",
        },
        {
          icon: "FiShield",
          text: "I feel like I should be fine, but there's a persistent heaviness I can't explain or shake.",
        },
      ],
    },

    /* ── 3. Cards — who we help ──────────────────────────── */
    {
      type: "cards",
      eyebrow: "Who We Support",
      headline: "Emotional Wellness for <em>Every Life Stage</em>",
      description:
        "Mental health challenges look different at every age and stage. We've designed dedicated support tracks for each group — with the depth of care each deserves.",
      variant: "hover-dark",
      columns: 3,
      cards: [
        {
          icon: "FiBookOpen",
          title: "Students — Grades 8 to 12",
          description:
            "Exam anxiety, performance pressure, peer comparison, and the fear of choosing the wrong path. We give young students the emotional toolkit to perform without burning out.",
          checklist: [
            "Exam stress and anxiety management",
            "Self-esteem and confidence building",
            "Focus, sleep, and habit restoration",
          ],
        },
        {
          icon: "FiLayers",
          title: "Young Adults & Graduates",
          description:
            "Quarter-life uncertainty, identity confusion, and the weight of expectation. We help young adults navigate transitions with self-awareness and direction.",
          checklist: [
            "Career confusion and decision anxiety",
            "Relationship and social stress",
            "Building emotional independence",
          ],
          tags: ["Most Requested"],
        },
        {
          icon: "FiBriefcase",
          title: "Working Professionals",
          description:
            "Burnout, imposter syndrome, performance anxiety, and the cost of relentless ambition. We help professionals sustain high performance without sacrificing their wellbeing.",
          checklist: [
            "Burnout recovery and prevention",
            "Work-life boundary setting",
            "Resilience under organizational pressure",
          ],
        },
      ],
    },

    /* ── 4. Process ──────────────────────────────────────── */
    {
      type: "process",
      eyebrow: "Our Approach",
      headline: "From <em>Overwhelm</em> to Emotional Clarity",
      description:
        "Our support framework is structured, evidence-informed, and personalised — not generic advice, but a deliberate process built around your specific situation.",
      variant: "large-numbers",
      steps: [
        {
          number: "01",
          title: "Confidential Wellness Assessment",
          description:
            "We begin with a structured, confidential conversation to understand what you're experiencing — covering emotional patterns, stress triggers, sleep, relationships, and career context. This isn't a checklist; it's a genuine mapping of what's happening beneath the surface and what's driving it.",
        },
        {
          number: "02",
          title: "Personalised Support Plan",
          description:
            "Based on your assessment, we design a personalised support plan — identifying the most effective evidence-based tools for your situation, whether that's cognitive restructuring, stress regulation techniques, communication frameworks, or structured reflection practices.",
        },
        {
          number: "03",
          title: "Guided Sessions & Skill Building",
          description:
            "Regular one-on-one sessions in which we work through your plan together — building specific emotional regulation skills, processing live challenges, and developing the mental habits that produce long-term resilience. Progress is tracked, not assumed.",
        },
        {
          number: "04",
          title: "Sustained Clarity & Ongoing Support",
          description:
            "True emotional wellness isn't a one-time intervention — it's an ongoing practice. We'll set you up with tools, frameworks, and check-in structures to ensure the progress you make becomes permanent, not temporary.",
        },
      ],
      testimonial: {
        quote:
          "Before coming to CueClarity, my daughter was having panic attacks before every exam. Six weeks later, she sat her boards with a calm and focus I hadn't seen in years.",
        author: "Ritu S.",
        role: "Parent of Class 12 Student, Pune",
      },
    },

    /* ── 5. Framework — our 4-pillar methodology ─────────── */
    {
      type: "framework",
      eyebrow: "Our Methodology",
      headline: "Evidence-Informed. <em>Radically Personal.</em>",
      description:
        "Four principles define every session and strategy we deliver — because emotional wellness support that isn't grounded in both science and humanity simply doesn't work.",
      variant: "pillars",
      pillars: [
        {
          number: "01",
          icon: "FiActivity",
          title: "Evidence-Based Practice",
          description:
            "Every technique we use — from cognitive behavioural approaches to stress regulation and mindfulness — is drawn from peer-reviewed research. We don't offer spiritual bypassing or motivational slogans. We offer tools that work.",
        },
        {
          number: "02",
          icon: "FiShield",
          title: "Confidentiality as Foundation",
          description:
            "Nothing leaves the session. The ability to speak freely — about fear, shame, confusion, or failure — is only possible when complete privacy is guaranteed. Our clients share things they've never told anyone else, because they know it's safe.",
        },
        {
          number: "03",
          icon: "FiTarget",
          title: "Outcome-Oriented Sessions",
          description:
            "We don't believe in indefinite support without measurable progress. Every engagement has a clear purpose — reducing a specific anxiety, building a specific skill, resolving a specific blockage. You should leave each session with something tangible.",
        },
        {
          number: "04",
          icon: "FiHeart",
          title: "Integrative Whole-Person View",
          description:
            "Emotional wellness doesn't exist in isolation. We connect your emotional state to your career choices, relationships, physical habits, and life structures — because real clarity requires understanding the whole picture.",
        },
      ],
    },

    /* ── 6. featureList — What you gain ─────────────────── */
    {
      type: "featureList",
      eyebrow: "What Changes",
      headline: "What <em>Real Emotional Wellness</em> Feels Like",
      description:
        "Our participants don't just feel better — they function differently. Here's what consistently changes across students, professionals, and families who've worked with us.",
      columns: 2,
      features: [
        {
          icon: "FiSun",
          title: "Clarity Instead of Fog",
          description:
            "Decisions that once paralysed you become more straightforward when the emotional noise is reduced. You'll think clearer and act faster.",
        },
        {
          icon: "FiZap",
          title: "Energy That Lasts",
          description:
            "Chronic stress is physically exhausting. As emotional regulation improves, energy levels recover and the persistent heaviness begins to lift.",
        },
        {
          icon: "FiMessageSquare",
          title: "Better Relationships",
          description:
            "Emotional clarity changes how you communicate. Conflicts de-escalate faster, and the people around you notice the shift.",
        },
        {
          icon: "FiTrendingUp",
          title: "Sustained Performance",
          description:
            "Students perform better in exams. Professionals perform better under pressure. The results follow the emotional groundwork.",
        },
        {
          icon: "FiCompass",
          title: "Sense of Direction",
          description:
            "Many people arrive confused about their path. As emotional clarity builds, so does the ability to act with intention rather than default or avoidance.",
        },
        {
          icon: "FiAnchor",
          title: "Resilience That Holds",
          description:
            "Not the kind that collapses under the next setback — but genuine, structural resilience built from the inside out.",
        },
      ],
    },

    /* ── 7. Comparison ───────────────────────────────────── */
    {
      type: "comparison",
      eyebrow: "The Difference",
      headline: "Struggling Alone vs. <em>Supported Growth</em>",
      description:
        "Mental health challenges don't resolve by ignoring them. The contrast between struggling without support and having structured guidance is stark — and measurable.",
      left: {
        title: "Without Emotional Support",
        emoji: "😰",
        items: [
          "Anxiety escalates — what started small becomes debilitating",
          "Performance suffers: grades, work quality, and relationships all affected",
          "Decisions get deferred for months, creating more anxiety and stagnation",
          "Coping mechanisms become avoidance, overworking, or withdrawal",
          "Family tension rises as unresolved stress spills into home life",
          "Burnout becomes a medical issue, not just a feeling",
        ],
      },
      right: {
        title: "With CueClarity Wellness Support",
        emoji: "🌟",
        items: [
          "Anxiety is understood, named, and reduced with structured tools",
          "Performance rebounds as the emotional load is distributed properly",
          "Clarity returns — decisions become possible again",
          "Healthy coping builds lasting resilience, not brittle endurance",
          "Relationships improve as communication and regulation skills grow",
          "High performance becomes sustainable, not self-destructive",
        ],
      },
      footnote:
        "Seeking support is not weakness — it's the most strategic decision you can make for your future.",
    },

    /* ── 8. Deliverables ─────────────────────────────────── */
    {
      type: "deliverables",
      eyebrow: "What You Get",
      headline: "Your Complete <em>Wellness Support Package</em>",
      description:
        "Every engagement is private, personalised, and built around your specific situation — not a generic programme you're slotted into.",
      items: [
        {
          number: "01",
          title: "Confidential Wellness Assessment",
          description:
            "A structured initial session mapping your emotional landscape, stress triggers, and life context — the foundation for everything that follows.",
        },
        {
          number: "02",
          title: "Personalised Support Plan",
          description:
            "A tailored roadmap of evidence-based techniques, milestones, and session objectives designed specifically around your needs and goals.",
        },
        {
          number: "03",
          title: "One-on-One Guidance Sessions",
          description:
            "Regular private sessions with a CueClarity wellness expert — not chatbots, not group workshops, but focused individual support.",
        },
        {
          number: "04",
          title: "Practical Emotional Regulation Toolkit",
          description:
            "A personal library of evidence-based tools, exercises, and frameworks you can use independently between sessions and long after the programme ends.",
        },
        {
          number: "05",
          title: "Family & Parent Guidance (where applicable)",
          description:
            "For students and young adults, we include structured guidance for parents — so the home environment actively supports rather than unintentionally undermines your progress.",
        },
      ],
    },

    /* ── 9. Stats ────────────────────────────────────────── */
    {
      type: "stats",
      eyebrow: "Our Track Record",
      headline: "Trusted by <em>Students & Families</em> Across India",
      stats: [
        {
          value: "5000",
          suffix: "+",
          label:
            "Students, graduates, and professionals supported through wellness programmes",
        },
        {
          value: "95",
          suffix: "%",
          label:
            "Participants report measurably reduced anxiety within the first four weeks",
        },
        {
          value: "200",
          suffix: "+",
          label:
            "Workshops delivered in schools, colleges, and corporate settings",
        },
        {
          value: "4.9",
          suffix: "/5",
          label:
            "Average satisfaction rating across all individual and institutional engagements",
        },
      ],
    },

    /* ── 10. FAQ ─────────────────────────────────────────── */
    {
      type: "faq",
      eyebrow: "FAQs",
      headline: "Mental Health Support — <em>Your Questions Answered</em>",
      items: [
        {
          question:
            "Is CueClarity's emotional wellness service the same as therapy or counselling?",
          answer:
            "CueClarity's emotional wellness service is not clinical therapy or psychiatric treatment — and we're transparent about that distinction. We offer evidence-informed emotional wellness coaching and guidance, using techniques drawn from cognitive behavioural approaches, stress regulation research, and emotional intelligence frameworks. For individuals requiring clinical intervention for diagnosed mental health conditions, we will always make an appropriate referral. For the vast majority of students, professionals, and families experiencing stress, anxiety, burnout, or life transition challenges, our approach is highly effective.",
        },
        {
          question:
            "How can I tell if my child needs emotional wellness support?",
          answer:
            "Key signs include persistent changes in sleep or appetite, withdrawal from friends or activities they previously enjoyed, declining academic performance, frequent mood swings or emotional outbursts, physical complaints (headaches, stomach pain) without clear medical cause, and expressed feelings of hopelessness or inadequacy. If your child has been showing two or more of these signs for more than two weeks, structured support is almost always beneficial — and early intervention produces significantly better outcomes than waiting.",
        },
        {
          question:
            "Can emotional wellness coaching help with exam anxiety and academic performance?",
          answer:
            "Yes — this is one of the most common and well-documented areas where structured emotional support produces measurable results. Exam anxiety is rooted in identifiable cognitive patterns — catastrophic thinking, performance-identity fusion, and nervous system dysregulation — all of which respond well to evidence-based techniques. Students who complete our wellness programme consistently report improved focus, better sleep before exams, and a significant reduction in pre-exam panic episodes.",
        },
        {
          question:
            "What is burnout and how does CueClarity help working professionals recover?",
          answer:
            "Burnout is a state of chronic stress that has progressed to physical and emotional exhaustion, cynicism, and a persistent sense of ineffectiveness. It's increasingly common among Indian professionals in high-pressure roles, and it doesn't resolve on its own with rest alone. CueClarity's approach addresses the structural causes of burnout — boundary failures, identity over-investment in work, cognitive patterns that perpetuate exhaustion — alongside practical recovery techniques. Most professionals see meaningful improvement within 6–8 weeks of structured engagement.",
        },
        {
          question:
            "Is everything I share in a wellness session kept confidential?",
          answer:
            "Completely. Confidentiality is non-negotiable at CueClarity — nothing discussed in a session is shared with parents, schools, employers, or any third party without your explicit consent. The only exception is a genuine, immediate risk of harm, in which case we follow established safety protocols. This is the foundation of trust that makes genuine progress possible.",
        },
        {
          question:
            "How long does a CueClarity emotional wellness programme take?",
          answer:
            "Most participants complete a focused engagement in 6–12 sessions over 6–10 weeks, depending on the complexity of their situation and the goals of the programme. We don't believe in indefinite open-ended support — each programme has a clear plan and measurable milestones. Some participants choose to continue with lighter-touch check-in sessions after completing their core programme, which is built around sustaining progress rather than dependency.",
        },
        {
          question:
            "Can emotional wellness support help with career decision paralysis?",
          answer:
            "Yes — and this is one of the most overlooked connections. Many students and graduates who appear to have a career planning problem actually have an emotional problem: fear of failure, fear of disappointing parents, perfectionism, or chronic low confidence are all emotional states that look like indecision. CueClarity's integrated approach addresses both the emotional and the career dimension simultaneously, which is why our participants often report sudden clarity about their path after resolving underlying emotional blocks.",
        },
      ],
    },

    /* ── 11. CTA ─────────────────────────────────────────── */
    {
      type: "cta",
      headline: "You Don't Have to <em>Navigate This Alone</em>",
      description:
        "Emotional clarity is not a luxury — it's the foundation everything else is built on. One conversation can shift the entire trajectory.",
      primaryCTA: { label: "Book a Consultation", href: "/contact" },
      quickLinks: QUICK_LINKS_ALL,
      quote:
        "Taking care of your mind is not weakness. It is the most strategic investment you will ever make in yourself.",
    },
  ],
  relatedServices: [
    {
      href: "/services/career-counselling",
      title: "Career Counselling",
      description:
        "Clear career direction reduces stress and builds lasting confidence.",
    },
    {
      href: "/services/students-8-9-10",
      title: "Students (Class 8–10)",
      description:
        "Help your child navigate academic pressure with the right support.",
    },
    {
      href: "/services/beyond-school-life-and-skills",
      title: "Life & Skills",
      description:
        "Build emotional resilience through practical life skills development.",
    },
  ],
};

// ═══════════════════════════════════════════════════════════
// PAGE 9 — Khud Ki Kahani
// ═══════════════════════════════════════════════════════════

const khudKiKahani: ServicePageData = {
  slug: "khud-ki-kahani",
  title: "Khud Ki Kahani",
  metaTitle: "Khud Ki Kahani | CueClarity",
  metaDescription:
    "Khud Ki Kahani — CueClarity's storytelling workshop helps students find identity, build confidence, and write their own story. For schools, colleges, and institutions across India.",
  keywords: [
    "Khud Ki Kahani workshop India",
    "storytelling workshop students India",
    "student identity program India",
    "confidence building workshop India",
    "school college storytelling India",
    "career identity workshop Mumbai",
    "career identity workshop Bangalore",
  ],
  sections: [
    /* ── 1. Hero ─────────────────────────────────────────── */
    {
      type: "hero",
      image:
        "https://res.cloudinary.com/dy7okgtgd/image/upload/v1775225412/bt4exptruu2p9rojkvvs_elzbqx.webp",
      eyebrow: "Khud Ki Kahani",
      headline: "Khud Ki Kahani, <em>Khud Likho</em>",
      description:
        "Your story is the most powerful thing you own — and nobody else can write it for you. Khud Ki Kahani is CueClarity's signature workshop series that teaches students and young adults to discover who they truly are, find their authentic voice, and write a life narrative they're proud of.",
      primaryCTA: { label: "Book a Workshop", href: "/contact" },
      quickLinks: QUICK_LINKS_ALL,
    },

    /* ── 2. Questions — pain points ─────────────────────── */
    {
      type: "questions",
      eyebrow: "Sounds Familiar?",
      headline: "When <em>Your Own Story</em> Feels Like Someone Else's",
      description:
        "Most young people don't lack ability — they lack a clear sense of who they are and why it matters. If any of these feel familiar, it's time to reclaim the narrative.",
      questions: [
        {
          icon: "FiUser",
          text: "I don't really know who I am outside of my grades and what my parents expect from me.",
        },
        {
          icon: "FiEyeOff",
          text: "I feel invisible — like nobody truly sees me or understands what I'm going through.",
        },
        {
          icon: "FiMessageSquare",
          text: "When someone asks 'tell me about yourself,' I freeze. I can't put my own story into words.",
        },
        {
          icon: "FiRepeat",
          text: "I keep comparing myself to others — their posts, their achievements, their confidence — and it never ends.",
        },
        {
          icon: "FiLock",
          text: "I'm pursuing goals that don't feel like mine. The path was chosen for me and I don't know how to change it.",
        },
        {
          icon: "FiAlertTriangle",
          text: "I have opinions and ideas but I hold back because I'm afraid of being judged or getting it wrong.",
        },
      ],
    },

    /* ── 3. Cards — workshop pillars ─────────────────────── */
    {
      type: "cards",
      eyebrow: "Chapters",
      headline: "Three Chapters of <em>Your Story</em>",
      description:
        "Khud Ki Kahani unfolds across three experiential chapters — each designed to take students from disconnection to deep self-awareness, from silence to voice, from confusion to purpose.",
      variant: "hover-dark",
      columns: 3,
      cards: [
        {
          icon: "FiSearch",
          title: "Pehchan — Discover Who You Are",
          description:
            "Guided introspection exercises that strip away external expectations and help participants connect with their authentic values, strengths, and identity — often for the first time.",
          checklist: [
            "Values and identity mapping",
            "Strengths beyond academics",
            "Letting go of borrowed narratives",
          ],
        },
        {
          icon: "FiEdit3",
          title: "Awaaz — Find Your Voice",
          description:
            "Creative writing, storytelling, and communication exercises that transform private thoughts into powerful personal narratives. The goal: own your story and speak it with clarity.",
          checklist: [
            "Personal storytelling frameworks",
            "Public speaking confidence",
            "Writing your own origin story",
          ],
          tags: ["Core Workshop"],
        },
        {
          icon: "FiCompass",
          title: "Disha — Choose Your Direction",
          description:
            "Once you know who you are and can articulate it, the final chapter aligns that identity with purpose. Students leave with a personal mission, clear goals, and the conviction to pursue them.",
          checklist: [
            "Goal alignment with identity",
            "Personal mission statement",
            "Action plan for the next year",
          ],
        },
      ],
    },

    /* ── 4. Process — how the workshop unfolds ───────────── */
    {
      type: "process",
      eyebrow: "Our Process",
      headline: "How <em>Khud Ki Kahani</em> Unfolds",
      description:
        "Every session is immersive, participatory, and emotionally safe. We don't lecture — we create conditions where young people voluntarily open up, reflect, and rebuild.",
      variant: "large-numbers",
      steps: [
        {
          number: "01",
          title: "Safe Space & Guided Reflection",
          description:
            "The workshop begins with structured group norms that establish psychological safety — the foundation without which no honest self-exploration is possible. Participants then move through facilitated introspection exercises designed to surface deeply held values, unacknowledged strengths, and the stories they've been telling themselves about who they are.",
        },
        {
          number: "02",
          title: "Interactive Peer Exchange",
          description:
            "Participants share fragments of their stories with peers in structured, supportive formats — not as performance, but as genuine connection. This is where most students realize for the first time that they are not alone in their struggles. The empathy and recognition that emerges from this stage transforms the entire group dynamic.",
        },
        {
          number: "03",
          title: "Creative Expression & Narrative Building",
          description:
            "The heart of the workshop. Through creative writing prompts, visual storytelling, and guided narrative construction, every participant builds their own personal story — a written, spoken, or visual piece that captures who they are, what they've experienced, and where they're headed. This is the deliverable they carry with them.",
        },
        {
          number: "04",
          title: "Voice, Presentation & Commitment",
          description:
            "The final stage invites participants to share their story — in whatever format feels authentic — with the group. The experience of being truly heard, often for the first time, creates a lasting shift in confidence and self-perception. The session closes with a personal commitment: one action, one decision, one change they will carry forward.",
        },
      ],
      testimonial: {
        quote:
          "My son had never spoken about his feelings in front of anyone. During Khud Ki Kahani, he stood up and read his story aloud to 40 classmates. I still get emotional thinking about it.",
        author: "Sunita M.",
        role: "Parent, Indore",
      },
    },

    /* ── 5. Framework — the CueClarity method ────────────── */
    {
      type: "framework",
      eyebrow: "The CueClarity Difference",
      headline: "Why <em>Khud Ki Kahani</em> Actually Works",
      description:
        "Most schools host motivational speakers. We create permanently transformative experiences. Three principles make the difference.",
      variant: "pillars",
      pillars: [
        {
          number: "01",
          icon: "FiShield",
          title: "Psychological Safety First",
          description:
            "No judgement, no performance pressure, no forced participation. The reason students open up in Khud Ki Kahani — often saying things they've never told anyone — is because the environment is deliberately designed to make vulnerability feel safe. Without this, nothing else works.",
        },
        {
          number: "02",
          icon: "FiFeather",
          title: "Story as the Tool of Change",
          description:
            "We don't use motivational quotes or generic frameworks. We use personal storytelling — because research consistently shows that when people articulate their own story, they gain control over it. Writing your narrative isn't a creative exercise; it's an identity exercise. The transformation is in the act itself.",
        },
        {
          number: "03",
          icon: "FiUsers",
          title: "Peer Connection Over Instruction",
          description:
            "The most powerful moment in every workshop isn't the facilitator speaking — it's the moment a student hears a peer's story and realises they share the same fear. Connection builds courage faster than instruction ever can. We design every session around this principle.",
        },
      ],
    },

    /* ── 6. Comparison — with vs. without ────────────────── */
    {
      type: "comparison",
      eyebrow: "The Stakes",
      headline: "Growing Up <em>Without</em> vs. <em>With</em> Your Story",
      description:
        "The difference between a young person who knows their own narrative and one who doesn't isn't just confidence — it's everything that follows.",
      left: {
        title: "Without Self-Narrative",
        emoji: "😶",
        items: [
          "Identity shaped by parents, peers, and social media — not by self",
          "Freezes when asked 'tell me about yourself' in interviews or introductions",
          "Chases goals that don't feel like their own — burnout follows quickly",
          "Avoids vulnerability — keeps real thoughts and feelings hidden",
          "Constantly compares themselves to others, always feeling behind",
          "Enters adult life without a clear sense of who they are or why it matters",
        ],
      },
      right: {
        title: "With Khud Ki Kahani",
        emoji: "✨",
        items: [
          "Identity rooted in self-reflection, values, and authentic understanding",
          "Articulates their story with clarity and confidence in any setting",
          "Pursues goals aligned with who they truly are — motivation is internal",
          "Speaks openly, listens deeply, and builds genuine relationships",
          "Sees their own journey as unique — comparison loses its grip",
          "Enters college, career, and life with a clear personal narrative and direction",
        ],
      },
      footnote:
        "Self-awareness isn't a luxury for young people — it's the foundation everything else is built on.",
    },

    /* ── 7. Deliverables ─────────────────────────────────── */
    {
      type: "deliverables",
      eyebrow: "What You Get",
      headline: "What Every <em>Participant Receives</em>",
      description:
        "Khud Ki Kahani isn't just an event — it's a complete experience with tangible, lasting outcomes participants carry with them.",
      items: [
        {
          number: "01",
          title: "Personal Story Document",
          description:
            "Every participant writes and refines their own personal narrative — a written piece that captures who they are, where they've been, and where they're going. Many students describe this as the most meaningful thing they've ever created.",
        },
        {
          number: "02",
          title: "Identity & Values Map",
          description:
            "A structured visual framework mapping core values, authentic strengths, and identity anchors — a reference point participants return to during moments of confusion or self-doubt.",
        },
        {
          number: "03",
          title: "Communication Confidence Toolkit",
          description:
            "Practical frameworks for self-introduction, group discussion, interview storytelling, and articulating personal narratives in any social or professional setting.",
        },
        {
          number: "04",
          title: "Personal Mission Statement",
          description:
            "A crisp, self-authored statement of purpose — who they are, what they stand for, and what they're building toward. Written by them, refined with expert guidance.",
        },
        {
          number: "05",
          title: "Institutional Impact Report (For Schools & Colleges)",
          description:
            "Partnering institutions receive a comprehensive post-workshop report: participation metrics, qualitative feedback themes, and recommendations for sustaining the impact beyond the session.",
        },
      ],
    },

    /* ── 8. featureList — for schools/institutions ────────── */
    {
      type: "featureList",
      eyebrow: "For Institutions",
      headline: "Why <em>Schools & Colleges</em> Choose Khud Ki Kahani",
      description:
        "For institutional leaders looking to give their students more than academics — this is the programme that creates visible, lasting change in student engagement, confidence, and culture.",
      columns: 2,
      features: [
        {
          icon: "FiStar",
          title: "Visible Confidence Shift",
          description:
            "Teachers consistently report that students carry themselves differently after the workshop — more willing to participate, more open to discussion, more present.",
        },
        {
          icon: "FiMessageSquare",
          title: "Improved Communication Skills",
          description:
            "Students who couldn't answer 'tell me about yourself' walk out with a clear, practiced personal narrative they can deliver with genuine confidence.",
        },
        {
          icon: "FiHeart",
          title: "Stronger Peer Relationships",
          description:
            "The vulnerability and connection experienced during the workshop transforms classroom dynamics — students become more empathetic, supportive, and cohesive as a group.",
        },
        {
          icon: "FiAward",
          title: "Campus Differentiation",
          description:
            "Institutions offering Khud Ki Kahani stand out as genuinely invested in holistic student development — a powerful signal to parents, alumni, and accreditation bodies.",
        },
        {
          icon: "FiTrendingUp",
          title: "Interview & Placement Readiness",
          description:
            "Personal storytelling is the single most underprepared dimension in campus placements. This workshop directly addresses the skill gap every recruiter notices.",
        },
        {
          icon: "FiShield",
          title: "Mental Wellness Catalyst",
          description:
            "Structured self-expression in a safe environment has a measurable impact on student mental health — reducing isolation, improving emotional regulation, and building resilience.",
        },
      ],
    },

    /* ── 9. Stats ────────────────────────────────────────── */
    {
      type: "stats",
      eyebrow: "Our Track Record",
      headline: "Impact That <em>Speaks for Itself</em>",
      stats: [
        {
          value: "15000",
          suffix: "+",
          label:
            "Students have experienced Khud Ki Kahani workshops across India",
        },
        {
          value: "96",
          suffix: "%",
          label:
            "Participants say the workshop helped them understand themselves better",
        },
        {
          value: "200",
          suffix: "+",
          label:
            "Workshops delivered in schools, colleges, and institutional settings",
        },
        {
          value: "4.9",
          suffix: "/5",
          label:
            "Average rating from students and institutional partners alike",
        },
      ],
    },

    /* ── 10. FAQ ─────────────────────────────────────────── */
    {
      type: "faq",
      eyebrow: "सवाल-जवाब",
      headline: "Khud Ki Kahani — <em>Your Questions Answered</em>",
      items: [
        {
          question: "What is Khud Ki Kahani and what happens in the workshop?",
          answer:
            "Khud Ki Kahani is CueClarity's signature storytelling and self-discovery workshop for students and young adults. Participants go through a structured experience of guided self-reflection, peer exchange, and creative narrative building — ending with a personal story they've written themselves and the confidence to share it. It's not a motivational talk; it's an immersive, participatory experience that produces a lasting shift in self-awareness and communication ability.",
        },
        {
          question:
            "What age group is the Khud Ki Kahani workshop designed for?",
          answer:
            "The core workshop is designed for students aged 14–22 — from senior school through college. This is the critical window when identity, purpose, and voice are still forming and when structured support has the most lasting impact. We also run adapted formats for young professionals in their early careers who are navigating transitions, career pivots, or a crisis of direction.",
        },
        {
          question:
            "Can our school or college book Khud Ki Kahani for our students?",
          answer:
            "Yes — institutional bookings are how the majority of Khud Ki Kahani workshops are delivered. We work with schools and colleges across India, adapting the workshop format to your student body size, age group, and institutional goals. The session can be delivered as a half-day intensive, a full-day immersive, or a multi-session series depending on depth required. Contact us to discuss your needs and schedule.",
        },
        {
          question:
            "How is Khud Ki Kahani different from a motivational seminar?",
          answer:
            "Motivational seminars rely on a speaker delivering energy from the stage. Khud Ki Kahani is the opposite — the students are the storytellers, not the audience. Every participant writes, reflects, and shares their own narrative. The transformation comes from the act of self-expression itself, not from listening to someone else's story. Additionally, our facilitators create genuine psychological safety, which is why students open up in ways they rarely do in assembly-style events.",
        },
        {
          question:
            "Will my child have to speak in front of everyone? What if they're shy?",
          answer:
            "Participation is always voluntary — no student is ever forced to share publicly. The workshop is deliberately structured in graduated stages: private writing first, small group sharing next, and optional larger sharing at the end. Shy students consistently surprise themselves — not because they're pressured, but because the environment makes them feel safe enough to try. Many of our most powerful moments come from students who started the session saying they'd never speak up.",
        },
        {
          question: "What do students actually take away from the workshop?",
          answer:
            "Every participant leaves with a written personal narrative (their 'Khud Ki Kahani'), a values and identity map, a personal mission statement, and practical communication frameworks. More importantly, they leave with a shift in how they see themselves — most students describe it as the first time someone helped them articulate who they are in their own words, not in terms of grades, colleges, or parental expectations.",
        },
        {
          question: "Is there any follow-up after the Khud Ki Kahani workshop?",
          answer:
            "For institutional partners, we provide a comprehensive post-workshop impact report with participation data, qualitative feedback themes, and recommendations for sustaining the impact. Individual follow-up through CueClarity's broader career and life skills programmes is available for students who want to continue their development journey. Many schools choose to make Khud Ki Kahani an annual tradition — running it for each new batch of students.",
        },
      ],
    },

    /* ── 11. CTA ─────────────────────────────────────────── */
    {
      type: "cta",
      headline: "आपकी कहानी <em>आपके हाथ में है</em>",
      description:
        "Every young person has a story worth telling — they just need someone to help them find it. Book Khud Ki Kahani for your students or your child, and watch what happens when they finally own their narrative.",
      primaryCTA: { label: "Book a Workshop", href: "/contact" },
      quickLinks: QUICK_LINKS_ALL,
      quote:
        "जब तक तुम अपनी कहानी खुद नहीं लिखोगे, कोई और लिख देगा — और वो तुम्हारी नहीं होगी।",
    },
  ],
  relatedServices: [
    {
      href: "/services/beyond-school-life-and-skills",
      title: "Life & Skills",
      description:
        "Build on self-discovery with practical life skills for the real world.",
    },
    {
      href: "/services/mental-health",
      title: "Emotional Wellness",
      description:
        "Your story deserves a healthy foundation — build emotional clarity too.",
    },
    {
      href: "/services/career-counselling",
      title: "Career Counselling",
      description:
        "Turn your personal narrative into a purposeful career direction.",
    },
  ],
};

// ═══════════════════════════════════════════════════════════
// PAGE 10 — Industrial Training
// ═══════════════════════════════════════════════════════════

const industrialTraining: ServicePageData = {
  slug: "industrial-training",
  title: "Industrial Training",
  metaTitle:
    "Industrial Training Programs for Students & Companies | CueClarity",
  metaDescription:
    "Bridge the skill gap with CueClarity's industrial training programs. Hands-on training for engineering students & corporate workforce. Enquire now.",
  keywords: [
    "industrial training programs India",
    "engineering internship training India",
    "corporate training program India",
    "industrial training Mumbai",
    "industrial training Bangalore",
    "skill gap training India",
    "hands-on industry training students India",
  ],
  sections: [
    /* ── 1. Hero ─────────────────────────────────────────── */
    {
      type: "hero",
      image:
        "https://res.cloudinary.com/dy7okgtgd/image/upload/v1775225413/uquvgichbcjqntzppayo_dxpefd.webp",
      eyebrow: "Industrial Training",
      headline: "From <em>Learning</em> to Industry-Ready",
      description:
        "Degrees teach theory. Industry demands practice. CueClarity's industrial training programs give students and professionals the hands-on, expert-led exposure that turns classroom knowledge into real career value.",
      primaryCTA: { label: "Book a Consultation", href: "/contact" },
      quickLinks: QUICK_LINKS_ALL,
    },

    /* ── 2. Questions — pain-point empathy ───────────────── */
    {
      type: "questions",
      eyebrow: "Sounds Familiar?",
      headline: "The Gap Every <em>Student & Professional</em> Feels",
      description:
        "If these feel true, you're already aware of the problem — you just need the right programme to solve it.",
      questions: [
        {
          icon: "FiBookOpen",
          text: "I've completed my degree but have no real project experience to show employers.",
        },
        {
          icon: "FiAlertTriangle",
          text: "My curriculum is years behind what industry tools and standards actually look like today.",
        },
        {
          icon: "FiBriefcase",
          text: "I keep getting rejected at interviews because I lack hands-on, practical exposure.",
        },
        {
          icon: "FiTrendingUp",
          text: "I'm a working professional — my skills are becoming outdated and I need to upskill fast.",
        },
        {
          icon: "FiUsers",
          text: "My team needs targeted technical training, but generic courses don't address our specific stack.",
        },
        {
          icon: "FiTarget",
          text: "I want an internship or training that actually gives me something to put on my portfolio.",
        },
      ],
    },

    /* ── 3. Cards — training pathways ───────────────────── */
    {
      type: "cards",
      eyebrow: "Our Pathways",
      headline: "Three Pathways to <em>Industry Readiness</em>",
      description:
        "Whether you're a student stepping into industry for the first time, a graduate looking to accelerate, or a corporate team needing targeted upskilling — there's a CueClarity pathway built for you.",
      variant: "hover-dark",
      columns: 3,
      cards: [
        {
          icon: "FiBookOpen",
          title: "Industrial Training for Students",
          description:
            "Bridge the gap between academic theory and real-world practice with intensive, project-focused training designed around current industry standards.",
          checklist: [
            "Live project work from day one",
            "CV and portfolio building",
            "Industry mentor guidance",
          ],
        },
        {
          icon: "FiTrendingUp",
          title: "The Professional Accelerator",
          description:
            "Convert your degree into mission-ready capability. Twelve weeks of intensive simulation, advanced system work, and soft skills for high-performing technical roles.",
          checklist: [
            "Advanced system design",
            "Technical leadership skills",
            "Placement-ready portfolio",
          ],
          tags: ["Most Popular"],
        },
        {
          icon: "FiSettings",
          title: "Corporate Development",
          description:
            "Bespoke training modules for established teams. We assess your current capability gaps and build a custom upskilling programme to match your evolving tech stack.",
          checklist: [
            "Team capability audit",
            "Custom module design",
            "Leadership and automation training",
          ],
        },
      ],
    },

    /* ── 4. Process — how training works ─────────────────── */
    {
      type: "process",
      eyebrow: "How It Works",
      headline: "From <em>Enrolment</em> to Employment-Ready",
      description:
        "A structured, three-stage delivery that moves you from foundational knowledge to portfolio-backed practical competency — with expert mentorship at every stage.",
      variant: "large-numbers",
      steps: [
        {
          number: "01",
          title: "Assessment & Programme Design",
          description:
            "Every engagement begins with a capability assessment — mapping your current skills, target role, and knowledge gaps. This shapes a personalised module sequence rather than forcing you through a generic syllabus.",
        },
        {
          number: "02",
          title: "Hands-On Project Execution",
          description:
            "You don't watch lectures — you build. Each module produces a tangible output: a functional prototype, a working codebase, a system design, or a strategic audit report. Real deliverables that go directly into your portfolio.",
        },
        {
          number: "03",
          title: "Mentorship, Review & Placement Support",
          description:
            "Active industry practitioners review your work, provide expert feedback, and prepare you for technical interviews and real-world scenarios — including CV optimisation, LinkedIn positioning, and connection to our hiring network.",
        },
      ],
      testimonial: {
        quote:
          "The training was nothing like a classroom. From week one I was building real prototypes, and by the end I had a portfolio that landed me three interview calls before graduation.",
        name: "Arjun M.",
        role: "BTech Graduate, now Embedded Systems Engineer",
      },
    },

    /* ── 5. Feature list — domain expertise ──────────────── */
    {
      type: "featureList",
      eyebrow: "Domain Expertise",
      headline: "Specialist Training Across <em>High-Demand Industries</em>",
      description:
        "We don't do general. Our training covers the most critical technical verticals of the next decade — each module designed with active industry practitioners.",
      columns: 2,
      features: [
        {
          icon: "FiCpu",
          title: "Advanced Electronics & Semiconductors",
          description:
            "PCB design, microcontroller programming, embedded systems, and semiconductor fundamentals taught with industry-standard tools.",
        },
        {
          icon: "FiActivity",
          title: "Robotics, Automation & AI",
          description:
            "Machine learning at the edge, collaborative robot systems, industrial automation, and AI-powered manufacturing — the skills employers are actively hiring for.",
        },
        {
          icon: "FiZap",
          title: "Renewable Energy & Sustainability",
          description:
            "Grid management, solar and wind system design, battery storage technology, and sustainable infrastructure planning for the energy transition.",
        },
        {
          icon: "FiShield",
          title: "Cyber-Physical Security",
          description:
            "Protecting critical infrastructure, OT/IT security convergence, and industrial network security frameworks designed for connected systems.",
        },
      ],
    },

    /* ── 6. Framework — what makes it different ──────────── */
    {
      type: "framework",
      eyebrow: "The CueClarity Difference",
      headline: "Why Our Training <em>Actually Works</em>",
      description:
        "Most training programmes are theoretical. Ours are surgical. Three pillars define every module we deliver.",
      variant: "pillars",
      pillars: [
        {
          number: "01",
          icon: "FiLayers",
          title: "The Foundry Method",
          description:
            "Every module demands a tangible output — a functional prototype, a working repository, or a strategic audit report. You learn by building, not by watching. Every deliverable goes directly into a portfolio employers can evaluate.",
        },
        {
          number: "02",
          icon: "FiUsers",
          title: "Elite Practitioner Faculty",
          description:
            "No career academics. Our mentors are active CTOs, Senior Architects, and Lead Engineers currently working in the industries they teach. They distill decades of real-world experience into weeks of focused, applicable training.",
        },
        {
          number: "03",
          icon: "FiGlobe",
          title: "Clarity Network Access",
          description:
            "Every alumnus gains access to our Clarity Network — an exclusive talent pool actively tapped by top-tier industrial firms for high-stakes technical hiring. Your training ends; your network access doesn't.",
        },
      ],
    },

    /* ── 7. Comparison — skills gap ──────────────────────── */
    {
      type: "comparison",
      eyebrow: "The Stakes",
      headline: "Graduating <em>With Theory</em> vs. With Industry Skills",
      description:
        "The gap between what degrees teach and what employers need has never been wider — and the cost of that gap falls entirely on you.",
      left: {
        title: "Without Industrial Training",
        emoji: "😰",
        items: [
          "Degree completed, but no practical portfolio to show",
          "Curriculum 3–5 years behind current industry standards",
          "Rejected at interviews for lacking hands-on experience",
          "Employers spend months re-training fresh hires",
          "Months spent job-hunting with an undifferentiated resume",
          "Skills stagnating in a role with no structured development",
        ],
      },
      right: {
        title: "With CueClarity Training",
        emoji: "🎯",
        items: [
          "Industry-ready portfolio built during training itself",
          "Current tools, systems, and methodologies from day one",
          "Hands-on experience that answers the #1 interview objection",
          "Hit the ground running — employers notice immediately",
          "Stand out in a pool of equally-qualified candidates",
          "Structured upskilling pathway with expert mentorship",
        ],
      },
      footnote:
        "The skills gap doesn't close by itself. Industrial training is the deliberate bridge between a degree and a career employers will pay for.",
    },

    /* ── 8. Deliverables — what you receive ──────────────── */
    {
      type: "deliverables",
      eyebrow: "What You Get",
      headline: "Everything Included in <em>Your Programme</em>",
      description:
        "Not a certificate and a handshake — a complete, practical training package designed to make you immediately competitive.",
      items: [
        {
          number: "01",
          title: "Personalised Training Module Sequence",
          description:
            "A customised programme built around your background and target role — not a one-size-fits-all syllabus.",
        },
        {
          number: "02",
          title: "Hands-On Project Portfolio",
          description:
            "Real deliverables produced during training — functional prototypes, working code, or technical reports — that go directly into your professional portfolio.",
        },
        {
          number: "03",
          title: "Expert Mentor Access",
          description:
            "Active industry practitioners reviewing your work, providing feedback, and sharing real-world context that textbooks never cover.",
        },
        {
          number: "04",
          title: "CV, LinkedIn & Interview Preparation",
          description:
            "Positioning your new skills and portfolio output so they land with technical hiring managers and senior engineers — not just HR.",
        },
        {
          number: "05",
          title: "Clarity Network Membership",
          description:
            "Lifetime access to our exclusive alumni and hiring network — connecting you to top-tier industrial firms that recruit directly from our talent pool.",
        },
      ],
    },

    /* ── 9. Stats — trust signals ────────────────────────── */
    {
      type: "stats",
      eyebrow: "Our Track Record",
      headline: "Trusted by <em>Students & Corporates</em> Across India",
      stats: [
        {
          value: "15000",
          suffix: "+",
          label:
            "Professionals and Students Trained Through Industry-Ready Programmes",
        },
        {
          value: "200",
          suffix: "+",
          label:
            "Seminars & Workshops Delivered in Colleges and Corporate Settings",
        },
        {
          value: "100",
          suffix: "%",
          label:
            "Hands-On Project Work Built Into Every Module — No Passive Learning",
        },
        {
          value: "95",
          suffix: "%",
          label: "Trainees Report Measurable Improvement in Industry Readiness",
        },
      ],
    },

    /* ── 10. FAQ — SEO-critical ──────────────────────────── */
    {
      type: "faq",
      eyebrow: "FAQs",
      headline: "Industrial Training — <em>Your Questions Answered</em>",
      items: [
        {
          question:
            "What is industrial training and why is it important for students in India?",
          answer:
            "Industrial training is structured, hands-on exposure to real-world industry practices — typically through internships, project-based programmes, or technical workshops. For Indian students, it's increasingly critical because most engineering and technical degree curricula lag behind current industry tools and standards by 3–5 years. Industrial training closes that gap, giving employers a reason to hire you over an equally-qualified candidate who only has a degree.",
        },
        {
          question:
            "When should students do industrial training — during college or after graduation?",
          answer:
            "Both timings have value, but the ideal approach is during the 2nd and 3rd year of college — when you have enough foundational knowledge to benefit from practical exposure, and enough time left to build a strong portfolio before placements. Post-graduation industrial training is equally valuable for graduates who are currently job-hunting with insufficient practical experience. CueClarity offers programmes for both scenarios.",
        },
        {
          question:
            "What is the difference between an internship and industrial training?",
          answer:
            "A traditional internship is observation-based — you're placed in a company and may or may not get structured skill development. Industrial training is structured skill development — it's designed to build specific, measurable competencies through project work, mentorship, and deliberate practice. CueClarity's programmes are industrial training by design: every module produces a real deliverable, and every participant is mentored by active industry practitioners.",
        },
        {
          question:
            "What industries and domains does CueClarity's industrial training cover?",
          answer:
            "CueClarity's industrial training currently covers advanced electronics and embedded systems, robotics and industrial automation, AI and machine learning applications, renewable energy and sustainable infrastructure, and cyber-physical security. Each domain has modules designed with active industry experts — not generic course content — and is updated to reflect current tools and hiring requirements.",
        },
        {
          question:
            "Does industrial training help with campus placements in India?",
          answer:
            "Significantly. Campus placements are increasingly competitive, and the single most common reason students fail technical interviews is inability to demonstrate practical experience. A portfolio built during industrial training directly answers the #1 question interviewers ask: 'What have you actually built?' CueClarity's programmes are specifically structured around producing portfolio-ready deliverables before your placement season begins.",
        },
        {
          question:
            "Can working professionals benefit from industrial training at CueClarity?",
          answer:
            "Yes — CueClarity's Professional Accelerator and Corporate Development programmes are designed specifically for professionals whose skills need updating or who are transitioning to technically demanding roles. Whether you're a mid-career engineer looking to move into automation or a team lead responsible for upskilling your department, we design a module sequence around your specific knowledge gaps and target outcomes.",
        },
        {
          question:
            "Does CueClarity provide a certificate after industrial training?",
          answer:
            "Yes — participants who complete a CueClarity industrial training programme receive a completion certificate. More importantly, you leave with a hands-on project portfolio, which is substantially more valuable to technical employers than a certificate alone. Our hiring network also connects graduates directly to firms that recruit from our alumni pool, which is often a more direct path to employment than a certificate on its own.",
        },
      ],
    },

    /* ── 11. CTA — conversion ────────────────────────────── */
    {
      type: "cta",
      headline: "Don't Graduate Into <em>the Skills Gap</em>",
      description:
        "Every month without practical experience is a month your peers are pulling ahead in placement season. Secure your training programme and start building the portfolio that opens doors.",
      primaryCTA: { label: "Book a Consultation", href: "/contact" },
      quickLinks: QUICK_LINKS_ALL,
      quote:
        "A degree tells employers you completed a programme. A portfolio tells them what you can actually do. Industrial training is how you build one.",
    },
  ],
  relatedServices: [
    {
      href: "/services/work-force-development",
      title: "Workforce Development",
      description:
        "Scale from individual training to full organisational capability building.",
    },
    {
      href: "/services/for-graduates",
      title: "For Graduates",
      description:
        "Combine industrial training with expert career direction for fresh graduates.",
    },
    {
      href: "/services/career-counselling",
      title: "Career Counselling",
      description:
        "Know exactly which industry and role to target before you train.",
    },
  ],
};

// ═══════════════════════════════════════════════════════════
// PAGE 11 — Workforce Development (Competency-Based Assessments)
// ══════════════════════════════════════════════════════════════

const workforceDevelopment: ServicePageData = {
  slug: "work-force-development",
  title: "Workforce Development",
  metaTitle:
    "Workforce Development & Employee Training Solutions | CueClarity India",
  metaDescription:
    "Upskill your workforce with customised development programs. Resource management, skill mapping & employee growth solutions for Indian companies.",
  keywords: [
    "workforce development India",
    "employee training solutions India",
    "competency assessment India",
    "skill mapping corporate India",
    "workforce development Mumbai",
    "workforce development Bangalore",
    "employee upskilling program India",
    "corporate career development India",
  ],
  sections: [
    /* ── 1. hero ─────────────────────────────────────────── */
    {
      type: "hero",
      image:
        "https://res.cloudinary.com/dy7okgtgd/image/upload/v1775225413/muqhyalzgzqdvb8l2qp0_fg0f9o.webp",
      eyebrow: "Workforce Development",
      headline: "Measure What <em>Truly Matters</em>",
      description:
        "Degrees prove completion. Competency assessments prove capability. CueClarity's workforce development programmes help individuals and organisations replace guesswork with verified, data-backed clarity — so every career decision, hire, and promotion is grounded in evidence.",
      primaryCTA: {
        label: "Book an Assessment",
        href: "/contact",
      },
      quickLinks: QUICK_LINKS_ALL,
    },

    /* ── 2. questions — pain points ──────────────────────── */
    {
      type: "questions",
      eyebrow: "Sounds Familiar?",
      headline: "When Résumés Don't Tell the <em>Full Story</em>",
      description:
        "Whether you're an individual navigating career decisions or an organisation building high-performing teams — these gaps show up more often than you'd expect.",
      questions: [
        {
          icon: "FiAlertCircle",
          text: "I have strong qualifications — so why am I struggling to land the right role?",
        },
        {
          icon: "FiHelpCircle",
          text: "I don't know which skills genuinely set me apart in my industry.",
        },
        {
          icon: "FiUsers",
          text: "We hire based on impressive CVs — but new hires keep underperforming.",
        },
        {
          icon: "FiTarget",
          text: "I want to grow, but I have no clear picture of my real strengths and development gaps.",
        },
        {
          icon: "FiActivity",
          text: "Our team has experience on paper — but lacks performance under actual pressure.",
        },
        {
          icon: "FiTrendingUp",
          text: "We build training programmes without data — and can't measure whether they actually work.",
        },
      ],
    },

    /* ── 3. comparison — traditional vs. competency-based ── */
    {
      type: "comparison",
      eyebrow: "The Reality",
      headline: "What Traditional Evaluation <em>Misses</em>",
      description:
        "Résumés capture history — not potential. Competency-based assessments bridge the gap by evaluating individuals holistically.",
      left: {
        title: "Traditional Evaluation",
        emoji: "📄",
        items: [
          "Skills listed — but not tested in real-world application",
          "Behaviour described — not measured under pressure",
          "Knowledge claimed — not validated against decision-making",
          "Experience quantified — adaptability left unknown",
          "Hiring based on gut feel and interview impressions",
          "Development plans built on assumptions, not data",
        ],
      },
      right: {
        title: "Competency-Based Assessment",
        emoji: "🎯",
        items: [
          "Skills validated through role-relevant simulations",
          "Behavioural patterns mapped with psychometric precision",
          "Decision-making ability assessed in context",
          "Adaptability and growth mindset measured objectively",
          "Hiring backed by data — reduced bad hires, stronger teams",
          "Development roadmaps built on verified strengths and gaps",
        ],
      },
      footnote:
        "Better career decisions and stronger organisational outcomes — for individuals and teams alike.",
    },

    /* ── 4. cards — who it's for ─────────────────────────── */
    {
      type: "cards",
      eyebrow: "Who It's For",
      headline: "Designed for Every Stage of <em>Career Growth</em>",
      description:
        "CueClarity's competency assessments serve individuals seeking clarity and organisations building capability — with equal depth.",
      variant: "hover-dark",
      columns: 3,
      cards: [
        {
          icon: "FiBookOpen",
          title: "Students & Fresh Graduates",
          description:
            "Understand your competency profile before entering the job market — so your first career move is informed, not impulsive.",
          checklist: [
            "Strengths vs. qualification gaps",
            "Industry-readiness scoring",
            "Career-stage assessment",
          ],
        },
        {
          icon: "FiBriefcase",
          title: "Professionals & Leaders",
          description:
            "Get objective data on your leadership style, behavioural patterns, and growth areas — the self-awareness that accelerates promotions.",
          checklist: [
            "Leadership & EQ assessment",
            "Career transition mapping",
            "Executive competency profiling",
          ],
          tags: ["Most Popular"],
        },
        {
          icon: "FiGrid",
          title: "Organisations & HR Teams",
          description:
            "Replace gut-feel hiring with validated competency screening. Map team capabilities, identify high-potentials, and build data-driven development programmes.",
          checklist: [
            "Pre-hire competency screening",
            "Team skill gap analysis",
            "Custom L&D roadmaps",
          ],
        },
      ],
    },

    /* ── 5. framework — assessment methodology ───────────── */
    {
      type: "framework",
      eyebrow: "Our Methodology",
      headline: "The CueClarity <em>Competency Framework</em>",
      description:
        "Every assessment is built on four interconnected dimensions — because career success depends on more than technical skill alone.",
      pillars: [
        {
          icon: "FiCpu",
          title: "Cognitive Ability",
          points: [
            "Logical and analytical reasoning",
            "Numerical and verbal aptitude",
            "Decision-making under ambiguity",
            "Critical thinking and problem-solving",
          ],
        },
        {
          icon: "FiHeart",
          title: "Behavioural & Emotional",
          points: [
            "Big Five personality profiling",
            "Emotional intelligence (EQ)",
            "Communication and leadership style",
            "Conflict management patterns",
          ],
        },
        {
          icon: "FiLayers",
          title: "Domain Competencies",
          points: [
            "Role-specific skill validation",
            "Industry knowledge assessment",
            "Technical depth vs. breadth mapping",
            "Certification-aligned benchmarking",
          ],
        },
        {
          icon: "FiTrendingUp",
          title: "Growth & Adaptability",
          points: [
            "Learning agility measurement",
            "Change readiness profiling",
            "Career trajectory forecasting",
            "Resilience and motivation mapping",
          ],
        },
      ],
    },

    /* ── 6. process — how it works ───────────────────────── */
    {
      type: "process",
      eyebrow: "How It Works",
      headline: "From Assessment to <em>Actionable Clarity</em>",
      description:
        "A structured four-step process designed for real-world application — not theory.",
      variant: "large-numbers",
      steps: [
        {
          number: "01",
          title: "Select Your Assessment",
          description:
            "Choose from 60+ ready-to-use assessments across skills, behaviour, and cognition — aligned to your role and goals. Organisations can customise for bulk deployment.",
        },
        {
          number: "02",
          title: "Choose Competencies",
          description:
            "Pick from 250+ competencies mapped to industries, career stages, and growth objectives. Every assessment can be tailored to your specific context.",
        },
        {
          number: "03",
          title: "Customise & Evaluate",
          description:
            "Add role-specific scenarios, audio/video responses, or descriptive questions to personalise the evaluation. The assessment adapts to you — not the other way around.",
        },
        {
          number: "04",
          title: "AI-Powered Reports + Mentor Review",
          description:
            "Receive structured reports highlighting strengths, gaps, role suitability, and actionable development recommendations — all reviewed with a CueClarity career mentor for real-world interpretation.",
        },
      ],
      testimonial: {
        quote:
          "The assessment showed me exactly where I stood as a leader — and the mentor session turned those insights into a concrete 90-day growth plan. It was the most useful hour I've spent on my career.",
        name: "Neha R.",
        role: "Senior Manager, Bengaluru",
      },
    },

    /* ── 7. deliverables — what you get ──────────────────── */
    {
      type: "deliverables",
      eyebrow: "What You Receive",
      headline: "Every Assessment Includes",
      items: [
        {
          title: "Comprehensive Competency Report",
          description:
            "A multi-dimensional breakdown of your strengths, skill gaps, and behavioural patterns — not a single score, but a complete capability profile.",
        },
        {
          title: "Role Suitability Scoring",
          description:
            "See how your competencies align to specific roles, industries, and career paths — data that replaces uncertainty with direction.",
        },
        {
          title: "Personalised Development Roadmap",
          description:
            "A structured growth plan with priority areas, learning recommendations, and milestones — built around your results, not a template.",
        },
        {
          title: "1-on-1 Mentor Review Session",
          description:
            "A career expert walks through your results, answers questions, and helps translate data into decisions you can act on immediately.",
        },
        {
          title: "Organisational Dashboard (for Teams)",
          description:
            "HR leaders receive aggregated team analytics, skill heatmaps, and L&D priority recommendations — all in a single executive view.",
        },
      ],
    },

    /* ── 8. featureList — why CueClarity ────────────────── */
    {
      type: "featureList",
      eyebrow: "Why CueClarity",
      headline: "More Than Software — <em>Human-Led Clarity</em>",
      description:
        "We combine data-backed assessments with mentor-led interpretation so every insight becomes a decision you can act on.",
      columns: 2,
      features: [
        {
          icon: "FiUsers",
          title: "Mentor-Led Approach",
          description:
            "Not just software — human understanding combined with psychometric data for insights that truly land.",
        },
        {
          icon: "FiSliders",
          title: "Fully Customisable",
          description:
            "Adaptable for any profession, role, or industry — built for real-world application, not theory.",
        },
        {
          icon: "FiLayers",
          title: "Holistic Evaluation",
          description:
            "Goes beyond technical skills to assess behaviour, mindset, and growth potential together.",
        },
        {
          icon: "FiBarChart2",
          title: "Data-Driven Decisions",
          description:
            "Replace gut-feel hiring and guesswork with verified, objective competency data.",
        },
        {
          icon: "FiTarget",
          title: "Role-Aligned Assessments",
          description:
            "Every assessment is mapped to specific roles and career stages so insights are immediately actionable.",
        },
        {
          icon: "FiTrendingUp",
          title: "Trusted by 5,000+ Individuals",
          description:
            "Students, professionals, and organisations across India and beyond have used CueClarity to grow with clarity.",
        },
      ],
    },

    /* ── 9. stats — impact ───────────────────────────────── */
    {
      type: "stats",
      eyebrow: "Our Impact",
      headline: "Results That Speak <em>for Themselves</em>",
      stats: [
        {
          value: "60",
          suffix: "+",
          label:
            "Ready-to-use assessments across skills, behaviour, and cognition",
        },
        {
          value: "250",
          suffix: "+",
          label: "Competencies mapped to roles, industries, and career goals",
        },
        {
          value: "5000",
          suffix: "+",
          label:
            "Individuals guided to career clarity with data-backed insights",
        },
        {
          value: "95",
          suffix: "%",
          label:
            "Assessment participants report clearer career direction within 30 days",
        },
      ],
    },

    /* ── 10. faq ─────────────────────────────────────────── */
    {
      type: "faq",
      eyebrow: "Common Questions",
      headline: "Workforce Development — <em>Your Questions Answered</em>",
      items: [
        {
          question:
            "What is competency-based assessment and why does it matter for career growth?",
          answer:
            "Competency-based assessments evaluate what you can actually do — not just what your résumé says. They measure skills, behaviour, cognition, and personality together to give you a complete picture of your strengths and development areas. This leads to better career decisions and more targeted growth plans.",
        },
        {
          question:
            "How is CueClarity's workforce assessment different from a regular aptitude test?",
          answer:
            "Standard aptitude tests measure one dimension — usually cognitive ability. CueClarity's assessments are multi-dimensional, covering behaviour, EQ, personality, and role-specific competencies. They are also mentor-interpreted, meaning a career expert helps you understand and act on your results.",
        },
        {
          question:
            "Who should take a workforce development assessment in India?",
          answer:
            "Anyone at a career crossroads benefits — students exploring options, professionals planning transitions, leaders seeking deeper self-awareness, and entrepreneurs building teams. Assessment is especially valuable before major decisions like a job change, promotion push, or new business venture.",
        },
        {
          question:
            "Can organisations use CueClarity for pre-hiring and employee development?",
          answer:
            "Yes. CueClarity's platform supports pre-hiring competency screening, employee skill mapping, leadership pipeline identification, and training needs analysis. Our assessments reduce bad hires, improve team performance, and help build development programs grounded in real data.",
        },
        {
          question:
            "How long does a competency assessment take, and what does the report include?",
          answer:
            "Most assessments take 30–60 minutes depending on the competency set selected. Reports include a detailed breakdown of strengths, skill gaps, behavioural patterns, role suitability scores, and a structured development roadmap — all reviewed with a CueClarity mentor.",
        },
        {
          question:
            "What industries and roles are covered in the CueClarity assessment library?",
          answer:
            "Our library spans IT & Technology, Finance, HR & Operations, Sales & Marketing, Healthcare, Education, Engineering, and Corporate & BPO sectors. Assessments can be customised for specific roles, seniority levels, or organisational competency frameworks.",
        },
        {
          question:
            "Is CueClarity's workforce development program available for schools and colleges?",
          answer:
            "Yes. We partner with educational institutions to deliver structured competency assessment programs for students — helping them understand their strengths before they enter the job market. This includes workshops, psychometric tools, and faculty-aligned career guidance.",
        },
      ],
    },

    /* ── 11. cta ─────────────────────────────────────────── */
    {
      type: "cta",
      headline: "Don't Let Guesswork Decide Your Future",
      description:
        "Whether you're ready to unlock your own potential or build a team that performs — CueClarity is your partner in data-backed clarity.",
      primaryCTA: {
        label: "Book an Assessment",
        href: "/contact",
      },
      quickLinks: QUICK_LINKS_ALL,
      quote:
        "Understanding myself through CueClarity's assessment changed the way I approach my career — it wasn't guesswork anymore.",
    },
  ],
  relatedServices: [
    {
      href: "/services/industrial-training",
      title: "Industrial Training",
      description:
        "Complement assessments with hands-on skill-building for your teams.",
    },
    {
      href: "/services/for-professionals",
      title: "For Professionals",
      description:
        "Individual career growth planning alongside team-level development.",
    },
    {
      href: "/services/career-counselling",
      title: "Career Counselling",
      description:
        "Pair workforce data with personalised career counselling for your employees.",
    },
  ],
};

// ── Page registry ─────────────────────────────────────────

const SERVICE_PAGES: Record<string, ServicePageData> = {
  "career-counselling": careerCounselling,
  "students-8-9-10": students8910,
  "after-10th-12th": after10th12th,
  "for-graduates": forGraduates,
  "for-professionals": forProfessionals,
  "international-education": internationalEducation,
  "beyond-school-life-and-skills": beyondSchoolLife,
  "mental-health": emotionalWellness,
  "khud-ki-kahani": khudKiKahani,
  "industrial-training": industrialTraining,
  "work-force-development": workforceDevelopment,
};

export function getServicePage(slug: string): ServicePageData | null {
  return SERVICE_PAGES[slug] ?? null;
}

export function getAllServiceSlugs(): string[] {
  return Object.keys(SERVICE_PAGES);
}
