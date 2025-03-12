import AboutSection from "@/components/AboutSection";
import EmailSection from "@/components/EmailSection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";


export default function Home() {
  return (
    <div className="container mt-24 mx-auto px-12 py-4">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <EmailSection />
      
    </div>
  );
}
