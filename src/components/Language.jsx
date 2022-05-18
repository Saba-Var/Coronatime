function Language() {
  return (
    <div>
      <select
        name='languages'
        className='w-20 bg-transparent text-black outline-none border-0'
      >
        <option value='En' className='border-0'>
          English
        </option>
        <option value='GE'>Georgian</option>
      </select>
    </div>
  )
}

export default Language
