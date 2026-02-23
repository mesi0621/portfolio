import { useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { NavigationBar } from './components/NavigationBar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { portfolioData } from './data/portfolioData';

function AppContent() {
  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleDownloadCV = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = portfolioData.personal.cvUrl;
    link.download = 'meseret-mezgebu-cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen">
      <NavigationBar />

      <HeroSection
        personal={portfolioData.personal}
        onViewProjects={() => scrollToSection('projects')}
        onDownloadCV={handleDownloadCV}
        onContactMe={() => scrollToSection('contact')}
      />

      <AboutSection about={portfolioData.about} />

      <SkillsSection skills={portfolioData.skills} />

      <ProjectsSection projects={portfolioData.projects} />

      <ContactSection contact={portfolioData.contact} />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
