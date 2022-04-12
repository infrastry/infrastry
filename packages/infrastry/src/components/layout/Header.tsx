import React from 'react'
import { OrElement, PropsStyle, StringLink } from '../../types'
import { parseProps } from '../../utils'
import { Button } from '../basic'
import { Flex } from './Flex'

export interface HeaderProps extends PropsStyle {
  left?: OrElement<StringLink>[]
  center?: OrElement<StringLink>[]
  children?: OrElement<StringLink>[]
  right?: OrElement<StringLink>[]
}

const defaultHeaderProps: HeaderProps = {
  className: 'inf-header',
}

export const Header: React.FC<Partial<HeaderProps>> = (props) => {
  // Parse props
  const parsedProps = parseProps<HeaderProps>(defaultHeaderProps, props)

  // Parse children
  const parsedLeft = parseChildren(parsedProps.left)
  const parsedCenter = parseChildren(parsedProps.center || parsedProps.children)
  const parsedRight = parseChildren(parsedProps.right)

  // Build header
  return (
    <header className={parsedProps.className} style={parsedProps.style}>
      {parsedLeft && <Flex className="inf-justify-start">{parsedLeft}</Flex>}
      {parsedCenter && (
        <Flex className="inf-justify-center">{parsedCenter}</Flex>
      )}
      {parsedRight && <Flex className="inf-justify-end">{parsedRight}</Flex>}
    </header>
  )
}

export const InfHeader = Header

function parseChildren(
  children?: OrElement<StringLink>[]
): React.ReactNode | undefined {
  if (!children?.length) return undefined

  return children
    .map((x) => {
      if (!x || x === true) return undefined
      if (typeof x === 'string' || typeof x === 'number') {
        return <Button type="a" plain mini children={x} />
      }
      if ('name' in x && 'href' in x) {
        // StringLink
        return <Button type="a" plain mini href={x.href} children={x.name} />
      }
      return x
    })
    .filter(Boolean)
}
