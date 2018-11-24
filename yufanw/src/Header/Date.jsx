import React, { Component } from 'react';
import moment from 'moment';

export class Date extends Component {

  state = {
    momentString: moment().format('dddd, MMMM Do YYYYY, h:mm:ss a'),
  }
  componentDidMount() {
    this.startTimer();
  }

  startTimer = () => {
    this.setState({
      momentString: moment().format('dddd, MMMM Do YYYYY, h:mm:ss a'),
    });
    setTimeout(this.startTimer, 500);
  }

  render() {
    return (
      <div className="date">
        {this.state.momentString}
      </div>
    );
  }
}

export default Date;
