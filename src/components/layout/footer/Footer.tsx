import Logo from "../components/Logo";
import Description from "./components/Description";
import SocialMediaIcons from "./components/SocialMediaIcons";
import NavigationLinks from "./components/NavigationLinks";
import ContactInfo from "./components/ContactInfo";
import Copyright from "./components/Copyright";

export default function Footer() {
  return (
    <footer className="bg-primary/80 border-t border-white/10 text-white/70" role="contentinfo">
      <div className="container mx-auto px-4 py-12">
        {/* Section principale du footer */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8" aria-label="Informations du site">

          {/* Section: Présentation et réseaux sociaux */}
          <div className="space-y-6 text-center">
            <div className="text-center">
              <Logo href="/" label="Sébastien Petaccia" />
            </div>

            <div>
              <Description
                description="Développeur web passionné par la création d'applications web modernes et performantes."
              />
            </div>

            <div className="">
              <SocialMediaIcons />
            </div>
          </div>

          {/* Section: Navigation */}
          <div>
            <NavigationLinks />
          </div>

          {/* Section: Contact */}
          <div>
            <ContactInfo />
          </div>
        </section>

        {/* Section: Copyright et mentions légales */}
        <section aria-label="Informations légales">
          <Copyright />
        </section>
      </div>
    </footer>
  );
}
