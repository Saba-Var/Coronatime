import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const Categories: React.FC<{ title: string }> = (props) => {
  const { t } = useTranslation()
  const selected =
    'font-bold underline decoration-neutral-900 underline-offset-[19px] decoration-[3px]'

  return (
    <>
      <div className='px-4 py-4 md:mx-12 xl:px-28 md:mt-6'>
        <h2 className='text-black font-black text-xl'>{t(props.title)}</h2>
        <div className='border-b-border-gray border-b flex mt-6 gap-6 pb-4'>
          <Link to='/Dashboard/Worldwide'>
            <p
              className={`cursor-pointer text-base text-black ${
                props.title === 'Worldwide' && selected
              }`}
            >
              {t('Worldwide')}
            </p>
          </Link>
          <Link to='/Dashboard/By-country'>
            <p
              className={`cursor-pointer text-base text-black ${
                props.title === 'Statistics by country' && selected
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
