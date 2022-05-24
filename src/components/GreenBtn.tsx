import { useTranslation } from 'react-i18next'

const GreenBtn: React.FC<{ onClick?: () => void; text: string }> = (props) => {
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
