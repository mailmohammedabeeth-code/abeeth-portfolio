import React, { useState } from 'react';
import { 
  ArrowLeft, 
  X, 
  Terminal, 
  Cpu, 
  RotateCw, 
  Sparkles, 
  AlertTriangle, 
  Hammer, 
  Wrench, 
  Coffee, 
  Bug, 
  Code2, 
  CheckCircle2, 
  Boxes 
} from 'lucide-react';

export default function FullStackUnderConstruction({ onClose }) {
  const [clickCount, setClickCount] = useState(0);
  const [speechBubble, setSpeechBubble] = useState("Just one more line of Python...");

  const funnyQuotes = [
    "Just one more line of Python...",
    "Wait, do I need a semicolon? Oh right, this is Python!",
    "Connecting React frontend to Flask backend...",
    "Squashing bug #404... almost got it!",
    "Robot assistant says: 'Beep boop! More coffee needed!'",
    "Writing tests... just kidding, testing in production!",
    "Migrating PostgreSQL tables carefully...",
    "Almost ready! Don't trip over the virtual cables!"
  ];

  const handleDeveloperClick = () => {
    const nextCount = clickCount + 1;
    setClickCount(nextCount);
    setSpeechBubble(funnyQuotes[nextCount % funnyQuotes.length]);
  };

  return (
    <div className="w-full text-white animate-fadeIn select-none">
      
      {/* Top Bar with 'Back to Universe' & Exit Button */}
      <div className="flex items-center justify-between pb-4 border-b border-[#292929]">
        <button
          onClick={onClose}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#000000] border border-[#292929] hover:border-[#FF453A] text-xs font-mono text-[#FF453A] hover:text-white transition-all group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>BACK TO UNIVERSE</span>
        </button>

        <button
          onClick={onClose}
          className="p-1.5 rounded-lg bg-[#000000] border border-[#292929] text-[#B3B3B3] hover:text-white hover:border-[#FF453A] transition-colors"
          title="Close modal"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Content Container */}
      <div className="py-6 sm:py-8 flex flex-col items-center text-center max-w-3xl mx-auto">
        
        {/* Status Label */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121212] border border-[#FF453A]/40 text-xs font-mono text-[#FF453A] font-bold mb-4 shadow-[0_0_15px_rgba(255,69,58,0.2)]">
          <span className="w-2 h-2 rounded-full bg-[#FF453A] animate-ping" />
          <span>UNDER CONSTRUCTION // 05</span>
        </div>

        {/* Secondary Heading */}
        <div className="text-xs sm:text-sm font-mono tracking-widest text-[#888888] uppercase mb-2">
          FULL STACK PYTHON DEVELOPER
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-tight mb-4">
          OOPS! WE'RE BUILDING <br className="hidden sm:inline" />
          <span className="text-[#FF453A]">SOMETHING COOL.</span>
        </h2>

        {/* Funny Message Plaque */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#000000] border border-[#FF453A]/50 text-xs sm:text-sm font-mono text-[#FF453A] font-bold mb-6 shadow-md">
          <AlertTriangle className="w-4 h-4 text-[#FACC15] animate-bounce" />
          <span>"404: Project not ready yet. Developer is still coding!"</span>
        </div>

        {/* ======================================================== */}
        {/* ORIGINAL CARTOON CONSTRUCTION SCENE (CUSTOM VECTOR SVG) */}
        {/* ======================================================== */}
        <div className="relative w-full max-w-2xl py-4 sm:py-6 my-2 bg-gradient-to-b from-[#0A0A0A] to-[#000000] rounded-2xl border border-[#292929] overflow-hidden shadow-2xl">
          
          {/* Background Ambient Hazard Striping Header */}
          <div 
            className="absolute top-0 left-0 right-0 h-2 opacity-80"
            style={{
              backgroundImage: 'repeating-linear-gradient(45deg, #FACC15 0, #FACC15 15px, #000000 15px, #000000 30px)'
            }}
          />

          {/* Floating Coding Symbols */}
          <div className="absolute top-6 left-6 text-xs font-mono text-[#FF453A]/40 animate-pulse pointer-events-none">
            &lt;div className="stack"&gt;
          </div>
          <div className="absolute top-12 right-8 text-xs font-mono text-[#38BDF8]/40 animate-pulse pointer-events-none">
            def build_frontend():
          </div>
          <div className="absolute bottom-12 left-8 text-xs font-mono text-[#22C55E]/40 animate-pulse pointer-events-none">
            pip install patience
          </div>
          <div className="absolute bottom-8 right-6 text-xs font-mono text-[#FACC15]/40 animate-pulse pointer-events-none">
            {`{ status: 404_working }`}
          </div>

          {/* Speech Bubble */}
          <div className="relative z-20 mb-2 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A1A1A] border border-[#FF453A] text-xs font-mono text-white shadow-lg animate-bounce">
            <Sparkles className="w-3.5 h-3.5 text-[#FF453A]" />
            <span>{speechBubble}</span>
          </div>

          {/* SVG Illustration Container */}
          <div 
            onClick={handleDeveloperClick}
            className="cursor-pointer transition-transform hover:scale-[1.02] active:scale-95 flex justify-center items-center py-2 px-4"
            title="Click the developer to see what they're saying!"
          >
            <svg
              viewBox="0 0 600 320"
              className="w-full max-w-[540px] h-auto drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Yellow Hard Hat Gradient */}
                <linearGradient id="hardhatGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FDE047" />
                  <stop offset="100%" stopColor="#CA8A04" />
                </linearGradient>

                {/* Laptop Screen Glow */}
                <linearGradient id="screenGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0284C7" />
                  <stop offset="100%" stopColor="#0F172A" />
                </linearGradient>

                {/* Robot Metallic Gradient */}
                <linearGradient id="robotMetal" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#94A3B8" />
                  <stop offset="100%" stopColor="#334155" />
                </linearGradient>
              </defs>

              {/* Ground Shadow Line */}
              <ellipse cx="300" cy="290" rx="260" ry="12" fill="#050505" />

              {/* ===================================== */}
              {/* LEFT: CONSTRUCTION BARRIER & SIGN     */}
              {/* ===================================== */}
              <g id="construction-barrier">
                {/* Sawhorse Legs */}
                <line x1="60" y1="210" x2="40" y2="285" stroke="#475569" strokeWidth="6" strokeLinecap="round" />
                <line x1="120" y1="210" x2="140" y2="285" stroke="#475569" strokeWidth="6" strokeLinecap="round" />
                
                {/* Barrier Board with Warning Stripes */}
                <rect x="35" y="195" width="115" height="28" rx="4" fill="#000000" stroke="#FACC15" strokeWidth="2" />
                {/* Diagonal Stripes */}
                <path d="M45 195 L60 223 M75 195 L90 223 M105 195 L120 223 M135 195 L150 223" stroke="#FACC15" strokeWidth="8" strokeLinecap="square" />

                {/* Traffic Cone */}
                <polygon points="120,285 105,230 115,230" fill="#EA580C" />
                <polygon points="105,230 115,230 113,220 107,220" fill="#FFFFFF" />
                <rect x="95" y="283" width="30" height="4" rx="2" fill="#EA580C" />

                {/* Hanging Warning Sign */}
                <rect x="50" y="140" width="85" height="42" rx="6" fill="#FACC15" stroke="#000000" strokeWidth="3" />
                <polygon points="92,148 72,175 112,175" fill="#000000" />
                <circle cx="92" cy="170" r="1.5" fill="#FACC15" />
                <rect x="91" y="157" width="2" height="9" fill="#FACC15" />
                <line x1="92" y1="120" x2="92" y2="140" stroke="#71717A" strokeWidth="2" strokeDasharray="3,3" />
              </g>

              {/* ===================================== */}
              {/* CENTER: CARTOON SOFTWARE DEVELOPER   */}
              {/* ===================================== */}
              <g id="cartoon-developer">
                {/* Desk / Cable Spool */}
                <rect x="210" y="225" width="180" height="60" rx="6" fill="#18181B" stroke="#27272A" strokeWidth="2" />
                <line x1="220" y1="235" x2="380" y2="235" stroke="#27272A" strokeWidth="1.5" />
                
                {/* Developer Stool */}
                <rect x="285" y="250" width="30" height="35" rx="3" fill="#27272A" />

                {/* Developer Body / Hooded Sweatshirt */}
                <path d="M265 240 C265 195, 335 195, 335 240 Z" fill="#DC2626" />
                {/* Python Logo on Hoodie */}
                <circle cx="300" cy="220" r="7" fill="#1E293B" />
                <circle cx="298" cy="219" r="2" fill="#38BDF8" />
                <circle cx="302" cy="221" r="2" fill="#FACC15" />

                {/* Developer Neck & Head */}
                <rect x="293" y="172" width="14" height="15" rx="4" fill="#FBCFE8" />
                <ellipse cx="300" cy="160" rx="22" ry="22" fill="#FDE047" opacity="0.3" />
                <circle cx="300" cy="158" r="21" fill="#FBCFE8" />

                {/* Face & Big Nerd Glasses */}
                <rect x="283" y="150" width="14" height="12" rx="3" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.5" />
                <rect x="303" y="150" width="14" height="12" rx="3" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.5" />
                <line x1="297" y1="156" x2="303" y2="156" stroke="#0F172A" strokeWidth="2.5" />
                <circle cx="290" cy="156" r="2" fill="#0F172A" />
                <circle cx="310" cy="156" r="2" fill="#0F172A" />
                
                {/* Funny Concentration Smile */}
                <path d="M294 170 Q300 174 306 170" stroke="#0F172A" strokeWidth="2" fill="none" strokeLinecap="round" />

                {/* Sweat Droplet */}
                <path d="M326 148 C326 148, 330 152, 330 155 C330 157.5, 328 159, 326 159 C324 159, 322 157.5, 322 155 C322 152, 326 148, 326 148 Z" fill="#38BDF8" />

                {/* YELLOW CONSTRUCTION HELMET */}
                <ellipse cx="300" cy="140" rx="28" ry="17" fill="url(#hardhatGrad)" stroke="#A16207" strokeWidth="1.5" />
                <path d="M272 143 C272 118, 328 118, 328 143 Z" fill="url(#hardhatGrad)" stroke="#A16207" strokeWidth="1.5" />
                {/* Helmet Center Ridge */}
                <path d="M296 119 L304 119 L302 142 L298 142 Z" fill="#FEF08A" />
                {/* Reflector Sticker */}
                <rect x="290" y="132" width="20" height="5" rx="1.5" fill="#FFFFFF" opacity="0.8" />

                {/* LAPTOP WITH PYTHON CODE */}
                <path d="M245 228 L275 190 L325 190 L295 228 Z" fill="#334155" />
                <rect x="268" y="193" width="52" height="32" rx="2" fill="url(#screenGlow)" stroke="#64748B" strokeWidth="1.5" />
                
                {/* Animated Code lines on Laptop */}
                <line x1="273" y1="199" x2="295" y2="199" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
                <line x1="273" y1="205" x2="312" y2="205" stroke="#4ADE80" strokeWidth="2" strokeLinecap="round" />
                <line x1="278" y1="211" x2="305" y2="211" stroke="#F43F5E" strokeWidth="2" strokeLinecap="round" />
                <line x1="278" y1="217" x2="290" y2="217" stroke="#FACC15" strokeWidth="2" strokeLinecap="round" />
                
                {/* Laptop Base & Keyboard */}
                <polygon points="255,228 335,228 340,234 250,234" fill="#64748B" />
                
                {/* Developer Typing Hands */}
                <circle cx="270" cy="226" r="6" fill="#FBCFE8" />
                <circle cx="318" cy="224" r="6" fill="#FBCFE8" />

                {/* Coffee Mug on Desk */}
                <rect x="355" y="215" width="15" height="18" rx="2" fill="#DC2626" />
                <path d="M370 219 C374 219, 374 228, 370 228" stroke="#DC2626" strokeWidth="2" fill="none" />
                {/* Steam Rising */}
                <path d="M360 210 Q363 205 360 200" stroke="#A1A1AA" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.6" />
                <path d="M365 208 Q368 203 365 198" stroke="#A1A1AA" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.6" />
              </g>

              {/* ===================================== */}
              {/* RIGHT: FUNNY ROBOT ASSISTANT         */}
              {/* ===================================== */}
              <g id="robot-assistant">
                {/* Robot Pedestal / Toolbox */}
                <rect x="445" y="245" width="70" height="40" rx="5" fill="#EF4444" stroke="#991B1B" strokeWidth="2" />
                <text x="480" y="268" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontFamily="monospace" fontWeight="bold">BUG_KIT</text>
                
                {/* Robot Body */}
                <rect x="460" y="185" width="40" height="45" rx="8" fill="url(#robotMetal)" stroke="#1E293B" strokeWidth="2" />
                {/* Meter Gauge on Robot Chest */}
                <rect x="468" y="195" width="24" height="14" rx="3" fill="#0284C7" stroke="#0F172A" strokeWidth="1" />
                <line x1="472" y1="202" x2="484" y2="202" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" />

                {/* Robot Neck & Head */}
                <rect x="474" y="178" width="12" height="8" fill="#475569" />
                <rect x="458" y="145" width="44" height="34" rx="8" fill="url(#robotMetal)" stroke="#1E293B" strokeWidth="2" />
                
                {/* Robot LED Screen Eyes */}
                <rect x="465" y="153" width="30" height="15" rx="4" fill="#000000" />
                <circle cx="473" cy="160" r="3.5" fill="#22C55E" />
                <circle cx="487" cy="160" r="3.5" fill="#22C55E" />
                <circle cx="474" cy="159" r="1" fill="#FFFFFF" />
                <circle cx="488" cy="159" r="1" fill="#FFFFFF" />

                {/* Robot Antenna with Blinking LED */}
                <line x1="480" y1="145" x2="480" y2="128" stroke="#64748B" strokeWidth="2.5" />
                <circle cx="480" cy="125" r="5" fill="#FF453A" />
                <circle cx="480" cy="125" r="8" fill="#FF453A" opacity="0.3" />

                {/* Robot Hand Holding Big Wrench */}
                <path d="M460 205 Q440 205 435 220" stroke="#475569" strokeWidth="4" fill="none" strokeLinecap="round" />
                {/* Giant Wrench */}
                <polygon points="425,210 435,215 428,245 422,242" fill="#94A3B8" stroke="#334155" strokeWidth="1" />
                <circle cx="423" cy="214" r="5" fill="#64748B" />
              </g>

              {/* ===================================== */}
              {/* FLOOR: SCATTERED CODING TOOLS & BUG   */}
              {/* ===================================== */}
              <g id="floor-items">
                {/* Hammer on Floor */}
                <rect x="180" y="278" width="22" height="6" rx="1.5" fill="#71717A" />
                <rect x="198" y="275" width="8" height="12" rx="2" fill="#3F3F46" />

                {/* Little Cartoon Bug on Back */}
                <ellipse cx="235" cy="282" rx="7" ry="5" fill="#22C55E" stroke="#14532D" strokeWidth="1" />
                {/* X_X eyes */}
                <text x="235" y="284" textAnchor="middle" fill="#FFFFFF" fontSize="6" fontFamily="sans-serif" fontWeight="bold">x x</text>
                {/* Little bug legs */}
                <line x1="230" y1="277" x2="228" y2="274" stroke="#14532D" strokeWidth="1" />
                <line x1="240" y1="277" x2="242" y2="274" stroke="#14532D" strokeWidth="1" />

                {/* Scattered Screwdriver */}
                <line x1="395" y1="282" x2="415" y2="280" stroke="#F97316" strokeWidth="3" strokeLinecap="round" />
                <line x1="415" y1="280" x2="425" y2="279" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
              </g>
            </svg>
          </div>

          <div className="text-[10px] font-mono text-[#888888] mt-1">
            💡 Tip: Click on the illustration to interact with the developer!
          </div>

        </div>

        {/* Supporting Description */}
        <p className="text-sm sm:text-base text-[#B3B3B3] leading-relaxed max-w-xl mx-auto my-4">
          This digital workspace is currently under development. I'm busy writing code, fixing bugs, and connecting the frontend to the backend. Something exciting is coming soon!
        </p>

        {/* Loading Indicator & Animated Progress Bar */}
        <div className="w-full max-w-md mx-auto my-4 p-4 rounded-xl bg-[#0A0A0A] border border-[#292929]">
          <div className="flex items-center justify-between text-xs font-mono mb-2">
            <span className="flex items-center gap-2 text-white font-bold">
              <RotateCw className="w-3.5 h-3.5 text-[#FF453A] animate-spin" />
              BUILDING EXPERIENCE...
            </span>
            <span className="text-[#FF453A]">ESTIMATING...</span>
          </div>

          {/* Indeterminate Animated Progress Bar */}
          <div className="w-full h-2.5 rounded-full bg-[#18181B] overflow-hidden p-0.5 border border-[#27272A]">
            <div 
              className="h-full rounded-full bg-gradient-to-r from-[#FF453A] via-[#FACC15] to-[#FF453A] animate-pulse"
              style={{
                width: '100%',
                backgroundImage: 'linear-gradient(90deg, #FF453A 0%, #FACC15 50%, #FF453A 100%)',
                backgroundSize: '200% 100%',
                animation: 'pulse 2s infinite ease-in-out'
              }}
            />
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-[#666666] mt-2">
            <span>// PIPELINE: COMPILING REACT + FLASK REST API</span>
            <span>NO PLACEHOLDERS</span>
          </div>
        </div>

        {/* Action Navigation Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
          <button
            onClick={onClose}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FF453A] hover:bg-[#E03E34] text-black font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(255,69,58,0.3)] active:scale-95"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO UNIVERSE</span>
          </button>

          <button
            onClick={onClose}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#121212] hover:bg-[#1A1A1A] border border-[#292929] hover:border-[#FF453A] text-white font-mono text-xs uppercase tracking-wider transition-all active:scale-95"
          >
            <X className="w-4 h-4 text-[#FF453A]" />
            <span>CLOSE PREVIEW</span>
          </button>
        </div>

      </div>

    </div>
  );
}

