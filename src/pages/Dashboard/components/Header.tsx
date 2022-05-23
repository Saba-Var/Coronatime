import { LogOut } from 'pages/Dashboard/components'
import { Menu } from 'pages/Dashboard/components'
import { Logo } from 'components/svgs'
import { Language } from 'components'

type HeaderType = {
  user: string
  setLanguage: (language: string) => void
}

const Header: React.FC<HeaderType> = (props) => {
  const name = localStorage.getItem('Username') || props.user
  const username = (
    <p className='hidden md:block text-base font-bold pr-4'>{name}</p>
  )

  return (
    <div className='border-b-border-gray border-b'>
      <div className='flex py-5 items-center px-4 py-b md:mx-12 xl:px-28 justify-between'>
        <Logo />
        <div className='flex items-center gap-12'>
          <Language setLanguage={props.setLanguage} />
          <div className='flex gap-4 items-center'>
            {username}
            <div className='hidden md:block h-8 w-[1px] bg-border-gray'></div>
            <LogOut styles='hidden md:block' />
            <Menu name={name} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
