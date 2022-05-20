import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { VerifiedSignIn } from 'components'

function ConfirmedEmail() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  const onClickHandler = () => {
    navigate('/', { replace: true })
  }
  return (
    <VerifiedSignIn
      btnText={t('Sign in')}
      text={t('Confirmed account')}
      onClick={onClickHandler}
    />
  )
}

export default ConfirmedEmail
