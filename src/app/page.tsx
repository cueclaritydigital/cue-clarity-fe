import Footer from "../components/common/Footer";
import RFQ from "../components/common/RFQ";
import AssessmentBanner from "../components/home/AssessmentBanner";
import FAQ from "../components/home/FAQ";
import HeroSection from "../components/home/HeroSection";
import OurServices from "../components/home/OurServices";
import ProblemSolution from "../components/home/ProblemSolution";
import Testimonials from "../components/home/Testimonial";
import WhoWeHelp from "../components/home/WhoWeHelp";
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';


export default function LandingPage() {
  return (
    <div >
      <HeroSection />
      <WhoWeHelp />
      <OurServices/>
    
      <ProblemSolution/>
      <Testimonials/>
      <RFQ />
      <FAQ />
      <Footer />
        <AssessmentBanner/>
    </div>
  );
}




