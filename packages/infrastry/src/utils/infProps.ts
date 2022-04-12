import { PropsWithStyle } from '../types'
import { combineClassName } from './props'

//#region plain

export type PropsPlain = {
  plain?: boolean
}
export type PropsWithPlain<T> = (T extends unknown[] ? T[number] : T) &
  PropsPlain

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

//#endregion

//#region mini

export interface PropsMini {
  mini?: boolean
}
export type PropsWithMini<T> = (T extends unknown[] ? T[number] : T) & PropsMini

//#endregion
