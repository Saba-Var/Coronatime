import CountriesProvider from 'state/CountriesContext'
import { Header } from 'pages/Dashboard/components'
import { Outlet } from 'react-router-dom'

const Dashboard: React.FC<{
  user: string
  language: string
  setLanguage: (language: string) => void
}> = (props) => {
  return (
    <CountriesProvider>
      <div>
        <Header user={props.user} setLanguage={props.setLanguage} />
        <Outlet context={{ language: props.language }} />
      </div>
    </CountriesProvider>
  )
}

export default Dashboard
