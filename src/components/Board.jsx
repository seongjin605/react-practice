import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Posts from './board/Post';

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
        const { data = [] } = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(data);

        return data;
      } catch (error) {
        console.error('getPosts error:', error);
      }
    }
    setLoading(false);
  }, []);

  console.log('posts:', posts);

  return (
    <div>
      <Posts posts={posts} loading={loading}></Posts>
    </div>
  );
}

export default Board;
