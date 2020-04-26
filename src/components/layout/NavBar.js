import React, { Component } from "react";

export default class NavBar extends Component {
  state = {
    language: "en",
  };

  setLanguage(language) {
    this.setState({
      language,
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
          <a className="navbar-brand mr-auto text-white" href="#">
            Pokedex
          </a>
          <a
            className="nav-item mr-4 text-white"
            onClick={() => this.setLanguage('english')}
          >
            English
          </a>
          <a
            className="nav-item text-white"
            onClick={() => this.setLanguage('spanish')}
          >
            Español
          </a>
        </nav>
      </div>
    );
  }
}
