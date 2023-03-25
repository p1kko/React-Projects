import React from "react";
import Card from "../components/Card";



function Home({
  items,
  searchValue,
  //   setSearchValue,
  onChangeInputValue,
  onAddToFavourite,
  onAddToCart,
  isLoading
}) {

  const renderItems = () => {
    const filteredItems = items.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    const arrayFake = new Array(10).fill({})

    return (isLoading ?  arrayFake : filteredItems).map((item) => (
      <Card
      // added={isItemAdded(item.name)}
        key={item.imageUrl}
        name={item.name}
        price={item.price}
        imageUrl={item.imageUrl}
        onPlus={(obj) => onAddToCart(obj)}
        onFavourite={onAddToFavourite}
        loading = {isLoading}
      />
    ));
  };

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

      <div className="d-flex flex-wrap">{renderItems()}</div>
    </div>
  );
}

export default Home;
