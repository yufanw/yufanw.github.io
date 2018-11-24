import React, { Component } from 'react';
import './index.css';
import Date from './Date';

class Header extends Component {
  
  render() {
    return (
      <div className="header">
       <div className="title">YUFAN</div>
       <div className="sub-header">
        <div className="location">Irvine, CA</div>
        <Date />
        <div className="toggle">      
          <div className="shift">
            <i className="icon ion-ios-sunny"></i>
          </div>
        </div>
       </div>
      </div>
    );
  }
}

export default Header;