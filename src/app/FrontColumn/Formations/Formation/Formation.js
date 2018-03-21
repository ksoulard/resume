import React, { Component } from 'react'
import './Formation.css'

class Formation extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-3 title">
                    Student @ 42 SCHOOL
                </div>
                <div className="col-9 date">
                    Novembre 2015 mars 2018
                </div>
                <div className="col-12 description">
                    42 is a school so the operating mode was inspired by epitech. The pedagogy is based on cooperation between students, motivation and independence. The notions necessary to realize a project are not given to us, it is up to us to invest the internet to learn.
                </div>
            </div>
        )
    }
}

export default Formation