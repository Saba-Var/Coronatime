import SignupForm from './components/SignupForm'
import { useTranslation } from 'react-i18next'
import { Wrapper, Question } from 'components'

function Signup() {
  const { t } = useTranslation()

  return (
    <Wrapper
      page='signup'
      title={t('Welcome CoronaTime')}
      details={t('Enter info')}
    >
      <>
        <SignupForm />
        <Question question={t('Have account')} action={t('Sign')} link='/' />
      </>
    </Wrapper>
  )
}

export default Signup
