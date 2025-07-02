import Link from "next/link";
import { navigationNavItems } from "../../data/navigationNavItems";




export default function NavigationLinks() {
  return (
    <div>
      <h3 className="text-white font-heading text-lg font-semibold mb-4">
        Navigation
      </h3>
      <ul className="space-y-2 font-body">
        {navigationNavItems.map((item) => (
          <li key={item.href}>
            <Link 
              href={item.href} 
              className="text-white/70 hover:text-secondary transition-colors"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
