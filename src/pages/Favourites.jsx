import React from "react";
import Card from "../components/Card";
import  { AppContext }  from "../App";

function Favourites() {
  
  const {favourites, onAddToFavourite} = React.useContext(AppContext)
 
  return (
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>Мої закладки</h1>
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
        {favourites.map((item) => (
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
