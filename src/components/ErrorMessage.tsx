import { ErrorIcon } from 'components/svgs'

const ErrorMessage: React.FC<{
  text: string | undefined
  apiError?: any
  error?: any
}> = (props) => {
  return (
    <div className='flex items-center gap-2'>
      {(props.apiError || props.error) && <ErrorIcon />}
      <p className='text-red text-sm'>{props.text}</p>
    </div>
  )
}

export default ErrorMessage
