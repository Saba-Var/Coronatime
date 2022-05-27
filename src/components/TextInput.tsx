import { InputFieldProps } from 'components/types'
import { useTranslation } from 'react-i18next'
import { CorrectIcon } from 'components/svgs'
import { ErrorMessage } from 'components'

const TextInput: React.FC<InputFieldProps> = (props) => {
  const formState = props.formState
  const error = formState.errors[props.label]
  const { t } = useTranslation()

  const isCorrect =
    formState.dirtyFields[props.label] && !error && !formState.apiError

  return (
    <div className='flex flex-col gap-[2px] relative h-[100px]'>
      <label className='text-black font-bold text-sm'>{t(props.label)}</label>
      <input
        data-TestId={props.label}
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
      {!error && props.page === 'SignUp' && (
        <p className='text-sm text-gray'>{t('unique')}</p>
      )}
    </div>
  )
}

export default TextInput
