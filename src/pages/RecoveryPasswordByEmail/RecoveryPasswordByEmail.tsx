import { RecoveryWrapper, TextInput, GreenBtn } from 'components'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import axios from 'axios'

const RecoveryPasswordByEmail: React.FC<{}> = (props) => {
  const [apiError, setApiError] = useState<boolean>(false)
  const navigate = useNavigate()
  const { t } = useTranslation()
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm({
    mode: 'all',
    defaultValues: {
      Email: '',
    },
  })

  const formState = {
    dirtyFields,
    register,
    apiError,
    errors,
  }
  const submitHandler = () => {
    axios({
      method: 'post',
      url: 'https://coronatime-api.devtest.ge/api/password/send-recovery-link',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
      data: JSON.stringify({
        email: watch().Email,
        backlink: 'http://localhost:3000/Verify-password',
      }),
    })
      .then((res) => {
        if (res.status === 200) {
          setApiError(false)
          navigate('/Confirmation-email', { replace: true })
        }
      })
      .catch((error) => {
        if (error) setApiError(true)
      })
  }

  return (
    <RecoveryWrapper>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className='flex flex-col gap-[300px] md:gap-4'
      >
        <TextInput
          placeholder={t('Email Placeholder')}
          message={t('Email Address')}
          formState={formState}
          unique={t('Valid email')}
          label='Email'
          type='text'
          value={3}
        />
        <GreenBtn text='RESET PASSWORD' />
      </form>
    </RecoveryWrapper>
  )
}

export default RecoveryPasswordByEmail
