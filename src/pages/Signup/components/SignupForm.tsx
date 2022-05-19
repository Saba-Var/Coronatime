import { GreenBtn, TextInput, EmailInput, RepeatPassword } from 'components'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { Remember } from 'components'

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
          dirtyFields={dirtyFields}
          errors={errors.Username}
          unique={t('unique')}
          register={register}
          label='Username'
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
          dirtyFields={dirtyFields}
          errors={errors.Password}
          register={register}
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
