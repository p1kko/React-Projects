import Card from "../components/Card";

function Home({
  items,
  searchValue,
//   setSearchValue,
  onChangeInputValue,
  onAddToFavourite,
  onAddToCart,
}) {
  return (
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>
          {searchValue ? `Поиск по запросу: ${searchValue}` : "Все кроссовки"}
        </h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="Search" />
          <input
            onChange={onChangeInputValue}
            type="text"
            placeholder="Поиск..."
          />
        </div>
      </div>

      <div className="d-flex flex-wrap">
        {items
          .filter((item) =>
            item.name.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((item) => (
            <Card
              key={item.imageUrl}
              name={item.name}
              price={item.price}
              imageUrl={item.imageUrl}
              onPlus={(obj) => onAddToCart(obj)}
              onFavourite={onAddToFavourite}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
