import { useTranslation } from 'react-i18next'
import { ArrowDown, ArrowUp } from 'components/svgs'
import { useState } from 'react'

type propsType = {
  language: { language: any }
  option: string
  sort?: () => void
}

const SortOption: React.FC<propsType> = (props) => {
  const { t } = useTranslation()
  const language = props.language.language
  const [isClicked, setIsClicked] = useState(false)

  const [sort, setSort] = useState(false)

  const clickHandler = () => {
    setIsClicked(true)
    setSort(!sort)
  }

  return (
    <div
      onClick={clickHandler}
      className='flex gap-[3px] items-center cursor-pointer'
    >
      <p
        onClick={props.sort}
        className={`text-sm ${language === 'ge' && 'text-xs'}`}
      >
        {t(props.option)}
      </p>
      <div className='flex flex-col gap-[3px]'>
        <ArrowUp sort={sort} isClicked={isClicked} />
        <ArrowDown sort={sort} isClicked={isClicked} />
      </div>
    </div>
  )
}

export default SortOption
