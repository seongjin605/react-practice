import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  useEffect(() => {
    document.title = `업데이트 횟수: ${count}`;
    console.log('useEffect!!!');
  }, [count]);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Plus count</button>
      <button onClick={() => setCount2(count2 + 1)}>Plus count2</button>
    </>
  );
}

export default Counter;
