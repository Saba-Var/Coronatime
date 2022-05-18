import { SignUpFree, WelcomeText, Wrapper } from 'pages/Login/components'
import { LoginForm } from 'pages/Login/components'
import { Logo } from 'components/svgs'
import { Language } from 'components'

function Login() {
  return (
    <Wrapper>
      <>
        <Logo />
        <WelcomeText />
        <LoginForm />
        <SignUpFree />
        <div className='flex justify-center pt-5'>
          <Language />
        </div>
      </>
    </Wrapper>
  )
}

export default Login
