import { useTranslation } from 'react-i18next'
import { ErrorMessage } from 'components'
import { CorrectIcon } from 'components/svgs'

type props = {
  placeholder: string
  required?: string
  message?: string
  unique?: string
  value?: number
  label: string
  page?: string
  type: string

  formState: {
    apiError?: boolean
    dirtyFields: any
    register: any
    errors: any
  }
}

const TextInput: React.FC<props> = (props) => {
  const formState = props.formState
  const error = formState.errors[props.label]
  const { t } = useTranslation()

  const isCorrect =
    formState.dirtyFields[props.label] && !error && !formState.apiError

  return (
    <div className='flex flex-col gap-2 relative'>
      <label className='text-black'>{t(props.label)}</label>
      <input
        {...formState.register(props.label, {
          required: true,
          minLength: {
            value: props.value,
            message: props.message,
          },
        })}
        type={props.type}
        className={`border-border-gray border-[1px] h-14 px-6 rounded-lg focus:ring-2 focus:border-link-blue outline-none ${
          (formState.apiError || error) && 'border-red border-2'
        } bg-transparent ${isCorrect && 'border-green'}`}
        placeholder={props.placeholder}
      />

      <ErrorMessage
        show={!error && formState.apiError}
        text={props.message}
        apiError={formState.apiError}
      />

      <ErrorMessage
        show={error}
        text={props.unique || props.required}
        error={error}
      />

      {isCorrect && <CorrectIcon />}
      {!error && props.page === 'Signup' && (
        <p className='text-sm text-gray'>{t('unique')}</p>
      )}
    </div>
  )
}

export default TextInput
