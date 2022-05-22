import { LogOut } from 'pages/Dashboard/components'
import { Menu } from 'pages/Dashboard/components'
import { Logo } from 'components/svgs'
import { Language } from 'components'

const Header: React.FC<{ user: string; setToken: (token: string) => void }> = (
  props
) => {
  const name = localStorage.getItem('Username') || props.user
  const username = (
    <p className='hidden md:block text-base font-bold pr-4'>{name}</p>
  )
  return (
    <div className='border-b-border-gray border-b'>
      <div className='flex  items-center px-4 py-7 md:mx-12 xl:px-28 justify-between'>
        <Logo />
        <div className='flex items-center gap-12'>
          <Language />
          <div className='flex gap-4 items-center'>
            {username}
            <div className='hidden md:block h-8 w-[1px] bg-border-gray'></div>
            <LogOut styles='hidden md:block' setToken={props.setToken} />
            <Menu name={name} setToken={props.setToken} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
