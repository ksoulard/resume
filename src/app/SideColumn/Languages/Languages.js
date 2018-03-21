import React, { Component } from 'react'
import './Languages.css'
import Language from './Language/Language'

import Heading from '../../../components/Heading/Heading'

class Languages extends Component {

    render() {
        return (
            <div className="col-12 d-none d-sm-block languages-wrapper">
                <Heading title={ 'Languages' } />
                <div className="col-12">
                <dl>
                    <Language language={'Francais'} level={'Native(C2)'}/>
                    <Language language={'Anglais'} level={'Average(B2)'}/>
                </dl>
                </div>
            </div>
        )
    }
}

export default Languages
