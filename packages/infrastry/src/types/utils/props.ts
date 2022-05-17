import { ReactNode } from 'react'

export interface PropsChildren {
  children?: ReactNode
}

export interface PropsStyle {
  className?: string
  style?: React.CSSProperties
}

export interface PropsOnClick {
  onClick?: React.MouseEventHandler<HTMLElement>
}
