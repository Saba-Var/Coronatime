import { useTranslation } from 'react-i18next'
import { CorrectIcon } from 'components/svgs'
import { EmailProps } from 'components/types'
import { ErrorMessage } from 'components'

const EmailInput: React.FC<EmailProps> = (props) => {
  const isCorrect = !props.errors && props.dirtyFields[props.label]
  const { t } = useTranslation()
  return (
    <div className='flex flex-col gap-[5px] relative h-[105px] my-2  '>
      <label className='text-black font-black text-base'>
        {t(props.label)}
      </label>
      <input
        data-TestId={props.label}
        {...props.register(props.label, {
          required: t('Required'),
          validate: {
            'email format': (v: any) => {
              return (
                String(v)
                  .toLowerCase()
                  .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                  ) || props.valid
              )
            },
          },
        })}
        type='text'
        className={`border-border-gray border-[1px] h-14 px-6 rounded-lg focus:ring-ringBlue focus:ring-4 focus:border-link-blue outline-none ${
          props.errors && 'border-red border-2'
        } bg-transparent ${isCorrect && 'border-green'}`}
        placeholder={t('Email Placeholder')}
      />
      <ErrorMessage
        text={props.valid}
        error={props.errors}
        show={props.errors}
      />
      {isCorrect && <CorrectIcon styles='top-[48px]' />}
    </div>
  )
}

export default EmailInput
