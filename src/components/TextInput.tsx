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
    <div className='flex flex-col gap-[2px] relative'>
      <label className='text-black font-bold text-sm'>{t(props.label)}</label>
      <input
        {...formState.register(props.label, {
          required: true,
          minLength: {
            value: props.value,
            message: props.message,
          },
          validate: {
            'email format': (v: any) => {
              if (props.label === 'Email')
                return (
                  String(v)
                    .toLowerCase()
                    .match(
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    ) || 'incorrect format'
                )
            },
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
