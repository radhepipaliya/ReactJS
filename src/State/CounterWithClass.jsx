import React, { Component } from 'react'

export default class CounterWithClass extends Component {
  constructor(){
    super();
    this.state={
        count:0,
    };
    this.increment = this.increment.bind(this);
  }

//   increment = () => {
//     this.setState({count: this.state.count+1});
//   }

    
  increment(){
    this.setState({count: this.state.count+1});
  }
  
    render() {
    return (
      <div>
        <h1>Counter demo by using class Based component</h1>
        <h2>count:{this.state.count}</h2>
        <button onClick={this.increment}>Increment Count</button>
      </div>
    )
  }
}
