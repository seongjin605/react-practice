import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './board/Search';
import Posts from './board/Post';
import Pagination from './board/Pagination';

function Board() {
  const [originPosts, setOriginPosts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    getPosts();
    setLoading(true);
    async function getPosts() {
      try {
        const { data: posts = [] } = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(posts);
        setOriginPosts(posts);
        return [posts];
      } catch (error) {
        console.error('getPosts error:', error);
      }
    }
    setLoading(false);
  }, [originPosts.length]);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  let currentPosts = [];
  if (posts.length > 0) {
    currentPosts = posts.slice(indexOfFirst, indexOfLast);
  }
  console.log('currentPosts:', currentPosts);

  return (
    <>
      <Search posts={posts} originPosts={originPosts} setPosts={setPosts} />
      <Posts posts={currentPosts} loading={loading}></Posts>
      <Pagination
        currentPage={currentPage}
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={setCurrentPage}
      ></Pagination>
    </>
  );
}

export default Board;
