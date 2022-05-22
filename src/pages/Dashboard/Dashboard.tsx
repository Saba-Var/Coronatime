import CountriesProvider from 'state/CountriesContext'
import { Header } from 'pages/Dashboard/components'
import { Outlet } from 'react-router-dom'

const Dashboard: React.FC<{ user: string }> = (props) => {
  return (
    <CountriesProvider>
      <div>
        <Header user={props.user} />
        <Outlet />
      </div>
    </CountriesProvider>
  )
}

export default Dashboard
