import React, { Component } from 'react';
import './App.css';
import Header from './Header';

class App extends Component {
  state = {
    darkMode: false,
  };
  toggleDarkMode = () => {
    this.setState({
      darkMode: !this.state.darkMode,
    });
  };
  render() {
    const { darkMode } = this.state;
    return (
      <div className={darkMode ? 'app dark' : 'app'}>
        <div className="app-wrapper">
          <div className="title">YUFAN</div>
          <div className="app-header">
            <Header on={this.state.darkMode} onToggle={this.toggleDarkMode} />
          </div>
          <div className="app-body">
            <div className="articles">
            </div>
            <div className="social-media-box">
              <div className="box">
              </div>
            </div>
          </div>
          <div className="app-footer">(c) 2018 Yufan Wang</div>
        </div>
      </div>
    );
  }
}

export default App;
