import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Remember } from 'components'

const ForgotPassword = () => {
  const { t } = useTranslation()
  return (
    <div className='flex justify-between mt-6 items-center'>
      <Remember />
      <Link
        to='/Recovery-Password-email'
        className='text-link-blue text-sm font-semibold'
      >
        {t('Forgot password')}
      </Link>
    </div>
  )
}

export default ForgotPassword
