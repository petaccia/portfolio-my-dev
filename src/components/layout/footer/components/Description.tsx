interface DescriptionProps {
  description: string;
}

export default function Description( { description }: DescriptionProps) {
  return (
    <div>
      <p
        className="mb-4 max-w-md font-body"
      >
        {description}
      </p>
    </div>
  );
}