import { useTranslation } from 'react-i18next'

const LogOut: React.FC<{ styles: string }> = (props) => {
  const { t } = useTranslation()

  return (
    <p className={`${props.styles} font-medium text-sm cursor-pointer`}>
      {t('Log Out')}
    </p>
  )
}

export default LogOut
