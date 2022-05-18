function Username(props) {
  return (
    <div className='flex flex-col gap-2'>
      <label className='text-black'>Username</label>
      <input
        type='email'
        className='border-[1px] h-14 px-6 rounded-lg border-border-gray focus:ring-2 focus:border-link-blue outline-none'
        placeholder='Enter unique username or email'
      />
    </div>
  )
}
export default Username
