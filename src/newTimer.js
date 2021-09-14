import './styles.css';
import React, { Component, createRef } from 'react';

class TimeBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: 0,
      minutes: 0,
      seconds:0
    }
    this.hoursInput = createRef();
    this.minutesInput= createRef();
    this.secondsInput = createRef();
  }

  inputHandler = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  convertToSeconds = ( hours, minutes,seconds) => {
    return seconds + minutes * 60 + hours * 60 * 60;
  }

  startTimer = () => {
    this.timer = setInterval(this.countDown, 1000);
  }

  countDown = () => {
    const  { hours, minutes, seconds } = this.state;
    let c_seconds = this.convertToSeconds(hours, minutes, seconds);

    if(c_seconds) {

      // seconds change
      seconds ? this.setState({seconds: seconds-1}) : this.setState({seconds: 59});

      // minutes change
      if(c_seconds % 60 === 0 && minutes) {
        this.setState({minutes: minutes -1});
      }

      // when only hours entered
      if(!minutes && hours) {
        this.setState({minutes: 59});
      }

      // hours change
      if(c_seconds % 3600 === 0 && hours) {
        this.setState({hours: hours-1});
      }

    } else {

      clearInterval(this.timer);
      this.props.timesUp()

    }
  }


  stopTimer = () => {
    clearInterval(this.timer);
  }

  resetTimer = () => {
    this.setState({
      hours: 0,
      minutes: 0,
      seconds: 0
    });
    this.hoursInput.current.value = 0;
    this.minutesInput.current.value = 0;
    this.secondsInput.current.value = 0;
  }


  render() {
    const { hours, minutes, seconds } = this.state;
    console.log(this.state);
    return (
      <div className="App">
         <h1 className="display-4 shadow-sm p-3 mb-5 bg-light rounded text-muted"> Focus | Reflect </h1>
         <div className="inputGroup ">
            <h3>Hrs</h3>
            <input className="inputGroup shadow-sm bg-light rounded" ref={this.hoursInput} type="number" placeholder={0}  name="hours"  onChange={this.inputHandler} />
            <h3>Min</h3>
            <input className="inputGroup shadow-sm bg-light rounded" ref={this.minutesInput} type="number"  placeholder={0}   name="minutes"  onChange={this.inputHandler} />
            <h3>Sec</h3>
            <input className="inputGroup shadow-sm bg-light rounded" ref={this.secondsInput} type="number"  placeholder={0}  name="seconds"  onChange={this.inputHandler} />
         </div>
         <div className="btn-group" style={{margin: 20}}>
            <button onClick={this.startTimer} className="btn btn-outline-secondary">start</button>
            <button onClick={this.stopTimer}  className="btn btn-outline-secondary">stop</button>
            <button onClick={this.resetTimer}  className="btn btn-outline-secondary">reset</button>
         </div>
         <h1 className="display-4 shadow-sm bg-light rounded"> Timer {hours} : {minutes} : {seconds} </h1>
      </div>

    );
  }
}

export default TimeBox;
