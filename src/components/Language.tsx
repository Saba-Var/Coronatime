import { LanguageProps } from 'components/types'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import i18n from 'i18next'

const Language: React.FC<LanguageProps> = (props) => {
  const [language, setLanguage] = useState<string>('en')
  const { t } = useTranslation()
  const changeLanguage = props.setLanguage

  useEffect(() => {
    i18n.changeLanguage(language)
    if (changeLanguage) changeLanguage(language)
  }, [changeLanguage, language])

  return (
    <div>
      <select
        data-TestId='Language'
        onChange={(e) => setLanguage(e.target.value)}
        name='languages'
        className={`border-0 form-select form-select-lg
        appearance-none block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border-solid border-border-gray rounded transition ease-in-out focus:text-gray-700focus:border-blue-600 focus:outline-none hover:scale-110 cursor-pointer`}
      >
        <option value='en'>{t('English')}</option>
        <option value='ge' onClick={() => i18n.changeLanguage('ge')}>
          {t('Georgian')}
        </option>
      </select>
    </div>
  )
}

export default Language
