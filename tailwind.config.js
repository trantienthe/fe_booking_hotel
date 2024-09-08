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
        sm0: { min: '540px' },
        sm: { min: '767px' },
        md: { min: '826px' },
        md1: { min: '900px' },
        lg0: { min: '1000px' },
        lg1: { min: '1100px' },
        lg: { min: '1140px' },
        lg2: { min: '1267px' },
        xl: { min: '1920px' },
      },
    },
  },
  plugins: [],
};
