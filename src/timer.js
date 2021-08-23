import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

// const Children = ({ remainingTime }) => {
//   const hours = Math.floor(remainingTime / 3600)
//   const minutes = Math.floor((remainingTime % 3600) / 60)
//   const seconds = remainingTime % 60

//   return `${hours}:${minutes}:${seconds}`
// }

const Timer = () => (
  <CountdownCircleTimer
    // isPlaying={true}
    duration={10}
    colors={[
      ['#004777', 0.33],
      ['#F7B801', 0.33],
      ['#A30000', 0.33],
    ]}
  >
    <Children />
    {/* {({ remainingTime }) => remainingTime} */}
  </CountdownCircleTimer>
)

export default Timer;