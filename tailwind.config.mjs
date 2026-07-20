/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        sun: {
          // Light-first, sun-bright palette. `ink` is the page canvas
          // (warm cream) and `text` is the deep warm ink that sits on
          // it — the naming survives from the old dark theme, but the
          // canvas/on-canvas pairing is what every component relies on.
          ink: '#FFFBF4',
          surface: '#FFF6E9',
          card: '#FFFFFF',
          cardHover: '#FFF8EE',
          line: 'rgba(36,28,17,0.08)',
          lineSolid: '#EADFCE',
          text: '#241C11',
          textSoft: '#5D5340',
          textMuted: '#8A7D68',
          textDim: '#B3A78F',
          // Brand accent — juicy sunrise orange (brighter than the
          // app's in-UI accent, tuned for big display type on cream).
          red: '#FF7A00',
          redSoft: '#FFB340',
          redDeep: '#E85D00',
          peach: '#FFD9A3',
          peachSoft: '#FFF1DC',
          sky: '#9AD7EC',
          skySoft: '#EAF6FB',
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
