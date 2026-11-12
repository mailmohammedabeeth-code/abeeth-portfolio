import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { soundManager } from '../utils/soundEffects';
import HeroPortrait from './HeroPortrait';
import { 
  ArrowRight, 
  Compass, 
  Sparkles, 
  CheckCircle2, 
  Linkedin,
  Github,
  Mail,
  ChevronDown
} from 'lucide-react';

export default function Hero({ onOpenResume }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(110);

  const roles = [
    "ASPIRING SOFTWARE ENGINEER"
  ];

  useEffect(() => {
    const handleTyping = () => {
      const fullText = roles[currentTextIndex];
      
      if (!isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        setTypingSpeed(85);

        if (displayedText === fullText) {
          setTimeout(() => setIsDeleting(true), 2500);
          setTypingSpeed(350);
        }
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        setTypingSpeed(45);

        if (displayedText === '') {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(250);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTextIndex, roles, typingSpeed]);

  const scrollToSection = (id) => {
    soundManager.playClick();
    const el = document.getElementById(id) || (id === 'featured-projects' ? document.getElementById('projects') : null);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-16 pb-8 sm:pt-20 sm:pb-9 lg:pt-24 lg:pb-10 flex items-center overflow-hidden bg-[#000000]">
      {/* Background cyber grid & subtle ambient glow orbs */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#292929_1px,transparent_1px),linear-gradient(to_bottom,#292929_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
      
      {/* Ambient Red Glow Orb */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#FF453A]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Hero Editorial Identity & Story */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Beacon */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0D0D0D] border border-[#292929] text-xs font-mono mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF453A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF453A]"></span>
              </span>
              <span className="text-white font-semibold">AVAILABLE FOR OPPORTUNITIES</span>
              <span className="text-[#292929]">|</span>
              <span className="text-[#B3B3B3]">BATCH 2026</span>
            </div>

            {/* Moniker ABEETH */}
            <div className="flex flex-wrap items-baseline gap-3 sm:gap-4 mb-2">
              <span className="font-mono text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight sm:tracking-tighter text-white select-none">
                ABEETH<span className="text-[#FF453A]">.</span>
              </span>
              <span className="text-xs font-mono text-[#FF453A] tracking-widest uppercase pb-2 sm:pb-4 font-bold">
                // DIGITAL PORTFOLIO
              </span>
            </div>

            {/* Full Name */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-3">
              MOHAMMED <span className="text-[#FF453A]">ABEETH H.</span>
            </h1>

            {/* Title & Animated Typing */}
            <div className="text-lg sm:text-xl md:text-2xl font-mono text-white mb-5 flex flex-wrap items-center">
              <span className="font-bold border-b-2 border-[#FF453A] pb-0.5 min-w-[240px] sm:min-w-[280px] inline-block text-white">
                {displayedText}
                <span className="animate-pulse text-[#FF453A]">_</span>
              </span>
            </div>

            {/* Cinematic Editorial Manifesto */}
            <div className="relative pl-5 border-l-2 border-[#FF453A] my-3 max-w-2xl bg-[#0A0A0A] py-3 pr-4 rounded-r-xl">
              <p className="text-lg sm:text-xl text-white font-serif italic tracking-wide leading-snug">
                "Turning Data Into Decisions.<br />
                Turning Ideas Into Reality."
              </p>
              <p className="mt-2 text-xs sm:text-sm text-[#B3B3B3] font-mono">
                I explore data, develop robust backend solutions and engineer scalable cloud systems.
              </p>
            </div>

            {/* Academic Credential Pills */}
            <div className="flex flex-wrap gap-2 pt-2 pb-4 text-xs font-mono text-[#B3B3B3]">
              <span className="px-2.5 py-1 rounded-md bg-[#0D0D0D] border border-[#292929] text-white">
                • B.E. Computer Science & Eng.
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#0D0D0D] border border-[#292929] text-[#B3B3B3]">
                • Sethu Institute of Technology
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#0D0D0D] border border-[#292929] text-[#FF453A]">
                • Tamil Nadu, India
              </span>
            </div>

            {/* CTAs Row */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              
              {/* Explore My Work / Featured Projects */}
              <button
                onClick={() => scrollToSection('featured-projects')}
                className="group flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#FF453A] hover:bg-[#E03E34] text-black font-mono font-bold text-xs sm:text-sm shadow-md transition-all duration-300 active:scale-95 cursor-pointer"
                title="Explore Featured Projects"
              >
                <span>EXPLORE MY WORK</span>
                <Compass className="w-4 h-4 transition-transform group-hover:rotate-45" />
              </button>

              {/* Get in Touch */}
              <button
                onClick={() => scrollToSection('contact')}
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-[#0D0D0D] hover:bg-[#171717] border border-[#292929] hover:border-[#FF453A] text-white font-mono font-semibold text-xs sm:text-sm transition-all"
              >
                <span>GET IN TOUCH</span>
                <ArrowRight className="w-4 h-4 text-[#FF453A]" />
              </button>

            </div>

            {/* Social Coordinates */}
            <div className="flex items-center gap-4 mt-6 pt-4 border-t border-[#292929] w-full text-xs font-mono">
              <span className="text-[#888888]">CHANNELS:</span>
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#B3B3B3] hover:text-[#FF453A] transition-colors flex items-center gap-1"
              >
                <Linkedin className="w-3.5 h-3.5" /> LinkedIn
              </a>
              <span className="text-[#292929]">/</span>
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#B3B3B3] hover:text-[#FF453A] transition-colors flex items-center gap-1"
              >
                <Github className="w-3.5 h-3.5" /> GitHub
              </a>
              <span className="text-[#292929]">/</span>
              <a 
                href={`mailto:${personalInfo.email}`}
                className="text-[#B3B3B3] hover:text-[#FF453A] transition-colors flex items-center gap-1 truncate max-w-[160px] sm:max-w-none"
              >
                <Mail className="w-3.5 h-3.5" /> Email
              </a>
            </div>

          </div>

          {/* Right Column: Prominent Portrait Presentation */}
          <div className="lg:col-span-5 flex justify-center items-center w-full mt-6 lg:mt-0">
            <HeroPortrait />
          </div>

        </div>

        {/* Scroll to Explore Indicator */}
        <div className="mt-6 sm:mt-8 flex justify-center">
          <button
            onClick={() => scrollToSection('portals')}
            className="flex flex-col items-center gap-1.5 text-[11px] font-mono text-[#888888] hover:text-[#FF453A] transition-colors group cursor-pointer"
          >
            <span>SCROLL TO EXPLORE WORLDS</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-[#FF453A]" />
          </button>
        </div>

      </div>
    </section>
  );
}
