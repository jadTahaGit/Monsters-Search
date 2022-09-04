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
      searchField: '',
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
            // console.log(this.state);
          }
        )
      );
  }

  onSearchChange = (event) => {
    // console.log(event.target.value);
    const searchField = event.target.value.toLocaleLowerCase();
    // Immutability
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    console.log('render');

    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
        <input
          type="search"
          className="search-box"
          placeholder="search Monster"
          onChange={this.onSearchChange}
        />
        {filteredMonsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
