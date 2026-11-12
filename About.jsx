import React from 'react';
import { aboutData } from '../data/portfolioData';
import { 
  BarChart3, 
  Code2, 
  Database, 
  Cpu, 
  GraduationCap, 
  CheckCircle
} from 'lucide-react';

export default function About() {
  const iconMap = {
    BarChart3: BarChart3,
    Code2: Code2,
    Database: Database,
    Cpu: Cpu
  };

  return (
    <section 
      id="about" 
      style={{ scrollMarginTop: '80px' }}
      className="py-8 sm:py-10 relative overflow-hidden bg-[#000000] scroll-mt-20 sm:scroll-mt-24"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FF453A]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D0D0D] border border-[#292929] text-xs font-mono mb-3">
            <span className="text-[#FF453A] font-bold">// 02</span>
            <span className="text-white">ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
            CURIOUS BY NATURE. <span className="text-[#FF453A]">BUILT TO SOLVE.</span>
          </h2>
          <div className="w-16 h-1 bg-[#FF453A] rounded-full mt-4" />
          <p className="mt-4 text-[#B3B3B3] max-w-2xl text-sm sm:text-base font-mono">
            Bridging analytical logic with Python engineering and cloud systems to translate unstructured data into practical, real-world solutions.
          </p>
        </div>

        {/* Bio Narrative & Profile Highlights (Full-Width) */}
        <div className="w-full mb-8 sm:mb-10">
          <div className="bg-[#0D0D0D] border border-[#292929] hover:border-[#FF453A] transition-all rounded-2xl p-5 sm:p-8 relative">
            
            {/* Editorial Bio Identity Bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 mb-4 border-b border-[#292929]">
              <div className="flex items-start sm:items-center gap-4">
                <div className="relative w-20 h-20 rounded-xl overflow-hidden border border-[#292929] flex-shrink-0 bg-[#000000]">
                  <img 
                    src="/images/image(9).png" 
                    alt="Mohammed Abeeth H" 
                    className="w-full h-full object-cover object-[center_12%]"
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      Mohammed Abeeth H
                    </h3>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#171717] text-[#FF453A] font-bold border border-[#292929]">
                      ABEETH
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-mono text-[#FF453A] mt-0.5 font-semibold">
                    Aspiring Software Engineer
                  </p>
                  <p className="text-xs text-[#888888] mt-0.5">
                    Sethu Institute of Technology • B.E. Computer Science (Class of 2026)
                  </p>
                </div>
              </div>

              <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#000000] border border-[#292929] text-xs font-mono text-[#FF453A]">
                <span className="w-2 h-2 rounded-full bg-[#FF453A] animate-ping" />
                <span>ACTIVE CANDIDATE • 2026</span>
              </div>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="p-2 rounded-lg bg-[#000000] text-[#FF453A] border border-[#292929]">
                <GraduationCap className="w-5 h-5" />
              </span>
              <span>Engineering Background & Analytical Drive</span>
            </h3>

            <div className="space-y-4 text-white text-sm sm:text-base leading-relaxed">
              {(aboutData && Array.isArray(aboutData.summary) ? aboutData.summary : []).map((paragraph, index) => (
                <p key={index} className="text-[#B3B3B3]">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Core Competencies Checklist - Full Width 4-Column Responsive Grid */}
            <div className="mt-6 pt-4 border-t border-[#292929]">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#FF453A] mb-3 font-bold">
                What I Bring To The Table
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-sm text-[#B3B3B3]">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#000000] border border-[#292929]">
                  <CheckCircle className="w-4 h-4 text-[#FF453A] flex-shrink-0" />
                  <span className="text-white text-xs sm:text-sm font-medium">Data Cleaning & Transformation</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#000000] border border-[#292929]">
                  <CheckCircle className="w-4 h-4 text-[#FF453A] flex-shrink-0" />
                  <span className="text-white text-xs sm:text-sm font-medium">Interactive Dashboards (BI & Excel)</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#000000] border border-[#292929]">
                  <CheckCircle className="w-4 h-4 text-[#FF453A] flex-shrink-0" />
                  <span className="text-white text-xs sm:text-sm font-medium">Relational Databases (SQL)</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#000000] border border-[#292929]">
                  <CheckCircle className="w-4 h-4 text-[#FF453A] flex-shrink-0" />
                  <span className="text-white text-xs sm:text-sm font-medium">Python, Flask & Docker APIs</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {(aboutData && Array.isArray(aboutData.highlights) ? aboutData.highlights : []).map((pillar, index) => {
            const Icon = iconMap[pillar.icon] || BarChart3;
            return (
              <div
                key={index}
                className="bg-[#0D0D0D] border border-[#292929] hover:border-[#FF453A] rounded-2xl p-6 group hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#000000] border border-[#292929] text-[#FF453A] flex items-center justify-center mb-5 group-hover:border-[#FF453A] transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#B3B3B3] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
