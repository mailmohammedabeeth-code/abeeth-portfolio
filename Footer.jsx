import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { useRouter } from '../router/Router';
import { 
  ArrowUp, 
  Linkedin, 
  Github, 
  Mail
} from 'lucide-react';

export default function Footer({ customNavLinks }) {
  const { path, navigate } = useRouter();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, targetHash) => {
    e.preventDefault();
    const el = document.getElementById(targetHash);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      if (window.history && window.history.pushState) {
        window.history.pushState(null, '', `#${targetHash}`);
      }
    } else {
      navigate(`/#${targetHash}`);
    }
  };

  // Dedicated portal metadata configuration
  const portalConfig = {
    '/expertise/cloud-devops': {
      roleTag: '// CLOUD ENGINEER',
      subtitle: 'Aspiring Cloud & DevOps Engineer',
      links: [
        { label: 'About', hash: 'overview' },
        { label: 'Cloud Journey', hash: 'journey' },
        { label: 'Technical Skills', hash: 'skills' },
        { label: 'Projects', hash: 'projects' },
        { label: 'Toolkit', hash: 'toolkit' },
        { label: 'Resume', hash: 'resume' },
        { label: 'Certifications', hash: 'certifications' },
        { label: 'Experience', hash: 'experience' },
        { label: 'Contact', hash: 'contact' },
      ]
    },
    '/expertise/data-analytics': {
      roleTag: '// DATA ANALYST',
      subtitle: 'Aspiring Data Analyst',
      links: [
        { label: 'About', hash: 'overview' },
        { label: 'Journey', hash: 'journey' },
        { label: 'Skills', hash: 'skills' },
        { label: 'Projects', hash: 'projects' },
        { label: 'Toolkit', hash: 'toolkit' },
        { label: 'Resume', hash: 'resume' },
        { label: 'Certifications', hash: 'certifications' },
        { label: 'Experience', hash: 'experience' },
        { label: 'Contact', hash: 'contact' },
      ]
    },
    '/expertise/python-development': {
      roleTag: '// PYTHON DEV',
      subtitle: 'Aspiring Python Developer',
      links: [
        { label: 'About', hash: 'overview' },
        { label: 'Journey', hash: 'journey' },
        { label: 'Skills', hash: 'skills' },
        { label: 'Projects', hash: 'projects' },
        { label: 'Toolkit', hash: 'toolkit' },
        { label: 'Resume', hash: 'resume' },
        { label: 'Certifications', hash: 'certifications' },
        { label: 'Experience', hash: 'experience' },
        { label: 'Contact', hash: 'contact' },
      ]
    },
    '/expertise/genai-ml-python': {
      roleTag: '// GEN AI ENGINEER',
      subtitle: 'Aspiring Generative AI & ML Engineer',
      links: [
        { label: 'About', hash: 'overview' },
        { label: 'Journey', hash: 'journey' },
        { label: 'Skills', hash: 'skills' },
        { label: 'Projects', hash: 'projects' },
        { label: 'Toolkit', hash: 'toolkit' },
        { label: 'Resume', hash: 'resume' },
        { label: 'Certifications', hash: 'certifications' },
        { label: 'Experience', hash: 'experience' },
        { label: 'Contact', hash: 'contact' },
      ]
    },
    '/expertise/genai': {
      roleTag: '// GEN AI ENGINEER',
      subtitle: 'Aspiring Generative AI & ML Engineer',
      links: [
        { label: 'About', hash: 'overview' },
        { label: 'Journey', hash: 'journey' },
        { label: 'Skills', hash: 'skills' },
        { label: 'Projects', hash: 'projects' },
        { label: 'Toolkit', hash: 'toolkit' },
        { label: 'Resume', hash: 'resume' },
        { label: 'Certifications', hash: 'certifications' },
        { label: 'Experience', hash: 'experience' },
        { label: 'Contact', hash: 'contact' },
      ]
    },
    '/expertise/uiux-design': {
      roleTag: '// UI/UX DESIGNER',
      subtitle: 'Aspiring UI/UX Designer & Product Architect',
      links: [
        { label: 'About', hash: 'overview' },
        { label: 'Journey', hash: 'journey' },
        { label: 'Skills', hash: 'skills' },
        { label: 'Projects', hash: 'projects' },
        { label: 'Toolkit', hash: 'toolkit' },
        { label: 'Resume', hash: 'resume' },
        { label: 'Certifications', hash: 'certifications' },
        { label: 'Experience', hash: 'experience' },
        { label: 'Contact', hash: 'contact' },
      ]
    }
  };

  const defaultNavLinks = [
    { label: 'About', hash: 'about' },
    { label: 'Skill Worlds', hash: 'portals' },
    { label: 'Projects', hash: 'featured-projects' },
    { label: 'Experience', hash: 'experience' },
    { label: 'Education', hash: 'education' },
    { label: 'Contact', hash: 'contact' },
  ];

  const currentPortal = portalConfig[path];
  const activeRoleTag = currentPortal ? currentPortal.roleTag : '// SOFTWARE ENGINEER';
  const activeSubtitle = currentPortal ? currentPortal.subtitle : 'Aspiring Software Engineer';
  const activeLinks = customNavLinks || (currentPortal ? currentPortal.links : defaultNavLinks);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[#292929] bg-[#000000] py-8 sm:py-10 overflow-hidden select-none">
      
      {/* Background ambient red glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-36 bg-[#FF453A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Row: Brand, Nav, Socials */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-6 border-b border-[#292929]">
          
          {/* LEFT SIDE — BRAND IDENTITY */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="flex items-center gap-2.5">
              <span className="font-mono text-xl sm:text-2xl font-black tracking-wider text-white">
                ABEETH<span className="text-[#FF453A]">.</span>
              </span>
              <span className="text-xs font-mono text-[#888888] font-bold tracking-wider">
                {activeRoleTag}
              </span>
            </div>
            <p className="text-xs text-[#B3B3B3] mt-1 font-mono">
              {activeSubtitle}
            </p>
          </div>

          {/* CENTER — NAVIGATION */}
          <nav 
            className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-5 text-xs font-mono font-medium text-[#A0A0A0]"
            aria-label="Footer Navigation"
          >
            {activeLinks.map((link) => (
              <a
                key={link.hash}
                href={`#${link.hash}`}
                onClick={(e) => handleNavClick(e, link.hash)}
                className="hover:text-[#FF453A] transition-colors cursor-pointer tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* RIGHT SIDE — SOCIAL LINKS & BACK TO TOP */}
          <div className="flex items-center gap-2.5">
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-[#0D0D0D] border border-[#292929] text-[#B3B3B3] hover:text-[#FF453A] hover:border-[#FF453A] transition-all shadow-sm"
              title="LinkedIn Profile"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-[#0D0D0D] border border-[#292929] text-[#B3B3B3] hover:text-[#FF453A] hover:border-[#FF453A] transition-all shadow-sm"
              title="GitHub Profile"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a 
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-lg bg-[#0D0D0D] border border-[#292929] text-[#B3B3B3] hover:text-[#FF453A] hover:border-[#FF453A] transition-all shadow-sm"
              title="Send Direct Email"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#FF453A] hover:bg-[#E03E34] text-black font-mono font-bold text-xs transition-all shadow-md ml-1 cursor-pointer"
              title="Scroll back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">TOP</span>
            </button>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="mt-5 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#888888] gap-3 text-center sm:text-left">
          <p>© {currentYear} Mohammed Abeeth H. All rights reserved.</p>
          <div className="flex items-center gap-2 text-[11px] text-[#666666]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF453A]" />
            <span>DESIGNED FOR HIGH PERFORMANCE & SCALABILITY</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
