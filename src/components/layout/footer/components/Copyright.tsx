interface CopyrightProps {
  name?: string;
  startYear?: number;
  additionalText?: string;
  showAllRightsReserved?: boolean;
  className?: string;
}

export default function Copyright({
  name = "Sébastien Petaccia",
  startYear,
  additionalText,
  showAllRightsReserved = true,
  className = "",
}: CopyrightProps) {
  const currentYear = new Date().getFullYear();
  
  // Afficher la plage d'années si startYear est fourni et différent de l'année actuelle
  const yearDisplay = startYear && startYear !== currentYear 
    ? `${startYear}-${currentYear}` 
    : currentYear.toString();

  const rightsText = showAllRightsReserved ? "Tous droits réservés." : "";
  
  return (
    <div
      className={`mt-8 pt-8 border-t border-white/10 font-body text-center text-sm text-white/70 ${className}`}
    >
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
        <div>
          © {yearDisplay} {name}. {rightsText}
        </div>
        {additionalText && (
          <div className="text-xs text-white/50">
            {additionalText}
          </div>
        )}
      </div>
      
      {/* Liens légaux optionnels */}
      <div className="mt-4 flex justify-center space-x-4 text-xs">
        <a 
          href="/mentions-legales" 
          className="text-white/50 hover:text-secondary transition-colors"
        >
          Mentions légales
        </a>
        <span className="text-white/30">•</span>
        <a 
          href="/politique-confidentialite" 
          className="text-white/50 hover:text-secondary transition-colors"
        >
          Politique de confidentialité
        </a>
        <span className="text-white/30">•</span>
        <a 
          href="/cookies" 
          className="text-white/50 hover:text-secondary transition-colors"
        >
          Cookies
        </a>
      </div>
    </div>
  );
}
