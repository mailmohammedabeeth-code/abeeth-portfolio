import React from 'react';
import { experienceData } from '../data/portfolioData';
import { 
  Calendar, 
  MapPin, 
  CheckCircle2
} from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-8 sm:py-10 relative overflow-hidden bg-[#000000]">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-[#FF453A]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D0D0D] border border-[#292929] text-xs font-mono mb-3">
            <span className="text-[#FF453A] font-bold">// 05</span>
            <span className="text-white">INDUSTRY IMMERSION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
            PROFESSIONAL <span className="text-[#FF453A]">EXPERIENCE</span>
          </h2>
          <div className="w-16 h-1 bg-[#FF453A] rounded-full mt-4" />
        </div>

        {/* Timeline Container - Full Content Width */}
        <div className="w-full">
          {(Array.isArray(experienceData) ? experienceData : []).map((exp, index) => {
            const safeResponsibilities = Array.isArray(exp.responsibilities) ? exp.responsibilities : [];
            const safeTech = Array.isArray(exp.technologies) 
              ? exp.technologies 
              : (Array.isArray(exp.tools) ? exp.tools : []);

            return (
              <div 
                key={index}
                className="relative pl-6 sm:pl-10 pb-6 border-l-2 border-[#292929] last:border-transparent group"
              >
                {/* Timeline marker node */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#000000] border-2 border-[#FF453A] group-hover:scale-125 transition-transform flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF453A]" />
                </div>

                {/* Experience Card */}
                <div className="bg-[#0D0D0D] border border-[#292929] hover:border-[#FF453A] rounded-2xl sm:rounded-3xl p-5 sm:p-8 relative transition-all duration-300 shadow-xl">
                  
                  {/* Header info */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#292929]">
                    <div className="flex items-start sm:items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#000000] border border-[#292929] text-[#FF453A] flex items-center justify-center font-bold text-lg font-mono">
                        AT
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-xl sm:text-2xl font-bold text-white">
                            {exp.role}
                          </h3>
                          <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-[#171717] text-[#FF453A] border border-[#292929] font-bold">
                            {exp.type}
                          </span>
                        </div>
                        <p className="text-base font-semibold text-[#FF453A] mt-0.5">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    {/* Period & Location Badge */}
                    <div className="flex flex-col sm:items-end text-xs font-mono text-[#888888] gap-1.5">
                      <span className="flex items-center gap-1.5 text-white bg-[#171717] px-3.5 py-1.5 rounded-full border border-[#292929]">
                        <Calendar className="w-3.5 h-3.5 text-[#FF453A]" /> {exp.period}
                      </span>
                      <span className="flex items-center gap-1 text-[#888888] sm:pr-2">
                        <MapPin className="w-3.5 h-3.5 text-[#888888]" /> {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Brief description */}
                  <p className="text-sm sm:text-base text-[#B3B3B3] mt-4 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Key Responsibilities list - Balanced 2-Column Grid */}
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#FF453A] mb-3 flex items-center gap-2 font-bold">
                      <CheckCircle2 className="w-4 h-4 text-[#FF453A]" /> Key Responsibilities & Industry Contributions:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm text-[#B3B3B3]">
                      {safeResponsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-3 p-3 rounded-xl bg-[#000000] border border-[#292929]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF453A] mt-1.5 flex-shrink-0" />
                          <span className="leading-relaxed text-white">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies applied */}
                  <div className="mt-8 pt-5 border-t border-[#292929] flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-[#888888] mr-2 uppercase tracking-wider font-semibold">TECH APPLIED:</span>
                    {safeTech.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-lg text-xs font-mono bg-[#000000] text-white border border-[#292929]"
                      >
                        {tech}
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
  );
}
