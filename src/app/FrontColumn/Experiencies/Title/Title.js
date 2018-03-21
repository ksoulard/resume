import React, { Component } from 'react'
import './Title.css'
import Heading from '../../../../components/Heading/Heading'

class Title extends Component {
  render() {
    return (
        <div className="row">
          <Heading title={ 'Professional experiences.' } />
        </div>
    )
  }
}

export default Title
