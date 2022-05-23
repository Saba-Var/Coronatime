export type StaticsTicsProps = {
  setData: (newState: DataType) => void
  forceUpdate: any
  data: DataType
  language: any
}

export type SortProps = {
  optionTools: {
    setTarget: (target: string | null) => void
    setData: (newState: DataType) => void
    language: { language: any }
    forceUpdate: () => void
    target: string | null
    sort?: () => void
    data: DataType
  }
  option: string
}
