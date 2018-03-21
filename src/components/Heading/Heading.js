import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Heading.css'

class Heading extends Component {
    render() {
        return (
            <div className="col-12 c-heading">
                <h3>{ this.props.title }</h3>
            </div>
        )
    }
}

Heading.defaultProps = {
    title: 'Default title'
}

Heading.propTypes = {
    title: PropTypes.string.isRequired
}

export default Heading
