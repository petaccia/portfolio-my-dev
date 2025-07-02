import Link from "next/link";
import { BsEnvelope, BsGithub, BsLinkedin, BsPhone, BsTwitter, BsGeoAlt } from "react-icons/bs";
import Logo from "../components/Logo";
import Description from "./components/Description";
import SocialMediaIcons from "./components/SocialMediaIcons";
import NavigationLinks from "./components/NavigationLinks";
import ContactInfo from "./components/ContactInfo";
import Copyright from "./components/Copyright";

export default function Footer() {
  return (
    <footer className="bg-primary/80 border-t border-white/10 text-white/70">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div className="md: space-y-5">
           <Logo href="/" label="Sébastien Petaccia" />
            <Description 
              description="Développeur web passionné par la création d'applications web modernes et performantes." 
            />
            <div className="flex space-x-4 mt-18">
              {/* Social Media Icons */}
             <SocialMediaIcons />
            </div>
          </div>

          {/* Navigation Links */}
         <NavigationLinks />
          

          {/* Contact Info */}
         <ContactInfo />
        </div>

        {/* Copyright */}
        <Copyright />
      </div>
    </footer>
  );
}
