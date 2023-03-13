import React from "react";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch("https://640b1ad665d3a01f98108525.mockapi.io/items")
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, []);

  const onAddToCart = (obj) => {
    setCartItems([...cartItems, obj]);
  };
  console.log(cartItems);
  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer items={cartItems} onCloseCart={() => setCartOpened(false)} />
      )}
      <Header onClickCart={() => setCartOpened(true)} />

      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items.map((item) => (
            <Card
              name={item.name}
              price={item.price}
              imageUrl={item.imageUrl}
              onPlus={(obj) => onAddToCart(obj)}
              onFavourite={() => console.log("Добавил в закладки")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
