import { HeaderProps } from 'pages/Dashboard/components/types'
import { LogOut, Menu } from 'pages/Dashboard/components'
import { Logo } from 'components/svgs'
import { Language } from 'components'

const Header: React.FC<HeaderProps> = (props) => {
  const name = localStorage.getItem('Username') || props.user

  return (
    <div className='border-b-border-gray border-b'>
      <div className='flex py-4 items-center px-4 md:mx-12 xl:px-28 justify-between'>
        <Logo />
        <div className='flex items-center gap-12'>
          <Language setLanguage={props.setLanguage} />
          <div className='flex gap-4 items-center'>
            <p className='hidden md:block text-base font-bold pr-4'>{name}</p>
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
