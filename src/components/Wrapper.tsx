import { Language, WelcomeText } from 'components'
import { WrapperProps } from 'components/types'
import { vaccines } from 'assets/images'
import { Logo } from 'components/svgs'

const Wrapper: React.FC<WrapperProps> = (props) => {
  return (
    <>
      <div className='lg:flex lg:justify-between h-screen overflow-x-hidden md:overflow-y-hidden  lg:pl-[7%]'>
        <div
          className={`px-4 w-[378px] m-auto lg:m-0 lg:ml-[2%] xl:ml-[7%] lg:mt-[1.5%] lg:w-98 ${
            props.page === 'LogIn' && 'lg:mt-[3%]'
          }`}
        >
          <div className='flex justify-between items-center pt-4 lg:pt-0'>
            <Logo />
            <div className='flex justify-center'>
              <Language />
            </div>
          </div>
          <WelcomeText
            title={props.title}
            details={props.details}
            page={props.page}
          />
          {props.children}
        </div>
        <img
          src={vaccines}
          className={`hidden lg:block w-[45%] h-[100%]`}
          alt='covid-19 vaccines'
        />
      </div>
    </>
  )
}

export default Wrapper
