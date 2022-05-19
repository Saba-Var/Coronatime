import { useTranslation } from 'react-i18next'
import { ErrorMessage } from 'components'

const RepeatPassword: React.FC<{
  required: string
  register: any
  label: string
  valid: string
  errors: any
  data: any
}> = (props) => {
  const { t } = useTranslation()
  const match = props.data['Repeat Password'] !== props.data.Password
  return (
    <div className='flex flex-col gap-2 '>
      <label className='text-black'>{t(props.label)}</label>
      <input
        {...props.register(props.label, {
          required: 'Required',
        })}
        type='password'
        className={`border-border-gray border-[1px] h-14 px-6 rounded-lg focus:ring-2 focus:border-link-blue outline-none ${
          (props.errors || match) && 'border-red border-2'
        } bg-transparent`}
        placeholder={t('Email Placeholder')}
      />
      {props.errors && !match && (
        <ErrorMessage text={t(props.errors.message)} error={props.errors} />
      )}
      {match && (
        <ErrorMessage text={t('Password match')} error={props.errors} />
      )}
    </div>
  )
}

export default RepeatPassword
