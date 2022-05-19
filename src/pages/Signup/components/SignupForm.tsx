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
    formState: { errors, dirtyFields },
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
          dirtyFields={dirtyFields}
        />
        <EmailInput
          register={register}
          label={'Email'}
          errors={errors.Email}
          valid={t('Valid email')}
          dirtyFields={dirtyFields}
        />
        <TextInput
          placeholder={t('Password placeholder')}
          unique={t('Unique Password')}
          errors={errors.Password}
          dirtyFields={dirtyFields}
          register={register}
          label='Password'
          type='password'
          value={3}
        />
        <RepeatPassword
          errors={errors['Repeat Password']}
          valid={t(`Password match`)}
          label={'Repeat Password'}
          required={t('Required')}
          register={register}
          data={watch()}
          dirtyFields={dirtyFields}
        />
      </div>
      <GreenBtn text={t('SIGN UP')} />
    </form>
  )
}

export default SignupForm
