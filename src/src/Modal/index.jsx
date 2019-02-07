import React, { Component } from 'react'

import './index.css';

export default class Modal extends Component {
  render() {
    return (
      <div className="modal-comp">
        <div className="modal-close-button-container">
          <button className="modal-close-icon"
            onClick={this.props.onClose}>
            <i className="icon ion-md-close"></i>
          </button>
        </div>
        <div className="modal-content">
          {this.props.content()}
        </div>
      </div>
    )
  }
}
