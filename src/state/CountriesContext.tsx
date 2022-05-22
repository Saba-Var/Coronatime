import React, { useState } from 'react'
import { dataType } from 'state/types'
import { useEffect } from 'react'
import axios from 'axios'

const schema: dataType = [
  {
    name: {
      en: '',
      ka: '',
    },
    code: '',
    _id: '',
    statistics: {
      confirmed: 0,
      critical: 0,
      deaths: 0,
      recovered: 0,
    },
  },
]

export const CountriesContext = React.createContext({
  data: schema,
  setData: (data: dataType) => {},
})

const CountriesProvider: React.FC<{ children: JSX.Element }> = (props) => {
  const [data, setData] = useState<dataType>(schema)
  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://coronatime-api.devtest.ge/api/countries',
      headers: {
        Authorization: 'Token ' + localStorage.getItem('token'),
        accept: 'application/json',
      },
    })
      .then((res) => {
        if (res.status === 200) {
          setData(res.data)
        }
      })
      .catch((error) => {
        if (error) alert(`${error.message} 📛`)
      })
  }, [])

  return (
    <CountriesContext.Provider value={{ data, setData }}>
      {props.children}
    </CountriesContext.Provider>
  )
}

export default CountriesProvider
