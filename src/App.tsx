import React from "react";

type Props = {
  lang: string;
};

type State = {
  who: string;
};

class App extends React.Component<Props, State> {
  state: State = {
    who: "World"
  };

  render() {
    return (
      <div>
        <h1>App component</h1>
        <p>
          Hello {this.state.who} in {this.props.lang}!
        </p>
      </div>
    );
  }
}

export default App;
