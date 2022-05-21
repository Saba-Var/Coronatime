import { useTranslation } from 'react-i18next'

const LogOut = () => {
  const { t } = useTranslation()

  return (
    <p className='hidden md:block font-medium text-sm cursor-pointer'>
      {t('Log Out')}
    </p>
  )
}

export default LogOut
