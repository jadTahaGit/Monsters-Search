import { Component } from 'react';
import './card-list.css';
import './card.css';

class CardList extends Component {
  render() {
    const { monsters, className } = this.props;
    return (
      <div className={className}>
        {monsters.map((monster) => {
          const { name, email, id } = monster;
          return (
            <div className="card-container" key={id}>
              <img
                src={`https://robohash.org/${id}?set=set2&size=180x180`}
                alt={`monster ${name}`}
              />
              <h2>{name}</h2>
              <p>{email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;
