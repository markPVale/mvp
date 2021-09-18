import React from 'react';

const Card = ({title, issues, body, key}) => {
  return (
    <div className='card'>
      <div>{title}</div>
      <div>{issues}</div>
      <div>{body}</div>
    </div>
  )
}

export default Card;