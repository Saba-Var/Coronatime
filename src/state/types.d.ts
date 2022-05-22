export type dataType = {
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
