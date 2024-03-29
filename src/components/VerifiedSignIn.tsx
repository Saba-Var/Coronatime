import { VerifiedSignInProps } from 'components/types'
import { GreenBtn, Language } from 'components'
import { completedIcon } from 'assets/images'
import { Logo } from 'components/svgs'

const VerifiedSignIn: React.FC<VerifiedSignInProps> = (props) => {
  return (
    <div className='w-fit flex flex-col justify-between  py-6 pt-10 h-screen px-4 mx-auto md:h-[560px]'>
      <div className='flex justify-between items-center md:mb-28'>
        <Logo />
        <div className='flex justify-center'>
          <Language />
        </div>
      </div>
      <div className='flex flex-col justify-center gap-4'>
        <div className='flex justify-center'>
          <img
            src={completedIcon}
            alt='completion icon'
            className='w-14'
            data-TestId='completedIcon'
          />
        </div>
        <p className='text-black text-lg text-center'>{props.text}</p>
      </div>
      <div className='flex flex-col gap-4 '>
        <GreenBtn text={props.btnText} onClick={props.onClick} />
      </div>
    </div>
  )
}

export default VerifiedSignIn
