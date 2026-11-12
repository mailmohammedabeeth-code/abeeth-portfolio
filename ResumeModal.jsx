import React from 'react';
import { personalInfo, educationData, experienceData, skillsData, projectsData, certificationsData } from '../data/portfolioData';
import { 
  X, 
  Download, 
  Printer, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  GraduationCap, 
  Briefcase, 
  Layers, 
  Award 
} from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-5xl max-h-[92vh] flex flex-col rounded-2xl bg-[#0D0D0D] border border-[#292929] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Controls Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#292929] bg-[#000000]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#FF453A]" />
            <span className="text-xs font-mono text-white font-semibold">
              Curriculum Vitae • Mohammed Abeeth H
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#171717] border border-[#292929] text-white hover:border-[#FF453A] text-xs font-mono transition-colors"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <a
              href={personalInfo.resumePdfUrl}
              download="Mohammed_Abeeth_H_Resume.pdf"
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-[#FF453A] hover:bg-[#E03E34] text-black text-xs font-bold transition-all shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[#171717] text-[#B3B3B3] hover:text-white border border-[#292929] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Document Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-white bg-[#000000]">
          
          {/* Header */}
          <div className="border-b border-[#292929] pb-6 flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <div className="w-20 h-20 rounded-xl overflow-hidden border border-[#292929] flex-shrink-0 bg-[#0D0D0D]">
              <img 
                src="/images/image(9).png" 
                alt="Mohammed Abeeth H" 
                className="w-full h-full object-cover object-[center_12%]"
              />
            </div>
            <div className="text-center sm:text-left flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {personalInfo.name}
                </h1>
                <span className="self-center sm:self-auto text-xs font-mono px-2 py-0.5 rounded bg-[#171717] text-[#FF453A] font-bold border border-[#292929]">
                  ABEETH
                </span>
              </div>
              <p className="text-sm font-mono text-[#FF453A] mt-1 font-semibold">
                {personalInfo.role}
              </p>

              <div className="mt-3 flex flex-wrap items-center justify-center sm:justify-start gap-y-2 gap-x-5 text-xs font-mono text-[#B3B3B3]">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#FF453A]" /> {personalInfo.email}
                </span>
                <a 
                  href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`} 
                  className="flex items-center gap-1.5 text-white hover:text-[#FF453A]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#FF453A]" /> {personalInfo.phone}
                </a>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#FF453A]" /> {personalInfo.location}
                </span>
                <a 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-1.5 text-white hover:text-[#FF453A]"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#FF453A]" /> LinkedIn
                </a>
                <a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-1.5 text-white hover:text-[#FF453A]"
                >
                  <Github className="w-3.5 h-3.5 text-[#FF453A]" /> GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#FF453A] font-bold mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-[#B3B3B3] leading-relaxed">
              Aspiring Software Engineer graduating in Computer Science and Engineering from Sethu Institute of Technology (2026). Hands-on proficiency in Python, Flask, Docker containerization, PostgreSQL, SQL querying, data manipulation with Pandas and NumPy, and business analytics dashboards using Microsoft Excel and Power BI. Committed to transforming complex data into clear strategic intelligence and engineering robust, scalable software.
            </p>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#FF453A] font-bold mb-4 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-[#FF453A]" /> Work Experience
            </h2>
            {(Array.isArray(experienceData) ? experienceData : []).map((exp, idx) => (
              <div key={idx} className="space-y-2 p-4 rounded-xl bg-[#0D0D0D] border border-[#292929]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h3 className="text-sm font-bold text-white">
                    {exp.role} — <span className="text-[#FF453A]">{exp.company}</span>
                  </h3>
                  <span className="text-xs font-mono text-[#888888]">
                    {exp.period} | {exp.location}
                  </span>
                </div>
                <ul className="list-disc list-inside space-y-1.5 text-xs text-[#B3B3B3] pl-1">
                  {(Array.isArray(exp.responsibilities) ? exp.responsibilities : []).map((r, rIdx) => (
                    <li key={rIdx}>{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Featured Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#FF453A] font-bold mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#FF453A]" /> Featured Projects
            </h2>
            <div className="space-y-3">
              {(Array.isArray(projectsData) ? projectsData : []).map((proj) => (
                <div key={proj.id} className="p-3.5 rounded-xl bg-[#0D0D0D] border border-[#292929]">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs sm:text-sm font-bold text-white">
                      {proj.title}
                    </h3>
                    <span className="text-[11px] font-mono text-[#FF453A]">
                      {(Array.isArray(proj.technologies) ? proj.technologies : []).slice(0, 3).join(', ')}
                    </span>
                  </div>
                  <p className="text-xs text-[#B3B3B3] mt-1">
                    {proj.shortDescription}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#FF453A] font-bold mb-3">
              Technical Proficiencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {(Array.isArray(skillsData) ? skillsData : []).map((grp) => (
                <div key={grp.category} className="p-3 rounded-lg bg-[#0D0D0D] border border-[#292929]">
                  <span className="font-bold text-white block mb-1">{grp.category}:</span>
                  <span className="text-[#B3B3B3]">
                    {(Array.isArray(grp.skills) ? grp.skills : []).map(s => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-[#FF453A] font-bold mb-2 flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-[#FF453A]" /> Education
              </h2>
              <div className="text-xs space-y-1 p-3 rounded-lg bg-[#0D0D0D] border border-[#292929]">
                <div className="font-bold text-white">B.E. Computer Science and Engineering</div>
                <div className="text-[#888888]">Sethu Institute of Technology (2022 – 2026)</div>
                <div className="text-[#FF453A] font-mono">Class of 2026</div>
              </div>
            </div>

            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-[#FF453A] font-bold mb-2 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#FF453A]" /> Certifications
              </h2>
              <ul className="text-xs space-y-1.5 text-[#B3B3B3] p-3 rounded-lg bg-[#0D0D0D] border border-[#292929]">
                {(Array.isArray(certificationsData) ? certificationsData : []).map((c, idx) => (
                  <li key={idx} className="flex justify-between">
                    <span>• {c.title} ({c.issuer})</span>
                    <span className="font-mono text-[#888888]">{c.year}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
