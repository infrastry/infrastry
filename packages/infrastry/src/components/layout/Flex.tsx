import React from 'react'
import { PropsStyle } from '../../types'
import { parseProps } from '../../utils'

export type FlexProps = React.PropsWithChildren<PropsStyle>

const defaultFlexProps: FlexProps = {
  className: 'inf-flex',
}

export const Flex: React.FC<Partial<FlexProps>> = (props) => {
  const parsedProps = parseProps<FlexProps>(defaultFlexProps, props)
  return (
    <div
      className={parsedProps.className}
      style={parsedProps.style}
      children={parsedProps.children}
    />
  )
}

export const InfFlex = Flex
