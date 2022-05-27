import { CategoriesProps } from 'components/types'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const Categories: React.FC<CategoriesProps> = (props) => {
  const { t } = useTranslation()

  return (
    <>
      <div className='px-4 py-4 md:mx-12 xl:px-28 md:mt-6'>
        <h2 className='text-black font-black text-xl'>{t(props.title)}</h2>
        <div className='border-b-border-gray border-b flex mt-6 gap-6 pb-4'>
          <Link to='/Dashboard/Worldwide' data-TestId='Worldwide'>
            <p
              className={`cursor-pointer text-base text-black ${
                props.title === 'Worldwide' && 'selected'
              }`}
            >
              {t('Worldwide')}
            </p>
          </Link>
          <Link to='/Dashboard/By-country' data-TestId='byCountry'>
            <p
              className={`cursor-pointer text-base text-black ${
                props.title === 'Statistics by country' && 'selected'
              }`}
            >
              {t('By country')}
            </p>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Categories
