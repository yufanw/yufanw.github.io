import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import ImageBox from './ImageBox';
import SocialMediaBox from './SocialMediaBox';

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
            <div className="content-wrapper">
              <div className="articles">
                <ImageBox />
              </div>
              <SocialMediaBox />
            </div>
          </div>
        </div>
        <div className="app-footer"> 
          Copyright 2018 Yufan Wang
          <div className="note">
            <a href="https://www.nytimes.com/">
              Design inspired by <span className="link">The New York Times</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
