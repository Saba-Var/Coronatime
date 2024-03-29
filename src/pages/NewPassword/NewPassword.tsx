import { useSearchParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import {
  RecoveryWrapper,
  TextInput,
  GreenBtn,
  RepeatPassword,
} from 'components'

const NewPassword = () => {
  const [searchParams] = useSearchParams()
  const hash = searchParams.get('hash')
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
      'Repeat Password': '',
      Password: '',
    },
  })

  const formState = {
    dirtyFields,
    register,
    errors,
  }

  const submitHandler = async () => {
    let response = await axios({
      method: 'post',
      url: 'https://coronatime-api.devtest.ge/api/password/recover',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
      data: JSON.stringify({
        hash,
        password: watch().Password,
        repeatPassword: watch()['Repeat Password'],
      }),
    })
    if (response.status === 200)
      navigate('/Password-confirmation', { replace: true })
  }

  return (
    <RecoveryWrapper>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className='flex flex-col h-screen justify-between md:justify-start'
      >
        <div className='flex flex-col'>
          <TextInput
            placeholder={t('Password placeholder')}
            unique={t('Unique Password')}
            formState={formState}
            showErrors={true}
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
        <div className='flex flex-col gap-3'>
          <GreenBtn text='RESET PASSWORD' />
        </div>
      </form>
    </RecoveryWrapper>
  )
}

export default NewPassword
