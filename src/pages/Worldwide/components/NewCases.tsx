import { CountriesContext } from 'state/CountriesContext'
import { useTranslation } from 'react-i18next'
import { Rising } from 'assets/images'
import { useContext } from 'react'

function NewCases() {
  const ctx = useContext(CountriesContext).data
  const { t } = useTranslation()
  let confirmed = 0
  ctx.forEach((el) => {
    confirmed += el.statistics.confirmed
  })
  return (
    <div className='bg-blue w-[343px] mx-auto flex flex-col rounded-2xl h-[193px] items-center justify-between py-6'>
      <img src={Rising} alt='ss' className='w-[90px] h-[64px]' />
      <p>{t('New cases')}</p>
      <p className='text-2xl text-link-blue font-black'>{confirmed}</p>
    </div>
  )
}

export default NewCases
