import { useTranslation } from 'react-i18next'

type props = {
  label: string

  type: string
}

const TextInput: React.FC<props> = (props) => {
  const { t } = useTranslation()
  return (
    <div className='flex flex-col gap-2'>
      <label className='text-black'>{t(props.label)}</label>
      <input
        type={props.type}
        className='border-[1px] h-14 px-6 rounded-lg border-border-gray focus:ring-2 focus:border-link-blue outline-none'
        placeholder={t(props.label + ' placeholder')}
      />
    </div>
  )
}

export default TextInput
