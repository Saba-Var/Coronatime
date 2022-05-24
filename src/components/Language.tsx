import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import i18n from 'i18next'

const Language: React.FC<{ setLanguage?: (language: string) => void }> = (
  props
) => {
  const [language, setLanguage] = useState<string>('en')
  const { t } = useTranslation()

  useEffect(() => {
    i18n.changeLanguage(language)
    if (props.setLanguage) props.setLanguage(language)
  }, [language])

  return (
    <div>
      <select
        data-TestId='Language'
        onChange={(e) => setLanguage(e.target.value)}
        name='languages'
        className={`${
          language === 'en' ? 'w-20' : 'w-24'
        } bg-transparent text-black outline-none border-0`}
      >
        <option value='en' className='border-0'>
          {t('English')}
        </option>
        <option value='ge' onClick={() => i18n.changeLanguage('ge')}>
          {t('Georgian')}
        </option>
      </select>
    </div>
  )
}

export default Language
