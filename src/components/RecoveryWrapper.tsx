import { ChildrenProps } from 'components/types'
import { useTranslation } from 'react-i18next'
import { Logo } from 'components/svgs'
import { Language } from 'components'

const RecoveryWrapper: React.FC<ChildrenProps> = (props) => {
  const { t } = useTranslation()

  return (
    <div
      className={`p-4 mx-auto  flex flex-col h-screen w-[350px] sm:w-[392px] overflow-y-hidden`}
    >
      <div className='flex flex-col gap-11 lg:gap-24 mb-10 md:mb-16'>
        <div className='flex justify-between items-center md:mb-[20%]'>
          <Logo />
          <div className='flex justify-center'>
            <Language />
          </div>
        </div>
        <p className='font-black text-xl text-center'>{t('RESET PASSWORD')}</p>
      </div>
      {props.children}
    </div>
  )
}

export default RecoveryWrapper
