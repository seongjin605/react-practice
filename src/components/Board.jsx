import React, { useState, useEffect, useDebugValue } from 'react';
import axios from 'axios';
import Search from './board/Search';
import Posts from './board/Post';
import Pagination from './board/Pagination';

function Board() {
  const [dependency, setDependency] = useState(0);
  const [originPosts, setOriginPosts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  useDebugValue(`${posts}`);
  useDebugValue(`${originPosts}`);
  useEffect(() => {
    getPosts();
    async function getPosts() {
      setLoading(true);
      try {
        const { data: posts = [] } = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(posts);
        setOriginPosts(posts);
        setDependency(...{ id: posts.length });
        setLoading(false);
        return [posts];
      } catch (error) {
        setLoading(false);
        console.error('getPosts error:', error);
      }
    }
  }, [dependency.id]);

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
