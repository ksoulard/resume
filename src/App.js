import React, { Component } from 'react';
import './App.css';

import SideColumn from './app/SideColumn/SideColumn'
import FrontColumn from './app/FrontColumn/FrontColumn'

class App extends Component {
  render() {
    return (
        <div className="container-fluid">
          <div className="row">
            <SideColumn />
            <FrontColumn />
          </div>
        </div>
    );
  }
}

export default App;
