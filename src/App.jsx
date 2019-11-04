import React, { Component } from 'react';
import './App.css';
import Header from './Header';

import Routes from './Routes';
class App extends Component {
  state = {
    darkMode: false,
  }
  toggleDarkMode = () => {
    this.setState({
      darkMode: !this.state.darkMode,
    });
  }
  render() {
    const { 
      darkMode,
     } = this.state;
    return (
      <div className={darkMode ? 'app dark' : 'app'}>
        <div className="app-wrapper">
          <div className="title">YW</div>
          <div className="app-header">
            <Header on={this.state.darkMode} onToggle={this.toggleDarkMode} />
          </div>
          <div className="app-body">
            <Routes />
          </div>
        </div>
        <div className="app-footer"> 
          &copy; 2019 Yufan Wang
          <div className="note">
            <a href="https://newsapi.org//">
              Powered by <span className="link">News API</span>
            </a>
          </div>
          <div className="note social">
            <a href="https://github.com/yufanw">
              github
            </a>
            <a href="https://www.linkedin.com/in/yufan-wang-web/">
              linkedin
            </a>
            <a href="mailto:yufansmail@gmail.com">
              email
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
