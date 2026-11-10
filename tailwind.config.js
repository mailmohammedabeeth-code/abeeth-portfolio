/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brandRed: {
          DEFAULT: '#FF453A',
          hover: '#E03E34',
          glow: 'rgba(255, 69, 58, 0.35)',
        },
        dark: {
          bg: '#000000',
          surface: '#0A0A0A',
          card: '#0D0D0D',
          cardHover: '#171717',
          border: '#292929',
          borderHover: '#FF453A',
          text: '#FFFFFF',
          muted: '#B3B3B3',
          tertiary: '#888888',
        },
        primary: {
          DEFAULT: '#FF453A',
          50: '#fff1f0',
          100: '#ffe1df',
          200: '#ffc8c5',
          300: '#ffa29d',
          400: '#ff7067',
          500: '#FF453A',
          600: '#E03E34',
          700: '#cb1d12',
          800: '#a71c13',
          900: '#8a1e16',
        },
        // Alias legacy cyan & blue classes to guarantee 0 blue/cyan output across old components
        cyan: {
          50: '#ffffff',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#ffffff',
          400: '#FF453A',
          500: '#FF453A',
          600: '#E03E34',
          700: '#cb1d12',
          800: '#292929',
          900: '#171717',
          950: '#0D0D0D',
          DEFAULT: '#FF453A',
        },
        blue: {
          50: '#ffffff',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#ffffff',
          400: '#FF453A',
          500: '#FF453A',
          600: '#E03E34',
          700: '#cb1d12',
          800: '#292929',
          900: '#171717',
          950: '#0D0D0D',
          DEFAULT: '#FF453A',
        },
        sky: {
          400: '#FF453A',
          500: '#FF453A',
          600: '#E03E34',
          DEFAULT: '#FF453A',
        },
        indigo: {
          400: '#FF453A',
          500: '#FF453A',
          600: '#E03E34',
          DEFAULT: '#FF453A',
        },
        cyanAccent: {
          DEFAULT: '#FF453A',
          400: '#FF453A',
          500: '#FF453A',
          600: '#E03E34',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'blur(20px)' },
          '100%': { opacity: '0.8', filter: 'blur(30px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cyber-grid': 'linear-gradient(to right, rgba(255, 69, 58, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 69, 58, 0.05) 1px, transparent 1px)',
      }
    },
  },
  plugins: [],
}
