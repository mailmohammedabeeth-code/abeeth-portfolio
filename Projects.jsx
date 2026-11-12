import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { 
  Github, 
  ExternalLink, 
  Eye, 
  X, 
  CheckCircle,
  Server,
  Globe2,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight
} from 'lucide-react';

/* =========================================================================
   1. SCULPTURAL BRONZE-WALNUT RELIEF DOOR LEAF
   Inspired directly by the uploaded architectural geometric door reference:
   - Sweeping concentric arc bands & radiating acoustic ripple grooves
   - Concentric circular boss medallions with raised 3D convex centers
   - Central arched field with 3D hexagonal honeycomb relief matrix
   - Left vertical column: upper grid matrix, horizontal fluted louvers, lower grid
   - Lower ashlar / brickwork masonry textured panel & embossed hexagonal shield
   - Sleek modern horizontal lever handle on square escutcheon with keyhole
   - Multi-stepped architectural frame with layered metallic bronze mouldings
   ========================================================================= */
function SculpturalBronzeDoorLeaf({ project, roomNumber, isDoorOpen, isDoorHovered }) {
  return (
    <div
      className="absolute inset-1 rounded-sm z-10 select-none transition-transform duration-700 ease-out origin-right pointer-events-none"
      style={{
        transformStyle: 'preserve-3d',
        transform: isDoorOpen
          ? 'rotateY(88deg)'
          : (isDoorHovered ? 'rotateY(10deg)' : 'rotateY(0deg)'),
        boxShadow: isDoorOpen
          ? '-6px 0 25px rgba(0,0,0,0.9)'
          : (isDoorHovered
              ? '-8px 0 25px rgba(0,0,0,0.95), inset 1px 0 4px rgba(255,255,255,0.1)'
              : 'inset 0 0 15px rgba(0,0,0,0.85), inset 0 1px 2px rgba(255,255,255,0.08)')
      }}
    >
      <svg
        className="w-full h-full block rounded-sm overflow-hidden"
        viewBox="0 0 240 400"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Base Bronze-Walnut Metallic Gradients */}
          <linearGradient id="bronzeBase" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#684a36" />
            <stop offset="35%" stopColor="#4e3526" />
            <stop offset="70%" stopColor="#382519" />
            <stop offset="100%" stopColor="#25170f" />
          </linearGradient>

          <linearGradient id="bronzeLight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#9c785b" />
            <stop offset="50%" stopColor="#6d4f39" />
            <stop offset="100%" stopColor="#3f2b1d" />
          </linearGradient>

          <linearGradient id="bronzeHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#c5a282" />
            <stop offset="45%" stopColor="#8d694e" />
            <stop offset="100%" stopColor="#483222" />
          </linearGradient>

          <linearGradient id="creviceShadow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#120b07" />
            <stop offset="100%" stopColor="#22150e" />
          </linearGradient>

          <linearGradient id="metalHandleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e3c2a3" />
            <stop offset="25%" stopColor="#af8b6c" />
            <stop offset="65%" stopColor="#644833" />
            <stop offset="100%" stopColor="#332216" />
          </linearGradient>

          {/* Radial Gradient for 3D Convex Boss Medallions */}
          <radialGradient id="bossGrad" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#c9ab90" />
            <stop offset="40%" stopColor="#7e5c43" />
            <stop offset="80%" stopColor="#432c1c" />
            <stop offset="100%" stopColor="#1c110a" />
          </radialGradient>

          {/* Honeycomb Pattern for Central Arched Zone */}
          <pattern id="honeycombPat" width="14" height="24.2" patternUnits="userSpaceOnUse" patternTransform="scale(0.8)">
            <path
              d="M 7,0 L 14,4 L 14,12.1 L 7,16.1 L 0,12.1 L 0,4 Z M 0,24.2 L 7,20.2 L 14,24.2"
              fill="#2b1c12"
              stroke="#8a674d"
              strokeWidth="0.8"
            />
            <path
              d="M 7,2 L 12,5 L 12,11 L 7,14 L 2,11 L 2,5 Z"
              fill="#1e130c"
              stroke="#583e2c"
              strokeWidth="0.5"
            />
          </pattern>

          {/* Brickwork / Ashlar Masonry Pattern for Lower Sector */}
          <pattern id="brickPat" width="24" height="12" patternUnits="userSpaceOnUse">
            <rect width="24" height="12" fill="#2b1c12" />
            <line x1="0" y1="0" x2="24" y2="0" stroke="#140c07" strokeWidth="1" />
            <line x1="0" y1="6" x2="24" y2="6" stroke="#140c07" strokeWidth="1" />
            <line x1="0" y1="0" x2="0" y2="6" stroke="#140c07" strokeWidth="1" />
            <line x1="12" y1="6" x2="12" y2="12" stroke="#140c07" strokeWidth="1" />
            {/* Top bevel highlights */}
            <line x1="0.5" y1="1" x2="23.5" y2="1" stroke="#6e5038" strokeWidth="0.6" opacity="0.6" />
            <line x1="0.5" y1="7" x2="23.5" y2="7" stroke="#6e5038" strokeWidth="0.6" opacity="0.6" />
          </pattern>

          {/* Clip path for the central arched honeycomb panel */}
          <clipPath id="honeycombClip">
            <path d="M 68,114 C 112,115 168,142 208,206 L 208,212 L 118,212 L 68,212 Z" />
          </clipPath>

          {/* Clip path for the sweeping wave ripples */}
          <clipPath id="wavesClip">
            <path d="M 68,20 C 115,22 178,52 220,116 L 220,204 C 178,140 115,112 68,112 Z" />
          </clipPath>

          {/* Clip path for lower brickwork */}
          <clipPath id="brickClip">
            <path d="M 118,214 L 220,214 L 220,380 L 118,380 Z" />
          </clipPath>
        </defs>

        {/* ========================================================
            1. MULTI-LAYERED ARCHITECTURAL CASING / DOOR LEAF BORDER
            ======================================================== */}
        <rect x="2" y="2" width="236" height="396" fill="url(#bronzeBase)" stroke="#160e08" strokeWidth="3" />
        <rect x="6" y="6" width="228" height="388" fill="none" stroke="#7e5d44" strokeWidth="1" opacity="0.7" />
        <rect x="10" y="10" width="220" height="380" fill="#24170e" stroke="#120a06" strokeWidth="2.5" />
        <rect x="14" y="14" width="212" height="372" fill="url(#bronzeBase)" stroke="#5d422e" strokeWidth="1.2" />

        {/* ========================================================
            2. LEFT VERTICAL COLUMN (STILE & MATRIX PANELS)
            ======================================================== */}
        {/* Left Stile Background Field */}
        <rect x="18" y="18" width="50" height="364" fill="#22150d" stroke="#120a06" strokeWidth="1" />
        <line x1="68" y1="18" x2="68" y2="382" stroke="#120a06" strokeWidth="2.5" />
        <line x1="69" y1="18" x2="69" y2="382" stroke="#87664c" strokeWidth="0.8" opacity="0.8" />

        {/* A. Upper Geometric Grid (y: 20 to 116) */}
        <g stroke="#120a06" strokeWidth="1.2">
          {/* Row 1 */}
          <rect x="20" y="22" width="10" height="14" fill="#2c1d13" />
          <rect x="32" y="22" width="20" height="14" fill="#352317" />
          <rect x="54" y="22" width="12" height="14" fill="#2c1d13" />

          {/* Row 2 */}
          <rect x="20" y="38" width="14" height="22" fill="#352317" />
          <rect x="36" y="38" width="14" height="22" fill="#2c1d13" />
          <rect x="52" y="38" width="14" height="22" fill="#352317" />

          {/* Row 3 */}
          <rect x="20" y="62" width="20" height="12" fill="#2c1d13" />
          <rect x="42" y="62" width="12" height="12" fill="#352317" />
          <rect x="56" y="62" width="10" height="12" fill="#2c1d13" />

          {/* Row 4 */}
          <rect x="20" y="76" width="14" height="18" fill="#352317" />
          <rect x="36" y="76" width="14" height="18" fill="#2c1d13" />
          <rect x="52" y="76" width="14" height="18" fill="#352317" />

          {/* Row 5 */}
          <rect x="20" y="96" width="10" height="18" fill="#2c1d13" />
          <rect x="32" y="96" width="18" height="18" fill="#352317" />
          <rect x="52" y="96" width="14" height="18" fill="#2c1d13" />

          {/* Inner Highlight Accents */}
          <line x1="21" y1="23" x2="65" y2="23" stroke="#7e5d44" strokeWidth="0.8" opacity="0.6" />
          <line x1="21" y1="63" x2="65" y2="63" stroke="#7e5d44" strokeWidth="0.8" opacity="0.6" />
          <line x1="21" y1="97" x2="65" y2="97" stroke="#7e5d44" strokeWidth="0.8" opacity="0.6" />
        </g>

        {/* B. Middle Fluted Louvers (y: 118 to 244) */}
        <g>
          <rect x="19" y="118" width="48" height="128" fill="#20130b" stroke="#120a06" strokeWidth="1" />
          {[
            122, 130, 138, 146, 154, 162, 170, 178, 186, 194, 202, 210, 218, 226, 234, 242
          ].map((yPos, idx) => (
            <g key={idx}>
              {/* Slat Top Highlight */}
              <line x1="20" y1={yPos} x2="66" y2={yPos} stroke="#8f6c4f" strokeWidth="1.2" />
              {/* Slat Body */}
              <rect x="20" y={yPos + 0.6} width="46" height="5" fill="#442e20" />
              {/* Slat Recessed Shadow */}
              <line x1="20" y1={yPos + 6} x2="66" y2={yPos + 6} stroke="#110905" strokeWidth="1.6" />
            </g>
          ))}
        </g>

        {/* C. Lower Geometric Grid (y: 248 to 380) */}
        <g stroke="#120a06" strokeWidth="1.2">
          {/* Row 1 */}
          <rect x="20" y="250" width="12" height="18" fill="#2c1d13" />
          <rect x="34" y="250" width="20" height="18" fill="#352317" />
          <rect x="56" y="250" width="10" height="18" fill="#2c1d13" />

          {/* Row 2 */}
          <rect x="20" y="270" width="18" height="14" fill="#352317" />
          <rect x="40" y="270" width="12" height="14" fill="#2c1d13" />
          <rect x="54" y="270" width="12" height="14" fill="#352317" />

          {/* Row 3 */}
          <rect x="20" y="286" width="14" height="22" fill="#2c1d13" />
          <rect x="36" y="286" width="14" height="22" fill="#352317" />
          <rect x="52" y="286" width="14" height="22" fill="#2c1d13" />

          {/* Row 4 */}
          <rect x="20" y="310" width="22" height="14" fill="#352317" />
          <rect x="44" y="310" width="10" height="14" fill="#2c1d13" />
          <rect x="56" y="310" width="10" height="14" fill="#352317" />

          {/* Row 5 */}
          <rect x="20" y="326" width="12" height="20" fill="#2c1d13" />
          <rect x="34" y="326" width="18" height="20" fill="#352317" />
          <rect x="54" y="326" width="12" height="20" fill="#2c1d13" />

          {/* Row 6 */}
          <rect x="20" y="348" width="14" height="16" fill="#352317" />
          <rect x="36" y="348" width="16" height="16" fill="#2c1d13" />
          <rect x="54" y="348" width="12" height="16" fill="#352317" />

          {/* Row 7 */}
          <rect x="20" y="366" width="18" height="14" fill="#2c1d13" />
          <rect x="40" y="366" width="12" height="14" fill="#352317" />
          <rect x="54" y="366" width="12" height="14" fill="#2c1d13" />
        </g>

        {/* ========================================================
            3. HARDWARE: MODERN BRONZE LEVER HANDLE & KEYHOLE
            ======================================================== */}
        <g filter="drop-shadow(1px 2px 3px rgba(0,0,0,0.8))">
          {/* Main Handle Backplate (Square Escutcheon) */}
          <rect x="13" y="174" width="14" height="14" rx="1.5" fill="url(#metalHandleGrad)" stroke="#1a110a" strokeWidth="1" />
          <rect x="14.5" y="175.5" width="11" height="11" rx="1" fill="none" stroke="#e0c2a4" strokeWidth="0.6" opacity="0.8" />
          
          {/* Sleek Horizontal Lever Handle */}
          <path
            d="M 18,179 L 46,179 C 48,179 49,180 49,182 C 49,184 48,185 46,185 L 18,185 Z"
            fill="url(#metalHandleGrad)"
            stroke="#160e08"
            strokeWidth="0.8"
          />
          {/* Lever Top Highlight */}
          <line x1="19" y1="180" x2="46" y2="180" stroke="#f2ddcb" strokeWidth="0.8" />
          {/* Handle Pivot Rose */}
          <circle cx="20" cy="182" r="3.2" fill="#583f2e" stroke="#c09d7f" strokeWidth="0.8" />

          {/* Separate Square Deadbolt Keyhole Escutcheon */}
          <rect x="14" y="196" width="12" height="12" rx="1.5" fill="url(#metalHandleGrad)" stroke="#1a110a" strokeWidth="1" />
          <rect x="15" y="197" width="10" height="10" rx="1" fill="none" stroke="#e0c2a4" strokeWidth="0.5" opacity="0.7" />
          <circle cx="20" cy="201" r="1.8" fill="#140b06" />
          <rect x="19.2" y="201" width="1.6" height="3" fill="#140b06" />
        </g>

        {/* ========================================================
            4. SWEEPING UPPER CURVED ARCH & CONCENTRIC RIPPLE GROOVES
            ======================================================== */}
        {/* Background Field for Upper Curved Zone */}
        <path
          d="M 68,18 L 222,18 L 222,204 C 180,140 120,112 68,112 Z"
          fill="#271810"
        />

        {/* Sweeping Waves & Acoustic Ripples */}
        <g clipPath="url(#wavesClip)" opacity="0.9">
          {[
            { cx: 184, cy: 56, r: 42 },
            { cx: 184, cy: 56, r: 52 },
            { cx: 184, cy: 56, r: 62 },
            { cx: 184, cy: 56, r: 74 },
            { cx: 184, cy: 56, r: 86 },
            { cx: 184, cy: 56, r: 98 },
            { cx: 184, cy: 56, r: 112 },
            { cx: 184, cy: 56, r: 126 },
            { cx: 184, cy: 56, r: 140 },
            { cx: 184, cy: 56, r: 156 },
            { cx: 184, cy: 56, r: 172 },
            { cx: 184, cy: 56, r: 190 }
          ].map((c, i) => (
            <g key={i}>
              <circle cx={c.cx} cy={c.cy} r={c.r} fill="none" stroke="#120a06" strokeWidth="2.5" />
              <circle cx={c.cx} cy={c.cy} r={c.r - 0.7} fill="none" stroke="#87654b" strokeWidth="1.2" />
            </g>
          ))}
        </g>

        {/* Bold Raised Dividing Arc Rib */}
        <path
          d="M 68,112 C 122,112 184,142 222,208"
          fill="none"
          stroke="#120905"
          strokeWidth="6"
        />
        <path
          d="M 68,112 C 122,112 184,142 222,208"
          fill="none"
          stroke="url(#bronzeHighlight)"
          strokeWidth="3.5"
        />

        {/* Outer Perimeter Sweeping Arch Rib */}
        <path
          d="M 68,24 C 122,26 186,60 220,126"
          fill="none"
          stroke="#140a06"
          strokeWidth="5"
        />
        <path
          d="M 68,24 C 122,26 186,60 220,126"
          fill="none"
          stroke="#947155"
          strokeWidth="2.5"
        />

        {/* Concentric Medallion in Upper Right */}
        <g>
          {/* Outermost Ring */}
          <circle cx="178" cy="62" r="32" fill="none" stroke="#140b06" strokeWidth="4" />
          <circle cx="178" cy="62" r="32" fill="none" stroke="#8c6a4e" strokeWidth="2" />
          {/* Middle Ring */}
          <circle cx="178" cy="62" r="22" fill="none" stroke="#140b06" strokeWidth="3" />
          <circle cx="178" cy="62" r="22" fill="none" stroke="#aa8669" strokeWidth="1.5" />
          {/* Center Raised Boss Disc */}
          <circle cx="178" cy="62" r="13" fill="url(#bossGrad)" stroke="#160d08" strokeWidth="2" filter="drop-shadow(1px 2px 3px rgba(0,0,0,0.8))" />
          <circle cx="178" cy="62" r="13" fill="none" stroke="#f0d5be" strokeWidth="0.8" opacity="0.6" />
        </g>

        {/* Upper-Left Boss Disc inside the Arc */}
        <g>
          <circle cx="88" cy="46" r="11" fill="url(#bossGrad)" stroke="#160d08" strokeWidth="2" filter="drop-shadow(1px 2px 3px rgba(0,0,0,0.8))" />
          <circle cx="88" cy="46" r="11" fill="none" stroke="#f0d5be" strokeWidth="0.8" opacity="0.6" />
        </g>

        {/* Secondary Upper Boss Disc */}
        <g>
          <circle cx="136" cy="34" r="8" fill="url(#bossGrad)" stroke="#160d08" strokeWidth="1.5" />
          <circle cx="136" cy="34" r="8" fill="none" stroke="#eed3bc" strokeWidth="0.7" opacity="0.6" />
        </g>

        {/* ========================================================
            5. CENTER ARCHED HONEYCOMB 3D RELIEF FIELD
            ======================================================== */}
        <path
          d="M 68,114 C 112,115 168,142 208,206 L 208,212 L 118,212 L 68,212 Z"
          fill="url(#honeycombPat)"
          stroke="#140a06"
          strokeWidth="2"
        />
        {/* Subtle Inner Bevel Shadow */}
        <path
          d="M 68,114 C 112,115 168,142 208,206"
          fill="none"
          stroke="#100804"
          strokeWidth="3"
          opacity="0.8"
        />

        {/* ========================================================
            6. LOWER BRICKWORK & EMBOSSED GEOMETRIC ACCENTS
            ======================================================== */}
        {/* Vertical Separator between Lower-Left and Lower-Right */}
        <line x1="118" y1="212" x2="118" y2="382" stroke="#120a06" strokeWidth="2.5" />
        <line x1="119" y1="212" x2="119" y2="382" stroke="#7e5d43" strokeWidth="0.8" opacity="0.7" />

        {/* Diagonal Slanted Plate Divider (Below Honeycomb) */}
        <path
          d="M 68,212 L 222,212 L 222,228 L 118,238 L 68,212 Z"
          fill="url(#bronzeLight)"
          stroke="#140a06"
          strokeWidth="1.5"
        />

        {/* Brickwork Panel */}
        <g clipPath="url(#brickClip)">
          <rect x="118" y="214" width="104" height="168" fill="url(#brickPat)" />
        </g>

        {/* Boss Disc at Top of Brickwork */}
        <g>
          <circle cx="132" cy="236" r="10" fill="url(#bossGrad)" stroke="#160d08" strokeWidth="2" filter="drop-shadow(1px 2px 3px rgba(0,0,0,0.8))" />
          <circle cx="132" cy="236" r="10" fill="none" stroke="#f0d5be" strokeWidth="0.7" opacity="0.6" />
        </g>

        {/* Small Boss Disc along Left Edge */}
        <g>
          <circle cx="118" cy="286" r="6" fill="url(#bossGrad)" stroke="#160d08" strokeWidth="1.2" />
        </g>

        {/* Large Concentric Medallion on the Lower Right */}
        <g>
          {/* Outer Ring */}
          <circle cx="186" cy="272" r="22" fill="none" stroke="#140b06" strokeWidth="3" />
          <circle cx="186" cy="272" r="22" fill="none" stroke="#8e6c51" strokeWidth="1.5" />
          {/* Inner Raised Boss */}
          <circle cx="186" cy="272" r="13" fill="url(#bossGrad)" stroke="#160d08" strokeWidth="2" filter="drop-shadow(1px 2px 3px rgba(0,0,0,0.8))" />
          <circle cx="186" cy="272" r="13" fill="none" stroke="#f0d5be" strokeWidth="0.8" opacity="0.6" />
        </g>

        {/* Embossed Hexagonal Badge at Bottom Right */}
        <g filter="drop-shadow(1px 2px 3px rgba(0,0,0,0.8))">
          {/* Outer Hexagon */}
          <polygon
            points="174,336 190,326 206,336 206,356 190,366 174,356"
            fill="url(#bronzeLight)"
            stroke="#160e08"
            strokeWidth="2"
          />
          {/* Inner Hexagon Bevel */}
          <polygon
            points="178,338 190,330 202,338 202,354 190,362 178,354"
            fill="#291a11"
            stroke="#aa8668"
            strokeWidth="1.2"
          />
          {/* Center Hex Accent */}
          <polygon
            points="183,341 190,336 197,341 197,351 190,356 183,351"
            fill="url(#bossGrad)"
            stroke="#140c07"
            strokeWidth="1"
          />
        </g>

        {/* Bottom Right Angular Contour Bevel Plate */}
        <path
          d="M 206,270 L 222,270 L 222,382 L 194,382 L 180,368 L 206,356 Z"
          fill="#24170f"
          stroke="#120a06"
          strokeWidth="1.5"
          opacity="0.6"
        />

        {/* Lintel Room Indicator Badge on Top Stile */}
        <g>
          <rect x="74" y="22" width="60" height="15" rx="3" fill="#140b06" stroke="#5d422f" strokeWidth="0.8" />
          <text x="104" y="32" fill="#d4a373" fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle" letterSpacing="1">
            ROOM {roomNumber}
          </text>
        </g>

      </svg>

      {/* Solid Wood Door 3D Thickness Edge (Visible on the left swinging edge as door rotates) */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-3 origin-left bg-[#1c120a] border-r border-[#3a2517] shadow-lg"
        style={{
          transform: 'rotateY(-90deg)'
        }}
      />
    </div>
  );
}

/* =========================================================================
   2. MAIN FEATURED PROJECTS COMPONENT
   ========================================================================= */
export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [openedDoorId, setOpenedDoorId] = useState(null);
  const [hoveredDoorId, setHoveredDoorId] = useState(null);
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = [
    'All', 
    'AI & Machine Learning', 
    'Data Analytics & Dashboards', 
    'Web & Backend Systems', 
    'Geospatial & Visualization'
  ];

  const safeProjects = Array.isArray(projectsData) ? projectsData : [];
  const filteredProjects = selectedFilter === 'All'
    ? safeProjects
    : safeProjects.filter(p => p.category === selectedFilter);

  // Custom visual mockup renderer for each project type
  const renderProjectVisual = (visualType, title) => {
    switch (visualType) {
      case 'ai-vision':
        return (
          <div className="w-full h-48 sm:h-52 bg-[#000000] relative flex items-center justify-center p-4 overflow-hidden border-b border-[#292929]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#292929_1px,transparent_1px),linear-gradient(to_bottom,#292929_1px,transparent_1px)] bg-[size:20px_20px] opacity-25" />
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="relative w-28 h-28 rounded-full border border-[#292929] flex items-center justify-center bg-[#0A0A0A] backdrop-blur-sm">
                <div className="w-20 h-20 rounded-full border border-dashed border-[#FF453A]/40 animate-spin" style={{ animationDuration: '25s' }} />
                
                <div className="absolute top-5 right-5 w-11 h-11 border-2 border-[#FF453A] bg-[#FF453A]/20 rounded flex flex-col justify-between p-0.5 animate-pulse">
                  <span className="text-[7px] font-mono font-bold text-white leading-none">IoU: 0.89</span>
                  <span className="text-[6px] font-mono text-black bg-[#FF453A] px-0.5 rounded-sm font-bold">Tumor</span>
                </div>
                
                <Cpu className="w-6 h-6 text-white opacity-80" />
              </div>
              <div className="mt-2.5 flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#171717] text-white border border-[#292929]">Faster R-CNN</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#171717] text-[#FF453A] border border-[#292929]">ResNet-50</span>
              </div>
            </div>

            <div className="absolute inset-x-0 h-[2px] bg-[#FF453A] shadow-[0_0_10px_#FF453A]" style={{ top: '45%' }} />
          </div>
        );

      case 'ticket-system':
        return (
          <div className="w-full h-48 sm:h-52 bg-[#000000] relative flex flex-col justify-center p-5 overflow-hidden border-b border-[#292929]">
            <div className="w-full max-w-xs mx-auto space-y-2">
              <div className="flex items-center justify-between text-[10px] font-mono text-[#888888] pb-1 border-b border-[#292929]">
                <span className="flex items-center gap-1.5 text-white">
                  <Server className="w-3 h-3 text-[#FF453A]" /> REST API /v1/tickets
                </span>
                <span className="text-[#FF453A]">200 OK • PostgreSQL</span>
              </div>

              <div className="p-2.5 rounded-lg bg-[#0D0D0D] border border-[#292929] flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FF453A]" />
                  <span className="text-xs font-mono text-white">#TK-1082 Database sync failure</span>
                </div>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#171717] text-[#FF453A] border border-[#292929]">P1 High</span>
              </div>

              <div className="p-2.5 rounded-lg bg-[#0D0D0D] border border-[#292929] flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-white" />
                  <span className="text-xs font-mono text-white">#TK-1083 User Auth endpoint</span>
                </div>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#171717] text-white border border-[#292929]">Resolved</span>
              </div>
            </div>
          </div>
        );

      case 'food-waste':
        return (
          <div className="w-full h-48 sm:h-52 bg-[#000000] relative flex flex-col justify-center items-center p-4 overflow-hidden border-b border-[#292929]">
            <div className="relative z-10 w-full max-w-xs bg-[#0D0D0D] rounded-xl p-3 border border-[#292929] shadow-lg">
              <div className="flex items-center justify-between text-[11px] font-mono mb-2">
                <span className="text-white flex items-center gap-1">
                  Waste Audit Tracker
                </span>
                <span className="text-[#FF453A] bg-[#171717] px-2 py-0.5 rounded border border-[#292929]">
                  -34% Wastage
                </span>
              </div>

              <div className="grid grid-cols-5 gap-1.5 h-16 items-end pt-2 pb-1">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-full bg-[#292929] rounded-t h-10" />
                  <span className="text-[9px] font-mono text-[#888888]">Mon</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-full bg-[#292929] rounded-t h-12" />
                  <span className="text-[9px] font-mono text-[#888888]">Tue</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-full bg-[#FF453A] rounded-t h-14" />
                  <span className="text-[9px] font-mono text-white">Wed</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-full bg-[#292929] rounded-t h-8" />
                  <span className="text-[9px] font-mono text-[#888888]">Thu</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-full bg-[#292929] rounded-t h-6" />
                  <span className="text-[9px] font-mono text-[#888888]">Fri</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'excel-dashboard':
        return (
          <div className="w-full h-48 sm:h-52 bg-[#000000] relative flex flex-col justify-center p-4 overflow-hidden border-b border-[#292929]">
            <div className="w-full max-w-sm mx-auto bg-[#0D0D0D] rounded-xl p-3 border border-[#292929] shadow-lg space-y-2">
              <div className="flex items-center justify-between text-[10px] font-mono border-b border-[#292929] pb-1.5">
                <span className="text-white font-bold flex items-center gap-1">
                  TN Vegetable Sales (Jan–Feb 2026)
                </span>
                <span className="text-[#FF453A]">Pivot Slicers</span>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-1.5 rounded bg-[#000000] border border-[#292929]">
                  <div className="text-[9px] text-[#888888] font-mono">Revenue</div>
                  <div className="text-xs font-bold text-[#FF453A] font-mono">₹4.82L</div>
                </div>
                <div className="p-1.5 rounded bg-[#000000] border border-[#292929]">
                  <div className="text-[9px] text-[#888888] font-mono">Top Item</div>
                  <div className="text-xs font-bold text-white font-mono">Tomato</div>
                </div>
                <div className="p-1.5 rounded bg-[#000000] border border-[#292929]">
                  <div className="text-[9px] text-[#888888] font-mono">Avg Price</div>
                  <div className="text-xs font-bold text-white font-mono">₹38/kg</div>
                </div>
              </div>

              <div className="flex gap-1.5 text-[8px] font-mono">
                <span className="px-1.5 py-0.5 rounded bg-[#171717] text-white border border-[#292929]">Madurai</span>
                <span className="px-1.5 py-0.5 rounded bg-[#171717] text-white border border-[#292929]">Chennai</span>
                <span className="px-1.5 py-0.5 rounded bg-[#171717] text-white border border-[#292929]">Coimbatore</span>
                <span className="px-1.5 py-0.5 rounded bg-[#171717] text-[#FF453A] border border-[#292929]">Jan 2026</span>
              </div>
            </div>
          </div>
        );

      case 'geospatial':
        return (
          <div className="w-full h-48 sm:h-52 bg-[#000000] relative flex flex-col justify-center items-center p-4 overflow-hidden border-b border-[#292929]">
            <div className="relative w-32 h-32 rounded-full border border-[#292929] flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-dashed border-[#FF453A]/30 animate-spin" style={{ animationDuration: '30s' }} />
              <div className="w-20 h-20 rounded-full border border-[#292929]" />
              <Globe2 className="w-8 h-8 text-white" />
              
              <div className="absolute top-4 left-6 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF453A] animate-ping" />
                <span className="text-[7px] font-mono text-white">FLT-824 (32,000ft)</span>
              </div>
            </div>

            <div className="mt-2 text-[10px] font-mono text-[#888888] flex items-center gap-2">
              <span className="text-white">OpenSky API</span>
              <span>•</span>
              <span className="text-[#FF453A]">TomTom API</span>
              <span>•</span>
              <span className="text-white">Google 3D Tiles</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full h-48 bg-[#000000] flex items-center justify-center text-[#888888]">
            {title}
          </div>
        );
    }
  };

  const handleDoorClick = (project) => {
    if (openedDoorId === project.id) {
      setActiveModalProject(project);
    } else {
      setOpenedDoorId(project.id);
    }
  };

  const handleEnterProject = (project, e) => {
    e.stopPropagation();
    setActiveModalProject(project);
  };

  const handleCloseDoor = (projectId, e) => {
    e.stopPropagation();
    if (openedDoorId === projectId) {
      setOpenedDoorId(null);
    }
  };

  return (
    <section 
      id="featured-projects" 
      style={{ scrollMarginTop: '80px' }}
      className="py-8 sm:py-10 relative overflow-hidden bg-[#000000] scroll-mt-20 sm:scroll-mt-24"
    >
      {/* Anchor for backward compatibility with #projects */}
      <div id="projects" style={{ scrollMarginTop: '80px' }} className="scroll-mt-20 sm:scroll-mt-24" />
      
      {/* Background architectural gallery lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#FF453A]/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D0D0D] border border-[#292929] text-xs font-mono mb-3 shadow-sm">
            <span className="text-[#FF453A] font-bold">// 04</span>
            <span className="text-white">PROJECT GALLERY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
            PRO<span className="text-[#FF453A]">JECTS</span>
          </h2>
          <div className="w-16 h-1 bg-[#FF453A] rounded-full mt-4" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 sm:mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedFilter(cat);
                setOpenedDoorId(null);
              }}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-mono transition-all duration-200 border ${
                selectedFilter === cat
                  ? 'bg-[#FF453A] text-black font-bold border-[#FF453A] shadow-[0_0_15px_rgba(255,69,58,0.3)]'
                  : 'bg-[#0D0D0D] text-[#B3B3B3] border-[#292929] hover:text-white hover:border-[#888888]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ======================================================== */}
        {/* SCULPTURAL ARCHITECTURAL DOOR GALLERY (CSS 3D PERSPECTIVE) */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 sm:gap-4 lg:gap-5 items-end justify-center w-full">
          {filteredProjects.map((project, index) => {
            const isDoorOpen = openedDoorId === project.id;
            const isDoorHovered = hoveredDoorId === project.id && !isDoorOpen;
            const roomNumber = `0${index + 1}`;

            return (
              <div
                key={project.id}
                className="flex flex-col items-center group/door relative"
                onMouseEnter={() => setHoveredDoorId(project.id)}
                onMouseLeave={() => setHoveredDoorId(null)}
              >
                {/* Lintel Room Plaque (Above Door) */}
                <div className="mb-2 flex items-center justify-between w-full max-w-[208px] px-1.5 text-[10px] font-mono">
                  <span className="text-[#FF453A] font-bold">ROOM {roomNumber}</span>
                  <span className="text-[#888888] truncate max-w-[110px] uppercase">
                    {project.badge}
                  </span>
                </div>

                {/* ARCHITECTURAL STEPPED CASING & DOOR FRAME */}
                <div 
                  className={`relative w-full max-w-[208px] h-[345px] sm:h-[365px] rounded-lg bg-[#0d0906] border-4 border-[#3a2719] p-1.5 shadow-[0_15px_35px_rgba(0,0,0,0.9),0_0_20px_rgba(0,0,0,0.8)] transition-all duration-500 cursor-pointer ${
                    isDoorOpen ? 'ring-2 ring-[#FF453A]/40' : 'hover:border-[#5a3f2b]'
                  }`}
                  style={{
                    perspective: '1200px',
                    boxShadow: isDoorHovered
                      ? '0 20px 40px rgba(0,0,0,0.95), 0 0 25px rgba(255,69,58,0.2)'
                      : '0 15px 35px rgba(0,0,0,0.9)'
                  }}
                  onClick={() => handleDoorClick(project)}
                  title={isDoorOpen ? "Click to inspect case study" : "Click to open door"}
                >
                  {/* Subtle Stepped Bronze Molding on Frame Top */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-[104%] h-2.5 bg-[#422e20] rounded-t-sm shadow-md border-b border-[#140c07] border-t border-[#6f4f37]/40" />

                  {/* ROOM INTERIOR (BEHIND THE DOOR) */}
                  <div className="absolute inset-1.5 rounded-sm overflow-hidden bg-[#0A0A0A] flex flex-col justify-between p-3.5 z-0 select-none">
                    
                    {/* Interior Warm Room Light Spilling Out */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF453A]/10 via-[#FF453A]/5 to-transparent pointer-events-none" />
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF453A]/10 rounded-full blur-2xl pointer-events-none" />

                    {/* Room Interior Content */}
                    <div className="relative z-10 flex flex-col h-full justify-between">
                      {/* Top Room Header */}
                      <div className="pb-2 border-b border-[#292929]">
                        <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-[#000000] text-[#FF453A] border border-[#292929] font-bold">
                          LABORATORY {roomNumber}
                        </span>
                        <h4 className="text-xs font-bold text-white mt-1.5 line-clamp-2 leading-tight">
                          {project.title}
                        </h4>
                      </div>

                      {/* Mini Thumbnail Snapshot */}
                      <div className="my-2 rounded-lg overflow-hidden border border-[#292929] bg-[#000000] p-2 flex flex-col items-center justify-center">
                        <Cpu className="w-5 h-5 text-[#FF453A] mb-1 opacity-90" />
                        <span className="text-[10px] font-mono text-[#B3B3B3] text-center line-clamp-1">
                          {project.category}
                        </span>
                        <span className="text-[9px] font-mono text-[#888888] mt-0.5">
                          {project.technologies[0]} • {project.technologies[1] || 'Flask'}
                        </span>
                      </div>

                      {/* Action buttons inside room */}
                      <div className="space-y-1.5 pt-2 border-t border-[#292929]">
                        <button
                          onClick={(e) => handleEnterProject(project, e)}
                          className="w-full flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg bg-[#FF453A] hover:bg-[#E03E34] text-black text-[11px] font-mono font-bold transition-colors shadow-sm"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Enter Room</span>
                        </button>
                        
                        {isDoorOpen && (
                          <button
                            onClick={(e) => handleCloseDoor(project.id, e)}
                            className="w-full text-center py-1 text-[10px] font-mono text-[#888888] hover:text-white transition-colors"
                          >
                            Close Door
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* ======================================================== */}
                  {/* SCULPTURAL GEOMETRIC BRONZE DOOR LEAF                   */}
                  {/* Rotates on left hinge edge using CSS 3D                  */}
                  {/* ======================================================== */}
                  <SculpturalBronzeDoorLeaf
                    project={project}
                    roomNumber={roomNumber}
                    isDoorOpen={isDoorOpen}
                    isDoorHovered={isDoorHovered}
                  />

                  {/* Threshold Door Sill / Step */}
                  <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-[106%] h-2.5 bg-[#1a110a] border-t border-[#483323] rounded-b shadow-[0_5px_15px_rgba(0,0,0,0.9)]" />

                </div>

                {/* Foot Label: Project Title & Quick Status */}
                <div className="mt-3 text-center max-w-[208px]">
                  <h4 
                    onClick={() => handleDoorClick(project)}
                    className="text-sm font-bold text-white hover:text-[#FF453A] transition-colors cursor-pointer line-clamp-1"
                  >
                    {project.title}
                  </h4>
                  <div className="text-[11px] font-mono text-[#888888] mt-1 flex items-center justify-center gap-1.5">
                    <span>{isDoorOpen ? 'Door Opened' : 'Click Door to Enter'}</span>
                    <ArrowRight className="w-3 h-3 text-[#FF453A]" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* ======================================================== */}
      {/* IMMERSIVE PROJECT ROOM DEEP-DIVE MODAL                   */}
      {/* Triggered by entering any opened door                     */}
      {/* ======================================================== */}
      {activeModalProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl animate-fadeIn"
          onClick={() => setActiveModalProject(null)}
        >
          <div 
            className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[#0D0D0D] border border-[#292929] shadow-2xl p-6 sm:p-8 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar with 'Close Door & Return' */}
            <div className="flex items-center justify-between pb-4 border-b border-[#292929]">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-[#000000] text-[#FF453A] border border-[#292929] font-bold">
                  PROJECT LABORATORY
                </span>
                <span className="text-xs font-mono text-[#888888]">
                  // {activeModalProject.category}
                </span>
              </div>

              <button
                onClick={() => setActiveModalProject(null)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#000000] border border-[#292929] hover:border-[#FF453A] text-xs font-mono text-[#B3B3B3] hover:text-white transition-all group"
                title="Close door and return to gallery"
              >
                <span>CLOSE DOOR</span>
                <X className="w-4 h-4 text-[#FF453A]" />
              </button>
            </div>

            {/* Project Title Header */}
            <div className="mt-4">
              <span className="text-xs font-mono text-[#FF453A] uppercase tracking-wider font-bold">
                {activeModalProject.badge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                {activeModalProject.title}
              </h2>
            </div>

            {/* Visual Mockup Banner */}
            <div className="mt-6 rounded-xl overflow-hidden border border-[#292929]">
              {renderProjectVisual(activeModalProject.visualType, activeModalProject.title)}
            </div>

            {/* Overview & Architecture */}
            <div className="mt-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#FF453A] mb-2 font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#FF453A]" />
                <span>Overview & Architecture</span>
              </h4>
              <p className="text-[#B3B3B3] text-sm sm:text-base leading-relaxed">
                {activeModalProject.fullDescription}
              </p>
            </div>

            {/* Key Features & Achievements */}
            <div className="mt-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-white mb-3 font-bold flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#FF453A]" />
                <span>Key Features & Technical Achievements</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {(Array.isArray(activeModalProject.highlights) ? activeModalProject.highlights : []).map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-[#B3B3B3] bg-[#000000] p-3 rounded-lg border border-[#292929]"
                  >
                    <CheckCircle className="w-4 h-4 text-[#FF453A] mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Used */}
            <div className="mt-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-white mb-2 font-bold">
                Technologies & Tools Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {(Array.isArray(activeModalProject.technologies) ? activeModalProject.technologies : []).map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-[#000000] text-[#B3B3B3] border border-[#292929]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="mt-8 pt-6 border-t border-[#292929] flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs font-mono text-[#888888] truncate max-w-sm">
                Repository: <span className="text-white font-bold">{activeModalProject.github}</span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={activeModalProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#000000] border border-[#292929] hover:border-[#FF453A] text-white text-xs font-semibold transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
                <a
                  href={activeModalProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FF453A] hover:bg-[#E03E34] text-black text-xs font-bold transition-all shadow-[0_0_15px_rgba(255,69,58,0.25)]"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Open Live Project</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
