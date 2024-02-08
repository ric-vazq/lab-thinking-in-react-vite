function SearchBar(props) {
  const { searchFunction } = props;
  return (
    <div className="flex justify-center mx-auto w-full mb-10">
      <input
        onChange={(event) => searchFunction(event)}
        type="search"
        placeholder="Filter products here..."
        className="w-11/12 border text-center"
      />
    </div>
  );
}

export default SearchBar;
