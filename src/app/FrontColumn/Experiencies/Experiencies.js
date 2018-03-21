import React, { Component } from 'react'
import './Experiencies.css'

import Title from './Title/Title'
import Experience from './Experience/Experience'

class Experiencies extends Component {
    render() {
        return (
            <div className="col-12 experiencies-wrapper">
                <Title />
                <Experience />
            </div>
        )
    }
}

export default Experiencies