import './card-list.css';
import Card from '../card/card';

const CardList = ({ monsters, className }) => {
  return (
    <div className={className}>
      {monsters.map((monster) => {
        return <Card className="card-container" monster={monster}></Card>;
      })}
    </div>
  );
};

export default CardList;
