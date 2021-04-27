import React, { useState } from 'react';

const searchPosts = (searchText, posts, originPosts, setPosts) => {
  if (!searchText) return setPosts(originPosts);
  searchText = searchText.toLowerCase();
  const searchedPosts = posts.filter(post => {
    const { title = '', body = '' } = post;
    return (
      title.toLowerCase().indexOf(searchText) !== -1 ||
      body.toLowerCase().indexOf(searchText) !== -1
    );
  });
  setPosts(searchedPosts);
};

function Search({ originPosts, posts, setPosts }) {
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
      searchPosts(search, posts, originPosts, setPosts);
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
      <button onClick={() => searchPosts(search, posts, originPosts, setPosts)}>검색</button>
    </>
  );
}

export default Search;
