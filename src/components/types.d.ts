export type PasswordProps = {
  data: { 'Repeat Password': string; Password: string }
  required: string
  dirtyFields: any
  register: any
  label: string
  valid: string
  errors: any
}

export type InputFieldProps = {
  placeholder: string
  required?: string
  message?: string
  unique?: string
  value?: number
  label: string
  page?: string
  type: string

  formState: {
    apiError?: boolean
    dirtyFields: any
    register: any
    errors: any
  }
}

export type WrapperTypes = {
  children: JSX.Element
  details: string
  title: string
  page: string
}

export type ErrMsg = {
  show: boolean | undefined
  text: string | undefined
  apiError?: boolean
  error?: any
}

export type EmailProps = {
  apiError?: string | boolean
  dirtyFields: any
  valid: string
  label: string
  register: any
  errors: any
}

export type StatisticsProps = {
  containerStyle: string
  textStye: string
  target: string
  image: string
  total: number
}

export type ErrorProps = {
  setShowAlert: (boolean: boolean) => void
  message: string
  show: boolean
}
