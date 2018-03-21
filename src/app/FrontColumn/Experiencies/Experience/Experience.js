import React, { Component } from 'react'
import './Experience'

class Experience extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-3 title">
                    Octomine [First internship]
                </div>
                <div className="col-9 date">
                    Octobre 2016 mars 2017
                </div>
                <div className="col-12 second_title">
                    DEVELOPPEUR BACKEND
                </div>
                <div className="col-12 techno">
                    php - symphony - ajax
                </div>
                <div className="col-12 description">
                    My first experiences as developper in a great start-up. I learned my first web languages.
                </div>
            </div>
        )
    }
}

export default Experience