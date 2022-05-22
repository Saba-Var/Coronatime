import CountriesProvider from 'state/CountriesContext'
import { Header } from 'pages/Dashboard/components'
import { Outlet } from 'react-router-dom'

const Dashboard: React.FC<{ user: string; token: string }> = (props) => {
  return (
    <CountriesProvider temporaryToken={props.token}>
      <div>
        <Header user={props.user} />
        <Outlet />
      </div>
    </CountriesProvider>
  )
}

export default Dashboard
