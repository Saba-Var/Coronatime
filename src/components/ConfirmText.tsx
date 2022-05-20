import { dashboard } from 'assets/images'

type propsType = {
  title: string
  action: string
}

const ConfirmText: React.FC<propsType> = (props) => {
  return (
    <div className='flex flex-col gap-14 p-[4%] items-center pb-0'>
      <img
        src={dashboard}
        alt='dashboard'
        className='w-[343px] h-[241] md:w-[520px] md:h-[365px]'
      />
      <div className='flex flex-col gap-4 items-center'>
        <p className='text-black text-2xl font-black'>{props.title}</p>
        <p className='text-black text-lg'>{props.action}</p>
      </div>
    </div>
  )
}

export default ConfirmText
