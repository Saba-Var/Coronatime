import { LogOutProps } from 'pages/Dashboard/components/types'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

const LogOut: React.FC<LogOutProps> = (props) => {
  const navigate = useNavigate()

  const { t } = useTranslation()
  const clickHandler = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('Username')
    navigate('/', { replace: true })
  }

  return (
    <p
      data-TestId='LogOut'
      onClick={clickHandler}
      className={`${props.styles} font-medium text-sm cursor-pointer`}
    >
      {t('Log Out')}
    </p>
  )
}

export default LogOut
