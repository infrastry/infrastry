import React from 'react'
import { StrLink } from '../../types/StrLink'

export type NavBarProps = {
  links?: StrLink[] | {}
}

const NavBar: React.FC<NavBarProps> = (props: NavBarProps) => (
  <nav>
    <div>
      {props.links && 'length' in props.links && props.links.length > 0 && (
        <ul>
          {props.links.map((x: StrLink) => (
            <li key={x.href}>
              <a href={x.href}>
                <span>{x.name}</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  </nav>
)

export { NavBar }
