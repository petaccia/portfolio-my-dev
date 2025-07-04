import { TechnologyCategory } from "@/components/layout/data/technoData";
import TechnologyCategoryComponent from "./TechnologyCategory";

interface TechnologyCategoriesGridProps {
  categories: TechnologyCategory[];
}

export default function TechnologyCategoriesGrid({
  categories
}: TechnologyCategoriesGridProps) {
  return (
    <div className="space-y-16">
      {categories.map((category, index) => (
        <TechnologyCategoryComponent
          key={category.id}
          category={category}
          animationDelay={index * 200}
        />
      ))}
    </div>
  );
}
