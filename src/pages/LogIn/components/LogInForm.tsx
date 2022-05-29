import { ForgotPassword } from 'pages/LogIn/components'
import { FormData, LogInFormProps } from 'pages/LogIn/components/types'
import { TextInput, GreenBtn } from 'components'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import axios from 'axios'

const LogInForm: React.FC<LogInFormProps> = (props) => {
  const navigate = useNavigate()
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
      Username: '',
      Password: '',
    },
  })

  const submitHandler = async (data: FormData) => {
    try {
      let response = await axios({
        method: 'post',
        url: 'https://coronatime-api.devtest.ge/api/LogIn',
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
        data: JSON.stringify({
          username: data.Username,
          password: data.Password,
        }),
      })
      if (response.status === 200) {
        setApiError(false)
        props.setUser(watch().Username)
        localStorage.setItem('Username', watch().Username)
        localStorage.setItem('token', response.data.token)
        navigate('/Dashboard/Worldwide', { replace: true })
      }
    } catch (error) {
      setApiError(true)
    }
  }

  const formState = {
    showErrors: true,
    dirtyFields,
    register,
    apiError,
    errors,
  }

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className='flex flex-col'>
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
      <ForgotPassword />
      <GreenBtn text='Log in' />
    </form>
  )
}

export default LogInForm
