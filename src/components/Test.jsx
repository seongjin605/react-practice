import React from 'react';

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
  onClickDec = (e) => {
    e.preventDefault();
    const { count } = this.state;
    this.setState({ count: count - 1 });
  };
  onClickInc = (e) => {
    e.preventDefault();
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };
  componentDidMount() {
    console.log('check1')
  }
  componentDidUpdate() {
    console.log('check2')
  }
  render() {
    const buttons = (
      <React.Fragment>
        <button onClick={this.onClickHello}>HelloWorld</button>
        <button onClick={this.onClickDec}>decrease</button>
        <button onClick={this.onClickInc}>increase</button>
      </React.Fragment>
    )
    return (
      <>
      <h1>Hello Test Component!</h1>
      {buttons}
      </>
    );
  }
}
export default Test;
