import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import i18n from 'i18next'

function Language() {
  const [language, setLanguage] = useState('en')
  const { t } = useTranslation()

  useEffect(() => {
    i18n.changeLanguage(language)
  }, [language])

  return (
    <div>
      <select
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
