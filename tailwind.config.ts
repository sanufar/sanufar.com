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
  },

  plugins: []
} satisfies Config;
