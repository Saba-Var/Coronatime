import SignUpForm from './components/SignUpForm'
import { useTranslation } from 'react-i18next'
import { Wrapper, Question } from 'components'

const SignUp = () => {
  const { t } = useTranslation()

  return (
    <Wrapper
      page='SignUp'
      title={t('Welcome CoronaTime')}
      details={t('Enter info')}
    >
      <>
        <SignUpForm />
        <Question question={t('Have account')} action={t('Sign')} link='/' />
      </>
    </Wrapper>
  )
}

export default SignUp
