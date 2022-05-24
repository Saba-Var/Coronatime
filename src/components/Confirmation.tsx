import { completedIcon } from 'assets/images'
import { Logo } from 'components/svgs'

const Confirmation: React.FC<{ text: string }> = (props) => {
  return (
    <div className='w-[375px] p-4 mx-auto flex flex-col h-screen'>
      <div className='flex sm:justify-center'>
        <Logo />
      </div>
      <div className='  flex flex-col items-center gap-4 h-full justify-center'>
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
