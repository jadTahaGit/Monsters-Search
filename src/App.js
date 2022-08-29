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
      monsters: [
        {
          name: 'Taha',
          company: 'Coachync',
          year: '2022',
          id: '1',
        },
        {
          name: 'Karim',
          company: 'Coachync',
          year: '2022',
          id: '2',
        },
        {
          name: 'Ali',
          company: 'Coachync',
          year: '2022',
          id: '3',
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.monsters.map((monster) => {
            return <h1 key={monster.id}>{monster.name}</h1>;
          })}
          <button onClick={() => {}}>Change Name</button>
        </header>
      </div>
    );
  }
}

export default App;
