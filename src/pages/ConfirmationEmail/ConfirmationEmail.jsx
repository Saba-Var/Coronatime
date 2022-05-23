import { useTranslation } from 'react-i18next'
import { Confirmation } from 'components'

const ConfirmationEmail = () => {
  const { t } = useTranslation()

  return (
    <>
      <Confirmation text={t('Confirm Email')} />
    </>
  )
}

export default ConfirmationEmail
