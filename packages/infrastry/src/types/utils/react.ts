import { ReactNode } from 'react'

export type PropsStyle = {
  className?: string
  style?: React.CSSProperties
}
export type PropsWithStyle<T> = (T extends unknown[] ? T[number] : T) &
  PropsStyle

export type OrElement<T> =
  | (T extends unknown[] ? T[number] : T)
  | ReactNode
  | null
  | undefined
