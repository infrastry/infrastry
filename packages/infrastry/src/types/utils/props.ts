import { ReactNode } from 'react'

export interface PropsChildren {
  children?: ReactNode
}

export type PropsStyle = {
  className?: string
  style?: React.CSSProperties
}
