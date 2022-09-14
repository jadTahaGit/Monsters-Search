import './search-box.css';

const SearchBox = () => {
  return (
    <div>
      <input
        type="search"
        className={`search-box ${this.props.className}`}
        placeholder={this.props.placeholder}
        onChange={this.props.onChangeHandler}
      />
    </div>
  );
};

export default SearchBox;
