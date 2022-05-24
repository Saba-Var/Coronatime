import { useTranslation } from 'react-i18next'
import { VerifiedSignIn } from 'components'
import { useNavigate } from 'react-router-dom'

function PasswordConfirmation() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  const clickHandler = () => {
    navigate('/', { replace: true })
  }

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
