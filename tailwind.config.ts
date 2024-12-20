import type { Config } from 'tailwindcss';
import * as defaultTheme from "tailwindcss/defaultTheme";


export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
	fontFamily: {
		ibm: ["IBM Plex Sans", "sans-serif"],
		mono: ["IBM Plex Mono"],
		serif: ["ITC Garamond"],
		sans: ['InterVariable', ...defaultTheme.fontFamily.sans],

	},
	  keyframes: {
        growShrink: {
          '0%': { borderLeftWidth: '2px' }, // Start and end at 4px
          '50%': { borderLeftWidth: '4px' },    // Peak at 12px
        },
      },
      animation: {
        growShrink: 'growShrink 2s infinite ease-in-out', // 2s loop, easing applied
      },
  },

  plugins: []
} satisfies Config;
