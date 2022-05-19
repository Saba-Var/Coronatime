import { useTranslation } from 'react-i18next'
import { Wrapper } from 'components'
import { LoginForm } from 'pages/Signup/components'

function Signup() {
  const { t } = useTranslation()
  return (
    <Wrapper title={t('Welcome CoronaTime')} details={t('Enter info')}>
      <>
        <LoginForm />
      </>
    </Wrapper>
  )
}

export default Signup
