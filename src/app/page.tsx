
// Import Components
import HeroSection from "@/components/pages/home/section/HeroSection";
import { TechnologiesSection } from "@/components/pages/home/technologiesSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-primary to-[#041E45] text-white">
      <div>
        <HeroSection />
      </div>
      <div>
        <TechnologiesSection />
      </div>
    </div>
  );
}
