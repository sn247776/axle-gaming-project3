import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        flicker: {
          '0%,2%,4%,100%':{ opacity : '1' },
          '1%,3%': { opacity : '0.5' }
        }
      },
      animation: {
        flicker: 'flicker 8ms ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
export default config
