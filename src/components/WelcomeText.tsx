const WelcomeText: React.FC<{ title: string; details: string }> = (props) => {
  return (
    <>
      <h2 className='font-black  text-black text-xl mt-8 1.5xl:w-[500px]'>
        {props.title}
      </h2>
      <p className='text-gray mb-4'>{props.details}</p>
    </>
  )
}

export default WelcomeText
