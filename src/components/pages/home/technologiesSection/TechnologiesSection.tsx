import { technoData } from "@/components/layout/data/technoData";
import SectionHeader from "./components/SectionHeader";
import TechnologyGrid from "./components/TechnologyGrid";
import SectionCTA from "./components/SectionCTA";

export default function TechnologiesSection() {
  return (
    <section className="container mx-auto px-4 py-20 md:py-28">
      <SectionHeader />
      <TechnologyGrid technologies={technoData} />
      <SectionCTA />
    </section>
  );
}
