import React, {useState, useContext, useEffect} from 'react';

const SetTimer = ({value, handleTime}) => {
  // const [time, setTime] = useState(0);
  // console.log('SetTimerprops', props)
  // const timeContext = React.createContext(time)
  // console.log('timeContext', timeContext)

  console.log('value', value.second, value.minute, value.hour)
  console.log('valueType', typeof value.second, typeof value.minute, typeof value.hour)

  // const handleChange = (e) => {
  //   // setTime(e.target.value);
  //   e.preventDefault()
  // }

  return (
    <>
      <form>
        <label>
          hour:
          <input
            value={value.hour || 0}
            type='number'
            name='hour'
            onChange={handleTime}
          >
          </input>
        </label>
        <label>
          minutes:
          <input
            value={value.minute || 0}
            type='number'
            name='minute'
            onChange={handleTime}
          >
          </input>
        </label>
        <label>
          seconds:
          <input
            value={value.second || 0}
            type='number'
            name='second'
            onChange={handleTime}
          >
          </input>
        </label>
      </form>
  </>
  )
}


export default SetTimer;