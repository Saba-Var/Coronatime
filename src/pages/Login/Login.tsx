import { LoginForm } from 'pages/Login/components'
import { useTranslation } from 'react-i18next'
import { Wrapper, Question } from 'components'

function Login() {
  const { t } = useTranslation()

  return (
    <Wrapper title={t('Welcome Back')} details={t('Enter details')}>
      <>
        <LoginForm />
        <Question
          question={t('Dont have')}
          action={t('Sign up')}
          link='/Sign-up'
        />
      </>
    </Wrapper>
  )
}

export default Login
