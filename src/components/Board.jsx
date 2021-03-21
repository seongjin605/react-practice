import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Posts from './board/Post';
import Pagination from './board/Pagination';

function Board() {
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
        // if (posts.length > 0) {
        //   setPosts(posts.slice(0, 15));
        // }
        setPosts(posts);
        return [posts];
      } catch (error) {
        console.error('getPosts error:', error);
      }
    }
    setLoading(false);
  }, []);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = posts.slice(indexOfFirst, indexOfLast);
  console.log('currentPosts:', currentPosts);

  return (
    <>
      <Posts posts={currentPosts} loading={loading}></Posts>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={setCurrentPage}
      ></Pagination>
    </>
  );
}

export default Board;
