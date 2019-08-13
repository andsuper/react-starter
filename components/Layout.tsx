import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Layout: React.FC<Props> = ({ children, ...rest }) => {
  return <div {...rest}>{children}</div>
}

export default Layout
