import type { Metadata } from "next";
import Navbar from "@/components/common/Navbar";
import HeroSuccessStories from "@/components/testimonials/HeroSuccessStories";
import VideoStories from "@/components/testimonials/VideoStories";
import WrittenStories from "@/components/testimonials/WrittenStories";
import ContactSection from "@/components/common/ContactSection";
import Footer from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "Success Stories | CueClarity — Real Career Transformations",
  description:
    "Read real stories of students, parents, and professionals who transformed their careers with CueClarity's science-backed guidance. Watch video chronicles and written testimonials.",
  openGraph: {
    title: "CueClarity Success Stories — Real Results From Real People",
    description:
      "5,000+ careers transformed. Hear and read authentic stories from students, parents, and professionals who found clarity with CueClarity.",
    images: [
      {
        url: "https://res.cloudinary.com/dcudnuu04/image/upload/v1773250202/Gemini_Generated_Image_mug0mfmug0mfmug0_ns8ety.png",
        width: 1200,
        height: 630,
        alt: "CueClarity Success Stories",
      },
    ],
  },
};

export default function SuccessStoriesPage() {
  return (
    <>
      <Navbar />
      <HeroSuccessStories />
      <VideoStories />
      <WrittenStories />
      <ContactSection />
      <Footer />
    </>
  );
}
