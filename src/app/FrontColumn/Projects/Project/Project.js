import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Project.css'

class Project extends Component {
    render () {
        return (
            <div className="row">
                <div className="col-3 project-link">
                    <a href={this.props.url}>{this.props.name}</a>
                </div>
                <div className="col-4 project-type">
                    {this.props.type}
                </div>
                <div className="col-5">
                    {this.props.techno}
                </div>
                <div className="col-12">
                    {this.props.desc}
                </div>
            </div>
        )
    }
}

Project.defaultProps = {
    url: '',
    type: '',
    techno: '',
    name: '',
    data: '',
    desc: ''
}

Project.propTypes = {
    url: PropTypes.string,
    type: PropTypes.string,
    techno: PropTypes.string,
    name: PropTypes.string,
    date: PropTypes.string,
    desc: PropTypes.string
}

export default Project