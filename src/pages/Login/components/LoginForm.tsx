import { ForgotPassword } from 'pages/Login/components'
import { TextInput, GreenBtn } from 'components'

function LoginForm() {
  return (
    <form>
      <div className='flex flex-col gap-4'>
        <TextInput type='text' label='Username' />
        <TextInput type='password' label='Password' />
      </div>
      <ForgotPassword />
      <GreenBtn text='Log in' />
    </form>
  )
}

export default LoginForm
