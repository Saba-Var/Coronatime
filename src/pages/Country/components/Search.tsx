import { CountriesContext } from 'state/CountriesContext'
import { useTranslation } from 'react-i18next'
import { SearchIcon } from 'components/svgs'
import { DataType } from 'state/types'
import { useContext } from 'react'

type SearchProps = {
  setData: (data: DataType) => void
  forceUpdate: () => void
  language: any
}

const Search: React.FC<SearchProps> = (props) => {
  let language: string = 'en'
  const { t } = useTranslation()
  const countriesData = useContext(CountriesContext)?.unMutableData
  props.language.language === 'en' ? (language = 'en') : (language = 'ka')

  const onChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    let countryName = e.currentTarget.value.trim()

    props.setData(
      countriesData.filter((el: any) => {
        if (language === 'en')
          return el.name.en.includes(
            countryName.charAt(0).toUpperCase() + countryName.substring(1)
          )
        else
          return (
            el.name.ka.includes(countryName) && el.name.ka[0] === countryName[0]
          )
      })
    )

    if (countryName === '') props.setData(countriesData)
    props.forceUpdate()
  }

  return (
    <div className='mb-3 h-5 flex gap-2 pl-4 md:px-6 py-3 w-[240px] items-center md:border-[1px] md:h-11 md:rounded-lg md:border-border-gray'>
      <div>
        <SearchIcon />
      </div>
      <input
        data-TestId='Search'
        onChange={onChangeHandler}
        className=' text-gray font-medium text-sm w-full h-4 focus:border-0 focus:border-r-transparent outline-none'
        placeholder={t('Search by country')}
        type='text'
      />
    </div>
  )
}

export default Search
