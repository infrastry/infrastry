import React from 'react'
import { PropsWithChildren, PropsWithStyle } from '../../types'
import { parseFlex, parseProps, PropsFlex } from '../../utils'

export type FlexProps = PropsWithChildren<PropsWithStyle<PropsFlex>>

const defaultFlexProps: FlexProps = {
  className: 'inf-flex',
}

export const Flex: React.FC<Partial<FlexProps>> = (props) => {
  let parsedProps = parseProps<FlexProps>(defaultFlexProps, props)
  parsedProps = parseFlex(parsedProps)

  return (
    <div
      className={parsedProps.className}
      style={parsedProps.style}
      children={parsedProps.children}
    />
  )
}

export const InfFlex = Flex
