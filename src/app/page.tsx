import AboutOverlay from "@/components/AboutOverlay";
import EmailSection from "@/components/EmailSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import Slider from "@/components/Slider";
import VolunteerPage from "@/components/volunteer";
import InteractiveBackground from "@/components/InteractiveBackground";
import TechMarquee from "@/components/TechMarquee";
import StatsSection from "@/components/StatsSection";
export default function Home() {
  return (
    <div className="text-black dark:text-white relative min-h-screen overflow-x-hidden selection:bg-violet-500/30 selection:text-violet-900 dark:selection:text-violet-100 bg-transparent">
      
      <div className="container mt-24 mx-auto px-4 sm:px-8 lg:px-12 py-4">
        <HeroSection />
      </div>
      
      <StatsSection />

      {/* Full width marquee */}
      <TechMarquee />

      <SkillsSection />

      <div className="container mx-auto px-4 sm:px-8 lg:px-12 py-4">
        <ExperienceTimeline />
        <ProjectsSection />
        <Slider />
        <EmailSection />
        <VolunteerPage />
      </div>

      <AboutOverlay />
    </div>
  );
}
