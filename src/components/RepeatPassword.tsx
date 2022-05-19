import { useTranslation } from 'react-i18next'
import { ErrorMessage } from 'components'

const RepeatPassword: React.FC<{
  register: any
  label: string
  errors: any
  valid: string
  data: any
  required: string
}> = (props) => {
  const { t } = useTranslation()
  console.log(props.data['Repeat Password'], props.data.Password)
  return (
    <div className='flex flex-col gap-2 '>
      <label className='text-black'>{t(props.label)}</label>
      <input
        {...props.register(props.label, {
          required: 'Required',
          validate: {
            'same password': () =>
              props.data['Repeat Password'] === props.data.Password ||
              'Password match',
          },
        })}
        type='password'
        className={`border-border-gray border-[1px] h-14 px-6 rounded-lg focus:ring-2 focus:border-link-blue outline-none ${
          props.errors && 'border-red border-2'
        } bg-transparent`}
        placeholder={t('Email Placeholder')}
      />
      {props.errors && (
        <ErrorMessage text={t(props.errors.message)} error={props.errors} />
      )}
    </div>
  )
}

export default RepeatPassword
