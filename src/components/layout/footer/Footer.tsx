import Link from "next/link";
import { BsEnvelope, BsGithub, BsLinkedin, BsPhone, BsTwitter, BsGeoAlt } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-primary/80 border-t border-white/10 text-white/70">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div>
            <h3 
              className="text-secondary font-heading text-xl font-bold mb-4 "
            >
              Sébastien Petaccia
            </h3>
            <p 
              className="mb-4 max-w-md font-body"
            >
              Développeur web passionné par la création d'applications web modernes et performantes.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              <a href="https://github.com/petaccia" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-secondary transition-colors">
                <BsGithub className="text-2xl" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-secondary transition-colors">
                <BsLinkedin className="text-2xl" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-secondary transition-colors">
                <BsTwitter className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 
              className="text-white font-heading text-lg font-semibold mb-4"
            >
              Navigation
            </h3>
            <ul className="space-y-2 font-body">
              <li><Link href="/" className="hover:text-secondary transition-colors">Accueil</Link></li>
              <li><Link href="/projets" className="hover:text-secondary transition-colors">Projets</Link></li>
              <li><Link href="/competences" className="hover:text-secondary transition-colors">Compétences</Link></li>
              <li><Link href="/a-propos" className="hover:text-secondary transition-colors">À propos</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 
              className="text-white text-lg font-heading font-semibold mb-4"
            >
              Contact
            </h3>
            <ul className="space-y-2 font-body">
              <li className="flex items-center">
                <BsEnvelope className="text-secondary mr-2" />
                <a href="mailto:contact@kodazen.com" className="hover:text-secondary transition-colors">contact@kodazen.com</a>
              </li>
              <li className="flex items-center">
               <BsPhone className="text-secondary mr-2" />
                <span>+33 6 12 34 56 78</span>
              </li>
              <li className="flex items-center">
                <BsGeoAlt className="text-secondary mr-2" />
                <span>Paris, France</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div 
          className="mt-8 pt-8 border-t border-white/10 text-center text-sm"
          style={{ fontFamily: "var(--font-body)" }}
        >
          © {new Date().getFullYear()} Sébastien Petaccia. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
