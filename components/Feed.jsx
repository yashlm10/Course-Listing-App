"use client";

import { useState, useEffect } from 'react';
import CourseCard from './CourseCard';


const CourseCardList = ({data}) => {
  return (
    <div className='container w-100 h-100' style={{paddingTop: 12}}>
      <div className='row gy-3'>
        {data.map((post) => (
          <CourseCard
           key={post._id}
           post={post}
          />
        ))}
      </div>
    </div>
  );
}


const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([]);
  const [searchedResults, setSearchedResults] = useState([]);
  
  const filterPrompts = (searchText) => {
    const regex = new RegExp(searchText, "i"); // 'i' flag for case-insensitive search
    return posts.filter(
      (item) =>
        regex.test(item.title)
    );
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    const searchResult = filterPrompts(e.target.value);
    setSearchedResults(searchResult);
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
    <div className='container'>
        <section>
          <form className='relative w-50 mx-auto flex-center' style={{marginTop: 50, marginBottom: 50}}>
            <input
              type='text'
              placeholder='Search for courses'
              value={searchText}
              onChange={handleSearchChange}
              className='search_input'
            />
          </form>
        </section>

        {searchText ? (
          <CourseCardList
            data={searchedResults}
          />
        ) : (
          <CourseCardList data={posts} />
        )}
    </div>
  )
}

export default Feed