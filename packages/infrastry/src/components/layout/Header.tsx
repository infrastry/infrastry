import React from 'react'
import { OrElement, PropsStyle, StringLink } from '../../types'
import { parseProps } from '../../utils'
import { Link } from '../basic'

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
      <div className="inf-justify-start">{parsedLeft}</div>
      <div className="inf-justify-center">{parsedCenter}</div>
      <div className="inf-justify-end">{parsedRight}</div>
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
        return <Link className="inf-button-semi" children={x} />
      }
      if ('name' in x && 'href' in x) {
        // StringLink
        return (
          <Link className="inf-button-semi" href={x.href} children={x.name} />
        )
      }
      return x
    })
    .filter(Boolean)
}
