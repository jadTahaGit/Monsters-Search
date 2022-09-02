import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  // whenever constructed
  constructor() {
    console.log('constructor');

    // call the constructor of extended Class "Component"
    super();

    // initiate the state
    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    console.log('componentDidMount');

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  render() {
    console.log('render');
    return (
      <div className="App">
        <input
          type="search"
          className="search-box"
          placeholder="search Monster"
          onChange={(event) => {
            console.log(event.target.value);
            const searchStirng = event.target.value.toLocaleLowerCase();
            // Immutability
            const filteredMonsters = this.state.monsters.filter((monster) => {
              return monster.name.toLocaleLowerCase().includes(searchStirng);
            });
            this.setState(() => {
              return { monsters: filteredMonsters };
            });
          }}
        />
        {this.state.monsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
