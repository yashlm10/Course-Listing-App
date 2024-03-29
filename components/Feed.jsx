"use client";

import { useState, useEffect } from 'react';
import CourseCard from './CourseCard';
import PaginationControl from './PaginationControl';


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
  const [pagination, setPagination] = useState({page: 1, per_page: 8})
  
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
      const response = await fetch(`/api/course?page=${pagination.page}&per_page=${pagination.per_page}`);
      const data = await response.json();

      setPosts(data);
     }

     fetchPosts();
  }, [pagination]);

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

        {searchText ? (<>
          <CourseCardList
            data={searchedResults}
          />
          
      <PaginationControl pagination={pagination} setPagination={setPagination} />
      </>
        ) : (<>
          <CourseCardList data={posts} />
      <PaginationControl pagination={pagination} setPagination={setPagination} />
      </>
        )}
    </div>
  )
}

export default Feed