export type PropsStyle = {
  className?: string
  style?: React.CSSProperties
}
export type PropsWithStyle<T> = (T extends unknown[] ? T[number] : T) &
  PropsStyle

export type PropsPlain = {
  plain?: boolean
}
export type PropsWithPlain<T> = (T extends unknown[] ? T[number] : T) &
  PropsPlain
