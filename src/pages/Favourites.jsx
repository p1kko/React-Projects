import Card from "../components/Card";

function Favourites({ items, onAddToFavourite }) {
  return (
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>Мои Закладки</h1>
        {/* <div className="search-block d-flex">
          <img src="/img/search.svg" alt="Search" />
          <input
            onChange={onChangeInputValue}
            type="text"
            placeholder="Поиск..."
          />
        </div> */}
      </div>

      <div className="d-flex flex-wrap">
        {items.map((item) => (
          <Card
            key={item.imageUrl}
            name={item.name}
            price={item.price}
            imageUrl={item.imageUrl}
            favourited={true}
            onFavourite={onAddToFavourite}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Favourites;
