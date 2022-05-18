import { vaccines } from 'assets/images'

const Wrapper: React.FC<{ children: JSX.Element }> = (props) => {
  return (
    <>
      <div className='lg:flex lg:justify-between'>
        <div className='px-4 py-4 w-[375px] m-auto lg:m-0 lg:ml-[2%] xl:ml-[7%] lg:mt-[2%] lg:w-98'>
          {props.children}
        </div>
        <img
          src={vaccines}
          className='hidden lg:block h-full'
          alt='covid-19 vaccines'
        />
      </div>
    </>
  )
}

export default Wrapper
