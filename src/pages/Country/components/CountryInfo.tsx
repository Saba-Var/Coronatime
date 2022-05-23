import { CountriesContext } from 'state/CountriesContext'
import { useNavigate } from 'react-router-dom'
import { DataType } from 'state/types'
import { useEffect, useContext } from 'react'

type PropsTpe = {
  data: DataType
  language: any
}

const formatNum = (number: number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

const CountryInfo: React.FC<PropsTpe> = (props) => {
  const countriesData = useContext(CountriesContext)?.unMutableData
  const navigate = useNavigate()

  useEffect(() => {
    if (countriesData.length === 1) {
      navigate('/Dashboard/Worldwide', { replace: true })
    }
  }, [countriesData, navigate, props.data.length])

  return (
    <>
      {props.data.map((el) => (
        <div
          key={el.name.en}
          className='flex h-14 items-center cursor-pointer  justify-between md:px-8 lg:pr-[35%] border-b border-border-gray'
        >
          <p className='text-sm w-20'>
            {props.language.language === 'ge' ? el.name.ka : el.name.en}
          </p>
          <p className='text-sm w-20 '>{formatNum(el.statistics.confirmed)}</p>
          <p className='text-sm w-20 pl-2 '>
            {formatNum(el.statistics.deaths)}
          </p>
          <p className='text-sm w-20'>{formatNum(el.statistics.recovered)}</p>
        </div>
      ))}
    </>
  )
}

export default CountryInfo
