import { CountriesContext } from 'state/CountriesContext'
import { StatisticGraph } from 'components'
import { Categories } from 'components'
import { rising, recovered, deathGraph } from 'assets/images'
import { useContext } from 'react'

const Worldwide = () => {
  const ctx = useContext(CountriesContext).data

  let totalConfirmed = 0
  let totalRecovered = 0
  let totalDeath = 0
  ctx.forEach((el) => (totalConfirmed += el.statistics.confirmed))
  ctx.forEach((el) => (totalRecovered += el.statistics.recovered))
  ctx.forEach((el) => (totalDeath += el.statistics.deaths))

  return (
    <>
      <Categories title='Worldwide' />
      <div className='flex justify-center xl:block'>
        <div className='px-4 md:mx-12 xl:px-28 grid grid-cols-2 col-span-1 xl:flex justify-between xl:gap-6 gap-y-4'>
          <StatisticGraph
            containerStyle='bg-blue w-[343px] md:m-0  col-span-2'
            textStye='text-link-blue'
            total={totalConfirmed}
            target='New cases'
            image={rising}
          />

          <StatisticGraph
            containerStyle='bg-greenBG w-[164px] xl:h-[255px]'
            textStye='text-green'
            total={totalRecovered}
            target='Recovered'
            image={recovered}
          />
          <StatisticGraph
            containerStyle='bg-yellowBG w-[164px] xl:h-[255px]'
            textStye='text-yellow'
            total={totalDeath}
            target='Death'
            image={deathGraph}
          />
        </div>
      </div>
    </>
  )
}

export default Worldwide
