module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        '1.5xl': '1142px',
        sd: '420px',
        sx: '470px',
      },
      animation: {
        'slide-in-top':
          'slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both',
        'bounce-out-top': 'bounce-out-top 1.5s ease   both',
        'bounce-out-left': 'bounce-out-left 1.5s ease   both',
      },
      keyframes: {
        'slide-in-top': {
          '0%': {
            transform: 'translateY(-1000px)',
            opacity: '0',
          },
          to: {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        'bounce-out-left': {
          '0%,15%,38%,70%': {
            transform: 'translateX(0)',
            'animation-timing-function': 'ease-out',
          },
          '5%': {
            transform: 'translateX(-30px)',
            'animation-timing-function': 'ease-in',
          },
          '25%': {
            transform: 'translateX(-38px)',
            'animation-timing-function': 'ease-in',
          },
          '52%': {
            transform: 'translateX(-80px)',
            'animation-timing-function': 'ease-in',
          },
          '85%': {
            opacity: '1',
          },
          to: {
            transform: 'translateX(-1000px)',
            opacity: '0',
          },
        },
      },
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
        greenBG: '#ecf9f3',
        white: '#fff',
        red: '#CC1E1E',
        blue: '#edeefe',
        yellow: '#EAD621',
        yellowBG: '#fdfced',
        grayBG: '#F6F6F7',
        ringBlue: '#dbe8fb',
      },
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
