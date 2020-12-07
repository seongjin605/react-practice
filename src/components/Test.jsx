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

class Test extends React.Component {
  state = {
    count1: 0,
    count2: 0
  };
  onClick = () => {
    const { count1 } = this.state;
    // this.setState({ count1: count1 + 1 });
    // this.setState({ count1: count1 + 1 });

    this.setState(prevState => ({ count1: prevState.count1 + 1 }));
    this.setState(prevState => ({ count1: prevState.count1 + 1 }));
    console.log('count1:', count1);
  };
  render() {
    window.addEventListener('click', this.onClick);
    return <button onClick={() => this.onClick}>increase</button>;
  }
}
export default Test;
