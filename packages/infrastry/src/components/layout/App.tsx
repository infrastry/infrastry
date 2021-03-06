import React from 'react'
import { PropsChildren, PropsStyle } from '../../types'
import { parseProps } from '../../utils'

export type AppProps = PropsChildren & PropsStyle & { block?: boolean }

export const App: React.FC<AppProps> = (props) => {
  const defaultProps = {
    className: props.block ? 'inf-app' : 'inf-app inf-full-vh',
  }
  const parsedProps = parseProps<AppProps>(defaultProps, props)

  return (
    <div
      className={parsedProps.className}
      style={parsedProps.style}
      children={parsedProps.children}
    />
  )
}

export const InfApp = App
