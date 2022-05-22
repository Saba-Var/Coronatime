import { ArrowDown, ArrowUp } from 'components/svgs'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'

type propsType = {
  option: string
  sorter: (sort: boolean) => void
  optionTools: {
    setTarget: (target: string | null) => void
    language: { language: any }
    target: string | null
    sort?: () => void
  }
}

const SortOption: React.FC<propsType> = (props) => {
  const { t } = useTranslation()
  const language = props.optionTools.language.language
  const [isClicked, setIsClicked] = useState(false)
  const [sort, setSort] = useState(false)

  const clickHandler = (e: React.MouseEvent<HTMLElement>) => {
    setIsClicked(true)
    setSort(!sort)
    props.optionTools.setTarget(e.currentTarget.getAttribute('data-id'))
    props.sorter(sort)
  }

  const clickOptions = {
    sort,
    isClicked,
    target: props.optionTools.target === props.option,
  }

  return (
    <div
      onClick={clickHandler}
      data-id={props.option}
      className='flex gap-[3px] md:gap-[8px] items-center cursor-pointer'
    >
      <p
        onClick={props.optionTools.sort}
        className={`text-sm ${
          language === 'ge' && 'text-xs'
        } md:text-sm font-semibold`}
      >
        {t(props.option)}
      </p>
      <div className='flex flex-col gap-[3px]'>
        <ArrowUp clickOptions={clickOptions} />
        <ArrowDown clickOptions={clickOptions} />
      </div>
    </div>
  )
}

export default SortOption
