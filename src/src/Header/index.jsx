import React, { Component } from 'react';
import './index.css';
import Date from './Date';
import Switch from './Switch';

class Header extends Component {
  
  render() {
    const {
      onToggle,
      on,
    } = this.props;
    return (
      <div className="header">
        <div className="location">Irvine, CA</div>
        <Date /> 
        <Switch 
          onToggle={onToggle}
          on={on}
        />
      </div>
    );
  }
}

export default Header;