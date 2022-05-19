const WelcomeText: React.FC<{ title: string; details: string }> = (props) => {
  return (
    <>
      <h2 className='font-black  text-black text-xl mt-10'>{props.title}</h2>
      <p className='text-gray mb-6'>{props.details}</p>
    </>
  )
}

export default WelcomeText
