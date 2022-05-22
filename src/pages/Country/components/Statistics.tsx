import { SortOption, CountryInfo } from 'pages/Country/components'
import { dataType } from 'state/types'
import { useState } from 'react'

type propsType = {
  data: dataType
  language: any
  setData: (newState: dataType) => void
  forceUpdate: any
}

const Statistics: React.FC<propsType> = (props) => {
  const [target, setTarget] = useState<string | null>('')

  const optionTools = {
    target,
    setTarget,
    language: props.language,
  }

  const Location = (sort: boolean) => {
    if (props.language.language === 'en') {
      if (!sort) {
        props.setData(
          props.data.sort((a, b) => b.name.en.localeCompare(a.name.en))
        )
      } else {
        props.setData(
          props.data.sort((a, b) => a.name.en.localeCompare(b.name.en))
        )
      }
    } else {
      if (!sort) {
        props.setData(
          props.data.sort((a, b) => b.name.ka.localeCompare(a.name.ka))
        )
      } else {
        props.setData(
          props.data.sort((a, b) => a.name.ka.localeCompare(b.name.ka))
        )
      }
    }
    props.forceUpdate()
  }

  const sortNewCase = (sort: boolean) => {
    if (!sort) {
      props.setData(
        props.data.sort(
          (a, b) => b.statistics.confirmed - a.statistics.confirmed
        )
      )
    } else {
      props.setData(
        props.data.sort(
          (a, b) => a.statistics.confirmed - b.statistics.confirmed
        )
      )
    }
    props.forceUpdate()
  }

  const Deaths = (sort: boolean) => {
    if (!sort) {
      props.setData(
        props.data.sort((a, b) => b.statistics.deaths - a.statistics.deaths)
      )
    } else {
      props.setData(
        props.data.sort((a, b) => a.statistics.deaths - b.statistics.deaths)
      )
    }
    props.forceUpdate()
  }

  const Recovered = (sort: boolean) => {
    if (!sort) {
      props.setData(
        props.data.sort(
          (a, b) => b.statistics.recovered - a.statistics.recovered
        )
      )
    } else {
      props.setData(
        props.data.sort(
          (a, b) => a.statistics.recovered - b.statistics.recovered
        )
      )
    }
    props.forceUpdate()
  }

  return (
    <div className='mx-auto md:px-4 md:mx-12 xl:px-28'>
      <div className='shadow-lg'>
        <div className='flex justify-between bg-grayBG h-14 items-center md:px-8 lg:pr-[35%] rounded-t-lg'>
          <SortOption
            option='Location'
            optionTools={optionTools}
            sorter={Location}
          />
          <SortOption
            option='New case'
            sorter={sortNewCase}
            optionTools={optionTools}
          />
          <SortOption
            option='Deaths'
            sorter={Deaths}
            optionTools={optionTools}
          />
          <SortOption
            option='Recovered'
            sorter={Recovered}
            optionTools={optionTools}
          />
        </div>
        <div className='h-[400px] lg:h-[500px] xl:h-[603px] overflow-y-scroll rounded-b-lg'>
          <CountryInfo data={props.data} language={props.language} />
        </div>
      </div>
    </div>
  )
}

export default Statistics
