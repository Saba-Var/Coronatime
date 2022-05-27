import { rising, recovered, deathGraph } from 'assets/images'
import { CountriesContext } from 'state/CountriesContext'
import { StatisticGraph } from 'components'
import { Categories } from 'components'
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
      <div className='flex justify-center lg:block'>
        <div className='px-4 md:mx-12 md:mt-10 xl:px-28 grid grid-cols-2 col-span-1 lg:flex justify-between lg:gap-6 gap-y-4'>
          <StatisticGraph
            containerStyle='bg-blue w-[343px] md:m-0  col-span-2'
            textStye='text-link-blue'
            total={totalConfirmed}
            target='New cases'
            image={rising}
          />
          <StatisticGraph
            containerStyle='bg-greenBG w-[164px] lg:h-[255px]'
            textStye='text-green'
            total={totalRecovered}
            target='recovered'
            image={recovered}
          />
          <StatisticGraph
            containerStyle='bg-yellowBG w-[164px] lg:h-[255px]'
            textStye='text-yellow'
            total={totalDeath}
            target='deaths'
            image={deathGraph}
          />
        </div>
      </div>
    </>
  )
}

export default Worldwide
