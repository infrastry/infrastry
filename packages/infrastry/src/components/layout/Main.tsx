import React from 'react'
import { PropsStyle } from '../../types'
import { parseProps } from '../../utils'

export type MainProps = React.PropsWithChildren<PropsStyle>

const defaultMainProps: MainProps = {
  className: 'inf-main',
}

export const Main: React.FC<MainProps> = (props) => {
  const parsedProps = parseProps<MainProps>(defaultMainProps, props)
  return (
    <main
      className={parsedProps.className}
      style={parsedProps.style}
      children={parsedProps.children}
    />
  )
}

export const InfMain = Main
