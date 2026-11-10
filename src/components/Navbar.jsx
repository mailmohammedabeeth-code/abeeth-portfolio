import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { soundManager } from '../utils/soundEffects';
import { 
  Menu, 
  X, 
  Volume2, 
  VolumeX, 
  Clock
} from 'lucide-react';

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isPlayingMusic, setIsPlayingMusic] = useState(soundManager.isMusicPlaying());
  const [currentTime, setCurrentTime] = useState('');

  // Synchronize playback state across routes & components
  useEffect(() => {
    const unsubscribe = soundManager.subscribeMusic((playing) => {
      setIsPlayingMusic(playing);
    });
    return () => unsubscribe();
  }, []);

  const navLinks = [
    { name: 'Portals', href: '#portals' },
    { name: 'Identity', href: '#identity' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  // Live Tamil Nadu IST clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setCurrentTime(now.toLocaleTimeString('en-US', options));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['home', 'portals', 'identity', 'about', 'projects', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId) || (sectionId === 'projects' ? document.getElementById('featured-projects') : null);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    soundManager.playClick();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    soundManager.playClick();
    setMobileMenuOpen(false);
    const target = document.getElementById('interactive-ability-card') || document.getElementById('identity');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleMusicToggle = () => {
    soundManager.toggleMusic();
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3.5 bg-[#000000]/90 backdrop-blur-md border-b border-[#292929] shadow-2xl' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand: ABEETH */}
          <a 
            href="#interactive-ability-card" 
            onClick={handleLogoClick}
            className="flex items-center gap-3 group focus:outline-none cursor-pointer"
            data-cursor="hover"
            title="Navigate to Interactive Ability Card"
          >
            <div className="relative flex items-center justify-center h-10 px-3 rounded-xl bg-[#0A0A0A] border border-[#292929] group-hover:border-[#FF453A] transition-colors">
              <span className="font-mono font-black text-xs sm:text-sm tracking-wider text-white">
                ABEETH<span className="text-[#FF453A]">.</span>
              </span>
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#FF453A] rounded-full" />
            </div>

            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight text-white group-hover:text-white transition-colors">
                Mohammed Abeeth H.
              </span>
              <span className="text-[10px] font-mono text-[#A3A3A3]">
                Aspiring Software Engineer
              </span>
            </div>
          </a>

          {/* Center Pill: Live Location & IST Time */}
          <div className="hidden lg:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A0A0A] border border-[#292929] text-[11px] font-mono text-[#A3A3A3]">
            <span className="w-2 h-2 rounded-full bg-[#FF453A] animate-pulse" />
            <span>TAMIL NADU, IN</span>
            <span className="text-[#292929]">|</span>
            <span className="text-white font-semibold">{currentTime || '11:45 AM IST'}</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#0A0A0A] border border-[#292929] backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 text-xs font-mono font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-[#FF453A] text-black font-bold shadow-sm'
                      : 'text-[#A3A3A3] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Background Music / SFX Play & Pause Control */}
            <button
              onClick={handleMusicToggle}
              className={`p-2 sm:px-3 rounded-xl border transition-all duration-200 flex items-center gap-2 text-xs font-mono select-none ${
                isPlayingMusic 
                  ? 'bg-[#0A0A0A] border-[#FF453A]/50 hover:border-[#FF453A] text-white shadow-[0_0_15px_rgba(255,69,58,0.2)]' 
                  : 'bg-[#0A0A0A] border-[#292929] text-white hover:border-[#444444]'
              }`}
              title={isPlayingMusic ? 'Pause Background Music (SFX ON)' : 'Play Background Music (SFX OFF)'}
              aria-label="Toggle background music"
            >
              {isPlayingMusic ? (
                <>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF453A] animate-pulse" />
                  <Volume2 className="w-4 h-4 text-white" />
                  <span className="hidden xl:inline text-[10px] text-white font-bold tracking-wider">SFX ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4 text-white" />
                  <span className="hidden xl:inline text-[10px] text-white font-bold tracking-wider">SFX OFF</span>
                </>
              )}
            </button>
          </div>

          {/* Mobile Buttons */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={handleMusicToggle}
              className={`p-2 rounded-lg border transition-all duration-200 flex items-center gap-1.5 text-white ${
                isPlayingMusic 
                  ? 'bg-[#0A0A0A] border-[#FF453A]/50 hover:border-[#FF453A]' 
                  : 'bg-[#0A0A0A] border-[#292929]'
              }`}
              aria-label="Toggle background music"
              title={isPlayingMusic ? 'Pause Background Music (SFX ON)' : 'Play Background Music (SFX OFF)'}
            >
              {isPlayingMusic ? (
                <>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF453A] animate-pulse" />
                  <Volume2 className="w-4 h-4 text-white" />
                </>
              ) : (
                <VolumeX className="w-4 h-4 text-white" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#0A0A0A] border border-[#292929] text-white hover:border-[#FF453A] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#292929] bg-[#000000] px-4 py-6 space-y-3 animate-fadeIn">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block px-4 py-2.5 rounded-lg text-sm font-mono transition-colors ${
                    isActive 
                      ? 'bg-[#FF453A] text-black font-bold' 
                      : 'text-[#A3A3A3] hover:text-white hover:bg-[#0A0A0A]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
