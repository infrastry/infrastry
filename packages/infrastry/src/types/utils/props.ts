export type PropsStyle = {
  className?: string
  style?: React.CSSProperties
}
export type PropsWithStyle<T> = (T extends unknown[] ? T[number] : T) &
  PropsStyle
