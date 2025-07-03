export default function Copyright() {
  // Récupère l'année actuelle automatiquement
  const currentYear = new Date().getFullYear();

  return (
    <div className="mt-8 pt-8 border-t border-white/10 font-body text-center text-sm text-white/70">
      {/* Texte de copyright principal */}
      <p>
        © {currentYear} Sébastien Petaccia. Tous droits réservés.
      </p>

      {/* Liens légaux */}
      <div className="mt-4 space-x-4 text-xs">
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
      </div>
    </div>
  );
}
