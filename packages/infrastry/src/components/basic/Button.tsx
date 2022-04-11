import React from 'react'
import { PropsStyle, PropsWithStyle } from '../../types'
import { combineClassName, isLinkExternal } from '../../utils'

export type ButtonProps = (
  | /* Normal */ React.PropsWithChildren<
      PropsWithStyle<{ type: 'button' | 'span' }>
    >
  | /* Link */ ({ type: 'a' } & LinkProps)
) & {
  onClick?: React.MouseEventHandler<HTMLElement>
}

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
          className={combineClassName(defaultClassName, parsedProps.className)}
          style={parsedProps.style}
          children={parsedProps.children}
        />
      )
    case 'span':
      return (
        <span
          className={combineClassName(defaultClassName, parsedProps.className)}
          style={parsedProps.style}
          onClick={parsedProps.onClick}
          children={parsedProps.children}
        />
      )
  }
}

export const Link: React.FC<Partial<LinkProps>> = (props) => {
  const parsedProps = Object.assign({}, defaultLinkProps, props)
  return Button({ type: 'a', ...parsedProps })
}

export const InfButton = Button
export const InfLink = Link
