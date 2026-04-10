import AboutSection from "@/components/AboutSection";
import EmailSection from "@/components/EmailSection";
import Experience from "@/components/Experience";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import Slider from "@/components/Slider";
import VolunteerPage from "@/components/volunteer";
import InteractiveBackground from "@/components/InteractiveBackground";
import TechMarquee from "@/components/TechMarquee";
import StatsSection from "@/components/StatsSection";
export default function Home() {
  return (
    <div className="dark:bg-[#060606] bg-white dark:text-white text-black relative min-h-screen overflow-x-hidden selection:bg-violet-500/30 selection:text-violet-900 dark:selection:text-violet-100">
      <InteractiveBackground />
      
      <div className="container mt-24 mx-auto px-4 sm:px-8 lg:px-12 py-4">
        <HeroSection />
      </div>
      
      <StatsSection />

      {/* Full width marquee */}
      <TechMarquee />

      <div className="container mx-auto px-4 sm:px-8 lg:px-12 py-4">
        <AboutSection />
        <Experience />
        <ProjectsSection />
        <Slider />
        <EmailSection />
        <VolunteerPage />
      </div>
    </div>
  );
}
