import { Component } from "react";

export default class Decrement extends Component {
  constructor() {
    super();
    this.state = {
      counter: 10,
    };
  }

  decrement() {
    this.setState({
      counter: this.state.counter - 1,
    });
  }

  render() {
    return (
      <div>
        <h3>Count value is: {this.state.counter}</h3>
        <button onClick={() => this.decrement()}>Decrement</button>
      </div>
    );
  }
}
