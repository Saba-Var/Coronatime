import { useTranslation } from 'react-i18next'

type PropsType = {
  onClick?: () => void
  text: string
}

const GreenBtn: React.FC<PropsType> = (props) => {
  const { t } = useTranslation()

  return (
    <button
      onClick={props.onClick}
      className='bg-green w-full mt-6 rounded-lg h-12 font-black text-white cursor-pointer'
    >
      {t(props.text)}
    </button>
  )
}

export default GreenBtn
