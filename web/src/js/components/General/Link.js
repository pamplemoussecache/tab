import React from 'react'
import PropTypes from 'prop-types'
import { Link as LinkReactRouter } from 'react-router-dom'
import { isURLForDifferentApp } from 'js/navigation/utils'

// To handle both internal and external links.
class Link extends React.Component {
  render() {
    const { children, to, style, className, ...otherProps } = this.props
    const internal = !isURLForDifferentApp(to)

    // Use gatsby-link for internal links, and <a> for others
    if (internal) {
      return (
        <LinkReactRouter to={to} style={style} className={className}>
          {children}
        </LinkReactRouter>
      )
    }
    return (
      <a href={to} style={style} className={className} {...otherProps}>
        {children}
      </a>
    )
  }
}

Link.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  style: PropTypes.object,
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
}

Link.defaultProps = {
  style: {
    textDecoration: 'none',
  },
  className: '',
}

export default Link
