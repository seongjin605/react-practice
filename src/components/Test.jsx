import React, { useState, useEffect } from 'react';

// function Test() {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     function onClick() {
//       setCount(count + 1);
//       console.log('count:', count);
//     }
//     window.addEventListener("click", onClick);
//     return () => window.removeEventListener("click", onClick);
//   }, [count]);
//   return <button onClick={() => setCount(count + 1)}>increase</button>;
// }

const actions = {
  init() {
    return { count: 0 };
  },
  increment(state) {
    return { count: state.count + 1 };
  },
  decrement(state) {
    return { count: state.count - 1 };
  }
};

class Test extends React.Component {
  state = actions.init();

  onIncrement = () => {
    this.setState(actions.increment);
  };
  onDecrement = () => {
    this.setState(actions.decrement);
  };
  render() {
    window.addEventListener('click', this.onIncrement);
    window.addEventListener('click', this.onDecrement);
    return (
      <div>
        <button onClick={() => this.onIncrement}>increase</button>
        <button onClick={() => this.onDecrement}>decrement</button>
      </div>
    );
  }
  componentWillUnmount() {
    window.removeEventListener('click', this.onIncrement);
    window.removeEventListener('click', this.onDecrement);
  }
}
export default Test;
