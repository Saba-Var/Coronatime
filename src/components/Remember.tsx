import { useTranslation } from 'react-i18next'

const Remember: React.FC<{
  marginTop?: string
}> = (props) => {
  const { t } = useTranslation()

  return (
    <label
      className={`flex items-center gap-2 ${props.marginTop} font-semibold`}
    >
      <input
        type='checkbox'
        className='w-5 h-5 rounded focus:ring-transparent outline-none border-border-gray text-green'
      />
      <span>{t('Remember device')}</span>
    </label>
  )
}

export default Remember
