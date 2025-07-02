import Link from "next/link";
import { navigationNavItems } from "../../data/navigationNavItems";

export default function NavbarDesktop() {
  return (
    <div>
      <nav className="hidden md:flex items-center space-x-10">
        {navigationNavItems.map((item) => (
          <Link key={item.href} href={item.href} className="text-secondary hover:text-white transition-colors">
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}