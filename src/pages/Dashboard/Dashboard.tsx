import { CountriesContext } from 'state/CountriesContext'
import CountriesProvider from 'state/CountriesContext'
import { Header } from 'pages/Dashboard/components'
import { Outlet } from 'react-router-dom'
import { useContext } from 'react'

const Dashboard: React.FC<{
  setLanguage: (language: string) => void
  language: string
  user: string
}> = (props) => {
  const ctx = useContext(CountriesContext)

  return (
    <CountriesProvider>
      <div>
        <Header user={props.user} setLanguage={props.setLanguage} />
        <Outlet context={{ language: props.language, ctx }} />
      </div>
    </CountriesProvider>
  )
}

export default Dashboard
