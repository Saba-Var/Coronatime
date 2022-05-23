import { SortOption, CountryInfo } from 'pages/Country/components'
import { StaticsTicsProps } from 'pages/Country/components/types'
import { useState } from 'react'

const Statistics: React.FC<StaticsTicsProps> = (props) => {
  const [target, setTarget] = useState<string | null>('')

  const optionTools = {
    forceUpdate: props.forceUpdate,
    language: props.language,
    setData: props.setData,
    data: props.data,
    setTarget,
    target,
  }

  return (
    <div className='mx-auto md:px-4 md:mx-12 xl:px-28'>
      <div className='shadow-lg'>
        <div className='flex justify-between bg-grayBG h-14 items-center md:px-8 lg:pr-[35%] rounded-t-lg'>
          <SortOption option='Location' optionTools={optionTools} />
          <SortOption option='confirmed' optionTools={optionTools} />
          <SortOption option='deaths' optionTools={optionTools} />
          <SortOption option='recovered' optionTools={optionTools} />
        </div>
        <div className='h-[400px] lg:h-[500px] xl:h-[603px] overflow-y-scroll rounded-b-lg'>
          <CountryInfo data={props.data} language={props.language} />
        </div>
      </div>
    </div>
  )
}

export default Statistics
