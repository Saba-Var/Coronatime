import { Link } from 'react-router-dom'

type propsType = {
  question: string
  action: string
  link: string
}

const Question: React.FC<propsType> = (props) => {
  return (
    <div className='mt-6'>
      <p className='text-gray text-center'>
        {props.question}
        <Link to={props.link} className='text-black text-sm font-semibold'>
          {' '}
          {props.action}
        </Link>
      </p>
    </div>
  )
}

export default Question
