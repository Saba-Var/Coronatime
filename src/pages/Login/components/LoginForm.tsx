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

const LoginForm: React.FC<{ setUser: any }> = (props) => {
  const { t } = useTranslation()
  const [apiError, setApiError] = useState<boolean>(false)

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm({
    mode: 'all',
    defaultValues: {
      Checkbox: false,
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
      .then((res) => {
        if (res.status === 200) {
          setApiError(false)
          props.setUser(watch().Username)
          if (watch().Checkbox)
            localStorage.setItem('Username', watch().Username)
        }
      })
      .catch((error) => {
        if (error) setApiError(true)
      })
  }

  const formState = {
    dirtyFields,
    register,
    apiError,
    errors,
  }

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className='flex flex-col gap-4'>
        <TextInput
          placeholder={t('Username placeholder')}
          message={t('Name not found')}
          formState={formState}
          unique={t('unique')}
          label='Username'
          type='text'
          value={3}
        />
        <TextInput
          placeholder={t('Password placeholder')}
          message={t('Password not found')}
          required={t('Required')}
          formState={formState}
          label='Password'
          type='password'
        />
      </div>
      <ForgotPassword register={register} />
      <GreenBtn text='Log in' />
    </form>
  )
}

export default LoginForm
