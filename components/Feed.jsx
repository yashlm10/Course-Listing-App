"use client";

import { useState, useEffect } from 'react';
import CourseCard from './CourseCard';

const PrompCardList = ({data}) => {
  return (
    <div className='mt-16 card-layout'>
       {data.map((post) => (
        <CourseCard
          key={post._id}
          post={post}
        />
       ))}
    </div>
  );
}


const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([]);


  const handleSearchChange = (e) => {
    
  }
  //from feed making a get request to our own next api
  useEffect(() => {
     const fetchPosts = async () => {
      const response = await fetch('/api/course');
      const data = await response.json();

      setPosts(data);
     }

     fetchPosts();
  }, []);

  return (
    <section className='feed'>
        <form className='relative w-full flex-center'>
            
            <input
              type='text'
              placeholder='Search for courses'
              value={searchText}
              onChange={handleSearchChange}
              className='search_input'
            />
        </form>

        <PrompCardList
          data={posts}
        />
    </section>
  )
}

export default Feed