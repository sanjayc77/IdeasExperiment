import * as React from "react";
import { render } from "react-dom";
import Console from "react-console-component";
import "react-console-component/main.css";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

interface EchoConsoleState {
  count: number;
}

class EchoConsole extends React.Component<{}, EchoConsoleState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0
    };
  }
  child: {
    console?: Console;
  } = {};
  echo = (text: string) => {
    this.child.console.log(text);
    this.setState(
      {
        count: this.state.count + 1
      },
      this.child.console.return
    );
  };
  promptLabel = () => {
    return this.state.count + "> ";
  };
  render() {
    return (
      <Console
        ref={ref => (this.child.console = ref)}
        handler={this.echo}
        promptLabel={this.promptLabel}
        welcomeMessage={
          "Welcome to the react-console demo!\nThis is an example of a simple echo console."
        }
        autofocus={true}
      />
    );
  }
}

const rootElement = document.getElementById("root");
render(<EchoConsole />, rootElement);
