import { ForgotPassword } from 'pages/Login/components'
import { TextInput, GreenBtn } from 'components'

function LoginForm() {
  return (
    <form>
      <div className='flex flex-col gap-4'>
        <TextInput
          type='text'
          label='Username'
          placeholder='Enter unique username or email'
        />
        <TextInput
          type='password'
          label='Password'
          placeholder='Fill in password'
        />
      </div>
      <ForgotPassword />
      <GreenBtn text='LOG IN' />
    </form>
  )
}

export default LoginForm
