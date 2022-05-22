module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        98: '24.5rem',
        82: '20.5rem',
        72.7: '18.18rem',
        42.3: '10.62rem',
      },
      colors: {
        black: '#010414',
        gray: '#808189',
        'border-gray': '#E6E6E7',
        'link-blue': '#2029F3',
        green: '#0FBA68',
        white: '#fff',
        red: '#CC1E1E',
        blue: '#edeefe',
      },
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
