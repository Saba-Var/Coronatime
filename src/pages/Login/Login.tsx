import { LoginForm } from 'pages/Login/components'
import { useTranslation } from 'react-i18next'
import { Wrapper, Question } from 'components'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Login: React.FC<{ setUser: any }> = (props) => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem('token')) navigate('/Dashboard/Worldwide')
  }, [navigate])

  return (
    <Wrapper title={t('Welcome Back')} details={t('Enter details')}>
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
