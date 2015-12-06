import React  from 'react';
import Rebase from 're-base';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h1>
      hello
    </h1>
  }
};

React.render(<App />, document.getElementById('app'));
