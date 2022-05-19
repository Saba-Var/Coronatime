import { ForgotPassword } from 'pages/Login/components'
import { TextInput, GreenBtn } from 'components'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import axios from 'axios'

type formData = {
  Username: string
  Password: string
}

function LoginForm() {
  const { t } = useTranslation()
  const [apiError, setApiError] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all',
    defaultValues: {
      Username: '',
      Password: '',
    },
  })

  const submitHandler = (data: formData): void => {
    axios({
      method: 'post',
      url: 'https://coronatime-api.devtest.ge/api/login',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },

      data: JSON.stringify({
        username: data.Username,
        password: data.Password,
      }),
    })
      .then((res) => setApiError(false))
      .catch((error) => {
        if (error) setApiError(true)
        console.log('error')
      })
  }

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className='flex flex-col gap-4'>
        <TextInput
          placeholder={t('Username placeholder')}
          message={t('Name not found')}
          errors={errors.Username}
          unique={t('unique')}
          register={register}
          apiError={apiError}
          label='Username'
          type='text'
        />
        <TextInput
          placeholder={t('Password placeholder')}
          message={t('Password not found')}
          register={register}
          apiError={apiError}
          errors={errors.Password}
          required={t('Unique Password')}
          label='Password'
          type='password'
        />
      </div>
      <ForgotPassword />
      <GreenBtn text='Log in' />
    </form>
  )
}

export default LoginForm
