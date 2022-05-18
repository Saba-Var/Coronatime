import { ForgotPassword, SignUpFree } from 'pages/Login/components'
import { GreenBtn, Language } from 'components'
import { vaccines } from 'assets/images'
import { TextInput } from 'components'
import { Logo } from 'components/svgs'

function Login() {
  return (
    <div className='lg:flex lg:justify-between'>
      <div className='px-4 py-4 w-[375px] m-auto lg:m-0 lg:ml-[2%] xl:ml-[7%] lg:mt-[2%] lg:w-98'>
        <Logo />
        <h2 className='font-black  text-black text-xl mt-10'>Welcome back</h2>
        <p className='text-gray mb-6'>
          Welcome back! Please enter your details
        </p>
        <div className='flex flex-col gap-4'>
          <TextInput
            label='Username'
            placeholder='Enter unique username or email'
          />
          <TextInput label='Password' placeholder='Fill in password' />
        </div>
        <ForgotPassword />
        <GreenBtn text='LOG IN' />
        <SignUpFree />
        <div className='flex justify-center pt-5'>
          <Language />
        </div>
      </div>
      <img
        src={vaccines}
        className='hidden lg:block h-full'
        alt='covid-19 vaccines'
      />
    </div>
  )
}

export default Login
