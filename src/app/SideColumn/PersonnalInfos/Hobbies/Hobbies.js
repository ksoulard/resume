import React, { Component } from 'react'
import './Hobbies.css'

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
                    <Hobby url={'http://arwebzone.com/wp-content/uploads/2014/08/Chess-Titans.png'} />
                    <Hobby url={'https://www.grubiks.com/images/rc.png'} />
                    <Hobby url={'http://8bitdo.fr/img/produits/snes30-pro.png'} />
                </div>
            </div>
        )
    }
}

export default Hobbies
