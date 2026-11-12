import React, { useState, useEffect } from 'react';
import { useRouter } from '../router/Router';
import { personalInfo } from '../data/portfolioData';
import {
  uiUxHero,
  uiUxJourney,
  uiUxProcess,
  uiUxSkillsData,
  uiUxToolkit,
  uiUxDesignSystem,
  uiUxProfessionalSkills,
  uiUxProjectsData,
  uiUxCertifications,
  uiUxExperience
} from '../data/uiUxData';
import {
  ArrowLeft,
  Download,
  ExternalLink,
  FileText,
  Eye,
  CheckCircle2,
  Palette,
  Sparkles,
  Layout,
  Layers,
  Users,
  Code2,
  Workflow,
  Check,
  Copy,
  Menu,
  X,
  MessageSquare,
  ArrowRight,
  Mail,
  Linkedin,
  Github,
  Calendar,
  MapPin,
  Brush,
  Compass,
  Target,
  Lightbulb,
  Type,
  Smartphone,
  Sliders,
  UserCheck,
  Network,
  GitBranch,
  Play,
  Move,
  ShieldCheck,
  Boxes,
  Maximize2,
  Briefcase,
  Building,
  Phone,
  Terminal
} from 'lucide-react';

export default function UiUxPage() {
  const { navigate } = useRouter();

  // Navigation state
  const [activeNav, setActiveNav] = useState('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Skills filter state
  const [selectedSkillCategory, setSelectedSkillCategory] = useState('all');

  // Interactive PDF / Certificate Viewer Modal
  const [activeViewerModal, setActiveViewerModal] = useState(null);

  // Resume Inline Viewer Toggle
  const [showInlineResume, setShowInlineResume] = useState(true);

  // Copied states
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Interactive Hero Preview Tab: 'tokens' | 'component'
  const [heroPreviewTab, setHeroPreviewTab] = useState('tokens');

  // Interactive demo button state
  const [buttonClicked, setButtonClicked] = useState(false);

  // Scroll spy for active navigation item
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'overview',
        'process',
        'journey',
        'skills',
        'design-system',
        'soft-skills',
        'projects',
        'toolkit',
        'resume',
        'certifications',
        'experience',
        'contact'
      ];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveNav(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const navLinks = [
    { id: 'overview', label: 'Overview' },
    { id: 'process', label: 'Process' },
    { id: 'journey', label: 'Journey' },
    { id: 'skills', label: 'Matrix' },
    { id: 'design-system', label: 'Systems' },
    { id: 'soft-skills', label: 'Edge' },
    { id: 'projects', label: 'Projects' },
    { id: 'toolkit', label: 'Toolkit' },
    { id: 'resume', label: 'Resume' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  const whatsappUrl = `https://wa.me/919080081060?text=${encodeURIComponent(
    "Hi Mohammed Abeeth, I reviewed your UI/UX Designer portfolio and would like to discuss a design opportunity."
  )}`;

  return (
    <div className="bg-[#000000] text-[#FFFFFF] min-h-screen font-sans selection:bg-[#FF453A] selection:text-black">
      
      {/* ======================================================== */}
      {/* 1. TOP STICKY HEADER NAVIGATION                          */}
      {/* ======================================================== */}
      <header className="sticky top-0 z-40 bg-[#000000]/90 backdrop-blur-md border-b border-[#292929]">
        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Left: Back to Home & Portal Branding */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0D0D0D] border border-[#292929] hover:border-[#FF453A] text-xs font-mono text-[#FF453A] hover:text-white transition-all group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>RETURN HOME</span>
            </button>

            <div className="hidden sm:flex items-center gap-2 pl-3 border-l border-[#292929]">
              <span className="text-sm font-black tracking-wider text-white">
                ABEETH<span className="text-[#FF453A]">.</span>
              </span>
              <span className="text-xs font-mono text-[#888888]">// UI/UX DESIGNER</span>
            </div>
          </div>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 bg-[#0A0A0A] p-1 rounded-full border border-[#292929]">
            {navLinks.map((item) => {
              const isActive = activeNav === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`px-3 py-1 text-xs font-mono rounded-full transition-all ${
                    isActive 
                      ? 'bg-[#FF453A] text-black font-bold shadow-sm' 
                      : 'text-[#B3B3B3] hover:text-white hover:bg-[#171717]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right: Quick Action Buttons */}
          <div className="flex items-center gap-3">
            <a
              href={uiUxHero.resumePdfPath}
              download="Mohammed_Abeeth_H_UIUX_Designer_Resume.pdf"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#FF453A] hover:bg-[#E03E34] text-black text-xs font-mono font-bold transition-all shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </a>

            {/* Mobile Hamburger Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg bg-[#0D0D0D] border border-[#292929] text-[#B3B3B3] hover:text-white"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#FF453A]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#0A0A0A] border-b border-[#292929] px-4 py-4 space-y-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pb-3">
              {navLinks.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 text-xs font-mono rounded-lg transition-colors text-center ${
                    activeNav === item.id 
                      ? 'bg-[#FF453A] text-black font-bold' 
                      : 'bg-[#0D0D0D] text-[#B3B3B3] hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <a
              href={uiUxHero.resumePdfPath}
              download="Mohammed_Abeeth_H_UIUX_Designer_Resume.pdf"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#FF453A] text-black font-mono font-bold text-xs"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume PDF</span>
            </a>
          </div>
        )}
      </header>

      {/* ======================================================== */}
      {/* 2. HERO SECTION — UI/UX DESIGN CORE                     */}
      {/* ======================================================== */}
      <section id="overview" style={{ scrollMarginTop: '80px' }} className="scroll-mt-20 sm:scroll-mt-24 relative pt-8 pb-10 sm:pt-10 sm:pb-12 overflow-hidden bg-[#000000]">
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#292929_1px,transparent_1px),linear-gradient(to_bottom,#292929_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header Row: Pillar Badge, Main Heading & Back Link */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D0D0D] border border-[#292929] text-xs font-mono mb-4">
              <span className="w-2 h-2 rounded-full bg-[#FF453A] animate-pulse" />
              <span className="text-[#FF453A] font-bold">EXPERTISE GATEWAY // 05</span>
              <span className="text-[#292929]">|</span>
              <span className="text-[#B3B3B3]">UI/UX DESIGN • FIGMA • DESIGN SYSTEMS • HCI</span>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase">
                  UI/UX <span className="text-[#FF453A]">DESIGNER</span>
                </h1>
                <p className="text-xs sm:text-sm font-mono text-[#888888] mt-2 tracking-wider">
                  DESIGNING MEANINGFUL DIGITAL EXPERIENCES THROUGH CREATIVITY, STRATEGY & USER-CENTERED THINKING.
                </p>
              </div>

              <button
                onClick={() => navigate('/#portals')}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#0D0D0D] hover:bg-[#171717] border border-[#292929] hover:border-[#FF453A] text-xs font-mono text-[#B3B3B3] hover:text-white transition-all w-fit flex-shrink-0"
              >
                <ArrowLeft className="w-4 h-4 text-[#FF453A]" />
                <span>BACK TO PORTFOLIO</span>
              </button>
            </div>
          </div>

          {/* 50/50 Balanced Split: Left Column (Personal Profile) & Right Column (Visual Ergonomics Dashboard) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-stretch">
            
            {/* LEFT COLUMN — PERSONAL PROFILE */}
            <div className="rounded-xl bg-[#0D0D0D] border border-[#292929] hover:border-[#FF453A]/60 transition-all p-6 sm:p-7 flex flex-col justify-between shadow-2xl space-y-6">
              
              {/* Profile Card Header with Professional Portrait */}
              <div className="space-y-5">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-[#FF453A] shadow-[0_0_20px_rgba(255,69,58,0.25)] bg-[#000000] flex-shrink-0">
                    <img 
                      src="/images/image(9).png" 
                      alt="Mohammed Abeeth H" 
                      className="w-full h-full object-cover object-[center_12%]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded bg-[#FF453A]/10 text-[#FF453A] border border-[#FF453A]/30 font-bold">
                        VERIFIED PROFILE
                      </span>
                      <span className="text-[10px] font-mono text-[#888888]">ID-2026</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      Mohammed Abeeth H
                    </h2>
                    <p className="text-sm sm:text-base font-mono text-[#FF453A] font-semibold mt-0.5">
                      UI/UX Designer | Product Designer & Frontend Engineer
                    </p>
                    <p className="text-xs font-mono text-[#888888] mt-1.5 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#FF453A]" />
                      <span>Tamil Nadu, India • Open to UI/UX & Product Design Roles</span>
                    </p>
                  </div>
                </div>

                {/* Professional Introduction & Tagline */}
                <div className="p-4 rounded-xl bg-[#000000] border border-[#292929]">
                  <p className="text-sm sm:text-base text-white font-medium leading-relaxed italic">
                    "{uiUxHero.subtitle}"
                  </p>
                  <p className="mt-2 text-xs sm:text-sm text-[#B3B3B3] leading-relaxed">
                    Bridging human psychology, design systems, and frontend code. Grounded in NPTEL-certified Human-Computer Interaction (Elite) and modern prototyping across Figma, Canva, Adobe Creative Suite, and responsive web systems.
                  </p>
                </div>
              </div>

              {/* Action Buttons: Resume & Contact */}
              <div className="space-y-4 pt-2">
                <div className="flex flex-wrap items-center gap-3 w-full">
                  <a
                    href={uiUxHero.resumePdfPath}
                    download="Mohammed_Abeeth_H_UIUX_Designer_Resume.pdf"
                    className="flex-1 min-w-[170px] flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#FF453A] hover:bg-[#E03E34] text-black font-mono font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95"
                  >
                    <Download className="w-4 h-4" />
                    <span>DOWNLOAD RESUME</span>
                  </a>

                  <a
                    href="#contact"
                    className="flex-1 min-w-[150px] flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#171717] hover:bg-[#202020] border border-[#292929] hover:border-[#FF453A] text-white font-mono font-semibold text-xs sm:text-sm transition-all"
                  >
                    <Mail className="w-4 h-4 text-[#FF453A]" />
                    <span>GET IN TOUCH</span>
                  </a>

                  <a
                    href="#projects"
                    className="flex items-center justify-center gap-1.5 px-4 py-3 rounded-lg bg-[#000000] hover:bg-[#141414] border border-[#292929] hover:border-[#FF453A] text-[#B3B3B3] hover:text-white font-mono text-xs transition-all"
                  >
                    <span>Projects</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FF453A]" />
                  </a>
                </div>

                {/* Quick Statistical Highlights */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[#292929]">
                  <div className="p-3 rounded-lg bg-[#000000] border border-[#292929] text-center">
                    <div className="text-[10px] font-mono text-[#888888] uppercase tracking-wider">Core Tools</div>
                    <div className="text-base sm:text-lg font-extrabold text-white mt-1">Figma & Canva</div>
                    <div className="text-[10px] font-mono text-[#FF453A] mt-0.5">Auto Layout & Assets</div>
                  </div>
                  <div className="p-3 rounded-lg bg-[#000000] border border-[#292929] text-center">
                    <div className="text-[10px] font-mono text-[#888888] uppercase tracking-wider">HCI Foundation</div>
                    <div className="text-base sm:text-lg font-extrabold text-white mt-1">NPTEL Elite</div>
                    <div className="text-[10px] font-mono text-[#FF453A] mt-0.5">IIIT Delhi / 70%</div>
                  </div>
                  <div className="p-3 rounded-lg bg-[#000000] border border-[#292929] text-center">
                    <div className="text-[10px] font-mono text-[#888888] uppercase tracking-wider">Standards</div>
                    <div className="text-base sm:text-lg font-extrabold text-white mt-1">WCAG AAA</div>
                    <div className="text-[10px] font-mono text-[#FF453A] mt-0.5">Accessibility & Contrast</div>
                  </div>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN — VISUAL ERGONOMICS & INTERACTIVE DESIGN SYSTEM */}
            <div className="rounded-xl bg-[#0D0D0D] border border-[#292929] hover:border-[#FF453A]/60 transition-all p-6 sm:p-7 flex flex-col justify-between shadow-2xl overflow-hidden h-full">
              
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#292929] mb-5">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF453A]" />
                    <div className="w-3 h-3 rounded-full bg-[#292929]" />
                    <div className="w-3 h-3 rounded-full bg-[#292929]" />
                    <span className="text-xs font-mono text-white ml-2 font-bold tracking-wider">
                      VISUAL_ERGONOMICS_CORE
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-white bg-[#171717] px-2.5 py-1 rounded border border-[#292929] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF453A] animate-pulse" />
                    STATUS: ACTIVE
                  </span>
                </div>

                {/* Architecture KPI Matrix */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="p-3.5 rounded-lg bg-[#000000] border border-[#292929]">
                    <div className="text-[10px] font-mono text-[#888888]">HUMAN-COMPUTER INTERACTION</div>
                    <div className="text-base font-bold text-white mt-1">Elite Certified (70%)</div>
                    <div className="text-[11px] font-mono text-[#FF453A] mt-0.5">● Usability Heuristics & Ergonomics</div>
                  </div>
                  <div className="p-3.5 rounded-lg bg-[#000000] border border-[#292929]">
                    <div className="text-[10px] font-mono text-[#888888]">PROTOTYPING & SYSTEMS</div>
                    <div className="text-base font-bold text-white mt-1">Figma Design Tokens</div>
                    <div className="text-[11px] font-mono text-white mt-0.5">● Auto Layout & Reusable Variants</div>
                  </div>
                </div>

                {/* Interactive Design System Preview Panel */}
                <div className="p-4 rounded-xl bg-[#000000] border border-[#292929]">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#1c1c1c]">
                    <div className="flex items-center gap-2">
                      <Palette className="w-3.5 h-3.5 text-[#FF453A]" />
                      <span className="text-xs font-mono text-[#888888]">design_system_tokens.fig</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => setHeroPreviewTab('tokens')}
                        className={`text-[10px] font-mono px-2 py-0.5 rounded transition-colors ${
                          heroPreviewTab === 'tokens' ? 'bg-[#FF453A] text-black font-bold' : 'text-[#888888] hover:text-white'
                        }`}
                      >
                        Color Tokens
                      </button>
                      <button
                        onClick={() => setHeroPreviewTab('component')}
                        className={`text-[10px] font-mono px-2 py-0.5 rounded transition-colors ${
                          heroPreviewTab === 'component' ? 'bg-[#FF453A] text-black font-bold' : 'text-[#888888] hover:text-white'
                        }`}
                      >
                        Live Component
                      </button>
                    </div>
                  </div>

                  {heroPreviewTab === 'tokens' ? (
                    <div className="space-y-2.5">
                      <div className="text-[11px] font-mono text-[#888888] mb-1">
                        Semantic Token Palette (WCAG Contrast &gt; 7:1)
                      </div>
                      <div className="grid grid-cols-5 gap-2">
                        <div className="p-2 rounded-lg bg-[#000000] border border-[#292929] text-center">
                          <div className="w-full h-6 rounded bg-[#000000] border border-[#333333] mb-1" />
                          <div className="text-[9px] font-mono text-white font-bold">#000000</div>
                          <div className="text-[8px] font-mono text-[#888888]">Base</div>
                        </div>
                        <div className="p-2 rounded-lg bg-[#000000] border border-[#292929] text-center">
                          <div className="w-full h-6 rounded bg-[#0D0D0D] border border-[#333333] mb-1" />
                          <div className="text-[9px] font-mono text-white font-bold">#0D0D0D</div>
                          <div className="text-[8px] font-mono text-[#888888]">Surface</div>
                        </div>
                        <div className="p-2 rounded-lg bg-[#000000] border border-[#292929] text-center">
                          <div className="w-full h-6 rounded bg-[#FF453A] mb-1 shadow-[0_0_8px_rgba(255,69,58,0.4)]" />
                          <div className="text-[9px] font-mono text-[#FF453A] font-bold">#FF453A</div>
                          <div className="text-[8px] font-mono text-[#888888]">Crimson</div>
                        </div>
                        <div className="p-2 rounded-lg bg-[#000000] border border-[#292929] text-center">
                          <div className="w-full h-6 rounded bg-[#292929] mb-1" />
                          <div className="text-[9px] font-mono text-white font-bold">#292929</div>
                          <div className="text-[8px] font-mono text-[#888888]">Border</div>
                        </div>
                        <div className="p-2 rounded-lg bg-[#000000] border border-[#292929] text-center">
                          <div className="w-full h-6 rounded bg-[#FFFFFF] mb-1" />
                          <div className="text-[9px] font-mono text-black font-bold">#FFFFFF</div>
                          <div className="text-[8px] font-mono text-[#888888]">Text</div>
                        </div>
                      </div>
                      <div className="text-[10px] font-mono text-[#888888] pt-1">
                        ● 8pt Baseline Grid • 12-Column Fluid • Monospace & Geometric Sans
                      </div>
                    </div>
                  ) : (
                    <div className="p-3.5 rounded-lg bg-[#0D0D0D] border border-[#292929] space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#FF453A] animate-pulse" />
                          <span className="text-xs font-mono font-bold text-white">Interactive Card Component</span>
                        </div>
                        <span className="text-[10px] font-mono text-[#FF453A] px-2 py-0.5 rounded bg-[#000000] border border-[#292929]">
                          v2.4
                        </span>
                      </div>
                      <p className="text-xs text-[#B3B3B3]">
                        Click the button below to test tactile state response and micro-interaction feedback.
                      </p>
                      <button
                        onClick={() => setButtonClicked(!buttonClicked)}
                        className={`w-full py-2 px-3 rounded-lg text-xs font-mono font-bold transition-all flex items-center justify-center gap-2 ${
                          buttonClicked 
                            ? 'bg-[#22C55E] text-black shadow-[0_0_12px_rgba(34,197,94,0.3)]' 
                            : 'bg-[#FF453A] hover:bg-[#E03E34] text-black shadow-[0_0_12px_rgba(255,69,58,0.3)]'
                        }`}
                      >
                        <Check className="w-3.5 h-3.5" />
                        <span>{buttonClicked ? 'State Verified: Active' : 'Trigger Interaction'}</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Status Footer */}
              <div className="pt-4 border-t border-[#292929] flex items-center justify-between text-xs font-mono text-[#888888]">
                <span className="flex items-center gap-1.5 text-white">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF453A]" />
                  <span>Nielsen Norman Usability Heuristics</span>
                </span>
                <span className="text-[#FF453A]">FIDELITY // HIGH</span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. DESIGN PROCESS / WORKFLOW (7 STAGES)                  */}
      {/* ======================================================== */}
      <section id="process" style={{ scrollMarginTop: '80px' }} className="scroll-mt-20 sm:scroll-mt-24 py-8 sm:py-10 bg-[#050505] border-t border-[#292929]">
        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-left max-w-3xl mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D0D0D] border border-[#292929] text-xs font-mono text-[#FF453A] mb-3">
              <span>// 01 DESIGN PROCESS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
              7-STAGE HUMAN-CENTERED <span className="text-[#FF453A]">DESIGN WORKFLOW</span>
            </h2>
            <p className="text-sm sm:text-base text-[#B3B3B3] mt-2">
              From user discovery and qualitative empathy to interactive high-fidelity prototyping and heuristic validation.
            </p>
          </div>

          {/* 7-Card Connected Workflow Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4">
            {uiUxProcess.map((stage, idx) => {
              const iconMap = {
                Compass,
                Users,
                Target,
                Lightbulb,
                Palette,
                Layers,
                CheckCircle2
              };
              const IconComp = iconMap[stage.icon] || Compass;

              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#0D0D0D] border border-[#292929] hover:border-[#FF453A] transition-all flex flex-col justify-between group shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-8 h-8 rounded-lg bg-[#000000] border border-[#292929] group-hover:border-[#FF453A] flex items-center justify-center text-[#FF453A] transition-colors">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono font-bold text-[#666666] group-hover:text-[#FF453A] transition-colors">
                        //{stage.step}
                      </span>
                    </div>

                    <div className="text-[10px] font-mono text-[#FF453A] font-semibold mb-1">
                      {stage.badge}
                    </div>
                    <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#FF453A] transition-colors">
                      {stage.title}
                    </h3>
                    <p className="text-xs text-[#B3B3B3] leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. MY UI/UX DESIGN & HCI JOURNEY                         */}
      {/* ======================================================== */}
      <section id="journey" style={{ scrollMarginTop: '80px' }} className="scroll-mt-20 sm:scroll-mt-24 py-8 sm:py-10 bg-[#000000] border-t border-[#292929]">
        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-left max-w-3xl mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D0D0D] border border-[#292929] text-xs font-mono text-[#FF453A] mb-3">
              <span>// 02 JOURNEY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
              MY UI/UX DESIGN & <span className="text-[#FF453A]">HCI JOURNEY</span>
            </h2>
            <p className="text-sm sm:text-base text-[#B3B3B3] mt-2">
              From academic Human-Computer Interaction and usability heuristics to high-fidelity design systems.
            </p>
          </div>

          {/* Narrative Paragraphs */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0D0D0D] border border-[#292929] mb-8 space-y-4 text-sm sm:text-base text-[#B3B3B3] leading-relaxed">
            {uiUxJourney.narrative.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* 4-Card Milestone Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {uiUxJourney.timeline.map((item, idx) => {
              const iconMap = {
                Palette,
                Layout,
                Sparkles,
                Brush
              };
              const IconComp = iconMap[item.icon] || Palette;

              return (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-[#0D0D0D] border border-[#292929] hover:border-[#FF453A] transition-all flex flex-col justify-between group shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg bg-[#000000] border border-[#292929] group-hover:border-[#FF453A] flex items-center justify-center text-[#FF453A] transition-colors">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono text-[#FF453A] font-bold">
                        {item.period}
                      </span>
                    </div>

                    <div className="text-[10px] font-mono text-[#888888] uppercase tracking-wider mb-1">
                      STAGE {item.step} // {item.phase}
                    </div>
                    <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#FF453A] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#B3B3B3] leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#292929]">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#171717] text-white border border-[#292929]">
                      {item.badge}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. UI/UX DESIGN TECHNICAL MATRIX                         */}
      {/* ======================================================== */}
      <section id="skills" style={{ scrollMarginTop: '80px' }} className="scroll-mt-20 sm:scroll-mt-24 py-8 sm:py-10 bg-[#050505] border-t border-[#292929]">
        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D0D0D] border border-[#292929] text-xs font-mono text-[#FF453A] mb-3">
                <span>// 03 MATRIX</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
                UI/UX DESIGN <span className="text-[#FF453A]">TECHNICAL MATRIX</span>
              </h2>
              <p className="text-sm sm:text-base text-[#B3B3B3] mt-2">
                Unified technical competencies spanning Visual UI design, User Experience research, and interactive prototyping.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono px-3 py-1.5 rounded-lg bg-[#0D0D0D] border border-[#292929] text-[#B3B3B3]">
                TOTAL SKILLS: <span className="text-[#FF453A] font-bold">{uiUxSkillsData.length}</span>
              </span>
              <span className="text-[11px] font-mono px-3 py-1.5 rounded-lg bg-[#0D0D0D] border border-[#292929] text-[#B3B3B3]">
                ARCHITECTURE: <span className="text-white font-bold">HUMAN-CENTERED DESIGN</span>
              </span>
            </div>
          </div>

          {/* ONE UNIFIED TECHNICAL MATRIX CONTAINER */}
          <div className="rounded-2xl bg-[#0D0D0D] border border-[#292929] overflow-hidden shadow-2xl">
            
            {/* Dashboard Control Bar */}
            <div className="px-5 py-3.5 sm:px-6 sm:py-4 bg-[#080808] border-b border-[#292929] flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF453A]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#292929]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#292929]" />
                </div>
                <span className="text-xs font-mono font-bold text-white tracking-wider">
                  DESIGN_ERGONOMICS_MATRIX
                </span>
                <span className="text-[10px] font-mono text-[#888888]">
                  // {uiUxSkillsData.length} CONNECTED COMPETENCIES
                </span>
              </div>

              {/* Category Filter Tabs */}
              <div className="flex flex-wrap items-center gap-1.5">
                {[
                  { id: 'all', label: `All (${uiUxSkillsData.length})` },
                  { id: 'ui', label: 'UI Design' },
                  { id: 'ux', label: 'UX Design' },
                  { id: 'prototyping', label: 'Prototyping & Interaction' }
                ].map((tab) => {
                  const isActive = selectedSkillCategory === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setSelectedSkillCategory(tab.id)}
                      className={`px-2.5 py-1 text-[11px] font-mono rounded-md transition-all ${
                        isActive
                          ? 'bg-[#FF453A] text-black font-bold shadow-sm'
                          : 'bg-[#121212] hover:bg-[#1a1a1a] text-[#888888] hover:text-white border border-[#222222]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Unified Connected Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-[#141414]/20 border-b border-[#292929]">
              {(Array.isArray(uiUxSkillsData) ? uiUxSkillsData : [])
                .filter((tool) => selectedSkillCategory === 'all' || tool.categoryGroup === selectedSkillCategory)
                .map((tool, idx) => {
                  const iconMap = {
                    Layers,
                    Type,
                    Palette,
                    Layout,
                    Smartphone,
                    Sliders,
                    Users,
                    UserCheck,
                    Workflow,
                    Network,
                    GitBranch,
                    CheckCircle2,
                    FileText,
                    Play,
                    Sparkles,
                    Move,
                    ShieldCheck
                  };
                  const IconComp = iconMap[tool.icon] || Palette;

                  return (
                    <div 
                      key={tool.id}
                      className="p-4 sm:p-5 bg-[#0D0D0D] hover:bg-[#141414] transition-all flex flex-col justify-between border-r border-b border-[#222222] group"
                    >
                      <div>
                        {/* Tool Header: Icon, Name, Category */}
                        <div className="flex items-start justify-between gap-2 mb-2.5">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-[#000000] border border-[#292929] group-hover:border-[#FF453A] flex items-center justify-center text-[#FF453A] transition-colors flex-shrink-0">
                              <IconComp className="w-4 h-4" />
                            </div>
                            <div>
                              <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-[#FF453A] transition-colors leading-snug">
                                {tool.name}
                              </h3>
                              {tool.subtitle ? (
                                <div className="text-[10px] font-mono text-[#FF453A] font-semibold mt-0.5">
                                  {tool.subtitle}
                                </div>
                              ) : (
                                <span className="text-[10px] font-mono text-[#FF453A] font-medium">
                                  {tool.category}
                                </span>
                              )}
                            </div>
                          </div>
                          <span className="text-[10px] font-mono text-[#555555] group-hover:text-white transition-colors flex-shrink-0">
                            #{String(idx + 1).padStart(2, '0')}
                          </span>
                        </div>

                        {/* Tool Short Description */}
                        <p className="text-xs text-[#B3B3B3] leading-relaxed pl-11">
                          {tool.description}
                        </p>
                      </div>
                    </div>
                  );
                })}

              {/* Integrated Metric/Summary Cell to keep rectangular grid flush */}
              {selectedSkillCategory === 'all' && (
                <div className="p-4 sm:p-5 bg-[#090909] border-r border-b border-[#222222] xl:col-span-3 lg:col-span-2 sm:col-span-2 col-span-1 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#000000] border border-[#292929] flex items-center justify-center text-[#FF453A] flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-mono font-bold text-white tracking-wide">
                        UNIFIED DESIGN & INTERACTION SUITE
                      </div>
                      <div className="text-[11px] text-[#888888] mt-0.5">
                        WCAG-compliant contrast ratios, auto-layout variants, interactive clickable states, and usability testing.
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-[#171717] text-[#FF453A] border border-[#292929] whitespace-nowrap self-start sm:self-auto">
                    {uiUxSkillsData.length} SKILLS VERIFIED
                  </span>
                </div>
              )}
            </div>

            {/* Matrix Status Footer */}
            <div className="px-5 py-3 sm:px-6 bg-[#080808] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-[#888888]">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF453A] animate-ping" />
                Production Ready // High-Usability Interface Systems
              </span>
              <span className="text-white font-medium">
                OPTIMIZED FOR USER ACCESSIBILITY & COGNITIVE EASE
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. DESIGN SYSTEM & COMPONENT LIBRARY                     */}
      {/* ======================================================== */}
      <section id="design-system" style={{ scrollMarginTop: '80px' }} className="scroll-mt-20 sm:scroll-mt-24 py-8 sm:py-10 bg-[#000000] border-t border-[#292929]">
        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-left max-w-3xl mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D0D0D] border border-[#292929] text-xs font-mono text-[#FF453A] mb-3">
              <span>// 04 DESIGN SYSTEM</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
              DESIGN SYSTEM & <span className="text-[#FF453A]">COMPONENT LIBRARY</span>
            </h2>
            <p className="text-sm sm:text-base text-[#B3B3B3] mt-2">
              Modular design tokens, 8-point baseline grids, tactile components, and strict design governance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {uiUxDesignSystem.map((item, idx) => {
              const iconMap = {
                Palette,
                Type,
                Layout,
                Sliders,
                Layers,
                Boxes,
                Smartphone,
                ShieldCheck
              };
              const IconComp = iconMap[item.icon] || Layout;

              return (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-xl bg-[#0D0D0D] border border-[#292929] hover:border-[#FF453A] transition-all flex flex-col justify-between group shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-lg bg-[#000000] border border-[#292929] group-hover:border-[#FF453A] flex items-center justify-center text-[#FF453A] transition-colors">
                        <IconComp className="w-4.5 h-4.5" />
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#171717] text-[#FF453A] border border-[#292929]">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white mb-1 group-hover:text-[#FF453A] transition-colors">
                      {item.title}
                    </h3>
                    <div className="text-xs font-mono text-[#888888] mb-2">{item.subtitle}</div>
                    <p className="text-xs text-[#B3B3B3] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 7. PROFESSIONAL SKILLS — PROFESSIONAL EDGE               */}
      {/* ======================================================== */}
      <section id="soft-skills" style={{ scrollMarginTop: '80px' }} className="scroll-mt-20 sm:scroll-mt-24 py-8 sm:py-10 bg-[#050505] border-t border-[#292929]">
        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-left max-w-3xl mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D0D0D] border border-[#292929] text-xs font-mono text-[#FF453A] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF453A] animate-pulse" />
              <span>// CORE COMPETENCIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
              PROFESSIONAL <span className="text-[#FF453A]">EDGE</span>
            </h2>
            <p className="text-sm sm:text-base text-[#B3B3B3] mt-2">
              The creative thinking, empathy and collaboration behind impactful digital product design.
            </p>
          </div>

          {/* Balanced 6-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {uiUxProfessionalSkills.map((skill, idx) => {
              const iconMap = {
                Sparkles,
                CheckCircle2,
                ShieldCheck,
                MessageSquare,
                Users,
                Workflow
              };
              const IconComp = iconMap[skill.icon] || Sparkles;

              return (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-xl bg-[#0D0D0D] border border-[#292929] hover:border-[#FF453A]/60 transition-all flex flex-col justify-between group shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#000000] border border-[#292929] group-hover:border-[#FF453A] flex items-center justify-center text-[#FF453A] transition-colors flex-shrink-0 mt-0.5">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1.5">
                        <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#FF453A] transition-colors">
                          {skill.name}
                        </h3>
                        <span className="text-[10px] font-mono text-[#666666] group-hover:text-[#FF453A] transition-colors">
                          //{skill.number}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#B3B3B3] leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 8. UI/UX PROJECTS & CASE STUDIES                         */}
      {/* ======================================================== */}
      <section id="projects" style={{ scrollMarginTop: '80px' }} className="scroll-mt-20 sm:scroll-mt-24 py-8 sm:py-10 bg-[#000000] border-t border-[#292929]">
        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-left max-w-3xl mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D0D0D] border border-[#292929] text-xs font-mono text-[#FF453A] mb-3">
              <span>// 05 PROJECTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
              UI/UX CASE STUDIES & <span className="text-[#FF453A]">DESIGN PROJECTS</span>
            </h2>
            <p className="text-sm sm:text-base text-[#B3B3B3] mt-2">
              Branding identities, social marketing collaterals, and high-contrast design systems engineered with Figma and Canva.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {(Array.isArray(uiUxProjectsData) ? uiUxProjectsData : []).map((project, idx) => {
              const safeTech = Array.isArray(project.technologies) ? project.technologies : [];
              const safeProblem = project.problemStatement || project.description || '';
              const safeFeatures = Array.isArray(project.keyFeatures) ? project.keyFeatures : [];

              return (
                <div 
                  key={project.id || idx}
                  className="rounded-2xl bg-[#0D0D0D] border border-[#292929] hover:border-[#FF453A] transition-all p-6 sm:p-8 flex flex-col justify-between shadow-xl"
                >
                  <div>
                    {/* Project Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#171717] text-[#FF453A] border border-[#292929]">
                            {project.category}
                          </span>
                          <span className="text-xs font-mono text-[#888888]">
                            {project.status}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                          {project.title}
                        </h3>
                        <p className="text-xs font-mono text-[#FF453A] mt-1 font-semibold">
                          {project.subtitle}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-[#000000] border border-[#292929] text-[#B3B3B3] hover:text-white hover:border-[#FF453A] transition-all"
                            title="GitHub Repository"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Problem Statement Card */}
                    {safeProblem && (
                      <div className="p-3.5 rounded-lg bg-[#000000] border border-[#292929] mb-4">
                        <span className="text-[10px] font-mono text-[#FF453A] font-bold block mb-1">
                          DESIGN CHALLENGE:
                        </span>
                        <p className="text-xs text-[#B3B3B3] leading-relaxed">
                          {safeProblem}
                        </p>
                      </div>
                    )}

                    {/* Key Technical Features */}
                    {safeFeatures.length > 0 && (
                      <div className="space-y-2 mb-6">
                        <div className="text-xs font-mono text-white font-bold mb-2">
                          KEY DELIVERABLES:
                        </div>
                        {safeFeatures.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2.5 text-xs text-[#B3B3B3]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#FF453A] mt-0.5 flex-shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {safeTech.map((tech, tIdx) => (
                        <span 
                          key={tIdx}
                          className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#171717] text-white border border-[#292929]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metrics Footer */}
                  {Array.isArray(project.metrics) && project.metrics.length > 0 && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4 border-t border-[#292929]">
                      {project.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="p-2.5 rounded-lg bg-[#000000] border border-[#292929] text-center">
                          <div className="text-[10px] font-mono text-[#888888]">{m.label}</div>
                          <div className="text-xs font-bold text-white mt-0.5">{m.value}</div>
                        </div>
                      ))}
                    </div>
                  )}

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 9. UI/UX DESIGN & PROTOTYPING TOOLKIT                   */}
      {/* ======================================================== */}
      <section id="toolkit" style={{ scrollMarginTop: '80px' }} className="scroll-mt-20 sm:scroll-mt-24 py-8 sm:py-10 bg-[#050505] border-t border-[#292929]">
        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D0D0D] border border-[#292929] text-xs font-mono text-[#FF453A] mb-3">
              <span>// 06 TOOLKIT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
              UI/UX DESIGN & <span className="text-[#FF453A]">PROTOTYPING STACK</span>
            </h2>
            <p className="text-sm sm:text-base text-[#B3B3B3] mt-2">
              Industry-standard design applications, journey mapping tools, and frontend design system technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {(Array.isArray(uiUxToolkit) ? uiUxToolkit : []).map((item, idx) => {
              const iconMap = {
                Layout,
                Workflow,
                Eye,
                Palette,
                Brush,
                Code2,
                Layers,
                Terminal,
                GitBranch,
                ShieldCheck
              };
              const IconComp = iconMap[item.icon] || Layout;

              return (
                <div 
                  key={idx}
                  className="p-5 rounded-xl bg-[#0D0D0D] border border-[#292929] hover:border-[#FF453A] transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-lg bg-[#000000] border border-[#292929] flex items-center justify-center text-[#FF453A]">
                        <IconComp className="w-4.5 h-4.5" />
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#171717] text-[#B3B3B3] border border-[#292929]">
                        {item.badge}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-white mb-1">{item.name}</h4>
                    <div className="text-xs font-mono text-[#FF453A] mb-2">{item.category}</div>
                    <p className="text-xs text-[#B3B3B3] leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 10. RESUME SECTION                                       */}
      {/* ======================================================== */}
      <section id="resume" style={{ scrollMarginTop: '80px' }} className="scroll-mt-20 sm:scroll-mt-24 py-8 sm:py-10 bg-[#000000] border-t border-[#292929]">
        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D0D0D] border border-[#292929] text-xs font-mono text-[#FF453A] mb-3">
                <span>// 07 CURRICULUM VITAE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
                UI/UX DESIGNER <span className="text-[#FF453A]">RESUME</span>
              </h2>
              <p className="text-sm text-[#B3B3B3] mt-2">
                Verified academic curriculum, NPTEL Human-Computer Interaction certification, and design deliverables.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowInlineResume(!showInlineResume)}
                className="px-4 py-2 rounded-lg bg-[#0D0D0D] border border-[#292929] hover:border-white text-xs font-mono text-white transition-all"
              >
                {showInlineResume ? 'Hide Embedded PDF' : 'Show Embedded PDF'}
              </button>

              <a
                href={uiUxHero?.resumePdfPath || "/documents/uiux-designer-resume.pdf"}
                download="Mohammed_Abeeth_H_UIUX_Designer_Resume.pdf"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#FF453A] hover:bg-[#E03E34] text-black font-mono font-bold text-xs transition-all shadow-md"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Inline Embedded Resume Viewer */}
          {showInlineResume && (
            <div className="rounded-2xl bg-[#0D0D0D] border border-[#292929] p-4 sm:p-6 shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#292929] text-xs font-mono">
                <span className="text-white flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#FF453A]" />
                  Mohammed_Abeeth_H_UIUX_Designer_Resume.pdf
                </span>
                <button
                  onClick={() => setActiveViewerModal({
                    title: "UI/UX Designer Resume",
                    issuer: "Mohammed Abeeth H",
                    pdfUrl: uiUxHero?.resumePdfPath || "/documents/uiux-designer-resume.pdf"
                  })}
                  className="flex items-center gap-1.5 text-[#B3B3B3] hover:text-white"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Open Fullscreen</span>
                </button>
              </div>

              <iframe
                src={`${uiUxHero?.resumePdfPath || "/documents/uiux-designer-resume.pdf"}#view=FitH`}
                title="Mohammed Abeeth H - UI/UX Designer Resume"
                className="w-full h-[600px] sm:h-[800px] border-0 rounded-xl bg-white"
              />
            </div>
          )}

        </div>
      </section>

      {/* ======================================================== */}
      {/* 11. VERIFIED CERTIFICATIONS SECTION                     */}
      {/* ======================================================== */}
      <section id="certifications" style={{ scrollMarginTop: '80px' }} className="scroll-mt-20 sm:scroll-mt-24 py-8 sm:py-10 bg-[#050505] border-t border-[#292929]">
        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-left max-w-3xl mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D0D0D] border border-[#292929] text-xs font-mono text-[#FF453A] mb-3">
              <span>// 08 CREDENTIALS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
              VERIFIED UI/UX & <span className="text-[#FF453A]">HCI CERTIFICATIONS</span>
            </h2>
            <p className="text-sm sm:text-base text-[#B3B3B3] mt-2">
              Industry-accredited and national credentials from NPTEL IIT Madras, IIIT Delhi, and Simplilearn SkillUp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(Array.isArray(uiUxCertifications) ? uiUxCertifications : []).map((cert) => (
              <div 
                key={cert.id}
                className="p-6 rounded-xl bg-[#0D0D0D] border border-[#292929] hover:border-[#FF453A] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#171717] text-[#FF453A] border border-[#292929] inline-flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3" />
                      {cert.badge}
                    </span>
                    <span className="text-xs font-mono text-[#888888]">{cert.year}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1">
                    {cert.title}
                  </h3>
                  <div className="text-xs font-mono text-[#B3B3B3] mb-2">
                    {cert.issuer}
                  </div>

                  {cert.credentialId && (
                    <div className="text-[11px] font-mono text-[#888888] mb-3">
                      Credential ID: <span className="text-white">{cert.credentialId}</span>
                    </div>
                  )}

                  {cert.score && (
                    <div className="p-2 rounded bg-[#000000] border border-[#292929] text-xs font-mono text-[#FF453A] mb-3">
                      Score: <span className="text-white font-bold">{cert.score}</span>
                    </div>
                  )}

                  <p className="text-xs text-[#888888] leading-relaxed mb-4">
                    {cert.highlights}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#292929] flex items-center gap-2.5">
                  <button
                    onClick={() => setActiveViewerModal(cert)}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-[#000000] hover:bg-[#171717] border border-[#292929] hover:border-[#FF453A] text-xs font-mono text-white transition-all"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#FF453A]" />
                    <span>View PDF</span>
                  </button>

                  <a
                    href={cert.pdfUrl}
                    download
                    className="p-2 rounded-lg bg-[#000000] hover:bg-[#171717] border border-[#292929] text-[#B3B3B3] hover:text-white"
                    title="Download Certificate"
                  >
                    <Download className="w-4 h-4 text-[#FF453A]" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 12. TECHNICAL WORK EXPERIENCE                           */}
      {/* ======================================================== */}
      <section id="experience" style={{ scrollMarginTop: '80px' }} className="scroll-mt-20 sm:scroll-mt-24 py-8 sm:py-10 bg-[#000000] border-t border-[#292929]">
        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-left max-w-3xl mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D0D0D] border border-[#292929] text-xs font-mono text-[#FF453A] mb-3">
              <Briefcase className="w-3.5 h-3.5 text-[#FF453A]" />
              <span>// 09 PROFESSIONAL EXPERIENCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
              TECHNICAL WORK <span className="text-[#FF453A]">EXPERIENCE</span>
            </h2>
            <p className="text-sm sm:text-base text-[#B3B3B3] mt-2">
              Hands-on internship immersion in data analysis, relational database workflows, and backend engineering support.
            </p>
          </div>

          <div className="space-y-6">
            {(Array.isArray(uiUxExperience) ? uiUxExperience : []).map((exp, idx) => {
              const safeResponsibilities = Array.isArray(exp.responsibilities) ? exp.responsibilities : [];
              const safeTools = Array.isArray(exp.technologies) ? exp.technologies : [];

              return (
                <div 
                  key={exp.id || idx}
                  className="p-6 sm:p-8 rounded-xl bg-[#0D0D0D] border border-[#292929] hover:border-[#FF453A] transition-all group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-mono font-bold text-[#FF453A] uppercase tracking-wider">
                          {exp.badge || 'Internship'}
                        </span>
                        <span className="text-[#888888] text-xs">•</span>
                        <span className="text-xs font-mono text-[#888888]">{exp.type}</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#FF453A] transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-[#B3B3B3] mt-1 font-mono">
                        <Building className="w-3.5 h-3.5 text-[#FF453A]" />
                        <span className="text-white font-medium">{exp.company}</span>
                        <span>•</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#000000] border border-[#292929] text-xs font-mono text-[#B3B3B3] self-start sm:self-auto">
                      <Calendar className="w-3.5 h-3.5 text-[#FF453A]" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-sm text-[#B3B3B3] leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {safeResponsibilities.length > 0 && (
                    <div className="space-y-2 mb-5">
                      <div className="text-[11px] font-mono text-[#888888] uppercase tracking-wider mb-2">
                        KEY CONTRIBUTIONS & DELIVERABLES:
                      </div>
                      {safeResponsibilities.map((resp, rIdx) => (
                        <div key={rIdx} className="flex items-start gap-2.5 text-xs text-[#888888]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#FF453A] mt-0.5 flex-shrink-0" />
                          <span>{resp}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="pt-3 border-t border-[#292929]">
                    <div className="text-[11px] font-mono text-[#888888] uppercase tracking-wider mb-2">
                      APPLIED TOOLS & TECHNOLOGIES:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {safeTools.map((tool, tIdx) => (
                        <span 
                          key={tIdx}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#171717] text-white border border-[#292929]"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 13. CONTACT SECTION — LET'S DESIGN SOMETHING EXCEPTIONAL */}
      {/* ======================================================== */}
      <section id="contact" style={{ scrollMarginTop: '80px' }} className="scroll-mt-20 sm:scroll-mt-24 py-8 sm:py-10 bg-[#050505] border-t border-[#292929]">
        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D0D0D] border border-[#292929] text-xs font-mono text-[#FF453A] mb-4">
              <span>// 10 CONNECT</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight uppercase">
              LET'S DESIGN SOMETHING <span className="text-[#FF453A]">EXCEPTIONAL.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#B3B3B3] mt-3">
              Open to UI/UX Designer, Product Designer, and Frontend Engineering opportunities.
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mb-12">
            
            {/* WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-[#0D0D0D] border border-[#292929] hover:border-[#FF453A] transition-all flex flex-col justify-between group"
            >
              <div>
                <MessageSquare className="w-5 h-5 text-[#FF453A] mb-3" />
                <div className="text-xs font-mono text-[#888888]">WHATSAPP DIRECT</div>
                <div className="text-sm font-bold text-white mt-1">+91 90800 81060</div>
              </div>
              <div className="mt-4 pt-3 border-t border-[#292929] flex items-center justify-between text-xs font-mono text-[#FF453A]">
                <span>Chat Instantly</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* Email */}
            <div className="p-5 rounded-xl bg-[#0D0D0D] border border-[#292929] hover:border-[#FF453A] transition-all flex flex-col justify-between">
              <div>
                <Mail className="w-5 h-5 text-[#FF453A] mb-3" />
                <div className="text-xs font-mono text-[#888888]">EMAIL ADDRESS</div>
                <div className="text-sm font-bold text-white mt-1 truncate" title={personalInfo.email}>
                  {personalInfo.email}
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-[#292929] flex items-center justify-between">
                <button
                  onClick={handleCopyEmail}
                  className="text-xs font-mono text-[#FF453A] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy Email'}</span>
                </button>
              </div>
            </div>

            {/* LinkedIn */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-[#0D0D0D] border border-[#292929] hover:border-[#FF453A] transition-all flex flex-col justify-between group"
            >
              <div>
                <Linkedin className="w-5 h-5 text-[#FF453A] mb-3" />
                <div className="text-xs font-mono text-[#888888]">LINKEDIN</div>
                <div className="text-sm font-bold text-white mt-1">mohammedabeeth</div>
              </div>
              <div className="mt-4 pt-3 border-t border-[#292929] flex items-center justify-between text-xs font-mono text-[#FF453A]">
                <span>Connect</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </a>

            {/* GitHub */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-[#0D0D0D] border border-[#292929] hover:border-[#FF453A] transition-all flex flex-col justify-between group"
            >
              <div>
                <Github className="w-5 h-5 text-[#FF453A] mb-3" />
                <div className="text-xs font-mono text-[#888888]">GITHUB REPOSITORY</div>
                <div className="text-sm font-bold text-white mt-1">mailmohammedabeeth-code</div>
              </div>
              <div className="mt-4 pt-3 border-t border-[#292929] flex items-center justify-between text-xs font-mono text-[#FF453A]">
                <span>Explore Code</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </a>

          </div>

          {/* Quick Return to Portals */}
          <div className="flex justify-center">
            <button
              onClick={() => navigate('/#portals')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0D0D0D] border border-[#292929] hover:border-[#FF453A] text-white font-mono text-xs font-bold transition-all"
            >
              <ArrowLeft className="w-4 h-4 text-[#FF453A]" />
              <span>RETURN TO MAIN PORTFOLIO GATEWAYS</span>
            </button>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 14. MODAL: FULLSCREEN CERTIFICATE / RESUME VIEWER       */}
      {/* ======================================================== */}
      {activeViewerModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-4xl h-[85vh] rounded-2xl bg-[#0D0D0D] border border-[#292929] flex flex-col overflow-hidden shadow-2xl">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#292929] bg-[#000000]">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-[#FF453A]" />
                <div>
                  <h3 className="text-sm font-bold text-white">{activeViewerModal.title}</h3>
                  <p className="text-xs font-mono text-[#888888]">
                    {activeViewerModal.issuer} {activeViewerModal.year && `• ${activeViewerModal.year}`}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <a
                  href={activeViewerModal.pdfUrl}
                  download
                  className="px-3 py-1.5 rounded-lg bg-[#FF453A] text-black font-mono font-bold text-xs flex items-center gap-1.5 shadow"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </a>
                <button
                  onClick={() => setActiveViewerModal(null)}
                  className="p-2 rounded-lg bg-[#171717] text-[#B3B3B3] hover:text-white border border-[#292929] transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Body: PDF iframe */}
            <div className="flex-1 w-full bg-[#000000]">
              <iframe
                src={`${activeViewerModal.pdfUrl}#toolbar=0`}
                title={activeViewerModal.title}
                className="w-full h-full border-0 bg-white"
              />
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
