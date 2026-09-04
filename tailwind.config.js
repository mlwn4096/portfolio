/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neo: {
          bg: '#FFFDF5',        // Warm newsprint cream canvas
          ink: '#000000',       // Pure structural black
          accent: '#FF6B6B',    // Hot Red / Coral
          secondary: '#FFD93D', // Vivid Yellow
          muted: '#C4B5FD',     // Soft Violet
          white: '#FFFFFF',     // Crisp White for contrast
          orange: '#FF7A00',    // Vivid Orange
        },
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Space Grotesk"', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'neo-sm': '4px 4px 0px 0px #000000',
        'neo-md': '6px 6px 0px 0px #000000',
        'neo': '8px 8px 0px 0px #000000',
        'neo-lg': '12px 12px 0px 0px #000000',
        'neo-xl': '16px 16px 0px 0px #000000',
        'neo-massive': '20px 20px 0px 0px #000000',
        'neo-white-sm': '4px 4px 0px 0px #FFFFFF',
        'neo-white': '8px 8px 0px 0px #FFFFFF',
        'neo-white-lg': '12px 12px 0px 0px #FFFFFF',
        'neo-yellow': '6px 6px 0px 0px #FFD93D',
        'neo-accent': '6px 6px 0px 0px #FF6B6B',
        'neo-muted': '6px 6px 0px 0px #C4B5FD',
      },
      borderWidth: {
        '3': '3px',
        '5': '5px',
        '6': '6px',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        marquee: 'marquee 22s linear infinite',
        'spin-slow': 'spin-slow 14s linear infinite',
      },
    },
  },
  plugins: [],
}
