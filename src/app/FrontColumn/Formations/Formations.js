import React, { Component } from 'react'
import './Formations.css'

import Title from './Title/Title'
import Formation from './Formation/Formation'

class Formations extends Component {
  render() {
    return (
        <div className="col-12 formations-wrapper">
            <Title />
            <Formation />
        </div>
    )
  }
}

export default Formations
