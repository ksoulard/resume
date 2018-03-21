import React, { Component } from 'react'
import './SideColumn.css'

import ProfilePhoto from './ProfilePhoto/ProfilePhoto'
import PersonnalInfos from './PersonnalInfos/PersonnalInfos'
import Languages from './Languages/Languages'
import Links from './Links/Links'

class SideColumn extends Component {
  render() {
    return (
        <div className="col-12 col-md-4 side-column-wrapper">
            <div className="row">
                <ProfilePhoto />
                <PersonnalInfos />
                <Languages />
                <Links />
            </div>
        </div>
    )
  }
}

export default SideColumn
