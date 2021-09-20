import React, {useState} from 'react';

const Card = ({title, issues, body, date, key}) => {
  let shortBody = body.slice(0, 50)
  const [postBody, setPostBody] = useState(shortBody)

  const expandCard = () => {
    if (postBody.length === 50) {
      setPostBody(body)
    } else {
      setPostBody(shortBody);
    }
  }

  const handleClick = () => {
    console.log('clicked card', {body})
    expandCard()
  }

  return (
    <div className='card'>
      <div className='cardHeading'>{title}</div>
      <div className='cardDate'>{date}</div>
      <div className='cardIssues'>{issues}</div>
      <div className='cardBody'>{postBody}</div>
      <button onClick={() => {handleClick()}}> click </button>
    </div>
  )
}

export default Card;