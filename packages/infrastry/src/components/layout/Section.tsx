import React from 'react'
import { PropsChildren, PropsStyle } from '../../types'
import { parseProps } from '../../utils'

export type SectionProps = PropsChildren & PropsStyle

const defaultSectionProps: SectionProps = {
  className: 'inf-section',
}

export const Section: React.FC<Partial<SectionProps>> = (props) => {
  const parsedProps = parseProps<SectionProps>(defaultSectionProps, props)

  return (
    <div
      className={parsedProps.className}
      style={parsedProps.style}
      children={parsedProps.children}
    />
  )
}

export const InfSection = Section
