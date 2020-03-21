import React, { Component } from "react";
import App from "./App";

export default class SecondDiv extends Component {
  render() {
    return (
      <div>
        <div style={{ width: 100, height: 100, backgroundColor: "green" }}>
          <p>Name : {this.props.object.name}</p>
        </div>
      </div>
    );
  }
}
