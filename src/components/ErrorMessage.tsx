import { ErrorIcon } from 'components/svgs'
import { ErrMsg } from 'components/types'

const ErrorMessage: React.FC<ErrMsg> = (props) => {
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
