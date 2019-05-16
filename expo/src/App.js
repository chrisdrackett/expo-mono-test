import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Wrap, Text } from "ui";

function App() {
  return (
    <Wrap>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Text>
            Edit <code>src/App.js</code> and save to reload.
          </Text>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Wrap>
  );
}

export default App;
