import React, { useState } from 'react';

const searchPosts = (searchText, posts, originPosts, setPosts, setCurrentPage) => {
  if (!searchText) return setPosts(originPosts);
  searchText = searchText.toLowerCase();
  const searchedPosts = posts.filter(post => {
    const { title = '', body = '' } = post;
    return (
      title.toLowerCase().indexOf(searchText) !== -1 ||
      body.toLowerCase().indexOf(searchText) !== -1
    );
  });
  console.log('searchedPosts:', searchedPosts);
  setPosts(searchedPosts);
  setCurrentPage(1);
};

function Search({ originPosts, posts, setPosts, setCurrentPage }) {
  const [search, setSearch] = useState('');
  const handleInputChange = event => {
    const {
      target: { value = '' }
    } = event;
    setSearch(value);
    if (!value) {
      return setPosts(originPosts);
    }
  };
  const handleInputKeyDown = event => {
    if (event.key === 'Enter') {
      searchPosts(search, posts, originPosts, setPosts, setCurrentPage);
    }
  };
  return (
    <>
      <input
        type="text"
        value={search}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
      />
      <button onClick={() => searchPosts(search, posts, originPosts, setPosts, setCurrentPage)}>
        검색
      </button>
    </>
  );
}

export default Search;
