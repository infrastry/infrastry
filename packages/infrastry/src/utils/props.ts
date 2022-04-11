import { PropsPlain, PropsWithStyle } from '../types'

export function parseProps<T>(defaultProps: T, props: Partial<T>): T {
  const parsedProps: T = Object.assign({}, defaultProps, props)
  if ('className' in parsedProps) {
    ;(parsedProps as PropsWithStyle<T>).className = combineClassName(
      (defaultProps as PropsWithStyle<T>).className,
      (props as PropsWithStyle<T>).className
    )
  }
  return parsedProps
}

export function parsePlain<T extends PropsWithStyle<PropsPlain>>(
  props: T,
  plainClassName = 'inf-plain'
): T {
  const parsedProps = { ...props }
  if (parsedProps.plain)
    parsedProps.className = combineClassName(
      parsedProps.className,
      plainClassName
    )
  return parsedProps
}

export const combineClassName = (
  ...args: (string | undefined)[]
): string | undefined =>
  args.reduce((x, y) => (x || '') + ' ' + (y || ''))?.trim()
