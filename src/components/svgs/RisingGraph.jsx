function RisingGraph() {
  return (
    <svg
      width='100'
      height='73'
      viewBox='0 0 100 73'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g filter='url(#filter0_d_47_23)'>
        <path
          d='M52.7348 36.5C20.4144 36.5 45.2762 46 5 48.5V65H95V1C85.5525 9.5 86.0497 22.5 72.6243 22.5C59.1989 22.5 64.6685 36.5 52.7348 36.5Z'
          fill='url(#paint0_linear_47_23)'
        />
        <path
          d='M5 48.5C45.2762 46 20.4144 36.5 52.7348 36.5C64.6685 36.5 59.1989 22.5 72.6243 22.5C86.0497 22.5 85.5525 9.5 95 1'
          stroke='#2029F3'
          stroke-width='2'
        />
      </g>
      <defs>
        <filter
          id='filter0_d_47_23'
          x='0.937988'
          y='0.256836'
          width='98.731'
          height='72.7432'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'
        >
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='4' />
          <feGaussianBlur stdDeviation='2' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow_47_23'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_47_23'
            result='shape'
          />
        </filter>
        <linearGradient
          id='paint0_linear_47_23'
          x1='50.2486'
          y1='-22.5'
          x2='49.9972'
          y2='65'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#2029F3' stop-opacity='0.24' />
          <stop offset='1' stop-color='#2029F3' stop-opacity='0' />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default RisingGraph
