import { GreenBtn, TextInput, EmailInput, RepeatPassword } from 'components'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'

type formData = {
  Username: string
  Email: string
}

function SignupForm() {
  const { t } = useTranslation()

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all',
    defaultValues: {
      Username: '',
      Email: '',
      Password: '',
      'Repeat Password': '',
    },
  })

  const submitHandler = (data: formData): void => {}

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className='flex flex-col gap-4'>
        <TextInput
          placeholder={t('Username placeholder')}
          errors={errors.Username}
          unique={t('unique')}
          register={register}
          label='Username'
          type='text'
          value={3}
        />
        <EmailInput
          register={register}
          label={'Email'}
          errors={errors.Email}
          valid={t('Valid email')}
        />
        <TextInput
          placeholder={t('Password placeholder')}
          errors={errors.Password}
          unique={t('Unique Password')}
          register={register}
          label='Password'
          type='password'
          value={3}
        />
        <RepeatPassword
          data={watch()}
          register={register}
          label={'Repeat Password'}
          errors={errors['Repeat Password']}
          valid={t(`Password match`)}
          required={t('Required')}
        />
      </div>
      <GreenBtn text={t('SIGN UP')} />
    </form>
  )
}

export default SignupForm
