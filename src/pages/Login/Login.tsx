import { LoginForm } from 'pages/Login/components'
import { useTranslation } from 'react-i18next'
import { Wrapper, Question } from 'components'
import { useNavigate } from 'react-router-dom'
import { LogInProps } from 'pages/Login/types'
import { useEffect } from 'react'

const Login: React.FC<LogInProps> = (props) => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem('token')) navigate('/Dashboard/Worldwide')
  }, [navigate])

  return (
    <Wrapper
      page='login'
      title={t('Welcome back')}
      details={t('Enter details')}
    >
      <>
        <LoginForm setUser={props.setUser} />
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
