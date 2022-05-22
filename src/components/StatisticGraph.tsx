import { useTranslation } from 'react-i18next'

type propsType = {
  target: string
  image: string
  total: number
  textStye: string
  containerStyle: string
}

const StatisticGraph: React.FC<propsType> = (props) => {
  const { t } = useTranslation()

  return (
    <div
      className={`rounded-2xl items-center justify-between flex flex-col ${props.containerStyle}`}
    >
      <img src={props.image} alt='ss' className='w-[90px] h-[64px]' />
      <p>{t(props.target)}</p>
      <p className={`text-2xl ${props.textStye} font-black`}>
        {props.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      </p>
    </div>
  )
}

export default StatisticGraph
