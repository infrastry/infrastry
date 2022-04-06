import React from 'react'
import { PropsStyle, PropsWithStyle } from '../../types'
import { combineClassName } from '../../utils'

export type ButtonProps =
  | React.PropsWithChildren<PropsWithStyle<{ type: 'button' | 'span' }>> // Normal
  | ({ type: 'a' } & LinkProps) // Link

export interface LinkProps extends React.PropsWithChildren<PropsStyle> {
  href?: string
}

const defaultButtonProps: ButtonProps = {
  type: 'button',
}

const defaultLinkProps: LinkProps = {}

const defaultClassName = 'inf-button'

export const Button: React.FC<Partial<ButtonProps>> = (props) => {
  const parsedProps: ButtonProps = Object.assign({}, defaultButtonProps, props)
  switch (parsedProps.type) {
    case 'button':
      return (
        <button
          className={combineClassName(defaultClassName, parsedProps.className)}
          style={parsedProps.style}
        >
          {parsedProps.children}
        </button>
      )
    case 'a':
      return (
        <a
          href={parsedProps.href}
          className={combineClassName(defaultClassName, parsedProps.className)}
          style={parsedProps.style}
        >
          {parsedProps.children}
        </a>
      )
    case 'span':
      return (
        <span
          className={combineClassName(defaultClassName, parsedProps.className)}
          style={parsedProps.style}
        >
          {parsedProps.children}
        </span>
      )
  }
}

export const Link: React.FC<Partial<LinkProps>> = (props) => {
  const parsedProps = Object.assign({}, defaultLinkProps, props)
  return Button({ type: 'a', ...parsedProps })
}

export const InfButton = Button
export const InfLink = Link
