// import React, {useEffect, useState} from 'react';
// import useInfiniteScroll from './infiniteScroll';

// const List = (blogs) => {
//   console.log('blogs', blogs.blogs)
//   const [listItems, setListItems] = useState(blogs.blogs)
//   console.log('li', listItems)
//   const[showItems, setShowItems] = useState()
//   const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);
//   let end = 4;

//   useEffect(() => {
//     setListItems(blogs.blogs)
//   }, [blogs.blogs])

//   function fetchMoreListItems() {
//     setTimeout(() => {
//       setListItems(prevState => ([...prevState, blogs.blogs]));
//       setIsFetching(false);
//     }, 2000);
//   }

//   // const fetchMoreListItems = () => {
//   //   setTimeout(() => {
//   //     setListItems(prevState =>
//   //       ([...prevState, ...Array.from(Array(20).keys(), n => n + prevState.length + 1)]));
//   //     setIsFetching(false);
//   //   }, 2000);
//   // }

//   return (
//     <div>
//       <ul className="list-group mb-2">
//         {/* {listItems.map(listItem => <li className="list-group-item">List Item {listItem}</li>)} */}
//       </ul>
//       {isFetching && 'Fetching more list items...'}
//     </div>
//   )
// }

// export default List;