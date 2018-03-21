import React, { Component } from 'react'
import Heading from '../../../../components/Heading/Heading'
import './About.css'

class About extends Component {
  render() {
    return (
        <div className="col-12 personnal-infos-about">
            <div className="row about-title">
                <Heading title={ 'About me' } />
            </div>
            <div className="row">
              <p className="col-12">
                Final year software engineers student @42-school. Passionate about system programming, applicative security, virus and other dark technology.
                I like almost all the abstractions that help us to work with the machine language.
              </p>
            </div>
        </div>
    )
  }
}

export default About
