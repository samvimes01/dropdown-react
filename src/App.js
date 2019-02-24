import React, { Component } from "react";
import "./App.css";
import randomstring from "randomstring";
import Dropdown from "./Dropdown";

class App extends Component {
  constructor(props) {
    super(props);
    const randId = randomstring.generate.bind(null, 5);

    this.state = {
      closed: true,
      elements: [
        { id: randId(), value: "select", text: "Dropdown", selected: true},
        { id: randId(), value: "delete", text: "Delete" },
        { id: randId(), value: "rename", text: "Rename" },
        { id: randId(), value: "preview", text: "Preview" },
        { id: randId(), value: "other", classList: ["select-footer"], text: "Separated link" }
      ],
    };
    
    this.state.selected = this.state.elements[0];
  }

  handleClick = () => {
    this.setState(prevState => ({
      closed: !prevState.closed, 
    }));
  };

  handleSelect = (id) => {

    this.setState(prevState => (
      {
        selected: prevState.elements.find(el => el.id === id),
        closed: true,
      }
    ));
    
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <Dropdown 
            elements={this.state.elements}
            selected={this.state.selected}
            closed={this.state.closed}
            handleClick={this.handleClick}
            handleSelect={this.handleSelect} 
          />
        </header>
      </div>
    );
  }
}

export default App;
