import React from "react";
import typewriter from "./typewriter";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="main">
        <header>
          <h1>
            AMIN<span style={headingStyle}>.</span>
          </h1>
          <nav>
            <a href="">Work</a>
            <a href="">Me</a>
            <a href="">Contact</a>
          </nav>
        </header>
        <div className="container py-5">
          <div className="output" id="output">
            <h2 className="cursor"></h2>
            <br />
            <h3></h3>
          </div>
          <br />
          <div>
            <i className="arrow down"></i>
          </div>
        </div>
        
      </div>
      <div className="work"></div>
    </div>
  );
}

var headingStyle = {
  color: "RGB(146, 139, 97)",
};

export default App;
