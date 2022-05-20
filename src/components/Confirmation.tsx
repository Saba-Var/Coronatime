import { completedIcon } from 'assets/images'
import { Logo } from 'components/svgs'

type propsType = {
  text: string
  width: string
}

const Confirmation: React.FC<propsType> = (props) => {
  return (
    <div className={`p-4 mx-auto flex flex-col h-screen ${props.width}`}>
      <div className='flex sm:justify-center'>
        <Logo />
      </div>
      <div className='w-72.7 flex flex-col items-center gap-4 h-full justify-center'>
        <img
          src={completedIcon}
          alt='green complete icon'
          className='w-14 h-14'
        />
        <p className='text-black text-base text-center'>{props.text}</p>
      </div>
    </div>
  )
}

export default Confirmation
