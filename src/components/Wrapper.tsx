import { Language, WelcomeText } from 'components'
import { useTranslation } from 'react-i18next'
import { vaccines } from 'assets/images'
import { Logo } from 'components/svgs'

type propsType = {
  children: JSX.Element
  details: string
  title: string
}

const Wrapper: React.FC<propsType> = (props) => {
  const { t } = useTranslation()

  return (
    <>
      <div className='lg:flex lg:justify-between'>
        <div className='px-4 py-4 w-[375px] m-auto lg:m-0 lg:ml-[2%] xl:ml-[7%] lg:mt-[2%] lg:w-98'>
          <Logo />
          <WelcomeText title={t('Welcome back')} details={t('Enter details')} />
          {props.children}
          <div className='flex justify-center pt-5'>
            <Language />
          </div>
        </div>
        <img
          src={vaccines}
          className='hidden lg:block h-full'
          alt='covid-19 vaccines'
        />
      </div>
    </>
  )
}

export default Wrapper
