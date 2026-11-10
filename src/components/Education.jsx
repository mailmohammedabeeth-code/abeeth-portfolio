import React from 'react';
import { educationData } from '../data/portfolioData';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  BookOpen, 
  Award,
  ShieldCheck
} from 'lucide-react';

export default function Education() {
  const educations = Array.isArray(educationData) ? educationData : [];

  return (
    <section id="education" className="py-8 sm:py-10 relative overflow-hidden bg-[#000000]">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#FF453A]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D0D0D] border border-[#292929] text-xs font-mono mb-3">
            <span className="text-[#FF453A] font-bold">// 06</span>
            <span className="text-white">ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
            ACADEMIC <span className="text-[#FF453A]">JOURNEY</span>
          </h2>
          <div className="w-16 h-1 bg-[#FF453A] rounded-full mt-4" />
        </div>

        {/* Full-Width Timeline Container */}
        <div className="relative w-full">
          {/* Subtle vertical timeline connector line (desktop/tablet) */}
          <div className="hidden sm:block absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-[#FF453A] via-[#292929] to-[#292929]" />

          <div className="space-y-5 sm:space-y-6">
            {educations.map((edu, index) => {
              const stepNumber = edu.step || `0${index + 1}`;

              return (
                <div key={index} className="relative sm:pl-16">
                  {/* Timeline Node Badge (desktop/tablet) */}
                  <div className="hidden sm:flex absolute left-0 top-0 w-12 h-12 rounded-xl bg-[#000000] border-2 border-[#292929] group-hover:border-[#FF453A] items-center justify-center font-mono font-black text-sm text-[#FF453A] shadow-[0_0_15px_rgba(255,69,58,0.15)] z-10 transition-colors">
                    {stepNumber}
                  </div>

                  {/* Main Education Card */}
                  <div className="bg-[#0D0D0D] border border-[#292929] hover:border-[#FF453A]/70 rounded-2xl sm:rounded-3xl p-5 sm:p-8 relative transition-all duration-300 hover:shadow-[0_4px_30px_rgba(255,69,58,0.08)] group">
                    
                    {/* Top Row: Mobile Step Badge + Status + Score */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#292929]">
                      <div className="flex items-center gap-2.5">
                        {/* Mobile Step Pill */}
                        <span className="sm:hidden px-2.5 py-0.5 rounded-lg bg-[#000000] text-[#FF453A] font-mono text-xs font-black border border-[#FF453A]/40">
                          {stepNumber}
                        </span>

                        <span className="px-3.5 py-1 rounded-full text-xs font-mono bg-[#171717] text-[#FF453A] border border-[#292929] font-bold flex items-center gap-1.5">
                          <GraduationCap className="w-3.5 h-3.5 text-[#FF453A]" />
                          {edu.status}
                        </span>
                      </div>

                      {/* Prominent Score Badge (CGPA or Percentage) */}
                      {edu.score && (
                        <div className="px-3.5 py-1 rounded-full bg-[#171717] text-white border border-[#FF453A]/50 font-mono text-xs font-bold flex items-center gap-1.5 shadow-sm">
                          <Award className="w-3.5 h-3.5 text-[#FF453A]" />
                          <span>{edu.score}</span>
                        </div>
                      )}
                    </div>

                    {/* Degree & Institution */}
                    <div className="mt-5">
                      <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-[#FF453A] transition-colors tracking-tight">
                        {edu.degree}
                      </h3>
                      <p className="text-base sm:text-lg font-bold text-[#FF453A] mt-1.5 flex items-center gap-2 font-mono">
                        <span>{edu.institution}</span>
                      </p>
                    </div>

                    {/* Metadata: Period & Location */}
                    <div className="mt-4 flex flex-wrap gap-y-2 gap-x-5 text-xs font-mono text-[#888888] pb-5 border-b border-[#292929]">
                      <span className="flex items-center gap-1.5 text-white bg-[#000000] px-3 py-1 rounded border border-[#292929]">
                        <Calendar className="w-3.5 h-3.5 text-[#FF453A]" /> {edu.period}
                      </span>
                      <span className="flex items-center gap-1.5 text-[#888888] py-1">
                        <MapPin className="w-3.5 h-3.5 text-[#888888]" /> {edu.location}
                      </span>
                    </div>

                    {/* Academic Focus & Highlights - 2-Column Responsive Grid */}
                    {edu.highlights && edu.highlights.length > 0 && (
                      <div className="mt-6 space-y-3">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-white flex items-center gap-1.5 font-bold">
                          <BookOpen className="w-3.5 h-3.5 text-[#FF453A]" /> Key Highlights & Academic Focus:
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-[#B3B3B3]">
                          {edu.highlights.map((h, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#000000] border border-[#292929]">
                              <CheckCircle2 className="w-4 h-4 text-[#FF453A] mt-0.5 flex-shrink-0" />
                              <span className="leading-relaxed text-white">{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Affiliation / Board Footer */}
                    <div className="mt-6 pt-4 border-t border-[#292929] flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#888888]">
                      <span>{edu.affiliation || "Verified Academic Institution"}</span>
                      <span className="text-white font-semibold flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#FF453A]" /> Verified Record
                      </span>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
