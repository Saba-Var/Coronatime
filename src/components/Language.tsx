import { LanguageProps } from 'components/types'
import { DropDownIcon } from 'components/svgs'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import i18n from 'i18next'

const Language: React.FC<LanguageProps> = (props) => {
  const [language, setLanguage] = useState<string>(
    localStorage.getItem('Language') || 'en'
  )
  const { t } = useTranslation()
  const changeLanguage = props.setLanguage
  const [showLanguage, setShowLanguage] = useState<boolean>(false)

  const languageSelectHandler = (lan: string) => {
    i18n.changeLanguage(lan)
    setLanguage(lan)
    localStorage.setItem('Language', lan)
    setShowLanguage(false)
  }

  useEffect(() => {
    i18n.changeLanguage(language)
    if (changeLanguage) changeLanguage(language)
  }, [changeLanguage, language])

  return (
    <div>
      <div
        data-TestId='Language'
        className={`px-2 py-1 relative text-base font-normal mr-2 text-gray-700 cursor-pointer `}
      >
        <div
          className='flex items-center gap-2'
          onClick={() => setShowLanguage(!showLanguage)}
        >
          <p>{language === 'en' ? t('English') : t('Georgian')}</p>
          <DropDownIcon />
        </div>
        {showLanguage && (
          <div className='absolute z-[99999] flex flex-col gap-2 top-8 hover:bg-gray-50 shadow-lg p-4 bg-white right-0 rounded-lg border-[1px] border-border-gray'>
            <div onClick={() => languageSelectHandler('en')}>
              {t('English')}
            </div>
            <div onClick={() => languageSelectHandler('ge')}>
              {t('Georgian')}
            </div>
          </div>
        )}
      </div>
      {showLanguage && (
        <div
          onClick={() => setShowLanguage(false)}
          className='left-0 top-0 fixed w-full h-full z-[9999]'
        ></div>
      )}
    </div>
  )
}

export default Language
