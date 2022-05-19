import SignupForm from './components/SignupForm'
import { useTranslation } from 'react-i18next'
import { Wrapper } from 'components'

function Signup() {
  const { t } = useTranslation()
  return (
    <Wrapper title={t('Welcome CoronaTime')} details={t('Enter info')}>
      <>
        <SignupForm />
      </>
    </Wrapper>
  )
}

export default Signup
