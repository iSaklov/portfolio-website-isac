/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss'
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')
// @ts-check
import fs from 'node:fs'
import path from 'node:path'
import plaiceholder from '@plaiceholder/tailwindcss'

// Custom plugin for backface-visibility
const backfaceVisibility = plugin(function ({
  addUtilities
}: {
  addUtilities: Function
}) {
  addUtilities({
    '.backface-visible': {
      'backface-visibility': 'visible'
    },
    '.backface-hidden': {
      'backface-visibility': 'hidden'
    }
  })
})

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    // https://flowbite.com/docs/getting-started/next-js/
    'node_modules/flowbite-react/lib/esm/**/*.js',
    './public/**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        // basic
        // transparent: 'transparent',
        // current: 'currentColor',
        // white: '#ffffff',
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
        sans: ['var(--font-poppins)', ...defaultTheme.fontFamily.sans],
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
        },
        rotate3d: {
          '0%': { transform: 'perspective(500px) rotateY(0deg)' },
          '50%': { transform: 'perspective(500px) rotateY(180deg)' },
          '100%': { transform: 'perspective(500px) rotateY(360deg)' }
        },
        flashingBorder: {
          '0%, 100%': { borderColor: 'initial' },
          '50%': { borderColor: '#e6512d' }
        },
        jump: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: ' translateY(-10px)' }
        },
        textShine: {
          '0%, 100%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(100%)' }
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        rotate3d: 'rotate3d 3s ease-in-out infinite',
        flashingBorder: 'flashingBorder 1s ease-in-out infinite',
        jump: 'jump 1s ease-in-out infinite',
        textShine: 'textShine 2s ease-in-out infinite'
      }
    }
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    backfaceVisibility,
    plaiceholder({
      resolver: (src) => fs.readFileSync(path.join('./public', `${src}.jpg`))
    })
  ]
}

export default config
