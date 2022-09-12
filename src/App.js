import { Component } from 'react';
import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';
import './App.css';

class App extends Component {
  // whenever constructed
  constructor() {
    // call the constructor of extended Class "Component"
    super();

    // initiate the state
    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
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
    // Destructing
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className="app-title">Monsters Search Application</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder={'Search monsters'}
          className={'search-box'}
        />
        <CardList className={'card-list'} monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
