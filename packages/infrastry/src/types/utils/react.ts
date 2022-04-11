import { ReactNode } from 'react'

export type OrElement<T> =
  | (T extends unknown[] ? T[number] : T)
  | ReactNode
  | null
  | undefined
