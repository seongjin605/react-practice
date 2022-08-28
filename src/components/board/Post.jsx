import React, { useEffect } from 'react';

const Posts = ({ posts, loading }) => {
  useEffect(() => {
    console.log('renderd');
  });
  return (
    <>
      {loading && <div> loading... </div>}
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
};
export default React.memo(Posts);
