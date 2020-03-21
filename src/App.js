import React, { Component } from "react";
import NewComponent from "./NewComponent";
import NewProps from "./components/Newprops";

class App extends Component {
  state = {
    name: "ali murtuza",
    age: 21
  };

  onFormSubmit = event => {
    event.preventDefault();
    console.log(event);

    // this.state["name"] = "ali haider";
    this.setState({
      name: "ali haider"
    });
  };

  render() {
    return (
      <div style={{ width: "100%", height: 400 }}>
        {/* <NewComponent name="tallal" /> */}
        <NewProps>{this.state.name}</NewProps>

        <form onSubmit={this.onFormSubmit}>
          <input value={this.state.name} type="text" placeholder="name" />
          <input type="text" placeholder="age" />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
