import React from 'react'

const App: React.FC<{
  children?: React.ReactElement<any, any> | React.ReactElement<any, any>[] | {}
}> = (props) => <>{props.children}</>

export { App }
