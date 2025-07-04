import { IconType } from "react-icons";

interface Technology {
  name: string;
  color: string;
  icon: IconType;
}

interface TechnologyCardProps {
  technology: Technology;
  animationDelay?: number;
}

export default function TechnologyCard({
  technology,
  animationDelay = 0
}: TechnologyCardProps) {
  const { name, color, icon: IconComponent } = technology;

  return (
    <article 
      className="group relative"
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      {/* Effet de fond animé */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary to-accent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm"></div>
      
      {/* Carte principale */}
      <div className="relative flex flex-col items-center justify-center p-6 bg-primary-light/50 backdrop-blur-sm rounded-2xl border border-white/10 transition-all duration-300 hover:border-accent/50 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-accent/20">
        {/* Icône */}
        <div className="mb-4 p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-all duration-300">
          <IconComponent className={`text-3xl md:text-4xl ${color} group-hover:scale-110 transition-transform duration-300`} />
        </div>
        
        {/* Nom de la technologie */}
        <h3 className="text-sm md:text-base font-body font-medium text-text-secondary group-hover:text-text-primary transition-colors duration-300 text-center">
          {name}
        </h3>
        
        {/* Indicateur visuel */}
        <div className="mt-2 w-8 h-0.5 bg-gradient-to-r from-accent to-secondary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
      </div>
    </article>
  );
}
