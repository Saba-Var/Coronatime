import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'
import {
  RecoveryWrapper,
  TextInput,
  GreenBtn,
  RepeatPassword,
} from 'components'

const NewPassword: React.FC<{}> = (props) => {
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

  const submitHandler = () => {
    axios({
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
      .then((res) => {
        if (res.status === 200) {
          navigate('/Password-confirmation', { replace: true })
        }
      })
      .catch((error) => {
        if (error) alert(`${error.message} 📛`)
      })
  }

  return (
    <RecoveryWrapper>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className='flex flex-col gap-[300px] md:gap-4'
      >
        <div className='flex flex-col gap-3 md:gap-6'>
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
        <GreenBtn text='RESET PASSWORD' />
      </form>
    </RecoveryWrapper>
  )
}

export default NewPassword