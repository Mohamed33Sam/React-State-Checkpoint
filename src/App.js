import { Profile } from "./Components/Profile";
import "./App.css";
import React, { useState } from "react";
class App extends React.Component {
  state = {
    person: {
      name: "Mohamed",
      profession: "student",
      imgSrc: "/710804.jpg",
    },
    shows: true,
  };

  handleClick = () => {
    this.setState({ shows: !this.state.shows });
  };
  render() {
    return (
      <>
        {this.state.shows ? (
          <Profile
            name={this.state.person.name}
            profession={this.state.person.profession}
            imgSrc={this.state.person.imgSrc}
          />
        ) : null}
        <button onClick={this.handleClick}>Click here!</button>
      </>
    );
  }
}

export default App;
