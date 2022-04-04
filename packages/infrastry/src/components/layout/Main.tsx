import React from 'react'
import { PropStyle, PropWithChildren } from '../../types'

const Main: React.FC<PropWithChildren<PropStyle>> = (props) => (
  <main className={props.className} style={props.style}>
    {props.children}
  </main>
)

export { Main }
