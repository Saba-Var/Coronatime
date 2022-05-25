import { countriesContext } from 'state/countriesContext'
import CountriesProvider from 'state/countriesContext'
import { Header } from 'pages/Dashboard/components'
import { Outlet } from 'react-router-dom'
import { useContext } from 'react'

const Dashboard: React.FC<{
  user: string
  language: string
  setLanguage: (language: string) => void
}> = (props) => {
  const ctx = useContext(countriesContext)

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
