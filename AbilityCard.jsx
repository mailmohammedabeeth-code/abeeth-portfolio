import React, { useState, useRef } from 'react';
import { personalInfo } from '../data/portfolioData';
import { soundManager } from '../utils/soundEffects';
import { 
  Cpu, 
  Sparkles, 
  RotateCw, 
  CheckCircle2, 
  ShieldCheck, 
  ExternalLink,
  QrCode,
  Layers,
  Database,
  BarChart3,
  Code2,
  Mail,
  Phone
} from 'lucide-react';

export default function AbilityCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    setRotate({ x: rotateX, y: rotateY });
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.25,
    });
  };

  const handleMouseEnter = () => {
    soundManager.playHover();
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setGlare({ x: 50, y: 50, opacity: 0 });
  };

  const handleFlip = () => {
    soundManager.playClick();
    setIsFlipped(!isFlipped);
  };

  return (
    <section 
      id="interactive-ability-card"
      style={{ scrollMarginTop: '80px' }}
      className="py-8 sm:py-10 relative overflow-hidden bg-[#000000] scroll-mt-20 sm:scroll-mt-24"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FF453A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D0D0D] border border-[#292929] text-xs font-mono mb-3 shadow-sm">
            <span className="text-[#FF453A] font-bold">// 03</span>
            <span className="text-white">DIGITAL CREDENTIAL PASS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
            MY DIGITAL <span className="text-[#FF453A]">IDENTITY</span>
          </h2>
          <div className="w-16 h-1 bg-[#FF453A] rounded-full mt-4" />
        </div>

        {/* 3D Card Stage / Terminal Dock */}
        <div className="w-full max-w-4xl mx-auto p-5 sm:p-8 rounded-3xl bg-[#0D0D0D]/70 border border-[#292929] relative flex flex-col items-center justify-center shadow-2xl backdrop-blur-sm">
          {/* Status Bar */}
          <div className="w-full flex items-center justify-between pb-3 mb-4 border-b border-[#292929] text-xs font-mono text-[#888888]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF453A] animate-ping" />
              <span className="text-white font-bold tracking-wider font-mono">
                NEXUS ACCESS <span className="text-[#FF453A]">//</span> 2026
              </span>
            </div>
            <span className="text-[#FF453A] font-bold">L1 VERIFIED CANDIDATE</span>
          </div>

          <div 
            className="w-full max-w-[480px] h-[295px] sm:h-[320px] perspective-[1200px]"
            data-cursor="card"
            data-cursor-text="FLIP"
          >
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleFlip}
              style={{
                transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y + (isFlipped ? 180 : 0)}deg)`,
                transition: isFlipped ? 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)' : 'transform 0.1s ease-out',
                transformStyle: 'preserve-3d',
              }}
              className="relative w-full h-full rounded-[26px] cursor-pointer shadow-2xl select-none"
            >
              {/* Specular Glare */}
              <div 
                className="absolute inset-0 rounded-[26px] pointer-events-none z-30 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,69,58,${glare.opacity}) 0%, transparent 60%)`,
                }}
              />

              {/* FRONT FACE */}
              <div 
                className="absolute inset-0 w-full h-full rounded-[26px] bg-[#0D0D0D] p-5 sm:p-7 border border-[#292929] hover:border-[#FF453A] flex flex-col justify-between overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.8)] transition-colors"
                style={{ backfaceVisibility: 'hidden' }}
              >
                {/* Circuit Grid Backdrop */}
                <div className="absolute inset-0 bg-[radial-gradient(#292929_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />

                {/* Top Row: IDENTITY CARD Label & ABEETH Moniker */}
                <div className="relative z-10 flex items-center justify-between">
                  {/* Top-Left: IDENTITY CARD Label */}
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF453A] shadow-[0_0_6px_#FF453A]" />
                    <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-widest text-white uppercase select-none">
                      IDENTITY CARD
                    </span>
                  </div>

                  {/* Moniker Badge */}
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-lg sm:text-xl font-black tracking-wider text-white">
                      ABEETH<span className="text-[#FF453A]">.</span>
                    </span>
                    <button 
                      onClick={(e) => { e.stopPropagation(); handleFlip(); }}
                      className="p-1.5 rounded-full bg-[#000000] text-[#B3B3B3] hover:text-white transition-colors border border-[#292929]"
                      title="Flip Card"
                    >
                      <RotateCw className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Center Content: Identity on Left, Passport Photo on Right */}
                <div className="relative z-10 my-auto flex items-center justify-between gap-3 sm:gap-5">
                  {/* Left Side: Identity Details */}
                  <div className="flex-1 min-w-0 pr-1">
                    <div className="text-[10px] sm:text-[11px] font-mono text-[#888888] tracking-wider uppercase">
                      VERIFIED CANDIDATE • 2026
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-wide mt-1 truncate">
                      Mohammed Abeeth H
                    </h3>

                    {/* Core Role Pill */}
                    <div className="flex flex-wrap gap-1.5 mt-2.5">
                      <span className="px-3 py-1 rounded-full text-[11px] sm:text-xs font-mono font-bold bg-[#171717] text-white border border-[#292929] inline-flex items-center gap-2 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF453A] flex-shrink-0" />
                        <span className="truncate">Aspiring Software Engineer</span>
                      </span>
                    </div>
                  </div>

                  {/* Right Side: Vertical Passport-Style Rectangle Photo */}
                  <div className="flex-shrink-0">
                    <div 
                      className="relative w-[102px] h-[126px] sm:w-[114px] sm:h-[142px] md:w-[122px] md:h-[150px] overflow-hidden bg-[#0A0A0A] shadow-[0_4px_18px_rgba(255,69,58,0.25)]"
                      style={{
                        borderRadius: '10px',
                        border: '1px solid #FF453A'
                      }}
                    >
                      <img
                        src="/images/image(9).png"
                        alt="Mohammed Abeeth H"
                        className="w-full h-full object-cover object-[center_top]"
                        style={{
                          objectFit: 'cover',
                          objectPosition: 'center top'
                        }}
                        loading="eager"
                      />
                    </div>
                  </div>
                </div>

                {/* Bottom Row: College & Barcode */}
                <div className="relative z-10 flex items-end justify-between pt-2.5 border-t border-[#292929]">
                  <div className="text-[10px] sm:text-[11px] font-mono text-[#888888]">
                    <div>Sethu Institute of Technology</div>
                    <div className="text-[9px] text-[#FF453A]">Tamil Nadu, India</div>
                  </div>

                  {/* Simulated Security Barcode */}
                  <div className="flex items-center gap-[2px] h-6 opacity-60">
                    <span className="w-[1.5px] h-full bg-[#FF453A]" />
                    <span className="w-[3px] h-full bg-white" />
                    <span className="w-[1px] h-full bg-[#FF453A]" />
                    <span className="w-[4px] h-full bg-white" />
                    <span className="w-[2px] h-full bg-[#FF453A]" />
                    <span className="w-[1px] h-full bg-white" />
                    <span className="w-[3px] h-full bg-[#FF453A]" />
                  </div>
                </div>
              </div>

              {/* BACK FACE */}
              <div 
                className="absolute inset-0 w-full h-full rounded-[26px] bg-[#0D0D0D] p-6 sm:p-7 border border-[#292929] hover:border-[#FF453A] flex flex-col justify-between overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.8)]"
                style={{
                  transform: 'rotateY(180deg)',
                  backfaceVisibility: 'hidden',
                }}
              >
                {/* Back Top */}
                <div className="flex items-center justify-between pb-2 border-b border-[#292929]">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#FF453A]" />
                    <span className="text-xs font-mono font-bold text-white">
                      SECURITY CLEARANCE & STACK
                    </span>
                  </div>
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleFlip(); }}
                    className="p-1 rounded-full bg-[#000000] text-[#B3B3B3] hover:text-white border border-[#292929]"
                  >
                    <RotateCw className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Back Core Grid */}
                <div className="grid grid-cols-2 gap-2 text-[11px] font-mono py-1">
                  <div className="p-2 rounded-lg bg-[#000000] border border-[#292929]">
                    <span className="text-[#888888] block text-[9px]">INTERN EXPERIENCE</span>
                    <span className="text-white font-bold">Aatzy Tech (6 Mo)</span>
                  </div>
                  <div className="p-2 rounded-lg bg-[#000000] border border-[#292929]">
                    <span className="text-[#888888] block text-[9px]">DEGREE / STATUS</span>
                    <span className="text-[#FF453A] font-bold">B.E. CSE (2026)</span>
                  </div>
                  <div className="p-2 rounded-lg bg-[#000000] border border-[#292929]">
                    <span className="text-[#888888] block text-[9px]">BI / DASHBOARDS</span>
                    <span className="text-white font-bold">Excel, Power BI, SQL</span>
                  </div>
                  <div className="p-2 rounded-lg bg-[#000000] border border-[#292929]">
                    <span className="text-[#888888] block text-[9px]">DEV & CLOUD</span>
                    <span className="text-[#FF453A] font-bold">Python, Docker, AWS</span>
                  </div>
                </div>

                {/* Back Footer */}
                <div className="flex items-end justify-between pt-2.5 border-t border-[#292929] text-[10px] font-mono">
                  <div className="flex flex-col gap-1 min-w-0 pr-2">
                    <a 
                      href="mailto:mail.mohammedabeeth@gmail.com"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 text-white hover:text-[#FF453A] transition-colors truncate"
                      title="Send email to Mohammed Abeeth"
                    >
                      <Mail className="w-3 h-3 text-[#FF453A] flex-shrink-0" />
                      <span className="text-[#888888]">EMAIL:</span>
                      <span className="text-white truncate">mail.mohammedabeeth@gmail.com</span>
                    </a>
                    
                    <a
                      href="tel:+919080081060"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 text-white hover:text-[#FF453A] transition-colors"
                      title="Call Mohammed Abeeth"
                    >
                      <Phone className="w-3 h-3 text-[#FF453A] flex-shrink-0" />
                      <span className="text-[#888888]">TEL:</span>
                      <span className="text-white">+91-9080081060</span>
                    </a>
                  </div>

                  <span className="text-white flex items-center gap-1 font-bold flex-shrink-0 pb-0.5">
                    <CheckCircle2 className="w-3 h-3 text-[#FF453A]" /> VERIFIED
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
