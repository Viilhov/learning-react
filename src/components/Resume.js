import { Component } from "react";

export default class Resume extends Component {
  render() {
    const { name } = this.props;
    return <h1>My name is {name}</h1>;
  }
}
