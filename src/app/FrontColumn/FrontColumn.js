import React, { Component } from 'react'
import './FrontColumn.css'

import Formations from './Formations/Formations'
import Experiencies from './Experiencies/Experiencies'
import Interests from './Interests/Interests'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'

class FrontColumn extends Component {
  render() {
    return (
        <div className="col-12 col-md-8 front-column">
            <div className="row">
                <Formations />
                <Experiencies />
                <Skills />
                <Interests />
                <Projects />
            </div>
        </div>
    )
  }
}

export default FrontColumn
