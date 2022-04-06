import React from 'react'
import { PropsWithStyle } from '../../types'
import { combineClassName } from '../../utils'

export const App: React.FC<
  React.PropsWithChildren<PropsWithStyle<{ block?: boolean }>>
> = (props) => {
  const className = props.block
    ? combineClassName('inf-app', props.className)
    : combineClassName('inf-app inf-full-vh', props.className)
  return (
    <div className={className} style={props.style}>
      {props.children}
    </div>
  )
}

export const InfApp = App
