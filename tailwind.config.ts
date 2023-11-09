import type { Config } from 'tailwindcss'

const config: Config = {
  plugins: [require("daisyui")],

  daisyui: {
    themes: ["light", "dark", "retro"],
  },

  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],


}


export default config
