import { CountriesContext } from 'state/CountriesContext'
import { Statistics } from 'pages/Country/components'
import { Categories } from 'components'
import { useContext, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import React from 'react'

function Country() {
  const [data, setData] = useState(useContext(CountriesContext).data)
  const language = useOutletContext()
  const [, updateState] = useState({})
  const forceUpdate = React.useCallback(() => updateState({}), [])

  return (
    <>
      <Categories title='Statistics by country' />
      <Statistics
        data={data}
        language={language}
        setData={setData}
        forceUpdate={forceUpdate}
      />
    </>
  )
}

export default Country
