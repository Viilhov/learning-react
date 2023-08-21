import { Component } from "react";

export default class Message extends Component {
  render() {
    return <h1>Message: {this.props.messagecontent}</h1>;
  }
}
