import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

type propsType = {
  styles: string
  setToken: (token: string) => void
}

const LogOut: React.FC<propsType> = (props) => {
  const navigate = useNavigate()

  const { t } = useTranslation()
  const clickHandler = () => {
    props.setToken('')
    localStorage.removeItem('token')
    localStorage.removeItem('Username')
    navigate('/', { replace: true })
  }

  return (
    <p
      onClick={clickHandler}
      className={`${props.styles} font-medium text-sm cursor-pointer`}
    >
      {t('Log Out')}
    </p>
  )
}

export default LogOut
