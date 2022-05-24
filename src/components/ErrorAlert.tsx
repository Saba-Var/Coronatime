import { ErrorIcon, CloseIcon } from 'components/svgs'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

type ErrorProps = {
  message: string
  show: boolean
  setShowAlert: (boolean: boolean) => void
}

const ErrorAlert: React.FC<ErrorProps> = (props) => {
  const { t } = useTranslation()
  const [exit, setExit] = useState<boolean>(false)

  return (
    <div
      className={`px-1 md:text-2xl z-[999999] animate-slide-in-top  bg-red-100 border border-rose-600 text-red-700 md:px-4 py-1 md:py-3 rounded bg-rose-100  fixed top-4 md:top-4 lg:top-10 2xl:top-12
       ${exit && 'animate-bounce-out-left'}`}
    >
      <div className='flex items-center justify-between'>
        <div className='text-center flex items-center flex-wrap text-sm '>
          <span className='mr-1 md:inline-block hidden  '>
            <ErrorIcon />
          </span>
          <strong className=' font-bold text-red mr-1'>{t('Warning!')}</strong>
          {t(props.message)}
          <span
            className='ml-1 inline-block'
            onClick={() => {
              setExit(true)
              setTimeout(() => {
                props.setShowAlert(false)
              }, 1600)
            }}
          >
            <CloseIcon />
          </span>
        </div>
      </div>
    </div>
  )
}

export default ErrorAlert
