import { ErrorIcon } from 'components/svgs'
const ErrorMessage: React.FC<{ text: string | undefined }> = (props) => {
  return (
    <div className='flex items-center gap-2'>
      <ErrorIcon />
      <p className='text-gray text-sm'>{props.text}</p>
    </div>
  )
}

export default ErrorMessage
