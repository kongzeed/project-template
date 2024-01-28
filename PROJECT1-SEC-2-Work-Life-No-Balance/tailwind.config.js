/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      'Main-pink-100': '#FFBCBC',
      'Main-pink-200': '#FF8585',
      'Main-pink-300': '#FF5252',
      'btn-active': 'rgba(255, 255, 255, 0.70)',
      'btn-hover': 'rgba(0, 0, 0, 0.25)',
      White: '#F8F8F8',
      Black: '#434343',
    },

    fontSize: {
      hl: '36px',
      hm: '24px',
      hs: '20px',
      hss: '12px',
      'hl-tal': 48,
      'hm-tal': 32,
      'hs-tal': 16,

      'hl-des': 83,
      'hm-des': 36,
      'hs-des': 20,
    },

    screens: {
      'scr-m': {
        raw: '(min-height: 900px),(min-width:1000px)',
      },
      'scr-l': { raw: '(min-height: 950),(min-width:1200px)' },
    },
  },

  plugins: [require('daisyui')],
};
