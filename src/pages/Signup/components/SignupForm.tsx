import { GreenBtn, TextInput, EmailInput, RepeatPassword } from 'components'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { formData } from 'pages/Signup/types'
import { useForm } from 'react-hook-form'
import { Remember } from 'components'
import axios from 'axios'

function SignupForm() {
  const { t } = useTranslation()
  let navigate = useNavigate()
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

  const submitHandler = (data: formData): void => {
    if (isValid && passwordMatch) {
      const newUser = JSON.stringify({
        username: data.Username,
        email: data.Email,
        password: data.Password,
        repeatPassword: data['Repeat Password'],
        redirectOnConfirm: '/Verify-email',
      })
      axios({
        method: 'post',
        url: 'https://coronatime-api.devtest.ge/api/register',
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
        data: newUser,
      })
        .then((res) => {
          if (res.statusText === 'Created')
            navigate('/Confirmation-email', { replace: true })
        })
        .catch((error) => {
          if (error) alert(`${error.message} 📛`)
        })
    }
  }

  const formState = {
    dirtyFields,
    errors,
    register,
  }

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className='flex flex-col gap-4'>
        <TextInput
          placeholder={t('Username placeholder')}
          formState={formState}
          unique={t('unique')}
          label='Username'
          page='Signup'
          type='text'
          value={3}
        />
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
      <Remember marginTop='mt-6' />
      <GreenBtn text={t('SIGN UP')} />
    </form>
  )
}

export default SignupForm
