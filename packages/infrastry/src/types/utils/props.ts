import { ReactNode } from 'react'

export interface PropsChildren {
  children?: ReactNode
}

export type PropsWithChildren<T> = (T extends unknown[] ? T[number] : T) &
  PropsChildren

export type PropsStyle = {
  className?: string
  style?: React.CSSProperties
}
export type PropsWithStyle<T> = (T extends unknown[] ? T[number] : T) &
  PropsStyle
