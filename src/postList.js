import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from './card';
import moment from 'moment';
// import List from './list';

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
      console.log('rows', rows);
      console.log('date', rows[0].date_created);

      setPosts(rows.slice(0, limit))
      setPostLength(rows.length)
    })
    .catch((err) => {
      console.log(err.name + ':' + err.message);
    })
  }

  console.log('postLength', postLength)
  const handleClick = () => {
    console.log('clicked me')
    if (limit >= postLength) {
      setLimit(3)
      console.log('overLimit')
    } else {
      setLimit(limit + 3)
      console.log('limit', limit);
    }


  }
  console.log('posts', posts);
  return (
    <div>
      <div> </div>
      {/* <List blogs={posts}/> */}
      <div>{blogEntry = posts.map((post) => {
       return (
       <div key={post.pid}>
       <Card title={post.title} issues={post.issues} body={post.body} date={moment(post.date_created).format('L')}/>
       </div>
       )
      })}</div>
      <button onClick={() => {handleClick()}}> click </button>
    </div>
  )
}

export default DisplayAllEntries;