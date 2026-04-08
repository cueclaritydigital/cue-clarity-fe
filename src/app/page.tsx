import type { Metadata } from "next";
import Navbar from "@/components/common/Navbar";
import HeroSection from "@/components/home/HeroSection";
import WhoWeHelp from "@/components/home/WhoWeHelp";
import ProblemSolution from "@/components/home/ProblemSolution";
import OurCounsellingProcess from "@/components/home/OurCounsellingProcess";
import OurServices from "@/components/home/OurServices";
import PartnersCarousel from "@/components/home/PartnersCarousel";
import Testimonials from "@/components/home/Testimonial";
import RFQ from "@/components/common/RFQ";
import FAQ from "@/components/home/FAQ";
import Footer from "@/components/common/Footer";
import AssessmentBanner from "@/components/home/AssessmentBanner";

export const metadata: Metadata = {
  title: "Career Counselling for Students & Professionals | CueClarity India",
  description:
    "Confused about your career? Get science-backed career counselling from India's trusted experts. Free discovery call for students (Class 8-12), graduates & professionals.",
  keywords: [
    "career counselling India",
    "career guidance online",
    "psychometric test India",
    "career roadmap for students",
    "stream selection guidance",
    "career aptitude test India",
    "free career guidance India",
    "online career counselling India",
    "career counselling Mumbai",
    "career counselling Bangalore",
    "career counselling Pune",
    "career counselling Delhi",
    "best career counsellor India",
  ],
  alternates: {
    canonical: "https://cueclarity.com",
  },
  openGraph: {
    title: "Career Counselling for Students & Professionals | CueClarity India",
    description:
      "Confused about your career? Get science-backed career counselling from India's trusted experts. Free discovery call for students (Class 8-12), graduates & professionals.",
    url: "https://cueclarity.com",
    type: "website",
    siteName: "CueClarity",
    locale: "en_IN",
    images: [
      {
        url: "https://res.cloudinary.com/dy7okgtgd/image/upload/v1775225984/Gemini_Generated_Image_mug0mfmug0mfmug0_ns8ety_eri1bm.webp",
        width: 1200,
        height: 630,
        alt: "CueClarity — Expert Career Counselling for Students & Professionals in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Career Counselling for Students & Professionals | CueClarity India",
    description:
      "Confused about your career? Get science-backed career counselling from India's trusted experts. Free discovery call for students (Class 8-12), graduates & professionals.",
    images: [
      "https://res.cloudinary.com/dy7okgtgd/image/upload/v1775225984/Gemini_Generated_Image_mug0mfmug0mfmug0_ns8ety_eri1bm.webp",
    ],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

export const dynamic = "force-static";

const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What exactly happens in the first consultation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our initial 15-minute discovery call is completely free. We use this time to understand your current situation, identify your core challenges, and determine if our structured counseling process is the right fit for your specific goals.",
      },
    },
    {
      "@type": "Question",
      name: "Are your psychometric assessments really accurate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We don't use generic internet quizzes. We utilize internationally validated, scientifically backed psychometric tools that measure your innate aptitudes, personality traits, and core interests with high precision.",
      },
    },
    {
      "@type": "Question",
      name: "Do you only help school students, or professionals too?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We help individuals at every stage. We have specialized roadmaps for Class 8-12 students (stream/college selection), college graduates (first job/masters), and working professionals looking for career transitions or upskilling.",
      },
    },
    {
      "@type": "Question",
      name: "For students, do parents need to be involved in the sessions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We highly encourage parent involvement, especially for Class 8-12 students. We usually conduct a joint session at the end of the assessment phase to ensure parents and students are perfectly aligned on the chosen career roadmap.",
      },
    },
    {
      "@type": "Question",
      name: "How long does the entire counseling process take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Typically, our comprehensive process spans 3 to 4 weeks. This includes the initial assessment, detailed report generation, 1-on-1 expert counseling sessions, and the final roadmap delivery. However, we also offer ongoing mentorship.",
      },
    },
    {
      "@type": "Question",
      name: "What if I'm not sure what career path is right for me?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "That's exactly what we're here for. Most of our clients start with uncertainty — our structured assessment and expert guidance are designed to uncover paths you may not have considered, matched to your unique strengths and interests.",
      },
    },
    {
      "@type": "Question",
      name: "How much does career counselling cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer packages starting from individual sessions to comprehensive multi-week programs. The first discovery call is always free. After understanding your needs, we'll recommend the most suitable package — no hidden costs, no pressure.",
      },
    },
    {
      "@type": "Question",
      name: "Can you help with international university applications?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Our International Education service covers profile building, university shortlisting, SOP/essay reviews, scholarship identification, and application strategy for universities in the US, UK, Canada, Australia, Germany, and more.",
      },
    },
  ],
};

export default function LandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }}
      />
      <div>
        <Navbar />
        <HeroSection />
        <WhoWeHelp />
        <ProblemSolution />
        <OurCounsellingProcess />
        <OurServices />
        <PartnersCarousel />
        <Testimonials />
        <RFQ />
        <FAQ />
        <Footer />
        <AssessmentBanner />
      </div>
    </>
  );
}
