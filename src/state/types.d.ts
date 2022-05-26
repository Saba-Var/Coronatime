export type DataType = {
  name: {
    en: string
    ka: string
  }

  code: string
  _id: string
  statistics: {
    recovered: number
    confirmed: number
    critical: number
    deaths: number
  }
}[]

export type Provider = {
  children: JSX.Element
}
