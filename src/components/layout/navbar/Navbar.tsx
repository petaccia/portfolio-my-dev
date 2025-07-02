import Link from "next/link"
import NavbarDesktop from "./components/NavbarDesktop"
import Logo from "../components/Logo";

export default function Navbar() {
  return (
    <nav className="bg-primary/90 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 border-b border-white/10">
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between h-16">
        {/* Logo */}
        <Logo href="/" label="Sébastien Petaccia" />
        {/* Desktop Navigation */}
        <NavbarDesktop />
      </div>
    </div>
    </nav>
  );
}