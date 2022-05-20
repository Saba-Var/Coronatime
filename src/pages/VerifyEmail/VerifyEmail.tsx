import { useSearchParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ConfirmText } from 'components'
import { Language } from 'components'
import { GreenBtn } from 'components'
import axios from 'axios'

const VerifyEmail = () => {
  const [searchParams] = useSearchParams()
  const hash = searchParams.get('hash')
  const navigate = useNavigate()
  const { t } = useTranslation()

  const onclickHandler = () => {
    axios({
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
      .then((res) => {
        if (res.status === 200) navigate('/Confirmed-email', { replace: true })
      })
      .catch((error) => {
        if (error) alert(`${error.message} 📛`)
      })
  }
  return (
    <>
      <ConfirmText title={t('Confirmation email')} action={t('Verify email')} />
      <div className='w-[343px] md:w-[392] flex justify-center mx-auto'>
        <GreenBtn text={t('VERIFY EMAIL')} onClick={onclickHandler} />
      </div>
      <div className='flex justify-center mt-8'>
        <Language />
      </div>
    </>
  )
}

export default VerifyEmail
