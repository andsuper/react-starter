import React from 'react'
import PropTypes from 'prop-types'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children, ...rest }) => {
  return <div {...rest}>{children}</div>
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Layout
