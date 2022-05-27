import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FormData } from 'pages/Signup/types'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import axios from 'axios'
import {
  ErrorAlert,
  GreenBtn,
  TextInput,
  EmailInput,
  RepeatPassword,
} from 'components'

const SignupForm = () => {
  const { t } = useTranslation()
  let navigate = useNavigate()
  const [showAlert, setShowAlert] = useState<boolean>(false)
  const [message, setMessage] = useState<string>('')

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors, dirtyFields, isValid },
  } = useForm({
    mode: 'all',
    defaultValues: {
      Username: '',
      Email: '',
      Password: '',
      'Repeat Password': '',
    },
  })

  const passwordMatch = watch()['Repeat Password'] === watch().Password

  const submitHandler = async (data: FormData) => {
    if (isValid && passwordMatch) {
      try {
        const newUser = JSON.stringify({
          username: data.Username,
          email: data.Email,
          password: data.Password,
          repeatPassword: data['Repeat Password'],
          redirectOnConfirm: 'http://localhost:3000/Confirmed-email',
        })
        let response = await axios({
          method: 'post',
          url: 'https://coronatime-api.devtest.ge/api/register',
          headers: {
            'Content-Type': 'application/json',
            accept: 'application/json',
          },
          data: newUser,
        })
        if (response.status === 201) {
          setShowAlert(false)
          navigate('/Confirmation-email', { replace: true })
        }
      } catch (error: any) {
        setShowAlert(true)
        setMessage(error.response.data[0].message)
      }
    }
  }

  const formState = {
    dirtyFields,
    errors,
    register,
  }

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      {showAlert && (
        <ErrorAlert
          show={showAlert}
          setShowAlert={setShowAlert}
          message={message}
        />
      )}
      <div className='flex flex-col gap-4'>
        <div>
          <TextInput
            placeholder={t('Username placeholder')}
            formState={formState}
            unique={t('unique')}
            label='Username'
            page='Signup'
            type='text'
            value={3}
          />
        </div>
        <EmailInput
          dirtyFields={dirtyFields}
          valid={t('Valid email')}
          errors={errors.Email}
          register={register}
          label={'Email'}
        />
        <TextInput
          placeholder={t('Password placeholder')}
          unique={t('Unique Password')}
          formState={formState}
          label='Password'
          type='password'
          value={3}
        />
        <RepeatPassword
          errors={errors['Repeat Password']}
          valid={t(`Password match`)}
          dirtyFields={dirtyFields}
          label={'Repeat Password'}
          required={t('Required')}
          register={register}
          data={watch()}
        />
      </div>
      <GreenBtn text={t('SIGN UP')} />
    </form>
  )
}

export default SignupForm
