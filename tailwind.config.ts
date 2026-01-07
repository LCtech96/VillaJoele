import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        rustic: {
          50: '#faf7f2',
          100: '#f5ede0',
          200: '#ead9c1',
          300: '#dcc09a',
          400: '#c99d6b',
          500: '#b8824f',
          600: '#a66d42',
          700: '#8a5838',
          800: '#714833',
          900: '#5d3d2c',
        },
        baroque: {
          50: '#f8f6f4',
          100: '#ede8e0',
          200: '#d9cfc0',
          300: '#c0b09a',
          400: '#a89073',
          500: '#937a5f',
          600: '#7a6550',
          700: '#645143',
          800: '#534339',
          900: '#463a32',
        },
        liberty: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#102a43',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config

