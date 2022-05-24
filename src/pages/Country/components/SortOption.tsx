import { SortProps } from 'pages/Country/components/types'
import { ArrowDown, ArrowUp } from 'components/svgs'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

const SortOption: React.FC<SortProps> = (props) => {
  const { t } = useTranslation()
  const tools = props.optionTools
  const language = tools.language.language
  const [isClicked, setIsClicked] = useState(false)
  const [sort, setSort] = useState(false)

  const clickHandler = (e: React.MouseEvent<HTMLElement>) => {
    const option = props.option
    setIsClicked(true)
    setSort(!sort)
    tools.setTarget(e.currentTarget.getAttribute('data-id'))

    if (option === 'Location') {
      let languageSort: string
      language === 'en' ? (languageSort = 'en') : (languageSort = 'ka')
      tools.setData(
        tools.data.sort((a: any, b: any) => {
          return !sort
            ? b.name[languageSort].localeCompare(a.name[languageSort])
            : a.name[languageSort].localeCompare(b.name[languageSort])
        })
      )
    } else
      tools.setData(
        tools.data.sort((a: any, b: any) => {
          return !sort
            ? b.statistics[option] - a.statistics[option]
            : a.statistics[option] - b.statistics[option]
        })
      )
    tools.forceUpdate()
  }

  const clickOptions = {
    target: tools.target === props.option,
    isClicked,
    sort,
  }

  return (
    <div
      data-TestId={props.option}
      onClick={clickHandler}
      data-id={props.option}
      className='flex gap-[3px] md:gap-[8px] items-center cursor-pointer'
    >
      <p
        onClick={tools.sort}
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
