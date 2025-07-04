import { Service } from "@/components/layout/data/servicesData";
import ServiceCard from "./ServiceCard";

interface ServicesGridProps {
  services: Service[];
  columns?: string;
}

export default function ServicesGrid({
  services,
  columns = "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
}: ServicesGridProps) {
  return (
    <div className={`grid ${columns} gap-8`}>
      {services.map((service, index) => (
        <ServiceCard
          key={service.title}
          service={service}
          animationDelay={index * 200}
        />
      ))}
    </div>
  );
}
