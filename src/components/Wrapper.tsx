import { Language, WelcomeText } from 'components'
import { WrapperTypes } from 'components/types'
import { vaccines } from 'assets/images'
import { Logo } from 'components/svgs'

const Wrapper: React.FC<WrapperTypes> = (props) => {
  return (
    <>
      <div className='lg:flex lg:justify-between h-screen overflow-hidden'>
        <div className='px-4 w-[375px] m-auto lg:m-0 lg:ml-[2%] xl:ml-[7%] lg:mt-[1.5%] lg:w-98'>
          <Logo />
          <WelcomeText title={props.title} details={props.details} />
          {props.children}
          <div className='flex justify-center '>
            <Language />
          </div>
        </div>
        <img
          src={vaccines}
          className={`hidden lg:block w-[635px] h-[900px]`}
          alt='covid-19 vaccines'
        />
      </div>
    </>
  )
}

export default Wrapper
