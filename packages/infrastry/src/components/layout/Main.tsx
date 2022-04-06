import React from 'react'
import { PropStyle, PropWithChildren } from '../../types'
import { combineClassName } from '../../utils'

export const Main: React.FC<PropWithChildren<PropStyle>> = (props) => (
  <main
    className={combineClassName('inf-main', props.className)}
    style={props.style}
  >
    {props.children}
  </main>
)

export const InfMain = Main
