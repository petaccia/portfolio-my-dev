import { Service } from "@/components/layout/data/servicesData";

interface ServiceCardProps {
  service: Service;
  animationDelay?: number;
}

export default function ServiceCard({
  service,
  animationDelay = 0
}: ServiceCardProps) {
  const { title, description, icon, features } = service;

  return (
    <article 
      className="group relative h-full"
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      {/* Effet de fond animé */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary to-accent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>
      
      {/* Carte principale */}
      <div className="relative h-full flex flex-col p-8 bg-primary-light/30 backdrop-blur-sm rounded-2xl border border-white/10 transition-all duration-500 hover:border-accent/50 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-accent/10">
        
        {/* Icône */}
        <div className="mb-6 p-4 rounded-2xl bg-white/5 group-hover:bg-white/10 transition-all duration-300 w-fit">
          <div className="group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        </div>
        
        {/* Contenu */}
        <div className="flex-1 flex flex-col">
          {/* Titre */}
          <h3 className="text-2xl font-heading font-semibold text-text-primary mb-4 group-hover:text-white transition-colors duration-300">
            {title}
          </h3>
          
          {/* Description */}
          <p className="text-text-secondary font-body leading-relaxed mb-6 flex-1">
            {description}
          </p>
          
          {/* Features (si disponibles) */}
          {features && features.length > 0 && (
            <div className="mt-auto">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-4"></div>
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li 
                    key={index}
                    className="flex items-center text-sm text-text-muted font-body"
                  >
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 group-hover:bg-secondary transition-colors duration-300"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        {/* Indicateur de hover */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-accent to-secondary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
      </div>
    </article>
  );
}
