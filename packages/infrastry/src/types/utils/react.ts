export type Children =
  | React.ReactElement<any, any>
  | React.ReactElement<any, any>[]
  | {}

export type PropChildren = { children?: Children }
export type PropWithChildren<T> = (T extends unknown[] ? T[number] : T) &
  PropChildren

export type PropStyle = {
  className?: string
  style?: React.CSSProperties
}
export type PropWithStyle<T> = (T extends unknown[] ? T[number] : T) & PropStyle

export type OrElement<T> =
  | (T extends unknown[] ? T[number] : T)
  | Children
  | null
  | undefined
