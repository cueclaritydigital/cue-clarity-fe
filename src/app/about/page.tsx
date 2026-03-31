import type { Metadata } from "next";
import Navbar from "@/components/common/Navbar";
import HeroAbout from "@/components/about/HeroAbout";
import FounderSection from "@/components/about/FounderSection";
import JourneyTimeline from "@/components/about/JourneyTimeline";
import MissionSection from "@/components/about/MissionSection";
import ContactSection from "@/components/common/ContactSection";
import Footer from "@/components/common/Footer";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "About CueClarity | Our Mission & Expert Team",
  description:
    "Learn how CueClarity empowers students, parents, and professionals with data-backed career counselling. Meet the team behind 2,000+ career transformations.",
  openGraph: {
    title: "About CueClarity — Our Mission",
    description:
      "Data-backed career counselling transforming 2,000+ lives and counting.",
  },
};

export default function About() {
  return (
    <>
      <Navbar />
      <HeroAbout />
      <FounderSection />
      <JourneyTimeline />
      <MissionSection />
      <ContactSection />
      <Footer />
    </>
  );
}
