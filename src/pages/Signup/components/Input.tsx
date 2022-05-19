import { ErrorMessage } from 'components'
const Input: React.FC<{
  register: any
  label: string
  placeholder: string
  ErrorMsg: string
  type: string
  errors?: any
}> = (props) => {
  return (
    <div className='flex flex-col gap-2 '>
      <label className='text-black'>{props.label}</label>
      <input
        {...props.register(props.label, {
          required: true,
          minLength: {
            value: props.type !== 'password' ? 3 : 1,
            message: 'Must be unique',
          },
        })}
        type={props.type}
        className={`border-border-gray bg-transparent border-[1px] h-14 px-6 rounded-lg focus:ring-2 focus:border-link-blue outline-none`}
        placeholder={props.placeholder}
      />

      {props.errors && <ErrorMessage text={props.ErrorMsg} />}
    </div>
  )
}

export default Input
