import React from 'react'
import { PropStyle, PropWithChildren } from '../../types'
import { combineClassName } from '../../utils'

const App: React.FC<PropWithChildren<PropStyle>> = (props) => (
  <div
    className={combineClassName('inf-base', props.className)}
    style={props.style}
  >
    {props.children}
  </div>
)

export { App }
