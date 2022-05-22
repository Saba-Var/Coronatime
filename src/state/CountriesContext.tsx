import React, { useState } from 'react'
import { dataType, provider } from 'state/types'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const schema = [
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

const CountriesProvider: React.FC<provider> = (props) => {
  const [data, setData] = useState<dataType>(schema)
  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem('token') || props.temporaryToken
    axios({
      method: 'get',
      url: 'https://coronatime-api.devtest.ge/api/countries',
      headers: {
        Authorization: 'Token ' + token,
        accept: 'application/json',
      },
    })
      .then((res) => {
        if (res.status === 200) {
          setData(res.data)
        }
      })
      .catch((error) => {
        if (error) console.log(`${error.message} 📛!`)
        if (!token) navigate('/', { replace: true })
      })
  }, [])

  return (
    <CountriesContext.Provider value={{ data, setData }}>
      {props.children}
    </CountriesContext.Provider>
  )
}

export default CountriesProvider
