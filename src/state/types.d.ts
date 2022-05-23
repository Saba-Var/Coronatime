export type DataType = {
  name: {
    en: string
    ka: string
  }
  code: string
  _id: string
  statistics: {
    confirmed: number
    critical: number
    deaths: number
    recovered: number
  }
}[]

export type provider = {
  children: JSX.Element
}
