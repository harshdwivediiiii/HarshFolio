import AboutOverlay from "@/components/AboutOverlay";
import ResumeModal from "@/components/ResumeModal";
import EmailSection from "@/components/EmailSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import Slider from "@/components/gallery";
import VolunteerPage from "@/components/volunteer";
import TechMarquee from "@/components/TechMarquee";
import StatsSection from "@/components/StatsSection";
export default function Home() {
  return (
    <div className="text-white relative min-h-screen overflow-x-hidden selection:bg-primary/30 selection:text-primary bg-transparent">

      <div id="home" className="container mt-24 mx-auto px-4 sm:px-8 lg:px-12 py-4">
        <HeroSection />
      </div>

      <div id="stats">
        <StatsSection />
      </div>

      {/* Full width marquee */}
      <TechMarquee />

      <div id="skills">
        <SkillsSection />
      </div>

      <div className="container mx-auto px-4 sm:px-8 lg:px-12 py-4">
        <div id="journey">
          <ExperienceTimeline />
        </div>
        <div id="projects">
          <ProjectsSection />
        </div>
        <div id="gallery">
          <Slider />
        </div>
        <div id="contact">
          <EmailSection />
        </div>
        <div id="volunteer">
          <VolunteerPage />
        </div>
      </div>

      <AboutOverlay />
      <ResumeModal />
    </div>
  );
}
