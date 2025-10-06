/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-gold': '#ffd700',
        'secondary-gold': '#ffed4e',
        'dark-bg': '#000000',
        'darker-bg': '#1a1a1a',
        'card-bg': 'rgba(255, 255, 255, 0.05)',
        'text-primary': '#ffffff',
        'text-secondary': '#b8b8b8',
        'text-muted': '#888888',
        'accent-red': '#d32f2f',
        'accent-blue': '#1976d2',
        'accent-orange': '#ff9800',
      },
      fontFamily: {
        'bangers': ['Bangers', 'cursive'],
        'orbitron': ['Orbitron', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #000000, #1a1a1a)',
        'gradient-gold': 'linear-gradient(45deg, #ffd700, #ffed4e)',
        'gradient-hero': 'linear-gradient(135deg, #1a1a2e, #16213e, #0f0f23, #1a1a2e)',
        'gradient-spiderman': 'linear-gradient(135deg, #d32f2f, #1976d2, #000)',
        'gradient-batman': 'linear-gradient(135deg, #000, #1a1a1a, #2c2c2c)',
        'gradient-transformers': 'linear-gradient(135deg, #000, #1a1a1a, #2c2c2c)',
      },
      boxShadow: {
        'gold': '0 0 30px rgba(255, 215, 0, 0.3)',
        'card': '0 10px 40px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-gold': 'pulse-gold 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { textShadow: '0 0 5px rgba(255, 215, 0, 0.5)' },
          '100%': { textShadow: '0 0 20px rgba(255, 215, 0, 0.8), 0 0 30px rgba(255, 215, 0, 0.6)' },
        },
        'pulse-gold': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(255, 215, 0, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(255, 215, 0, 0.8), 0 0 30px rgba(255, 215, 0, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}
