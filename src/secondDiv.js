import React, { Component } from "react";

export default class SecondDiv extends Component {
  render() {
    return (
      <div>
        <div style={{ width: 100, height: 100, backgroundColor: "green" }}>
          <p>Name : {this.props.name.name}</p>
        </div>
      </div>
    );
  }
}
