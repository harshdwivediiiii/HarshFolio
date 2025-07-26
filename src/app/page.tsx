import AboutSection from "@/components/AboutSection";
import EmailSection from "@/components/EmailSection";
import Experience from "@/components/Experience";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import Slider from "@/components/Slider";
import VolunteerPage from "@/components/volunteer";


export default function Home() {
  return (
    <div className="container mt-24 mx-auto px-12 py-4 dark:bg-black bg-white dark:text-white text-black">
      <HeroSection />
      <AboutSection />
      <Experience />
      <ProjectsSection />
      <Slider />
      <EmailSection />
      <VolunteerPage />
      </div>
    
  );
}
