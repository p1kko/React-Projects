import React from "react";
import Card from "../components/Card";
import Slider from "../components/Slider/Slider";



function Home({
  items,
  searchValue,
  //   setSearchValue,
  onChangeInputValue,
  onAddToFavourite,
  onAddToCart,
  isLoading
}) {

  const images = [
    "./img/Slider/slide-1.jpg",
    "./img/Slider/slide-2.jpg",
    "./img/Slider/slide-3.jpg",
    "./img/Slider/slide-4.jpg"
  ];

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
      <Slider images={images} />
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
