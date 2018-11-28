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
            <div className="content-wrapper">
              <div className="articles">
                <div className="image-box">
                  <h4>Image of the day</h4>
                  <img src="https://source.unsplash.com/400x400/daily" 
                    className="responsive-image"
                    alt="Daily unsplash"/>
                  <div className="caption"><a href="https://source.unsplash.com/">Image updated daily by <span className="link">unsplash</span></a></div>
                </div>
              </div>
              <div className="social-media-box">
                <div className="box">
                  <h4>Contact me:</h4>
                  <div><a href="https://www.linkedin.com/in/yufan-wang-web">LinkedIn</a></div>
                  <div><a href="https://github.com/yufanw">Github</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="app-footer"> 
          Copyright 2018 Yufan Wang
        </div>
      </div>
    );
  }
}

export default App;
