import { SortOption } from 'pages/Country/components'
import { useState } from 'react'
import { dataType } from 'state/types'

type propsType = {
  data: dataType
  language: any
  setData: (newState: dataType) => void
}

const Statistics: React.FC<propsType> = (props) => {
  const [target, setTarget] = useState<string | null>('')

  return (
    <div className='h-[400px] mx-auto md:px-4 md:mx-12 xl:px-28'>
      <div className='flex justify-between bg-grayBG h-14 items-center md:px-8 lg:pr-[35%]'>
        <SortOption
          target={target}
          setTarget={setTarget}
          option='Location'
          language={props.language}
        />
        <SortOption
          target={target}
          setTarget={setTarget}
          option='New case'
          language={props.language}
        />
        <SortOption
          target={target}
          setTarget={setTarget}
          option='Deaths'
          language={props.language}
        />
        <SortOption
          target={target}
          setTarget={setTarget}
          option='Recovered'
          language={props.language}
        />
      </div>
    </div>
  )
}

export default Statistics
