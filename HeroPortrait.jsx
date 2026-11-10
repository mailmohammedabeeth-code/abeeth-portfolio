import React, { useState, useRef } from 'react';
import { soundManager } from '../utils/soundEffects';
import { CheckCircle2 } from 'lucide-react';

export default function HeroPortrait() {
  const containerRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = -((y - centerY) / centerY) * 7;
    const rotY = ((x - centerX) / centerX) * 7;

    setRotate({ x: rotX, y: rotY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    soundManager.playHover();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div 
      className="relative w-full max-w-[380px] sm:max-w-[420px] lg:max-w-[440px] mx-auto select-none perspective-[1000px]"
      data-cursor="card"
      data-cursor-text="ABEETH"
    >
      {/* Subtle Red Ambient Halo Behind Photo */}
      <div 
        className={`absolute -inset-4 rounded-[40px] bg-[#FF453A]/10 blur-2xl transition-all duration-700 pointer-events-none -z-10 ${
          isHovered ? 'opacity-100 scale-105' : 'opacity-60 scale-100'
        }`} 
      />

      {/* Floating Top Label: "THE PERSON BEHIND THE DATA" */}
      <div className="absolute -top-4 left-6 z-30 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D0D0D] border border-[#292929] backdrop-blur-md shadow-lg">
        <span className="w-2 h-2 rounded-full bg-[#FF453A] animate-ping" />
        <span className="text-[10px] font-mono font-bold tracking-widest text-white uppercase">
          THE PERSON BEHIND THE DATA
        </span>
      </div>

      {/* Main 3D Tilting Card Container */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          transformStyle: 'preserve-3d',
        }}
        className="relative rounded-[32px] p-[1px] bg-[#292929] hover:bg-[#FF453A] shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden group cursor-pointer transition-colors duration-300"
      >
        {/* Inner Frame */}
        <div className="relative rounded-[31px] bg-[#000000] overflow-hidden">
          
          {/* Portrait Image Container */}
          <div className="relative w-full aspect-[4/5] sm:aspect-[3.8/5] overflow-hidden bg-[#0A0A0A] flex items-center justify-center">
            
            {/* Loading shimmer */}
            {!imageLoaded && (
              <div className="absolute inset-0 bg-[#0D0D0D] animate-pulse" />
            )}

            {/* User's Authentic Portrait */}
            <img
              src="/images/image(9).png"
              alt="Mohammed Abeeth H (ABEETH) - Aspiring Software Engineer"
              onLoad={() => setImageLoaded(true)}
              className={`w-full h-full object-cover object-[center_12%] transition-all duration-700 ease-out group-hover:scale-[1.03] ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              loading="eager"
            />

            {/* Subtle Vignette Gradient at the bottom */}
            <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#000000] via-[#000000]/60 to-transparent pointer-events-none" />

            {/* Bottom Floating Info Card on Portrait */}
            <div className="absolute inset-x-4 bottom-4 z-20 p-3.5 rounded-2xl bg-[#0D0D0D]/90 border border-[#292929] backdrop-blur-md shadow-xl flex items-center justify-between">
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-sm font-bold text-white tracking-wide">
                    Mohammed Abeeth H
                  </h3>
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[#171717] text-[#FF453A] font-bold border border-[#292929]">
                    ABEETH
                  </span>
                </div>
                <p className="text-[11px] font-mono text-[#B3B3B3] mt-0.5">
                  Aspiring Software Engineer
                </p>
                <p className="text-[10px] font-mono text-[#888888]">
                  Sethu Institute of Technology (2026)
                </p>
              </div>

              {/* Status Dot */}
              <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-[#171717] border border-[#292929] text-white text-[10px] font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FF453A]" />
                <span className="hidden sm:inline font-bold">ACTIVE</span>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
