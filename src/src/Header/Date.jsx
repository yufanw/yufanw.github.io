import React, { Component } from 'react';
import moment from 'moment';

export class Date extends Component {

  state = {
    dateString: moment().format('dddd, MMM Do YYYY'),
    timeString: moment().format('hh:mm:ss a'),
  }
  componentDidMount() {
    this.startTimer();
  }

  startTimer = () => {
    this.setState({
      dateString: moment().format('ddd, MMM Do YYYY'),
      timeString: moment().format('hh:mm:ss a'),
    });
    setTimeout(this.startTimer, 250);
  }

  render() {
    return (
      <div className="date">
        {this.state.dateString} ||
        <span className="time">
          {this.state.timeString}
        </span>
      </div>
    );
  }
}

export default Date;
