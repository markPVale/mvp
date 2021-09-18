import React, {useState, useEffect} from 'react';
import axios from 'axios';

const DisplayAllEntries = () => {

//   const [posts, setPosts] = useState();

  useEffect(() => {
    getPosts();
  }, [])

  const getPosts = () => {
    axios.get('/allEntries')
    .then((response) => {
      console.log('responseReact', response)
      let {rows} = response.data;
      console.log('rows', rows);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return (
    <div>
      <div> entries </div>
    </div>
  )
}

export default DisplayAllEntries;