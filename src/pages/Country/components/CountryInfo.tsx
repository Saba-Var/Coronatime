import { DataType } from 'state/types'

type PropsTpe = {
  data: DataType
  language: any
}

const formatNum = (number: number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

const CountryInfo: React.FC<PropsTpe> = (props) => {
  let language: string
  props.language.language === 'en' ? (language = 'en') : (language = 'ka')

  const georgian = language === 'ka'

  return (
    <>
      {props.data.map((el) => (
        <div
          key={el.name.en}
          className={`flex h-16 sd:h-14 items-center cursor-pointer justify-between md:px-6 md:pr-8 lg:pr-[35.6%] xl:pr-[35.5%] 2xl:pr-[34.7%] border-b border-border-gray  ${
            georgian &&
            'pr-11 sd:pr-[70px] sx:pr-24 md:pl-8 md:!pr-40 lg:!pr-[35%]'
          }`}
        >
          <p
            className={`text-sm w-20 ${
              georgian &&
              'w-[75px] sd:w-[85px] break-words sx:w-[95px]  lg:!p-0 lg:!m-0 lg:!w-[87px]'
            }`}
          >
            {georgian ? el.name.ka : el.name.en}
          </p>
          <p
            className={`text-sm w-20 ${
              language === 'en' && 'md:pl-[5px] lg:!p-0 lg:!m-0 '
            } ${georgian && 'lg:pl-5 lg:!w-[133px]'}`}
          >
            {formatNum(el.statistics.confirmed)}
          </p>
          <p
            className={`text-sm w-20 ${
              language === 'en' && 'pl-3 md:mr-5 md:pl-7 lg:pl-[25px]'
            } ${
              georgian &&
              'pl-1 sd:pl-4 sx:pl-8  lg:!pl-3 md:!pl-18 lg:!w-[133px]'
            }`}
          >
            {formatNum(el.statistics.deaths)}
          </p>
          <p
            className={`text-sm w-20 ${language === 'en' && ''} ${
              georgian &&
              'pl-2 sd:pl-8 sx:pl-14 lg:!p-0 md:!pl-[70px] lg:!m-0 lg:!w-[133px]'
            }`}
          >
            {formatNum(el.statistics.recovered)}
          </p>
        </div>
      ))}
    </>
  )
}

export default CountryInfo
