import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Hobby.css'

class Hobby extends Component {
  render() {
    const photo = { backgroundImage: `url(${this.props.url})` }

    return (
        <div className="col-4 hobby" style={ photo } />
    )
  }
}

Hobby.defaultProps = {
    url: ''
}

Hobby.propTypes = {
    url: PropTypes.string
}

export default Hobby
