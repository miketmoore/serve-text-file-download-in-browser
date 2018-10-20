import * as download from "downloadjs";
import * as React from "react";
import "./App.css";

import logo from "./logo.svg";
/* tslint:disable:no-console */

interface IFormData {
  readonly data: Array<{
    readonly name: string;
    readonly value: string;
  }>;
  readonly method: "POST" | "GET";
  readonly url: string;
  readonly target: "_self" | "_blank";
}

function DownloadForm({ url, method, target, data }: IFormData) {
  return (
    <form action={url} method={method} target={target}>
      {data.map(({ name, value }, i) => {
        return <input key={i} type="hidden" name={name} value={value} />;
      })}
      <button type="submit">Download with Form</button>
    </form>
  );
}
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
    const formData: IFormData = {
      data: [],
      method: "POST",
      target: "_blank",
      url: "/api/download"
    };
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={this.download}>Download with downloadjs</button>
        <DownloadForm {...formData} />
      </div>
    );
  }
  private download = async () => {
    download("/data/hello.txt", "dlText.txt", "text/plain");
  };
}

export default App;
