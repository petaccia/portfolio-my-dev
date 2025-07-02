import Link from "next/link";
interface LogoProps {
  href: string;
  label: string;
}

export default function Logo( { href, label }: LogoProps) {
  return (
    <div>
      <Link
        href={href}
        className="text-secondary font-heading text-xl font-bold mb-4 "
      >
        {label}
      </Link>
    </div>
  );
}