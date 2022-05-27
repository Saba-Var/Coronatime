import { CountriesContext, CountriesProvider } from 'state'
import { DashboardProps } from 'pages/Dashboard/types'
import { Header } from 'pages/Dashboard/components'
import { Outlet } from 'react-router-dom'
import { useContext } from 'react'

const Dashboard: React.FC<DashboardProps> = (props) => {
  const ctx = useContext(CountriesContext)

  return (
    <CountriesProvider>
      <div className='h-screen !overflow-y-hidden'>
        <Header user={props.user} setLanguage={props.setLanguage} />
        <Outlet context={{ language: props.language, ctx }} />
      </div>
    </CountriesProvider>
  )
}

export default Dashboard
