import { Suspense, lazy } from "react";
import Navbar from "@/components/common/Navbar";
import HeroSection from "../components/home/HeroSection";

const WhoWeHelp = lazy(() => import("../components/home/WhoWeHelp"));
const ProblemSolution = lazy(
  () => import("../components/home/ProblemSolution"),
);
const OurCounsellingProcess = lazy(
  () => import("../components/home/OurCounsellingProcess"),
);
const OurServices = lazy(() => import("../components/home/OurServices"));
const PartnersCarousel = lazy(
  () => import("../components/home/PartnersCarousel"),
);
const Testimonials = lazy(() => import("../components/home/Testimonial"));
const RFQ = lazy(() => import("../components/common/RFQ"));
const FAQ = lazy(() => import("../components/home/FAQ"));
const Footer = lazy(() => import("../components/common/Footer"));
const AssessmentBanner = lazy(
  () => import("../components/home/AssessmentBanner"),
);

export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Suspense fallback={null}>
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
      </Suspense>
    </div>
  );
}
