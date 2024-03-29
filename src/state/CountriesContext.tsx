import { DataType, Provider } from 'state/types'
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import { useEffect } from 'react'
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
  setData: (data: DataType) => {},
  unMutableData: schema,
})

const CountriesProvider: React.FC<Provider> = (props) => {
  const [data, setData] = useState<DataType>(schema)
  let unMutableData = [...data]

  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem('token')
    axios({
      method: 'get',
      url: 'https://coronatime-api.devtest.ge/api/countries',
      headers: {
        Authorization: 'Token ' + token,
        accept: 'application/json',
      },
    })
      .then((res) => {
        if (res.status === 200) setData(res.data)
      })
      .catch((error) => !token && navigate('/', { replace: true }))
  }, [navigate])

  return (
    <CountriesContext.Provider value={{ data, setData, unMutableData }}>
      {props.children}
    </CountriesContext.Provider>
  )
}

export default CountriesProvider
