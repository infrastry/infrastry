import React from 'react'
import { PropsWithStyle } from '../../types'
import { parseProps } from '../../utils'

export type AppProps = PropsWithStyle<{ block?: boolean }>

export const App: React.FC<React.PropsWithChildren<AppProps>> = (props) => {
  const defaultProps = {
    className: props.block ? 'inf-app' : 'inf-app inf-full-vh',
  }
  const parsedProps = parseProps<AppProps>(defaultProps, props)

  return (
    <div className={parsedProps.className} style={props.style}>
      {props.children}
    </div>
  )
}

export const InfApp = App
