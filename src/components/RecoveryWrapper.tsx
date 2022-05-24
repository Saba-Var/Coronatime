import { useTranslation } from 'react-i18next'
import { Logo } from 'components/svgs'
import { Language } from 'components'

const RecoveryWrapper: React.FC<{ children: JSX.Element }> = (props) => {
  const { t } = useTranslation()

  return (
    <div
      className={`p-4 mx-auto flex flex-col h-screen w-[350px] sm:w-[392px]`}
    >
      <div className='flex flex-col gap-11 lg:gap-24 mb-10 md:mb-16'>
        <div className='md:flex md:justify-center'>
          <Logo />
        </div>
        <p className='font-black text-xl text-center'>{t('RESET PASSWORD')}</p>
      </div>
      {props.children}
      <div className='flex justify-center pt-4'>
        <Language />
      </div>
    </div>
  )
}

export default RecoveryWrapper
