import React from 'react'

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children, ...rest }) => {
  return <div {...rest}>{children}</div>
}

export default Layout
