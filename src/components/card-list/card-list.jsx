import { Component } from 'react';
import './card-list.css';
import Card from '../card/card';

class CardList extends Component {
  render() {
    const { monsters, className } = this.props;
    return (
      <div className={className}>
        {monsters.map((monster) => {
          const { name, email, id } = monster;
          return <Card className="card-container" monster={monster}></Card>;
        })}
      </div>
    );
  }
}

export default CardList;
