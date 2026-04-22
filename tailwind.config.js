/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Light theme backgrounds — cool off-white (not harsh pure white)
        'bg-page':    '#F8FAFD',
        'bg-section': '#EEF3FA',
        'bg-card':    '#FFFFFF',
        'bg-muted':   '#E2EAF4',

        // Brand Red — from logo "PINNACLE"
        brand:        '#E8231A',
        'brand-dark': '#C41B13',
        'brand-light':'#FFF0EF',

        // Navy — primary corporate / dark UI colour
        navy:         '#0F2040',
        'navy-mid':   '#1E3A5F',
        'navy-light': '#EAF0FB',

        // Brand Green — kept for logo/specific use only
        green:        '#1B8C3C',
        'green-dark': '#156B2E',
        'green-light':'#E8F5ED',

        // Rich gold accent
        gold:         '#C9960B',
        'gold-light': '#FEF5DC',

        // Typography
        'text-heading': '#0F2040',
        'text-body':    '#334155',
        'text-muted':   '#64748B',
        'text-light':   '#94A3B8',

        // Borders
        'border-light': '#DDE4F0',
        'border-mid':   '#C5CEDF',
      },
      fontFamily: {
        display: ['Rajdhani', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'card':      '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.08)',
        'card-lg':   '0 4px 8px rgba(0,0,0,0.06), 0 16px 40px rgba(0,0,0,0.10)',
        'card-hover':'0 8px 24px rgba(0,0,0,0.12), 0 2px 6px rgba(0,0,0,0.06)',
        'btn-brand': '0 4px 14px rgba(232,35,26,0.35)',
        'btn-green': '0 4px 14px rgba(27,140,60,0.3)',
        'nav':       '0 2px 20px rgba(0,0,0,0.08)',
      },
      backgroundImage: {
        'grad-brand': 'linear-gradient(135deg, #E8231A 0%, #C41B13 100%)',
        'grad-navy':  'linear-gradient(135deg, #0F2040 0%, #1E3A5F 100%)',
        'grad-hero':  'linear-gradient(135deg, #060D1A 0%, #0F2040 45%, #060D1A 100%)',
        'grad-section':'linear-gradient(180deg, #F8FAFD 0%, #EEF3FA 100%)',
      },
      transitionDuration: {
        '400': '400ms',
      },
      animation: {
        'float':      'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'marquee':    'marquee 35s linear infinite',
        'pulse-dot':  'pulseDot 2s ease-in-out infinite',
        'fade-up':    'fadeUp 0.6s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-14px)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%':      { opacity: '0.5', transform: 'scale(0.85)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
