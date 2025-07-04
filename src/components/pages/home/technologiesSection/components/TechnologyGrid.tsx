import { Technology } from "@/components/layout/data/technoData";
import TechnologyCard from "./TechnologyCard";

interface TechnologyGridProps {
  technologies: Technology[];
  columns?: string;
}

export default function TechnologyGrid({
  technologies,
  columns = "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
}: TechnologyGridProps) {
  return (
    <div className={`grid ${columns} gap-6 md:gap-8`}>
      {technologies.map((techno, index) => (
        <TechnologyCard
          key={techno.name}
          technology={techno}
          animationDelay={index * 100}
        />
      ))}
    </div>
  );
}
