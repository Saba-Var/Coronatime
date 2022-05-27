import { WelcomeTextProps } from 'components/types'

const WelcomeText: React.FC<WelcomeTextProps> = (props) => {
  return (
    <>
      <h2
        className={`font-black  text-black text-xl mt-8 1.5xl:w-[500px] ${
          props.page === 'login' && 'text-2xl mb-4'
        }`}
      >
        {props.title}
      </h2>
      <p className='text-gray mb-4'>{props.details}</p>
    </>
  )
}

export default WelcomeText
