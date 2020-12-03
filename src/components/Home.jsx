import React,{useState, useEffect} from 'react';

function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = count;
  });
  return <h2>Home</h2>;
}

export default Home;
