import type { Metadata } from "next";
import Navbar from "@/components/common/Navbar";
import HeroSuccessStories from "@/components/testimonials/HeroSuccessStories";
import VideoStories from "@/components/testimonials/VideoStories";
import WrittenStories from "@/components/testimonials/WrittenStories";
import ContactSection from "@/components/common/ContactSection";
import Footer from "@/components/common/Footer";

const aggregateRatingSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "CueClarity",
  url: "https://cueclarity.com",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "2500",
    reviewCount: "2500",
  },
};

export const metadata: Metadata = {
  title: "Career Counselling Success Stories & Reviews | CueClarity India",
  description:
    "Read real transformation stories — students who found direction, professionals who switched careers. 5,000+ careers guided with 95% satisfaction.",
  alternates: {
    canonical: "https://cueclarity.com/testimonials",
  },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aggregateRatingSchema),
        }}
      />
      <Navbar />
      <HeroSuccessStories />
      <VideoStories />
      <WrittenStories />
      <ContactSection />
      <Footer />
    </>
  );
}
