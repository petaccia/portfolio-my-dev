import { IconType } from "react-icons";
import { IconsTechno } from "@/components/layout/icons/iconsTechno";

// Interface pour une technologie individuelle
export interface Technology {
  name: string;
  color: string;
  icon: IconType;
  description: string;
}

// Interface pour une catégorie de technologies
export interface TechnologyCategory {
  id: string;
  title: string;
  description: string;
  color: string;
  technologies: Technology[];
}

export const technoCategories: TechnologyCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    description: "Technologies pour créer des interfaces utilisateur modernes",
    color: "from-blue-500 to-cyan-500",
    technologies: [
      {
        name: "HTML5",
        color: "text-orange-500",
        icon: IconsTechno.html.icon,
        description: "Langage de balisage pour structurer le contenu web"
      },
      {
        name: "CSS3",
        color: "text-blue-500",
        icon: IconsTechno.css.icon,
        description: "Feuilles de style pour la mise en forme"
      },
      {
        name: "JavaScript",
        color: "text-yellow-500",
        icon: IconsTechno.javascript.icon,
        description: "Langage de programmation pour le web"
      },
      {
        name: "TypeScript",
        color: "text-blue-500",
        icon: IconsTechno.typescript.icon,
        description: "JavaScript avec typage statique"
      },
      {
        name: "React",
        color: "text-blue-500",
        icon: IconsTechno.react.icon,
        description: "Bibliothèque pour créer des interfaces utilisateur"
      },
      {
        name: "Next.js",
        color: "text-white",
        icon: IconsTechno.nextjs.icon,
        description: "Framework React pour la production"
      }
    ]
  },
  {
    id: "backend",
    title: "Backend",
    description: "Technologies serveur et bases de données",
    color: "from-green-500 to-emerald-500",
    technologies: [
      {
        name: "Node.js",
        color: "text-green-500",
        icon: IconsTechno.nodejs.icon,
        description: "Runtime JavaScript côté serveur"
      },
      {
        name: "Express",
        color: "text-gray-400",
        icon: IconsTechno.express.icon,
        description: "Framework web minimaliste pour Node.js"
      },
      {
        name: "MongoDB",
        color: "text-green-500",
        icon: IconsTechno.mongodb.icon,
        description: "Base de données NoSQL orientée documents"
      },
      {
        name: "MySQL",
        color: "text-blue-500",
        icon: IconsTechno.mysql.icon,
        description: "Système de gestion de base de données relationnelle"
      }
    ]
  },
  {
    id: "tools",
    title: "Outils & Design",
    description: "Outils de développement et design",
    color: "from-purple-500 to-pink-500",
    technologies: [
      {
        name: "Git",
        color: "text-orange-500",
        icon: IconsTechno.git.icon,
        description: "Système de contrôle de version"
      },
      {
        name: "GitHub",
        color: "text-gray-400",
        icon: IconsTechno.github?.icon || IconsTechno.git.icon,
        description: "Plateforme de développement collaboratif"
      },
      {
        name: "Figma",
        color: "text-purple-500",
        icon: IconsTechno.figma?.icon || IconsTechno.css.icon,
        description: "Outil de design et prototypage d'interfaces"
      },
      {
        name: "Vercel",
        color: "text-white",
        icon: IconsTechno.vercel?.icon || IconsTechno.nextjs.icon,
        description: "Plateforme de déploiement pour applications web"
      }
    ]
  }
];

// Export de compatibilité pour l'ancien format
export const technoData: Technology[] = technoCategories.flatMap(category => 
  category.technologies.map(tech => ({
    name: tech.name,
    color: tech.color,
    icon: tech.icon,
    description: tech.description
  }))
);
