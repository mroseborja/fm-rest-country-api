import "./Search.css";

const Search = ({ onChange }) => {
  const handleChange = (evt) => {
    onChange(evt.target.value);
  };

  return (
    <div className="search__box custom-input">
      <ion-icon name="search-outline" aria-label="search-icon"></ion-icon>
      <input
        type="text"
        placeholder="Search for a country..."
        onChange={handleChange}
        aria-label="Search a country"
      />
    </div>
  );
};

export default Search;
