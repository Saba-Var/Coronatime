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
  let language: string
  props.language.language === 'en' ? (language = 'en') : (language = 'ka')

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
          className={`flex h-14  items-center cursor-pointer justify-between md:px-6 md:pr-8 lg:pr-[35.6%] xl:pr-[35.5%] 2xl:pr-[34.7%] border-b border-border-gray`}
        >
          <p className={`text-sm overflow-ellipsis  w-20`}>
            {language === 'ka' ? el.name.ka : el.name.en}
          </p>
          <p className={`text-sm w-20 ${language === 'en' && 'md:pl-[5px]'}`}>
            {formatNum(el.statistics.confirmed)}
          </p>
          <p
            className={`text-sm w-20 ${
              language === 'en' && 'pl-3 md:mr-5 md:pl-7 lg:pl-[25px]'
            }`}
          >
            {formatNum(el.statistics.deaths)}
          </p>
          <p className={`text-sm w-20 ${language === 'en' && ''}`}>
            {formatNum(el.statistics.recovered)}
          </p>
        </div>
      ))}
    </>
  )
}

export default CountryInfo
