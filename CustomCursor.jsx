import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if device is touch-first
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    let mouseX = -100;
    let mouseY = -100;
    let followerX = -100;
    let followerY = -100;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    let animationFrameId;
    const animateFollower = () => {
      // Smooth lerp trailing
      followerX += (mouseX - followerX) * 0.15;
      followerY += (mouseY - followerY) * 0.15;

      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`;
      }
      animationFrameId = requestAnimationFrame(animateFollower);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrameId = requestAnimationFrame(animateFollower);

    // Watch hover elements for magnetic / badge effects
    const handleMouseOver = (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        const type = target.getAttribute('data-cursor');
        setCursorVariant(type || 'hover');
        const text = target.getAttribute('data-cursor-text') || '';
        setCursorText(text);
      } else if (e.target.closest('a, button, [role="button"]')) {
        setCursorVariant('hover');
        setCursorText('');
      } else {
        setCursorVariant('default');
        setCursorText('');
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Central Sharp Dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 -ml-1.5 -mt-1.5 w-3 h-3 bg-[#FF453A] rounded-full pointer-events-none z-[9999] transition-opacity duration-300 shadow-[0_0_8px_#FF453A]"
      />

      {/* Outer Smooth Follower Ring / Pill */}
      <div
        ref={followerRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9998] transition-all duration-200 ease-out flex items-center justify-center font-mono text-[10px] font-bold tracking-widest text-white ${
          cursorVariant === 'portal'
            ? '-ml-12 -mt-12 w-24 h-24 rounded-full bg-black/60 border border-[#FF453A] backdrop-blur-sm shadow-[0_0_20px_rgba(255,69,58,0.3)] scale-110'
            : cursorVariant === 'card'
            ? '-ml-10 -mt-10 w-20 h-20 rounded-full bg-black/50 border border-[#FF453A]/80 backdrop-blur-xs scale-105'
            : cursorVariant === 'hover'
            ? '-ml-6 -mt-6 w-12 h-12 rounded-full border border-[#FF453A] bg-[#FF453A]/10 scale-125'
            : '-ml-4 -mt-4 w-8 h-8 rounded-full border border-white/20 bg-transparent'
        }`}
      >
        {cursorText && (
          <span className="uppercase animate-fadeIn text-[9px] text-[#FF453A] font-bold tracking-wider">
            {cursorText}
          </span>
        )}
      </div>
    </>
  );
}

