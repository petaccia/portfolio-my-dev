import Link from "next/link";
import { navigationNavItems } from "../../data/navigationNavItems";

export default function NavbarMobile() {
  return (
    <div className="md:hidden">
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-primary/90 backdrop-blur-sm border-t border-white/10 z-50">
        <div className="flex justify-around items-center h-16 px-4">
          {navigationNavItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex flex-col items-center justify-center text-secondary hover:text-white transition-colors p-2"
              >
                <IconComponent className="text-xl mb-1" />
                <span className="text-xs">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}