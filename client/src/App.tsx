import * as React from "react";
import "./App.css";

import logo from "./logo.svg";
/* tslint:disable:no-console */
class App extends React.Component {
  public async componentDidMount() {
    let res;
    try {
      res = await fetch("/api/json-data", { method: "GET" });
    } catch (e) {
      console.log("error: ", e);
    }

    if (res) {
      if (res.status >= 400) {
        console.log(`error ${res.status}: `, res);
      } else {
        console.log("success: ", res);
      }
    }
  }
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
