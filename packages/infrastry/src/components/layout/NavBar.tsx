import React from 'react'
import { OrElement, StringLink } from '../../types'

export type NavBarProps = {
  links?: OrElement<StringLink>[]
}

export const NavBar: React.FC<NavBarProps> = (props: NavBarProps) => {
  if (!props.links) return <></>

  const lis: React.DetailedHTMLProps<
    React.LiHTMLAttributes<HTMLLIElement>,
    HTMLLIElement
  >[] = []

  for (const item of props.links) {
    // {} | undefined | null
    if (!item) continue
    // StringLink
    else if ('href' in item)
      lis.push(
        <li key={item.href}>
          <a href={item.href}>
            <span>{item.name}</span>
          </a>
        </li>
      )
    // React.ReactElement<any, any> | React.ReactElement<any, any>[]
    else lis.push(<li>{item}</li>)
  }

  return <nav>{lis.length && lis}</nav>
}
