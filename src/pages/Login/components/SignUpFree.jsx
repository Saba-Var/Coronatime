import { Link } from 'react-router-dom'
function SignUpFree() {
  return (
    <div className='mt-6'>
      <p className='text-gray text-center'>
        Don't have an account?
        <Link to='/Sign-up' className='text-black text-sm font-semibold'>
          {' '}
          Sign up for free
        </Link>
      </p>
    </div>
  )
}

export default SignUpFree
