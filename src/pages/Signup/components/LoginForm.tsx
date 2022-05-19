import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { GreenBtn } from 'components'

type formData = {
  Username: string
  Email: string
}

function LoginForm() {
  const { t } = useTranslation()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all',
    defaultValues: {
      Username: '',
      Email: '',
    },
  })

  const submitHandler = (data: formData): void => {}

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className='flex flex-col gap-4'> </div>

      <GreenBtn text={t('SIGN UP')} />
    </form>
  )
}

export default LoginForm
