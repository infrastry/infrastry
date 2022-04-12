import { PropsWithStyle } from '../types'
import { combineClassName } from './props'

const parseStyleProp =
  <TTargetProp, TPropName = keyof TTargetProp>(
    propName: TPropName,
    defaultPropClassName: string
  ): (<TComponentProps extends PropsWithStyle<TTargetProp>>(
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
export type PropsWithPlain<T> = (T extends unknown[] ? T[number] : T) &
  PropsPlain

export const parsePlain = parseStyleProp<PropsPlain>('plain', 'inf-plain')

//#endregion

//#region mini

export interface PropsMini {
  mini?: boolean
}
export type PropsWithMini<T> = (T extends unknown[] ? T[number] : T) & PropsMini

export const parseMini = parseStyleProp<PropsMini>('mini', 'inf-mini')

//#endregion
