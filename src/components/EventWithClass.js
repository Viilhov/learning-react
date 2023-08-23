import { Component } from "react";

export default class EventWithClass extends Component {
  handleClick() {
    console.log("class based handeling");
  }
  render() {
    return (
      <div>
        <h3>Click button to find secret</h3>
        <button onClick={this.handleClick}>Click here</button>
      </div>
    );
  }
}
