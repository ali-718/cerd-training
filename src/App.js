import React, { Component } from "react";
import SecondDiv from "./secondDiv";

class App extends Component {
  myname = "I am ali";

  mydetails = {
    name: "ali",
    age: 21
  };

  render() {
    return (
      <div>
        <div style={{ width: 100, height: 100, backgroundColor: "red" }}></div>
        <SecondDiv name={this.mydetails} />
        <p>{this.myname}</p>
        <p>{this.mydetails.name}</p>
      </div>
    );
  }
}

export default App;
