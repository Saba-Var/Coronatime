import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { VerifiedSignIn } from 'components'

function PasswordConfirmation() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const clickHandler = () => navigate('/', { replace: true })

  return (
    <>
      <VerifiedSignIn
        text={t('Password updated')}
        btnText={t('Sign in')}
        onClick={clickHandler}
      />
    </>
  )
}

export default PasswordConfirmation
