import { Language, WelcomeText } from 'components'
import { WrapperTypes } from 'components/types'
import { vaccines } from 'assets/images'
import { Logo } from 'components/svgs'

const Wrapper: React.FC<WrapperTypes> = (props) => {
  return (
    <>
      <div className='lg:flex lg:justify-between'>
        <div className='px-4 py-4 w-[375px] m-auto lg:m-0 lg:ml-[2%] xl:ml-[7%] lg:mt-[2%] lg:w-98'>
          <Logo />
          <WelcomeText title={props.title} details={props.details} />
          {props.children}
          <div className='flex justify-center pt-5'>
            <Language />
          </div>
        </div>
        <img
          src={vaccines}
          className={`hidden lg:block w-[635px] ${
            props.page === 'login' && 'h-screen'
          }`}
          alt='covid-19 vaccines'
        />
      </div>
    </>
  )
}

export default Wrapper
