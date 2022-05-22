import { useTranslation } from 'react-i18next'
import { ArrowDown, ArrowUp } from 'components/svgs'
import { useState } from 'react'

type propsType = {
  setTarget: (target: string | null) => void
  language: { language: any }
  target: string | null
  sort?: () => void
  option: string
}

const SortOption: React.FC<propsType> = (props) => {
  const { t } = useTranslation()
  const language = props.language.language
  const [isClicked, setIsClicked] = useState(false)
  const [sort, setSort] = useState(false)

  const clickHandler = (e: React.MouseEvent<HTMLElement>) => {
    setIsClicked(true)
    setSort(!sort)
    props.setTarget(e.currentTarget.getAttribute('data-id'))
  }

  return (
    <div
      onClick={clickHandler}
      data-id={props.option}
      className='flex gap-[3px] md:gap-[8px] items-center cursor-pointer'
    >
      <p
        onClick={props.sort}
        className={`text-sm ${
          language === 'ge' && 'text-xs'
        } md:text-sm font-semibold`}
      >
        {t(props.option)}
      </p>
      <div className='flex flex-col gap-[3px]'>
        <ArrowUp
          sort={sort}
          isClicked={isClicked}
          target={props.target === props.option}
        />
        <ArrowDown
          sort={sort}
          isClicked={isClicked}
          target={props.target === props.option}
        />
      </div>
    </div>
  )
}

export default SortOption
