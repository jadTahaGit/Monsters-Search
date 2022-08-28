import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  // whenever constructed
  constructor() {
    // call the constructor of extended Class "Component"
    super();

    // initiate the state
    this.state = {
      name: 'Taha',
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hey {this.state.name}</p>
          <button
            onClick={() => {
              this.setState({ name: 'Jad' });
            }}
          >
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
