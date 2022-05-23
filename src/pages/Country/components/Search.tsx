import { CountriesContext } from 'state/CountriesContext'
import { useTranslation } from 'react-i18next'
import { SearchIcon } from 'components/svgs'
import { DataType } from 'state/types'
import { useContext } from 'react'

type SearchProps = {
  setData: (data: DataType) => void
  language: any
  forceUpdate: () => void
}

const Search: React.FC<SearchProps> = (props) => {
  const { t } = useTranslation()
  const countriesData = useContext(CountriesContext)?.unMutableData

  let language: string
  props.language.language === 'en' ? (language = 'en') : (language = 'ka')

  const onChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    let countryName = e.currentTarget.value.trim().toLowerCase()
    props.setData(
      countriesData.filter((el: any) =>
        el.name[language].includes(
          countryName.charAt(0).toUpperCase() + countryName.substring(1)
        )
      )
    )
  }

  return (
    <div className='mb-5 h-5 flex gap-2 pl-4 md:px-6 py-4 w-[240px] items-center md:border-[1px] md:h-12 md:rounded-lg md:border-border-gray'>
      <div>
        <SearchIcon />
      </div>
      <input
        onChange={onChangeHandler}
        className='text-gray font-medium text-sm w-full h-4 focus:border-0 focus:border-r-transparent outline-none'
        placeholder={t('Search by country')}
        type='text'
      />
    </div>
  )
}

export default Search
