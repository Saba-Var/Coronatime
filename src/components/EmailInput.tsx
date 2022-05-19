import { useTranslation } from 'react-i18next'
import { CorrectIcon } from 'components/svgs'
import { ErrorMessage } from 'components'

type propsType = {
  register: any
  label: string
  errors: any
  valid: string
  dirtyFields: any
}

const EmailInput: React.FC<propsType> = (props) => {
  const isCorrect = !props.errors && props.dirtyFields[props.label]
  const { t } = useTranslation()
  return (
    <div className='flex flex-col gap-2 relative'>
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
        } bg-transparent ${isCorrect && 'border-green'}`}
        placeholder={t('Email Placeholder')}
      />
      {props.errors && <ErrorMessage text={props.valid} error={props.errors} />}
      {isCorrect && <CorrectIcon />}
    </div>
  )
}

export default EmailInput
