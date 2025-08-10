// tailwind.config.ts
import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        tyrian: {
          bg: '#080214',
          surface: '#0f031f',
          panel: '#1a0b2c',
          border: '#47325b',
          text: {
            default: '#fcfcfb',
            muted: '#cbb7d3',
          },
          purple: {
            200: '#eabfec',
            300: '#cc94e5',
            400: '#ac67c6',
            500: '#6f2d95',
            600: '#5d118f',
            700: '#4b0186',
            800: '#39274b',
            900: '#16052a',
          },
          warm: {
            100: '#fef5e7',
            300: '#f5bd84',
            400: '#d47971',
            500: '#cd696d',
          },
        },
      },
      backgroundImage: {
        'tyrian-hero': `
          radial-gradient(80% 60% at 50% 40%, rgba(75,1,134,.28) 0%, rgba(75,1,134,0) 55%),
          radial-gradient(60% 40% at 18% 45%, rgba(93,17,143,.20) 0%, rgba(93,17,143,0) 60%),
          radial-gradient(60% 40% at 82% 45%, rgba(93,17,143,.20) 0%, rgba(93,17,143,0) 60%),
          radial-gradient(100% 50% at 50% -10%, rgba(204,148,229,.12) 0%, rgba(204,148,229,0) 70%),
          linear-gradient(180deg, #0f031f 0%, #080214 40%, #16052a 100%)
        `,
      },
      boxShadow: {
        neon: '0 0 6px rgba(204,148,229,0.9), 0 0 18px rgba(172,103,198,0.6)',
      },
      textShadow: {
        neon: '0 0 6px #cc94e5, 0 0 18px #ac67c6',
      },
      extend: {
        fontFamily: {
          tyrian: ['var(--font-tyrian)'],
        },
      },
    },
  },
  plugins: [
    // Optional: text-shadow plugin
    function ({ addUtilities }: any) {
      addUtilities({
        '.text-neon': {
          textShadow: '0 0 6px #cc94e5, 0 0 18px #ac67c6',
        },
      });
    },
  ],
} satisfies Config;
