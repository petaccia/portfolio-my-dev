import { BsArrowRight } from "react-icons/bs";

interface SectionCTAProps {
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  showIcon?: boolean;
}

export default function SectionCTA({
  description = "Curieux de voir ces technologies en action ?",
  buttonText = "Découvrir mes projets",
  buttonHref = "/projects",
  showIcon = true
}: SectionCTAProps) {
  return (
    <footer className="text-center mt-16">
      <p className="text-text-muted font-body mb-6">
        {description}
      </p>
      <a 
        href={buttonHref} 
        className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-secondary to-accent text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 hover:scale-105"
      >
        {buttonText}
        {showIcon && (
          <BsArrowRight className="ml-2 text-lg" />
        )}
      </a>
    </footer>
  );
}
