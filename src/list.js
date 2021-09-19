import React, {useState} from 'react';
import useInfiniteScroll form './useInfiniteScroll';

const List = () => {
  const [listItems, setListItems] =
  useState(Array.from(Array(30).keys(), n => n + 1))
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);

  const fetchMoreListItems = () => {
    setTimeout(() => {
      setListItems(prevState =>
        ([...prevState, ...Array.from(Array(20).keys(), n => n + prevState.length + 1)]));
      setIsFetching(false);
    }, 2000);
  }

  return (
    <div>

    </div>
  )

}