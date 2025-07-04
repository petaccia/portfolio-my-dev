import { BsDisplay, BsServer, BsPhone } from "react-icons/bs";
import { ReactNode } from "react";

export interface Service {
  title: string;
  description: string;
  icon: ReactNode;
  features?: string[];
}

export const servicesData: Service[] = [
  {
    title: "Développement Frontend",
    description: "Création d'interfaces utilisateur modernes, réactives et accessibles avec React, Next.js et Tailwind CSS.",
    icon: <BsDisplay className="w-12 h-12 text-secondary" />,
    features: ["React & Next.js", "Responsive Design", "Accessibilité", "Performance optimisée"]
  },
  {
    title: "Développement Backend",
    description: "Conception d'APIs robustes et évolutives avec Node.js, Express et bases de données SQL/NoSQL.",
    icon: <BsServer className="w-12 h-12 text-secondary" />,
    features: ["APIs REST", "Base de données", "Sécurité", "Architecture scalable"]
  },
  {
    title: "Applications Web Complètes",
    description: "Développement de solutions web complètes, du concept au déploiement, avec une attention particulière à la performance et à la sécurité.",
    icon: <BsPhone className="w-12 h-12 text-secondary" />,
    features: ["Full-Stack", "Déploiement", "Maintenance", "Support technique"]
  }
];
