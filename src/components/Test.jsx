import React, {useState, useEffect} from 'react';

/*
function Test() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `업데이트 횟수: ${count}`;
  });

  return <button onClick={() => setCount(count + 1)}>increase</button>;
}
*/

function Test() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    function onClick() {
      setCount(count + 1);
      console.log('count:', count);
    }
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, [count]);
  return <button onClick={() => setCount(count + 1)}>increase</button>;
}

export default Test;
