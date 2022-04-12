import React from 'react'
import { PropsStyle } from '../../types'
import { parseProps } from '../../utils'

export type GridProps = React.PropsWithChildren<PropsStyle>

const defaultGridProps: GridProps = {
  className: 'inf-grid',
}

export const Grid: React.FC<Partial<GridProps>> = (props) => {
  const parsedProps = parseProps<GridProps>(defaultGridProps, props)
  return (
    <div
      className={parsedProps.className}
      style={parsedProps.style}
      children={parsedProps.children}
    />
  )
}

export const InfGrid = Grid
