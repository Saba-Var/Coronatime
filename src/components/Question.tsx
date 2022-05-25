import { Link } from 'react-router-dom'

type PropsType = {
  question: string
  action: string
  link: string
}

const Question: React.FC<PropsType> = (props) => {
  return (
    <div className='mt-4'>
      <p className='text-gray text-center'>
        {props.question}
        <Link
          data-TestId={'Question'}
          to={props.link}
          className='text-black text-sm font-semibold'
        >
          {' '}
          {props.action}
        </Link>
      </p>
    </div>
  )
}

export default Question
