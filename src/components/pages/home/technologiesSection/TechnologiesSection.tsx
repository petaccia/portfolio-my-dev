import { technoCategories } from "@/components/layout/data/technoData";
import SectionHeader from "./components/SectionHeader";
import TechnologyCategoriesGrid from "./components/TechnologyCategoriesGrid";
import SectionCTA from "./components/SectionCTA";

export default function TechnologiesSection() {
  return (
    <section className="container mx-auto px-4 py-20 md:py-28">
      <SectionHeader />
      <TechnologyCategoriesGrid categories={technoCategories} />
      <SectionCTA />
    </section>
  );
}
