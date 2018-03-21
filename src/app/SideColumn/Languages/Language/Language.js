import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Language.css'

class Language extends Component {
  render() {
    return (
            <span className="row">
            <dt key={`Language.Title.${this.props.language}`} className="col-6 language">{this.props.language}</dt>
            <dd key={`Language.Level.${this.props.level}`} className="col-6 language-level">{this.props.level}</dd>
            </span>
    )
  }
}

Language.defaultProps = {
    language: '',
    level: ''
}

Language.propTypes = {
    language: PropTypes.string,
    level: PropTypes.string
}

export default Language
