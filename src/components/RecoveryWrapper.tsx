import { useTranslation } from 'react-i18next'
import { Logo } from 'components/svgs'
import { Language } from 'components'

type PropsType = {
  children: JSX.Element
}

const RecoveryWrapper: React.FC<PropsType> = (props) => {
  const { t } = useTranslation()

  return (
    <div
      className={`p-4 mx-auto flex flex-col h-screen w-[350px] sm:w-[392px]`}
    >
      <div className='flex flex-col gap-11 mb-10 md:mb-[100px] lg:mb-[50%]'>
        <div className='md:flex md:justify-center'>
          <Logo />
        </div>
        <p className='font-black text-xl text-center  md:opacity-0'>
          {t('RESET PASSWORD')}
        </p>
      </div>
      {props.children}
      <div className='flex justify-center pt-4'>
        <Language />
      </div>
    </div>
  )
}

export default RecoveryWrapper
