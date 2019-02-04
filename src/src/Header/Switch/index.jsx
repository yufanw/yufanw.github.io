import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

export default class Switch extends Component {
  static propTypes = {
    onToggle: PropTypes.func,
    on: PropTypes.bool
  }
  static defaultProps = {
    on: false
  }
  state = {
    on: this.props.on
  }

  onToggle = () => {
    this.setState(({on}) => ({
      on: !on
    }), this.props.onToggle);
  }

  render() {
    return (
      <div className="switch-comp">
        <div className="switch-wrapper">
          <label className={this.state.on ? "switch" : "switch off"} htmlFor="switch">
            <input type="checkbox" 
              name="switch" 
              id="switch" 
              onChange={this.onToggle}
              checked={this.state.on}/>
            <div className={this.state.on ? "slider" : "slider off"}></div>
          </label>
        </div>
      </div>
    );
  }
}
