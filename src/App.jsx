import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import axios from "axios";
import Favourites from "./pages/Favourites";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favourites, setIsFavourites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios.get("http://localhost:3001/sneakers").then((res) => {
      setItems(res.data);
    });

    axios.get("http://localhost:3001/cart").then((res) => {
      setCartItems(res.data);
    });
    axios.get("http://localhost:3001/favor").then((res) => {
      setIsFavourites(res.data);
    });
  }, []);

  const onAddToCart = (obj) => {
    axios.post("http://localhost:3001/cart", obj);
    setCartItems([...cartItems, obj]);
  };

  const onAddToFavourite = async (obj) => {
  try { 
     if (favourites.find((favObj) => favObj.id === obj.id)) {
    axios.delete(`http://localhost:3001/favor/${obj.id}`);
    setIsFavourites((prev) => prev.filter((item) => item.id !== obj.id));
  }else{
    const {data} = await axios.post("http://localhost:3001/favor", obj);
    setIsFavourites([...favourites, data]);
  }
    
  } catch (error) {
    alert('Не удалось добавить в закладки!')
  }

  };

  const onRemoveCartItem = (id) => {
    axios.delete(`http://localhost:3001/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangeInputValue = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onCloseCart={() => setCartOpened(false)}
          onRemove={onRemoveCartItem}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeInputValue={onChangeInputValue}
              onAddToFavourite={onAddToFavourite}
              onAddToCart={onAddToCart}
            />
          }
        />

        <Route
          path="/favourites"
          element={
            <Favourites
              items={favourites}
              onAddToFavourite={onAddToFavourite}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
