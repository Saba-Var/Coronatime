import { ArrowType } from 'components/svgs/types'

const ArrowDown: React.FC<ArrowType> = (props) => {
  const { isClicked, sort, target } = props.clickOptions
  return (
    <svg
      width='10'
      height='6'
      viewBox='0 0 10 6'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={`opacity-20 ${isClicked && !sort && target && 'opacity-100'}`}
    >
      <path d='M5 5.5L0 0.5H10L5 5.5Z' fill='#010414' />
    </svg>
  )
}

export default ArrowDown
