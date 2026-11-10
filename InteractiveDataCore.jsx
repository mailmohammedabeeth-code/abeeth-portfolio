import React, { useRef, useEffect } from 'react';
import { soundManager } from '../utils/soundEffects';

export default function InteractiveDataCore() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.offsetWidth * window.devicePixelRatio);
    let height = (canvas.height = canvas.offsetHeight * window.devicePixelRatio);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      height = canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    };
    window.addEventListener('resize', handleResize);

    // Mouse coordinates relative to center
    let targetRotX = 0;
    let targetRotY = 0;
    let rotX = 0;
    let rotY = 0;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      targetRotY = (x / (rect.width / 2)) * 0.8;
      targetRotX = -(y / (rect.height / 2)) * 0.8;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 3D Particles & Nodes
    const numParticles = 75;
    const particles = [];
    const radius = Math.min(width, height) * 0.28;

    for (let i = 0; i < numParticles; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      particles.push({
        x: radius * Math.sin(phi) * Math.cos(theta),
        y: radius * Math.sin(phi) * Math.sin(theta),
        z: radius * Math.cos(phi),
        origX: radius * Math.sin(phi) * Math.cos(theta),
        origY: radius * Math.sin(phi) * Math.sin(theta),
        origZ: radius * Math.cos(phi),
        color: i % 3 === 0 ? '#FF453A' : i % 3 === 1 ? '#FFFFFF' : '#888888',
        size: Math.random() * 2.5 + 1.2,
      });
    }

    let angle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth dampening towards target mouse rotation
      rotX += (targetRotX - rotX) * 0.05;
      rotY += (targetRotY - rotY) * 0.05;
      angle += 0.008;

      const cx = width / 2;
      const cy = height / 2;

      // Draw background ambient concentric grid
      ctx.save();
      ctx.translate(cx, cy);

      // Outer rings
      for (let r = 1; r <= 3; r++) {
        ctx.beginPath();
        ctx.ellipse(0, 0, radius * (0.8 + r * 0.22), radius * (0.35 + r * 0.08), rotY * 0.4 + angle * (r % 2 === 0 ? 0.3 : -0.3), 0, Math.PI * 2);
        ctx.strokeStyle = r === 1 ? 'rgba(255, 69, 58, 0.25)' : 'rgba(255, 255, 255, 0.08)';
        ctx.lineWidth = 1.2;
        ctx.setLineDash(r === 2 ? [4, 6] : [8, 12]);
        ctx.stroke();
      }
      ctx.setLineDash([]);

      // Rotate and project 3D particles
      const projected = [];
      const cosY = Math.cos(angle + rotY);
      const sinY = Math.sin(angle + rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      particles.forEach((p, idx) => {
        // Y rotation
        let x1 = p.origX * cosY - p.origZ * sinY;
        let z1 = p.origZ * cosY + p.origX * sinY;

        // X rotation
        let y1 = p.origY * cosX - z1 * sinX;
        let z2 = z1 * cosX + p.origY * sinX;

        // Perspective projection
        const fov = 350;
        const scale = fov / Math.max(20, fov + z2);
        const px = x1 * scale;
        const py = y1 * scale;

        projected.push({ x: px, y: py, z: z2, scale, color: p.color, size: p.size, idx });
      });

      // Sort by Z for realistic depth
      projected.sort((a, b) => b.z - a.z);

      // Connect closest points with red/white links
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const dx = projected[i].x - projected[j].x;
          const dy = projected[i].y - projected[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 46) {
            ctx.beginPath();
            ctx.moveTo(projected[i].x, projected[i].y);
            ctx.lineTo(projected[j].x, projected[j].y);
            const alpha = (1 - dist / 46) * 0.25;
            ctx.strokeStyle = `rgba(255, 69, 58, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw particle points
      projected.forEach((p) => {
        const radius = Math.max(0.5, p.size * p.scale);
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8 * p.scale;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Central glowing Core
      const corePulse = Math.sin(angle * 3) * 6;
      const grad = ctx.createRadialGradient(0, 0, 2, 0, 0, 48 + corePulse);
      grad.addColorStop(0, 'rgba(255, 69, 58, 0.9)');
      grad.addColorStop(0.4, 'rgba(255, 69, 58, 0.3)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.beginPath();
      ctx.arc(0, 0, 48 + corePulse, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      // Central Emblem ABEETH
      ctx.font = 'bold 15px "JetBrains Mono", monospace';
      ctx.fillStyle = '#FFFFFF';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('<ABEETH/>', 0, 0);

      ctx.restore();
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleClick = () => {
    soundManager.playPortalWarp();
  };

  return (
    <div 
      className="relative w-full h-[380px] sm:h-[460px] lg:h-[500px] flex items-center justify-center cursor-pointer select-none"
      onClick={handleClick}
      data-cursor="portal"
      data-cursor-text="INTERACT"
      title="Click to interact with ABEETH's Data Core"
    >
      <canvas ref={canvasRef} className="w-full h-full" />

      {/* Floating HUD Badges */}
      <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-[#0D0D0D] border border-[#292929] backdrop-blur-md text-[10px] font-mono text-white flex items-center gap-2 shadow-lg animate-float">
        <span className="w-2 h-2 rounded-full bg-[#FF453A] animate-ping" />
        <span>DATA_STREAM: ACTIVE</span>
      </div>

      <div className="absolute bottom-6 left-6 p-2.5 rounded-xl bg-[#0D0D0D] border border-[#292929] backdrop-blur-md text-[10px] font-mono shadow-lg">
        <div className="text-[9px] text-[#888888]">FASTER R-CNN BACKBONE</div>
        <div className="font-bold text-white">ResNet-50 • IoU 0.89</div>
      </div>

      <div className="absolute top-10 right-4 p-2.5 rounded-xl bg-[#0D0D0D] border border-[#292929] backdrop-blur-md text-[10px] font-mono shadow-lg">
        <div className="text-[9px] text-[#FF453A]">POSTGRESQL + PYTHON</div>
        <div className="font-bold text-white">RESTful Endpoints</div>
      </div>
    </div>
  );
}
