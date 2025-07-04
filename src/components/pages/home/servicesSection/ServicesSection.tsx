import { servicesData } from "@/components/layout/data/servicesData";
import SectionHeader from "./components/SectionHeader";
import ServicesGrid from "./components/ServicesGrid";

export default function ServicesSection() {
  return (
    <section className="container mx-auto px-4 py-20 md:py-28">
      <SectionHeader />
      <ServicesGrid services={servicesData} />
    </section>
  );
}
