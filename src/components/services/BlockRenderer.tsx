import HeroSection from "./HeroSection";
import TextWithImage from "./TextWithImage";
import CardsGrid from "./CardsGrid";
import ProcessSteps from "./ProcessSteps";
import AudiencePathways from "./AudiencePathways";
import StatsBanner from "./StatsBanner";
import FaqSection from "./FaqSection";
import ComparisonSection from "./ComparisonSection";
import CtaSection from "./CtaSection";
import ExpertBio from "./ExpertBio";
import TestimonialSlider from "./TestimonialSlider";

/* eslint-disable @typescript-eslint/no-explicit-any */
interface Block {
  _key: string;
  _type: string;
  [key: string]: any;
}

const BLOCK_MAP: Record<string, React.ComponentType<{ data: any }>> = {
  heroSection: HeroSection,
  textWithImage: TextWithImage,
  cardsGrid: CardsGrid,
  processSteps: ProcessSteps,
  audiencePathways: AudiencePathways,
  statsBanner: StatsBanner,
  faqSection: FaqSection,
  comparisonSection: ComparisonSection,
  ctaSection: CtaSection,
  expertBio: ExpertBio,
  testimonialSlider: TestimonialSlider,
};

export default function BlockRenderer({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block) => {
        const Component = BLOCK_MAP[block._type];

        if (!Component) {
          if (process.env.NODE_ENV === "development") {
            return (
              <div
                key={block._key}
                className="py-8 text-center text-sm text-red-500"
              >
                Unknown block type: <code>{block._type}</code>
              </div>
            );
          }
          return null;
        }

        return <Component key={block._key} data={block} />;
      })}
    </>
  );
}
