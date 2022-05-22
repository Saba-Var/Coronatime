import { SortOption, CountryInfo } from 'pages/Country/components'
import { useState } from 'react'
import { dataType } from 'state/types'

type propsType = {
  data: dataType
  language: any
  setData: (newState: dataType) => void
}

const Statistics: React.FC<propsType> = (props) => {
  const [target, setTarget] = useState<string | null>('')

  const optionTools = {
    target,
    setTarget,
    language: props.language,
  }

  return (
    <div className='mx-auto md:px-4 md:mx-12 xl:px-28'>
      <div className='shadow-lg'>
        <div className='flex justify-between bg-grayBG h-14 items-center md:px-8 lg:pr-[35%] rounded-t-lg'>
          <SortOption option='Location' optionTools={optionTools} />
          <SortOption option='New case' optionTools={optionTools} />
          <SortOption option='Deaths' optionTools={optionTools} />
          <SortOption option='Recovered' optionTools={optionTools} />
        </div>
        <div className='h-[400px] lg:h-[500px] xl:h-[603px] overflow-y-scroll rounded-b-lg'>
          <CountryInfo data={props.data} language={props.language} />
        </div>
      </div>
    </div>
  )
}

export default Statistics
