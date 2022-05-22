import { dataType } from 'state/types'

type propsTpe = {
  data: dataType
  language: any
}
const formatNum = (number: number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
const CountryInfo: React.FC<propsTpe> = (props) => {
  console.log(props.data)
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
