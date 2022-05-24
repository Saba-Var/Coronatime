import { SortOption, CountryInfo, Search } from 'pages/Country/components'
import { StaticsTicsProps } from 'pages/Country/components/types'
import { useState } from 'react'

const Statistics: React.FC<StaticsTicsProps> = (props) => {
  const [target, setTarget] = useState<string | null>('')
  const language = props.language.language

  const optionTools = {
    forceUpdate: props.forceUpdate,
    language: props.language,
    setData: props.setData,
    data: props.data,
    setTarget,
    target,
  }

  return (
    <div className='mx-auto md:px-4 md:mx-12 xl:px-28 pb-4'>
      <Search
        setData={props.setData}
        language={props.language}
        forceUpdate={props.forceUpdate}
      />
      <div className='shadow-lg'>
        <div
          className={`flex justify-between bg-grayBG h-12 items-center md:px-8 lg:pr-[35%] rounded-t-lg ${
            language === 'en' && 'p-2'
          }`}
        >
          <SortOption option='Location' optionTools={optionTools} />
          <SortOption option='confirmed' optionTools={optionTools} />
          <SortOption option='deaths' optionTools={optionTools} />
          <SortOption option='recovered' optionTools={optionTools} />
        </div>
        <div
          className={`${
            language === 'en' && 'px-2'
          } h-fit max-h-[400px] md:max-h-[55vh]   overflow-y-scroll rounded-b-lg`}
        >
          <CountryInfo data={props.data} language={props.language} />
          {props.data.length === 0 && (
            <p className='text-lg md:text-2xl py-[1%] text-gray text-center'>
              Country not found!
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Statistics
