import React, { Component } from 'react';
import './App.css';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-wrapper">
          <div className="app-header">
            <Header />
          </div>
          <div className="app-body">
            
          </div>
          <div className="app-footer">
            (c)2018 Yufan Wang
          </div>
        </div>
      </div>
    );
  }
}

export default App;
