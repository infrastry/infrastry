import { PropsStyle } from '../types'
import { combineClassName } from './props'

const parseStyleProp =
  <TTargetProp, TPropName = keyof TTargetProp>(
    propName: TPropName,
    defaultPropClassName: string
  ): (<TComponentProps extends PropsStyle & TTargetProp>(
    props: TComponentProps,
    propClassName?: string
  ) => TComponentProps) =>
  (props, propClassName) => {
    const parsedProps = { ...props }
    if ((parsedProps as any)[propName])
      parsedProps.className = combineClassName(
        parsedProps.className,
        propClassName || defaultPropClassName
      )
    return parsedProps
  }

//#region plain

export type PropsPlain = {
  plain?: boolean
}

export const parsePlain = parseStyleProp<PropsPlain>('plain', 'inf-plain')

//#endregion

//#region mini

export interface PropsMini {
  mini?: boolean
}

export const parseMini = parseStyleProp<PropsMini>('mini', 'inf-mini')

//#endregion

//#region flex

type PropsFlexOptions = 'start' | 'center' | 'end' | 'stretch'
export interface PropsFlex {
  row?: boolean
  align?: PropsFlexOptions
  justify?: PropsFlexOptions
}

export function parseFlex<T extends PropsStyle & PropsFlex>(props: T): T {
  const parsedProps = { ...props }
  if (!parsedProps.row)
    parsedProps.className = combineClassName(
      parsedProps.className,
      'inf-flex-column'
    )
  if (parsedProps.align)
    parsedProps.className = combineClassName(
      parsedProps.className,
      `inf-align-${parsedProps.align}`
    )
  if (parsedProps.justify)
    parsedProps.className = combineClassName(
      parsedProps.className,
      `inf-justify-${parsedProps.justify}`
    )
  return parsedProps
}

//#endregion
