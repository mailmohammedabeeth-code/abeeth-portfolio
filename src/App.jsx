import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { RouterProvider, useRouter } from './router/Router';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillPortals from './components/SkillPortals';
import AbilityCard from './components/AbilityCard';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import IntroVideo, { hasIntroPlayed, markIntroAsPlayed } from './components/IntroVideo';
import DataAnalyticsPage from './pages/DataAnalyticsPage';
import PythonDevPage from './pages/PythonDevPage';
import CloudDevOpsPage from './pages/CloudDevOpsPage';
import GenAiPage from './pages/GenAiPage';
import UiUxPage from './pages/UiUxPage';

function AppContent() {
  const { path } = useRouter();
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Play intro video on initial website entry or refresh of homepage.
  // Will not replay during internal page or section navigation.
  const [isPlayingIntro, setIsPlayingIntro] = useState(() => {
    const isRoot = path === '/' || path === '';
    return isRoot && !hasIntroPlayed();
  });

  useEffect(() => {
    // If the visitor opens a dedicated subpage directly, mark intro as played
    // so navigating back to home doesn't unexpectedly re-trigger it.
    if (path !== '/' && path !== '' && !hasIntroPlayed()) {
      markIntroAsPlayed();
    }
  }, [path]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsResumeOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Route: /expertise/data-analytics
  if (path === '/expertise/data-analytics') {
    return (
      <div className="min-h-screen bg-[#000000] text-[#FFFFFF] selection:bg-[#FF453A] selection:text-black transition-colors duration-300 relative">
        <CustomCursor />
        {/* Subtle Editorial Film Grain Overlay */}
        <div 
          className="fixed inset-0 pointer-events-none opacity-[0.025] z-40 bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        />
        <DataAnalyticsPage />
        <Footer />
      </div>
    );
  }

  // Route: /expertise/python-development
  if (path === '/expertise/python-development') {
    return (
      <div className="min-h-screen bg-[#000000] text-[#FFFFFF] selection:bg-[#FF453A] selection:text-black transition-colors duration-300 relative">
        <CustomCursor />
        {/* Subtle Editorial Film Grain Overlay */}
        <div 
          className="fixed inset-0 pointer-events-none opacity-[0.025] z-40 bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        />
        <PythonDevPage />
        <Footer />
      </div>
    );
  }

  // Route: /expertise/cloud-devops
  if (path === '/expertise/cloud-devops') {
    return (
      <div className="min-h-screen bg-[#000000] text-[#FFFFFF] selection:bg-[#FF453A] selection:text-black transition-colors duration-300 relative">
        <CustomCursor />
        {/* Subtle Editorial Film Grain Overlay */}
        <div 
          className="fixed inset-0 pointer-events-none opacity-[0.025] z-40 bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        />
        <CloudDevOpsPage />
        <Footer />
      </div>
    );
  }

  // Route: /expertise/genai-ml-python or /expertise/genai
  if (path === '/expertise/genai-ml-python' || path === '/expertise/genai') {
    return (
      <div className="min-h-screen bg-[#000000] text-[#FFFFFF] selection:bg-[#FF453A] selection:text-black transition-colors duration-300 relative">
        <CustomCursor />
        {/* Subtle Editorial Film Grain Overlay */}
        <div 
          className="fixed inset-0 pointer-events-none opacity-[0.025] z-40 bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        />
        <GenAiPage />
        <Footer />
      </div>
    );
  }

  // Route: /expertise/uiux-design or /expertise/uiux
  if (path === '/expertise/uiux-design' || path === '/expertise/uiux') {
    return (
      <div className="min-h-screen bg-[#000000] text-[#FFFFFF] selection:bg-[#FF453A] selection:text-black transition-colors duration-300 relative">
        <CustomCursor />
        {/* Subtle Editorial Film Grain Overlay */}
        <div 
          className="fixed inset-0 pointer-events-none opacity-[0.025] z-40 bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        />
        <UiUxPage />
        <Footer />
      </div>
    );
  }

  // Route: Homepage (/)
  return (
    <>
      {/* Cinematic Intro Video Overlay */}
      {isPlayingIntro && (
        <IntroVideo onComplete={() => setIsPlayingIntro(false)} />
      )}

      {/* Main Portfolio Homepage */}
      <div 
        className={`min-h-screen bg-[#000000] text-[#FFFFFF] selection:bg-[#FF453A] selection:text-black transition-opacity duration-700 relative ${
          isPlayingIntro ? 'opacity-0 pointer-events-none h-screen overflow-hidden' : 'opacity-100'
        }`}
      >
        {/* Custom Interactive Follower Cursor */}
        <CustomCursor />

        {/* Subtle Editorial Film Grain Overlay */}
        <div 
          className="fixed inset-0 pointer-events-none opacity-[0.025] z-40 bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        />

        {/* Sticky Navigation Header */}
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />

        {/* Main Experience Stream */}
        <main>
          {/* 1. Hero Experience */}
          <Hero onOpenResume={() => setIsResumeOpen(true)} />

          {/* 2. Interactive Skill Worlds (The 8 Portals Architecture) */}
          <SkillPortals onOpenResume={() => setIsResumeOpen(true)} />

          {/* 3. Interactive 3D Ability Card */}
          <div id="identity">
            <AbilityCard />
          </div>

          {/* 4. Narrative About & Journey */}
          <About />

          {/* 5. Featured Projects Lab */}
          <Projects />

          {/* 6. Work Experience (Aatzy Technology) */}
          <Experience />

          {/* 7. Education & Certifications */}
          <Education />

          {/* 8. Contact & Coordination */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Full-screen Resume CV Modal */}
        <ResumeModal 
          isOpen={isResumeOpen} 
          onClose={() => setIsResumeOpen(false)} 
        />
      </div>
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider>
        <AppContent />
      </RouterProvider>
    </ThemeProvider>
  );
}
