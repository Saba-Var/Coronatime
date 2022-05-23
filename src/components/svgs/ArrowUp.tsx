type PropsType = {
  clickOptions: {
    isClicked: boolean
    sort: boolean
    target: boolean
  }
}

const ArrowUp: React.FC<PropsType> = (props) => {
  const { isClicked, sort, target } = props.clickOptions
  return (
    <svg
      width='10'
      height='6'
      viewBox='0 0 10 6'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={`opacity-20 ${isClicked && sort && target && 'opacity-100'}`}
    >
      <path d='M5 0.5L10 5.5L0 5.5L5 0.5Z' fill='#010414' />
    </svg>
  )
}

export default ArrowUp
