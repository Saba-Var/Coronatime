import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function SignUpFree() {
  const { t } = useTranslation()

  return (
    <div className='mt-6'>
      <p className='text-gray text-center'>
        {t('Dont have')}
        <Link to='/Sign-up' className='text-black text-sm font-semibold'>
          {' '}
          {t('Sign up')}
        </Link>
      </p>
    </div>
  )
}

export default SignUpFree
