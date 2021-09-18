import React, {useState, useEffect} from 'react';

const useInfiniteScroll = (calback) => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    window.AddEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    callback(() => {
      console.log('called back');
    });
  }, [isFetching]);

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !==
       document.documentElement.offsetHeight || isFetching) return;
    setIsFetching(true);
  }

 return [isFetching, setIsFetching];

};

export default useInfiniteScroll;