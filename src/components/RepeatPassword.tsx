import { PasswordProps } from 'components/types'
import { useTranslation } from 'react-i18next'
import { CorrectIcon } from 'components/svgs'
import { ErrorMessage } from 'components'

const RepeatPassword: React.FC<PasswordProps> = (props) => {
  const { t } = useTranslation()

  const match = props.data['Repeat Password'] !== props.data.Password
  const required = props.errors && !match
  const isCorrect = !match && !required && props.dirtyFields['Repeat Password']

  return (
    <div className='flex flex-col gap-[2px] relative'>
      <label className='text-black font-black'>{t(props.label)}</label>
      <input
        data-TestId={props.label}
        {...props.register(props.label, {
          required: 'Required',
        })}
        type='password'
        className={`border-border-gray border-[1px] h-14 px-6 rounded-lg focus:ring-2 focus:border-link-blue outline-none ${
          (props.errors || match) && 'border-red border-2'
        } bg-transparent ${isCorrect && 'border-green'}`}
        placeholder={t('Repeat Password')}
      />

      <ErrorMessage
        show={required}
        text={t(props.errors?.message)}
        error={props.errors}
      />

      <ErrorMessage show={match} text={t('Password match')} error={match} />
      {isCorrect && <CorrectIcon />}
    </div>
  )
}

export default RepeatPassword
