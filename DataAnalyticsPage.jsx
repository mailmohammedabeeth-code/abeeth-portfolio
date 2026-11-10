import React, { useState, useEffect } from 'react';
import { useRouter } from '../router/Router';
import { personalInfo } from '../data/portfolioData';
import { 
  dataAnalyticsHero, 
  dataAnalyticsJourney, 
  technicalSkillsData, 
  dataAnalyticsProjects, 
  certificationsGallery, 
  dataAnalyticsToolkit,
  dataAnalyticsExperience 
} from '../data/dataAnalyticsData';
import { 
  ArrowLeft, 
  Download, 
  ExternalLink, 
  FileText, 
  Eye, 
  CheckCircle2, 
  Sparkles, 
  Database, 
  FileSpreadsheet, 
  BarChart3, 
  Code2, 
  LayoutGrid, 
  TrendingUp, 
  ShieldCheck, 
  Calendar, 
  MapPin, 
  Mail, 
  Phone, 
  MessageSquare, 
  Linkedin, 
  Github, 
  ChevronRight, 
  X, 
  Search, 
  Layers, 
  GitBranch, 
  Award, 
  BookOpen, 
  Copy, 
  Check, 
  Menu, 
  Maximize2,
  ArrowRight,
  Briefcase,
  Building,
  Terminal
} from 'lucide-react';

export default function DataAnalyticsPage() {
  const { navigate } = useRouter();
  
  // Navigation active state
  const [activeNav, setActiveNav] = useState('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Skills filter state
  const [selectedSkillCategory, setSelectedSkillCategory] = useState('all');

  // Interactive PDF/Certificate Viewer Modal
  const [activeViewerModal, setActiveViewerModal] = useState(null);

  // Resume Inline Viewer Toggle
  const [showInlineResume, setShowInlineResume] = useState(true);

  // Copied states
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Scroll spy for active navigation item
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'journey', 'skills', 'projects', 'toolkit', 'resume', 'certifications', 'experience', 'contact'];
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

  // Update Page Title
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Data Analytics Portfolio | Mohammed Abeeth H";
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return () => {
      document.title = originalTitle;
    };
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  // WhatsApp prefilled opportunity link
  const whatsappUrl = `https://wa.me/919080081060?text=${encodeURIComponent(
    "Hello Abeeth! I reviewed your Data Analytics portfolio and would like to discuss a professional Data Analytics opportunity with you."
  )}`;

  const navLinks = [
    { id: 'overview', label: 'Overview' },
    { id: 'journey', label: 'Journey' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'toolkit', label: 'Toolkit' },
    { id: 'resume', label: 'Resume' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-[#000000] text-[#FFFFFF] selection:bg-[#FF453A] selection:text-black">
      
      {/* ======================================================== */}
      {/* 1. STICKY DEDICATED NAVIGATION BAR                      */}
      {/* ======================================================== */}
      <header className="sticky top-0 z-40 bg-[#000000]/90 backdrop-blur-md border-b border-[#292929] transition-all">
        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          
          {/* Left: Back to Portfolio & Brand */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/#portals')}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#0D0D0D] border border-[#292929] hover:border-[#FF453A] text-[#B3B3B3] hover:text-[#FFFFFF] text-xs font-mono transition-all group"
              title="Return to Main Portfolio Gateways"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1 text-[#FF453A]" />
              <span className="font-semibold text-white">Back to Portfolio</span>
            </button>

            <div className="hidden sm:flex items-center gap-2 pl-3 border-l border-[#292929]">
              <span className="text-sm font-black tracking-wider text-white">
                ABEETH<span className="text-[#FF453A]">.</span>
              </span>
              <span className="text-xs font-mono text-[#888888]">// DATA ANALYTICS</span>
            </div>
          </div>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#0A0A0A] p-1 rounded-full border border-[#292929]">
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
              href={dataAnalyticsHero.resumePdfPath}
              download="Mohammed_Abeeth_H_Data_Analyst_Resume.pdf"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#FF453A] hover:bg-[#E03E34] text-black text-xs font-mono font-bold transition-all shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </a>

            {/* Mobile Hamburger Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-[#0D0D0D] border border-[#292929] text-[#B3B3B3] hover:text-white"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#FF453A]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0A0A0A] border-b border-[#292929] px-4 py-4 space-y-2">
            <div className="grid grid-cols-2 gap-2 pb-3">
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
              href={dataAnalyticsHero.resumePdfPath}
              download="Mohammed_Abeeth_H_Data_Analyst_Resume.pdf"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#FF453A] text-black font-mono font-bold text-xs"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume PDF</span>
            </a>
          </div>
        )}
      </header>

      {/* ======================================================== */}
      {/* 2. HERO SECTION — DATA ANALYTICS CORE                   */}
      {/* ======================================================== */}
      <section id="overview" style={{ scrollMarginTop: '80px' }} className="scroll-mt-20 sm:scroll-mt-24 relative pt-8 pb-10 sm:pt-10 sm:pb-12 overflow-hidden bg-[#000000]">
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#292929_1px,transparent_1px),linear-gradient(to_bottom,#292929_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header Row: Pillar Badge, Main Heading & Back Link */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D0D0D] border border-[#292929] text-xs font-mono mb-4">
              <span className="w-2 h-2 rounded-full bg-[#FF453A] animate-pulse" />
              <span className="text-[#FF453A] font-bold">EXPERTISE GATEWAY // 01</span>
              <span className="text-[#292929]">|</span>
              <span className="text-[#B3B3B3]">BUSINESS INTELLIGENCE • SQL • EXCEL</span>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase">
                  DATA <span className="text-[#FF453A]">ANALYTICS</span>
                </h1>
                <p className="text-xs sm:text-sm font-mono text-[#888888] mt-2 tracking-wider">
                  ENTERPRISE BUSINESS INTELLIGENCE // ADVANCED SQL // PREDICTIVE REPORTING
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

          {/* 50/50 Balanced Split: Left Column (Personal Profile) & Right Column (Live Analytics Core) */}
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
                      Data Analyst | Software Engineer
                    </p>
                    <p className="text-xs font-mono text-[#888888] mt-1.5 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#FF453A]" />
                      <span>Tamil Nadu, India • Open to Data Analyst Roles</span>
                    </p>
                  </div>
                </div>

                {/* Professional Introduction & Tagline */}
                <div className="p-4 rounded-xl bg-[#000000] border border-[#292929]">
                  <p className="text-sm sm:text-base text-white font-medium leading-relaxed italic">
                    "{dataAnalyticsHero.subtitle}"
                  </p>
                  <p className="mt-2 text-xs sm:text-sm text-[#B3B3B3] leading-relaxed">
                    Specialized in exploratory data analysis (EDA), automated ETL pipelines, SQL query optimization, and executive Power BI / Excel dashboards that accelerate data-driven business decisions.
                  </p>
                </div>
              </div>

              {/* Action Buttons: Resume & Contact */}
              <div className="space-y-4 pt-2">
                <div className="flex flex-wrap items-center gap-3 w-full">
                  <a
                    href={dataAnalyticsHero.resumePdfPath}
                    download="Mohammed_Abeeth_H_Data_Analyst_Resume.pdf"
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
                    <div className="text-[10px] font-mono text-[#888888] uppercase tracking-wider">Completed Work</div>
                    <div className="text-base sm:text-lg font-extrabold text-white mt-1">2+ Major</div>
                    <div className="text-[10px] font-mono text-[#FF453A] mt-0.5">Live Case Studies</div>
                  </div>
                  <div className="p-3 rounded-lg bg-[#000000] border border-[#292929] text-center">
                    <div className="text-[10px] font-mono text-[#888888] uppercase tracking-wider">Optimization</div>
                    <div className="text-base sm:text-lg font-extrabold text-white mt-1">99.4%</div>
                    <div className="text-[10px] font-mono text-[#FF453A] mt-0.5">Data Accuracy</div>
                  </div>
                  <div className="p-3 rounded-lg bg-[#000000] border border-[#292929] text-center">
                    <div className="text-[10px] font-mono text-[#888888] uppercase tracking-wider">Primary Stack</div>
                    <div className="text-base sm:text-lg font-extrabold text-white mt-1">11 Tools</div>
                    <div className="text-[10px] font-mono text-[#FF453A] mt-0.5">SQL • BI • Python</div>
                  </div>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN — LIVE ANALYTICS CORE DASHBOARD */}
            <div className="rounded-xl bg-[#0D0D0D] border border-[#292929] hover:border-[#FF453A]/60 transition-all p-6 sm:p-7 flex flex-col justify-between shadow-2xl overflow-hidden h-full">
              
              <div>
                {/* Terminal Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#292929] mb-5">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF453A]" />
                    <div className="w-3 h-3 rounded-full bg-[#292929]" />
                    <div className="w-3 h-3 rounded-full bg-[#292929]" />
                    <span className="text-xs font-mono text-white ml-2 font-bold tracking-wider">
                      LIVE_ANALYTICS_CORE
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-white bg-[#171717] px-2.5 py-1 rounded border border-[#292929] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF453A] animate-pulse" />
                    STATUS: ACTIVE
                  </span>
                </div>

                {/* KPI Metrics Matrix */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="p-3.5 rounded-lg bg-[#000000] border border-[#292929]">
                    <div className="text-[10px] font-mono text-[#888888]">QUERY ENGINE</div>
                    <div className="text-base font-bold text-white mt-1">SQL / Postgres</div>
                    <div className="text-[11px] font-mono text-[#FF453A] mt-0.5">● Index Optimized</div>
                  </div>
                  <div className="p-3.5 rounded-lg bg-[#000000] border border-[#292929]">
                    <div className="text-[10px] font-mono text-[#888888]">BI REPORTING</div>
                    <div className="text-base font-bold text-white mt-1">Power BI & Excel</div>
                    <div className="text-[11px] font-mono text-white mt-0.5">● DAX & Star Schema</div>
                  </div>
                </div>

                {/* Interactive Simulated Bar Chart */}
                <div className="p-4 rounded-xl bg-[#000000] border border-[#292929]">
                  <div className="flex items-center justify-between text-xs font-mono text-[#888888] mb-3">
                    <span className="text-white flex items-center gap-1.5 font-bold">
                      <TrendingUp className="w-3.5 h-3.5 text-[#FF453A]" /> Market Price Distribution (TN)
                    </span>
                    <span className="text-[10px] text-[#FF453A] font-bold">+14.2% Margin</span>
                  </div>
                  
                  {/* Bars with CSS Heights */}
                  <div className="grid grid-cols-7 gap-2 h-32 items-end pt-4">
                    {[
                      { height: 'h-16', label: 'Mon', active: false },
                      { height: 'h-24', label: 'Tue', active: true },
                      { height: 'h-14', label: 'Wed', active: false },
                      { height: 'h-28', label: 'Thu', active: true },
                      { height: 'h-18', label: 'Fri', active: false },
                      { height: 'h-26', label: 'Sat', active: true },
                      { height: 'h-12', label: 'Sun', active: false },
                    ].map((bar, bIdx) => (
                      <div key={bIdx} className="flex flex-col items-center gap-1.5 h-full justify-end group">
                        <div 
                          className={`w-full rounded-t transition-all duration-300 ${bar.height} ${
                            bar.active ? 'bg-[#FF453A] shadow-[0_0_10px_rgba(255,69,58,0.5)]' : 'bg-[#292929] group-hover:bg-[#404040]'
                          }`} 
                        />
                        <span className="text-[9px] font-mono text-[#888888] group-hover:text-white transition-colors">{bar.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Terminal Footer Status */}
              <div className="mt-5 pt-3.5 border-t border-[#292929] flex items-center justify-between text-[11px] font-mono text-[#888888]">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#FF453A] animate-ping" />
                  Real-Time Analytical Engine
                </span>
                <span className="text-white font-bold bg-[#171717] px-2 py-0.5 rounded border border-[#292929]">
                  PostgreSQL v16.1
                </span>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. ABOUT MY DATA ANALYTICS JOURNEY                      */}
      {/* ======================================================== */}
      <section id="journey" style={{ scrollMarginTop: '80px' }} className="scroll-mt-20 sm:scroll-mt-24 py-8 sm:py-10 bg-[#050505] border-t border-[#292929]">
        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-left max-w-3xl mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D0D0D] border border-[#292929] text-xs font-mono text-[#FF453A] mb-3">
              <span>// 01 JOURNEY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
              MY DATA <span className="text-[#FF453A]">ANALYTICS JOURNEY</span>
            </h2>
            <p className="text-sm sm:text-base text-[#B3B3B3] mt-2">
              From raw transactional datasets to executive business intelligence and data-driven decisions.
            </p>
          </div>

          {/* Narrative paragraphs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
            {(Array.isArray(dataAnalyticsJourney?.narrative) ? dataAnalyticsJourney.narrative : []).map((paragraph, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-[#0D0D0D] border border-[#292929] flex flex-col justify-between">
                <div className="text-xs font-mono text-[#FF453A] font-bold mb-3">
                  // STAGE 0{idx + 1}
                </div>
                <p className="text-sm text-[#B3B3B3] leading-relaxed">
                  {paragraph}
                </p>
              </div>
            ))}
          </div>

          {/* Timeline Milestones */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {((Array.isArray(dataAnalyticsJourney?.timeline) && dataAnalyticsJourney.timeline.length > 0)
              ? dataAnalyticsJourney.timeline
              : (Array.isArray(dataAnalyticsJourney?.workflowPillars) ? dataAnalyticsJourney.workflowPillars : [])
            ).map((item, idx) => (
              <div 
                key={idx} 
                className="p-5 rounded-xl bg-[#0A0A0A] border border-[#292929] hover:border-[#FF453A] transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-[#FF453A]">{item.step || `0${idx + 1}`}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#171717] text-[#B3B3B3] border border-[#292929]">
                    {item.period || 'Continuous'}
                  </span>
                </div>
                <div className="text-xs font-mono text-[#888888] mb-1">{item.phase || `PHASE 0${idx + 1}`}</div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#FF453A] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#B3B3B3] leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="pt-3 border-t border-[#292929]">
                  <span className="text-[11px] font-mono text-white inline-flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF453A]" />
                    {item.badge || 'Verified Milestone'}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. TECHNICAL SKILLS & PROFICIENCY MATRIX                */}
      {/* ======================================================== */}
      <section id="skills" style={{ scrollMarginTop: '80px' }} className="scroll-mt-20 sm:scroll-mt-24 py-8 sm:py-10 bg-[#000000] border-t border-[#292929]">
        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D0D0D] border border-[#292929] text-xs font-mono text-[#FF453A] mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF453A] animate-pulse" />
                <span>// 02 TECHNICAL MATRIX</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
                DATA ANALYTICS <span className="text-[#FF453A]">TECHNICAL MATRIX</span>
              </h2>
              <p className="text-sm text-[#B3B3B3] mt-1.5">
                Core analytical tooling, database query engines, and reporting environments unified in one dashboard.
              </p>
            </div>

            {/* Quick Status Pill */}
            <div className="flex items-center gap-2 self-start md:self-end">
              <span className="text-[11px] font-mono px-3 py-1.5 rounded-lg bg-[#0D0D0D] border border-[#292929] text-[#B3B3B3]">
                TOTAL TOOLS: <span className="text-[#FF453A] font-bold">11</span>
              </span>
              <span className="text-[11px] font-mono px-3 py-1.5 rounded-lg bg-[#0D0D0D] border border-[#292929] text-[#B3B3B3]">
                ARCHITECTURE: <span className="text-white font-bold">UNIFIED CORE</span>
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
                  ANALYTICS_SUITE_MATRIX
                </span>
                <span className="text-[10px] font-mono text-[#888888]">
                  // 11 CONNECTED TOOLS
                </span>
              </div>

              {/* Category Filter Tabs */}
              <div className="flex flex-wrap items-center gap-1.5">
                {[
                  { id: 'all', label: 'All (11)' },
                  { id: 'bi', label: 'Spreadsheet & BI' },
                  { id: 'db', label: 'Databases & SQL' },
                  { id: 'python', label: 'Python & Data Tools' },
                  { id: 'analysis', label: 'Analytics & Git' }
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
              {(Array.isArray(technicalSkillsData) ? technicalSkillsData : [])
                .filter((tool) => selectedSkillCategory === 'all' || tool.categoryGroup === selectedSkillCategory)
                .map((tool, idx) => {
                  const iconMap = {
                    FileSpreadsheet,
                    Database,
                    BarChart3,
                    LayoutGrid,
                    Code2,
                    Sparkles,
                    Search,
                    TrendingUp,
                    Terminal,
                    GitBranch,
                    Layers
                  };
                  const IconComp = iconMap[tool.icon] || BarChart3;

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
                              <span className="text-[10px] font-mono text-[#FF453A] font-medium">
                                {tool.category}
                              </span>
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

              {/* Integrated Metric/Summary Cell to keep rectangular grid flush when all tools are displayed */}
              {selectedSkillCategory === 'all' && (
                <div className="p-4 sm:p-5 bg-[#090909] border-r border-b border-[#222222] xl:col-span-1 lg:col-span-1 sm:col-span-1 flex flex-col justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#000000] border border-[#292929] flex items-center justify-center text-[#FF453A] flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-mono font-bold text-white tracking-wide">
                        UNIFIED PIPELINE
                      </div>
                      <div className="text-[11px] text-[#888888] mt-0.5">
                        Structured queries, ETL & BI reporting.
                      </div>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-[#1C1C1C] flex items-center justify-between">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#171717] text-[#FF453A] border border-[#292929]">
                      11 TOOLS READY
                    </span>
                    <span className="text-[10px] font-mono text-[#888888]">
                      VERIFIED
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Matrix Status Footer */}
            <div className="px-5 py-3 sm:px-6 bg-[#080808] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-[#888888]">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF453A] animate-ping" />
                Unified Technical Architecture // Clean, Connected Toolset
              </span>
              <span className="text-white font-medium">
                OPTIMIZED FOR PERFORMANCE & DECISION INTELLIGENCE
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 4.5. PROFESSIONAL EDGE — SOFT SKILLS                     */}
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
              The thinking, precision and communication behind effective analytical decisions.
            </p>
          </div>

          {/* Balanced 2x2 Soft Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
            {[
              {
                name: "Analytical Thinking",
                description: "Breaking down complex data and identifying meaningful insights.",
                icon: TrendingUp,
                number: "01"
              },
              {
                name: "Problem Solving",
                description: "Finding practical solutions through logical analysis.",
                icon: CheckCircle2,
                number: "02"
              },
              {
                name: "Attention to Detail",
                description: "Maintaining accuracy and identifying inconsistencies in data.",
                icon: ShieldCheck,
                number: "03"
              },
              {
                name: "Communication",
                description: "Presenting analytical findings clearly and effectively.",
                icon: MessageSquare,
                number: "04"
              }
            ].map((skill, idx) => {
              const IconComp = skill.icon;
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
      {/* 5. DATA ANALYTICS PROJECTS                              */}
      {/* ======================================================== */}
      <section id="projects" style={{ scrollMarginTop: '80px' }} className="scroll-mt-20 sm:scroll-mt-24 py-8 sm:py-10 bg-[#050505] border-t border-[#292929]">
        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-left max-w-3xl mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D0D0D] border border-[#292929] text-xs font-mono text-[#FF453A] mb-3">
              <span>// 03 PROJECTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
              DATA ANALYTICS <span className="text-[#FF453A]">CASE STUDIES & DASHBOARDS</span>
            </h2>
            <p className="text-sm sm:text-base text-[#B3B3B3] mt-2">
              End-to-end analytical solutions built from real market observations and structured transactional data.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {(Array.isArray(dataAnalyticsProjects) ? dataAnalyticsProjects : []).map((project, idx) => {
              const safeTech = Array.isArray(project.technologies) 
                ? project.technologies 
                : (Array.isArray(project.tools) ? project.tools : []);
              const safeProblem = project.problemStatement || project.businessProblem || '';
              const safeFeatures = Array.isArray(project.keyFeatures) 
                ? project.keyFeatures 
                : (Array.isArray(project.keyInsights) ? project.keyInsights : []);
              const safeMetrics = Array.isArray(project.metrics) ? project.metrics : [];

              return (
                <div 
                  key={project.id || idx}
                  className="p-6 rounded-xl bg-[#0D0D0D] border border-[#292929] hover:border-[#FF453A] transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Card Header */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold text-[#FF453A]">
                        CASE STUDY // 0{idx + 1}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#171717] text-white border border-[#292929]">
                        {project.status || 'Active'}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white group-hover:text-[#FF453A] transition-colors mb-1">
                      {project.title}
                    </h3>
                    <div className="text-xs font-mono text-[#888888] mb-4">
                      {project.subtitle || project.category}
                    </div>

                    {/* Technologies Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {safeTech.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-2 py-0.5 rounded bg-[#000000] border border-[#292929] text-[11px] font-mono text-[#B3B3B3]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Problem & Description */}
                    <div className="space-y-3 mb-6">
                      {safeProblem && (
                        <div className="p-3 rounded-lg bg-[#000000] border border-[#292929] text-xs">
                          <span className="font-mono text-[#FF453A] font-bold block mb-1">BUSINESS PROBLEM:</span>
                          <p className="text-[#B3B3B3] leading-relaxed">{safeProblem}</p>
                        </div>
                      )}
                      <p className="text-xs sm:text-sm text-[#B3B3B3] leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Key Features Bullet Points */}
                    <div className="space-y-2 mb-6">
                      <span className="text-xs font-mono text-white font-bold block">KEY DELIVERABLES:</span>
                      {safeFeatures.map((feature, fi) => (
                        <div key={fi} className="flex items-start gap-2 text-xs text-[#B3B3B3]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#FF453A] mt-0.5 shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer Metrics & Actions */}
                  <div className="pt-4 border-t border-[#292929]">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                      {safeMetrics.map((m, mi) => (
                        <div key={mi} className="p-2 rounded bg-[#000000] border border-[#292929] text-center">
                          <div className="text-[10px] font-mono text-[#888888]">{m.label}</div>
                          <div className="text-xs font-bold text-white mt-0.5">{m.value}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-3">
                      <a
                        href={project.github || "https://github.com/mailmohammedabeeth-code"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#FF453A] hover:bg-[#E03E34] text-black font-mono font-bold text-xs transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>View GitHub Repository</span>
                      </a>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. DATA ANALYTICS TOOLKIT                                */}
      {/* ======================================================== */}
      <section id="toolkit" style={{ scrollMarginTop: '80px' }} className="scroll-mt-20 sm:scroll-mt-24 py-8 sm:py-10 bg-[#000000] border-t border-[#292929]">
        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D0D0D] border border-[#292929] text-xs font-mono text-[#FF453A] mb-3">
              <span>// 04 TOOLKIT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
              DATA ANALYTICS <span className="text-[#FF453A]">STACK</span>
            </h2>
            <p className="text-sm sm:text-base text-[#B3B3B3] mt-2">
              Industry-standard spreadsheet software, relational databases, visualization engines, and statistical packages.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {(Array.isArray(dataAnalyticsToolkit) ? dataAnalyticsToolkit : []).map((item, idx) => {
              const iconMap = {
                FileSpreadsheet,
                Database,
                BarChart3,
                Code2,
                LayoutGrid,
                TrendingUp,
                Terminal,
                GitBranch,
                Layers
              };
              const IconComp = iconMap[item.icon] || BarChart3;

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
      {/* 7. RESUME SECTION                                        */}
      {/* ======================================================== */}
      <section id="resume" style={{ scrollMarginTop: '80px' }} className="scroll-mt-20 sm:scroll-mt-24 py-8 sm:py-10 bg-[#050505] border-t border-[#292929]">
        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D0D0D] border border-[#292929] text-xs font-mono text-[#FF453A] mb-3">
                <span>// 05 CURRICULUM VITAE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
                DATA ANALYST <span className="text-[#FF453A]">RESUME</span>
              </h2>
              <p className="text-sm text-[#B3B3B3] mt-2">
                Verified academic curriculum, internship experience, and technical skill profile.
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
                href={dataAnalyticsHero?.resumePdfPath || "/documents/abeeth-data-analyst-resume.pdf"}
                download="Mohammed_Abeeth_H_Data_Analyst_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FF453A] hover:bg-[#E03E34] text-black text-xs font-mono font-bold transition-all shadow-md"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume PDF</span>
              </a>
            </div>
          </div>

          {/* Embedded Viewer */}
          {showInlineResume && (
            <div className="rounded-xl bg-[#0D0D0D] border border-[#292929] overflow-hidden p-2 shadow-2xl">
              <div className="h-[680px] w-full rounded-lg overflow-hidden bg-[#000000]">
                <iframe
                  src={`${dataAnalyticsHero?.resumePdfPath || "/documents/abeeth-data-analyst-resume.pdf"}#toolbar=0`}
                  title="Mohammed Abeeth H Data Analyst Resume"
                  className="w-full h-full border-0"
                />
              </div>
            </div>
          )}

        </div>
      </section>

      {/* ======================================================== */}
      {/* 8. VERIFIED CERTIFICATIONS SECTION                      */}
      {/* ======================================================== */}
      <section id="certifications" style={{ scrollMarginTop: '80px' }} className="scroll-mt-20 sm:scroll-mt-24 py-8 sm:py-10 bg-[#000000] border-t border-[#292929]">
        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-left max-w-3xl mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D0D0D] border border-[#292929] text-xs font-mono text-[#FF453A] mb-3">
              <span>// 06 CREDENTIALS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
              VERIFIED ANALYTICS <span className="text-[#FF453A]">CERTIFICATIONS</span>
            </h2>
            <p className="text-sm sm:text-base text-[#B3B3B3] mt-2">
              National government and industry-verified credentials with interactive PDF previews and download links.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(Array.isArray(certificationsGallery) ? certificationsGallery : []).map((cert) => (
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
                      Score: {cert.score}
                    </div>
                  )}

                  <p className="text-xs text-[#B3B3B3] leading-relaxed mb-6">
                    {cert.highlights}
                  </p>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-[#292929] flex items-center gap-2 sm:gap-3">
                  {cert.isUploaded && cert.pdfUrl ? (
                    <>
                      <button
                        onClick={() => setActiveViewerModal(cert)}
                        className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg bg-[#000000] hover:bg-[#171717] border border-[#292929] hover:border-[#FF453A] text-white text-xs font-mono transition-colors"
                        title="View Certificate Preview"
                      >
                        <Eye className="w-3.5 h-3.5 text-[#FF453A]" />
                        <span>View Certificate</span>
                      </button>

                      <a
                        href={cert.pdfUrl}
                        download={`${cert.title.replace(/\s+/g, '_')}.pdf`}
                        className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg bg-[#FF453A] hover:bg-[#E03E34] text-black text-xs font-mono font-bold transition-colors"
                        title="Download Certificate PDF"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download</span>
                      </a>
                    </>
                  ) : (
                    <div className="w-full text-center py-2 rounded-lg bg-[#000000] border border-dashed border-[#292929] text-xs font-mono text-[#888888]">
                      Certificate Verified
                    </div>
                  )}
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 8. WORK EXPERIENCE                                       */}
      {/* ======================================================== */}
      <section id="experience" style={{ scrollMarginTop: '80px' }} className="scroll-mt-20 sm:scroll-mt-24 py-8 sm:py-10 bg-[#050505] border-t border-[#292929]">
        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-left max-w-3xl mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D0D0D] border border-[#292929] text-xs font-mono text-[#FF453A] mb-3">
              <Briefcase className="w-3.5 h-3.5 text-[#FF453A]" />
              <span>// 08 PROFESSIONAL EXPERIENCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
              DATA & DATABASE <span className="text-[#FF453A]">INTERNSHIPS</span>
            </h2>
            <p className="text-sm sm:text-base text-[#B3B3B3] mt-2">
              Industry immersion bridging relational database administration, web scraping, and executive BI dashboards.
            </p>
          </div>

          <div className="space-y-6">
            {(Array.isArray(dataAnalyticsExperience) ? dataAnalyticsExperience : []).map((exp, idx) => {
              const safeResponsibilities = Array.isArray(exp.responsibilities) ? exp.responsibilities : [];
              const safeTools = Array.isArray(exp.technologies) ? exp.technologies : (Array.isArray(exp.tools) ? exp.tools : []);

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

                  <p className="text-sm text-[#B3B3B3] mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Responsibilities list */}
                  <div className="space-y-2.5 mb-6">
                    <span className="text-xs font-mono text-white font-bold block mb-2">
                      KEY CONTRIBUTIONS & DELIVERABLES:
                    </span>
                    {safeResponsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#B3B3B3]">
                        <CheckCircle2 className="w-4 h-4 text-[#FF453A] mt-0.5 shrink-0" />
                        <span className="leading-relaxed">{resp}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tools / Tech badges */}
                  <div className="pt-4 border-t border-[#292929]">
                    <div className="text-[11px] font-mono text-[#888888] mb-2 uppercase tracking-wider">
                      Applied Tools & Technologies:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {safeTools.map((t, tIdx) => (
                        <span 
                          key={tIdx}
                          className="px-2.5 py-1 rounded bg-[#000000] border border-[#292929] text-xs font-mono text-white"
                        >
                          {t}
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
      {/* 9. CONTACT SECTION                                      */}
      {/* ======================================================== */}
      <section id="contact" style={{ scrollMarginTop: '80px' }} className="scroll-mt-20 sm:scroll-mt-24 py-8 sm:py-10 bg-[#050505] border-t border-[#292929]">
        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D0D0D] border border-[#292929] text-xs font-mono text-[#FF453A] mb-4">
              <span>// 07 CONNECT</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight uppercase">
              LET'S BUILD SOMETHING <span className="text-[#FF453A]">WITH DATA.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#B3B3B3] mt-3">
              Open to Data Analyst, Business Intelligence, and Software Engineering opportunities.
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
      {/* 10. MODAL: FULLSCREEN CERTIFICATE VIEWER                */}
      {/* ======================================================== */}
      {activeViewerModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl h-[85vh] rounded-2xl bg-[#0D0D0D] border border-[#292929] flex flex-col overflow-hidden shadow-2xl">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#292929] bg-[#000000]">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-[#FF453A]" />
                <div>
                  <h3 className="text-sm font-bold text-white">{activeViewerModal.title}</h3>
                  <p className="text-xs font-mono text-[#888888]">{activeViewerModal.issuer}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <a
                  href={activeViewerModal.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#000000] hover:bg-[#171717] border border-[#292929] hover:border-[#FF453A] text-white font-mono text-xs flex items-center gap-1.5 transition-colors"
                  title="Open PDF in new browser tab"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#FF453A]" />
                  <span className="hidden sm:inline">Open in Tab</span>
                </a>
                <a
                  href={activeViewerModal.pdfUrl}
                  download={`${activeViewerModal.title.replace(/\s+/g, '_')}.pdf`}
                  className="px-3 py-1.5 rounded-lg bg-[#FF453A] hover:bg-[#E03E34] text-black font-mono font-bold text-xs flex items-center gap-1.5 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </a>
                <button
                  onClick={() => setActiveViewerModal(null)}
                  className="p-2 rounded-lg bg-[#171717] hover:bg-[#292929] text-[#B3B3B3] hover:text-white border border-[#292929] transition-colors"
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
                className="w-full h-full border-0"
              />
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
