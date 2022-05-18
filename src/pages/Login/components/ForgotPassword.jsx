import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function ForgotPassword() {
  const { t } = useTranslation()
  return (
    <div className='flex justify-between mt-6 items-center'>
      <label className='flex items-center gap-2'>
        <input type='checkbox' className='accent-green' />
        <span>{t('Remember device')}</span>
      </label>
      <Link
        to='/Reset-password'
        className='text-link-blue text-sm font-semibold'
      >
        {t('Forgot password')}
      </Link>
    </div>
  )
}

export default ForgotPassword
