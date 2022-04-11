import React from 'react'
import { PropsStyle } from '../../types'
import { parseProps } from '../../utils'

export const Main: React.FC<React.PropsWithChildren<PropsStyle>> = (props) => {
  const parsedProps = parseProps<React.PropsWithChildren<PropsStyle>>({}, props)
  return (
    <main className={parsedProps.className} style={props.style}>
      {props.children}
    </main>
  )
}

export const InfMain = Main
