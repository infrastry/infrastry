import React from 'react'
import { PropStyle, PropWithChildren } from '../../types'

export const Main: React.FC<PropWithChildren<PropStyle>> = (props) => (
  <main className={props.className} style={props.style}>
    {props.children}
  </main>
)
