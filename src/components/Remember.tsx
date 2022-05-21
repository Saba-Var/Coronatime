import { useTranslation } from 'react-i18next'

const Remember: React.FC<{
  marginTop?: string
  register?: (name: any) => void
}> = (props) => {
  const { t } = useTranslation()

  return (
    <label
      className={`flex items-center gap-2 ${props.marginTop} font-semibold`}
    >
      {props.register ? (
        <input
          type='checkbox'
          className='accent-green'
          {...props.register('Checkbox')}
        />
      ) : (
        <input type='checkbox' className='accent-green' />
      )}
      <span>{t('Remember device')}</span>
    </label>
  )
}

export default Remember
