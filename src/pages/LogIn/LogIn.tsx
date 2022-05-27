import { LogInForm } from 'pages/LogIn/components'
import { useTranslation } from 'react-i18next'
import { Wrapper, Question } from 'components'
import { useNavigate } from 'react-router-dom'
import { LogInProps } from 'pages/LogIn/types'
import { useEffect } from 'react'

const LogIn: React.FC<LogInProps> = (props) => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem('token')) navigate('/Dashboard/Worldwide')
  }, [navigate])

  return (
    <Wrapper
      page='LogIn'
      title={t('Welcome back')}
      details={t('Enter details')}
    >
      <>
        <LogInForm setUser={props.setUser} />
        <Question
          question={t('Dont have')}
          action={t('Sign up')}
          link='/Sign-up'
        />
      </>
    </Wrapper>
  )
}

export default LogIn
