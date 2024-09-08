/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-to-bg': 'linear-gradient(to bottom, #eef8fd, #fff)',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      screens: {
        sm0: { max: '400px' },
        sm: { max: '850px' },
        md: { max: '1100px' },
        xl: { max: '2200px' },
      },
    },
  },
  plugins: [],
};
