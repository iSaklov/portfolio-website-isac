import type { Config } from 'tailwindcss'
const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    // https://flowbite.com/docs/getting-started/next-js/
    './node_modules/flowbite-react/**/*.js',
    './public/**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        // basic
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        'primary-dark': {
          translucent: 'rgba(47, 46, 46, 0.5)',
          DEFAULT: '#2f2e2e'
        },
        'accent-orange': '#e6512d',
        'subtle-blue': '#42446e',
        'mid-gray': '#666666',
        'highlight-gray': '#424242',
        'pale-pink': '#fdf2ee',
        // lighthouse circles
        'low-result-bg': '#382324',
        'low-result-main': '#ff353c',
        'medium-result-bg': '#382f25',
        'medium-result-main': '#ffab44',
        'high-result-bg': '#1e3329',
        'high-result-main': '#00cc6b',
        'service-gray': '#b0b0b0',
        'light-gray': '#e6e6e6'
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        serif: ['Georgia', ...defaultTheme.fontFamily.serif]
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-1.5deg)' },
          '50%': { transform: 'rotate(1.5deg)' }
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite'
      }
    }
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ]
}

export default config
