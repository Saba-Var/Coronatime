import { useTranslation } from 'react-i18next'
import { ErrorMessage } from 'components'

type props = {
  label: string
  register: any
  type: string
  apiError: boolean
  message: string
  errors?: {}
  unique?: string
}

const TextInput: React.FC<props> = (props) => {
  const { t } = useTranslation()
  return (
    <div className='flex flex-col gap-2 '>
      <label className='text-black'>{t(props.label)}</label>
      <input
        {...props.register(props.label, {
          required: true,
          minLength: {
            value: props.label === 'Username' ? 3 : 1,
            message: 'Must be unique',
          },
        })}
        type={props.type}
        className={`border-border-gray bg-transparent border-[1px] h-14 px-6 rounded-lg focus:ring-2 focus:border-link-blue outline-none ${
          (props.apiError || props.errors) && 'border-red border-2'
        }`}
        placeholder={t(props.label + ' placeholder')}
      />
      {!props.errors && props.apiError && <ErrorMessage text={props.message} />}
      {props.errors && <ErrorMessage text={props.unique} />}
    </div>
  )
}

export default TextInput
