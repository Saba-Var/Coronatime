import { Link } from 'react-router-dom'
function ForgotPassword() {
  return (
    <div className='flex justify-between mt-6 items-center'>
      <label className='flex items-center gap-2'>
        <input type='checkbox' className='accent-green' />
        <span>Remember this device</span>
      </label>
      <Link
        to='/Reset-password'
        className='text-link-blue text-sm font-semibold'
      >
        Forgot password?
      </Link>
    </div>
  )
}

export default ForgotPassword
