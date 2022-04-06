import React from 'react'
import { PropsStyle } from '../../types'
import { combineClassName } from '../../utils'

export const Main: React.FC<React.PropsWithChildren<PropsStyle>> = (props) => (
  <main
    className={combineClassName('inf-main', props.className)}
    style={props.style}
  >
    {props.children}
  </main>
)

export const InfMain = Main
