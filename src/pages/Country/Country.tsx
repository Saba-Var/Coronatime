import { Statistics } from 'pages/Country/components'
import { useOutletContext } from 'react-router-dom'
import { useContext, useState } from 'react'
import { CountriesContext } from 'state'
import { Categories } from 'components'
import React from 'react'

function Country() {
  const [data, setData] = useState(useContext(CountriesContext).data)
  const language = useOutletContext()
  const [, updateState] = useState({})
  const forceUpdate = React.useCallback(() => updateState({}), [])

  return (
    <div className='h-screen'>
      <Categories title='Statistics by country' />
      <Statistics
        data={data}
        language={language}
        setData={setData}
        forceUpdate={forceUpdate}
      />
    </div>
  )
}

export default Country
