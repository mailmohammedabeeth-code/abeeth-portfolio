// Procedural Web Audio API sound generator + Background Music Engine
let audioCtx = null;
let isMuted = true; // Default muted for respectful UX

// Background Music HTML5 Audio Singleton
let bgAudio = null;
let isPlayingMusic = false;
const musicListeners = new Set();

function getBackgroundAudio() {
  if (typeof window === 'undefined') return null;
  if (!bgAudio) {
    try {
      bgAudio = new Audio('/audio/background-music.mp3');
      bgAudio.loop = true;
      bgAudio.volume = 0.25; // Set a comfortable background volume ~25%
      bgAudio.preload = 'auto';

      bgAudio.addEventListener('play', () => {
        isPlayingMusic = true;
        isMuted = false;
        notifyMusicListeners();
      });

      bgAudio.addEventListener('pause', () => {
        isPlayingMusic = false;
        notifyMusicListeners();
      });

      bgAudio.addEventListener('ended', () => {
        if (!bgAudio.loop) {
          isPlayingMusic = false;
          notifyMusicListeners();
        }
      });

      bgAudio.addEventListener('error', () => {
        console.warn('Background music file awaiting upload at public/audio/background-music.mp3');
      });
    } catch (e) {
      console.warn('HTML5 Audio initialization note:', e);
    }
  }
  return bgAudio;
}

function notifyMusicListeners() {
  musicListeners.forEach(listener => {
    try {
      listener(isPlayingMusic);
    } catch (e) {}
  });
}

function getAudioContext() {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export const soundManager = {
  getIsMuted() {
    return !isPlayingMusic;
  },

  isMusicPlaying() {
    return isPlayingMusic;
  },

  subscribeMusic(listener) {
    musicListeners.add(listener);
    listener(isPlayingMusic);
    return () => musicListeners.delete(listener);
  },

  async playMusic() {
    const audio = getBackgroundAudio();
    if (!audio) return false;

    try {
      const ctx = getAudioContext();
      if (ctx && ctx.state === 'suspended') {
        ctx.resume();
      }
    } catch (e) {}

    try {
      audio.volume = 0.25;
      audio.loop = true;
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        await playPromise;
      }
      isPlayingMusic = true;
      isMuted = false;
      notifyMusicListeners();
      return true;
    } catch (err) {
      console.warn('Background music notice (audio will start when background-music.mp3 is provided):', err.message);
      // Update state so UI visibly toggles
      isPlayingMusic = true;
      isMuted = false;
      notifyMusicListeners();
      return false;
    }
  },

  pauseMusic() {
    const audio = getBackgroundAudio();
    if (audio) {
      try {
        audio.pause();
      } catch (e) {}
    }
    isPlayingMusic = false;
    isMuted = true;
    notifyMusicListeners();
  },

  toggleMusic() {
    if (isPlayingMusic) {
      this.pauseMusic();
      return false;
    } else {
      this.playMusic();
      return true;
    }
  },

  setMuted(muted) {
    if (muted) {
      this.pauseMusic();
    } else {
      this.playMusic();
      this.playChime();
    }
  },

  toggleMute() {
    return this.toggleMusic();
  },

  // Subtle futuristic click
  playClick() {
    if (!isPlayingMusic && isMuted) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.04);
      
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start();
      osc.stop(ctx.currentTime + 0.04);
    } catch (e) {}
  },

  // Soft hover hum
  playHover() {
    if (!isPlayingMusic && isMuted) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(320, ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(440, ctx.currentTime + 0.03);
      
      gain.gain.setValueAtTime(0.02, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.05);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } catch (e) {}
  },

  // Portal portal-warp sound on enter/click
  playPortalWarp() {
    if (!isPlayingMusic && isMuted) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(220, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15);
      
      gain.gain.setValueAtTime(0.06, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start();
      osc.stop(ctx.currentTime + 0.2);
    } catch (e) {}
  },

  // Pleasant welcome chime
  playChime() {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.05);
        gain.gain.setValueAtTime(0.03, ctx.currentTime + idx * 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.05 + 0.2);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + idx * 0.05);
        osc.stop(ctx.currentTime + idx * 0.05 + 0.2);
      });
    } catch (e) {}
  }
};
