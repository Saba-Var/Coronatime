import { useTranslation } from 'react-i18next'
import { ErrorMessage } from 'components'

type propsType = {
  required: string
  register: any
  label: string
  valid: string
  errors: any
  data: any
}

const RepeatPassword: React.FC<propsType> = (props) => {
  const match = props.data['Repeat Password'] !== props.data.Password
  const { t } = useTranslation()

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
        placeholder={t('Repeat Password')}
      />
      {props.errors && !match && (
        <ErrorMessage text={t(props.errors.message)} error={props.errors} />
      )}
      {match && <ErrorMessage text={t('Password match')} error={match} />}
    </div>
  )
}

export default RepeatPassword
