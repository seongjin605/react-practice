import React from 'react';

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
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  onClickHello = e => {
    e.preventDefault();
    alert('hello world');
  };
  onClickDec = () => {
    const { count } = this.state;
    this.setState({ count: count - 1 });
  };
  onClickInc = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };
  componentDidMount() {
    const theme = this.context;
    console.log('theme:', theme);
  }
  render() {
    return (
      <div>
        <button onClick={this.onClickHello}>hello</button>
        <button onClick={this.onClickDec}>decrease</button>
        <button onClick={this.onClickInc}>increase</button>
      </div>
    );
  }
}
export default Test;
