import React, { useState } from 'react';

function Title(props) {
  return <p>{props.title}</p>;
}

function Todo() {
  const [count, setCount] = useState(0);
  function onClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <Title title={`현재 카운트: ${count}`} />
      <button onClick={onClick}>증가</button>
    </div>
  );
}

export default Todo;
