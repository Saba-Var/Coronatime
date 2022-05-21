import { LogOut } from 'pages/Dashboard/components'
import { MenuBar, UserIcon } from 'components/svgs'
import { useState } from 'react'

const Menu: React.FC<{ name: string | null }> = (props) => {
  const [show, setShow] = useState(false)

  const clickHandler = () => {
    setShow(!show)
  }

  return (
    <>
      <div className='relative '>
        <MenuBar onClick={clickHandler} />
        {show && (
          <div className='z-50 md:hidden hover:bg-gray-50 shadow-lg p-4 bg-white absolute left-[-60px] top-5 flex flex-col gap-2'>
            <div>
              <div className='flex justify-center'>
                <UserIcon />
              </div>
              <p className='md:hidden text-center pr-0 text-base font-bold'>
                {props.name}
              </p>
            </div>
            <LogOut styles='md:hidden' />
          </div>
        )}
        {show && (
          <div
            onClick={() => setShow(false)}
            className='fixed w-full h-screen top-0 left-0 md:hidden'
          ></div>
        )}
      </div>
    </>
  )
}

export default Menu
