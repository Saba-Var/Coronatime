import { SortOption } from 'pages/Country/components'
import { dataType } from 'state/types'

type propsType = {
  data: dataType
  language: any
  setData: (newState: dataType) => void
}

const Statistics: React.FC<propsType> = (props) => {
  return (
    <div className='h-[400px] mx-auto md:px-4 md:mx-12 xl:px-28'>
      <div className='flex justify-between bg-grayBG h-14 items-center md:px-8 lg:pr-[35%]'>
        <SortOption option='Location' language={props.language} />
        <SortOption option='New case' language={props.language} />
        <SortOption option='Deaths' language={props.language} />
        <SortOption option='Recovered' language={props.language} />
      </div>
    </div>
  )
}

export default Statistics
