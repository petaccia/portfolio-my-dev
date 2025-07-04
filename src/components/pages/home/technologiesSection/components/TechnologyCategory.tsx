import { Technology, TechnologyCategory } from "@/components/layout/data/technoData";

interface TechnologyCategoryProps {
  category: TechnologyCategory;
  animationDelay?: number;
}

export default function TechnologyCategory({
  category,
  animationDelay = 0
}: TechnologyCategoryProps) {
  return (
    <div 
      className="group"
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      {/* En-tête de catégorie */}
      <div className="mb-8">
        <div className="flex items-center mb-3">
          <div className={`w-1 h-8 bg-gradient-to-b ${category.color} rounded-full mr-4`}></div>
          <div>
            <h3 className="text-2xl font-heading font-bold text-text-primary">
              {category.title}
            </h3>
            <p className="text-text-muted font-body text-sm">
              {category.description}
            </p>
          </div>
        </div>
      </div>

      {/* Grille des technologies */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {category.technologies.map((tech, index) => {
          const IconComponent = tech.icon;
          return (
            <div
              key={tech.name}
              className="group/tech relative p-4 bg-primary-light/30 backdrop-blur-sm rounded-xl border border-white/10 hover:border-accent/30 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Effet de fond subtil */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative flex items-center space-x-4">
                {/* Icône */}
                <div className="flex-shrink-0 p-2 rounded-lg bg-white/5 group-hover/tech:bg-white/10 transition-colors duration-300">
                  <IconComponent className={`text-2xl ${tech.color} group-hover/tech:scale-110 transition-transform duration-300`} />
                </div>
                
                {/* Contenu */}
                <div className="flex-1 min-w-0">
                  <div className="mb-1">
                    <h4 className="font-body font-medium text-text-secondary group-hover/tech:text-text-primary transition-colors duration-300">
                      {tech.name}
                    </h4>
                  </div>
                  
                  <p className="text-xs text-text-subtle font-body leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
