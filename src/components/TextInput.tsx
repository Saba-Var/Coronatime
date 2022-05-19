import { useTranslation } from 'react-i18next'
import { ErrorMessage } from 'components'
import { CorrectIcon } from 'components/svgs'

type props = {
  dirtyFields?: any
  value?: number
  placeholder: string
  apiError?: boolean
  message?: string
  unique?: string
  register: any
  label: string
  type: string
  required?: string
  errors?: {}
}

const TextInput: React.FC<props> = (props) => {
  const { t } = useTranslation()
  const isCorrect =
    props.dirtyFields[props.label] && !props.errors && !props.apiError
  return (
    <div className='flex flex-col gap-2 relative'>
      <label className='text-black'>{t(props.label)}</label>
      <input
        {...props.register(props.label, {
          required: true,
          minLength: {
            value: props.value,
            message: props.message,
          },
        })}
        type={props.type}
        className={`border-border-gray border-[1px] h-14 px-6 rounded-lg focus:ring-2 focus:border-link-blue outline-none ${
          (props.apiError || props.errors) && 'border-red border-2'
        } bg-transparent ${isCorrect && 'border-green'}`}
        placeholder={props.placeholder}
      />
      {!props.errors && props.apiError && (
        <ErrorMessage text={props.message} apiError={props.apiError} />
      )}
      {props.errors && (
        <ErrorMessage
          text={props.unique || props.required}
          error={props.errors}
        />
      )}
      {isCorrect && <CorrectIcon />}
    </div>
  )
}

export default TextInput
