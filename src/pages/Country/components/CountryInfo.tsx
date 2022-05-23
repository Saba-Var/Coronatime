import { useNavigate } from 'react-router-dom'
import { DataType } from 'state/types'
import { useEffect } from 'react'

type propsTpe = {
  data: DataType
  language: any
}

const formatNum = (number: number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

const CountryInfo: React.FC<propsTpe> = (props) => {
  const navigate = useNavigate()

  useEffect(() => {
    if (props.data.length === 1) {
      navigate('/Dashboard/Worldwide', { replace: true })
    }
  }, [navigate, props.data.length])

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
