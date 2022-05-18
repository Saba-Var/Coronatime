const GreenBtn: React.FC<{ text: string }> = (props) => {
  return (
    <button className='bg-green w-full mt-6 rounded-lg h-12 font-black text-white cursor-pointer'>
      {props.text}
    </button>
  )
}

export default GreenBtn
