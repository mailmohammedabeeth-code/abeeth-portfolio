import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { soundManager } from '../utils/soundEffects';
import { useRouter } from '../router/Router';
import SkillUniverse3D from './SkillUniverse3D';
import FullStackUnderConstruction from './FullStackUnderConstruction';
import {
  ArrowLeft,
  X,
  Terminal,
  Database,
  BarChart3,
  Cloud,
  BrainCircuit,
  Workflow,
  GraduationCap,
  Award,
  CheckCircle2,
  Github,
  Server,
  Layout,
  Boxes,
  Palette,
  Orbit,
  Cpu
} from 'lucide-react';

export default function SkillPortals({ onOpenResume }) {
  const { navigate } = useRouter();
  const [activePortalModal, setActivePortalModal] = useState(null);

  const portals = [
    {
      id: 'analytics',
      number: '01',
      planetName: 'ANALYTICS PRIME',
      title: 'DATA ANALYTICS',
      tagline: 'Transforming Unstructured Noise into Executive Clarity',
      tools: ['Microsoft Excel', 'SQL', 'Power BI', 'Tableau', 'Data Cleaning', 'Data Visualization', 'Statistical Analysis'],
      icon: BarChart3,
      accentColor: '#00F0FF',
      destinationType: 'route',
      destinationLabel: 'Dedicated Page: /expertise/data-analytics'
    },
    {
      id: 'python',
      number: '02',
      planetName: 'PYTHON SYNAPSE',
      title: 'PYTHON DEVELOPMENT',
      tagline: 'Engineering Resilient REST APIs, Automation & ML Pipelines',
      tools: ['Python 3.11', 'Flask', 'Pandas', 'NumPy', 'Matplotlib', 'PostgreSQL', 'REST APIs'],
      icon: Terminal,
      accentColor: '#38BDF8',
      destinationType: 'route',
      destinationLabel: 'Dedicated Page: /expertise/python-development'
    },
    {
      id: 'cloud',
      number: '03',
      planetName: 'NEXUS CLOUD',
      title: 'CLOUD ENGINEERING & DEVOPS',
      tagline: 'Building Scalable Cloud Infrastructure and Automated Deployment Pipelines',
      tools: ['AWS', 'Docker', 'Kubernetes', 'Linux', 'Git & GitHub', 'CI/CD', 'Jenkins', 'Terraform', 'Cloud Computing', 'Nginx'],
      icon: Cloud,
      accentColor: '#60A5FA',
      destinationType: 'route',
      destinationLabel: 'Dedicated Page: /expertise/cloud-devops'
    },
    {
      id: 'genai',
      number: '04',
      planetName: 'NEURAL HORIZON',
      title: 'GENERATIVE AI & MACHINE LEARNING PYTHON',
      tagline: 'Building Intelligent Applications with AI, Deep Learning and Python',
      tools: ['Python', 'Machine Learning', 'Deep Learning', 'Generative AI', 'LLMs', 'RAG', 'LangChain', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Faster R-CNN'],
      icon: BrainCircuit,
      accentColor: '#C084FC',
      destinationType: 'route',
      destinationLabel: 'Dedicated Page: /expertise/genai-ml-python'
    },
    {
      id: 'fullstack',
      number: '05',
      planetName: 'TITAN STACK',
      title: 'FULL STACK PYTHON DEVELOPER',
      tagline: 'Designing and Developing End-to-End Web Applications',
      tools: ['Python', 'Flask', 'Django', 'HTML5', 'CSS3', 'JavaScript', 'React.js', 'REST APIs', 'PostgreSQL', 'MySQL', 'Git'],
      icon: Layout,
      accentColor: '#34D399',
      destinationType: 'modal',
      destinationLabel: 'Full-Stack Web Systems & APIs'
    },
    {
      id: 'uiux',
      number: '06',
      planetName: 'AURORA DESIGN',
      title: 'UI/UX DESIGNER',
      tagline: 'Crafting Intuitive Digital Experiences Through Design, Creativity and User-Centered Thinking.',
      tools: ['Figma', 'Canva', 'Adobe Photoshop', 'Adobe Illustrator', 'Wireframing', 'Prototyping', 'User Research', 'User Interface Design', 'User Experience Design', 'Responsive Design', 'Design Systems'],
      icon: Palette,
      accentColor: '#FB7185',
      destinationType: 'route',
      destinationLabel: 'Dedicated Page: /expertise/uiux-design'
    },
    {
      id: 'story',
      number: '07',
      planetName: 'CHRONOS RECORD',
      title: 'MY STORY',
      tagline: 'From Academic Foundations to Building My Future in Tech',
      tools: ['B.E. Computer Science and Engineering — Sethu Institute (2026)', 'Junior Data Analyst Intern — Aatzy Technology (Dec 2025 – May 2026)', 'NPTEL Cloud Computing (2025)', 'NPTEL Human Computer Interaction (2025)', 'Simplilearn Verified Credentials'],
      icon: GraduationCap,
      accentColor: '#E2E8F0',
      destinationType: 'route',
      destinationLabel: 'About Me Section (#about)'
    },
    {
      id: 'lab',
      number: '08',
      planetName: 'SOLARIS LAB',
      title: 'PROJECT LAB',
      tagline: 'Exploring Ideas. Engineering Solutions. Building Real-World Applications.',
      tools: ['Brain Tumor Detection — Faster R-CNN', 'Help Desk Ticket Management System', 'Food Waste Tracker', 'Tamil Nadu Vegetable Sales Analytics Dashboard', 'God Eye View'],
      icon: Boxes,
      accentColor: '#FF453A',
      destinationType: 'route',
      destinationLabel: 'Project Door Gallery (#featured-projects)'
    }
  ];

  const handlePortalEnter = (portal) => {
    soundManager.playPortalWarp();

    // Preserve exact existing destinations
    if (portal.id === 'analytics') {
      navigate('/expertise/data-analytics');
    } else if (portal.id === 'python') {
      navigate('/expertise/python-development');
    } else if (portal.id === 'cloud') {
      navigate('/expertise/cloud-devops');
    } else if (portal.id === 'genai') {
      navigate('/expertise/genai-ml-python');
    } else if (portal.id === 'uiux') {
      navigate('/expertise/uiux-design');
    } else if (portal.id === 'story') {
      navigate('/#about');
    } else if (portal.id === 'lab') {
      navigate('/#featured-projects');
    } else {
      setActivePortalModal(portal);
    }
  };

  return (
    <section id="portals" className="py-8 sm:py-10 relative overflow-hidden bg-[#000000]">
      {/* Background celestial ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-[#FF453A]/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0D0D0D] border border-[#292929] text-[#FF453A] text-xs font-mono mb-3 shadow-sm">
            <Orbit className="w-3.5 h-3.5 text-[#FF453A] animate-spin" style={{ animationDuration: '10s' }} />
            <span>CELESTIAL ARCHITECTURE // 02</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight uppercase">
            ABEETH'S <span className="text-[#FF453A]">SKILL UNIVERSE</span>
          </h2>

          <div className="w-20 h-1 bg-[#FF453A] rounded-full mt-4" />
        </div>

        {/* THE 3D INTERACTIVE SKILL UNIVERSE (THREE.JS / WEBGL) */}
        <div className="w-full">
          <SkillUniverse3D
            portals={portals}
            onSelectPortal={handlePortalEnter}
            activeModalId={activePortalModal?.id}
          />
        </div>

      </div>

      {/* FULL-SCREEN IMMERSIVE MODAL (PRESERVING 100% OF ORIGINAL CONTENT) */}
      {activePortalModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl animate-fadeIn"
          onClick={() => setActivePortalModal(null)}
        >
          <div
            className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[#0D0D0D] border border-[#292929] p-5 sm:p-7 shadow-2xl text-[#FFFFFF]"
            onClick={(e) => e.stopPropagation()}
          >
            {activePortalModal.id === 'fullstack' ? (
              <FullStackUnderConstruction onClose={() => setActivePortalModal(null)} />
            ) : (
              <>
                {/* Top Bar with 'Back to Universe' & Exit Button */}
                <div className="flex items-center justify-between pb-4 border-b border-[#292929]">
              <button
                onClick={() => setActivePortalModal(null)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#000000] border border-[#292929] hover:border-[#FF453A] text-xs font-mono text-[#FF453A] hover:text-white transition-all group"
              >
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                <span>BACK TO UNIVERSE</span>
              </button>

              <button
                onClick={() => setActivePortalModal(null)}
                className="p-1.5 rounded-lg bg-[#000000] border border-[#292929] text-[#B3B3B3] hover:text-white hover:border-[#FF453A] transition-colors"
                title="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Portal Header */}
            <div className="mt-4 pb-6 border-b border-[#292929]">
              <span className="font-mono text-xs px-3 py-1 rounded-full bg-[#000000] text-[#FF453A] border border-[#292929] font-bold">
                PLANET {activePortalModal.number} // {activePortalModal.planetName || 'ORBITING DIMENSION'}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-3">
                {activePortalModal.title}
              </h2>
              <p className="text-[#B3B3B3] text-sm font-mono mt-1">
                "{activePortalModal.tagline}"
              </p>
            </div>

            {/* SPECIFIC WORLD CONTENT */}

            {/* WORLD 04: GENERATIVE AI & MACHINE LEARNING PYTHON */}
            {activePortalModal.id === 'genai' && (
              <div className="mt-8 space-y-6">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#FF453A] mb-2 font-bold">
                    Deep Learning, Computer Vision & LLM Architectures
                  </h4>
                  <p className="text-sm sm:text-base text-[#B3B3B3] leading-relaxed">
                    Building intelligent applications with AI, Deep Learning, and Python. From implementing customized object localization models like Faster R-CNN with ResNet-50 to exploring Generative AI, RAG pipelines, and LangChain for contextual reasoning.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                  <div className="p-4 rounded-xl bg-[#000000] border border-[#292929]">
                    <span className="text-[#FF453A] font-bold flex items-center gap-1.5 mb-1">
                      <BrainCircuit className="w-4 h-4" /> FASTER R-CNN & CV
                    </span>
                    <span className="text-[#B3B3B3] block">ResNet-50 feature extractor, region proposal networks (RPN), IoU optimization</span>
                  </div>
                  <div className="p-4 rounded-xl bg-[#000000] border border-[#292929]">
                    <span className="text-white font-bold flex items-center gap-1.5 mb-1">
                      <Workflow className="w-4 h-4 text-[#FF453A]" /> GENERATIVE AI & RAG
                    </span>
                    <span className="text-[#B3B3B3] block">Vector databases, document chunking, LangChain retrieval chains, prompt engineering</span>
                  </div>
                  <div className="p-4 rounded-xl bg-[#000000] border border-[#292929]">
                    <span className="text-white font-bold flex items-center gap-1.5 mb-1">
                      <Cpu className="w-4 h-4 text-[#FF453A]" /> ML SCIKIT-LEARN
                    </span>
                    <span className="text-[#B3B3B3] block">Feature scaling, classification pipelines, confusion matrix validation, cross-validation</span>
                  </div>
                </div>
              </div>
            )}


            {/* WORLD 06: UI/UX DESIGNER */}
            {activePortalModal.id === 'uiux' && (
              <div className="mt-8 space-y-6">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#FF453A] mb-2 font-bold">
                    Human-Centered Experience & Creative Product Design
                  </h4>
                  <p className="text-sm sm:text-base text-[#B3B3B3] leading-relaxed">
                    Crafting intuitive digital experiences through design, creativity, and user-centered thinking. Grounded by academic certification in Human Computer Interaction (NPTEL HCI), I translate complex technical workflows into accessible, aesthetically refined user interfaces.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                  <div className="p-4 rounded-xl bg-[#000000] border border-[#292929]">
                    <span className="text-[#FF453A] font-bold block mb-1">USER RESEARCH & EMPATHY</span>
                    <span className="text-[#B3B3B3] block">User interviews, persona synthesis, journey mapping, heuristic evaluation</span>
                  </div>
                  <div className="p-4 rounded-xl bg-[#000000] border border-[#292929]">
                    <span className="text-white font-bold block mb-1">WIREFRAMING & IA</span>
                    <span className="text-[#B3B3B3] block">Low-fidelity skeletal wireframes, user flow diagrams, content hierarchy</span>
                  </div>
                  <div className="p-4 rounded-xl bg-[#000000] border border-[#292929]">
                    <span className="text-white font-bold block mb-1">HIGH-FIDELITY PROTOTYPING</span>
                    <span className="text-[#B3B3B3] block">Interactive Figma click-throughs, component variants, smart animations</span>
                  </div>
                  <div className="p-4 rounded-xl bg-[#000000] border border-[#292929]">
                    <span className="text-[#FF453A] font-bold block mb-1">USABILITY & ACCESSIBILITY</span>
                    <span className="text-[#B3B3B3] block">WCAG contrast, cognitive ergonomics (NPTEL Human Computer Interaction)</span>
                  </div>
                </div>
              </div>
            )}

            {/* WORLD 07: PROJECT LAB */}
            {activePortalModal.id === 'lab' && (
              <div className="mt-8 space-y-5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#FF453A] font-bold">
                  Five Applied Innovations Deployed
                </h4>
                <div className="space-y-4">
                  {(Array.isArray(projectsData) ? projectsData : []).map((project) => (
                    <div key={project.id} className="p-4 rounded-xl bg-[#000000] border border-[#292929]">
                      <div className="flex items-center justify-between">
                        <h5 className="text-base font-bold text-white">{project.title}</h5>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#171717] text-white border border-[#292929]">
                          {project.badge}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#B3B3B3] mt-2 leading-relaxed">
                        {project.shortDescription}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {(Array.isArray(project.technologies) ? project.technologies : []).map((t, idx) => (
                          <span key={idx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#0D0D0D] border border-[#292929] text-[#B3B3B3]">
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="mt-3 pt-3 border-t border-[#292929] flex items-center justify-between text-xs font-mono">
                        <span className="text-[#888888]">Source Repository</span>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-[#FF453A] hover:underline"
                        >
                          <Github className="w-3.5 h-3.5" /> View Repo
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* WORLD 08: MY STORY */}
            {activePortalModal.id === 'story' && (
              <div className="mt-8 space-y-6">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#FF453A] mb-2 font-bold">
                    Academic Foundation & Professional Milestones
                  </h4>
                  <p className="text-sm sm:text-base text-[#B3B3B3] leading-relaxed">
                    From academic foundations at Sethu Institute of Technology to industry immersion at Aatzy Technology. Bridging analytical logic, engineering discipline, and user-centered creative problem-solving.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* College */}
                  <div className="p-4 rounded-xl bg-[#000000] border border-[#292929] flex items-start gap-4">
                    <GraduationCap className="w-8 h-8 text-[#FF453A] flex-shrink-0 mt-1" />
                    <div>
                      <span className="text-[10px] font-mono text-[#888888]">2022 – 2026</span>
                      <h5 className="text-base font-bold text-white">B.E. Computer Science and Engineering</h5>
                      <p className="text-xs text-[#B3B3B3]">Sethu Institute of Technology, Tamil Nadu, India</p>
                    </div>
                  </div>

                  {/* Internship */}
                  <div className="p-4 rounded-xl bg-[#000000] border border-[#292929] flex items-start gap-4">
                    <Award className="w-8 h-8 text-[#FF453A] flex-shrink-0 mt-1" />
                    <div>
                      <span className="text-[10px] font-mono text-[#888888]">DEC 2025 – MAY 2026</span>
                      <h5 className="text-base font-bold text-white">Junior Data Analyst Intern</h5>
                      <p className="text-xs text-[#B3B3B3]">Aatzy Technology • Scraping, Competitor Benchmarking, PostgreSQL & BI</p>
                    </div>
                  </div>

                  {/* Certifications */}
                  <div className="p-4 rounded-xl bg-[#000000] border border-[#292929] flex items-start gap-4">
                    <CheckCircle2 className="w-8 h-8 text-[#FF453A] flex-shrink-0 mt-1" />
                    <div>
                      <span className="text-[10px] font-mono text-[#888888]">ACADEMIC & INDUSTRY CREDENTIALS</span>
                      <h5 className="text-base font-bold text-white">NPTEL Elite & Simplilearn Certified Credentials</h5>
                      <p className="text-xs text-[#B3B3B3]">Cloud Computing (2025), Human Computer Interaction (2025), Python & SQL</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Modal Bottom Action Bar */}
            <div className="mt-8 pt-6 border-t border-[#292929] flex items-center justify-between">
              <span className="text-xs font-mono text-[#888888]">
                Candidate: <strong className="text-white">Mohammed Abeeth H (ABEETH)</strong> • <span className="text-[#B3B3B3]">Aspiring Software Engineer</span>
              </span>
              <button
                onClick={() => {
                  setActivePortalModal(null);
                  if (onOpenResume) onOpenResume();
                }}
                className="px-5 py-2.5 rounded-lg bg-[#FF453A] hover:bg-[#E03E34] text-black font-bold text-xs shadow-md transition-all"
              >
                Inspect Full Resume
              </button>
            </div>
              </>
            )}

          </div>
        </div>
      )}

    </section>
  );
}
