import React from 'react'

const App: React.FC<{
  children: React.ReactElement<any, any> | React.ReactElement<any, any>[] | null
}> = (props) => <>{props.children}</>

export { App }
