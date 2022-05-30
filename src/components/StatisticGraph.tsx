import { StatisticsProps } from 'components/types'
import { useTranslation } from 'react-i18next'

const StatisticGraph: React.FC<StatisticsProps> = (props) => {
  const { t } = useTranslation()

  return (
    <div
      className={`py-6 h-[193px] lg:w-[100%] lg:h-[255px] items-center justify-between flex flex-col ${props.containerStyle} rounded-2xl`}
    >
      <img src={props.image} alt='ss' className='w-[90px] h-[64px] ' />
      <p className='lg:text-xl font-medium'>{t(props.target)}</p>
      <p
        className={`text-2xl lg:text-3xl xl:text-4xl ${props.textStye} font-black`}
      >
        {props.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      </p>
    </div>
  )
}

export default StatisticGraph
