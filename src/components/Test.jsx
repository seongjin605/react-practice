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
    this.setState(state => ({ count: state.count - 1 }));
  };
  onClickInc = (e) => {
    e.preventDefault();
    // https://react.vlpt.us/basic/24-class-component.html
    this.setState(
      {
        count: this.state.count + 1
      },
      () => {
        console.log('count:', this.state.count);
      }

    );
  };
  componentDidMount() {
    console.log('check1')
  }
  componentDidUpdate() {
    console.log('count:', this.state)
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
