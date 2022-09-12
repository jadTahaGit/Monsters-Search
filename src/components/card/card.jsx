import { Component } from 'react';
import './card.css';

class Card extends Component {
  render() {
    const { className, monster } = this.props;
    const { name, email, id } = monster;

    return (
      <div className={className} key={id}>
        <img
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
          alt={`monster ${name}`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;
