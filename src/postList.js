import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from './card';

const DisplayAllEntries = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts()
  }, [])

  let blogEntry;

  const getPosts = async () => {
    await axios.get('/allEntries')
    .then((response) => {
      let {rows} = response.data;
      console.log('rows', rows);
      setPosts(rows)
    })
    .catch((err) => {
      console.log(err.name + ':' + err.message);
    })
  }

  return (
    <div>
      <div> entries </div>
      <div>{blogEntry = posts.map((post) => {
       return (
       <div key={post.pid}>
       <Card title={post.title} issues={post.issues} body={post.body.slice(0,15) + '...'}/>
       </div>
       )
      })}</div>
    </div>
  )
}

export default DisplayAllEntries;