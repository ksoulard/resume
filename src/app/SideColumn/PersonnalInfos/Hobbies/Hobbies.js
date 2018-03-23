import React, { Component } from 'react'
import './Hobbies.css'
import chess from './chess.png'
import cube from './cube.png'
import snes from './snes.png'

import Heading from '../../../../components/Heading/Heading'
import Hobby from './Hobby/Hobby'

class Hobbies extends Component {
    render() {
        return (
            <div className="col-12 d-none d-md-block hobbies-wrapper">
                <div className="row">
                    <Heading title={ 'Hobbies' } />
                </div>
                <div className="row">
                    <Hobby url={chess} />
                    <Hobby url={cube} />
                    <Hobby url={snes} />
                </div>
            </div>
        )
    }
}

export default Hobbies
