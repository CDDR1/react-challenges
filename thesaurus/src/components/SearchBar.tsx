type Props = {
  value: string;
  onSubmitHandler: React.FormEventHandler<HTMLFormElement>;
  onChangeHandler: (e: string) => void;
};

const SearchBar = ({ value, onSubmitHandler, onChangeHandler }: Props) => {
  return (
    <>
      <form className="search-form" onSubmit={onSubmitHandler}>
        <label htmlFor="word">Search word</label>
        <div className="input-wrapper">
          <input
            value={value}
            onChange={(e) => onChangeHandler(e.target.value)}
            type="text"
            id="word"
            placeholder="type here..."
          />
          <button className="search-btn" type="submit">
            Search
          </button>
        </div>
      </form>
    </>
  );
};

export default SearchBar;
