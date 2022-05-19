import { SignUpFree, Wrapper } from 'pages/Login/components'
import { LoginForm } from 'pages/Login/components'
import { useTranslation } from 'react-i18next'

function Login() {
  const { t } = useTranslation()

  return (
    <Wrapper title={t('Welcome Back')} details={t('Enter details')}>
      <>
        <LoginForm />
        <SignUpFree />
      </>
    </Wrapper>
  )
}

export default Login
