import { useTranslation } from 'react-i18next'

function WelcomeText() {
  const { t } = useTranslation()

  return (
    <>
      <h2 className='font-black  text-black text-xl mt-10'>
        {t('Welcome back')}
      </h2>
      <p className='text-gray mb-6'>{t('Enter details')}</p>
    </>
  )
}

export default WelcomeText
