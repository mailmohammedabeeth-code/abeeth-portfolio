import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import { 
  LineChart, 
  Terminal, 
  Layers, 
  Wrench, 
  Sparkles, 
  CheckCircle2,
  Filter
} from 'lucide-react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('All');

  const categoryIcons = {
    "Data Analytics": LineChart,
    "Programming": Terminal,
    "Python Libraries": Layers,
    "Other Technologies": Wrench
  };

  const safeSkills = Array.isArray(skillsData) ? skillsData : [];
  const categories = ["All", ...safeSkills.map(group => group.category)];

  const filteredSkills = activeTab === 'All' 
    ? safeSkills 
    : safeSkills.filter(group => group.category === activeTab);

  return (
    <section id="skills" className="py-8 sm:py-10 relative overflow-hidden bg-[#000000]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#FF453A]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D0D0D] border border-[#292929] text-xs font-mono mb-3">
            <span className="text-[#FF453A] font-bold">// 03</span>
            <span className="text-white">TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Technical <span className="text-[#FF453A]">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-[#FF453A] rounded-full mt-4" />
          <p className="mt-4 text-[#B3B3B3] max-w-2xl text-sm sm:text-base font-mono">
            Proficiencies across data analytics, modern programming, analytical Python frameworks, and developer workflows.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-mono transition-all duration-200 border ${
                activeTab === cat
                  ? 'bg-[#FF453A] text-black font-bold border-[#FF453A]'
                  : 'bg-[#0D0D0D] text-[#B3B3B3] border-[#292929] hover:text-white hover:border-[#888888]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredSkills.map((group) => {
            const Icon = categoryIcons[group.category] || LineChart;
            return (
              <div 
                key={group.category}
                className="bg-[#0D0D0D] border border-[#292929] hover:border-[#FF453A] rounded-2xl p-6 sm:p-8 relative flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-2">
                    <div className="w-11 h-11 rounded-xl bg-[#000000] border border-[#292929] text-[#FF453A] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {group.category}
                      </h3>
                      <p className="text-xs text-[#888888]">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills List within Category */}
                  <div className="mt-6 space-y-5">
                    {(Array.isArray(group.skills) ? group.skills : []).map((skill) => (
                      <div key={skill.name} className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs sm:text-sm">
                          <span className="font-semibold text-white flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FF453A]"></span>
                            {skill.name}
                          </span>
                          <span className="font-mono text-[#FF453A] text-xs font-bold">
                            {skill.level}%
                          </span>
                        </div>

                        {/* Progress Bar Container */}
                        <div className="w-full h-2 rounded-full bg-[#000000] border border-[#292929] overflow-hidden p-[1px]">
                          <div 
                            className="h-full rounded-full bg-[#FF453A] transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>

                        {/* Practical Context Highlight */}
                        <p className="text-[11px] text-[#888888] font-mono">
                          {skill.highlight}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Tag for Category */}
                <div className="mt-6 pt-4 border-t border-[#292929] flex items-center justify-between text-[11px] font-mono text-[#888888]">
                  <span>{group.skills.length} core tools</span>
                  <span className="text-white font-bold">Verified Hands-On</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Skill Philosophy Notice */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#888888] max-w-xl mx-auto italic font-mono">
            * Proficiency percentages are realistic assessments based on coursework, internship workflows, and independent project deployments rather than exaggerated claims.
          </p>
        </div>

      </div>
    </section>
  );
}
