import { CountriesContext } from 'state/CountriesContext'
import { StatisticGraph } from 'components'
import { Categories } from 'components'
import { Rising } from 'assets/images'
import { useContext } from 'react'

const Worldwide = () => {
  const ctx = useContext(CountriesContext).data
  let totalConfirmed = 0

  ctx.forEach((el) => (totalConfirmed += el.statistics.confirmed))

  return (
    <>
      <Categories title='Worldwide' />
      <StatisticGraph
        containerStyle='bg-blue w-[343px] mx-auto h-[193px] py-6'
        textStye='text-link-blue'
        total={totalConfirmed}
        target='New cases'
        image={Rising}
      />
    </>
  )
}

export default Worldwide
