import { useSearchParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { VerifiedSignIn } from 'components'
import axios from 'axios'

function ConfirmedEmail() {
  const [searchParams] = useSearchParams()
  const hash = searchParams.get('hash')
  const navigate = useNavigate()
  const { t } = useTranslation()

  const onclickHandler = async () => {
    try {
      let response = await axios({
        method: 'post',
        url: 'https://coronatime-api.devtest.ge/api/confirm-account',
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
        data: {
          hash,
        },
      })
      if (response.status === 200) navigate('/', { replace: true })
    } catch (error: any) {
      alert(`${error.message} 📛`)
    }
  }

  return (
    <VerifiedSignIn
      btnText={t('Sign in')}
      text={t('Confirmed account')}
      onClick={onclickHandler}
    />
  )
}

export default ConfirmedEmail
