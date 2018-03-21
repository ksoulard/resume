import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Link.css'

class Link extends Component {
  render() {
    return (
        <a className='c-link' href={this.props.url}><i className={`fab fa-${this.props.name}`} /></a>
    )
  }
}

Link.defaultProps = {
    url: '',
    name: ''
}

Link.propTypes = {
    url: PropTypes.string,
    name: PropTypes.string
}

export default Link
