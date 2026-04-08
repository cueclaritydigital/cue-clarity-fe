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
  alternates: {
    canonical: "https://cueclarity.com/about",
  },
  openGraph: {
    title: "About CueClarity — Our Mission",
    description:
      "Data-backed career counselling transforming 2,000+ lives and counting.",
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
