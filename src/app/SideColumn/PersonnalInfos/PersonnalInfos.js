import React, { Component } from 'react'
import './PersonnalInfos.css'
import About from './About/About'
import Name from './Name/Name'
import Hobbies from './Hobbies/Hobbies'

class PersonnalInfos extends Component {
  render() {
    return (
        <div className="col-12 d-none d-sm-block personnal-infos-wrapper">
            <div className="row">
                <Name />
                <About />
            </div>
            <div className="row">
                <Hobbies />
            </div>
        </div>
    )
  }
}

export default PersonnalInfos
