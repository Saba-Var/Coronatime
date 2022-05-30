import { RecoveryWrapper, TextInput, GreenBtn } from 'components'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import axios from 'axios'

const RecoveryPasswordByEmail = () => {
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

  const submitHandler = async () => {
    try {
      let response = await axios({
        method: 'post',
        url: 'https://coronatime-api.devtest.ge/api/password/send-recovery-link',
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
        data: JSON.stringify({
          email: watch().Email,
          backlink:
            'http://coronatime.sabavar.redberryinternship.ge/Verify-password',
        }),
      })
      if (response.status === 200) {
        setApiError(false)
        navigate('/Confirmation-email', { replace: true })
      }
    } catch (error) {
      setApiError(true)
    }
  }

  return (
    <RecoveryWrapper>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className='flex flex-col h-screen justify-between  md:justify-start md:gap-4'
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
        <div className='flex flex-col gap-3'>
          <GreenBtn text='RESET PASSWORD' />
        </div>
      </form>
    </RecoveryWrapper>
  )
}

export default RecoveryPasswordByEmail
