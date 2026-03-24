import type { Metadata } from "next";
import Navbar from "@/components/common/Navbar";
import HeroResources from "@/components/resources/HeroResources";
import LatestInsights from "@/components/resources/LatestInsights";
import EbooksSection from "@/components/resources/EbooksSection";
import VideoInsights from "@/components/resources/VideoInsights";
import GallerySection from "@/components/resources/GallerySection";
import ContactSection from "@/components/common/ContactSection";
import Footer from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "Resources | CueClarity — Career Guides, Videos & E-books",
  description:
    "Explore CueClarity's free career resources: expert articles, e-books, YouTube videos, and a gallery of real counselling sessions. Everything you need to find your direction.",
  keywords: [
    "career counselling resources",
    "career guides free download",
    "career assessment e-books",
    "study abroad tips",
    "career counselling videos",
    "CueClarity resources",
  ],
  openGraph: {
    title: "Resources | CueClarity",
    description:
      "Free career guides, e-books, YouTube videos, and expert articles — all in one place.",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dcudnuu04/image/upload/v1773931237/Gemini_Generated_Image_943jxg943jxg943j_sbdoen.webp",
        width: 1200,
        height: 630,
        alt: "CueClarity Resources Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resources | CueClarity",
    description:
      "Free career guides, e-books, YouTube videos, and expert articles — all in one place.",
  },
};

export default function ResourcesPage() {
  return (
    <main>
      <Navbar />
      <HeroResources />
      <LatestInsights />
      <EbooksSection />
      <VideoInsights />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  );
}
