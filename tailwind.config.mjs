/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        sun: {
          // Warm near-black canvas: the pre-dawn end of the page's
          // scroll-triggered sunrise. Light-mode values live in
          // global.css (`:root.is-light` overrides).
          ink: '#0B0805',
          surface: '#141008',
          card: '#1A140B',
          cardHover: '#221A0F',
          line: 'rgba(255,255,255,0.06)',
          lineSolid: '#2A2114',
          text: '#F5F0E8',
          textSoft: '#C4BCAE',
          textMuted: '#8C8375',
          textDim: '#5C554A',
          // Brand accent — the app's Soleil orange (SunkindTheme.accent).
          red: '#F08A1D',
          redSoft: '#FFB25C',
          redDeep: '#D96F04',
          peach: '#F7D9A8',
          peachSoft: '#FBEBD2',
        },
      },
      fontFamily: {
        sans: [
          'Google Sans Flex',
          'Google Sans',
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      maxWidth: {
        '8xl': '88rem',
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter2: '-0.035em',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'out-back': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      keyframes: {
        floatY: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        fanIn: {
          '0%': { transform: 'translateX(0) rotate(0deg)', opacity: '0' },
          '100%': { transform: 'translateX(var(--tw-fan-x, 0)) rotate(var(--tw-fan-r, 0))', opacity: '1' },
        },
      },
      animation: {
        floatY: 'floatY 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
