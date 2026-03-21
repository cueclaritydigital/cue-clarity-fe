// ── Programs & Webinars Data ─────────────────────────────────────────────────
// Single source of truth for the Programs landing page.

export type ProgramBadge =
  | "Most Popular"
  | "Upcoming"
  | "On Sale"
  | "New"
  | "Limited Seats";

export interface Program {
  id: string;
  title: string;
  subtitle: string;
  audience: string;
  audienceTag: string;
  description: string;
  highlights: string[];
  outcomes: string[];
  duration: string;
  format: string;
  level: string;
  isFeatured?: boolean;
  externalUrl: string;
  accent: string;
  image: string;
  price: number;
  originalPrice: number;
  badge?: ProgramBadge;
}

export type WebinarStatus = "upcoming" | "past";

export interface Webinar {
  id: string;
  title: string;
  description: string;
  audience: string;
  duration: string;
  topics: string[];
  externalUrl: string;
  image: string;
  status: WebinarStatus;
  date: string;
}

export const PROGRAMS: Program[] = [
  {
    id: "career-discovery-assessment",
    title: "Career Discovery Assessment",
    subtitle: "Find Your True Calling — Backed by Science",
    audience: "Students (Class 8–12)",
    audienceTag: "For Students",
    description:
      "A comprehensive psychometric assessment combined with expert 1-on-1 counselling to help students discover career paths aligned with their innate aptitudes, personality traits, and core interests.",
    highlights: [
      "Internationally validated psychometric tools",
      "Detailed aptitude, interest & personality profiling",
      "1-on-1 expert counsellor sessions",
      "Personalised career roadmap with actionable steps",
      "Parent–student alignment session",
    ],
    outcomes: [
      "Crystal-clear stream & subject selection",
      "Top 5 career paths matched to your strengths",
      "College & entrance exam preparation strategy",
      "Confidence to make the right career decision",
    ],
    duration: "3–4 Weeks",
    format: "Online + Offline",
    level: "Beginner",
    isFeatured: true,
    externalUrl:
      "https://cueclarityconsultantsllp.graphy.com/courses/How-to-gain-clarity-in-your-career-69beb04eda06b5af6e8a1b59",
    accent: "var(--primary-blue)",
    image:
      "https://res.cloudinary.com/dcudnuu04/image/upload/v1773250202/Gemini_Generated_Image_mug0mfmug0mfmug0_ns8ety.png",
    price: 499,
    originalPrice: 999,
    badge: "Most Popular",
  },
  {
    id: "college-career-readiness",
    title: "College & Career Readiness Program",
    subtitle: "From Campus to Career — With Confidence",
    audience: "College Students (UG & PG)",
    audienceTag: "For Graduates",
    description:
      "A structured career readiness program that bridges the gap between academic knowledge and professional success. From resume building to interview mastery — get placement-ready.",
    highlights: [
      "Career profiling & goal-setting workshops",
      "Resume, SOP & LinkedIn optimisation",
      "Mock interviews with industry experts",
      "Internship & placement support",
      "Alumni mentorship network access",
    ],
    outcomes: [
      "A polished, job-ready professional profile",
      "Interview confidence & negotiation skills",
      "Shortlisted internship & job opportunities",
      "Long-term career growth strategy",
    ],
    duration: "6–8 Weeks",
    format: "Online + Workshops",
    level: "Intermediate",
    externalUrl:
      "https://cueclarityconsultantsllp.graphy.com/courses/How-to-gain-clarity-in-your-career-69beb04eda06b5af6e8a1b59",
    accent: "#059669",
    image:
      "https://res.cloudinary.com/dcudnuu04/image/upload/v1773857945/Gemini_Generated_Image_fdp1q8fdp1q8fdp1_fded7r.webp",
    price: 699,
    originalPrice: 1299,
    badge: "Upcoming",
  },
  {
    id: "professional-career-transition",
    title: "Career Transition Mastery",
    subtitle: "Pivot Your Career — Don't Just Switch Jobs",
    audience: "Working Professionals",
    audienceTag: "For Professionals",
    description:
      "Feeling stuck or unfulfilled in your career? Our structured transition program helps you identify transferable skills, explore new industries, and make a confident, informed career pivot.",
    highlights: [
      "Deep-dive career assessment & skills audit",
      "Industry mapping & opportunity analysis",
      "Personal branding & thought leadership",
      "Networking strategy & LinkedIn authority building",
      "Ongoing 1-on-1 coaching (3 months)",
    ],
    outcomes: [
      "A clear, validated career pivot strategy",
      "Updated professional brand & online presence",
      "Actionable networking & job search plan",
      "Smoother transition with expert hand-holding",
    ],
    duration: "8–12 Weeks",
    format: "Online + Coaching",
    level: "Advanced",
    externalUrl:
      "https://cueclarityconsultantsllp.graphy.com/courses/How-to-gain-clarity-in-your-career-69beb04eda06b5af6e8a1b59",
    accent: "#6D28D9",
    image:
      "https://res.cloudinary.com/dcudnuu04/image/upload/v1773931237/Gemini_Generated_Image_943jxg943jxg943j_sbdoen.webp",
    price: 899,
    originalPrice: 1499,
    badge: "On Sale",
  },
  {
    id: "parent-guidance-workshop",
    title: "Parent Guidance Workshop",
    subtitle: "Support Your Child's Career Journey — The Right Way",
    audience: "Parents of Students (Class 8–12)",
    audienceTag: "For Parents",
    description:
      "Designed exclusively for parents who want to understand modern career options, guide their children without bias, and bridge the generational career knowledge gap.",
    highlights: [
      "Understanding the modern career landscape",
      "How to support without pressuring",
      "Decoding psychometric assessment reports",
      "Communication strategies with teenagers",
      "Joint parent–student action planning",
    ],
    outcomes: [
      "Better understanding of 21st-century careers",
      "Tools to have productive career conversations",
      "Shared family career roadmap",
      "Reduced conflict around career decisions",
    ],
    duration: "2 Sessions",
    format: "Online / In-Person",
    level: "All Levels",
    externalUrl: "#",
    accent: "#D97706",
    image:
      "https://res.cloudinary.com/dcudnuu04/image/upload/v1773250202/Gemini_Generated_Image_mug0mfmug0mfmug0_ns8ety.png",
    price: 299,
    originalPrice: 499,
    badge: "New",
  },
];

export const WEBINARS: Webinar[] = [
  {
    id: "career-myths-busted",
    title: "Career Myths Busted: What No One Tells You About Choosing a Career",
    description:
      "Discover why most career advice is outdated, and learn the framework successful professionals actually use to find fulfilling careers.",
    audience: "Students & Parents",
    duration: "90 minutes",
    topics: [
      "Why passion alone is bad career advice",
      "The 3-pillar career decision framework",
      "Emerging careers most people don't know about",
      "How psychometric science replaces guesswork",
    ],
    externalUrl:
      "https://cueclarityconsultantsllp.graphy.com/sessions/69beaea56bd6076efa4e5de1",
    image:
      "https://res.cloudinary.com/dcudnuu04/image/upload/v1773250202/Gemini_Generated_Image_mug0mfmug0mfmug0_ns8ety.png",
    status: "upcoming",
    date: "Apr 12, 2026",
  },
  {
    id: "ai-proof-career",
    title: "Future-Proof Your Career in the Age of AI",
    description:
      "Understand which careers will thrive, which will transform, and how to position yourself on the right side of the AI revolution.",
    audience: "Students & Professionals",
    duration: "60 minutes",
    topics: [
      "Careers AI will enhance vs. replace",
      "Skills that will matter in 2030",
      "How to build an AI-resilient career plan",
      "Real-world case studies & industry insights",
    ],
    externalUrl:
      "https://cueclarityconsultantsllp.graphy.com/sessions/69beaea56bd6076efa4e5de1",
    image:
      "https://res.cloudinary.com/dcudnuu04/image/upload/v1773857945/Gemini_Generated_Image_fdp1q8fdp1q8fdp1_fded7r.webp",
    status: "upcoming",
    date: "May 3, 2026",
  },
  {
    id: "international-education-decoded",
    title: "Studying Abroad Decoded: From Dream to Admit",
    description:
      "A step-by-step masterclass on international university applications — from profile building to scholarship hunting to visa success.",
    audience: "Students & Parents",
    duration: "75 minutes",
    topics: [
      "Choosing the right country & university",
      "Building a standout application profile",
      "SOP, LOR & essay writing secrets",
      "Scholarship strategies that actually work",
    ],
    externalUrl:
      "https://cueclarityconsultantsllp.graphy.com/sessions/69beaea56bd6076efa4e5de1",
    image:
      "https://res.cloudinary.com/dcudnuu04/image/upload/v1773931237/Gemini_Generated_Image_943jxg943jxg943j_sbdoen.webp",
    status: "past",
    date: "Feb 15, 2026",
  },
];

export const PROGRAM_FAQS = [
  {
    question: "What's included in the Career Discovery Assessment?",
    answer:
      "Our flagship assessment includes internationally validated psychometric tests covering aptitude, personality, and interests. You'll receive a detailed 30+ page report, followed by 2-3 one-on-one sessions with a certified career counsellor, a parent alignment session, and a personalised career roadmap with actionable next steps.",
  },
  {
    question: "Are the programs available online or only in-person?",
    answer:
      "All our programs are available in both online and offline formats. The psychometric assessments are conducted online for convenience, while counselling sessions can be held via video call or at our centres — whichever works best for your schedule.",
  },
  {
    question: "How are your programs different from free career quizzes?",
    answer:
      "Free career quizzes use simplistic logic and generic databases. Our programs use internationally validated, research-backed psychometric instruments combined with expert human counselling. You don't just get a list of careers — you get a personalised, actionable roadmap designed by certified professionals who've guided 5,000+ individuals.",
  },
  {
    question: "Can parents attend the counselling sessions?",
    answer:
      "Absolutely. For school students, we strongly encourage parent involvement. We conduct a dedicated parent-student alignment session where we discuss the assessment findings together, address concerns, and create a shared career roadmap that the whole family feels confident about.",
  },
  {
    question: "What age group or career stage are these programs suitable for?",
    answer:
      "We have specialised programs for every stage: Class 8–12 students (stream selection & college planning), college students (placement readiness), working professionals (career transitions), and even parents who want to better guide their children. Each program is tailored to the unique challenges of that stage.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Most clients experience a significant clarity shift within the first 2 sessions. Our complete programs typically run 3–12 weeks depending on the package. By the end, you'll have a validated career direction, a concrete action plan, and the confidence to pursue it — that's the transformation we deliver.",
  },
  {
    question: "What if I'm not satisfied with the program?",
    answer:
      "Your satisfaction is our priority. We offer a structured feedback process throughout the program. If at any point you feel we're not meeting your expectations, we'll recalibrate the approach. We stand behind our work — over 95% of our clients rate us 5 stars.",
  },
  {
    question: "How do I get started?",
    answer:
      "Getting started is simple. Message us on WhatsApp for a free 15-minute discovery call. We'll understand your goals, recommend the best program, and get you started — no obligations, no pressure. Most clients begin their program within a week of reaching out.",
  },
];

export const PROGRAM_STATS = [
  { value: "5,000+", label: "Students Mentored" },
  { value: "95%", label: "Satisfaction Rate" },
  { value: "500+", label: "Workshops Delivered" },
  { value: "15+", label: "Countries Served" },
];

export const WHY_CHOOSE = [
  {
    title: "Science-Backed Assessments",
    description:
      "We use internationally validated psychometric instruments — not generic internet quizzes. Every insight is rooted in research and delivered with precision.",
    icon: "science",
  },
  {
    title: "Expert Human Counsellors",
    description:
      "AI tools can surface data, but only a certified human counsellor can understand your story, motivations, and fears — and guide you through them.",
    icon: "expert",
  },
  {
    title: "Personalised Career Roadmaps",
    description:
      "No two individuals are the same. Every program concludes with a detailed, actionable roadmap tailored to your unique profile, goals, and circumstances.",
    icon: "roadmap",
  },
  {
    title: "End-to-End Support",
    description:
      "From assessment to action — we don't just tell you what to do. We walk with you through the entire journey with follow-ups, mentorship, and resources.",
    icon: "support",
  },
  {
    title: "Proven Track Record",
    description:
      "5,000+ individuals guided. 200+ institutions trust us. 95%+ satisfaction rate. Our results speak louder than promises.",
    icon: "track",
  },
  {
    title: "Family-Inclusive Approach",
    description:
      "Career decisions affect the whole family. Our programs include dedicated parent sessions to align expectations and build shared confidence.",
    icon: "family",
  },
];
