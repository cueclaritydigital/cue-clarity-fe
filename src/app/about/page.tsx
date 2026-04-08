import type { Metadata } from "next";
import Navbar from "@/components/common/Navbar";
import HeroAbout from "@/components/about/HeroAbout";
import FounderSection from "@/components/about/FounderSection";
import OurStory from "@/components/about/OurStory";
import ExpertiseValues from "@/components/about/ExpertiseValues";
import DecisionEcosystem from "@/components/about/DecisionEcosystem";
import PromiseSection from "@/components/about/PromiseSection";
import MissionVision from "@/components/about/MissionVision";
import WhoWeServe from "@/components/about/WhoWeServe";
import BuildLives from "@/components/about/BuildLives";
import ContactSection from "@/components/common/ContactSection";
import Footer from "@/components/common/Footer";

export const dynamic = "force-static";

const founderSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sunil Kumar Panda",
  jobTitle: "Founder & Chief Career Strategist",
  worksFor: {
    "@type": "Organization",
    name: "CueClarity",
    url: "https://cueclarity.com",
  },
  url: "https://cueclarity.com/about",
};

export const metadata: Metadata = {
  title: "About CueClarity | Our Mission & Expert Team",
  description:
    "Learn how CueClarity empowers students, parents, and professionals with data-backed career counselling. Meet the team behind 2,000+ career transformations.",
  keywords: [
    "about CueClarity",
    "career counselling experts India",
    "career guidance mission",
    "CueClarity founder",
    "trusted career counselling India",
    "career counselling team Mumbai",
    "career counselling team Bangalore",
    "best career counsellors India",
  ],
  alternates: {
    canonical: "https://cueclarity.com/about",
  },
  openGraph: {
    title: "About CueClarity — Our Mission & Expert Team",
    description:
      "Data-backed career counselling transforming 2,000+ lives. Meet the expert team dedicated to your career clarity.",
    url: "https://cueclarity.com/about",
    type: "website",
    siteName: "CueClarity",
    locale: "en_IN",
    images: [
      {
        url: "https://res.cloudinary.com/dy7okgtgd/image/upload/v1775225982/Gemini_Generated_Image_fdp1q8fdp1q8fdp1_fded7r_mitxjm.webp",
        width: 1200,
        height: 630,
        alt: "CueClarity team in a career counselling workshop with students",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About CueClarity — Our Mission & Expert Team",
    description:
      "Data-backed career counselling transforming 2,000+ lives. Meet the expert team dedicated to your career clarity.",
    images: [
      "https://res.cloudinary.com/dy7okgtgd/image/upload/v1775225982/Gemini_Generated_Image_fdp1q8fdp1q8fdp1_fded7r_mitxjm.webp",
    ],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
};

export default function About() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(founderSchema) }}
      />
      <Navbar />
      <HeroAbout />
      <OurStory />
      <FounderSection />
      <ExpertiseValues />
      <DecisionEcosystem />
      <PromiseSection />
      <MissionVision />
      <WhoWeServe />
      <BuildLives />
      <ContactSection />
      <Footer />
    </>
  );
}
