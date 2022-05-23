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

export type ErrMsg = {
  text: string | undefined
  show: boolean | undefined
  apiError?: boolean
  error?: any
}

export type EmailProps = {
  dirtyFields: any
  valid: string
  label: string
  register: any
  errors: any
}

export type PasswordProps = {
  data: { 'Repeat Password': string; Password: string }
  required: string
  dirtyFields: any
  register: any
  label: string
  valid: string
  errors: any
}
