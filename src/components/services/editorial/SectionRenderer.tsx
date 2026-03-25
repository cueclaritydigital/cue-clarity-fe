import type { ServiceSection } from "@/lib/data/services";
import EditorialHero from "./EditorialHero";
import IconCards from "./IconCards";
import ProcessTimeline from "./ProcessTimeline";
import FeatureList from "./FeatureList";
import ComparisonPanel from "./ComparisonPanel";
import StatsRow from "./StatsRow";
import QuestionsPanel from "./QuestionsPanel";
import FrameworkGrid from "./FrameworkGrid";
import Deliverables from "./Deliverables";
import FAQAccordion from "./FAQAccordion";
import EditorialCTA from "./EditorialCTA";

export default function SectionRenderer({
  sections,
}: {
  sections: ServiceSection[];
}) {
  return (
    <>
      {sections.map((section, i) => {
        switch (section.type) {
          case "hero":
            return <EditorialHero key={i} section={section} />;
          case "cards":
            return <IconCards key={i} section={section} />;
          case "process":
            return <ProcessTimeline key={i} section={section} />;
          case "featureList":
            return <FeatureList key={i} section={section} />;
          case "comparison":
            return <ComparisonPanel key={i} section={section} />;
          case "stats":
            return <StatsRow key={i} section={section} />;
          case "questions":
            return <QuestionsPanel key={i} section={section} />;
          case "framework":
            return <FrameworkGrid key={i} section={section} />;
          case "deliverables":
            return <Deliverables key={i} section={section} />;
          case "faq":
            return <FAQAccordion key={i} section={section} />;
          case "cta":
            return <EditorialCTA key={i} section={section} />;
          default:
            return null;
        }
      })}
    </>
  );
}
