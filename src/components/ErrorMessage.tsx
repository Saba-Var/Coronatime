import { ErrorIcon } from 'components/svgs'

type propsType = {
  text: string | undefined
  apiError?: any
  error?: any
  show: any
}

const ErrorMessage: React.FC<propsType> = (props) => {
  return (
    <>
      {props.show && (
        <div className='flex items-center gap-2'>
          {(props.apiError || props.error) && <ErrorIcon />}
          <p className='text-red text-sm'>{props.text}</p>
        </div>
      )}
    </>
  )
}

export default ErrorMessage
