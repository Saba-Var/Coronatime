import { CountriesContext } from 'state/CountriesContext'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useContext } from 'react'

function Worldwide() {
  const ctx = useContext(CountriesContext)
  const { t } = useTranslation()

  return (
    <div className='px-4 py-7 md:mx-12 xl:px-28 md:mt-10'>
      <h2 className='text-black font-black text-xl'>
        {t('Worldwide Statistics')}{' '}
      </h2>
      <div className='border-b-border-gray border-b flex mt-10 gap-6 pb-4'>
        <Link to='/Dashboard/Worldwide'>
          <p className='cursor-pointer text-base font-bold underline decoration-neutral-900 underline-offset-[19px] decoration-[3px]'>
            {t('Worldwide')}
          </p>
        </Link>
        <p className='cursor-pointer text-base text-black'>{t('By country')}</p>
      </div>
      {ctx.data.map((el) => (
        <p key={el.name.en}>{el.name.en}</p>
      ))}
    </div>
  )
}

export default Worldwide
