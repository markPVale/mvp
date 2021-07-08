import React, {useState, useContext, createRef, useRef, useEffect} from "react";
// import SetTimer from './setTimer.js'
import './styles.css'

const CountDownTimer = () => {

  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [timerOn, setTimerOn] = useState(false);

  const hoursInput = useRef(0);
  const minutesInput = useRef(0);
  const secondsInput = useRef(0);


  const useInterval = (callback, delay) => {
    const savedCallback = useRef();

    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  };


  // useEffect(() => {
  //   let interval = null;

  //   if (timerOn) {
  //     interval = setInterval(() => {
  //       // setTime((prevTime) => prevTime );
  //       countDown()
  //     }, 1000);
  //   } else if (!timerOn) {
  //     clearInterval(interval);
  //   }

  //   return () => clearInterval(interval);
  // }, [timerOn]);

  console.log('hours: ', hoursInput)
  console.log('time.hours: ', time.hours)
  console.log('time.minutes: ', time.minutes)
  console.log('time.seconds: ', time.seconds)

  const inputHandler = (e) => {
    setTime({[e.target.name]: e.target.value});
  }

  const convertToSeconds = ( hours, minutes, seconds) => {
    return seconds + minutes * 60 + hours * 60 * 60;
  }

  const startTimer = () => {
    setTimerOn(true)
    // let  timer = setInterval(countDown, 1000)
    console.log('timer Started')
  }

  const countDown = () => {
    const  { hours, minutes, seconds } = time;
    console.log('hoursIn: ', hours)
    let c_seconds = convertToSeconds(hours, minutes, seconds);

    if(c_seconds) {
      // seconds change
      seconds ? setTime({seconds: seconds - 1}) : setTime({seconds: 59});

      // minutes change
      if(c_seconds % 60 === 0 && minutes) {
        setTime({minutes: minutes - 1});
      }

      // when only hours entered
      if(!minutes && hours) {
        setTime({minutes: 59});
      }

      // hours change
      if(c_seconds % 3600 === 0 && hours) {
        setTime({hours: hours - 1});
      }

    } else {
      clearInterval(setInterval(countDown, 1000));
    }
  }

  const stopTimer = () => {
    setTimerOn(false)

    // clearInterval(setInterval(countDown, 1000));
  }

  const resetTimer = () => {
    setTime({
      hours: 0,
      minutes: 0,
      seconds: 0
    });
   hoursInput.current.value = 0;
   minutesInput.current.value = 0;
   secondsInput.current.value = 0;
  }


    const { hours, minutes, seconds } = time;
    console.log('hoursBelow: ', hours)

    return (
      <>
      <div className="App">
         <h1 className="title"> (( Time To Journal )) </h1>
         <div className="inputGroup">
            <h3>Hrs</h3>
            <input ref={hoursInput} type="number" placeholder={0}  name="hours"  onChange={inputHandler} />
            <h3>Min</h3>
            <input  ref={minutesInput} type="number"  placeholder={0}   name="minutes"  onChange={inputHandler} />
            <h3>Sec</h3>
            <input   ref={secondsInput} type="number"  placeholder={0}  name="seconds"  onChange={inputHandler} />
         </div>
         <div>
            <button onClick={startTimer} className="start">start</button>
            <button onClick={stopTimer}  className="stop">stop</button>
            <button onClick={resetTimer}  className="reset">reset</button>
         </div>
         <h1> Timer {hours}: {minutes} : {seconds} </h1>
      </div>
      </>
    );

}

export default CountDownTimer;