import { PasswordProps } from 'components/types'
import { useTranslation } from 'react-i18next'
import { CorrectIcon } from 'components/svgs'
import { ErrorMessage } from 'components'

const RepeatPassword: React.FC<PasswordProps> = (props) => {
  const { t } = useTranslation()

  const match = props.data['Repeat Password'] !== props.data.Password
  const required = props.errors && !match
  const isCorrect = !match && !required && props.dirtyFields['Repeat Password']

  const isError =
    (!props.errors?.message && match && props.dirtyFields['Repeat Password']) ||
    props.errors?.message

  return (
    <div className='flex flex-col gap-[2px] relative h-[108px]'>
      <label className='text-black font-black'>{t(props.label)}</label>
      <input
        data-TestId={props.label}
        {...props.register(props.label, {
          required: 'Required',
          validate: {
            minLength: (v: string) => v.length >= 3 || 'Unique Password',
          },
        })}
        type='password'
        className={`border-border-gray border-[1px] h-14 px-6 rounded-lg focus:ring-ringBlue focus:ring-4 focus:border-link-blue outline-none ${
          isError && 'border-red border-2'
        } bg-transparent ${isCorrect && 'border-green'}`}
        placeholder={t('Repeat Password')}
      />

      <ErrorMessage
        show={props.errors?.message}
        text={t(props.errors?.message)}
        error={props.errors}
      />

      <ErrorMessage
        show={
          !props.errors?.message &&
          match &&
          props.dirtyFields['Repeat Password']
        }
        text={t('Password match')}
        error={match}
      />
      {isCorrect && <CorrectIcon />}
    </div>
  )
}

export default RepeatPassword
