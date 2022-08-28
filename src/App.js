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
      company: 'Coachync',
      year: '2022',
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hey {this.state.name}, i work at {this.state.company} since{' '}
            {this.state.year}
          </p>
          <button
            onClick={() => {
              this.setState(
                () => {
                  console.log(this.state);
                  return {
                    name: 'Jad',
                    company: 'YOTTA DEV',
                    year: '2020',
                  };
                },
                () => {
                  console.log(this.state);
                }
              );
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
