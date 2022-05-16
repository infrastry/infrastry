import React from 'react'
import { PropsChildren, PropsStyle } from '../../types'
import {
  isLinkExternal,
  parseMini,
  parsePlain,
  parseProps,
  PropsMini,
  PropsPlain,
} from '../../utils'

export type ButtonProps = (
  | /* Normal */ (PropsChildren & PropsStyle & { type: 'button' | 'span' })
  | /* Link */ ({ type: 'a' } & LinkProps)
) &
  PropsPlain &
  PropsMini & {
    onClick?: React.MouseEventHandler<HTMLElement>
  }

export interface LinkProps extends PropsChildren, PropsStyle {
  href?: string
}

const defaultButtonProps: ButtonProps = {
  type: 'button',
  className: 'inf-button',
}

const defaultLinkProps: LinkProps = {
  className: 'inf-link',
}

export const Button: React.FC<Partial<ButtonProps>> = (props) => {
  // Parse props
  let parsedProps = parseProps<ButtonProps>(defaultButtonProps, props)
  parsedProps = parsePlain(parsedProps, 'inf-button-plain')
  parsedProps = parseMini(parsedProps, 'inf-button-mini')

  // Build
  switch (parsedProps.type) {
    case 'button':
      return (
        <button
          type="button"
          className={parsedProps.className}
          style={parsedProps.style}
          onClick={parsedProps.onClick}
          children={parsedProps.children}
        />
      )
    case 'a':
      const isExternal = parsedProps.href && isLinkExternal(parsedProps.href)
      return (
        // eslint-disable-next-line react/jsx-no-target-blank
        <a
          href={parsedProps.href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noreferrer noopener' : undefined}
          className={parsedProps.className}
          style={parsedProps.style}
          onClick={parsedProps.onClick}
          children={parsedProps.children}
        />
      )
    case 'span':
      return (
        <span
          className={parsedProps.className}
          style={parsedProps.style}
          onClick={parsedProps.onClick}
          children={parsedProps.children}
        />
      )
  }
}

export const Link: React.FC<Partial<LinkProps>> = (props) => {
  const parsedProps = Object.assign({}, defaultLinkProps, props)
  return Button({ type: 'a', plain: true, ...parsedProps })
}

export const InfButton = Button
export const InfLink = Link
