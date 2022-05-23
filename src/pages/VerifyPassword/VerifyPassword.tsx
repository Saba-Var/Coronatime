import { useSearchParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ConfirmText } from 'components'
import { Language } from 'components'
import { GreenBtn } from 'components'
import { useState } from 'react'

const VerifyPassword = () => {
  const [searchParams] = useSearchParams()
  const [showForm, setShowForm] = useState(false)
  const hash = searchParams.get('hash')
  const navigate = useNavigate()
  const { t } = useTranslation()
  // e6e698117fa891cf56ab5df5cd69c8b0084cb7ba27f6cebdda7ac6686bf56af1ac0af5e5c48b24525ee4402c8642cd23

  const onclickHandler = () => {
    setShowForm(true)
    navigate('/New-Password')
  }
  return (
    <>
      <ConfirmText title={t('Recover password')} action={t('Click Password')} />
      <div className='w-[343px] md:w-[392] flex justify-center mx-auto'>
        <GreenBtn text={t('RECOVER PASSWORD')} onClick={onclickHandler} />
      </div>
      <div className='flex justify-center mt-8'>
        <Language />
      </div>
    </>
  )
}

export default VerifyPassword
