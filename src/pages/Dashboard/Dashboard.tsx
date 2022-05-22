import CountriesProvider from 'state/CountriesContext'
import { Header } from 'pages/Dashboard/components'
import { Outlet } from 'react-router-dom'

const Dashboard: React.FC<{
  user: string
  token: string
  setToken: (token: string) => void
}> = (props) => {
  return (
    <CountriesProvider temporaryToken={props.token}>
      <div>
        <Header user={props.user} setToken={props.setToken} />
        <Outlet />
      </div>
    </CountriesProvider>
  )
}

export default Dashboard
