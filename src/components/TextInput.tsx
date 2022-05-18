const TextInput: React.FC<{ label: string; placeholder: string }> = (props) => {
  return (
    <div className='flex flex-col gap-2'>
      <label className='text-black'>{props.label}</label>
      <input
        type='password'
        className='border-[1px] h-14 px-6 rounded-lg border-border-gray focus:ring-2 focus:border-link-blue outline-none'
        placeholder={props.placeholder}
      />
    </div>
  )
}

export default TextInput
