import React, { Component } from "react";

class NewComponent extends Component {
  render() {
    return (
      <div style={{ width: "100%", height: 100, backgroundColor: "blue" }}>
        <h3>{this.props.name}</h3>
      </div>
    );
  }
}

export default NewComponent;
