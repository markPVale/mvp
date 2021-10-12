import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from './card';
import moment from 'moment';

const DisplayAllEntries = () => {
  const [limit, setLimit] = useState(3)
  const [posts, setPosts] = useState([]);
  const [postLength, setPostLength] = useState(posts.length)
  useEffect(() => {
    getPosts()
  }, [limit])

  let blogEntry;

  const getPosts = async () => {
    await axios.get('/allEntries')
    .then((response) => {
      let {rows} = response.data;
      setPosts(rows.slice(0, limit))
      setPostLength(rows.length)
    })
    .catch((err) => {
      console.log(err.name + ':' + err.message);
    })
  }

  const handleClick = () => {
    if (limit >= postLength) {
      setLimit(3)
    } else {
      setLimit(limit + 3)
    }

  }
  return (
    <div>
      <div> </div>
      <div>{blogEntry = posts.map((post) => {
       return (
       <div key={post.pid}>
       <Card title={post.title} issues={post.issues} body={post.body} date={moment(post.date_created).format('L')}/>
       </div>
       )
      })}</div>
      <button onClick={() => {handleClick()}} className='additional'> additional posts </button>
    </div>
  )
}

export default DisplayAllEntries;