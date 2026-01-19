import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';
import typographyPlugin from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(221 104 39)',
        secondary: 'rgb(190 88 30)',
        accent: 'rgb(221 104 39)',
        default: 'rgb(16 16 16)',
        muted: 'rgb(16 16 16 / 0.66)',
      },
      fontFamily: {
        sans: ['Inter Variable', ...defaultTheme.fontFamily.sans],
        serif: ['Inter Variable', ...defaultTheme.fontFamily.serif],
        heading: ['Inter Variable', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        fade: 'fadeInUp 1s both',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(2rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    typographyPlugin,
    plugin(({ addVariant }) => {
      addVariant('intersect', '&:not([no-intersect])');
    }),
  ],
  darkMode: 'class',
};
