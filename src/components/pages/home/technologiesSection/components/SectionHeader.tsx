interface SectionHeaderProps {
  title?: string;
  subtitle?: string;
  showDecorator?: boolean;
}

export default function SectionHeader({
  title = "Technologies",
  subtitle = "Les outils et frameworks que j'utilise pour créer des expériences web exceptionnelles",
  showDecorator = true
}: SectionHeaderProps) {
  return (
    <header className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-wider text-text-primary mb-4">
        {title}
      </h2>
      <p className="text-xl text-text-secondary font-display max-w-2xl mx-auto">
        {subtitle}
      </p>
      {showDecorator && (
        <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto mt-6 rounded-full"></div>
      )}
    </header>
  );
}
