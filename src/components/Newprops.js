import React, { Component } from "react";

class NewProps extends Component {
  render() {
    return (
      <p style={{ fontSize: 30, fontWeight: "bold" }}>{this.props.children}</p>
    );
  }
}

export default NewProps;
