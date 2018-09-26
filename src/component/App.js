import React, { Component } from 'react';

import  AppRoute from './routes';
// import './App.css';

  class App extends Component {
    render() {
      return (
        <div className="routes">
              <AppRoute />
        </div>
      );
    }
  }
export default App;