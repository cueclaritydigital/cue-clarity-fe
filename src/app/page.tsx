import Footer from "../components/common/Footer";
import RFQ from "../components/common/RFQ";
import AssessmentBanner from "../components/home/AssessmentBanner";
import FAQ from "../components/home/FAQ";
import HeroSection from "../components/home/HeroSection";
import OurCounsellingProcess from "../components/home/OurCounsellingProcess";
import OurServices from "../components/home/OurServices";
import PartnersCarousel from "../components/home/PartnersCarousel";
import ProblemSolution from "../components/home/ProblemSolution";
import Testimonials from "../components/home/Testimonial";
import WhoWeHelp from "../components/home/WhoWeHelp";


export default function LandingPage() {
  return (
    <div>
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
  );
}




