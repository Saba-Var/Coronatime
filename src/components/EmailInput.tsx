import { useTranslation } from 'react-i18next'
import { ErrorMessage } from 'components'

const EmailInput: React.FC<{
  register: any
  label: string
  errors: any
  valid: string
}> = (props) => {
  const { t } = useTranslation()

  return (
    <div className='flex flex-col gap-2 '>
      <label className='text-black'>{t(props.label)}</label>
      <input
        {...props.register(props.label, {
          required: t('Required'),
          validate: {
            'email format': (v: any) =>
              (v.includes('@') && v.includes('.')) || props.valid,
          },
        })}
        type='text'
        className={`border-border-gray border-[1px] h-14 px-6 rounded-lg focus:ring-2 focus:border-link-blue outline-none ${
          props.errors && 'border-red border-2'
        } bg-transparent`}
        placeholder={t('Email Placeholder')}
      />

      {props.errors && <ErrorMessage text={props.valid} error={props.errors} />}
    </div>
  )
}

export default EmailInput
