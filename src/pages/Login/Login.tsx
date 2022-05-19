import { SignUpFree, LoginForm } from 'pages/Login/components'
import { useTranslation } from 'react-i18next'
import { Wrapper } from 'components'

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
